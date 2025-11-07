import { Link } from "react-router-dom";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Image, Search } from "lucide-react";

const SecondaryGallery = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const galleries = [
    { id: "science-laboratory", title: "Science Laboratory", count: 28 },
    { id: "inter-house-sports", title: "Inter-House Sports 2024", count: 45 },
    { id: "debate-competition", title: "Debate Competition", count: 20 },
    { id: "graduation-ceremony", title: "Graduation Ceremony", count: 50 },
    { id: "cultural-week", title: "Cultural Week", count: 35 },
    { id: "academic-excellence", title: "Academic Excellence Awards", count: 30 },
    { id: "drama-festival", title: "Drama Festival", count: 25 },
    { id: "career-day", title: "Career Day", count: 22 },
    { id: "student-leadership", title: "Student Leadership", count: 18 },
    { id: "university-fair", title: "University Fair", count: 24 }
  ];

  const filteredGalleries = galleries.filter((gallery) =>
    gallery.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <Header />
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">Secondary Gallery</h1>
          <p className="text-xl">Moments of Achievement and Growth</p>
        </div>
      </section>
      <section className="container py-20">
        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search galleries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGalleries.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">No galleries found matching "{searchQuery}"</p>
            </div>
          ) : (
            filteredGalleries.map((gallery, index) => (
            <Link key={index} to={`/secondary/gallery/${gallery.id}`}>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer">
                <div className="relative h-64 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Image className="h-16 w-16 text-primary/40 group-hover:text-primary/60 transition-colors" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{gallery.title}</h3>
                  <p className="text-sm text-muted-foreground">{gallery.count} photos</p>
                </div>
              </Card>
            </Link>
            ))
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SecondaryGallery;
