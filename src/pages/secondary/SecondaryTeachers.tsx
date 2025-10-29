import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GraduationCap, Award, Users } from "lucide-react";

const SecondaryTeachers = () => {
  const teachers = [
    {
      name: "Dr. Michael Adeyemi",
      role: "Principal, Secondary Section",
      qualification: "Ph.D. in Education Administration",
      experience: "25 years",
      specialty: "Educational Leadership"
    },
    {
      name: "Mr. Emmanuel Okonkwo",
      role: "Vice Principal (Academics)",
      qualification: "M.Ed. in Curriculum Development",
      experience: "20 years",
      specialty: "Mathematics"
    },
    {
      name: "Mrs. Patricia Williams",
      role: "English Department Head",
      qualification: "M.A. in English Literature",
      experience: "16 years",
      specialty: "Literature & Composition"
    },
    {
      name: "Dr. Ibrahim Yusuf",
      role: "Science Department Head",
      qualification: "Ph.D. in Chemistry",
      experience: "18 years",
      specialty: "Advanced Chemistry"
    },
    {
      name: "Mr. Chukwuma Obi",
      role: "Mathematics Teacher",
      qualification: "M.Sc. Mathematics",
      experience: "14 years",
      specialty: "Further Mathematics"
    },
    {
      name: "Mrs. Aisha Mohammed",
      role: "Biology Teacher",
      qualification: "M.Sc. Biological Sciences",
      experience: "12 years",
      specialty: "Human Biology & Genetics"
    },
    {
      name: "Mr. David Thompson",
      role: "Physics Teacher",
      qualification: "M.Sc. Applied Physics",
      experience: "15 years",
      specialty: "Experimental Physics"
    },
    {
      name: "Mrs. Ngozi Ikenna",
      role: "Chemistry Teacher",
      qualification: "M.Sc. Industrial Chemistry",
      experience: "13 years",
      specialty: "Organic Chemistry"
    },
    {
      name: "Mr. Samuel Adebayo",
      role: "Economics Teacher",
      qualification: "M.Sc. Economics",
      experience: "11 years",
      specialty: "Development Economics"
    },
    {
      name: "Mrs. Mary Johnson",
      role: "Literature Teacher",
      qualification: "M.A. in Literature",
      experience: "14 years",
      specialty: "African Literature"
    },
    {
      name: "Mr. Oluwaseun Balogun",
      role: "Computer Science Teacher",
      qualification: "M.Sc. Computer Science",
      experience: "10 years",
      specialty: "Programming & Web Development"
    },
    {
      name: "Mrs. Blessing Okeke",
      role: "Geography Teacher",
      qualification: "M.Sc. Geography",
      experience: "12 years",
      specialty: "Physical Geography"
    },
    {
      name: "Mr. Peter Mensah",
      role: "Government Teacher",
      qualification: "M.Sc. Political Science",
      experience: "13 years",
      specialty: "Comparative Government"
    },
    {
      name: "Mrs. Victoria Eze",
      role: "Accounting Teacher",
      qualification: "M.Sc. Accounting, ACA",
      experience: "11 years",
      specialty: "Financial Accounting"
    },
    {
      name: "Mr. Ahmed Hassan",
      role: "French Teacher",
      qualification: "M.A. in French Language",
      experience: "10 years",
      specialty: "French Literature"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">Our Secondary Faculty</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Subject Experts Committed to Academic Excellence
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Meet Our Teaching Team</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Our secondary faculty comprises highly qualified subject specialists, many holding
            advanced degrees in their fields. Each teacher brings not only academic expertise but
            also a passion for nurturing young minds and preparing them for future success.
          </p>
        </div>

        {/* Faculty Stats */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20">
          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold mb-2">70%</h3>
            <p className="text-muted-foreground">Hold Master's Degrees</p>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold mb-2">15+</h3>
            <p className="text-muted-foreground">Average Years Experience</p>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold mb-2">1:30</h3>
            <p className="text-muted-foreground">Teacher to Student Ratio</p>
          </Card>
        </div>

        {/* Teacher Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachers.map((teacher, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-center mb-1">{teacher.name}</h3>
              <p className="text-sm text-primary text-center mb-4">{teacher.role}</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong>Qualification:</strong> {teacher.qualification}</p>
                <p><strong>Experience:</strong> {teacher.experience}</p>
                <p><strong>Specialty:</strong> {teacher.specialty}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Professional Development */}
      <section className="bg-muted py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Professional Development</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <p className="text-muted-foreground mb-6">
                Our commitment to excellence extends to continuous professional development for our
                faculty. Teachers participate in regular workshops, conferences, and training programs
                to stay current with educational best practices and subject matter developments.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Regular Training</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Quarterly professional development workshops</li>
                    <li>• Subject-specific conferences</li>
                    <li>• Technology integration training</li>
                    <li>• Assessment and evaluation techniques</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Collaborative Learning</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Department meetings and planning</li>
                    <li>• Peer observation and feedback</li>
                    <li>• Cross-departmental projects</li>
                    <li>• International school partnerships</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SecondaryTeachers;
