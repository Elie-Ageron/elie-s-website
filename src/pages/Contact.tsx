import { motion } from 'framer-motion';
import { Mail, Calendar, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import MagneticButton from '@/components/animations/MagneticButton';
import SEO from '@/components/SEO';

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'elieageron@gmail.com', href: 'mailto:elieageron@gmail.com', newTab: false },
    { icon: MessageCircle, label: 'WhatsApp', value: '+33 6 95 55 53 18', href: 'https://wa.me/33695555318', newTab: false },
  ];

  return (
    <>
      <SEO page="contact" />
      
      {/* Hero */}
      <section className="py-20 relative grain" aria-labelledby="contact-hero-heading">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 id="contact-hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">{t('contact.title1')}</span>{' '}
              <span className="text-primary">{t('contact.title2')}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </motion.header>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20" aria-labelledby="contact-methods-heading">
        <h2 id="contact-methods-heading" className="sr-only">Contact Elie Ageron for Web Design</h2>
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calendly Embed / CTA */}
            <motion.article
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              aria-labelledby="calendly-heading"
            >
              <div className="glass-card neon-border rounded-3xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-primary/20" aria-hidden="true">
                    <Calendar className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 id="calendly-heading" className="text-2xl font-bold text-foreground">
                    {t('contact.calendly.title')}
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-6">{t('contact.calendly.desc')}</p>
                
                {/* Calendly Embed Frame - lazy loaded */}
                <div 
                  className="rounded-2xl overflow-hidden bg-card mb-6" 
                  style={{ minHeight: '400px' }}
                  role="complementary"
                  aria-label="Calendly scheduling widget"
                >
                  <iframe
                    src="https://calendly.com/elie-ageron?embed_domain=localhost&embed_type=Inline"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    title="Schedule a call with Elie Ageron for web design consultation"
                    loading="lazy"
                    className="rounded-2xl"
                  />
                </div>

                <MagneticButton className="w-full">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="w-full" 
                    asChild
                    aria-label="Open Calendly to schedule a web design consultation"
                  >
                    <a href="https://calendly.com/elie-ageron" target="_blank" rel="noopener noreferrer">
                      {t('contact.calendly.button')}
                    </a>
                  </Button>
                </MagneticButton>
              </div>
            </motion.article>

            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href || undefined}
                  target={info.newTab ? '_blank' : undefined}
                  rel={info.newTab ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass-card rounded-2xl p-6 cursor-pointer transition-all hover:neon-border flex items-center gap-4"
                  aria-label={`Contact via ${info.label}: ${info.value}`}
                >
                  <div className="p-3 rounded-xl bg-primary/20 shrink-0">
                    <info.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    <p className="text-lg font-medium text-foreground">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
