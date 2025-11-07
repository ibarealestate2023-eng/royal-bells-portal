import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import { ArrowLeft } from "lucide-react";
import scienceImg from "@/assets/gallery/secondary-science-1.jpg";

const SecondaryGalleryDetail = () => {
  const { id } = useParams();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample data - in a real app, this would come from an API or database
  const galleries: Record<string, { title: string; description: string; count: number }> = {
    "science-laboratory": {
      title: "Science Laboratory",
      description: "Students conducting experiments and practical work in our state-of-the-art science labs",
      count: 28
    },
    "inter-house-sports": {
      title: "Inter-House Sports 2024",
      description: "Thrilling moments from the annual inter-house sports competition",
      count: 45
    },
    "debate-competition": {
      title: "Debate Competition",
      description: "Students showcasing their oratory and critical thinking skills",
      count: 20
    },
    "graduation-ceremony": {
      title: "Graduation Ceremony",
      description: "Celebrating our graduating class as they embark on their university journey",
      count: 50
    },
    "cultural-week": {
      title: "Cultural Week",
      description: "A week-long celebration of diversity, culture, and traditions",
      count: 35
    },
    "academic-excellence": {
      title: "Academic Excellence Awards",
      description: "Honoring outstanding academic achievement and dedication",
      count: 30
    },
    "drama-festival": {
      title: "Drama Festival",
      description: "Students bringing stories to life through theatrical performances",
      count: 25
    },
    "career-day": {
      title: "Career Day",
      description: "Exploring future career paths with industry professionals",
      count: 22
    },
    "student-leadership": {
      title: "Student Leadership",
      description: "Our student leaders in action, serving the school community",
      count: 18
    },
    "university-fair": {
      title: "University Fair",
      description: "Connecting students with university representatives from around the world",
      count: 24
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
    url: scienceImg,
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
      
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container">
          <Button asChild variant="outline" className="mb-6 border-white text-white hover:bg-white/10">
            <Link to="/secondary/gallery">
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

export default SecondaryGalleryDetail;