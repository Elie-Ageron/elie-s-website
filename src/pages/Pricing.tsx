import { motion } from 'framer-motion';
import { useState } from 'react';
import { Check, Zap, Crown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Switch } from '@/components/ui/switch';
import MagneticButton from '@/components/animations/MagneticButton';
import ContactMethodsSection from '@/components/ContactMethodsSection';

const Pricing = () => {
  const { t } = useLanguage();
  const [includeMaintenance, setIncludeMaintenance] = useState(false);

  const plans = [
    {
      id: 'landing',
      icon: Zap,
      title: t('services.landing.title'),
      price: '200€',
      maintenancePrice: '+50€/mois',
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
      price: '1000€',
      maintenancePrice: '+100€/mois',
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
      price: t('services.custom.price'),
      maintenancePrice: t('pricing.maintenance.custom'),
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
      {/* Hero */}
      <section className="py-20 relative grain">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-primary/20 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">{t('pricing.title1')}</span>{' '}
              <span className="text-primary">{t('pricing.title2')}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('pricing.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Maintenance Toggle */}
      <section className="py-8">
        <div className="max-w-xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-2xl p-6 flex items-center justify-between"
          >
            <div>
              <h3 className="font-semibold text-foreground">{t('pricing.maintenance.toggle')}</h3>
              <p className="text-sm text-muted-foreground">{t('pricing.maintenance.desc')}</p>
            </div>
            <Switch 
              checked={includeMaintenance} 
              onCheckedChange={setIncludeMaintenance}
            />
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <motion.div
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
                className={`relative glass-card rounded-3xl p-8 flex flex-col h-full transition-all duration-300 ${
                  plan.popular ? 'neon-border' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    ⭐ {t('services.authority.popular')}
                  </div>
                )}

                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-xl ${plan.popular ? 'bg-primary/20' : 'bg-secondary'}`}>
                    <plan.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{plan.title}</h3>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {includeMaintenance && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-sm text-primary ml-2"
                    >
                      {plan.maintenancePrice}
                    </motion.span>
                  )}
                </div>

                <p className="text-muted-foreground mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <MagneticButton>
                  <Button 
                    variant={plan.popular ? 'hero' : 'neonOutline'} 
                    size="lg" 
                    className="w-full"
                    asChild
                  >
                    <a href="https://calendly.com/elie-ageron" target="_blank" rel="noopener noreferrer">
                      {plan.cta}
                    </a>
                  </Button>
                </MagneticButton>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">{t('pricing.guarantee.title')}</h3>
            <p className="text-muted-foreground">{t('pricing.guarantee.desc')}</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <ContactMethodsSection />
    </>
  );
};

export default Pricing;
