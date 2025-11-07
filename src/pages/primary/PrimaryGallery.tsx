import { Link } from "react-router-dom";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Image, Search } from "lucide-react";

const PrimaryGallery = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const galleries = [
    { id: "classroom-activities", title: "Classroom Activities", count: 24 },
    { id: "sports-day", title: "Sports Day 2024", count: 36 },
    { id: "science-fair", title: "Science Fair", count: 18 },
    { id: "cultural-day", title: "Cultural Day", count: 42 },
    { id: "field-trip", title: "Field Trips", count: 30 },
    { id: "arts-exhibition", title: "Art Exhibition", count: 28 },
    { id: "music-concert", title: "Music Concert", count: 20 },
    { id: "graduation", title: "Graduation Ceremony", count: 32 },
    { id: "library-sessions", title: "Library Sessions", count: 15 },
    { id: "ict-lab", title: "ICT Lab", count: 22 },
    { id: "drama-performance", title: "Drama Performance", count: 25 },
    { id: "parents-day", title: "Parent's Day", count: 38 }
  ];

  const filteredGalleries = galleries.filter((gallery) =>
    gallery.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-secondary/80 text-white py-20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">Primary Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Capturing Moments of Learning, Growth, and Joy
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Photo Albums</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Explore our collection of photos showcasing daily life, special events, and memorable
            moments from our Primary Section. Each image tells a story of discovery, friendship,
            and achievement.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mt-8">
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
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGalleries.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">No galleries found matching "{searchQuery}"</p>
            </div>
          ) : (
            filteredGalleries.map((gallery, index) => (
            <Link key={index} to={`/primary/gallery/${gallery.id}`}>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer">
              <div className="relative h-64 bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
                <Image className="h-16 w-16 text-secondary/40 group-hover:text-secondary/60 transition-colors" />
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

      {/* Recent Highlights */}
      <section className="bg-muted py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Recent Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6">
              <div className="h-48 bg-secondary/10 rounded-lg mb-4 flex items-center justify-center">
                <Image className="h-12 w-12 text-secondary" />
              </div>
              <h3 className="font-bold mb-2">Annual Sports Day</h3>
              <p className="text-sm text-muted-foreground">
                Students showcased their athletic talents in track and field events
              </p>
            </Card>
            
            <Card className="p-6">
              <div className="h-48 bg-secondary/10 rounded-lg mb-4 flex items-center justify-center">
                <Image className="h-12 w-12 text-secondary" />
              </div>
              <h3 className="font-bold mb-2">Science Fair 2024</h3>
              <p className="text-sm text-muted-foreground">
                Young scientists presented amazing experiments and projects
              </p>
            </Card>
            
            <Card className="p-6">
              <div className="h-48 bg-secondary/10 rounded-lg mb-4 flex items-center justify-center">
                <Image className="h-12 w-12 text-secondary" />
              </div>
              <h3 className="font-bold mb-2">Cultural Celebration</h3>
              <p className="text-sm text-muted-foreground">
                A vibrant display of diverse cultures through music and dance
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrimaryGallery;
