import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Globe, SearchX, PhoneOff, Clock, Megaphone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactMethodsSection from '@/components/ContactMethodsSection';
import SEO from '@/components/SEO';
import FAQSchema from '@/components/FAQSchema';
import FAQAccordion from '@/components/FAQAccordion';
import InternalLinks from '@/components/InternalLinks';

const WhyWebsite = () => {
  const { t, language } = useLanguage();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: language === 'fr' ? 'Accueil' : 'Home', item: 'https://elieageron.com' },
      { '@type': 'ListItem', position: 2, name: language === 'fr' ? 'Pourquoi un site web ?' : 'Why a Website?', item: 'https://elieageron.com/why-a-website' },
    ],
  };

  const painPoints = [
    { icon: SearchX, title: t('why.pain1.title'), desc: t('why.pain1.desc') },
    { icon: PhoneOff, title: t('why.pain2.title'), desc: t('why.pain2.desc') },
    { icon: Clock, title: t('why.pain3.title'), desc: t('why.pain3.desc') },
    { icon: Megaphone, title: t('why.pain4.title'), desc: t('why.pain4.desc') },
  ];

  const benefits = [
    { icon: Globe, title: t('why.benefit1.title'), desc: t('why.benefit1.desc') },
    { icon: Users, title: t('why.benefit2.title'), desc: t('why.benefit2.desc') },
    { icon: TrendingUp, title: t('why.benefit3.title'), desc: t('why.benefit3.desc') },
    { icon: DollarSign, title: t('why.benefit4.title'), desc: t('why.benefit4.desc') },
  ];

  return (
    <>
      <SEO page="why" structuredData={breadcrumbSchema} />
      <FAQSchema page="why" />
      
      {/* Hero */}
      <section className="py-12 sm:py-16 md:py-20 relative grain" aria-labelledby="why-hero-heading">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/3 right-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-primary/20 rounded-full blur-[80px] sm:blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 id="why-hero-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-foreground">{t('why.title1')}</span>{' '}
              <span className="text-primary">{t('why.title2')}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t('why.subtitle')}
            </p>
          </motion.header>
        </div>
      </section>

      {/* Pain Points Grid */}
      <section className="py-12 sm:py-16 md:py-20" aria-labelledby="pain-heading">
        <h2 id="pain-heading" className="sr-only">What happens without a website</h2>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
                    <p className="text-muted-foreground">{point.desc}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-12 sm:py-16 md:py-20 relative" aria-labelledby="solution-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-14"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">{t('why.solution.label')}</span>
            <h2 id="solution-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <span className="text-foreground">{t('why.solution.title1')}</span>{' '}
              <span className="text-primary">{t('why.solution.title2')}</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card rounded-2xl p-8 cursor-pointer transition-all hover:neon-border border border-emerald-500/20"
                aria-label={benefit.title}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emerald-500/10 shrink-0" aria-hidden="true">
                    <benefit.icon className="w-6 h-6 text-emerald-500" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.desc}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden" aria-labelledby="stats-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[140px]" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 sm:mb-20"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              {language === 'fr' ? 'Les chiffres parlent' : 'The numbers speak'}
            </span>
            <h2 id="stats-heading" className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-foreground">{language === 'fr' ? 'Pourquoi vous ne pouvez plus' : "Why you can't afford"}</span>{' '}
              <span className="text-primary">{language === 'fr' ? 'attendre.' : 'to wait.'}</span>
            </h2>
          </motion.div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">

            {/* Card 1 — 81% — Donut chart */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-5 glass-card rounded-3xl p-8 border border-primary/20 flex flex-col items-center justify-center gap-5"
            >
              <div className="relative">
                <svg viewBox="0 0 140 140" className="w-48 h-48 -rotate-90" aria-hidden="true">
                  <circle cx="70" cy="70" r="56" fill="none" stroke="currentColor" strokeWidth="11" className="text-primary/10" />
                  <motion.circle
                    cx="70" cy="70" r="56"
                    fill="none" stroke="currentColor" strokeWidth="11"
                    className="text-primary"
                    strokeLinecap="round"
                    strokeDasharray="351.9"
                    initial={{ strokeDashoffset: 351.9 }}
                    whileInView={{ strokeDashoffset: 351.9 * (1 - 0.81) }}
                    transition={{ duration: 1.8, ease: 'easeOut', delay: 0.4 }}
                    viewport={{ once: true }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'rotate(0deg)' }}>
                  <span className="text-5xl font-extrabold text-primary">81%</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-base sm:text-lg font-semibold text-foreground/90 leading-snug">
                  {language === 'fr' ? 'des consommateurs recherchent en ligne' : 'of consumers search online'}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === 'fr' ? 'avant tout achat' : 'before any purchase'}
                </p>
              </div>
              <span className="text-xs text-muted-foreground/40">GE Capital Retail Bank</span>
            </motion.div>

            {/* Card 2 — 75% — Horizontal progress bars */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-7 glass-card rounded-3xl p-8 border border-primary/20 flex flex-col justify-between gap-6"
            >
              <div>
                <span className="text-7xl font-extrabold text-primary leading-none">75%</span>
                <p className="text-base sm:text-lg font-semibold text-foreground/90 mt-3 leading-snug">
                  {language === 'fr'
                    ? "des gens jugent la crédibilité d'une entreprise par son site"
                    : "of people judge a business's credibility by its website"}
                </p>
                <p className="text-xs text-muted-foreground/40 mt-1">Stanford Web Credibility Research</p>
              </div>
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {language === 'fr' ? 'Score de confiance perçue' : 'Perceived trust score'}
                </p>
                {[
                  { label: language === 'fr' ? 'Site professionnel' : 'Professional site', pct: 92 },
                  { label: language === 'fr' ? 'Site amateur' : 'Amateur site', pct: 45 },
                  { label: language === 'fr' ? 'Sans site' : 'No website', pct: 12 },
                ].map((bar, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{bar.label}</span>
                      <span className="font-bold text-foreground">{bar.pct}%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-primary"
                        style={{ opacity: 1 - i * 0.28 }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${bar.pct}%` }}
                        transition={{ duration: 1.3, ease: 'easeOut', delay: 0.4 + i * 0.15 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Card 3 — 3× — Vertical bar chart */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-7 glass-card rounded-3xl p-8 border border-primary/20 flex flex-col gap-6"
            >
              <div>
                <span className="text-7xl font-extrabold text-primary leading-none">3×</span>
                <p className="text-base sm:text-lg font-semibold text-foreground/90 mt-3 leading-snug">
                  {language === 'fr'
                    ? 'plus de demandes entrantes avec un site professionnel optimisé'
                    : 'more inbound leads with a professional optimized website'}
                </p>
                <p className="text-xs text-muted-foreground/40 mt-1">HubSpot</p>
              </div>
              {/* Bar chart */}
              <div className="flex items-end gap-4 h-32" aria-hidden="true">
                {[
                  { label: language === 'fr' ? 'Sans site' : 'No site', heightPct: 28, opacity: 'opacity-20' },
                  { label: language === 'fr' ? 'Site basique' : 'Basic site', heightPct: 55, opacity: 'opacity-50' },
                  { label: language === 'fr' ? 'Site optimisé' : 'Optimized', heightPct: 100, opacity: 'opacity-100' },
                ].map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full">
                    <div className="flex-1 w-full flex items-end">
                      <motion.div
                        className={`w-full rounded-t-xl bg-primary ${bar.opacity}`}
                        style={{ transformOrigin: 'bottom', height: `${bar.heightPct}%` }}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 + i * 0.18 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground text-center leading-tight">{bar.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Card 4 — 97% — Donut small + text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="md:col-span-5 glass-card rounded-3xl p-8 border border-primary/20 flex flex-col items-center justify-center gap-5"
            >
              <div className="relative">
                <svg viewBox="0 0 110 110" className="w-36 h-36 -rotate-90" aria-hidden="true">
                  <circle cx="55" cy="55" r="44" fill="none" stroke="currentColor" strokeWidth="10" className="text-primary/10" />
                  <motion.circle
                    cx="55" cy="55" r="44"
                    fill="none" stroke="currentColor" strokeWidth="10"
                    className="text-primary"
                    strokeLinecap="round"
                    strokeDasharray="276.5"
                    initial={{ strokeDashoffset: 276.5 }}
                    whileInView={{ strokeDashoffset: 276.5 * (1 - 0.97) }}
                    transition={{ duration: 1.6, ease: 'easeOut', delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-extrabold text-primary">97%</span>
                </div>
              </div>
              <div className="text-center">
                <p className="text-base font-semibold text-foreground/90 leading-snug">
                  {language === 'fr'
                    ? 'des recherches locales mobiles mènent à une visite en boutique'
                    : 'of local mobile searches lead to an in-store visit'}
                </p>
              </div>
              <span className="text-xs text-muted-foreground/40">Google</span>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQAccordion />

      {/* Internal Links */}
      <InternalLinks currentPage="why" />

      {/* Contact Methods */}
      <ContactMethodsSection />
    </>
  );
};

export default WhyWebsite;
