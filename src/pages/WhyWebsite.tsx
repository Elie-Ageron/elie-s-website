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

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24 sm:mb-32"
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

            {/* Card 1 — 81% — Donut */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-4 glass-card rounded-3xl p-8 border border-primary/20 flex flex-col gap-6"
            >
              {/* Overline */}
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {language === 'fr' ? "Comportement d'achat" : 'Purchase behaviour'}
              </p>

              {/* Donut + number */}
              <div className="flex items-center justify-center flex-1 py-2">
                <div className="relative w-44 h-44">
                  <svg viewBox="0 0 140 140" className="w-full h-full -rotate-90" aria-hidden="true">
                    <circle cx="70" cy="70" r="56" fill="none" stroke="currentColor" strokeWidth="10" className="text-primary/10" />
                    <motion.circle
                      cx="70" cy="70" r="56"
                      fill="none" stroke="currentColor" strokeWidth="10"
                      className="text-primary"
                      strokeLinecap="round"
                      strokeDasharray="351.9"
                      initial={{ strokeDashoffset: 351.9 }}
                      whileInView={{ strokeDashoffset: 351.9 * (1 - 0.81) }}
                      transition={{ duration: 1.8, ease: 'easeOut', delay: 0.4 }}
                      viewport={{ once: true }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl font-thin text-primary">81%</span>
                  </div>
                </div>
              </div>

              {/* Headline */}
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  {language === 'fr' ? 'des consommateurs recherchent en ligne' : 'of consumers research online'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === 'fr' ? 'avant tout achat' : 'before any purchase'}
                </p>
              </div>

              {/* Source */}
              <p className="text-xs text-muted-foreground/40 border-t border-border/40 pt-4">GE Capital Retail Bank</p>
            </motion.div>

            {/* Card 2 — 75% — Bars */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-8 glass-card rounded-3xl p-8 border border-primary/20 flex flex-col gap-6"
            >
              {/* Overline */}
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {language === 'fr' ? 'Crédibilité perçue' : 'Perceived credibility'}
              </p>

              {/* Stat + headline */}
              <div>
                <span className="text-8xl font-thin text-primary leading-none block">75%</span>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mt-3 leading-snug max-w-sm">
                  {language === 'fr'
                    ? "jugent la crédibilité d'une entreprise par son site web"
                    : "judge a business's credibility by its website"}
                </h3>
              </div>

              {/* Bar chart */}
              <div className="space-y-3 flex-1">
                {[
                  { label: language === 'fr' ? 'Site professionnel' : 'Professional site', pct: 92 },
                  { label: language === 'fr' ? 'Site amateur' : 'Amateur site', pct: 45 },
                  { label: language === 'fr' ? 'Sans site' : 'No website', pct: 12 },
                ].map((bar, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="flex justify-between items-baseline">
                      <span className="text-sm text-muted-foreground">{bar.label}</span>
                      <span className="text-sm font-semibold text-foreground">{bar.pct}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
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

              {/* Source */}
              <p className="text-xs text-muted-foreground/40 border-t border-border/40 pt-4">Stanford Web Credibility Research</p>
            </motion.div>

            {/* Card 3 — 3× — Bar chart */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-8 glass-card rounded-3xl p-8 border border-primary/20 flex flex-col gap-6"
            >
              {/* Overline */}
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {language === 'fr' ? 'Génération de demandes' : 'Lead generation'}
              </p>

              {/* Stat + headline */}
              <div>
                <span className="text-8xl font-thin text-primary leading-none block">3×</span>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mt-3 leading-snug max-w-sm">
                  {language === 'fr'
                    ? 'plus de demandes entrantes avec un site professionnel optimisé'
                    : 'more inbound leads with a professional optimized website'}
                </h3>
              </div>

              {/* Horizontal comparison bars */}
              <div className="space-y-3 flex-1">
                {[
                  { label: language === 'fr' ? 'Sans site' : 'No site', val: '1×', pct: 33 },
                  { label: language === 'fr' ? 'Site basique' : 'Basic site', val: '2×', pct: 66 },
                  { label: language === 'fr' ? 'Site optimisé' : 'Optimized', val: '3×', pct: 100 },
                ].map((bar, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground w-24 shrink-0">{bar.label}</span>
                    <div className="flex-1 h-10 bg-muted/60 rounded-xl overflow-hidden">
                      <motion.div
                        className="h-full rounded-xl bg-primary"
                        style={{ opacity: 0.25 + i * 0.375 }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${bar.pct}%` }}
                        transition={{ duration: 1.3, ease: 'easeOut', delay: 0.4 + i * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <span className={`text-base font-bold w-8 shrink-0 ${i === 2 ? 'text-primary' : 'text-muted-foreground'}`}>
                      {bar.val}
                    </span>
                  </div>
                ))}
              </div>

              {/* Source */}
              <p className="text-xs text-muted-foreground/40 border-t border-border/40 pt-4">HubSpot</p>
            </motion.div>

            {/* Card 4 — 97% — Donut */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="md:col-span-4 glass-card rounded-3xl p-8 border border-primary/20 flex flex-col gap-6"
            >
              {/* Overline */}
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {language === 'fr' ? 'Recherche locale mobile' : 'Local mobile search'}
              </p>

              {/* Donut + number */}
              <div className="flex items-center justify-center flex-1 py-2">
                <div className="relative w-36 h-36">
                  <svg viewBox="0 0 110 110" className="w-full h-full -rotate-90" aria-hidden="true">
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
                    <span className="text-4xl font-thin text-primary">97%</span>
                  </div>
                </div>
              </div>

              {/* Headline */}
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-foreground leading-snug">
                  {language === 'fr'
                    ? 'des recherches locales mobiles mènent à une visite'
                    : 'of local mobile searches lead to a visit'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {language === 'fr' ? 'en boutique ou prise de contact' : 'in-store or contact'}
                </p>
              </div>

              {/* Source */}
              <p className="text-xs text-muted-foreground/40 border-t border-border/40 pt-4">Google</p>
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
