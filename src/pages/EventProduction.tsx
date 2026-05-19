import { motion } from 'framer-motion';
import { Check, Zap, Crown, Calendar, TrendingDown, MousePointerClick, Smartphone, Timer, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCalendly } from '@/contexts/CalendlyContext';
import MagneticButton from '@/components/animations/MagneticButton';
import ContactMethodsSection from '@/components/ContactMethodsSection';
import SEO from '@/components/SEO';
import InternalLinks from '@/components/InternalLinks';

const EventProduction = () => {
  const { language } = useLanguage();
  const { openCalendly } = useCalendly();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: language === 'fr' ? 'Accueil' : 'Home', item: 'https://elieageron.com' },
      { '@type': 'ListItem', position: 2, name: language === 'fr' ? 'Sites pour Producteurs d\'Événements' : 'Event Production Websites', item: 'https://elieageron.com/event-production' },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: language === 'fr' ? 'Site Web pour Producteurs d\'Événements' : 'Event Production Website Design',
    description: language === 'fr'
      ? 'Pages d\'inscription optimisées pour convertir le trafic marketing en bookings événementiels.'
      : 'Optimized registration pages that convert your event marketing traffic into actual bookings.',
    url: 'https://elieageron.com/event-production',
    provider: { '@type': 'Person', name: 'Elie Ageron', url: 'https://elieageron.com' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: language === 'fr' ? 'Offres Sites Événementiels' : 'Event Website Offers',
      itemListElement: [
        { '@type': 'Offer', name: language === 'fr' ? 'Page Événement' : 'Event Page', price: '1500', priceCurrency: 'EUR' },
        { '@type': 'Offer', name: language === 'fr' ? 'Site Événementiel' : 'Event Website', price: '3000', priceCurrency: 'EUR' },
      ],
    },
  };

  const painPoints = [
    {
      icon: TrendingDown,
      title: language === 'fr' ? 'Budget pub dépensé, places vides' : 'Ads paid. Seats empty.',
      desc: language === 'fr'
        ? 'Campagnes Instagram, Meta ads, TikTok : vous payez pour les attirer. Une page générique les renvoie d\'où ils viennent. L\'argent est sorti. Les places restent invendues.'
        : 'Instagram campaigns, Meta ads, TikTok boosts. You pay to bring people in. A generic page sends them straight back. The budget is gone. The seats stay empty.',
    },
    {
      icon: MousePointerClick,
      title: language === 'fr' ? 'Trop d\'étapes, zéro inscription' : 'Too many steps, zero registrations',
      desc: language === 'fr'
        ? 'Un visiteur qui ne trouve pas comment s\'inscrire repart sans s\'inscrire. Chaque étape inutile entre l\'arrivée et le booking vous coûte une place.'
        : 'A visitor who can\'t find the register button leaves without registering. Every unnecessary step between landing and booking costs you a seat.',
    },
    {
      icon: Smartphone,
      title: language === 'fr' ? 'Mobile cassé, audience perdue' : 'Broken on mobile, audience gone',
      desc: language === 'fr'
        ? '72% des gens découvrent un événement sur leur téléphone. Une page qui casse sur mobile, ou qui charge en plus de 3 secondes, les fait partir avant qu\'ils aient lu votre titre.'
        : '72% of people discover events on their phone. A page that breaks on mobile, or takes more than 3 seconds to load, loses them before they\'ve read your headline.',
    },
    {
      icon: Timer,
      title: language === 'fr' ? 'Pas d\'urgence, pas d\'inscription aujourd\'hui' : 'No urgency, no registration today',
      desc: language === 'fr'
        ? 'Les visiteurs qui repartent pour y réfléchir ne reviennent presque jamais. Sans compte à rebours ni limite de places visible, rien ne pousse à s\'inscrire maintenant.'
        : 'Visitors who leave to think about it almost never come back. Without a visible countdown or capacity limit, there\'s no reason to register today rather than tomorrow.',
    },
  ];

  const includes = [
    language === 'fr' ? 'Page de registration haute conversion' : 'High-conversion registration page',
    language === 'fr' ? 'Design mobile-first, rapide à charger' : 'Mobile-first, fast-loading design',
    language === 'fr' ? 'Compte à rebours & éléments d\'urgence' : 'Countdown timer & urgency elements',
    language === 'fr' ? 'Intégration formulaire / billetterie' : 'Form & ticketing system integration',
    language === 'fr' ? 'Preuves sociales & témoignages' : 'Social proof & testimonials section',
    language === 'fr' ? 'SEO optimisé pour votre événement' : 'SEO optimized for your event',
    language === 'fr' ? 'Analytics & suivi des conversions' : 'Analytics & conversion tracking setup',
    language === 'fr' ? 'Livraison en 7–14 jours' : 'Delivered in 7–14 days',
  ];

  const plans = [
    {
      icon: Zap,
      title: language === 'fr' ? 'Page Événement' : 'Event Page',
      price: '1 500€',
      desc: language === 'fr'
        ? 'Un événement, une page. Chaque euro de pub dépensé a maintenant un endroit utile où atterrir.'
        : 'One event, one page. Every euro you spent on ads now has somewhere useful to land.',
      features: [
        language === 'fr' ? '1 page de registration optimisée' : '1 optimized registration page',
        language === 'fr' ? 'Compte à rebours & urgence' : 'Countdown timer & urgency',
        language === 'fr' ? 'Mobile-first & chargement rapide' : 'Mobile-first & fast-loading',
        language === 'fr' ? 'Formulaire / billetterie intégré' : 'Form & ticketing integrated',
      ],
      popular: false,
    },
    {
      icon: Crown,
      title: language === 'fr' ? 'Site Événementiel' : 'Event Website',
      price: '3 000€',
      desc: language === 'fr'
        ? 'Votre marque, votre calendrier, votre taux de conversion. Pour les producteurs qui organisent plus d\'un événement par an.'
        : 'Your brand, your calendar, your conversion rate. For producers who run more than one event a year.',
      features: [
        language === 'fr' ? 'Tout de la Page Événement' : 'Everything in Event Page',
        language === 'fr' ? 'Jusqu\'à 5 pages (accueil, événements, sponsors, contact)' : 'Up to 5 pages (home, events, sponsors, contact)',
        language === 'fr' ? 'Page dédiée par événement' : 'Dedicated page per event',
        language === 'fr' ? 'SEO complet & optimisé' : 'Full SEO optimization',
        language === 'fr' ? 'Galerie photos & preuves sociales' : 'Photo gallery & social proof',
        language === 'fr' ? 'Analytics & suivi des conversions' : 'Analytics & conversion tracking',
      ],
      popular: true,
    },
  ];

  return (
    <>
      <SEO
        page="event"
        structuredData={[breadcrumbSchema, serviceSchema]}
      />

      {/* Hero */}
      <section className="py-12 sm:py-16 md:py-20 relative grain" aria-labelledby="event-hero-heading">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/3 right-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-primary/20 rounded-full blur-[80px] sm:blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 w-40 sm:w-60 h-40 sm:h-60 bg-primary/10 rounded-full blur-[60px] sm:blur-[100px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              {language === 'fr' ? 'Pour les producteurs d\'événements' : 'For event producers'}
            </span>
          </motion.div>
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 id="event-hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-foreground">
                {language === 'fr' ? 'Transformez votre trafic event' : 'Turn your event traffic'}
              </span>{' '}
              <span className="inline-block text-primary">
                {language === 'fr' ? 'en inscriptions.' : 'into registrations.'}
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              {language === 'fr'
                ? 'Vous avez déjà payé pour les attirer. On s\'assure qu\'ils ne repartent pas les mains vides.'
                : 'You already paid to bring them there. We make sure they don\'t leave without registering.'}
            </p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <MagneticButton>
                <button
                  onClick={openCalendly}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all text-base"
                  aria-label={language === 'fr' ? 'Réserver un appel découverte de 15 minutes' : 'Book a 15-minute discovery call'}
                >
                  <Calendar className="w-5 h-5" aria-hidden="true" />
                  {language === 'fr' ? 'Appel découverte 15 min, gratuit' : 'Free 15-min discovery call'}
                </button>
              </MagneticButton>
            </motion.div>
          </motion.header>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-12 sm:py-16 md:py-20" aria-labelledby="event-problem-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-14"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-destructive mb-3">
              {language === 'fr' ? 'Le problème' : 'The problem'}
            </span>
            <h2 id="event-problem-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <span className="text-foreground">
                {language === 'fr' ? 'Vous payez pour du trafic' : 'You\'re paying for traffic'}
              </span>{' '}
              <span className="inline-block text-primary">
                {language === 'fr' ? 'qui ne convertit pas.' : 'that never registers.'}
              </span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              {language === 'fr'
                ? 'Le problème n\'est pas votre marketing. C\'est la page sur laquelle il atterrit.'
                : 'The problem isn\'t your marketing. It\'s the page your marketing lands on.'}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {painPoints.map((point, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 border border-destructive/20"
                aria-label={point.title}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-destructive/10 shrink-0" aria-hidden="true">
                    <point.icon className="w-6 h-6 text-destructive" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{point.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Solution + What's Included */}
      <section className="py-12 sm:py-16 md:py-20 relative" aria-labelledby="event-solution-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-14"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              {language === 'fr' ? 'La solution' : 'The solution'}
            </span>
            <h2 id="event-solution-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <span className="text-foreground">
                {language === 'fr' ? 'Un seul travail :' : 'One job:'}
              </span>{' '}
              <span className="inline-block text-primary">
                {language === 'fr' ? 'que votre visiteur s\'inscrive.' : 'get your visitor to register.'}
              </span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              {language === 'fr'
                ? 'On part de votre événement, votre audience, votre source de trafic. On construit à rebours depuis le bouton d\'inscription.'
                : 'We start with your event, your audience, your traffic source. Then we build backward from the registration button.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {includes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="flex items-center gap-4 glass-card rounded-xl p-5 border border-emerald-500/20"
              >
                <div className="p-2 rounded-lg bg-emerald-500/10 shrink-0" aria-hidden="true">
                  <Check className="w-5 h-5 text-emerald-500" />
                </div>
                <span className="text-foreground font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 sm:py-16 md:py-20" aria-labelledby="event-pricing-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-14"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              {language === 'fr' ? 'Tarifs' : 'Pricing'}
            </span>
            <h2 id="event-pricing-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <span className="text-foreground">
                {language === 'fr' ? 'Simple, transparent,' : 'Simple, transparent,'}
              </span>{' '}
              <span className="inline-block text-primary">
                {language === 'fr' ? 'sans surprise.' : 'no surprises.'}
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`glass-card rounded-2xl p-8 flex flex-col relative ${plan.popular ? 'border-2 border-primary neon-border' : 'border border-primary/20'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                      {language === 'fr' ? 'Recommandé' : 'Recommended'}
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-xl ${plan.popular ? 'bg-primary/20' : 'bg-muted'}`} aria-hidden="true">
                    <plan.icon className={`w-5 h-5 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{plan.title}</h3>
                </div>
                <div className="mb-4">
                  <span className="text-4xl font-thin text-primary">{plan.price}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{plan.desc}</p>
                <ul className="space-y-3 flex-1 mb-8" aria-label={`${plan.title} features`}>
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={openCalendly}
                  className={`w-full py-3 px-6 rounded-xl font-semibold text-sm transition-all ${plan.popular ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'border border-primary/40 text-primary hover:bg-primary/10'}`}
                >
                  {language === 'fr' ? 'Réserver un appel' : 'Book a call'}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Custom quote row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto mt-4"
          >
            <div className="glass-card rounded-2xl px-8 py-6 border border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-foreground">
                  {language === 'fr' ? 'Besoin de quelque chose de plus complexe ?' : 'Need something more complex?'}
                </p>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {language === 'fr'
                    ? 'Plateforme multi-événements, automation, dashboard. On établit un devis sur mesure.'
                    : 'Multi-event platform, automation, dashboard. We build a custom quote.'}
                </p>
              </div>
              <button
                onClick={openCalendly}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-primary/40 text-primary font-semibold text-sm hover:bg-primary/10 transition-all shrink-0"
              >
                {language === 'fr' ? 'Discutons-en' : 'Let\'s talk'}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden" aria-labelledby="event-cta-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/8 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 id="event-cta-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              <span className="text-foreground">
                {language === 'fr' ? 'Prochain événement,' : 'Next event,'}
              </span>{' '}
              <span className="inline-block text-primary">
                {language === 'fr' ? 'page qui vend.' : 'page that sells.'}
              </span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              {language === 'fr'
                ? '15 minutes. On regarde ce que vous avez, et on vous dit honnêtement ce qu\'on changerait.'
                : '15 minutes. We look at what you have, and tell you honestly what we\'d change.'}
            </p>
            <MagneticButton>
              <button
                onClick={openCalendly}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all text-base"
                aria-label={language === 'fr' ? 'Réserver mon appel découverte de 15 minutes' : 'Book my free 15-minute discovery call'}
              >
                <Calendar className="w-5 h-5" aria-hidden="true" />
                {language === 'fr' ? 'Réserver mon appel découverte 15 min' : 'Book my free 15-min discovery call'}
              </button>
            </MagneticButton>
            <p className="text-xs text-muted-foreground mt-4">
              {language === 'fr' ? 'Réponse sous 24h · Sans engagement' : 'Reply within 24h · No commitment'}
            </p>
          </motion.div>
        </div>
      </section>

      <InternalLinks currentPage="event" />
      <ContactMethodsSection />
    </>
  );
};

export default EventProduction;
