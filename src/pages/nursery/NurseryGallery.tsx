import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Image } from "lucide-react";

const NurseryGallery = () => {
  const galleries = [
    { id: "nursery-classroom", title: "Nursery Classrooms", count: 32 },
    { id: "nursery-playtime", title: "Playtime Fun", count: 28 },
    { id: "nursery-learning", title: "Learning Activities", count: 35 },
    { id: "nursery-outdoor", title: "Outdoor Play", count: 26 },
    { id: "nursery-arts", title: "Arts & Crafts", count: 30 },
    { id: "nursery-music", title: "Music Time", count: 20 },
    { id: "nursery-celebration", title: "Celebrations", count: 25 },
    { id: "nursery-parents", title: "Parents Day", count: 22 }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <section className="bg-gradient-to-r from-accent to-accent/80 text-white py-20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">Nursery Gallery</h1>
          <p className="text-xl">Capturing Happy Moments of Learning and Play</p>
        </div>
      </section>
      <section className="container py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleries.map((gallery, index) => (
            <Link key={index} to={`/nursery/gallery/${gallery.id}`}>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer">
                <div className="relative h-64 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <Image className="h-16 w-16 text-accent/40 group-hover:text-accent/60 transition-colors" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{gallery.title}</h3>
                  <p className="text-sm text-muted-foreground">{gallery.count} photos</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NurseryGallery;