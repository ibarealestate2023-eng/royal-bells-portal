import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import primaryHero from "@/assets/primary-hero.jpg";
import { BookOpen, Palette, Music, Users, ArrowRight } from "lucide-react";

const PrimaryHome = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={primaryHero} alt="Primary Section" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/60" />
        </div>
        <div className="relative z-10 container text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Primary Section</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Building Strong Foundations for Bright Futures
          </p>
          <Button asChild size="lg" className="bg-white text-secondary hover:bg-white/90">
            <Link to="/primary/admissions">Apply for Primary</Link>
          </Button>
        </div>
      </section>

      {/* Welcome */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Welcome to Primary School</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our Primary Section caters to children aged 5-11, providing a nurturing environment where
            young learners develop essential skills, creativity, and a love for learning. With experienced
            teachers and modern facilities, we ensure every child receives personalized attention and support.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Core Subjects</h3>
              <p className="text-sm text-muted-foreground">
                Mathematics, English, Science, Social Studies
              </p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Creative Arts</h3>
              <p className="text-sm text-muted-foreground">
                Art, Drama, Creative Writing
              </p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Music & Sports</h3>
              <p className="text-sm text-muted-foreground">
                Physical Education, Music, Dance
              </p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Character Building</h3>
              <p className="text-sm text-muted-foreground">
                Leadership, Values, Social Skills
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="container py-20">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3">Curriculum</h3>
            <p className="text-muted-foreground mb-4">
              Explore our comprehensive primary curriculum designed for holistic development.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link to="/primary/curriculum">View Curriculum <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3">Our Teachers</h3>
            <p className="text-muted-foreground mb-4">
              Meet our dedicated team of experienced primary school educators.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link to="/primary/teachers">Meet Teachers <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3">Facilities</h3>
            <p className="text-muted-foreground mb-4">
              Discover our modern, child-friendly learning spaces and resources.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link to="/primary/facilities">View Facilities <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-20">
        <Card className="p-12 text-center bg-gradient-to-r from-secondary to-secondary/80 text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Enroll?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Give your child the best start in education. Join our Primary Section today.
          </p>
          <Button asChild size="lg" className="bg-white text-secondary hover:bg-white/90">
            <Link to="/primary/admissions">Start Application</Link>
          </Button>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default PrimaryHome;
