import { motion } from 'framer-motion';
import { Mail, Phone, Calendar, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import MagneticButton from '@/components/animations/MagneticButton';
import SEO from '@/components/SEO';

const Contact = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'elieageron@gmail.com', href: 'mailto:elieageron@gmail.com', newTab: false },
    { icon: MessageCircle, label: 'WhatsApp', value: '+33 6 95 55 53 18', href: 'https://wa.me/33695555318', newTab: false },
    { icon: Phone, label: 'Phone', value: '06 95 55 53 18', href: 'tel:+33695555318', newTab: false },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Form submission logic would go here
    setTimeout(() => setIsSubmitting(false), 2000);
  };

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
      <section className="py-20" aria-labelledby="contact-form-heading">
        <h2 id="contact-form-heading" className="sr-only">Contact Elie Ageron for Web Design</h2>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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

            {/* Contact Form + Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              {/* Contact Info Cards */}
              <nav className="grid grid-cols-1 sm:grid-cols-3 gap-4" aria-label="Contact methods">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href || undefined}
                    target={info.newTab ? '_blank' : undefined}
                    rel={info.newTab ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="glass-card rounded-xl p-4 text-center cursor-pointer transition-all hover:neon-border"
                    aria-label={`Contact via ${info.label}: ${info.value}`}
                  >
                    <info.icon className="w-5 h-5 text-primary mx-auto mb-2" aria-hidden="true" />
                    <p className="text-xs text-muted-foreground mb-1">{info.label}</p>
                    <p className="text-sm font-medium text-foreground break-all">{info.value}</p>
                  </motion.a>
                ))}
              </nav>

              {/* Contact Form */}
              <article className="glass-card rounded-3xl p-8" aria-labelledby="form-heading">
                <h3 id="form-heading" className="text-xl font-bold text-foreground mb-6">
                  {t('contact.form.title')}
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form">
                  <div>
                    <label htmlFor="contact-name" className="sr-only">{t('contact.name')}</label>
                    <Input 
                      id="contact-name"
                      name="name"
                      placeholder={t('contact.name')}
                      className="bg-secondary/50 border-border/50 focus:border-primary"
                      required
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="sr-only">{t('contact.email')}</label>
                    <Input 
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder={t('contact.email')}
                      className="bg-secondary/50 border-border/50 focus:border-primary"
                      required
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="sr-only">{t('contact.project')}</label>
                    <Textarea 
                      id="contact-message"
                      name="message"
                      placeholder={t('contact.project')}
                      rows={5}
                      className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                      required
                      aria-required="true"
                    />
                  </div>
                  <MagneticButton className="w-full">
                    <Button 
                      variant="neon" 
                      size="lg" 
                      className="w-full"
                      type="submit"
                      disabled={isSubmitting}
                      aria-busy={isSubmitting}
                    >
                      {isSubmitting ? t('contact.sending') : t('contact.send')}
                    </Button>
                  </MagneticButton>
                </form>
              </article>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
