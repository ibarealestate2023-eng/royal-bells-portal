import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface SubscribeRequest {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: SubscribeRequest = await req.json();

    if (!email || !email.includes("@")) {
      return new Response(
        JSON.stringify({ error: "Valid email address is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Generate confirmation token
    const confirmationToken = crypto.randomUUID();

    // Check if email already exists
    const { data: existing } = await supabase
      .from("newsletter_subscribers")
      .select("email, confirmed")
      .eq("email", email)
      .single();

    if (existing) {
      if (existing.confirmed) {
        return new Response(
          JSON.stringify({ message: "Email already subscribed and confirmed" }),
          {
            status: 200,
            headers: { "Content-Type": "application/json", ...corsHeaders },
          }
        );
      } else {
        // Update the confirmation token for unconfirmed emails
        await supabase
          .from("newsletter_subscribers")
          .update({ confirmation_token: confirmationToken })
          .eq("email", email);
      }
    } else {
      // Insert new subscriber
      const { error: insertError } = await supabase
        .from("newsletter_subscribers")
        .insert({
          email,
          confirmation_token: confirmationToken,
          confirmed: false,
        });

      if (insertError) {
        console.error("Error inserting subscriber:", insertError);
        throw insertError;
      }
    }

    // Send confirmation email
    const confirmationUrl = `${req.headers.get("origin")}/newsletter/confirm?token=${confirmationToken}`;
    
    const emailResponse = await resend.emails.send({
      from: "Newsletter <onboarding@resend.dev>",
      to: [email],
      subject: "Confirm your newsletter subscription",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333;">Confirm Your Subscription</h1>
          <p>Thank you for subscribing to our newsletter!</p>
          <p>Please click the button below to confirm your subscription:</p>
          <a href="${confirmationUrl}" 
             style="display: inline-block; padding: 12px 24px; background-color: #0066cc; 
                    color: white; text-decoration: none; border-radius: 4px; margin: 20px 0;">
            Confirm Subscription
          </a>
          <p style="color: #666; font-size: 14px;">
            Or copy and paste this link into your browser:<br>
            ${confirmationUrl}
          </p>
          <p style="color: #999; font-size: 12px; margin-top: 40px;">
            If you didn't request this subscription, you can safely ignore this email.
          </p>
        </div>
      `,
    });

    console.log("Confirmation email sent:", emailResponse);

    return new Response(
      JSON.stringify({ 
        message: "Subscription successful! Please check your email to confirm.",
        success: true 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in newsletter-subscribe function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
