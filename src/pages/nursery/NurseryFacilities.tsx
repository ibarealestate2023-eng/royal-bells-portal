import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Baby, Home, Palette, Music, TreePine, BookOpen } from "lucide-react";

const NurseryFacilities = () => {
  const facilities = [
    {
      icon: Home,
      title: "Bright Classrooms",
      description: "Colorful, spacious classrooms designed specifically for young learners with age-appropriate furniture and resources."
    },
    {
      icon: TreePine,
      title: "Outdoor Play Area",
      description: "Safe, secure outdoor space with play equipment, sandpit, and garden area for physical development and exploration."
    },
    {
      icon: Palette,
      title: "Creative Arts Corner",
      description: "Dedicated art and craft area with messy play facilities, easels, and a wide range of creative materials."
    },
    {
      icon: Music,
      title: "Music & Movement Room",
      description: "Special room for music activities, dance, and physical play with instruments and audio equipment."
    },
    {
      icon: BookOpen,
      title: "Reading Corner",
      description: "Cozy library area with comfortable seating and a wide selection of age-appropriate books and stories."
    },
    {
      icon: Baby,
      title: "Sleep & Rest Area",
      description: "Quiet, comfortable space for younger children who need rest time during the day."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <section className="bg-gradient-to-r from-accent to-accent/80 text-white py-20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">Nursery Facilities</h1>
          <p className="text-xl">A Safe, Stimulating Environment for Young Learners</p>
        </div>
      </section>

      <section className="container py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">World-Class Nursery Facilities</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our nursery is specially designed to provide a safe, nurturing environment where young 
              children can learn, play, and grow with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {facilities.map((facility, index) => (
              <Card key={index} className="p-6 hover-lift hover-glow">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <facility.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{facility.title}</h3>
                <p className="text-muted-foreground">{facility.description}</p>
              </Card>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Special Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-accent">Safety & Security</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Secure entry and exit points</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>CCTV monitoring throughout</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Child-safe furniture and equipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Regular safety inspections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>First aid trained staff</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-accent">Health & Hygiene</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Clean, child-sized washrooms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Regular sanitization schedules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Hand washing stations in classrooms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Healthy snacks and meals provided</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Sick child policy and procedures</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>

          <Card className="p-8 bg-accent/5">
            <h2 className="text-2xl font-bold mb-6 text-center">Learning Resources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-bold mb-2">Educational Toys</h3>
                <p className="text-sm text-muted-foreground">
                  Wide range of age-appropriate toys and manipulatives for hands-on learning
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-bold mb-2">Technology</h3>
                <p className="text-sm text-muted-foreground">
                  Interactive displays and tablets with educational apps for digital literacy
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-bold mb-2">Natural Materials</h3>
                <p className="text-sm text-muted-foreground">
                  Blocks, sand, water, and nature resources for sensory exploration
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NurseryFacilities;