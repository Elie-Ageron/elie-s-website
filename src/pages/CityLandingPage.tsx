import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, CheckCircle, Star, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCalendly } from '@/contexts/CalendlyContext';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQAccordion from '@/components/FAQAccordion';
import FAQSchema from '@/components/FAQSchema';
import ContactMethodsSection from '@/components/ContactMethodsSection';
import { cities } from '@/data/cities';

interface CityLandingPageProps {
  slug: string;
}

const CityLandingPage = ({ slug }: CityLandingPageProps) => {
  const { language } = useLanguage();
  const { openCalendly } = useCalendly();

  const city = cities.find(c => c.slug === slug);
  if (!city) return null;

  const d = city[language];
  const baseUrl = 'https://elieageron.com';

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Elie Ageron Web Design',
    url: baseUrl,
    image: `${baseUrl}/og-image.png`,
    description: d.description,
    telephone: '+33695555318',
    email: 'web@elieageron.com',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      addressLocality: d.name,
      addressRegion: city.department,
      postalCode: city.postalCode,
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: city.lat,
      longitude: city.lng,
    },
    areaServed: { '@type': 'City', name: d.name },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '3',
      bestRating: '5',
      worstRating: '1',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: language === 'fr' ? 'Services Web Design' : 'Web Design Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: language === 'fr' ? 'Landing Page' : 'Landing Page',
          price: '500',
          priceCurrency: 'EUR',
          description: language === 'fr'
            ? `Landing page haute conversion pour entreprises à ${d.name}`
            : `High-conversion landing page for businesses in ${d.name}`,
        },
        {
          '@type': 'Offer',
          name: language === 'fr' ? 'Site Vitrine 4 Pages' : '4-Page Showcase Site',
          price: '1500',
          priceCurrency: 'EUR',
          description: language === 'fr'
            ? `Site vitrine complet avec SEO local optimisé pour ${d.name}`
            : `Full showcase site with local SEO optimized for ${d.name}`,
        },
      ],
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: language === 'fr' ? 'Accueil' : 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: d.breadcrumb, item: `${baseUrl}/${slug}` },
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
        <title>{d.title}</title>
        <meta name="description" content={d.description} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={`${baseUrl}/${slug}`} />
        <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/${slug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${baseUrl}/${slug}`} />
        <meta property="og:title" content={d.title} />
        <meta property="og:description" content={d.description} />
        <meta property="og:image" content={`${baseUrl}/og-image.png`} />
        <meta property="og:site_name" content="Elie Ageron Web Design" />
        <meta name="geo.region" content={city.departmentCode} />
        <meta name="geo.placename" content={d.name} />
        <meta name="geo.position" content={`${city.lat};${city.lng}`} />
        <meta name="ICBM" content={`${city.lat}, ${city.lng}`} />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <FAQSchema page="home" />

      {/* Hero */}
      <section
        className="relative min-h-[85vh] flex items-center justify-center overflow-hidden grain px-4 sm:px-6"
        aria-labelledby="city-hero-heading"
      >
        <div className="absolute inset-0 z-[1] pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-primary/5 rounded-full blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto py-16 text-center">
          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <MapPin className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
            <span className="text-sm text-muted-foreground">{d.name}, {city.department}</span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            id="city-hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg"
          >
            <span className="text-foreground">{d.h1Pre}</span>
            <span className="text-primary">{d.h1Highlight}</span>
          </motion.h1>

          {/* H2 subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg sm:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto font-medium"
          >
            {d.h2}
          </motion.p>

          {/* City-specific intro paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-sm sm:text-base text-muted-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {d.intro}
          </motion.p>

          {/* CTAs */}
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
              aria-label={language === 'fr' ? `Réserver un appel gratuit - Web designer ${d.name}` : `Book a free call - Web designer ${d.name}`}
            >
              {language === 'fr' ? 'Obtenir mon audit gratuit' : 'Get my free audit'}
            </Button>
            <Button
              variant="ghost"
              size="xl"
              className="min-h-[56px] px-8 text-base text-muted-foreground hover:text-foreground group w-full sm:w-auto"
              asChild
            >
              <Link to="/pricing" className="flex items-center gap-2">
                {language === 'fr' ? 'Voir les tarifs' : 'See pricing'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>

          {/* Scarcity */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground/70"
          >
            <span className="w-1.5 h-1.5 bg-primary/70 rounded-full shrink-0" aria-hidden="true" />
            {language === 'fr'
              ? 'Places limitées — je travaille avec peu de clients à la fois pour garantir la qualité.'
              : 'Limited spots — I work with a select few clients at a time to guarantee quality.'}
          </motion.p>

          {/* Social proof badges */}
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

      {/* Reuse core sections */}
      <TestimonialsSection />
      <ServicesSection />
      <FAQAccordion />
      <ContactMethodsSection />
    </>
  );
};

export default CityLandingPage;
