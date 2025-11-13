import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const token = url.searchParams.get("token");

    if (!token) {
      return new Response(
        JSON.stringify({ error: "Confirmation token is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Find subscriber by token
    const { data: subscriber, error: findError } = await supabase
      .from("newsletter_subscribers")
      .select("*")
      .eq("confirmation_token", token)
      .single();

    if (findError || !subscriber) {
      return new Response(
        JSON.stringify({ error: "Invalid or expired confirmation token" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    if (subscriber.confirmed) {
      return new Response(
        JSON.stringify({ message: "Email already confirmed", success: true }),
        {
          status: 200,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Update subscriber to confirmed
    const { error: updateError } = await supabase
      .from("newsletter_subscribers")
      .update({
        confirmed: true,
        confirmed_at: new Date().toISOString(),
        confirmation_token: null,
      })
      .eq("id", subscriber.id);

    if (updateError) {
      console.error("Error confirming subscription:", updateError);
      throw updateError;
    }

    return new Response(
      JSON.stringify({ 
        message: "Subscription confirmed successfully!",
        success: true 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in newsletter-confirm function:", error);
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
