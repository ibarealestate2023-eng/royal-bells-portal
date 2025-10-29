import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Image } from "lucide-react";

const SecondaryGallery = () => {
  const galleries = [
    { title: "Science Laboratory", count: 28 },
    { title: "Inter-House Sports 2024", count: 45 },
    { title: "Debate Competition", count: 20 },
    { title: "Graduation Ceremony", count: 50 },
    { title: "Cultural Week", count: 35 },
    { title: "Academic Excellence Awards", count: 30 },
    { title: "Drama Festival", count: 25 },
    { title: "Career Day", count: 22 },
    { title: "Student Leadership", count: 18 },
    { title: "University Fair", count: 24 }
  ];

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleries.map((gallery, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer">
              <div className="relative h-64 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <Image className="h-16 w-16 text-primary/40 group-hover:text-primary/60 transition-colors" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{gallery.title}</h3>
                <p className="text-sm text-muted-foreground">{gallery.count} photos</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SecondaryGallery;
