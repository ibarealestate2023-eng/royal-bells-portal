import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Microscope, BookOpen, Laptop, Dumbbell } from "lucide-react";

const SecondaryFacilities = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">Secondary Facilities</h1>
          <p className="text-xl">State-of-the-Art Learning Environment</p>
        </div>
      </section>
      <section className="container py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Microscope, title: "Science Labs", desc: "Fully equipped Biology, Chemistry, Physics labs" },
            { icon: BookOpen, title: "Library", desc: "10,000+ books and digital resources" },
            { icon: Laptop, title: "ICT Labs", desc: "50+ computers with high-speed internet" },
            { icon: Dumbbell, title: "Sports Complex", desc: "Basketball, volleyball, track & field" }
          ].map((facility, i) => (
            <Card key={i} className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <facility.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold mb-2">{facility.title}</h3>
              <p className="text-sm text-muted-foreground">{facility.desc}</p>
            </Card>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SecondaryFacilities;
