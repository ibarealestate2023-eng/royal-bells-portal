import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventsCalendar from "@/components/EventsCalendar";

const PrimaryEvents = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-secondary/80 text-white py-20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Primary Events</h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in animation-delay-200">
            Stay Updated with Our School Calendar
          </p>
        </div>
      </section>

      {/* Events Calendar */}
      <section className="container py-20">
        <EventsCalendar section="primary" />
      </section>

      <Footer />
    </div>
  );
};

export default PrimaryEvents;
