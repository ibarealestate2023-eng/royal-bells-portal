import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import nurseryHero from "@/assets/royal-bell/IMG-20251114-WA0002.jpg";
import { Baby, Heart, Users, BookOpen, ArrowRight } from "lucide-react";

const NurseryHome = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={nurseryHero} alt="Nursery Section" className="w-full h-full object-cover scale-105 animate-scale-in" />
          <div className="absolute inset-0 bg-gradient-to-r from-accent/90 to-accent/70" />
        </div>
        <div className="relative z-10 container text-center text-white">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in-down">Nursery Section</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Where Little Learners Blossom - A Nurturing Start to Education
          </p>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">Welcome to Our Nursery</h2>
          <p className="text-lg text-muted-foreground animate-fade-in animation-delay-200">
            Our nursery provides a warm, safe, and stimulating environment where young children 
            aged 2-5 years take their first steps in education. Through play-based learning and 
            caring guidance, we help each child develop confidence, creativity, and a love for learning.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Nursery Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover-lift animate-fade-in-up">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Caring Environment</h3>
              <p className="text-sm text-muted-foreground">Safe, nurturing space for young learners</p>
            </Card>
            
            <Card className="p-6 text-center hover-lift animate-fade-in-up animation-delay-200">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-float animation-delay-200">
                <BookOpen className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Play-Based Learning</h3>
              <p className="text-sm text-muted-foreground">Learning through play and exploration</p>
            </Card>
            
            <Card className="p-6 text-center hover-lift animate-fade-in-up animation-delay-400">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-float animation-delay-400">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Small Class Sizes</h3>
              <p className="text-sm text-muted-foreground">Individual attention for each child</p>
            </Card>
            
            <Card className="p-6 text-center hover-lift animate-fade-in-up animation-delay-600">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-float animation-delay-600">
                <Baby className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Age-Appropriate</h3>
              <p className="text-sm text-muted-foreground">Tailored programs for each age group</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="container py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Explore Our Nursery</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 hover-lift hover-glow">
            <h3 className="text-xl font-bold mb-3">About Our Nursery</h3>
            <p className="text-muted-foreground mb-4">Learn about our philosophy and approach</p>
            <Button asChild variant="outline" className="w-full">
              <Link to="/nursery/about">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </Card>

          <Card className="p-6 hover-lift hover-glow">
            <h3 className="text-xl font-bold mb-3">Our Classes</h3>
            <p className="text-muted-foreground mb-4">Discover our age-appropriate programs</p>
            <Button asChild variant="outline" className="w-full">
              <Link to="/nursery/curriculum">View Classes <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </Card>

          <Card className="p-6 hover-lift hover-glow">
            <h3 className="text-xl font-bold mb-3">Admissions</h3>
            <p className="text-muted-foreground mb-4">Join our nursery community</p>
            <Button asChild variant="outline" className="w-full">
              <Link to="/nursery/admissions">Apply Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16">
        <Card className="p-12 text-center bg-accent text-white">
          <h2 className="text-4xl font-bold mb-4">Give Your Child the Best Start</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Enroll in our nursery and watch your child thrive in a loving, educational environment.
          </p>
          <Button asChild size="lg" className="bg-white text-accent hover:bg-white/90">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default NurseryHome;
