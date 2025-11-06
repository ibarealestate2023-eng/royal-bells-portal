import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, MapPin } from "lucide-react";

const NurseryEvents = () => {
  const upcomingEvents = [
    { date: "15th December 2024", title: "Christmas Nativity Play", time: "10:00 AM", location: "Nursery Hall" },
    { date: "20th December 2024", title: "End of Term Party", time: "11:00 AM", location: "Nursery Classrooms" },
    { date: "8th January 2025", title: "Spring Term Begins", time: "8:00 AM", location: "All Nursery Classes" },
    { date: "14th February 2025", title: "Valentine's Craft Day", time: "9:30 AM", location: "Art Room" },
    { date: "7th March 2025", title: "World Book Day Celebration", time: "10:00 AM", location: "Nursery Hall" }
  ];

  const pastEvents = [
    { date: "25th November 2024", title: "Nursery Open Day", attendance: "50+ families" },
    { date: "1st November 2024", title: "Harvest Festival", attendance: "All nursery children" },
    { date: "31st October 2024", title: "Halloween Party", attendance: "120 children" },
    { date: "15th October 2024", title: "Parents Evening", attendance: "80+ parents" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <section className="bg-gradient-to-r from-accent to-accent/80 text-white py-20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">Nursery Events</h1>
          <p className="text-xl">Celebrations and Special Occasions</p>
        </div>
      </section>

      <section className="container py-20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="p-6 hover-lift">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className="bg-accent">{event.date}</Badge>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                      <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                    <Calendar className="h-12 w-12 text-accent" />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Past Events</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {pastEvents.map((event, index) => (
                <Card key={index} className="p-6">
                  <Badge variant="outline" className="mb-3">{event.date}</Badge>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-muted-foreground">{event.attendance}</p>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Annual Calendar</h2>
            <Card className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-accent">Autumn Term</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>September: New Term Welcome Week</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>October: Harvest Festival & Halloween Party</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>November: Parents Evening & Open Day</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>December: Christmas Nativity & End of Term Party</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-accent">Spring Term</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>January: New Year Activities & Winter Theme Week</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>February: Valentine's Craft Day & Parents Meeting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>March: World Book Day & Mother's Day Celebration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>April: Easter Activities & Spring Concert</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-accent">Summer Term</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>May: May Day Celebrations & Sports Day</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>June: Father's Day Activities & Summer Fair</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">•</span>
                      <span>July: Graduation Ceremony & End of Year Party</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NurseryEvents;