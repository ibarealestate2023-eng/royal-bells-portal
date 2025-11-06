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
import NurseryHome from "./pages/nursery/NurseryHome";
import NurseryAbout from "./pages/nursery/NurseryAbout";
import NurseryCurriculum from "./pages/nursery/NurseryCurriculum";
import NurseryTeachers from "./pages/nursery/NurseryTeachers";
import NurseryGallery from "./pages/nursery/NurseryGallery";
import NurseryEvents from "./pages/nursery/NurseryEvents";
import NurseryAdmissions from "./pages/nursery/NurseryAdmissions";
import NurseryFacilities from "./pages/nursery/NurseryFacilities";
import PrimaryGalleryDetail from "./pages/gallery/PrimaryGalleryDetail";
import SecondaryGalleryDetail from "./pages/gallery/SecondaryGalleryDetail";
import NurseryGalleryDetail from "./pages/gallery/NurseryGalleryDetail";
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
          <Route path="/nursery" element={<NurseryHome />} />
          <Route path="/nursery/about" element={<NurseryAbout />} />
          <Route path="/nursery/curriculum" element={<NurseryCurriculum />} />
          <Route path="/nursery/teachers" element={<NurseryTeachers />} />
          <Route path="/nursery/gallery" element={<NurseryGallery />} />
          <Route path="/nursery/events" element={<NurseryEvents />} />
          <Route path="/nursery/admissions" element={<NurseryAdmissions />} />
          <Route path="/nursery/facilities" element={<NurseryFacilities />} />
          <Route path="/primary/gallery/:id" element={<PrimaryGalleryDetail />} />
          <Route path="/secondary/gallery/:id" element={<SecondaryGalleryDetail />} />
          <Route path="/nursery/gallery/:id" element={<NurseryGalleryDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
