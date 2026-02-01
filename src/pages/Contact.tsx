import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import MagneticButton from '@/components/animations/MagneticButton';

const Contact = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'elieageron@gmail.com', href: 'mailto:elieageron@gmail.com' },
    { icon: MessageCircle, label: 'WhatsApp', value: '+33 6 95 55 53 18', href: 'https://wa.me/33695555318' },
    { icon: Phone, label: 'Phone', value: '06 95 55 53 18', href: 'tel:+33695555318' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Form submission logic would go here
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <>
      {/* Hero */}
      <section className="py-20 relative grain">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calendly Embed / CTA */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="glass-card neon-border rounded-3xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-primary/20">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{t('contact.calendly.title')}</h2>
                </div>
                
                <p className="text-muted-foreground mb-6">{t('contact.calendly.desc')}</p>
                
                {/* Calendly Embed Frame */}
                <div className="rounded-2xl overflow-hidden bg-card mb-6" style={{ minHeight: '400px' }}>
                  <iframe
                    src="https://calendly.com/elie-ageron?embed_domain=localhost&embed_type=Inline"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    title="Schedule a call"
                    className="rounded-2xl"
                  />
                </div>

                <MagneticButton className="w-full">
                  <Button variant="hero" size="lg" className="w-full" asChild>
                    <a href="https://calendly.com/elie-ageron" target="_blank" rel="noopener noreferrer">
                      {t('contact.calendly.button')}
                    </a>
                  </Button>
                </MagneticButton>
              </div>
            </motion.div>

            {/* Contact Form + Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href || undefined}
                    target={info.href?.startsWith('http') ? '_blank' : undefined}
                    rel={info.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="glass-card rounded-xl p-4 text-center cursor-pointer transition-all hover:neon-border"
                  >
                    <info.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground mb-1">{info.label}</p>
                    <p className="text-sm font-medium text-foreground break-all">{info.value}</p>
                  </motion.a>
                ))}
              </div>

              {/* Contact Form */}
              <div className="glass-card rounded-3xl p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">{t('contact.form.title')}</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder={t('contact.name')}
                      className="bg-secondary/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email"
                      placeholder={t('contact.email')}
                      className="bg-secondary/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder={t('contact.project')}
                      rows={5}
                      className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                    />
                  </div>
                  <MagneticButton className="w-full">
                    <Button 
                      variant="neon" 
                      size="lg" 
                      className="w-full"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? t('contact.sending') : t('contact.send')}
                    </Button>
                  </MagneticButton>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
