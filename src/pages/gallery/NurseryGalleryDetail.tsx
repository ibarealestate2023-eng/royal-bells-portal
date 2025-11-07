import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import { ArrowLeft } from "lucide-react";
import nurseryImg from "@/assets/gallery/nursery-classroom-1.jpg";

const NurseryGalleryDetail = () => {
  const { id } = useParams();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample data - in a real app, this would come from an API or database
  const galleries: Record<string, { title: string; description: string; count: number }> = {
    "nursery-classroom": {
      title: "Nursery Classrooms",
      description: "Our bright, colorful classrooms designed for young learners",
      count: 32
    },
    "nursery-playtime": {
      title: "Playtime Fun",
      description: "Children enjoying play-based learning activities",
      count: 28
    },
    "nursery-learning": {
      title: "Learning Activities",
      description: "Hands-on learning experiences across different areas",
      count: 35
    },
    "nursery-outdoor": {
      title: "Outdoor Play",
      description: "Fun and exploration in our secure outdoor play area",
      count: 26
    },
    "nursery-arts": {
      title: "Arts & Crafts",
      description: "Creative expression through arts and crafts activities",
      count: 30
    },
    "nursery-music": {
      title: "Music Time",
      description: "Music, songs, and movement activities",
      count: 20
    },
    "nursery-celebration": {
      title: "Celebrations",
      description: "Special events and celebrations throughout the year",
      count: 25
    },
    "nursery-parents": {
      title: "Parents Day",
      description: "Parents joining in the fun and learning",
      count: 22
    }
  };

  const gallery = galleries[id || ""] || {
    title: "Gallery",
    description: "Photo gallery",
    count: 0
  };

  // Generate images with actual photos
  const images = Array.from({ length: gallery.count }, (_, i) => ({
    id: i + 1,
    url: nurseryImg,
    alt: `${gallery.title} - Image ${i + 1}`
  }));

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-gradient-to-r from-accent to-accent/80 text-white py-20">
        <div className="container">
          <Button asChild variant="outline" className="mb-6 border-white text-white hover:bg-white/10">
            <Link to="/nursery/gallery">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Gallery
            </Link>
          </Button>
          <h1 className="text-5xl font-bold mb-4">{gallery.title}</h1>
          <p className="text-xl">{gallery.description}</p>
          <p className="text-sm mt-2 opacity-80">{gallery.count} photos</p>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <Card 
              key={image.id} 
              className="overflow-hidden group cursor-pointer hover-lift"
              onClick={() => handleImageClick(index)}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </Card>
          ))}
        </div>
      </section>

      {lightboxOpen && (
        <Lightbox
          images={images}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}

      <Footer />
    </div>
  );
};

export default NurseryGalleryDetail;