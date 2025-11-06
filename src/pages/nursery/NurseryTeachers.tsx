import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Heart, Users } from "lucide-react";

const NurseryTeachers = () => {
  const teachers = [
    { name: "Mrs. Sarah Johnson", role: "Nursery Head", qualification: "BA Early Childhood Education, 15 years experience" },
    { name: "Ms. Emily Davis", role: "Baby Class 1 Teacher", qualification: "Diploma in Early Years, 8 years experience" },
    { name: "Mrs. Rachel Williams", role: "Baby Class 2 Teacher", qualification: "BA Education, 10 years experience" },
    { name: "Ms. Lisa Thompson", role: "Reception Teacher", qualification: "BA Early Years, 12 years experience" },
    { name: "Mrs. Hannah Brown", role: "Nursery 1 Teacher", qualification: "Montessori Diploma, 9 years experience" },
    { name: "Ms. Sophie Miller", role: "Nursery 2 Teacher", qualification: "BA Child Development, 11 years experience" },
    { name: "Mrs. Grace Wilson", role: "Assistant Teacher", qualification: "CACHE Level 3, 5 years experience" },
    { name: "Ms. Amy Taylor", role: "Assistant Teacher", qualification: "CACHE Level 3, 6 years experience" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <section className="bg-gradient-to-r from-accent to-accent/80 text-white py-20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">Our Nursery Team</h1>
          <p className="text-xl">Caring Educators Dedicated to Your Child</p>
        </div>
      </section>

      <section className="container py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Dedicated Team</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our nursery teachers are qualified early years specialists who are passionate about 
              working with young children. They create a warm, nurturing environment where every 
              child feels valued and supported.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-2">100%</h3>
              <p className="text-muted-foreground">Qualified Teachers</p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-2">1:6</h3>
              <p className="text-muted-foreground">Teacher-Child Ratio</p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-2">25+</h3>
              <p className="text-muted-foreground">Years Combined Experience</p>
            </Card>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-center">Our Teaching Staff</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {teachers.map((teacher, index) => (
              <Card key={index} className="p-6 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-8 w-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{teacher.name}</h3>
                    <p className="text-accent font-medium mb-2">{teacher.role}</p>
                    <p className="text-sm text-muted-foreground">{teacher.qualification}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <Card className="p-8 bg-accent/5">
              <h2 className="text-2xl font-bold mb-4">Our Commitment to Excellence</h2>
              <p className="text-muted-foreground mb-4">
                All our nursery staff undergo regular training to stay current with best practices in 
                early childhood education. We are committed to:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Continuous professional development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Child protection and safeguarding training</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>First aid and health & safety certification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Creating inclusive, welcoming environments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Building strong partnerships with parents</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NurseryTeachers;