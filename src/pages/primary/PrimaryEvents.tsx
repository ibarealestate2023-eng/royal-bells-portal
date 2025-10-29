import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Clock } from "lucide-react";

const PrimaryEvents = () => {
  const upcomingEvents = [
    {
      title: "Parent-Teacher Conferences",
      date: "March 15-16, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Primary School Classrooms",
      description: "Individual meetings to discuss student progress and development"
    },
    {
      title: "Spring Concert",
      date: "March 22, 2025",
      time: "6:00 PM",
      location: "School Auditorium",
      description: "Primary students showcase their musical talents"
    },
    {
      title: "Science Fair",
      date: "April 5, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "Primary Multipurpose Hall",
      description: "Students present their science projects and experiments"
    },
    {
      title: "Sports Day",
      date: "April 19, 2025",
      time: "8:00 AM - 3:00 PM",
      location: "School Sports Field",
      description: "Annual athletics competition with various track and field events"
    },
    {
      title: "Cultural Day Celebration",
      date: "May 10, 2025",
      time: "11:00 AM - 2:00 PM",
      location: "School Grounds",
      description: "Celebrating diversity through food, music, and traditional dress"
    },
    {
      title: "End of Year Art Exhibition",
      date: "June 14, 2025",
      time: "9:00 AM - 12:00 PM",
      location: "Art Studio & Hallways",
      description: "Showcasing student artwork from throughout the year"
    }
  ];

  const pastEvents = [
    {
      title: "Welcome Back Assembly",
      date: "January 2025",
      description: "Kicked off the new term with exciting announcements"
    },
    {
      title: "Reading Week",
      date: "February 2025",
      description: "Special focus on literacy with guest authors and book activities"
    },
    {
      title: "Valentine's Day Celebration",
      date: "February 2025",
      description: "Kindness activities and friendship celebrations"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-secondary/80 text-white py-20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">Primary Events</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Stay Updated with Our School Calendar
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="container py-20">
        <h2 className="text-4xl font-bold mb-12">Upcoming Events</h2>
        <div className="space-y-6">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <div className="bg-secondary/10 rounded-lg p-4 text-center">
                    <Calendar className="h-8 w-8 text-secondary mx-auto mb-2" />
                    <p className="font-bold text-secondary">{event.date}</p>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <Button variant="outline">Add to Calendar</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section className="bg-muted py-20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12">Past Events</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <Card key={index} className="p-6">
                <Calendar className="h-8 w-8 text-secondary mb-3" />
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-sm text-secondary mb-2">{event.date}</p>
                <p className="text-sm text-muted-foreground">{event.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Calendar */}
      <section className="container py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Annual Event Calendar</h2>
        <Card className="p-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3 text-secondary">Term 1 (January - April)</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Welcome Assembly & Orientation</li>
                <li>• Parent-Teacher Conferences</li>
                <li>• Science Fair</li>
                <li>• Sports Day</li>
                <li>• Spring Concert</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3 text-secondary">Term 2 (May - August)</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Cultural Day Celebration</li>
                <li>• End of Year Art Exhibition</li>
                <li>• Swimming Gala</li>
                <li>• Grade 6 Graduation</li>
                <li>• Summer Reading Program Launch</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3 text-secondary">Term 3 (September - December)</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Back to School Night</li>
                <li>• Math Olympiad</li>
                <li>• Spelling Bee Competition</li>
                <li>• Drama Production</li>
                <li>• Holiday Concert & Carol Service</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default PrimaryEvents;
