import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2, FileText, Calendar, Users } from "lucide-react";

const NurseryAdmissions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="bg-gradient-to-r from-accent to-accent/80 text-white py-20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">Nursery Admissions</h1>
          <p className="text-xl">Join Our Nursery Family Today</p>
        </div>
      </section>

      <section className="container py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Welcome to Royal Bells Nursery</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We welcome children aged 2-5 years into our warm, caring nursery environment. 
              Our admissions process is designed to be simple and supportive for families.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Admission Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center hover-lift">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-bold mb-2">1. Inquiry</h3>
                <p className="text-sm text-muted-foreground">Contact us or submit an online inquiry form</p>
              </Card>

              <Card className="p-6 text-center hover-lift">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-bold mb-2">2. Visit</h3>
                <p className="text-sm text-muted-foreground">Schedule a visit to see our facilities</p>
              </Card>

              <Card className="p-6 text-center hover-lift">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-bold mb-2">3. Application</h3>
                <p className="text-sm text-muted-foreground">Complete and submit application form</p>
              </Card>

              <Card className="p-6 text-center hover-lift">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-bold mb-2">4. Enrollment</h3>
                <p className="text-sm text-muted-foreground">Receive confirmation and start date</p>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Entry Requirements</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span>Child must be aged 2-5 years</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span>Birth certificate copy</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span>Immunization records</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span>Two passport-sized photographs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span>Parent/guardian identification</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span>Completed health and emergency forms</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Classes & Age Groups</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="font-bold">Baby Class 1</h3>
                  <p className="text-muted-foreground">Ages 2-3 years</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="font-bold">Baby Class 2</h3>
                  <p className="text-muted-foreground">Ages 3-4 years</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="font-bold">Reception</h3>
                  <p className="text-muted-foreground">Ages 4-5 years</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="font-bold">Nursery 1</h3>
                  <p className="text-muted-foreground">Ages 3-4 years</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <h3 className="font-bold">Nursery 2</h3>
                  <p className="text-muted-foreground">Ages 4-5 years</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Fee Structure (2024-2025)</h2>
            <Card className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Class</th>
                      <th className="text-left py-3 px-4">Term Fee</th>
                      <th className="text-left py-3 px-4">Annual Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4">Baby Class 1</td>
                      <td className="py-3 px-4">₦150,000</td>
                      <td className="py-3 px-4">₦450,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Baby Class 2</td>
                      <td className="py-3 px-4">₦160,000</td>
                      <td className="py-3 px-4">₦480,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Reception</td>
                      <td className="py-3 px-4">₦170,000</td>
                      <td className="py-3 px-4">₦510,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Nursery 1</td>
                      <td className="py-3 px-4">₦165,000</td>
                      <td className="py-3 px-4">₦495,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Nursery 2</td>
                      <td className="py-3 px-4">₦175,000</td>
                      <td className="py-3 px-4">₦525,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                * Fees include learning materials, snacks, and extracurricular activities
              </p>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Important Dates</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6">
                <h3 className="font-bold mb-2">First Term</h3>
                <p className="text-muted-foreground">September - December</p>
              </Card>
              <Card className="p-6">
                <h3 className="font-bold mb-2">Second Term</h3>
                <p className="text-muted-foreground">January - March</p>
              </Card>
              <Card className="p-6">
                <h3 className="font-bold mb-2">Third Term</h3>
                <p className="text-muted-foreground">April - July</p>
              </Card>
            </div>
          </div>

          <Card className="p-8 bg-accent text-white text-center">
            <Users className="h-16 w-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
            <p className="text-xl mb-6">
              Give your child the best start in life. Contact us today to schedule a visit!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-accent hover:bg-white/90">
                <Link to="/contact">Apply Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/contact">Schedule a Visit</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NurseryAdmissions;