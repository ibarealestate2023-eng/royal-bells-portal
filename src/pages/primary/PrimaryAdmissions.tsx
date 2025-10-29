import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2, FileText, Calendar, Users } from "lucide-react";

const PrimaryAdmissions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-secondary/80 text-white py-20">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6">Primary Admissions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join Our Community of Learners
          </p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Admission Process</h2>
          <p className="text-lg text-muted-foreground">
            We welcome applications throughout the year. Follow these simple steps to enroll your child
            in our Primary Section.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-secondary">1</span>
            </div>
            <h3 className="font-bold mb-2">Submit Application</h3>
            <p className="text-sm text-muted-foreground">
              Complete and submit the online application form
            </p>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-secondary">2</span>
            </div>
            <h3 className="font-bold mb-2">Assessment</h3>
            <p className="text-sm text-muted-foreground">
              Student takes age-appropriate assessment
            </p>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-secondary">3</span>
            </div>
            <h3 className="font-bold mb-2">Interview</h3>
            <p className="text-sm text-muted-foreground">
              Parent meeting with admissions team
            </p>
          </Card>
          
          <Card className="p-6 text-center">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-secondary">4</span>
            </div>
            <h3 className="font-bold mb-2">Enrollment</h3>
            <p className="text-sm text-muted-foreground">
              Complete enrollment and pay fees
            </p>
          </Card>
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link to="/contact">Start Application</Link>
          </Button>
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-muted py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Admission Requirements</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8">
              <FileText className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Required Documents</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span>Completed application form</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span>Birth certificate (original and copy)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span>Previous school report cards (if applicable)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span>Immunization records</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span>Passport photographs (4 copies)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <span>Parent/Guardian ID copies</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-8">
              <Users className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Age Requirements</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-1">Grade 1:</p>
                  <p className="text-muted-foreground">5 years old by September 1st</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Grade 2:</p>
                  <p className="text-muted-foreground">6 years old by September 1st</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Grade 3-6:</p>
                  <p className="text-muted-foreground">Appropriate age for grade level</p>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    Transfer students accepted at any grade level subject to space availability
                    and satisfactory assessment results.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Fees */}
      <section className="container py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Tuition & Fees (2024/2025)</h2>
        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-4 border-b">
                <span className="font-semibold">Tuition (Annual)</span>
                <span className="text-2xl font-bold text-secondary">₦850,000</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b">
                <span>Development Fee (One-time)</span>
                <span className="font-semibold">₦150,000</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b">
                <span>Books & Materials</span>
                <span className="font-semibold">₦75,000</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b">
                <span>Uniform</span>
                <span className="font-semibold">₦45,000</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b">
                <span>Extracurricular Activities</span>
                <span className="font-semibold">₦35,000</span>
              </div>
              
              <div className="bg-secondary/10 rounded-lg p-6 mt-6">
                <h3 className="font-bold mb-4">Payment Options:</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Full payment: 5% discount</li>
                  <li>• Two installments: Payment at beginning of each term</li>
                  <li>• Three installments: Available with additional processing fee</li>
                </ul>
              </div>
              
              <div className="text-sm text-muted-foreground mt-6">
                <p><strong>Note:</strong> Fees are subject to annual review. Sibling discounts available.</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Important Dates */}
      <section className="bg-muted py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Important Dates</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 text-center">
              <Calendar className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Application Deadline</h3>
              <p className="text-2xl font-bold text-secondary mb-2">Rolling</p>
              <p className="text-sm text-muted-foreground">Applications accepted year-round</p>
            </Card>
            
            <Card className="p-6 text-center">
              <Calendar className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Assessment Dates</h3>
              <p className="text-2xl font-bold text-secondary mb-2">Weekly</p>
              <p className="text-sm text-muted-foreground">Scheduled after application review</p>
            </Card>
            
            <Card className="p-6 text-center">
              <Calendar className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Term Start</h3>
              <p className="text-2xl font-bold text-secondary mb-2">Sept 2025</p>
              <p className="text-sm text-muted-foreground">Academic year begins</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-20">
        <Card className="p-12 text-center bg-gradient-to-r from-secondary to-secondary/80 text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your child's journey with Royal Bells Primary Section today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-secondary hover:bg-white/90">
              <Link to="/contact">Apply Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Schedule a Visit</Link>
            </Button>
          </div>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default PrimaryAdmissions;
