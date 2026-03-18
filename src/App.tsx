import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, Component, ReactNode } from "react";
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
const Apps = lazy(() => import("./pages/Apps"));

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
      return (
        <div style={{ padding: 32, fontFamily: 'system-ui, sans-serif', maxWidth: 600, margin: '60px auto' }}>
          <h2 style={{ color: '#c4516b', marginBottom: 8 }}>Erreur de rendu</h2>
          <p style={{ color: '#666', marginBottom: 16 }}>Une erreur JavaScript s'est produite. Vérifiez la console du navigateur.</p>
          <pre style={{ background: '#f5f5f5', padding: 16, borderRadius: 8, overflow: 'auto', fontSize: 13 }}>
            {err.message}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

const App = () => (
  <ErrorBoundary>
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
                  <Route path="/apps" element={<Apps />} />
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
  </ErrorBoundary>
);

export default App;
