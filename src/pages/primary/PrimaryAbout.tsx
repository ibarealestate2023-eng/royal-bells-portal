import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Heart, Star, Users } from "lucide-react";

const PrimaryAbout = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-secondary/80 text-white py-20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">About Primary Section</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Creating a Foundation for Lifelong Learning
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Our Approach to Primary Education</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-4">
              The Primary Section at Royal Bells is dedicated to nurturing young minds during their most
              formative years. We believe that education at this level should be engaging, interactive,
              and fun while building strong academic foundations. Our curriculum is carefully designed
              to develop critical thinking, creativity, and social skills alongside core academic subjects.
            </p>
            <p className="text-muted-foreground mb-4">
              We understand that every child is unique, with different learning styles, strengths, and
              interests. Our small class sizes (maximum 25 students per class) ensure that each child
              receives personalized attention from our experienced teachers. We use a variety of teaching
              methods including hands-on activities, group work, technology integration, and outdoor learning
              to keep students engaged and excited about learning.
            </p>
            <p className="text-muted-foreground">
              Beyond academics, we focus on developing the whole child. Our programs include character
              education, emotional intelligence development, physical education, arts, and music. We
              encourage students to discover their talents, build confidence, and develop positive
              relationships with peers and adults.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Primary Section Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Quality Teaching</h3>
              <p className="text-sm text-muted-foreground">
                Qualified teachers with specialized primary education training
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Small Classes</h3>
              <p className="text-sm text-muted-foreground">
                Maximum 25 students per class for personalized attention
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Caring Environment</h3>
              <p className="text-sm text-muted-foreground">
                Safe, supportive atmosphere where children feel valued
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Modern Resources</h3>
              <p className="text-sm text-muted-foreground">
                Up-to-date learning materials and technology integration
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section className="container py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Our Classes</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-3 text-secondary">Lower Primary</h3>
            <p className="text-muted-foreground mb-4">Ages 5-7 (Grades 1-2)</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Foundation literacy and numeracy</li>
              <li>• Play-based learning</li>
              <li>• Social skills development</li>
              <li>• Basic science exploration</li>
            </ul>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-3 text-secondary">Middle Primary</h3>
            <p className="text-muted-foreground mb-4">Ages 8-9 (Grades 3-4)</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Advanced reading and writing</li>
              <li>• Problem-solving skills</li>
              <li>• Technology integration</li>
              <li>• Project-based learning</li>
            </ul>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-3 text-secondary">Upper Primary</h3>
            <p className="text-muted-foreground mb-4">Ages 10-11 (Grades 5-6)</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Secondary preparation</li>
              <li>• Independent research</li>
              <li>• Leadership opportunities</li>
              <li>• Advanced subjects</li>
            </ul>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrimaryAbout;
