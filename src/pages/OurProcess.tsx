import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedTimeline from '@/components/animations/AnimatedTimeline';
import ContactMethodsSection from '@/components/ContactMethodsSection';

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

      {/* Contact Methods */}
      <ContactMethodsSection />
    </>
  );
};

export default OurProcess;
