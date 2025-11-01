import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import schoolHero from "@/assets/school-hero.jpg";
import primaryHero from "@/assets/primary-hero.jpg";
import secondaryHero from "@/assets/secondary-hero.jpg";
import { BookOpen, Users, Trophy, Globe, ArrowRight, CheckCircle2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={schoolHero} alt="Royal Bells School" className="w-full h-full object-cover scale-105 animate-scale-in" />
          <div className="absolute inset-0 gradient-animate opacity-90" />
        </div>
        <div className="relative z-10 container text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-down">
            Royal Bells Group of Schools
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Where Excellence Meets Innovation in Education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-400">
            <Button asChild size="lg" variant="secondary" className="hover-lift">
              <Link to="/primary">Primary Section</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 hover-lift">
              <Link to="/secondary">Secondary Section</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">Welcome to Royal Bells</h2>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in animation-delay-200">
            At Royal Bells Group of Schools, we believe every child deserves an education that inspires,
            challenges, and prepares them for a bright future. With over 25 years of educational excellence,
            we've been nurturing young minds and building tomorrow's leaders.
          </p>
          <Button asChild className="animate-bounce-in animation-delay-400 hover-scale">
            <Link to="/about">Learn More About Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* Two Sections */}
      <section className="container py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Primary Section Card */}
          <Card className="overflow-hidden group hover-lift hover-glow animate-fade-in-left">
            <div className="relative h-64 overflow-hidden">
              <img src={primaryHero} alt="Primary Section" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/30 transition-all duration-300" />
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold mb-4 text-secondary">Primary Section</h3>
              <p className="text-muted-foreground mb-6">
                Building strong foundations through engaging, child-centered learning experiences.
                Ages 5-11, fostering creativity, curiosity, and confidence.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                  <span>Creative Learning Environment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                  <span>Experienced Primary Teachers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-secondary" />
                  <span>Modern Facilities & Resources</span>
                </li>
              </ul>
              <Button asChild variant="default" className="w-full bg-secondary hover:bg-secondary/90">
                <Link to="/primary">Explore Primary <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </Card>

          {/* Secondary Section Card */}
          <Card className="overflow-hidden group hover-lift hover-glow animate-fade-in-right animation-delay-200">
            <div className="relative h-64 overflow-hidden">
              <img src={secondaryHero} alt="Secondary Section" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-all duration-300" />
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold mb-4 text-primary">Secondary Section</h3>
              <p className="text-muted-foreground mb-6">
                Empowering teenagers with knowledge, skills, and values for academic excellence.
                Ages 11-18, preparing students for university and beyond.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Advanced Academic Programs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>University Preparation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>State-of-the-art Laboratories</span>
                </li>
              </ul>
              <Button asChild className="w-full">
                <Link to="/secondary">Explore Secondary <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">Why Choose Royal Bells?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover-lift animate-fade-in-up">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Quality Education</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive curriculum meeting international standards
              </p>
            </Card>
            
            <Card className="p-6 text-center hover-lift animate-fade-in-up animation-delay-200">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-float animation-delay-200">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Expert Faculty</h3>
              <p className="text-sm text-muted-foreground">
                Qualified, experienced teachers dedicated to student success
              </p>
            </Card>
            
            <Card className="p-6 text-center hover-lift animate-fade-in-up animation-delay-400">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-float animation-delay-400">
                <Trophy className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Proven Results</h3>
              <p className="text-sm text-muted-foreground">
                Outstanding academic performance and university placements
              </p>
            </Card>
            
            <Card className="p-6 text-center hover-lift animate-fade-in-up animation-delay-600">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-float animation-delay-600">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Global Perspective</h3>
              <p className="text-sm text-muted-foreground">
                International partnerships and exchange programs
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20">
        <Card className="p-12 text-center gradient-animate text-white animate-scale-in overflow-hidden relative">
          <div className="absolute inset-0 shimmer opacity-20" />
          <h2 className="text-4xl font-bold mb-4 relative z-10 animate-fade-in">Join Our Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto relative z-10 animate-fade-in animation-delay-200">
            Give your child the gift of quality education. Enroll at Royal Bells today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10 animate-fade-in animation-delay-400">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 hover-lift hover-scale">
              <Link to="/contact">Apply Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover-lift">
              <Link to="/contact">Schedule a Visit</Link>
            </Button>
          </div>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
