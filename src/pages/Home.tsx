import { motion } from 'framer-motion';
import { TrendingUp, Target, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/animations/ScrollReveal';
import FloatingElements from '@/components/animations/FloatingElements';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import HeroSection from '@/components/HeroSection';
import ContactMethodsSection from '@/components/ContactMethodsSection';

const Home = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section with 3D */}
      <HeroSection />

      {/* Quick Value Props */}
      <section className="py-20 relative overflow-hidden">
        <FloatingElements count={8} />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: t('home.value1.title'), desc: t('home.value1.desc') },
              { icon: Target, title: t('home.value2.title'), desc: t('home.value2.desc') },
              { icon: Zap, title: t('home.value3.title'), desc: t('home.value3.desc') },
            ].map((item, index) => (
              <ScrollReveal 
                key={index} 
                direction={index === 0 ? 'left' : index === 2 ? 'right' : 'up'}
                delay={index * 0.1}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className="glass-card rounded-2xl p-6 text-center group cursor-pointer h-full"
                >
                  <motion.div 
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />
      <TestimonialsSection />

      {/* Contact Methods Section */}
      <section className="relative overflow-hidden">
        <FloatingElements count={8} />
        <div className="relative z-10">
          <ContactMethodsSection />
        </div>
      </section>
    </>
  );
};

export default Home;
