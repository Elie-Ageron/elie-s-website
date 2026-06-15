import { motion } from 'framer-motion';
import { ArrowRight, Check, Handshake, Sparkles, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import MagneticButton from '@/components/animations/MagneticButton';
import ContactMethodsSection from '@/components/ContactMethodsSection';
import InternalLinks from '@/components/InternalLinks';
import ScrollArrow from '@/components/ScrollArrow';
import SEO from '@/components/SEO';
import ServiceMockup from '@/components/ServiceMockups';
import { DeadSiteMockup, LiveSiteMockup } from '@/components/BeforeAfterSites';
import { services, type ServiceItem } from '@/data/services';

/* One full-width, alternating section per service. */
const ServiceSection = ({ service, index }: { service: ServiceItem; index: number }) => {
  const { language } = useLanguage();
  const reversed = index % 2 === 1;
  const num = String(index + 1).padStart(2, '0');

  const visual = (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex items-center justify-center pt-2 pb-8 sm:py-10 px-6"
    >
      {/* Soft glow for depth — no surrounding box */}
      <div className="absolute w-72 h-72 rounded-full bg-primary/10 blur-[90px]" aria-hidden="true" />
      <div className="relative z-10">
        <ServiceMockup id={service.id} />
      </div>
    </motion.div>
  );

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.08 }}
      className="flex flex-col justify-center"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="font-heading text-sm font-bold text-primary">{num}</span>
        <span className="h-px w-8 bg-primary/40" aria-hidden="true" />
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {service.kicker[language]}
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-[1.1] mb-4">
        {service.title[language]}
      </h2>

      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-7 max-w-xl">
        {service.desc[language]}
      </p>

      <ul className="space-y-3.5">
        {service.bullets[language].map((b, i) => (
          <li key={i} className="flex items-start gap-3 text-[15px] text-foreground/85">
            <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/12 flex-shrink-0">
              <Check className="w-3 h-3 text-primary" aria-hidden="true" />
            </span>
            <span className="leading-relaxed">{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-center gap-5">
        {service.soon ? (
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border/70 text-sm font-medium text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true" />
            {language === 'fr' ? 'Bientôt disponible' : 'Coming soon'}
          </span>
        ) : service.to ? (
          <Link
            to={service.to}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            {language === 'fr' ? 'Voir les formules' : 'See the plans'}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        ) : (
          <Link
            to="/get-started"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          >
            {language === 'fr' ? 'En parler' : "Let's talk about it"}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        )}
      </div>
    </motion.div>
  );

  return (
    <section
      id={service.anchor}
      className={`scroll-mt-28 py-14 sm:py-20 ${index % 2 === 1 ? 'bg-secondary/30' : ''}`}
      aria-labelledby={`${service.anchor}-title`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">
          {/* Content first in the DOM so mobile shows the heading, then its mockup right below */}
          <div className={reversed ? 'lg:order-2' : ''} id={`${service.anchor}-title`}>
            {content}
          </div>
          <div className={reversed ? 'lg:order-1' : ''}>{visual}</div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const { language } = useLanguage();

  const whyPartner = [
    {
      icon: Handshake,
      title: { fr: 'Un seul interlocuteur', en: 'One point of contact' },
      desc: {
        fr: "Fini de jongler entre un graphiste, une agence SEO et un community manager. Tout passe par moi.",
        en: 'No more juggling a designer, an SEO agency and a community manager. Everything goes through me.',
      },
    },
    {
      icon: Sparkles,
      title: { fr: 'Une image cohérente', en: 'A coherent image' },
      desc: {
        fr: "Site, réseaux, photos, Google : tout parle d'une seule voix, avec la même identité du premier au dernier détail.",
        en: 'Site, socials, photos, Google: everything speaks with one voice, the same identity from first to last detail.',
      },
    },
    {
      icon: Clock,
      title: { fr: 'Vous gagnez du temps', en: 'You save time' },
      desc: {
        fr: "Vous restez concentré sur votre métier. Je m'occupe de toute votre présence en ligne, mois après mois.",
        en: 'You stay focused on your craft. I handle your entire online presence, month after month.',
      },
    },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: language === 'fr' ? 'Partenaire Web - Elie Ageron' : 'Web Partner - Elie Ageron',
    description: language === 'fr'
      ? "Partenaire web complet en Savoie et Haute-Savoie : sites web, Google Business, réseaux sociaux, identité de marque, référencement local, avis clients et rédaction de contenu."
      : 'All-in-one web partner in Savoie & Haute-Savoie: websites, Google Business, social media, brand identity, local SEO, reviews and content writing.',
    url: 'https://elieageron.com/services',
    provider: { '@type': 'Person', name: 'Elie Ageron', url: 'https://elieageron.com' },
    areaServed: 'FR',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: language === 'fr' ? 'Services Partenaire Web' : 'Web Partner Services',
      itemListElement: services
        .filter((s) => !s.soon)
        .map((s) => ({
          '@type': 'Offer',
          name: s.title[language],
          description: s.short[language],
        })),
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: language === 'fr' ? 'Accueil' : 'Home', item: 'https://elieageron.com' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://elieageron.com/services' },
    ],
  };

  return (
    <>
      <SEO page="services" structuredData={[serviceSchema, breadcrumbSchema]} />

      {/* Hero */}
      <section className="relative grain min-h-screen flex items-center justify-center overflow-hidden" aria-labelledby="services-hero-heading">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/5 w-64 h-64 bg-primary/8 rounded-full blur-[110px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 -mt-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-7 text-xs sm:text-sm font-medium text-muted-foreground">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" aria-hidden="true" />
              {language === 'fr' ? 'Votre partenaire web tout-en-un' : 'Your all-in-one web partner'}
            </span>
            <h1 id="services-hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.05]">
              <span className="text-foreground">{language === 'fr' ? 'Tout votre digital,' : 'Your whole digital presence,'}</span>
              <br />
              <span className="text-primary">{language === 'fr' ? 'géré par une seule personne.' : 'managed by one person.'}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {language === 'fr'
                ? "Site web, Google Business, réseaux sociaux, identité de marque, référencement. Au lieu d'un site livré puis oublié, je vous accompagne pour faire grandir votre activité en ligne, mois après mois."
                : 'Website, Google Business, social media, brand identity, SEO. Instead of a site delivered and forgotten, I keep supporting you to grow your business online, month after month.'}
            </p>

            {/* Service pills — preview the breadth */}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.anchor}`}
                  className="px-3.5 py-1.5 rounded-full bg-card/70 border border-border/70 text-xs sm:text-sm text-foreground/70 hover:text-primary hover:border-primary/40 transition-colors backdrop-blur-sm"
                >
                  {s.title[language]}
                </a>
              ))}
            </div>

            <div className="mt-9">
              <MagneticButton>
                <Button variant="hero" size="lg" className="group" asChild>
                  <Link to="/get-started" className="flex items-center gap-2">
                    {language === 'fr' ? 'Démarrer mon projet' : 'Start my project'}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </Button>
              </MagneticButton>
            </div>
          </motion.div>
          <ScrollArrow />
        </div>
      </section>

      {/* Manifesto — the repositioning */}
      <section className="py-16 sm:py-24" aria-labelledby="manifesto-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.h2
            id="manifesto-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-foreground leading-snug mb-12 sm:mb-16 max-w-3xl mx-auto"
          >
            {language === 'fr' ? (
              <>Un site, c'est un début. <span className="text-primary">Pas une fin.</span></>
            ) : (
              <>A website is a start. <span className="text-primary">Not the finish line.</span></>
            )}
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-10 sm:gap-12 items-start">
            {/* Avant — site dormant */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-5"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {language === 'fr' ? 'Le modèle classique' : 'The classic model'}
              </span>
              <DeadSiteMockup />
              <p className="text-lg sm:text-xl font-bold text-muted-foreground text-center">
                {language === 'fr' ? 'Vos clients vont chez le concurrent.' : 'Your clients go to the competitor.'}
              </p>
            </motion.div>

            {/* Après — site vivant */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              className="flex flex-col items-center gap-5"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {language === 'fr' ? 'Ma façon de faire' : 'How I work'}
              </span>
              <LiveSiteMockup />
              <p className="text-lg sm:text-xl font-bold text-foreground text-center">
                {language === 'fr' ? 'Vos clients vous choisissent.' : 'Your clients choose you.'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Per-service sections */}
      <div>
        {services.map((service, index) => (
          <ServiceSection key={service.id} service={service} index={index} />
        ))}
      </div>

      {/* Why a partner */}
      <section className="py-16 sm:py-24" aria-labelledby="why-partner-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.h2
            id="why-partner-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-12 sm:mb-16 max-w-2xl mx-auto leading-snug"
          >
            {language === 'fr' ? 'Pourquoi un partenaire plutôt que cinq prestataires ?' : 'Why one partner instead of five providers?'}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {whyPartner.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-7 text-center"
                >
                  <div className="inline-flex p-3.5 rounded-2xl bg-primary/12 mb-5">
                    <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2.5">{item.title[language]}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc[language]}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-20" aria-label="Call to action">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight">
              <span className="text-foreground">{language === 'fr' ? 'On construit votre présence' : "Let's build your presence"}</span>{' '}
              <span className="text-primary">{language === 'fr' ? 'ensemble ?' : 'together?'}</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              {language === 'fr'
                ? "Un appel gratuit de 30 min. On regarde votre situation et je vous dis honnêtement ce qui aurait le plus d'impact pour vous."
                : 'A free 30-min call. We look at your situation and I tell you honestly what would have the biggest impact for you.'}
            </p>
            <MagneticButton>
              <Button variant="hero" size="lg" className="group" asChild>
                <Link to="/get-started" className="flex items-center gap-2">
                  {language === 'fr' ? 'Démarrer mon projet' : 'Start my project'}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </Button>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* Internal Links */}
      <InternalLinks currentPage="services" />

      {/* Contact Methods */}
      <ContactMethodsSection />
    </>
  );
};

export default Services;
