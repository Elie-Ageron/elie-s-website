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
            <div className="text-center mb-20">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">{t('apps.types.badge')}</p>
              <h2 id="apps-types-heading" className="text-3xl sm:text-5xl font-bold text-foreground mb-6">
                {t('apps.types.title')}
              </h2>
              <p className="text-lg text-foreground/75 max-w-xl mx-auto">
                {t('apps.types.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-28">
            {/* 1 - Dashboards & Reporting - text left, illustration right */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
            >
              <div className="flex-1 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  <LayoutDashboard className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold text-primary uppercase tracking-widest">Dashboards & Reporting</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground leading-snug">
                  {t('apps.type1.title')}
                </h3>
                <p className="text-base text-foreground/70 leading-relaxed">{t('apps.type1.desc')}</p>
                <ul className="space-y-2">
                  {[t('apps.type1.ex1'), t('apps.type1.ex2'), t('apps.type1.ex3'), t('apps.type1.ex4')].map((ex) => (
                    <li key={ex} className="flex items-center gap-2 text-[15px] text-foreground/65">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 flex justify-center">
                <svg viewBox="0 0 480 320" className="w-full max-w-md" aria-hidden="true">
                  {/* Background */}
                  <rect x="20" y="20" width="440" height="280" rx="16" fill="currentColor" className="text-primary/5" />
                  {/* Bar chart */}
                  <rect x="60" y="210" width="40" height="50" rx="4" fill="currentColor" className="text-primary/40" />
                  <rect x="120" y="170" width="40" height="90" rx="4" fill="currentColor" className="text-primary/60" />
                  <rect x="180" y="130" width="40" height="130" rx="4" fill="currentColor" className="text-primary/80" />
                  <rect x="240" y="150" width="40" height="110" rx="4" fill="currentColor" className="text-primary/60" />
                  <rect x="300" y="110" width="40" height="150" rx="4" fill="currentColor" className="text-primary" />
                  <rect x="360" y="140" width="40" height="120" rx="4" fill="currentColor" className="text-primary/70" />
                  {/* Line chart overlay */}
                  <polyline points="80,200 140,160 200,120 260,140 320,100 380,130" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/30" />
                  {/* Dots */}
                  {[{ cx:80,cy:200 },{ cx:140,cy:160 },{ cx:200,cy:120 },{ cx:260,cy:140 },{ cx:320,cy:100 },{ cx:380,cy:130 }].map((d,i)=>(
                    <circle key={i} cx={d.cx} cy={d.cy} r="4" fill="currentColor" className="text-primary" />
                  ))}
                  {/* KPI cards */}
                  <rect x="40" y="40" width="100" height="50" rx="8" fill="currentColor" className="text-primary/10" />
                  <rect x="155" y="40" width="100" height="50" rx="8" fill="currentColor" className="text-primary/10" />
                  <rect x="270" y="40" width="100" height="50" rx="8" fill="currentColor" className="text-primary/10" />
                  <text x="90" y="60" textAnchor="middle" fontSize="11" fill="currentColor" className="text-foreground">Revenue</text>
                  <text x="90" y="78" textAnchor="middle" fontSize="14" fontWeight="bold" fill="currentColor" className="text-primary">€24k</text>
                  <text x="205" y="60" textAnchor="middle" fontSize="11" fill="currentColor" className="text-foreground">Clients</text>
                  <text x="205" y="78" textAnchor="middle" fontSize="14" fontWeight="bold" fill="currentColor" className="text-primary">312</text>
                  <text x="320" y="60" textAnchor="middle" fontSize="11" fill="currentColor" className="text-foreground">Growth</text>
                  <text x="320" y="78" textAnchor="middle" fontSize="14" fontWeight="bold" fill="currentColor" className="text-primary">+18%</text>
                </svg>
              </div>
            </motion.div>

            {/* 2 - CRM & Client Management - illustration left, text right */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20"
            >
              <div className="flex-1 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold text-primary uppercase tracking-widest">CRM</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground leading-snug">
                  {t('apps.type2.title')}
                </h3>
                <p className="text-base text-foreground/70 leading-relaxed">{t('apps.type2.desc')}</p>
                <ul className="space-y-2">
                  {[t('apps.type2.ex1'), t('apps.type2.ex2'), t('apps.type2.ex3'), t('apps.type2.ex4')].map((ex) => (
                    <li key={ex} className="flex items-center gap-2 text-[15px] text-foreground/65">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 flex justify-center">
                <svg viewBox="0 0 480 320" className="w-full max-w-md" aria-hidden="true">
                  <rect x="20" y="20" width="440" height="280" rx="16" fill="currentColor" className="text-primary/5" />
                  {/* Pipeline columns */}
                  {['Lead','Qualified','Proposal','Won'].map((label, i) => (
                    <g key={label}>
                      <rect x={50 + i * 100} y="50" width="80" height="24" rx="6" fill="currentColor" className="text-primary/15" />
                      <text x={90 + i * 100} y="66" textAnchor="middle" fontSize="10" fontWeight="700" fill="currentColor" className="text-foreground">{label}</text>
                    </g>
                  ))}
                  {/* Cards in columns */}
                  {[
                    { col:0, rows:[0,1,2] },{ col:1, rows:[0,1] },{ col:2, rows:[0,1] },{ col:3, rows:[0] },
                  ].map(({ col, rows }) =>
                    rows.map((row) => (
                      <rect key={`${col}-${row}`} x={50 + col * 100} y={90 + row * 60} width="80" height="48" rx="8" fill="currentColor" className="text-primary/10" />
                    ))
                  )}
                  {/* Avatar circles */}
                  <circle cx="70" cy="114" r="10" fill="currentColor" className="text-primary/40" />
                  <circle cx="170" cy="114" r="10" fill="currentColor" className="text-primary/40" />
                  <circle cx="270" cy="114" r="10" fill="currentColor" className="text-primary/40" />
                  <circle cx="370" cy="114" r="10" fill="currentColor" className="text-primary/60" />
                  {/* Progress bar */}
                  <rect x="50" y="268" width="380" height="8" rx="4" fill="currentColor" className="text-primary/10" />
                  <rect x="50" y="268" width="240" height="8" rx="4" fill="currentColor" className="text-primary/60" />
                </svg>
              </div>
            </motion.div>

            {/* 3 - E-commerce Back-office - text left, illustration right */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
            >
              <div className="flex-1 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  <ShoppingCart className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold text-primary uppercase tracking-widest">Back-office</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground leading-snug">
                  {t('apps.type3.title')}
                </h3>
                <p className="text-base text-foreground/70 leading-relaxed">{t('apps.type3.desc')}</p>
                <ul className="space-y-2">
                  {[t('apps.type3.ex1'), t('apps.type3.ex2'), t('apps.type3.ex3'), t('apps.type3.ex4')].map((ex) => (
                    <li key={ex} className="flex items-center gap-2 text-[15px] text-foreground/65">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 flex justify-center">
                <svg viewBox="0 0 480 320" className="w-full max-w-md" aria-hidden="true">
                  <rect x="20" y="20" width="440" height="280" rx="16" fill="currentColor" className="text-primary/5" />
                  {/* Table header */}
                  <rect x="40" y="45" width="400" height="36" rx="8" fill="currentColor" className="text-primary/15" />
                  <text x="80" y="68" fontSize="11" fontWeight="700" fill="currentColor" className="text-foreground">Order</text>
                  <text x="180" y="68" fontSize="11" fontWeight="700" fill="currentColor" className="text-foreground">Product</text>
                  <text x="300" y="68" fontSize="11" fontWeight="700" fill="currentColor" className="text-foreground">Status</text>
                  <text x="390" y="68" fontSize="11" fontWeight="700" fill="currentColor" className="text-foreground">€</text>
                  {/* Rows */}
                  {[0,1,2,3,4].map((i) => (
                    <g key={i}>
                      <rect x="40" y={95 + i * 38} width="400" height="30" rx="6" fill="currentColor" className={i % 2 === 0 ? "text-primary/5" : "text-transparent"} />
                      <rect x="290" y={100 + i * 38} width="60" height="18" rx="9" fill="currentColor" className={i < 2 ? "text-green-500/20" : i === 2 ? "text-primary/20" : "text-yellow-500/20"} />
                    </g>
                  ))}
                  {/* Stock indicator */}
                  <rect x="390" y="260" width="50" height="24" rx="6" fill="currentColor" className="text-primary/20" />
                  <text x="415" y="276" textAnchor="middle" fontSize="11" fontWeight="bold" fill="currentColor" className="text-primary">Stock</text>
                </svg>
              </div>
            </motion.div>

            {/* 4 - Operations Management - illustration left, text right */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20"
            >
              <div className="flex-1 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  <Globe className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold text-primary uppercase tracking-widest">Operations</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground leading-snug">
                  {t('apps.type4.title')}
                </h3>
                <p className="text-base text-foreground/70 leading-relaxed">{t('apps.type4.desc')}</p>
                <ul className="space-y-2">
                  {[t('apps.type4.ex1'), t('apps.type4.ex2'), t('apps.type4.ex3'), t('apps.type4.ex4')].map((ex) => (
                    <li key={ex} className="flex items-center gap-2 text-[15px] text-foreground/65">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 flex justify-center">
                <svg viewBox="0 0 480 320" className="w-full max-w-md" aria-hidden="true">
                  <rect x="20" y="20" width="440" height="280" rx="16" fill="currentColor" className="text-primary/5" />
                  {/* Kanban columns */}
                  {['To do','In progress','Done'].map((label, i) => (
                    <g key={label}>
                      <rect x={50 + i * 135} y="45" width="110" height="230" rx="10" fill="currentColor" className="text-primary/5" />
                      <text x={105 + i * 135} y="68" textAnchor="middle" fontSize="11" fontWeight="700" fill="currentColor" className="text-foreground">{label}</text>
                      {[0,1,2].slice(0, 3 - i).map((j) => (
                        <g key={j}>
                          <rect x={58 + i * 135} y={80 + j * 60} width="94" height="48" rx="8" fill="currentColor" className="text-primary/10" />
                          <rect x={58 + i * 135} y={80 + j * 60} width="94" height="4" rx="2" fill="currentColor" className="text-primary/40" />
                        </g>
                      ))}
                    </g>
                  ))}
                  {/* Checkmark on done column */}
                  <circle cx="375" cy="107" r="10" fill="currentColor" className="text-primary/20" />
                  <text x="375" y="112" textAnchor="middle" fontSize="12" fill="currentColor" className="text-primary">✓</text>
                </svg>
              </div>
            </motion.div>

            {/* 5 - Automation & AI - text left, illustration right */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
            >
              <div className="flex-1 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  <Bot className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold text-primary uppercase tracking-widest">Automation & AI</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground leading-snug">
                  {t('apps.type5.title')}
                </h3>
                <p className="text-base text-foreground/70 leading-relaxed">{t('apps.type5.desc')}</p>
                <ul className="space-y-2">
                  {[t('apps.type5.ex1'), t('apps.type5.ex2'), t('apps.type5.ex3'), t('apps.type5.ex4')].map((ex) => (
                    <li key={ex} className="flex items-center gap-2 text-[15px] text-foreground/65">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 flex justify-center">
                <svg viewBox="0 0 480 320" className="w-full max-w-md" aria-hidden="true">
                  <rect x="20" y="20" width="440" height="280" rx="16" fill="currentColor" className="text-primary/5" />
                  {/* Flow nodes */}
                  <rect x="60" y="130" width="80" height="44" rx="10" fill="currentColor" className="text-primary/20" />
                  <text x="100" y="157" textAnchor="middle" fontSize="11" fontWeight="700" fill="currentColor" className="text-foreground">Trigger</text>
                  <rect x="200" y="130" width="80" height="44" rx="10" fill="currentColor" className="text-primary/40" />
                  <text x="240" y="157" textAnchor="middle" fontSize="11" fontWeight="700" fill="currentColor" className="text-foreground">AI Process</text>
                  <rect x="340" y="130" width="80" height="44" rx="10" fill="currentColor" className="text-primary/20" />
                  <text x="380" y="157" textAnchor="middle" fontSize="11" fontWeight="700" fill="currentColor" className="text-foreground">Output</text>
                  {/* Arrows */}
                  <line x1="140" y1="152" x2="200" y2="152" stroke="currentColor" strokeWidth="2" className="text-primary/40" markerEnd="url(#arr)" />
                  <line x1="280" y1="152" x2="340" y2="152" stroke="currentColor" strokeWidth="2" className="text-primary/40" />
                  {/* Sub-nodes */}
                  <rect x="170" y="210" width="70" height="34" rx="8" fill="currentColor" className="text-primary/10" />
                  <text x="205" y="231" textAnchor="middle" fontSize="10" fontWeight="700" fill="currentColor" className="text-foreground">Enrich</text>
                  <rect x="260" y="210" width="70" height="34" rx="8" fill="currentColor" className="text-primary/10" />
                  <text x="295" y="231" textAnchor="middle" fontSize="10" fontWeight="700" fill="currentColor" className="text-foreground">Notify</text>
                  <line x1="240" y1="174" x2="205" y2="210" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" className="text-primary/30" />
                  <line x1="240" y1="174" x2="295" y2="210" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" className="text-primary/30" />
                  {/* Brain icon suggestion */}
                  <circle cx="240" cy="80" r="28" fill="currentColor" className="text-primary/15" />
                  <text x="240" y="87" textAnchor="middle" fontSize="20">🤖</text>
                </svg>
              </div>
            </motion.div>

            {/* 6 - Field & Mobile Apps - illustration left, text right */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20"
            >
              <div className="flex-1 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  <Smartphone className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold text-primary uppercase tracking-widest">Mobile</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground leading-snug">
                  {t('apps.type6.title')}
                </h3>
                <p className="text-base text-foreground/70 leading-relaxed">{t('apps.type6.desc')}</p>
                <ul className="space-y-2">
                  {[t('apps.type6.ex1'), t('apps.type6.ex2'), t('apps.type6.ex3'), t('apps.type6.ex4')].map((ex) => (
                    <li key={ex} className="flex items-center gap-2 text-[15px] text-foreground/65">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 flex justify-center">
                <svg viewBox="0 0 480 320" className="w-full max-w-md" aria-hidden="true">
                  <rect x="20" y="20" width="440" height="280" rx="16" fill="currentColor" className="text-primary/5" />
                  {/* Phone frame */}
                  <rect x="175" y="30" width="130" height="240" rx="20" fill="currentColor" className="text-primary/10" />
                  <rect x="183" y="50" width="114" height="200" rx="12" fill="currentColor" className="text-primary/5" />
                  <rect x="205" y="38" width="70" height="8" rx="4" fill="currentColor" className="text-primary/20" />
                  {/* App UI inside phone */}
                  <rect x="193" y="60" width="94" height="28" rx="6" fill="currentColor" className="text-primary/20" />
                  <text x="240" y="78" textAnchor="middle" fontSize="10" fontWeight="700" fill="currentColor" className="text-foreground">Field Report</text>
                  {[0,1,2,3].map((i) => (
                    <g key={i}>
                      <rect x="193" y={98 + i * 36} width="94" height="28" rx="6" fill="currentColor" className="text-primary/25" />
                      <rect x="197" y={102 + i * 36} width="14" height="14" rx="3" fill="currentColor" className={i < 2 ? "text-primary/60" : "text-primary/30"} />
                    </g>
                  ))}
                  <rect x="193" y="252" width="94" height="22" rx="8" fill="currentColor" className="text-primary/30" />
                  <text x="240" y="267" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor" className="text-primary">Submit</text>
                  {/* Signal dots */}
                  <circle cx="100" cy="160" r="30" fill="currentColor" className="text-primary/5" />
                  <circle cx="100" cy="160" r="18" fill="currentColor" className="text-primary/10" />
                  <circle cx="100" cy="160" r="8" fill="currentColor" className="text-primary/30" />
                  <circle cx="380" cy="160" r="30" fill="currentColor" className="text-primary/5" />
                  <circle cx="380" cy="160" r="18" fill="currentColor" className="text-primary/10" />
                  <circle cx="380" cy="160" r="8" fill="currentColor" className="text-primary/30" />
                  <line x1="130" y1="160" x2="175" y2="160" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" className="text-primary/20" />
                  <line x1="305" y1="160" x2="350" y2="160" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" className="text-primary/20" />
                </svg>
              </div>
            </motion.div>
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
