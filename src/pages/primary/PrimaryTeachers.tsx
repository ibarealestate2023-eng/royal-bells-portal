import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GraduationCap, Award, Heart } from "lucide-react";

const PrimaryTeachers = () => {
  const teachers = [
    {
      name: "Mrs. Sarah Johnson",
      role: "Head of Primary Section",
      qualification: "M.Ed in Elementary Education",
      experience: "18 years",
      specialty: "Curriculum Development"
    },
    {
      name: "Ms. Ada Okafor",
      role: "Grade 1 Teacher",
      qualification: "B.Ed in Early Childhood",
      experience: "12 years",
      specialty: "Phonics & Literacy"
    },
    {
      name: "Mr. David Chen",
      role: "Grade 2 Teacher",
      qualification: "B.Ed in Primary Education",
      experience: "10 years",
      specialty: "Mathematics"
    },
    {
      name: "Mrs. Chioma Nwosu",
      role: "Grade 3 Teacher",
      qualification: "M.Ed in Elementary Education",
      experience: "15 years",
      specialty: "Science Education"
    },
    {
      name: "Ms. Rachel Williams",
      role: "Grade 4 Teacher",
      qualification: "B.Ed in Primary Education",
      experience: "9 years",
      specialty: "Creative Writing"
    },
    {
      name: "Mr. Tunde Adebayo",
      role: "Grade 5 Teacher",
      qualification: "M.Ed in Educational Leadership",
      experience: "14 years",
      specialty: "STEM Education"
    },
    {
      name: "Mrs. Jennifer Brown",
      role: "Grade 6 Teacher",
      qualification: "M.Ed in Curriculum & Instruction",
      experience: "16 years",
      specialty: "Secondary Preparation"
    },
    {
      name: "Ms. Grace Eze",
      role: "Special Education Teacher",
      qualification: "M.Ed in Special Education",
      experience: "11 years",
      specialty: "Learning Support"
    },
    {
      name: "Mr. James Miller",
      role: "Music Teacher",
      qualification: "B.A in Music Education",
      experience: "13 years",
      specialty: "Instrumental & Vocal"
    },
    {
      name: "Mrs. Fatima Hassan",
      role: "Art Teacher",
      qualification: "B.F.A, Teaching Cert",
      experience: "10 years",
      specialty: "Visual Arts"
    },
    {
      name: "Mr. Robert Davis",
      role: "Physical Education Teacher",
      qualification: "B.Ed in Physical Education",
      experience: "12 years",
      specialty: "Sports & Fitness"
    },
    {
      name: "Ms. Blessing Okoro",
      role: "ICT Teacher",
      qualification: "B.Sc Computer Science, PGDE",
      experience: "8 years",
      specialty: "Technology Integration"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-secondary/80 text-white py-20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">Our Primary Teachers</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Dedicated Educators Committed to Your Child's Success
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Meet Our Teaching Team</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Our primary section is staffed by highly qualified, experienced educators who are passionate
            about working with young children. Every teacher holds relevant qualifications and undergoes
            continuous professional development to stay current with best practices in primary education.
          </p>
        </div>

        {/* Teacher Stats */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20">
          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-3xl font-bold mb-2">100%</h3>
            <p className="text-muted-foreground">Certified Teachers</p>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-3xl font-bold mb-2">12+</h3>
            <p className="text-muted-foreground">Average Years Experience</p>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-3xl font-bold mb-2">1:25</h3>
            <p className="text-muted-foreground">Teacher to Student Ratio</p>
          </Card>
        </div>

        {/* Teacher Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachers.map((teacher, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-center mb-1">{teacher.name}</h3>
              <p className="text-sm text-secondary text-center mb-4">{teacher.role}</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong>Qualification:</strong> {teacher.qualification}</p>
                <p><strong>Experience:</strong> {teacher.experience}</p>
                <p><strong>Specialty:</strong> {teacher.specialty}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Support Staff Section */}
      <section className="bg-muted py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Support Staff</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 text-center">
              <h3 className="font-semibold mb-2">Teaching Assistants</h3>
              <p className="text-sm text-muted-foreground">
                Supporting classroom activities and individual student needs
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <h3 className="font-semibold mb-2">School Counselor</h3>
              <p className="text-sm text-muted-foreground">
                Providing emotional and social support for students
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <h3 className="font-semibold mb-2">Library Staff</h3>
              <p className="text-sm text-muted-foreground">
                Fostering love for reading and research skills
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <h3 className="font-semibold mb-2">ICT Technicians</h3>
              <p className="text-sm text-muted-foreground">
                Ensuring smooth technology integration in learning
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrimaryTeachers;
