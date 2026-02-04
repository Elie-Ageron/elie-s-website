import { motion } from 'framer-motion';
import { Mail, Calendar, MessageCircle, ArrowRight, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import MagneticButton from '@/components/animations/MagneticButton';
import SEO from '@/components/SEO';

const Contact = () => {
  const { t, language } = useLanguage();

  const contactMethods = [
    { 
      icon: MessageCircle, 
      label: 'WhatsApp', 
      value: '+33 6 95 55 53 18', 
      href: 'https://wa.me/33695555318', 
      description: language === 'fr' ? 'Réponse rapide, généralement en quelques minutes' : 'Quick response, usually within minutes',
      cta: language === 'fr' ? 'Discuter maintenant' : 'Chat now',
      color: 'bg-green-500/10',
      iconColor: 'text-green-600',
    },
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'elieageron@gmail.com', 
      href: 'mailto:elieageron@gmail.com', 
      description: language === 'fr' ? 'Pour les demandes détaillées, réponse sous 24h' : 'For detailed inquiries, response within 24h',
      cta: language === 'fr' ? 'Envoyer un email' : 'Send an email',
      color: 'bg-primary/10',
      iconColor: 'text-primary',
    },
  ];

  const benefits = language === 'fr' 
    ? ['Appel gratuit de 30 minutes', 'Conseils personnalisés', 'Sans engagement']
    : ['Free 30-minute call', 'Personalized advice', 'No commitment'];

  return (
    <>
      <SEO page="contact" />
      
      {/* Hero */}
      <section className="py-16 sm:py-20 relative grain" aria-labelledby="contact-hero-heading">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <Clock className="w-4 h-4" />
              {language === 'fr' ? 'Réponse rapide garantie' : 'Fast response guaranteed'}
            </motion.div>
            <h1 id="contact-hero-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-foreground">{t('contact.title1')}</span>{' '}
              <span className="text-primary">{t('contact.title2')}</span>
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </motion.header>
        </div>
      </section>

      {/* Calendly Section - Featured */}
      <section className="py-8 sm:py-12" aria-labelledby="calendly-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card neon-border rounded-2xl sm:rounded-3xl p-6 sm:p-10"
            aria-labelledby="calendly-heading"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
              <motion.div 
                className="p-4 rounded-2xl bg-primary/20 w-fit"
                whileHover={{ rotate: 10, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Calendar className="w-8 h-8 text-primary" aria-hidden="true" />
              </motion.div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    {language === 'fr' ? 'Recommandé' : 'Recommended'}
                  </span>
                </div>
                <h2 id="calendly-heading" className="text-2xl sm:text-3xl font-bold text-foreground">
                  {t('contact.calendly.title')}
                </h2>
                <p className="text-muted-foreground mt-1">{t('contact.calendly.desc')}</p>
              </div>
            </div>

            {/* Benefits */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-foreground/80"
                >
                  <CheckCircle className="w-4 h-4 text-primary" />
                  {benefit}
                </motion.div>
              ))}
            </div>
            
            {/* Calendly Embed Frame */}
            <div 
              className="rounded-xl sm:rounded-2xl overflow-hidden bg-card mb-6 sm:mb-8 border border-border/50" 
              style={{ minHeight: '450px' }}
              role="complementary"
              aria-label="Calendly scheduling widget"
            >
              <iframe
                src="https://calendly.com/elie-ageron?embed_domain=localhost&embed_type=Inline"
                width="100%"
                height="450"
                frameBorder="0"
                title="Schedule a call with Elie Ageron for web design consultation"
                loading="lazy"
                className="rounded-xl sm:rounded-2xl"
              />
            </div>

            <MagneticButton className="w-full sm:w-auto">
              <Button 
                variant="hero" 
                size="xl" 
                className="w-full sm:w-auto min-h-[56px] group active:scale-[0.98] transition-transform" 
                asChild
              >
                <a 
                  href="https://calendly.com/elie-ageron" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  {t('contact.calendly.button')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </MagneticButton>
          </motion.article>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-8 sm:py-12 pb-16 sm:pb-20" aria-labelledby="alt-contact-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-6 sm:mb-8"
          >
            <h2 id="alt-contact-heading" className="text-lg sm:text-xl font-semibold text-foreground mb-2">
              {language === 'fr' ? 'Autres moyens de contact' : 'Other ways to reach me'}
            </h2>
            <p className="text-sm text-muted-foreground">
              {language === 'fr' ? 'Choisissez la méthode qui vous convient le mieux' : 'Choose the method that suits you best'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card rounded-2xl p-5 sm:p-6 cursor-pointer transition-all hover:neon-border group active:scale-[0.98]"
                aria-label={`Contact via ${method.label}: ${method.value}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${method.color} shrink-0`}>
                    <method.icon className={`w-6 h-6 ${method.iconColor}`} aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground mb-1">{method.label}</h3>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{method.description}</p>
                    <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                      {method.cta}
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
