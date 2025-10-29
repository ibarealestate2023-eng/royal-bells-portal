import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import secondaryHero from "@/assets/secondary-hero.jpg";
import { GraduationCap, TrendingUp, Globe, Users, ArrowRight } from "lucide-react";

const SecondaryHome = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={secondaryHero} alt="Secondary Section" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
        </div>
        <div className="relative z-10 container text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Secondary Section</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Preparing Tomorrow's Leaders Today
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link to="/secondary/admissions">Apply for Secondary</Link>
          </Button>
        </div>
      </section>

      {/* Welcome */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Welcome to Secondary School</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our Secondary Section provides comprehensive education for students aged 11-18, combining
            rigorous academics with character development. We prepare students for university admission
            and beyond, focusing on critical thinking, leadership, and global citizenship.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">University Preparation</h3>
              <p className="text-sm text-muted-foreground">
                WAEC, NECO, and A-Level pathways
              </p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Academic Excellence</h3>
              <p className="text-sm text-muted-foreground">
                Top-tier exam results year after year
              </p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Global Perspective</h3>
              <p className="text-sm text-muted-foreground">
                International curriculum options
              </p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Leadership Development</h3>
              <p className="text-sm text-muted-foreground">
                Clubs, societies, and student council
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
              Comprehensive secondary curriculum preparing students for national and international exams.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link to="/secondary/curriculum">View Curriculum <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3">Our Faculty</h3>
            <p className="text-muted-foreground mb-4">
              Subject specialists with advanced degrees and years of teaching experience.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link to="/secondary/teachers">Meet Teachers <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3">Facilities</h3>
            <p className="text-muted-foreground mb-4">
              State-of-the-art laboratories, libraries, and learning resources for advanced study.
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link to="/secondary/facilities">View Facilities <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </Card>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary text-white py-20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-lg">University Placement</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-lg">Subject Offerings</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">95%</div>
              <div className="text-lg">A-C WAEC Passes</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">20+</div>
              <div className="text-lg">University Scholarships</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-20">
        <Card className="p-12 text-center bg-gradient-to-r from-primary to-primary/80 text-white">
          <h2 className="text-4xl font-bold mb-4">Shape Your Future</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our Secondary Section and prepare for success in university and beyond.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link to="/secondary/admissions">Start Application</Link>
          </Button>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default SecondaryHome;
