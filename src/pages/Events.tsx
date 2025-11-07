import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventsCalendar from "@/components/EventsCalendar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">School Events</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in animation-delay-200">
            Discover all upcoming events across our Primary, Secondary, and Nursery sections
          </p>
        </div>
      </section>

      {/* Section Quick Links */}
      <section className="container py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center hover-lift">
            <h3 className="text-xl font-bold mb-3 text-secondary">Primary Events</h3>
            <p className="text-muted-foreground mb-4">View events for primary school students</p>
            <Button asChild variant="outline">
              <Link to="/primary/events">View Primary Events</Link>
            </Button>
          </Card>
          
          <Card className="p-6 text-center hover-lift">
            <h3 className="text-xl font-bold mb-3 text-primary">Secondary Events</h3>
            <p className="text-muted-foreground mb-4">View events for secondary school students</p>
            <Button asChild variant="outline">
              <Link to="/secondary/events">View Secondary Events</Link>
            </Button>
          </Card>
          
          <Card className="p-6 text-center hover-lift">
            <h3 className="text-xl font-bold mb-3 text-accent">Nursery Events</h3>
            <p className="text-muted-foreground mb-4">View events for nursery children</p>
            <Button asChild variant="outline">
              <Link to="/nursery/events">View Nursery Events</Link>
            </Button>
          </Card>
        </div>
      </section>

      {/* All Events Calendar */}
      <section className="container py-20">
        <h2 className="text-4xl font-bold text-center mb-12">All School Events</h2>
        <EventsCalendar section="all" />
      </section>

      <Footer />
    </div>
  );
};

export default Events;
