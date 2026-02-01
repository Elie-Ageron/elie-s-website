import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Globe, XCircle, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactMethodsSection from '@/components/ContactMethodsSection';

const WhyWebsite = () => {
  const { t } = useLanguage();

  const benefits = [
    { icon: Globe, title: t('why.benefit1.title'), desc: t('why.benefit1.desc') },
    { icon: Users, title: t('why.benefit2.title'), desc: t('why.benefit2.desc') },
    { icon: TrendingUp, title: t('why.benefit3.title'), desc: t('why.benefit3.desc') },
    { icon: DollarSign, title: t('why.benefit4.title'), desc: t('why.benefit4.desc') },
  ];

  const comparison = {
    without: [
      t('why.without.item1'),
      t('why.without.item2'),
      t('why.without.item3'),
      t('why.without.item4'),
    ],
    with: [
      t('why.with.item1'),
      t('why.with.item2'),
      t('why.with.item3'),
      t('why.with.item4'),
    ],
  };

  return (
    <>
      {/* Hero */}
      <section className="py-20 relative grain">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">{t('why.title1')}</span>{' '}
              <span className="text-primary">{t('why.title2')}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('why.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card rounded-2xl p-8 cursor-pointer transition-all hover:neon-border"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/20 shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 relative">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12"
          >
            {t('why.comparison.title')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Without */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-destructive/30"
            >
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="w-8 h-8 text-destructive" />
                <h3 className="text-xl font-bold text-foreground">{t('why.comparison.without')}</h3>
              </div>
              <ul className="space-y-4">
                {comparison.without.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-destructive rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* With */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card neon-border rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold text-foreground">{t('why.comparison.with')}</h3>
              </div>
              <ul className="space-y-4">
                {comparison.with.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <ContactMethodsSection />
    </>
  );
};

export default WhyWebsite;
