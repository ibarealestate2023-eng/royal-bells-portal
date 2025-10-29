import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";

const SecondaryAdmissions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">Secondary Admissions</h1>
          <p className="text-xl">Join Our Path to Excellence</p>
        </div>
      </section>
      <section className="container py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Requirements</h2>
        <Card className="p-8 max-w-3xl mx-auto">
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>Completed application form</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>Previous school transcripts</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>Entrance examination</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>Interview with parents and student</span>
            </li>
          </ul>
          <div className="mt-8 text-center">
            <Button asChild size="lg">
              <Link to="/contact">Apply Now</Link>
            </Button>
          </div>
        </Card>
      </section>
      <Footer />
    </div>
  );
};

export default SecondaryAdmissions;
