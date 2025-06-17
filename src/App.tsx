
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import AdminPage from "./pages/AdminPage";
import WorkStepsPage from "./pages/WorkStepsPage";
import FAQPage from "./pages/FAQPage";
import NotFound from "./pages/NotFound";
import PerformanceOptimizer from "./components/enhanced/PerformanceOptimizer";
import SmartToaster from "./components/enhanced/SmartToaster";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SmartToaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/work-steps" element={<WorkStepsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <PerformanceOptimizer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
