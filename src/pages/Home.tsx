import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Target, Zap, Calendar, MessageCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import MagneticButton from '@/components/animations/MagneticButton';
import ScrollReveal from '@/components/animations/ScrollReveal';
import FloatingElements from '@/components/animations/FloatingElements';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import HeroSection from '@/components/HeroSection';

const Home = () => {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: Calendar,
      title: t('home.contact.call.title'),
      description: t('home.contact.call.desc'),
      cta: t('home.contact.call.cta'),
      href: 'https://calendly.com/elie-ageron',
      recommended: true,
      external: true,
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: t('home.contact.whatsapp.desc'),
      cta: t('home.contact.whatsapp.cta'),
      href: 'https://wa.me/33695555318',
      recommended: false,
      external: true,
    },
    {
      icon: Mail,
      title: 'Email',
      description: t('home.contact.email.desc'),
      cta: 'elie.ageron.design@gmail.com',
      href: 'mailto:elie.ageron.design@gmail.com',
      recommended: false,
      external: true,
    },
  ];

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

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <FloatingElements count={6} />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal direction="up">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="glass-card neon-border rounded-3xl p-12 relative overflow-hidden"
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 opacity-30"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.3), transparent 70%)',
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-foreground mb-4 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {t('home.cta.title')}
              </motion.h2>
              <motion.p 
                className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {t('home.cta.subtitle')}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative z-10"
              >
                <MagneticButton>
                  <Button variant="hero" size="xl" asChild>
                    <a href="https://calendly.com/elie-ageron" target="_blank" rel="noopener noreferrer">
                      {t('home.cta.button')}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </Button>
                </MagneticButton>
              </motion.div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20 relative overflow-hidden">
        <FloatingElements count={8} />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <ScrollReveal direction="up" className="text-center mb-12">
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-foreground">{t('home.contact.title1')}</span>{' '}
              <motion.span 
                className="text-primary"
                animate={{ 
                  textShadow: ['0 0 0px hsl(var(--primary))', '0 0 30px hsl(var(--primary))', '0 0 0px hsl(var(--primary))']
                }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                {t('home.contact.title2')}
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {t('home.contact.subtitle')}
            </motion.p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                target={method.external ? '_blank' : undefined}
                rel={method.external ? 'noopener noreferrer' : undefined}
                initial={{ 
                  opacity: 0, 
                  x: index === 0 ? -50 : index === 2 ? 50 : 0,
                  y: index === 1 ? 50 : 0
                }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className={`relative glass-card rounded-2xl p-8 pt-10 cursor-pointer transition-all group ${
                  method.recommended ? 'neon-border' : 'hover:border-primary/30'
                }`}
              >
                {/* Animated background on hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Recommended Badge */}
                {method.recommended && (
                  <motion.div 
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {t('home.contact.recommended')}
                  </motion.div>
                )}

                {/* Icon */}
                <motion.div 
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 relative z-10 ${
                    method.recommended ? 'bg-primary/20' : 'bg-secondary'
                  }`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <method.icon className={`w-7 h-7 ${
                    method.recommended ? 'text-primary' : 'text-foreground'
                  }`} />
                </motion.div>

                {/* Title */}
                <h3 className={`text-xl font-bold mb-3 relative z-10 ${
                  method.recommended ? 'text-primary' : 'text-foreground'
                }`}>
                  {method.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-6 relative z-10">
                  {method.description}
                </p>

                {/* CTA Link */}
                <motion.div 
                  className="flex items-center gap-2 text-primary font-medium relative z-10"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-sm">{method.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
