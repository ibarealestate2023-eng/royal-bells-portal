import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Smile, Star, Target } from "lucide-react";

const NurseryAbout = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="bg-gradient-to-r from-accent to-accent/80 text-white py-20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">About Our Nursery</h1>
          <p className="text-xl">Nurturing Young Minds with Love and Care</p>
        </div>
      </section>

      <section className="container py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Nursery Philosophy</h2>
          <p className="text-lg text-muted-foreground mb-8">
            At Royal Bells Nursery, we believe that the early years are the most crucial in a child's development. 
            Our nursery provides a warm, secure environment where children feel valued, respected, and encouraged to explore. 
            Through play-based learning, we foster curiosity, creativity, and social skills that form the foundation for 
            lifelong learning.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6">
              <Target className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide a nurturing, stimulating environment where every child can develop at their own pace, 
                building confidence, independence, and a love for learning.
              </p>
            </Card>

            <Card className="p-6">
              <Star className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the leading nursery that parents trust for giving their children the best possible start in life, 
                with a focus on holistic development and individual care.
              </p>
            </Card>
          </div>

          <h2 className="text-3xl font-bold mb-6">What Makes Us Special</h2>
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Heart className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Caring & Qualified Staff</h3>
                  <p className="text-muted-foreground">
                    Our nursery teachers are highly qualified in early childhood education and are passionate about 
                    working with young children. They create a loving atmosphere where children feel safe and happy.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Smile className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Child-Centered Approach</h3>
                  <p className="text-muted-foreground">
                    We follow each child's interests and developmental stage, providing activities that are both 
                    engaging and appropriate. Learning through play is at the heart of everything we do.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Star className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Safe & Stimulating Environment</h3>
                  <p className="text-muted-foreground">
                    Our colorful classrooms are equipped with age-appropriate toys, books, and learning materials. 
                    We maintain the highest safety standards while encouraging exploration and discovery.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6">Daily Routine</h2>
            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">8:00 AM - 8:30 AM</span>
                  <span className="text-muted-foreground">Arrival & Free Play</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">8:30 AM - 9:00 AM</span>
                  <span className="text-muted-foreground">Morning Circle Time</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">9:00 AM - 10:00 AM</span>
                  <span className="text-muted-foreground">Learning Activities</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">10:00 AM - 10:30 AM</span>
                  <span className="text-muted-foreground">Snack Time</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">10:30 AM - 11:30 AM</span>
                  <span className="text-muted-foreground">Outdoor Play</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">11:30 AM - 12:00 PM</span>
                  <span className="text-muted-foreground">Story Time & Music</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">12:00 PM - 12:30 PM</span>
                  <span className="text-muted-foreground">Lunch & Home Time</span>
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

export default NurseryAbout;