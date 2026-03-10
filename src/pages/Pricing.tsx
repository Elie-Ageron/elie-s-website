import { motion } from 'framer-motion';
import { useState } from 'react';
import { Check, Zap, Crown, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCalendly } from '@/contexts/CalendlyContext';
import { Switch } from '@/components/ui/switch';
import MagneticButton from '@/components/animations/MagneticButton';
import ContactMethodsSection from '@/components/ContactMethodsSection';
import SEO from '@/components/SEO';
import FAQSchema from '@/components/FAQSchema';
import FAQAccordion from '@/components/FAQAccordion';
import InternalLinks from '@/components/InternalLinks';

const Pricing = () => {

  const { t, language } = useLanguage();
  const { openCalendly } = useCalendly();
  const [includeMaintenance, setIncludeMaintenance] = useState(false);

  const scrollToContact = () => {
    document.getElementById('pricing-contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: language === 'fr' ? 'Création de Site Web - Elie Ageron' : 'Web Design Services - Elie Ageron',
    description: language === 'fr'
      ? 'Sites web premium haute conversion. Landing pages dès 500€, sites vitrines dès 1500€.'
      : 'Premium high-conversion websites. Landing pages from $500, showcase sites from $1500.',
    url: 'https://elieageron.com/pricing',
    provider: { '@type': 'Person', name: 'Elie Ageron', url: 'https://elieageron.com' },
    areaServed: 'FR',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: language === 'fr' ? 'Nos Offres Web Design' : 'Our Web Design Offers',
      itemListElement: [
        {
          '@type': 'Offer',
          name: language === 'fr' ? 'Landing Page' : 'Landing Page',
          price: language === 'fr' ? '500' : '500',
          priceCurrency: language === 'fr' ? 'EUR' : 'USD',
          description: language === 'fr'
            ? 'Landing page haute conversion livrée en 7-14 jours ouvrés.'
            : 'High-conversion landing page delivered in 7-14 business days.',
        },
        {
          '@type': 'Offer',
          name: language === 'fr' ? 'Site Vitrine 4 Pages' : '4-Page Showcase Site',
          price: language === 'fr' ? '1500' : '1500',
          priceCurrency: language === 'fr' ? 'EUR' : 'USD',
          description: language === 'fr'
            ? 'Site vitrine 4 pages avec SEO complet, livré en 7-14 jours ouvrés.'
            : '4-page showcase site with full SEO, delivered in 7-14 business days.',
        },
        {
          '@type': 'Offer',
          name: language === 'fr' ? 'Projet Sur Mesure' : 'Custom Project',
          description: language === 'fr'
            ? 'Solution web sur mesure adaptée à vos besoins spécifiques.'
            : 'Custom web solution tailored to your specific needs.',
        },
      ],
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: language === 'fr' ? 'Accueil' : 'Home', item: 'https://elieageron.com' },
      { '@type': 'ListItem', position: 2, name: language === 'fr' ? 'Tarifs' : 'Pricing', item: 'https://elieageron.com/pricing' },
    ],
  };

  const plans = [
    {
      id: 'landing',
      icon: Zap,
      title: t('services.landing.title'),
      price: language === 'fr' ? '500€' : '$500',
      maintenancePrice: language === 'fr' ? '+50€/mois' : '+$50/month',
      description: t('services.landing.desc'),
      features: [
        t('services.landing.feature1'),
        t('services.landing.feature2'),
        t('services.landing.feature3'),
      ],
      cta: t('services.landing.cta'),
      popular: false,
    },
    {
      id: 'authority',
      icon: Crown,
      title: t('services.authority.title'),
      price: language === 'fr' ? '1500€' : '$1500',
      maintenancePrice: language === 'fr' ? '+100€/mois' : '+$100/month',
      description: t('services.authority.desc'),
      features: [
        t('services.authority.feature1'),
        t('services.authority.feature2'),
        t('services.authority.feature3'),
        t('services.authority.feature4'),
      ],
      cta: t('services.authority.cta'),
      popular: true,
    },
    {
      id: 'custom',
      icon: Sparkles,
      title: t('services.custom.title'),
      price: language === 'fr' ? '3500€' : '$3500',
      maintenancePrice: language === 'fr' ? '+150€/mois' : '+$150/month',
      description: t('services.custom.desc'),
      features: [
        t('services.custom.feature1'),
        t('services.custom.feature2'),
        t('services.custom.feature3'),
        t('services.custom.feature4'),
      ],
      cta: t('services.custom.cta'),
      popular: false,
    },
  ];

  return (
    <>
      <SEO page="pricing" structuredData={[serviceSchema, breadcrumbSchema]} />
      <FAQSchema page="pricing" />
      
      {/* Hero */}
      <section className="py-12 sm:py-16 md:py-20 relative grain" aria-labelledby="pricing-hero-heading">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/3 right-1/4 sm:right-1/3 w-56 sm:w-80 h-56 sm:h-80 bg-primary/20 rounded-full blur-[80px] sm:blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 id="pricing-hero-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-foreground">{t('pricing.title1')}</span>{' '}
              <span className="text-primary">{t('pricing.title2')}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t('pricing.subtitle')}
            </p>
          </motion.header>
        </div>
      </section>

      {/* Maintenance Toggle */}
      <section className="py-6 sm:py-8" aria-label="Monthly maintenance option">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 flex items-center justify-between gap-4"
          >
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground text-sm sm:text-base">{t('pricing.maintenance.toggle')}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">{t('pricing.maintenance.desc')}</p>
            </div>
            <Switch 
              id="maintenance-toggle"
              checked={includeMaintenance} 
              onCheckedChange={setIncludeMaintenance}
              aria-label="Include monthly maintenance in pricing"
              className="shrink-0"
            />
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-8 sm:py-12" aria-labelledby="pricing-plans-heading">
        <h2 id="pricing-plans-heading" className="sr-only">Web Design Pricing Plans by Elie Ageron</h2>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6" role="list" aria-label="Pricing plans">
            {plans.map((plan, index) => (
              <motion.article
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: plan.popular 
                    ? '0 0 50px hsl(328 100% 54% / 0.3)' 
                    : '0 20px 40px hsl(0 0% 0% / 0.3)'
                }}
                className={`relative glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 flex flex-col h-full transition-all duration-300 ${
                  plan.popular ? 'neon-border' : ''
                }`}
                role="listitem"
                aria-label={`${plan.title} - ${plan.price}`}
              >
                {plan.popular && (
                  <div 
                    className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full whitespace-nowrap"
                    aria-label="Most popular plan"
                  >
                    ⭐ {t('services.authority.popular')}
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className={`p-2.5 sm:p-3 rounded-xl ${plan.popular ? 'bg-primary/20' : 'bg-secondary'}`} aria-hidden="true">
                    <plan.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">{plan.title}</h3>
                </div>

                <div className="mb-4 sm:mb-6">
                  <span className="text-3xl sm:text-4xl font-bold text-foreground">{plan.price}</span>
                  {includeMaintenance && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-xs sm:text-sm text-primary ml-2"
                      aria-label={`Plus ${plan.maintenancePrice} for maintenance`}
                    >
                      {plan.maintenancePrice}
                    </motion.span>
                  )}
                </div>

                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">{plan.description}</p>

                <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8 flex-grow" role="list" aria-label={`Features included in ${plan.title}`}>
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 sm:gap-3 text-sm text-foreground/80">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <MagneticButton>
                  <Button 
                    variant={plan.popular ? 'hero' : 'neonOutline'} 
                    size="lg" 
                    className="w-full min-h-[52px] sm:min-h-[48px] active:scale-[0.98] transition-transform"
                    onClick={scrollToContact}
                    aria-label={`${plan.cta} - ${plan.title} for ${plan.price}`}
                  >
                    {plan.cta}
                  </Button>
                </MagneticButton>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Custom quote text + CTA */}
      <section className="py-12 sm:py-16" aria-label="Custom quote">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-primary">{t('pricing.quote.title1')}</span>{' '}
              <span className="text-foreground">{t('pricing.quote.title2')}</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">{t('pricing.quote.desc')}</p>
            <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-foreground/70 mb-10">
              {(['pricing.quote.q1', 'pricing.quote.q2', 'pricing.quote.q3', 'pricing.quote.q4'] as const).map((key) => (
                <li key={key} className="flex items-center gap-1.5">
                  <span className="text-primary font-bold">?</span>
                  <span>{t(key)}</span>
                </li>
              ))}
            </ul>
            <MagneticButton>
              <Button variant="hero" size="lg" onClick={scrollToContact} className="group">
                {t('pricing.quote.cta')}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQAccordion />

      {/* Internal Links */}
      <InternalLinks currentPage="pricing" />

      {/* Contact Methods */}
      <ContactMethodsSection />
    </>
  );
};

export default Pricing;
