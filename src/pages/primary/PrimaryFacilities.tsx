import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Laptop, Palette, Music, Utensils, Heart, TreePine, Shield } from "lucide-react";

const PrimaryFacilities = () => {
  const facilities = [
    {
      icon: BookOpen,
      title: "Modern Classrooms",
      description: "Bright, spacious, air-conditioned classrooms equipped with smart boards, projectors, and comfortable furniture designed for young learners."
    },
    {
      icon: BookOpen,
      title: "Library & Reading Area",
      description: "Well-stocked library with over 5,000 age-appropriate books, magazines, and digital resources. Cozy reading corners for quiet study."
    },
    {
      icon: Laptop,
      title: "ICT Laboratory",
      description: "Computer lab with 30+ workstations, educational software, and interactive learning tools. One computer per student during ICT lessons."
    },
    {
      icon: Palette,
      title: "Art Studio",
      description: "Dedicated art space with supplies for painting, drawing, sculpture, and crafts. Display areas showcase student artwork."
    },
    {
      icon: Music,
      title: "Music Room",
      description: "Soundproofed room with keyboards, drums, guitars, and other instruments. Space for both individual practice and group performances."
    },
    {
      icon: BookOpen,
      title: "Science Laboratory",
      description: "Age-appropriate science lab where students conduct safe, supervised experiments and explore scientific concepts hands-on."
    },
    {
      icon: TreePine,
      title: "Outdoor Play Areas",
      description: "Safe playground with modern equipment, basketball court, and open field for physical activities, sports, and recreation."
    },
    {
      icon: Utensils,
      title: "Cafeteria",
      description: "Clean, spacious dining hall serving nutritious meals and snacks. Menu designed by nutritionist to support growing children."
    },
    {
      icon: Heart,
      title: "Medical Center",
      description: "On-site clinic staffed by qualified nurse. First aid, health monitoring, and emergency medical attention available during school hours."
    },
    {
      icon: Shield,
      title: "Security Systems",
      description: "24/7 security personnel, CCTV cameras, controlled access points, and visitor management system ensuring student safety."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-secondary/80 text-white py-20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">Primary Facilities</h1>
          <p className="text-xl max-w-3xl mx-auto">
            World-Class Learning Environment for Young Minds
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Learning Spaces</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Our Primary Section features modern, child-friendly facilities designed to create an optimal
            learning environment. Every space is carefully planned to support different aspects of child
            development - academic, physical, social, and emotional.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <facility.icon className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{facility.title}</h3>
              <p className="text-muted-foreground">{facility.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Special Features */}
      <section className="bg-muted py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Special Features</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4">Technology Integration</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Interactive smart boards in every classroom</li>
                <li>• Age-appropriate educational software</li>
                <li>• Digital library access</li>
                <li>• Online learning platform for homework</li>
                <li>• Parent communication app</li>
              </ul>
            </Card>
            
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4">Safety & Comfort</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Air-conditioned classrooms</li>
                <li>• Child-safe furniture and equipment</li>
                <li>• Clean, well-maintained restrooms</li>
                <li>• Emergency evacuation systems</li>
                <li>• Secure campus with controlled access</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="container py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Learning Resources</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="p-6 text-center">
            <div className="text-4xl font-bold text-secondary mb-2">5,000+</div>
            <p className="text-sm text-muted-foreground">Books in Library</p>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="text-4xl font-bold text-secondary mb-2">30+</div>
            <p className="text-sm text-muted-foreground">Computers</p>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="text-4xl font-bold text-secondary mb-2">25:1</div>
            <p className="text-sm text-muted-foreground">Student-Teacher Ratio</p>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="text-4xl font-bold text-secondary mb-2">100%</div>
            <p className="text-sm text-muted-foreground">Safe Environment</p>
          </Card>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="container pb-20">
        <Card className="p-12 text-center bg-gradient-to-r from-secondary to-secondary/80 text-white">
          <h2 className="text-4xl font-bold mb-4">See Our Facilities in Person</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a campus tour to experience our world-class facilities firsthand.
          </p>
          <Button asChild size="lg" className="bg-white text-secondary hover:bg-white/90">
            <Link to="/contact">Book a Tour</Link>
          </Button>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default PrimaryFacilities;
