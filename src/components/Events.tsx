
import { Calendar } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

const events = [
  {
    id: 1,
    title: "Annual Tech Fest",
    date: "June 15-17, 2025",
    description: "Join us for three days of innovation, competitions, and workshops showcasing the latest in technology.",
    location: "Main Campus Auditorium"
  },
  {
    id: 2,
    title: "Industry Expert Lecture",
    date: "May 30, 2025",
    description: "Special guest lecture by industry leaders on emerging trends in engineering and technology.",
    location: "Seminar Hall B"
  },
  {
    id: 3,
    title: "Placement Drive",
    date: "July 10-12, 2025",
    description: "Campus recruitment drive with participation from top companies in the IT and manufacturing sectors.",
    location: "T&P Cell"
  },
  {
    id: 4,
    title: "Alumni Meet",
    date: "August 20, 2025",
    description: "Annual gathering of Hi-Tech alumni to strengthen connections and share experiences.",
    location: "College Grounds"
  }
];

const Events = () => {
  return (
    <section id="events" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Upcoming Events</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {events.map((event) => (
            <Card key={event.id} className="h-full transition-all duration-200 hover:shadow-lg border-t-4 border-t-institute-blue">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{event.date}</span>
                </div>
                <CardTitle className="text-institute-blue text-lg">{event.title}</CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  {event.location}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <p className="text-sm">{event.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full border-institute-blue text-institute-blue hover:bg-institute-blue hover:text-white">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button className="bg-institute-blue hover:bg-institute-gold">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;
