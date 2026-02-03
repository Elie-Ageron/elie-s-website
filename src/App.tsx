import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load all pages for faster initial load
const Home = lazy(() => import("./pages/Home"));
const WhyWebsite = lazy(() => import("./pages/WhyWebsite"));
const OurProcess = lazy(() => import("./pages/OurProcess"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const LuxuraSpa = lazy(() => import("./pages/portfolio/LuxuraSpa"));
const SteelPipe = lazy(() => import("./pages/portfolio/SteelPipe"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Portfolio showcase pages - standalone, no Layout wrapper */}
          <Route path="/portfolio/luxura-spa" element={
            <Suspense fallback={null}><LuxuraSpa /></Suspense>
          } />
          <Route path="/portfolio/steel-pipe" element={
            <Suspense fallback={null}><SteelPipe /></Suspense>
          } />
          
          {/* Main site pages - wrapped in Layout */}
          <Route path="*" element={
            <Layout>
              <Suspense fallback={null}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/why-a-website" element={<WhyWebsite />} />
                  <Route path="/our-process" element={<OurProcess />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/contact" element={<Contact />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </Layout>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
