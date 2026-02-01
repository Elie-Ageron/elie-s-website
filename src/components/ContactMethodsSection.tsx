import { motion } from 'framer-motion';
import { Calendar, MessageCircle, Mail, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/animations/ScrollReveal';

interface ContactMethodsSectionProps {
  showTitle?: boolean;
  compact?: boolean;
}

const ContactMethodsSection = ({ showTitle = true, compact = false }: ContactMethodsSectionProps) => {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: Calendar,
      title: t('home.contact.call.title'),
      description: t('home.contact.call.desc'),
      cta: t('home.contact.call.cta'),
      href: 'https://calendly.com/elie-ageron',
      recommended: true,
      newTab: true,
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: t('home.contact.whatsapp.desc'),
      cta: t('home.contact.whatsapp.cta'),
      href: 'https://wa.me/33695555318',
      recommended: false,
      newTab: false,
    },
    {
      icon: Mail,
      title: 'Email',
      description: t('home.contact.email.desc'),
      cta: 'elieageron@gmail.com',
      href: 'mailto:elieageron@gmail.com',
      recommended: false,
      newTab: false,
    },
  ];

  return (
    <section className={compact ? 'py-12' : 'py-20'}>
      <div className="max-w-6xl mx-auto px-6">
        {showTitle && (
          <ScrollReveal direction="up" className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-foreground">{t('home.contact.title1')}</span>{' '}
              <span className="text-primary">{t('home.contact.title2')}</span>
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
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target={method.newTab ? '_blank' : undefined}
              rel={method.newTab ? 'noopener noreferrer' : undefined}
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
                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
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
  );
};

export default ContactMethodsSection;
