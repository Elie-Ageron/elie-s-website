import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, Component, ReactNode } from "react";
import { MotionConfig } from "framer-motion";
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
const CityLandingPage = lazy(() => import("./pages/CityLandingPage"));
// const Apps = lazy(() => import("./pages/Apps")); // hidden - future service

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// Catch render errors so users see an error message instead of a blank page
class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null };
  static getDerivedStateFromError(error: Error) { return { error }; }
  render() {
    if (this.state.error) {
      const err = this.state.error as Error;
      const isChunkError = err.message.includes('Failed to fetch dynamically imported') || err.message.includes('Loading chunk') || err.message.includes('Failed to load');
      return (
        <div style={{ minHeight: '100vh', background: 'hsl(30 20% 98%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui, sans-serif' }}>
          <div style={{ textAlign: 'center', padding: 32, maxWidth: 400 }}>
            <h2 style={{ color: '#c4516b', marginBottom: 12, fontSize: 20 }}>
              {isChunkError ? 'Mise à jour disponible' : 'Erreur de rendu'}
            </h2>
            <p style={{ color: '#666', marginBottom: 24, lineHeight: 1.6 }}>
              {isChunkError
                ? 'Le site a été mis à jour. Rechargez la page pour voir la nouvelle version.'
                : "Une erreur JavaScript s’est produite."}
            </p>
            <button
              onClick={() => { localStorage.removeItem('chunk-reload'); window.location.href = window.location.href; }}
              style={{ padding: '12px 28px', background: '#c4516b', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer', fontSize: 15, fontWeight: 600 }}
            >
              Recharger la page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const App = () => (
  <ErrorBoundary>
    <MotionConfig reducedMotion="user">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CalendlyProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Analytics />
            <Layout>
              <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/why-a-website" element={<WhyWebsite />} />
                  <Route path="/our-process" element={<OurProcess />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  {/* <Route path="/apps" element={<Apps />} /> */}{/* hidden - future service */}
                  {/* City landing pages */}
                  <Route path="/web-designer-annecy" element={<CityLandingPage slug="web-designer-annecy" />} />
                  <Route path="/creation-site-web-haute-savoie" element={<CityLandingPage slug="creation-site-web-haute-savoie" />} />
                  <Route path="/mentions-legales" element={<LegalPage page="mentions" />} />
                  <Route path="/politique-confidentialite" element={<LegalPage page="privacy" />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </Layout>
          </BrowserRouter>
          <CalendlyPopup />
        </CalendlyProvider>
      </TooltipProvider>
    </QueryClientProvider>
    </MotionConfig>
  </ErrorBoundary>
);

export default App;
