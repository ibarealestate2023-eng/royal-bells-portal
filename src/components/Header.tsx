import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-slide-in-down">
      <nav className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 hover-scale group">
          <GraduationCap className="h-8 w-8 text-primary transition-transform group-hover:rotate-12" />
          <span className="text-xl font-bold text-primary">Royal Bells</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium transition-all hover:text-primary hover:scale-110">
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium transition-all hover:text-primary hover:scale-110">
            About
          </Link>
          <Link to="/events" className="text-sm font-medium transition-all hover:text-primary hover:scale-110">
            Events
          </Link>
          <div className="group relative">
            <button className="text-sm font-medium transition-all hover:text-primary hover:scale-110">
              Nursery
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md bg-card shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 animate-fade-in-down z-50">
              <div className="py-1">
                <Link to="/nursery" className="block px-4 py-2 text-sm hover:bg-muted">Home</Link>
                <Link to="/nursery/about" className="block px-4 py-2 text-sm hover:bg-muted">About</Link>
                <Link to="/nursery/curriculum" className="block px-4 py-2 text-sm hover:bg-muted">Classes</Link>
                <Link to="/nursery/teachers" className="block px-4 py-2 text-sm hover:bg-muted">Teachers</Link>
                <Link to="/nursery/gallery" className="block px-4 py-2 text-sm hover:bg-muted">Gallery</Link>
                <Link to="/nursery/events" className="block px-4 py-2 text-sm hover:bg-muted">Events</Link>
                <Link to="/nursery/admissions" className="block px-4 py-2 text-sm hover:bg-muted">Admissions</Link>
                <Link to="/nursery/facilities" className="block px-4 py-2 text-sm hover:bg-muted">Facilities</Link>
              </div>
            </div>
          </div>
          <div className="group relative">
            <button className="text-sm font-medium transition-all hover:text-primary hover:scale-110">
              Primary
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md bg-card shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 animate-fade-in-down z-50">
              <div className="py-1">
                <Link to="/primary" className="block px-4 py-2 text-sm hover:bg-muted">Home</Link>
                <Link to="/primary/about" className="block px-4 py-2 text-sm hover:bg-muted">About</Link>
                <Link to="/primary/curriculum" className="block px-4 py-2 text-sm hover:bg-muted">Curriculum</Link>
                <Link to="/primary/teachers" className="block px-4 py-2 text-sm hover:bg-muted">Teachers</Link>
                <Link to="/primary/gallery" className="block px-4 py-2 text-sm hover:bg-muted">Gallery</Link>
                <Link to="/primary/events" className="block px-4 py-2 text-sm hover:bg-muted">Events</Link>
                <Link to="/primary/admissions" className="block px-4 py-2 text-sm hover:bg-muted">Admissions</Link>
                <Link to="/primary/facilities" className="block px-4 py-2 text-sm hover:bg-muted">Facilities</Link>
              </div>
            </div>
          </div>
          <div className="group relative">
            <button className="text-sm font-medium transition-all hover:text-primary hover:scale-110">
              Secondary
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md bg-card shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 animate-fade-in-down z-50">
              <div className="py-1">
                <Link to="/secondary" className="block px-4 py-2 text-sm hover:bg-muted">Home</Link>
                <Link to="/secondary/about" className="block px-4 py-2 text-sm hover:bg-muted">About</Link>
                <Link to="/secondary/curriculum" className="block px-4 py-2 text-sm hover:bg-muted">Curriculum</Link>
                <Link to="/secondary/teachers" className="block px-4 py-2 text-sm hover:bg-muted">Teachers</Link>
                <Link to="/secondary/gallery" className="block px-4 py-2 text-sm hover:bg-muted">Gallery</Link>
                <Link to="/secondary/events" className="block px-4 py-2 text-sm hover:bg-muted">Events</Link>
                <Link to="/secondary/admissions" className="block px-4 py-2 text-sm hover:bg-muted">Admissions</Link>
                <Link to="/secondary/facilities" className="block px-4 py-2 text-sm hover:bg-muted">Facilities</Link>
              </div>
            </div>
          </div>
          <Link to="/contact" className="text-sm font-medium transition-all hover:text-primary hover:scale-110">
            Contact
          </Link>
          <Button asChild className="hover-scale animate-pulse-glow">
            <Link to="/contact">Apply Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t animate-slide-in-down bg-background">
          <div className="container py-4 space-y-3 max-h-[80vh] overflow-y-auto">
            <Link to="/" className="block py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="block py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link to="/events" className="block py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Events
            </Link>
            <details className="group">
              <summary className="cursor-pointer py-2 text-sm font-semibold text-accent list-none flex items-center justify-between">
                Nursery Section
                <span className="transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="pl-4 space-y-2 mt-2">
                <Link to="/nursery" className="block py-1 text-sm" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <Link to="/nursery/about" className="block py-1 text-sm" onClick={() => setMobileMenuOpen(false)}>About</Link>
                <Link to="/nursery/curriculum" className="block py-1 text-sm" onClick={() => setMobileMenuOpen(false)}>Classes</Link>
                <Link to="/nursery/teachers" className="block py-1 text-sm" onClick={() => setMobileMenuOpen(false)}>Teachers</Link>
                <Link to="/nursery/gallery" className="block py-1 text-sm" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
                <Link to="/nursery/events" className="block py-1 text-sm" onClick={() => setMobileMenuOpen(false)}>Events</Link>
                <Link to="/nursery/admissions" className="block py-1 text-sm" onClick={() => setMobileMenuOpen(false)}>Admissions</Link>
                <Link to="/nursery/facilities" className="block py-1 text-sm" onClick={() => setMobileMenuOpen(false)}>Facilities</Link>
              </div>
            </details>
            <details className="group">
              <summary className="cursor-pointer py-2 text-sm font-semibold text-secondary list-none flex items-center justify-between">
                Primary Section
                <span className="transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="pl-4 space-y-2 mt-2">
                <Link to="/primary" className="block py-1 text-sm" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <Link to="/primary/about" className="block py-1 text-sm" onClick={() => setMobileMenuOpen(false)}>About</Link>
                <Link to="/primary/curriculum" className="block py-1 text-sm" onClick={() => setMobileMenuOpen(false)}>Curriculum</Link>
                <Link to="/primary/teachers" className="block py-1 text-sm" onClick={() => setMobileMenuOpen(false)}>Teachers</Link>
                <Link to="/primary/gallery" className="block py-1 text-sm" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
                <Link to="/primary/events" className="block py-1 text-sm" onClick={() => setMobileMenuOpen(false)}>Events</Link>
                <Link to="/primary/admissions" className="block py-1 text-sm" onClick={() => setMobileMenuOpen(false)}>Admissions</Link>
                <Link to="/primary/facilities" className="block py-1 text-sm" onClick={() => setMobileMenuOpen(false)}>Facilities</Link>
              </div>
            </details>
            <details className="group">
              <summary className="cursor-pointer py-2 text-sm font-semibold text-primary list-none flex items-center justify-between">
                Secondary Section
                <span className="transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="pl-4 space-y-2 mt-2">
                <Link to="/secondary" className="block py-1 text-sm" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <Link to="/secondary/about" className="block py-1 text-sm" onClick={() => setMobileMenuOpen(false)}>About</Link>
                <Link to="/secondary/curriculum" className="block py-1 text-sm" onClick={() => setMobileMenuOpen(false)}>Curriculum</Link>
                <Link to="/secondary/teachers" className="block py-1 text-sm" onClick={() => setMobileMenuOpen(false)}>Teachers</Link>
                <Link to="/secondary/gallery" className="block py-1 text-sm" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
                <Link to="/secondary/events" className="block py-1 text-sm" onClick={() => setMobileMenuOpen(false)}>Events</Link>
                <Link to="/secondary/admissions" className="block py-1 text-sm" onClick={() => setMobileMenuOpen(false)}>Admissions</Link>
                <Link to="/secondary/facilities" className="block py-1 text-sm" onClick={() => setMobileMenuOpen(false)}>Facilities</Link>
              </div>
            </details>
            <Link to="/contact" className="block py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <Button asChild className="w-full">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Apply Now</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
