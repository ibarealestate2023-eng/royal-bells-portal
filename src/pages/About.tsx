import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Target, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">About Royal Bells</h1>
          <p className="text-xl max-w-3xl mx-auto">
            A Legacy of Excellence in Education Since 1995
          </p>
        </div>
      </section>

      {/* History */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-4">
              Royal Bells Group of Schools was founded in 1995 with a clear vision: to provide world-class
              education that nurtures both academic excellence and character development. What started as a
              small primary school with just 50 students has grown into one of Nigeria's most respected
              educational institutions, serving over 2,000 students across our Primary and Secondary sections.
            </p>
            <p className="text-muted-foreground mb-4">
              Throughout our journey, we have remained committed to our core values of excellence, integrity,
              innovation, and inclusivity. Our state-of-the-art facilities, experienced faculty, and
              comprehensive curriculum ensure that every student receives a well-rounded education that
              prepares them for success in an increasingly competitive global landscape.
            </p>
            <p className="text-muted-foreground">
              Today, Royal Bells stands as a beacon of educational excellence, with thousands of successful
              alumni making their mark in various fields worldwide. Our commitment to continuous improvement
              and adaptation to modern educational needs ensures that we remain at the forefront of quality
              education in Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                RBS will be a learning community where children will be encourage to take responsiblity for their own learning and to develop independence
                of thought questioning attitude and a wide variety of skills with the fear of God.No child will be left out in our scheme
              </p>
            </Card>
            
            <Card className="p-8">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To create a happy learning environment where balanced education of such a high standard which will lay a firm foundation
                for the child to enable him become a confident individual who have the ability to create his 
                own successful future in a multi cultural society
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Excellence</h3>
            <p className="text-sm text-muted-foreground">
              Striving for the highest standards in all we do
            </p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="font-semibold mb-2">Integrity</h3>
            <p className="text-sm text-muted-foreground">
              Upholding honesty, transparency, and moral principles
            </p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-accent" />
            </div>
            <h3 className="font-semibold mb-2">Innovation</h3>
            <p className="text-sm text-muted-foreground">
              Embracing new ideas and modern teaching methods
            </p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Inclusivity</h3>
            <p className="text-sm text-muted-foreground">
              Creating a welcoming environment for all students
            </p>
          </Card>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-primary text-white py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Our Achievements</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
            <div>
              <div className="text-5xl font-bold mb-2">25+</div>
              <div className="text-lg">Years of Excellence</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">2000+</div>
              <div className="text-lg">Current Students</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">150+</div>
              <div className="text-lg">Qualified Staff</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-lg">University Placement Rate</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
