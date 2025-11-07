import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventsCalendar from "@/components/EventsCalendar";

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
        <EventsCalendar section="secondary" />
      </section>
      <Footer />
    </div>
  );
};

export default SecondaryEvents;
