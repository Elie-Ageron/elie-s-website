import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Target, Zap, Calendar, MessageCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import MagneticButton from '@/components/animations/MagneticButton';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';

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
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden grain">
        {/* Background gradient effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Web Design Premium</span>
            </motion.div>

            {/* Main Headline with 3D effect */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-foreground">{t('hero.headline').split('.')[0]}.</span>
              <br />
              <motion.span 
                className="text-primary neon-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {t('hero.headline').split('.')[1]}
              </motion.span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              {t('hero.subheadline')}
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <MagneticButton>
                <Button variant="hero" size="xl" asChild>
                  <a href="https://calendly.com/elie-ageron" target="_blank" rel="noopener noreferrer" className="gap-3">
                    {t('hero.cta')}
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="neonOutline" size="xl" asChild>
                  <Link to="/pricing" className="gap-3">
                    {t('home.viewPricing')}
                  </Link>
                </Button>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Value Props */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: t('home.value1.title'), desc: t('home.value1.desc') },
              { icon: Target, title: t('home.value2.title'), desc: t('home.value2.desc') },
              { icon: Zap, title: t('home.value3.title'), desc: t('home.value3.desc') },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/20 mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card neon-border rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('home.cta.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              {t('home.cta.subtitle')}
            </p>
            <MagneticButton>
              <Button variant="hero" size="xl" asChild>
                <a href="https://calendly.com/elie-ageron" target="_blank" rel="noopener noreferrer">
                  {t('home.cta.button')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t('home.contact.title')}
            </h2>
            <p className="text-muted-foreground">
              {t('home.contact.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                target={method.external ? '_blank' : undefined}
                rel={method.external ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`relative glass-card rounded-2xl p-8 cursor-pointer transition-all group ${
                  method.recommended ? 'neon-border' : 'hover:border-primary/30'
                }`}
              >
                {/* Recommended Badge */}
                {method.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    {t('home.contact.recommended')}
                  </div>
                )}

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 ${
                  method.recommended ? 'bg-primary/20' : 'bg-secondary'
                }`}>
                  <method.icon className={`w-7 h-7 ${
                    method.recommended ? 'text-primary' : 'text-foreground'
                  }`} />
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold mb-3 ${
                  method.recommended ? 'text-primary' : 'text-foreground'
                }`}>
                  {method.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-6">
                  {method.description}
                </p>

                {/* CTA Link */}
                <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  <span className="text-sm">{method.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
