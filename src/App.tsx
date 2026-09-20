import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense, Component, ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Analytics from "./components/Analytics";
import { CalendlyProvider } from "./contexts/CalendlyContext";
import { CalendlyPopup } from "./components/CalendlyPopup";
import { cities } from "./data/cities";
import { socialCities } from "./data/social-cities";
import { servicePages } from "./data/service-pages";

// Lazy-load all pages so only the current page's JS is downloaded on first visit
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const WhyWebsite = lazy(() => import("./pages/WhyWebsite"));
const OurProcess = lazy(() => import("./pages/OurProcess"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const SocialMedia = lazy(() => import("./pages/SocialMedia"));
const AuditGratuit = lazy(() => import("./pages/AuditGratuit"));
// Page d'essai locale. `import.meta.env.DEV` est remplace par `false` au build,
// donc l'import dynamique est elimine et rien de tout ca ne part en production.
const Labo = import.meta.env.DEV ? lazy(() => import("./pages/Labo")) : null;
const GetStarted = lazy(() => import("./pages/GetStarted"));
const Assessment = lazy(() => import("./pages/Assessment"));
const NotFound = lazy(() => import("./pages/NotFound"));
const LegalPage = lazy(() => import("./pages/LegalPage"));
const CityLandingPage = lazy(() => import("./pages/CityLandingPage"));
const SocialCityPage = lazy(() => import("./pages/SocialCityPage"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const BlogCategory = lazy(() => import("./pages/BlogCategory"));
const GuidesIndex = lazy(() => import("./pages/GuidesIndex"));
const GuidePage = lazy(() => import("./pages/GuidePage"));
const About = lazy(() => import("./pages/About"));
const Card = lazy(() => import("./pages/Card"));
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

/** Un lot de code manquant : la page a ete servie avant un deploiement, les fichiers apres. */
const estErreurDeLot = (err: Error) =>
  err.message.includes('Failed to fetch dynamically imported') ||
  err.message.includes('Loading chunk') ||
  err.message.includes('Failed to load');

/** Clef du rechargement automatique, pour ne le tenter qu'une fois. */
const CLEF_RELANCE = 'elie-relance-lot';

// Catch render errors so users see an error message instead of a blank page
class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null };
  static getDerivedStateFromError(error: Error) { return { error }; }

  /**
   * 🔴 **Google a indexe une de ces pages sur son message d'erreur.**
   * Releve le 20 septembre 2026 : tout ce que l'index contenait pour
   * `/referencement-local` etait « Mise a jour disponible. Rechargez la page. »
   *
   * La cause est un deploiement en cours d'exploration. Le robot recoit un
   * HTML qui reference les fichiers d'avant, ceux ci viennent d'etre remplaces,
   * un lot ne se charge pas, et cet ecran prend toute la page. Le visiteur
   * s'en sort en cliquant ; un robot ne clique pas, il enregistre.
   *
   * On recharge donc une seule fois, tout seul. La page revient avec les bons
   * fichiers, et personne, robot compris, ne voit l'ecran d'erreur. Le drapeau
   * est en `sessionStorage` : si le rechargement echoue aussi, le message
   * s'affiche au lieu de boucler.
   *
   * ⚠️ Ne pas mettre de `noindex` sur cet ecran pour « proteger l'index ». Une
   * erreur passagere ferait alors desindexer une page saine, ce qui coute plus
   * cher que l'instantane qu'on essaie d'eviter.
   */
  componentDidCatch(error: Error) {
    if (!estErreurDeLot(error) || typeof window === 'undefined') return;
    try {
      if (window.sessionStorage.getItem(CLEF_RELANCE)) return;
      window.sessionStorage.setItem(CLEF_RELANCE, '1');
    } catch {
      return; // Stockage bloque : on ne recharge pas, au risque de boucler.
    }
    window.location.reload();
  }

  render() {
    if (this.state.error) {
      const err = this.state.error as Error;
      const isChunkError = estErreurDeLot(err);
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
              onClick={() => { try { sessionStorage.removeItem(CLEF_RELANCE); } catch { /* rien a nettoyer */ } window.location.reload(); }}
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
            <Routes>
              {/* Carte de visite virtuelle, page isolée, SANS header/footer/Layout global */}
              <Route
                path="/carte"
                element={
                  <Suspense fallback={<div style={{ minHeight: '100dvh' }} />}>
                    <Card />
                  </Suspense>
                }
              />
              {/* Toutes les autres pages : Layout global (header, footer, schémas) */}
              <Route
                path="*"
                element={
                  <Layout>
                    <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/why-a-website" element={<WhyWebsite />} />
                        <Route path="/our-process" element={<OurProcess />} />
                        {/* Page Tarifs retirée : les formules vivent sur la home, tout est sur devis. Redirection SEO. */}
                        <Route path="/pricing" element={<Navigate to="/services" replace />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/blog" element={<Blog />} />
                        {/* Pages categorie : cibles SEO a part entiere, declarees avant /blog/:slug */}
                        <Route path="/blog/categorie/:slug" element={<BlogCategory />} />
                        <Route path="/blog/:slug" element={<BlogPost />} />
                        <Route path="/reseaux-sociaux" element={<SocialMedia />} />
                        <Route path="/audit-gratuit" element={<AuditGratuit />} />
                        {Labo && <Route path="/labo" element={<Labo />} />}
                        {/* Page Événements retirée (août 2026) : l'événementiel n'est plus un service à part. Redirection SEO. */}
                        <Route path="/event-production" element={<Navigate to="/services" replace />} />
                        <Route path="/get-started" element={<GetStarted />} />
                        <Route path="/assessment" element={<Assessment />} />
                        {/* <Route path="/apps" element={<Apps />} /> */}{/* hidden - future service */}
                        {/* Pages piliers : hubs de contenu vers lesquels les articles remontent */}
                        <Route path="/guides" element={<GuidesIndex />} />
                        <Route path="/guides/:slug" element={<GuidePage />} />
                        <Route path="/a-propos" element={<About />} />
                        {/* Pages locales, generees depuis src/data/cities */}
                        {cities.map((city) => (
                          <Route
                            key={city.slug}
                            path={`/${city.slug}`}
                            element={<CityLandingPage slug={city.slug} />}
                          />
                        ))}
                        {/* Pages locales du pilier reseaux, generees depuis
                            src/data/social-cities. Voir l'en-tete de ce
                            fichier de donnees : les quinze pages ci-dessus
                            vendent toutes un site web, et une recherche
                            « community manager Albertville » n'avait aucune
                            page a atteindre sur ce site. */}
                        {socialCities.map((city) => (
                          <Route
                            key={city.slug}
                            path={`/${city.slug}`}
                            element={<SocialCityPage slug={city.slug} />}
                          />
                        ))}
                        {/* Une page par service. Cinq des sept n existaient
                            que comme des ancres de /services, et une ancre ne
                            se classe pas : pas de balise title, pas de
                            canonical, aucun classement propre. Voir l en-tete
                            de src/data/service-pages.ts. */}
                        {servicePages.map((service) => (
                          <Route
                            key={service.slug}
                            path={`/${service.slug}`}
                            element={<ServicePage slug={service.slug} />}
                          />
                        ))}
                        <Route path="/mentions-legales" element={<LegalPage page="mentions" />} />
                        <Route path="/politique-confidentialite" element={<LegalPage page="privacy" />} />
                        <Route path="*" element={<NotFound />} />
                      </Routes>
                    </Suspense>
                  </Layout>
                }
              />
            </Routes>
          </BrowserRouter>
          <CalendlyPopup />
        </CalendlyProvider>
      </TooltipProvider>
    </QueryClientProvider>
    </MotionConfig>
  </ErrorBoundary>
);

export default App;
