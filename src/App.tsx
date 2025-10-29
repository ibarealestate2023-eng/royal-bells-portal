import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrimaryHome from "./pages/primary/PrimaryHome";
import PrimaryAbout from "./pages/primary/PrimaryAbout";
import PrimaryCurriculum from "./pages/primary/PrimaryCurriculum";
import PrimaryTeachers from "./pages/primary/PrimaryTeachers";
import PrimaryGallery from "./pages/primary/PrimaryGallery";
import PrimaryEvents from "./pages/primary/PrimaryEvents";
import PrimaryAdmissions from "./pages/primary/PrimaryAdmissions";
import PrimaryFacilities from "./pages/primary/PrimaryFacilities";
import SecondaryHome from "./pages/secondary/SecondaryHome";
import SecondaryAbout from "./pages/secondary/SecondaryAbout";
import SecondaryCurriculum from "./pages/secondary/SecondaryCurriculum";
import SecondaryTeachers from "./pages/secondary/SecondaryTeachers";
import SecondaryGallery from "./pages/secondary/SecondaryGallery";
import SecondaryEvents from "./pages/secondary/SecondaryEvents";
import SecondaryAdmissions from "./pages/secondary/SecondaryAdmissions";
import SecondaryFacilities from "./pages/secondary/SecondaryFacilities";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/primary" element={<PrimaryHome />} />
          <Route path="/primary/about" element={<PrimaryAbout />} />
          <Route path="/primary/curriculum" element={<PrimaryCurriculum />} />
          <Route path="/primary/teachers" element={<PrimaryTeachers />} />
          <Route path="/primary/gallery" element={<PrimaryGallery />} />
          <Route path="/primary/events" element={<PrimaryEvents />} />
          <Route path="/primary/admissions" element={<PrimaryAdmissions />} />
          <Route path="/primary/facilities" element={<PrimaryFacilities />} />
          <Route path="/secondary" element={<SecondaryHome />} />
          <Route path="/secondary/about" element={<SecondaryAbout />} />
          <Route path="/secondary/curriculum" element={<SecondaryCurriculum />} />
          <Route path="/secondary/teachers" element={<SecondaryTeachers />} />
          <Route path="/secondary/gallery" element={<SecondaryGallery />} />
          <Route path="/secondary/events" element={<SecondaryEvents />} />
          <Route path="/secondary/admissions" element={<SecondaryAdmissions />} />
          <Route path="/secondary/facilities" element={<SecondaryFacilities />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
