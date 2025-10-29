import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Royal Bells</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Excellence in education since 1995. Nurturing minds, building futures.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/primary" className="text-muted-foreground hover:text-primary transition-colors">Primary Section</Link></li>
              <li><Link to="/secondary" className="text-muted-foreground hover:text-primary transition-colors">Secondary Section</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">123 Education Avenue, Learning District, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+2341234567890" className="text-muted-foreground hover:text-primary transition-colors">
                  +234 123 456 7890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:info@royalbells.edu.ng" className="text-muted-foreground hover:text-primary transition-colors">
                  info@royalbells.edu.ng
                </a>
              </li>
            </ul>
          </div>

          {/* School Hours */}
          <div>
            <h3 className="font-semibold mb-4">School Hours</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Monday - Friday:</strong><br />8:00 AM - 3:30 PM</li>
              <li><strong>Saturday:</strong><br />9:00 AM - 12:00 PM (Admin Only)</li>
              <li><strong>Sunday:</strong><br />Closed</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Royal Bells Group of Schools. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
