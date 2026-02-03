import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedTimeline from '@/components/animations/AnimatedTimeline';
import ContactMethodsSection from '@/components/ContactMethodsSection';
import SEO from '@/components/SEO';

const OurProcess = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEO page="process" />
      
      {/* Hero */}
      <section className="py-20 relative grain" aria-labelledby="process-hero-heading">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/20 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 id="process-hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">{t('process.title1')}</span>{' '}
              <span className="text-primary">{t('process.title2')}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('process.subtitle')}
            </p>
          </motion.header>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 relative" aria-labelledby="timeline-heading">
        <h2 id="timeline-heading" className="sr-only">Web Design Process Steps</h2>
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedTimeline />
        </div>
      </section>

      {/* Contact Methods */}
      <ContactMethodsSection />
    </>
  );
};

export default OurProcess;
