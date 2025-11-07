import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import { ArrowLeft } from "lucide-react";
import classroomImg from "@/assets/gallery/primary-classroom-1.jpg";
import sportsImg from "@/assets/gallery/primary-sports-1.jpg";
import scienceImg from "@/assets/gallery/primary-science-1.jpg";
import culturalImg from "@/assets/gallery/primary-cultural-1.jpg";

const PrimaryGalleryDetail = () => {
  const { id } = useParams();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Map gallery IDs to sample images
  const galleryImages: Record<string, string> = {
    "classroom-activities": classroomImg,
    "sports-day": sportsImg,
    "science-fair": scienceImg,
    "cultural-day": culturalImg,
  };

  // Sample data - in a real app, this would come from an API or database
  const galleries: Record<string, { title: string; description: string; count: number }> = {
    "classroom-activities": {
      title: "Classroom Activities",
      description: "Students engaged in interactive learning activities across various subjects",
      count: 24
    },
    "sports-day": {
      title: "Annual Sports Day 2024",
      description: "Exciting moments from our annual sports competition with students showcasing their athletic talents",
      count: 42
    },
    "science-fair": {
      title: "Science Fair",
      description: "Young scientists presenting their innovative projects and experiments",
      count: 30
    },
    "cultural-day": {
      title: "Cultural Day Celebration",
      description: "Students celebrating diversity through traditional costumes, food, and performances",
      count: 36
    },
    "graduation": {
      title: "Year 6 Graduation Ceremony",
      description: "Memorable moments as our Year 6 students graduate to secondary school",
      count: 48
    },
    "field-trip": {
      title: "Educational Field Trips",
      description: "Learning beyond the classroom through exciting educational excursions",
      count: 28
    },
    "arts-exhibition": {
      title: "Arts & Crafts Exhibition",
      description: "Showcasing student creativity through paintings, sculptures, and handicrafts",
      count: 32
    },
    "christmas": {
      title: "Christmas Celebration",
      description: "Festive moments, carol singing, and holiday activities",
      count: 38
    }
  };

  const gallery = galleries[id || ""] || {
    title: "Gallery",
    description: "Photo gallery",
    count: 0
  };

  // Generate images with actual photos for some galleries
  const sampleImage = galleryImages[id || ""] || classroomImg;
  const images = Array.from({ length: gallery.count }, (_, i) => ({
    id: i + 1,
    url: sampleImage,
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
      
      <section className="bg-gradient-to-r from-secondary to-secondary/80 text-white py-20">
        <div className="container">
          <Button asChild variant="outline" className="mb-6 border-white text-white hover:bg-white/10">
            <Link to="/primary/gallery">
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

export default PrimaryGalleryDetail;