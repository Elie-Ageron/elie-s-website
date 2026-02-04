import { motion } from 'framer-motion';
import { TrendingUp, Target, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/animations/ScrollReveal';
import FloatingElements from '@/components/animations/FloatingElements';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import HeroSection from '@/components/HeroSection';
import PersonalIntroSection from '@/components/PersonalIntroSection';
import ContactMethodsSection from '@/components/ContactMethodsSection';
import SEO from '@/components/SEO';
import JsonLd from '@/components/JsonLd';

const Home = () => {
  const { t } = useLanguage();

  return (
    <>
      <SEO page="home" />
      <JsonLd />
      
      {/* Hero Section with 3D */}
      <HeroSection />

      {/* Personal Intro - First thing after hero */}
      <PersonalIntroSection />

      {/* Quick Value Props */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden" aria-labelledby="value-props-heading">
        <FloatingElements count={5} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Section Header */}
          <ScrollReveal direction="up" className="text-center mb-10 sm:mb-12">
            <h2 id="value-props-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">
                {t('home.valueProps.title1')}
              </span>{' '}
              <span className="text-primary">
                {t('home.valueProps.title2')}
              </span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              {t('home.valueProps.subtitle')}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
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
                <motion.article
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center group cursor-pointer h-full active:scale-[0.98] transition-transform"
                  role="article"
                  aria-label={item.title}
                >
                  <motion.div 
                    className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/20 mb-3 sm:mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    aria-hidden="true"
                  >
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" aria-hidden="true" />
                  </motion.div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1.5 sm:mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />
      <TestimonialsSection />

      {/* Contact Methods Section */}
      <section className="relative overflow-hidden" aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="sr-only">Contact Elie Ageron</h2>
        <div className="hidden sm:block">
          <FloatingElements count={5} />
        </div>
        <div className="relative z-10">
          <ContactMethodsSection />
        </div>
      </section>
    </>
  );
};

export default Home;
