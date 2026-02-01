import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AnimatedTimeline from '@/components/animations/AnimatedTimeline';
import MagneticButton from '@/components/animations/MagneticButton';

const OurProcess = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="py-20 relative grain">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/20 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {t('process.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('process.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedTimeline />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card neon-border rounded-3xl p-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">{t('process.cta.title')}</h2>
            <p className="text-lg text-muted-foreground mb-8">{t('process.cta.subtitle')}</p>
            <MagneticButton>
              <Button variant="hero" size="xl" asChild>
                <a href="https://calendly.com/elie-ageron" target="_blank" rel="noopener noreferrer">
                  {t('process.cta.button')}
                </a>
              </Button>
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default OurProcess;
