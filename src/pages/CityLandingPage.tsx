import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, ArrowUpRight, Clock, CheckCircle, Star, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCalendly } from '@/contexts/CalendlyContext';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQAccordion from '@/components/FAQAccordion';
import ContactMethodsSection from '@/components/ContactMethodsSection';
import { cities, getRelatedCities } from '@/data/cities';

interface CityLandingPageProps {
  slug: string;
}

const CityLandingPage = ({ slug }: CityLandingPageProps) => {
  const { language } = useLanguage();
  const { openCalendly } = useCalendly();

  const city = cities.find((c) => c.slug === slug);
  if (!city) return null;

  const d = city[language];
  const depth = city.depthFr;
  // Le contenu long n'existe qu'en francais : on ne le sert qu'en francais.
  const showDepth = language === 'fr' && Boolean(depth);
  const baseUrl = 'https://elieageron.com';
  const canonical = `${baseUrl}/${slug}`;
  const related = getRelatedCities(city);

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    // Meme entite entreprise que partout ailleurs, avec un areaServed cible.
    '@id': `${baseUrl}/#business`,
    name: 'Elie Ageron Web Design',
    url: baseUrl,
    image: `${baseUrl}/og-image.png`,
    description: d.description,
    telephone: '+33695555318',
    email: 'elie@elieageron.com',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Albertville',
      addressRegion: 'Savoie',
      postalCode: '73200',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 45.6756,
      longitude: 6.3925,
    },
    areaServed: [
      { '@type': city.scope === 'area' ? 'AdministrativeArea' : 'City', name: d.name },
      ...(depth?.nearby ?? []).map((name) => ({ '@type': 'City' as const, name })),
    ],
    // Note globale portee uniquement par ReviewSchema (rendu par le Layout).
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: language === 'fr' ? 'Services Web Design' : 'Web Design Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: language === 'fr' ? 'Création de site web' : 'Website design',
          description:
            language === 'fr'
              ? `Site vitrine ou landing page pour les entreprises de ${d.name}`
              : `Showcase site or landing page for businesses in ${d.name}`,
        },
        {
          '@type': 'Offer',
          name: language === 'fr' ? 'Contenu pour les réseaux sociaux' : 'Social media content',
          description:
            language === 'fr'
              ? `Tournage sur place et publication de vidéos courtes pour les entreprises de ${d.name}`
              : `On-site filming and short-form video publishing for businesses in ${d.name}`,
        },
        {
          '@type': 'Offer',
          name: language === 'fr' ? 'Référencement local' : 'Local SEO',
          description:
            language === 'fr'
              ? `Fiche Google Business et visibilité locale à ${d.name}`
              : `Google Business Profile and local visibility in ${d.name}`,
        },
      ],
    },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonical}#service`,
    name: d.title.split('|')[0].trim(),
    description: d.description,
    serviceType: language === 'fr' ? 'Création de site web et contenu réseaux sociaux' : 'Web design and social media content',
    provider: { '@id': `${baseUrl}/#business` },
    areaServed: { '@type': city.scope === 'area' ? 'AdministrativeArea' : 'City', name: d.name },
    url: canonical,
  };

  const faqSchema =
    showDepth && depth!.faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          '@id': `${canonical}#faq`,
          mainEntity: depth!.faq.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
          })),
        }
      : null;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: language === 'fr' ? 'Accueil' : 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: language === 'fr' ? 'Services' : 'Services', item: `${baseUrl}/services` },
      { '@type': 'ListItem', position: 3, name: d.breadcrumb, item: canonical },
    ],
  };

  const proofItems = [
    { icon: Users, label: language === 'fr' ? '12+ clients accompagnés' : '12+ clients served' },
    { icon: CheckCircle, label: language === 'fr' ? '100% Satisfaits' : '100% Satisfied' },
    { icon: Star, label: language === 'fr' ? 'Avis 5 étoiles' : '5-star reviews' },
    { icon: Shield, label: language === 'fr' ? 'Suivi personnalisé' : 'Personal follow-up' },
  ];

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{d.title}</title>
        <meta name="description" content={d.description} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={canonical} />
        <link rel="alternate" hrefLang="fr" href={canonical} />
        <link rel="alternate" hrefLang="en" href={canonical} />
        <link rel="alternate" hrefLang="x-default" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={d.title} />
        <meta property="og:description" content={d.description} />
        <meta property="og:image" content={`${baseUrl}/og-image.png`} />
        <meta property="og:locale" content={language === 'fr' ? 'fr_FR' : 'en_US'} />
        <meta property="og:site_name" content="Elie Ageron Web Design" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={d.title} />
        <meta name="twitter:description" content={d.description} />
        <meta name="twitter:image" content={`${baseUrl}/og-image.png`} />
        <meta name="geo.region" content={city.departmentCode} />
        <meta name="geo.placename" content={d.name} />
        <meta name="geo.position" content={`${city.lat};${city.lng}`} />
        <meta name="ICBM" content={`${city.lat}, ${city.lng}`} />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
      </Helmet>

      {/* Hero */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden grain px-4 sm:px-6"
        aria-labelledby="city-hero-heading"
      >
        <div className="absolute inset-0 z-[1] pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-primary/5 rounded-full blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto py-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <MapPin className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
            <span className="text-sm text-muted-foreground">
              {d.name}, {city.department}
            </span>
          </motion.div>

          <motion.h1
            id="city-hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg"
          >
            <span className="text-foreground">{d.h1Pre}</span>
            <span className="inline-block text-primary">{d.h1Highlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg sm:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto font-medium"
          >
            {d.h2}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-sm sm:text-base text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {d.intro}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button
              variant="hero"
              size="xl"
              className="min-h-[56px] px-8 text-base sm:text-lg w-full sm:w-auto active:scale-[0.98] transition-transform"
              onClick={openCalendly}
              aria-label={
                language === 'fr'
                  ? `Réserver un appel gratuit, web designer ${d.name}`
                  : `Book a free call, web designer ${d.name}`
              }
            >
              {language === 'fr' ? 'Obtenir mon audit gratuit' : 'Get my free audit'}
            </Button>
            <Button
              variant="ghost"
              size="xl"
              className="min-h-[56px] px-8 text-base text-muted-foreground hover:text-foreground group w-full sm:w-auto"
              asChild
            >
              <Link to="/services" className="flex items-center gap-2">
                {language === 'fr' ? 'Voir les services' : 'See services'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>

          {showDepth && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="mt-5 flex items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground"
            >
              <Clock className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
              {depth!.travel}
            </motion.p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
          >
            {proofItems.map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 text-foreground/70 text-sm font-medium">
                <item.icon className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {showDepth && (
        <>
          {/* Contexte local, la partie qui distingue cette page d'une page dupliquee */}
          <section className="py-14 sm:py-20 border-t border-border/50" aria-labelledby="city-context">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
              <h2 id="city-context" className="text-2xl sm:text-3xl font-medium leading-tight text-balance mb-6">
                {`Le contexte à ${d.name}`}
              </h2>
              <div className="space-y-5">
                {depth!.context.map((paragraph, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className="text-base sm:text-lg text-muted-foreground leading-relaxed"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-border/60">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground mb-3">
                  Les métiers que j'accompagne ici
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {depth!.sectors.join('. ')}.
                </p>
              </div>
            </div>
          </section>

          {/* Blocs editoriaux, pas de grille de cartes */}
          <section className="py-4 sm:py-8" aria-labelledby="city-approach">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
              <h2 id="city-approach" className="sr-only">{`Ma façon de travailler à ${d.name}`}</h2>
              <ul className="divide-y divide-border/60 border-y border-border/60">
                {depth!.blocks.map((block, i) => (
                  <motion.li
                    key={block.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ delay: Math.min(i * 0.06, 0.24), duration: 0.4 }}
                    className="py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-8"
                  >
                    <div className="sm:col-span-4">
                      <span className="text-xs font-mono text-primary/70">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="mt-1 text-lg sm:text-xl font-semibold leading-snug text-foreground">
                        {block.title}
                      </h3>
                    </div>
                    <p className="sm:col-span-8 text-base text-muted-foreground leading-relaxed">
                      {block.body}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </section>

          {/* Reseaux sociaux, deuxieme pilier */}
          <section className="py-14 sm:py-20" aria-labelledby="city-social">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                Réseaux sociaux
              </span>
              <h2 id="city-social" className="text-2xl sm:text-3xl font-medium leading-tight text-balance mb-5">
                {`Et si on filmait chez vous, à ${d.name} ?`}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{depth!.social}</p>
              <p className="mt-6">
                <Link
                  to="/reseaux-sociaux"
                  className="inline-flex items-center gap-1.5 min-h-[24px] text-primary font-medium hover:underline underline-offset-4"
                >
                  Voir comment se passe une journée de tournage
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </p>
            </div>
          </section>

          {/* Communes desservies, maillage semantique local */}
          <section className="py-12 sm:py-16 bg-secondary/40 border-y border-border/50" aria-labelledby="city-nearby">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
              <h2 id="city-nearby" className="text-lg sm:text-xl font-semibold text-foreground mb-4">
                {`Autour de ${d.name}`}
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Je me déplace aussi à {depth!.nearby.slice(0, -1).join(', ')} et {depth!.nearby.slice(-1)}. Si
                votre commune n'est pas dans la liste, demandez, elle est probablement sur ma route.
              </p>
            </div>
          </section>

          {/* FAQ locale, alignee sur le schema FAQPage */}
          <section className="py-14 sm:py-20" aria-labelledby="city-faq">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
              <h2 id="city-faq" className="text-2xl sm:text-3xl font-medium leading-tight mb-8">
                Questions fréquentes
              </h2>
              <dl className="divide-y divide-border/60 border-y border-border/60">
                {depth!.faq.map((item) => (
                  <div key={item.q} className="py-6">
                    <dt className="text-base sm:text-lg font-semibold text-foreground">{item.q}</dt>
                    <dd className="mt-2 text-base text-muted-foreground leading-relaxed">{item.a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        </>
      )}

      <TestimonialsSection />
      <ServicesSection />

      {/* Maillage vers les autres pages locales */}
      {related.length > 0 && (
        <section className="py-12 sm:py-16 border-t border-border/50" aria-labelledby="city-related">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 id="city-related" className="text-lg sm:text-xl font-semibold text-foreground mb-5">
              {language === 'fr' ? "J'interviens aussi ici" : 'I also work here'}
            </h2>
            <ul className="divide-y divide-border/60 border-y border-border/60">
              {related.map((c) => (
                <li key={c.slug}>
                  <Link
                    to={`/${c.slug}`}
                    className="group flex items-baseline justify-between gap-4 py-4 hover:text-primary transition-colors"
                  >
                    <span className="font-medium">{c[language].breadcrumb}</span>
                    <ArrowUpRight
                      className="w-4 h-4 shrink-0 text-primary/50 group-hover:text-primary transition-colors"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {!showDepth && <FAQAccordion />}
      <ContactMethodsSection />
    </>
  );
};

export default CityLandingPage;
