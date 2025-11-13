import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";

const NewsletterConfirm = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const confirmSubscription = async () => {
      const token = searchParams.get("token");

      if (!token) {
        setStatus("error");
        setMessage("Invalid confirmation link");
        return;
      }

      try {
        const { data, error } = await supabase.functions.invoke("newsletter-confirm", {
          body: { token },
        });

        if (error) throw error;

        setStatus("success");
        setMessage(data.message || "Your subscription has been confirmed!");
      } catch (error: any) {
        console.error("Confirmation error:", error);
        setStatus("error");
        setMessage(error.message || "Failed to confirm subscription");
      }
    };

    confirmSubscription();
  }, [searchParams]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="max-w-md w-full text-center space-y-6">
        {status === "loading" && (
          <>
            <Loader2 className="h-16 w-16 animate-spin mx-auto text-primary" />
            <h1 className="text-2xl font-bold">Confirming your subscription...</h1>
          </>
        )}

        {status === "success" && (
          <>
            <CheckCircle className="h-16 w-16 mx-auto text-green-500" />
            <h1 className="text-2xl font-bold text-foreground">Success!</h1>
            <p className="text-muted-foreground">{message}</p>
            <Link to="/">
              <Button>Go to Homepage</Button>
            </Link>
          </>
        )}

        {status === "error" && (
          <>
            <XCircle className="h-16 w-16 mx-auto text-destructive" />
            <h1 className="text-2xl font-bold text-foreground">Confirmation Failed</h1>
            <p className="text-muted-foreground">{message}</p>
            <Link to="/">
              <Button variant="outline">Go to Homepage</Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NewsletterConfirm;
