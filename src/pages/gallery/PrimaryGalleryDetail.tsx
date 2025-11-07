import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import GalleryUpload from "@/components/GalleryUpload";
import { ArrowLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import classroomImg from "@/assets/gallery/primary-classroom-1.jpg";
import sportsImg from "@/assets/gallery/primary-sports-1.jpg";
import scienceImg from "@/assets/gallery/primary-science-1.jpg";
import culturalImg from "@/assets/gallery/primary-cultural-1.jpg";

const PrimaryGalleryDetail = () => {
  const { id } = useParams();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [uploadedImages, setUploadedImages] = useState<Array<{ id: string; url: string; alt: string }>>([]);

  // Map gallery IDs to sample images
  const galleryImages: Record<string, string> = {
    "classroom-activities": classroomImg,
    "sports-day": sportsImg,
    "science-fair": scienceImg,
    "cultural-day": culturalImg,
  };

  useEffect(() => {
    fetchUploadedImages();
  }, [id]);

  const fetchUploadedImages = async () => {
    if (!id) return;

    const { data, error } = await supabase
      .from("gallery_images")
      .select("*")
      .eq("gallery_id", id)
      .eq("section", "primary")
      .order("created_at", { ascending: false });

    if (data && !error) {
      const formattedImages = data.map((img) => ({
        id: img.id,
        url: img.image_url,
        alt: img.caption || `Gallery image ${img.id}`,
      }));
      setUploadedImages(formattedImages);
    }
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
  const sampleImages = Array.from({ length: gallery.count }, (_, i) => ({
    id: uploadedImages.length + i + 1,
    url: sampleImage,
    alt: `${gallery.title} - Image ${i + 1}`
  }));

  // Combine uploaded images with sample images (convert string ids to numbers for display)
  const formattedUploadedImages = uploadedImages.map((img, index) => ({
    id: index + 1,
    url: img.url,
    alt: img.alt
  }));
  
  const allImages = [...formattedUploadedImages, ...sampleImages];

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
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
        <Tabs defaultValue="gallery" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="gallery">View Gallery</TabsTrigger>
            <TabsTrigger value="upload">Upload Images</TabsTrigger>
          </TabsList>

          <TabsContent value="gallery">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {allImages.map((image, index) => (
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
          </TabsContent>

          <TabsContent value="upload">
            <div className="max-w-2xl mx-auto">
              <GalleryUpload 
                galleryId={id || ""}
                section="primary"
                onUploadComplete={fetchUploadedImages}
              />
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {lightboxOpen && (
        <Lightbox
          images={allImages}
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