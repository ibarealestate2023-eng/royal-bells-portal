import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Calculator, Microscope, Globe, Palette, Music } from "lucide-react";

const PrimaryCurriculum = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-secondary/80 text-white py-20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">Primary Curriculum</h1>
          <p className="text-xl max-w-3xl mx-auto">
            A Balanced, Engaging, and Comprehensive Learning Experience
          </p>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Our Curriculum Approach</h2>
          <p className="text-lg text-muted-foreground">
            Our primary curriculum follows the Nigerian National Curriculum with enrichment activities
            that promote critical thinking, creativity, and global awareness. We integrate traditional
            subjects with modern learning methods to prepare students for success.
          </p>
        </div>

        {/* Subject Areas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="p-6">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-2">English Language</h3>
            <p className="text-muted-foreground">Reading, writing, speaking, listening, phonics, grammar, and literature</p>
          </Card>
          
          <Card className="p-6">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
              <Calculator className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Mathematics</h3>
            <p className="text-muted-foreground">Number sense, operations, geometry, measurement, data handling, problem-solving</p>
          </Card>
          
          <Card className="p-6">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
              <Microscope className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Science</h3>
            <p className="text-muted-foreground">Life science, physical science, earth science, scientific method, experiments</p>
          </Card>
          
          <Card className="p-6">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Social Studies</h3>
            <p className="text-muted-foreground">History, geography, civics, culture, community, environment</p>
          </Card>
          
          <Card className="p-6">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
              <Palette className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Creative Arts</h3>
            <p className="text-muted-foreground">Visual arts, drama, crafts, creative expression, art history</p>
          </Card>
          
          <Card className="p-6">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
              <Music className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Music & PE</h3>
            <p className="text-muted-foreground">Music theory, instruments, singing, sports, fitness, coordination</p>
          </Card>
        </div>
      </section>

      {/* Grade by Grade */}
      <section className="bg-muted py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Grade Level Focus</h2>
          <Tabs defaultValue="grade1" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
              <TabsTrigger value="grade1">Grade 1</TabsTrigger>
              <TabsTrigger value="grade2">Grade 2</TabsTrigger>
              <TabsTrigger value="grade3">Grade 3</TabsTrigger>
              <TabsTrigger value="grade4">Grade 4</TabsTrigger>
              <TabsTrigger value="grade5">Grade 5</TabsTrigger>
              <TabsTrigger value="grade6">Grade 6</TabsTrigger>
            </TabsList>
            
            <TabsContent value="grade1" className="mt-6">
              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-4">Grade 1 Focus</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Academic Focus</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Phonics and basic reading</li>
                      <li>• Number recognition and counting</li>
                      <li>• Simple addition and subtraction</li>
                      <li>• Basic science concepts</li>
                      <li>• Handwriting development</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Skills Development</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Following instructions</li>
                      <li>• Social interaction</li>
                      <li>• Fine motor skills</li>
                      <li>• Classroom routines</li>
                      <li>• Self-expression</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="grade2" className="mt-6">
              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-4">Grade 2 Focus</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Academic Focus</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Reading fluency</li>
                      <li>• Two-digit arithmetic</li>
                      <li>• Introduction to multiplication</li>
                      <li>• Basic science experiments</li>
                      <li>• Creative writing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Skills Development</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Independent work habits</li>
                      <li>• Collaboration skills</li>
                      <li>• Problem-solving</li>
                      <li>• Responsibility</li>
                      <li>• Confidence building</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="grade3" className="mt-6">
              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-4">Grade 3 Focus</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Academic Focus</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Reading comprehension</li>
                      <li>• Multiplication tables</li>
                      <li>• Division concepts</li>
                      <li>• Scientific method</li>
                      <li>• Essay writing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Skills Development</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Critical thinking</li>
                      <li>• Research skills</li>
                      <li>• Time management</li>
                      <li>• Leadership basics</li>
                      <li>• Technology use</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="grade4" className="mt-6">
              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-4">Grade 4 Focus</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Academic Focus</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Advanced reading skills</li>
                      <li>• Fractions and decimals</li>
                      <li>• Multi-step problems</li>
                      <li>• Ecosystem studies</li>
                      <li>• Research projects</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Skills Development</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Analytical thinking</li>
                      <li>• Presentation skills</li>
                      <li>• Teamwork</li>
                      <li>• Goal setting</li>
                      <li>• Self-assessment</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="grade5" className="mt-6">
              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-4">Grade 5 Focus</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Academic Focus</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Literary analysis</li>
                      <li>• Advanced mathematics</li>
                      <li>• Scientific investigations</li>
                      <li>• World history</li>
                      <li>• Persuasive writing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Skills Development</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Independent learning</li>
                      <li>• Debate skills</li>
                      <li>• Digital literacy</li>
                      <li>• Project management</li>
                      <li>• Peer mentoring</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="grade6" className="mt-6">
              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-4">Grade 6 Focus</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Academic Focus</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Secondary preparation</li>
                      <li>• Pre-algebra concepts</li>
                      <li>• Advanced science topics</li>
                      <li>• Global studies</li>
                      <li>• Academic writing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Skills Development</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Study strategies</li>
                      <li>• Leadership roles</li>
                      <li>• Advanced technology</li>
                      <li>• Transition readiness</li>
                      <li>• Self-advocacy</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrimaryCurriculum;
