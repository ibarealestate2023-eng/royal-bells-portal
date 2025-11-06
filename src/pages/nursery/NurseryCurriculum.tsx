import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Baby, BookOpen, Music, Palette } from "lucide-react";

const NurseryCurriculum = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="bg-gradient-to-r from-accent to-accent/80 text-white py-20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">Nursery Classes</h1>
          <p className="text-xl">Age-Appropriate Learning Programs</p>
        </div>
      </section>

      <section className="container py-20">
        <div className="max-w-5xl mx-auto">
          <p className="text-lg text-muted-foreground mb-12 text-center">
            Our nursery curriculum is designed around play-based learning, helping children develop 
            essential skills through fun, engaging activities tailored to each age group.
          </p>

          <Tabs defaultValue="baby1" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
              <TabsTrigger value="baby1">Baby Class 1</TabsTrigger>
              <TabsTrigger value="baby2">Baby Class 2</TabsTrigger>
              <TabsTrigger value="reception">Reception</TabsTrigger>
              <TabsTrigger value="nursery1">Nursery 1</TabsTrigger>
              <TabsTrigger value="nursery2">Nursery 2</TabsTrigger>
            </TabsList>

            <TabsContent value="baby1">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-4">Baby Class 1 (Ages 2-3)</h2>
                <p className="text-muted-foreground mb-6">
                  The youngest learners begin their educational journey with sensory exploration and 
                  basic social interaction in a loving, secure environment.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Learning Focus</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Sensory play and exploration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Basic colors and shapes recognition</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Motor skills development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Simple songs and rhymes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Social interaction basics</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Activities</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Water and sand play</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Building blocks and puzzles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Story time and picture books</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Creative art with finger painting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Music and movement</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="baby2">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-4">Baby Class 2 (Ages 3-4)</h2>
                <p className="text-muted-foreground mb-6">
                  Children develop language skills, independence, and begin structured learning activities 
                  while building confidence through play.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Learning Focus</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Language development and vocabulary</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Number recognition (1-10)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Letter sounds introduction</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Fine motor skills practice</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Following simple instructions</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Activities</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Interactive storytelling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Counting games and sorting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Drawing and coloring</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Role play and dress up</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Outdoor exploration</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="reception">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-4">Reception Class (Ages 4-5)</h2>
                <p className="text-muted-foreground mb-6">
                  The bridge between nursery and primary school, focusing on school readiness while 
                  maintaining a play-based, child-centered approach.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Learning Focus</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Phonics and early reading</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Number work and simple math</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Writing readiness and mark-making</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Understanding the world</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Social and emotional development</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Activities</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Phonics games and letter formation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Math activities and problem solving</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Science experiments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Creative arts and crafts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>PE and team games</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="nursery1">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-4">Nursery 1 (Ages 3-4)</h2>
                <p className="text-muted-foreground mb-6">
                  Building independence and social skills through structured play, group activities, 
                  and creative exploration.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Learning Focus</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Communication and language</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Personal, social & emotional skills</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Physical development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Creative expression</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Early literacy and numeracy</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Activities</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Group story sessions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Painting and modeling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Construction and building</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Songs and musical instruments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Nature walks and gardening</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="nursery2">
              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-4">Nursery 2 (Ages 4-5)</h2>
                <p className="text-muted-foreground mb-6">
                  Preparing for primary school with increased focus on academic readiness alongside 
                  continued play-based learning and social development.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Learning Focus</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Pre-reading and phonics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Pre-writing and pencil control</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Numbers, counting & simple sums</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Independent learning skills</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Confidence and self-esteem</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Activities</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Letter and sound recognition games</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Writing practice and patterns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Math games and puzzles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Project work and investigations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Drama and presentations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Learning Areas</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center hover-lift">
                <BookOpen className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Literacy</h3>
                <p className="text-sm text-muted-foreground">Stories, phonics, and early reading</p>
              </Card>
              
              <Card className="p-6 text-center hover-lift">
                <Baby className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Numeracy</h3>
                <p className="text-sm text-muted-foreground">Numbers, counting, and shapes</p>
              </Card>
              
              <Card className="p-6 text-center hover-lift">
                <Palette className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Creative Arts</h3>
                <p className="text-sm text-muted-foreground">Art, craft, and creative expression</p>
              </Card>
              
              <Card className="p-6 text-center hover-lift">
                <Music className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Music & Movement</h3>
                <p className="text-sm text-muted-foreground">Songs, rhythm, and physical play</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NurseryCurriculum;