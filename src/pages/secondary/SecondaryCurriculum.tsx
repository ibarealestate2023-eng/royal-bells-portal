import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Calculator, Microscope, Globe, Languages, Computer } from "lucide-react";

const SecondaryCurriculum = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">Secondary Curriculum</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive Education for Future Success
          </p>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Our Curriculum Framework</h2>
          <p className="text-lg text-muted-foreground">
            Our secondary curriculum follows the Nigerian National Curriculum while incorporating
            international best practices. We prepare students for WAEC, NECO, and university entrance
            examinations with a focus on deep understanding and practical application.
          </p>
        </div>

        {/* Subject Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Languages className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Languages</h3>
            <p className="text-muted-foreground">English Language, Literature, French, Yoruba/Igbo</p>
          </Card>
          
          <Card className="p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Microscope className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Sciences</h3>
            <p className="text-muted-foreground">Biology, Chemistry, Physics, Agricultural Science</p>
          </Card>
          
          <Card className="p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Calculator className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Mathematics</h3>
            <p className="text-muted-foreground">Core Mathematics, Further Mathematics, Statistics</p>
          </Card>
          
          <Card className="p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Social Sciences</h3>
            <p className="text-muted-foreground">History, Geography, Economics, Government</p>
          </Card>
          
          <Card className="p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Commercial</h3>
            <p className="text-muted-foreground">Accounting, Commerce, Business Studies</p>
          </Card>
          
          <Card className="p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Computer className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Technology</h3>
            <p className="text-muted-foreground">Computer Science, Information Technology</p>
          </Card>
        </div>
      </section>

      {/* Class Structure */}
      <section className="bg-muted py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Academic Structure</h2>
          <Tabs defaultValue="jss" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="jss">Junior Secondary (JSS 1-3)</TabsTrigger>
              <TabsTrigger value="ss">Senior Secondary (SS 1-3)</TabsTrigger>
            </TabsList>
            
            <TabsContent value="jss" className="mt-6">
              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-4">Junior Secondary School</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Core Subjects (Compulsory)</h4>
                    <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                      <li>• English Language</li>
                      <li>• Mathematics</li>
                      <li>• Basic Science & Technology</li>
                      <li>• Social Studies</li>
                      <li>• Civic Education</li>
                      <li>• Religious Studies</li>
                      <li>• Physical & Health Education</li>
                      <li>• Computer Studies</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Vocational Subjects (Choose 2)</h4>
                    <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                      <li>• Agricultural Science</li>
                      <li>• Home Economics</li>
                      <li>• Creative Arts</li>
                      <li>• Business Studies</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Language Options</h4>
                    <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                      <li>• French</li>
                      <li>• Yoruba</li>
                      <li>• Igbo</li>
                      <li>• Hausa</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="ss" className="mt-6">
              <Card className="p-6">
                <h3 className="text-2xl font-bold mb-4">Senior Secondary School</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Core Subjects (All Students)</h4>
                    <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                      <li>• English Language</li>
                      <li>• Mathematics</li>
                      <li>• Civic Education</li>
                      <li>• Economics (or Agricultural Science)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Science Track</h4>
                    <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                      <li>• Biology</li>
                      <li>• Chemistry</li>
                      <li>• Physics</li>
                      <li>• Further Mathematics (optional)</li>
                      <li>• Computer Science</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Commercial Track</h4>
                    <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                      <li>• Accounting</li>
                      <li>• Commerce</li>
                      <li>• Economics</li>
                      <li>• Business Management</li>
                      <li>• Computer Science</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Arts Track</h4>
                    <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                      <li>• Literature in English</li>
                      <li>• Government</li>
                      <li>• History</li>
                      <li>• Geography</li>
                      <li>• CRS/IRS</li>
                      <li>• Languages (French, Yoruba, etc.)</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Examinations */}
      <section className="container py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Examination Preparation</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-3">BECE</h3>
            <p className="text-sm text-muted-foreground mb-3">Basic Education Certificate Examination</p>
            <p className="text-sm text-muted-foreground">
              Taken at the end of JSS 3, this exam determines transition to senior secondary school.
            </p>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-3">WAEC</h3>
            <p className="text-sm text-muted-foreground mb-3">West African Examinations Council</p>
            <p className="text-sm text-muted-foreground">
              Primary certificate for university admission. Our students achieve 95%+ A-C passes.
            </p>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-3">NECO</h3>
            <p className="text-sm text-muted-foreground mb-3">National Examinations Council</p>
            <p className="text-sm text-muted-foreground">
              Alternative examination accepted by Nigerian universities and international institutions.
            </p>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SecondaryCurriculum;
