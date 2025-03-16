
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Collections from "./pages/Collections";
import About from "./pages/About";
import CustomDesign from "./pages/CustomDesign";
import Blog from "./pages/Blog";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import RingCollection from "./pages/collections/RingCollection";
import NecklaceCollection from "./pages/collections/NecklaceCollection";
import EarringCollection from "./pages/collections/EarringCollection";
import BraceletCollection from "./pages/collections/BraceletCollection";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/rings" element={<RingCollection />} />
          <Route path="/collections/necklaces" element={<NecklaceCollection />} />
          <Route path="/collections/earrings" element={<EarringCollection />} />
          <Route path="/collections/bracelets" element={<BraceletCollection />} />
          <Route path="/about" element={<About />} />
          <Route path="/custom" element={<CustomDesign />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
