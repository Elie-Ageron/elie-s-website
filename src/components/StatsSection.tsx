import { motion } from 'framer-motion';
import { Clock, Shield, Smartphone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/animations/ScrollReveal';

const StatsSection = () => {
  const { t } = useLanguage();

  const valueProps = [
    { 
      icon: Clock, 
      title: t('stats.always.title'), 
      desc: t('stats.always.desc')
    },
    { 
      icon: Shield, 
      title: t('stats.trust.title'), 
      desc: t('stats.trust.desc')
    },
    { 
      icon: Smartphone, 
      title: t('stats.mobile.title'), 
      desc: t('stats.mobile.desc')
    },
  ];

  return (
    <section className="py-10 sm:py-12 md:py-16 relative">
      {/* Top divider */}
      <div className="section-divider mb-10 sm:mb-12 md:mb-16" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {valueProps.map((prop, index) => (
              <ScrollReveal 
                key={index} 
                direction={index === 0 ? 'left' : index === 2 ? 'right' : 'up'}
                delay={index * 0.1}
              >
                <div className="text-center px-4 py-4">
                  <motion.div 
                    className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-primary/20 mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <prop.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                    {prop.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {prop.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Bottom divider */}
      <div className="section-divider mt-10 sm:mt-12 md:mt-16" />
    </section>
  );
};

export default StatsSection;
