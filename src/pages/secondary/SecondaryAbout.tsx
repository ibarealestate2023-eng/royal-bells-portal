import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Target, Trophy, Users } from "lucide-react";

const SecondaryAbout = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">About Secondary Section</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Excellence in Academic Achievement and Character Development
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Our Approach to Secondary Education</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-4">
              The Secondary Section at Royal Bells provides a rigorous, comprehensive education that
              prepares students for success in higher education and future careers. Our curriculum
              follows the Nigerian National Curriculum while incorporating international best practices
              to ensure our students are globally competitive.
            </p>
            <p className="text-muted-foreground mb-4">
              We offer a balanced approach that combines strong academic foundations with character
              development, critical thinking, and practical skills. Our experienced teachers use
              innovative teaching methods, technology integration, and project-based learning to
              engage students and foster deep understanding of subjects.
            </p>
            <p className="text-muted-foreground">
              Beyond the classroom, we provide numerous opportunities for leadership development,
              extracurricular activities, and community service. Our students consistently achieve
              outstanding results in WAEC, NECO, and other examinations, with a 98% university
              placement rate and many receiving scholarships to top institutions worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-muted py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Secondary Section Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Expert Faculty</h3>
              <p className="text-sm text-muted-foreground">
                Subject specialists with advanced degrees
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Top Results</h3>
              <p className="text-sm text-muted-foreground">
                95%+ A-C passes in WAEC examinations
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">University Focus</h3>
              <p className="text-sm text-muted-foreground">
                Dedicated university counseling and preparation
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Small Classes</h3>
              <p className="text-sm text-muted-foreground">
                Maximum 30 students per class
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="container py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Our Programs</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-3 text-primary">Junior Secondary</h3>
            <p className="text-muted-foreground mb-4">JSS 1-3 (Ages 11-14)</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Foundation in core subjects</li>
              <li>• Introduction to sciences</li>
              <li>• Technology and computing</li>
              <li>• Character development</li>
            </ul>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-3 text-primary">Senior Secondary</h3>
            <p className="text-muted-foreground mb-4">SS 1-3 (Ages 14-18)</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• WAEC/NECO preparation</li>
              <li>• Science, commercial, or arts track</li>
              <li>• Advanced subject study</li>
              <li>• University applications</li>
            </ul>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-3 text-primary">Enrichment Programs</h3>
            <p className="text-muted-foreground mb-4">All Levels</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Academic clubs and competitions</li>
              <li>• Leadership training</li>
              <li>• Community service</li>
              <li>• International partnerships</li>
            </ul>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SecondaryAbout;
