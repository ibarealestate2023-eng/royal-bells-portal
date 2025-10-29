import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar } from "lucide-react";

const SecondaryEvents = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">Secondary Events</h1>
          <p className="text-xl">Academic Calendar & Activities</p>
        </div>
      </section>
      <section className="container py-20">
        <h2 className="text-4xl font-bold mb-12">Upcoming Events</h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          {["Mock Exams - March 2025", "Science Fair - April 2025", "Inter-School Debate - May 2025", "Graduation Ceremony - June 2025"].map((event, i) => (
            <Card key={i} className="p-6">
              <div className="flex items-center gap-4">
                <Calendar className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">{event}</h3>
              </div>
            </Card>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SecondaryEvents;
