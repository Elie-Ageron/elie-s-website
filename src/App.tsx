import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Analytics from "./components/Analytics";
import { CalendlyProvider } from "./contexts/CalendlyContext";
import { CalendlyPopup } from "./components/CalendlyPopup";

// Lazy-load all pages so only the current page's JS is downloaded on first visit
const Home = lazy(() => import("./pages/Home"));
const WhyWebsite = lazy(() => import("./pages/WhyWebsite"));
const OurProcess = lazy(() => import("./pages/OurProcess"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const NotFound = lazy(() => import("./pages/NotFound"));
const LegalPage = lazy(() => import("./pages/LegalPage"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Marketing site - data doesn't change often; avoid refetches on window focus
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CalendlyProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Analytics />
        <Layout>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/why-a-website" element={<WhyWebsite />} />
              <Route path="/our-process" element={<OurProcess />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/mentions-legales" element={<LegalPage page="mentions" />} />
              <Route path="/politique-confidentialite" element={<LegalPage page="privacy" />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
      <CalendlyPopup />
      </CalendlyProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
