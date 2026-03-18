import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  LayoutDashboard,
  Smartphone,
  Globe,
  Bot,
  Users,
  ShoppingCart,
  Check,
  ArrowRight,
  Zap,
  Crown,
  Sparkles,
  BarChart3,
  Settings,
  Lock,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCalendly } from '@/contexts/CalendlyContext';
import { useLanguage } from '@/contexts/LanguageContext';
import MagneticButton from '@/components/animations/MagneticButton';
import ScrollReveal from '@/components/animations/ScrollReveal';
import SEO from '@/components/SEO';
import ContactMethodsSection from '@/components/ContactMethodsSection';

// ─── Types ────────────────────────────────────────────────────────────────────

interface AppTypeCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  examples: string[];
}

interface PricingPlan {
  icon: React.ReactNode;
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

interface FAQItem {
  question: string;
  answer: string;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function AppTypeCardComponent({ card, delay }: { card: AppTypeCard; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay * 0.1, duration: 0.6 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="glass-card rounded-2xl p-8 flex flex-col gap-5 group cursor-default"
    >
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
          {card.icon}
        </div>
        <h3 className="text-base font-semibold text-foreground">{card.title}</h3>
      </div>
      <p className="text-[15px] text-foreground/75 leading-relaxed">{card.description}</p>
      <ul className="space-y-2 mt-auto">
        {card.examples.map((ex) => (
          <li key={ex} className="flex items-center gap-2 text-[15px] text-foreground/75">
            <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
            {ex}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function PricingCard({ plan, delay }: { plan: PricingPlan; delay: number }) {
  const { openCalendly } = useCalendly();
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay * 0.15, duration: 0.7, ease: 'easeOut' }}
      whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
      className={`relative glass-card rounded-3xl p-8 flex flex-col h-full group ${plan.popular ? 'neon-border' : ''}`}
    >
      <motion.div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {plan.popular && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-primary text-primary-foreground text-xs font-semibold rounded-full whitespace-nowrap"
        >
          <motion.span animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
            {t('apps.pricing.popular')}
          </motion.span>
        </motion.div>
      )}

      <div className="flex items-center gap-3 mb-5 relative z-10">
        <div className={`p-2.5 rounded-xl ${plan.popular ? 'bg-primary/20' : 'bg-secondary'}`}>
          {plan.icon}
        </div>
        <h3 className="text-base font-semibold text-foreground">{plan.title}</h3>
      </div>

      <div className="mb-5 relative z-10">
        <span className="text-5xl font-bold text-foreground">{plan.price}</span>
      </div>

      <p className="text-[15px] text-foreground/75 leading-relaxed mb-6 relative z-10">{plan.description}</p>

      <ul className="space-y-3 mb-6 relative z-10 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-[15px] text-foreground/75">
            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="relative z-10 mt-auto">
        <Button
          onClick={openCalendly}
          className={`w-full ${
            plan.popular
              ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
              : 'border-border hover:bg-secondary'
          }`}
          variant={plan.popular ? 'default' : 'outline'}
        >
          {t('apps.pricing.cta')}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </motion.div>
  );
}

function FAQItem({ item, index }: { item: FAQItem; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="glass-card rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-8 py-6 text-left gap-4"
        aria-expanded={open}
      >
        <span className="text-[15px] font-semibold text-foreground">{item.question}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-primary flex-shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
        )}
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <p className="px-8 pb-6 text-[15px] text-foreground/75 leading-relaxed">{item.answer}</p>
      </motion.div>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const Apps = () => {
  const { openCalendly } = useCalendly();
  const { t } = useLanguage();

  const appTypes: AppTypeCard[] = [
    {
      icon: <LayoutDashboard className="w-6 h-6 text-primary" />,
      title: t('apps.type1.title'),
      description: t('apps.type1.desc'),
      examples: [t('apps.type1.ex1'), t('apps.type1.ex2'), t('apps.type1.ex3'), t('apps.type1.ex4')],
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: t('apps.type2.title'),
      description: t('apps.type2.desc'),
      examples: [t('apps.type2.ex1'), t('apps.type2.ex2'), t('apps.type2.ex3'), t('apps.type2.ex4')],
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-primary" />,
      title: t('apps.type3.title'),
      description: t('apps.type3.desc'),
      examples: [t('apps.type3.ex1'), t('apps.type3.ex2'), t('apps.type3.ex3'), t('apps.type3.ex4')],
    },
    {
      icon: <Globe className="w-6 h-6 text-primary" />,
      title: t('apps.type4.title'),
      description: t('apps.type4.desc'),
      examples: [t('apps.type4.ex1'), t('apps.type4.ex2'), t('apps.type4.ex3'), t('apps.type4.ex4')],
    },
    {
      icon: <Bot className="w-6 h-6 text-primary" />,
      title: t('apps.type5.title'),
      description: t('apps.type5.desc'),
      examples: [t('apps.type5.ex1'), t('apps.type5.ex2'), t('apps.type5.ex3'), t('apps.type5.ex4')],
    },
    {
      icon: <Smartphone className="w-6 h-6 text-primary" />,
      title: t('apps.type6.title'),
      description: t('apps.type6.desc'),
      examples: [t('apps.type6.ex1'), t('apps.type6.ex2'), t('apps.type6.ex3'), t('apps.type6.ex4')],
    },
  ];

  const plans: PricingPlan[] = [
    {
      icon: <Zap className="w-5 h-5 text-primary" />,
      title: t('apps.plan1.title'),
      price: t('apps.plan1.price'),
      description: t('apps.plan1.desc'),
      features: [
        t('apps.plan1.f1'), t('apps.plan1.f2'), t('apps.plan1.f3'),
        t('apps.plan1.f4'), t('apps.plan1.f5'), t('apps.plan1.f6'),
      ],
    },
    {
      icon: <Crown className="w-5 h-5 text-primary" />,
      title: t('apps.plan2.title'),
      price: t('apps.plan2.price'),
      description: t('apps.plan2.desc'),
      features: [
        t('apps.plan2.f1'), t('apps.plan2.f2'), t('apps.plan2.f3'),
        t('apps.plan2.f4'), t('apps.plan2.f5'), t('apps.plan2.f6'), t('apps.plan2.f7'),
      ],
      popular: true,
    },
    {
      icon: <Sparkles className="w-5 h-5 text-primary" />,
      title: t('apps.plan3.title'),
      price: t('apps.plan3.price'),
      description: t('apps.plan3.desc'),
      features: [
        t('apps.plan3.f1'), t('apps.plan3.f2'), t('apps.plan3.f3'),
        t('apps.plan3.f4'), t('apps.plan3.f5'), t('apps.plan3.f6'),
      ],
    },
  ];

  const processSteps = [
    { number: '01', title: t('apps.step1.title'), description: t('apps.step1.desc') },
    { number: '02', title: t('apps.step2.title'), description: t('apps.step2.desc') },
    { number: '03', title: t('apps.step3.title'), description: t('apps.step3.desc') },
    { number: '04', title: t('apps.step4.title'), description: t('apps.step4.desc') },
  ];

  const faqItems: FAQItem[] = [
    { question: t('apps.faq.q1'), answer: t('apps.faq.a1') },
    { question: t('apps.faq.q2'), answer: t('apps.faq.a2') },
    { question: t('apps.faq.q3'), answer: t('apps.faq.a3') },
    { question: t('apps.faq.q4'), answer: t('apps.faq.a4') },
    { question: t('apps.faq.q5'), answer: t('apps.faq.a5') },
  ];

  return (
    <>
      <SEO page="apps" />

      {/* ── Hero ── */}
      <section className="pt-10 pb-10 sm:pt-14 sm:pb-16 relative grain" aria-labelledby="apps-hero-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-primary/10 rounded-full blur-[80px]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-5 sm:mb-6">
              <Sparkles className="w-4 h-4" />
              {t('apps.hero.badge')}
            </div>
            <h1
              id="apps-hero-heading"
              className="text-[2.4rem] leading-[1.15] sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 tracking-tight"
            >
              <span className="text-foreground">{t('apps.hero.h1a')}</span>
              <br />
              <span className="text-primary">{t('apps.hero.h1b')}</span>
            </h1>
            <p className="text-base sm:text-lg text-foreground/75 max-w-2xl mx-auto leading-relaxed mb-7">
              {t('apps.hero.desc')}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <MagneticButton>
                <Button
                  size="lg"
                  onClick={openCalendly}
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-base font-semibold rounded-xl"
                >
                  {t('apps.hero.cta1')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </MagneticButton>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById('apps-pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 py-4 text-base rounded-xl"
              >
                {t('apps.hero.cta2')}
              </Button>
            </div>
          </motion.div>

          {/* Mini stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10 grid grid-cols-3 gap-4 sm:gap-12 max-w-sm sm:max-w-lg mx-auto"
          >
            {[
              { value: '3-5', label: t('apps.hero.stat1') },
              { value: '100%', label: t('apps.hero.stat2') },
              { value: '24/7', label: t('apps.hero.stat3') },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-foreground/60 mt-2">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── What I build ── */}
      <section className="py-24 sm:py-32" aria-labelledby="apps-types-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">{t('apps.types.badge')}</p>
              <h2 id="apps-types-heading" className="text-3xl sm:text-5xl font-bold text-foreground mb-6">
                {t('apps.types.title')}
              </h2>
              <p className="text-lg text-foreground/75 max-w-xl mx-auto">
                {t('apps.types.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {appTypes.map((card, i) => (
              <AppTypeCardComponent key={i} card={card} delay={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why a custom app ── */}
      <section className="py-24 sm:py-32 relative" aria-labelledby="apps-why-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">{t('apps.why.badge')}</p>
              <h2 id="apps-why-heading" className="text-3xl sm:text-5xl font-bold text-foreground mb-6">
                {t('apps.why.title')}
              </h2>
              <p className="text-lg text-foreground/75 max-w-xl mx-auto">
                {t('apps.why.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: <Settings className="w-6 h-6 text-primary" />,
                title: t('apps.why1.title'),
                description: t('apps.why1.desc'),
              },
              {
                icon: <Lock className="w-6 h-6 text-primary" />,
                title: t('apps.why2.title'),
                description: t('apps.why2.desc'),
              },
              {
                icon: <BarChart3 className="w-6 h-6 text-primary" />,
                title: t('apps.why3.title'),
                description: t('apps.why3.desc'),
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="glass-card rounded-2xl p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">{item.icon}</div>
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-[15px] text-foreground/75 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-24 sm:py-32" aria-labelledby="apps-process-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">{t('apps.process.badge')}</p>
              <h2 id="apps-process-heading" className="text-3xl sm:text-5xl font-bold text-foreground mb-6">
                {t('apps.process.title')}
              </h2>
              <p className="text-lg text-foreground/75">
                {t('apps.process.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="glass-card rounded-2xl p-8 flex items-start gap-6"
              >
                <span className="text-4xl font-bold text-primary/25 leading-none w-14 flex-shrink-0 font-mono">
                  {step.number}
                </span>
                <div className="pt-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-[15px] text-foreground/75 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="apps-pricing" className="py-24 sm:py-32 relative grain" aria-labelledby="apps-pricing-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-1/3 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">{t('apps.pricing.badge')}</p>
              <h2 id="apps-pricing-heading" className="text-3xl sm:text-5xl font-bold text-foreground mb-6">
                {t('apps.pricing.title')}
              </h2>
              <p className="text-lg text-foreground/75 max-w-xl mx-auto">
                {t('apps.pricing.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {plans.map((plan, i) => (
              <PricingCard key={i} plan={plan} delay={i} />
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <p className="text-center text-sm text-muted-foreground mt-8">
              {t('apps.pricing.note')}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 sm:py-32" aria-labelledby="apps-faq-heading">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">{t('apps.faq.badge')}</p>
              <h2 id="apps-faq-heading" className="text-3xl sm:text-5xl font-bold text-foreground">
                {t('apps.faq.title')}
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <FAQItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24 sm:py-32 relative grain" aria-labelledby="apps-cta-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <ScrollReveal>
            <motion.div
              className="glass-card rounded-3xl p-10 sm:p-16 neon-border"
            >
              <h2
                id="apps-cta-heading"
                className="text-3xl sm:text-5xl font-bold text-foreground mb-6"
              >
                {t('apps.cta.title')}
              </h2>
              <p className="text-lg text-foreground/75 mb-10 leading-relaxed">
                {t('apps.cta.desc')}
              </p>
              <MagneticButton>
                <Button
                  size="lg"
                  onClick={openCalendly}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 text-base font-semibold rounded-xl"
                >
                  {t('apps.cta.button')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </MagneticButton>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Contact methods ── */}
      <ContactMethodsSection />
    </>
  );
};

export default Apps;
