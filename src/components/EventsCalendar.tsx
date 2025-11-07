import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, MapPin, Clock, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Event {
  id: string;
  title: string;
  description: string;
  event_date: string;
  end_date?: string;
  time?: string;
  location?: string;
  category: string;
  event_type: string;
  is_featured: boolean;
}

interface EventsCalendarProps {
  section: "primary" | "secondary" | "nursery" | "all";
}

const EventsCalendar = ({ section }: EventsCalendarProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [filterType, setFilterType] = useState<string>("all");
  const [view, setView] = useState<"calendar" | "list">("calendar");

  useEffect(() => {
    fetchEvents();
  }, [section, filterType]);

  const fetchEvents = async () => {
    let query = supabase.from("events").select("*").order("event_date", { ascending: true });

    if (section !== "all") {
      query = query.eq("category", section);
    }

    if (filterType !== "all") {
      query = query.eq("event_type", filterType);
    }

    const { data, error } = await query;
    if (data && !error) {
      setEvents(data);
    }
  };

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const getEventsForDate = (date: Date) => {
    return events.filter((event) => {
      const eventDate = new Date(event.event_date);
      return isSameDay(eventDate, date);
    });
  };

  const selectedDateEvents = selectedDate ? getEventsForDate(selectedDate) : [];
  const upcomingEvents = events.filter(event => new Date(event.event_date) >= new Date()).slice(0, 5);

  const eventTypeColors: Record<string, string> = {
    academic: "bg-blue-500",
    sports: "bg-green-500",
    cultural: "bg-purple-500",
    social: "bg-pink-500",
    graduation: "bg-yellow-500",
    other: "bg-gray-500",
  };

  return (
    <div className="space-y-6">
      {/* Filters and View Toggle */}
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="flex items-center gap-3">
          <Filter className="h-5 w-5 text-muted-foreground" />
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Events</SelectItem>
              <SelectItem value="academic">Academic</SelectItem>
              <SelectItem value="sports">Sports</SelectItem>
              <SelectItem value="cultural">Cultural</SelectItem>
              <SelectItem value="social">Social</SelectItem>
              <SelectItem value="graduation">Graduation</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-2">
          <Button
            variant={view === "calendar" ? "default" : "outline"}
            onClick={() => setView("calendar")}
          >
            Calendar
          </Button>
          <Button
            variant={view === "list" ? "default" : "outline"}
            onClick={() => setView("list")}
          >
            List
          </Button>
        </div>
      </div>

      {view === "calendar" ? (
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Calendar */}
          <Card className="lg:col-span-2 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">{format(currentMonth, "MMMM yyyy")}</h3>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="text-center font-semibold text-sm p-2">
                  {day}
                </div>
              ))}
              {daysInMonth.map((day) => {
                const dayEvents = getEventsForDate(day);
                const isSelected = selectedDate && isSameDay(day, selectedDate);
                const isToday = isSameDay(day, new Date());

                return (
                  <button
                    key={day.toISOString()}
                    onClick={() => setSelectedDate(day)}
                    className={`
                      min-h-[60px] p-2 rounded-lg border transition-all hover:border-primary
                      ${!isSameMonth(day, currentMonth) ? "opacity-30" : ""}
                      ${isSelected ? "border-primary bg-primary/10" : "border-border"}
                      ${isToday ? "bg-accent/20" : ""}
                    `}
                  >
                    <div className="text-sm font-medium mb-1">{format(day, "d")}</div>
                    <div className="flex flex-wrap gap-1">
                      {dayEvents.slice(0, 2).map((event) => (
                        <div
                          key={event.id}
                          className={`w-2 h-2 rounded-full ${eventTypeColors[event.event_type]}`}
                        />
                      ))}
                      {dayEvents.length > 2 && (
                        <div className="text-xs text-muted-foreground">+{dayEvents.length - 2}</div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </Card>

          {/* Selected Date Events or Upcoming */}
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">
              {selectedDate ? format(selectedDate, "MMMM d, yyyy") : "Upcoming Events"}
            </h3>
            <div className="space-y-4">
              {(selectedDate ? selectedDateEvents : upcomingEvents).length === 0 ? (
                <p className="text-muted-foreground text-center py-8">No events scheduled</p>
              ) : (
                (selectedDate ? selectedDateEvents : upcomingEvents).map((event) => (
                  <Card key={event.id} className="p-4 hover-lift">
                    <div className="flex items-start gap-2 mb-2">
                      <Badge className={eventTypeColors[event.event_type]}>
                        {event.event_type}
                      </Badge>
                      {event.is_featured && <Badge variant="secondary">Featured</Badge>}
                    </div>
                    <h4 className="font-bold mb-2">{event.title}</h4>
                    {event.time && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <Clock className="h-3 w-3" />
                        <span>{event.time}</span>
                      </div>
                    )}
                    {event.location && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{event.location}</span>
                      </div>
                    )}
                  </Card>
                ))
              )}
            </div>
          </Card>
        </div>
      ) : (
        /* List View */
        <div className="space-y-4">
          {events.length === 0 ? (
            <Card className="p-12 text-center">
              <CalendarIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No events found</p>
            </Card>
          ) : (
            events.map((event) => (
              <Card key={event.id} className="p-6 hover-lift">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="bg-primary/10 rounded-lg p-4 text-center">
                      <CalendarIcon className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="font-bold text-primary">
                        {format(new Date(event.event_date), "MMM d, yyyy")}
                      </p>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <div className="flex items-start gap-2 mb-2">
                      <Badge className={eventTypeColors[event.event_type]}>
                        {event.event_type}
                      </Badge>
                      {event.is_featured && <Badge variant="secondary">Featured</Badge>}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                      {event.time && (
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                      )}
                      {event.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                      )}
                    </div>
                    {event.description && (
                      <p className="text-muted-foreground">{event.description}</p>
                    )}
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default EventsCalendar;
