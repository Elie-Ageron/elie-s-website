import { motion } from 'framer-motion';
import { Check, Zap, Crown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from './animations/ScrollReveal';
import FloatingElements from './animations/FloatingElements';

interface ServiceCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  icon: React.ReactNode;
  popular?: boolean;
  delay: number;
}

const ServiceCard = ({ title, price, description, features, cta, icon, popular, delay }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay * 0.15, duration: 0.7, ease: "easeOut" }}
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className={`relative glass-card rounded-3xl p-8 flex flex-col h-full group ${
        popular ? 'neon-border' : ''
      }`}
    >
      {/* Hover glow effect */}
      <motion.div 
        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      
      {popular && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full"
        >
          <motion.span
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ⭐ Most Popular
          </motion.span>
        </motion.div>
      )}
      
      <div className="flex items-center gap-3 mb-6 relative z-10">
        <motion.div 
          className={`p-3 rounded-xl ${popular ? 'bg-primary/20' : 'bg-secondary'}`}
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
        <div>
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
        </div>
      </div>
      
      <motion.div 
        className="mb-6 relative z-10"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: delay * 0.15 + 0.2 }}
      >
        <span className="text-4xl font-bold text-foreground">{price}</span>
      </motion.div>
      
      <p className="text-muted-foreground mb-6 relative z-10">{description}</p>
      
      <ul className="space-y-3 mb-8 flex-grow relative z-10">
        {features.map((feature, index) => (
          <motion.li 
            key={index} 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay * 0.15 + 0.1 * index + 0.3 }}
            className="flex items-center gap-3 text-sm text-foreground/80"
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Check className="w-4 h-4 text-primary flex-shrink-0" />
            </motion.div>
            {feature}
          </motion.li>
        ))}
      </ul>
      
      <Button 
        variant={popular ? 'hero' : 'neonOutline'} 
        size="lg" 
        className="w-full relative z-10"
        asChild
      >
        <a href="#contact">{cta}</a>
      </Button>
    </motion.div>
  );
};

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.landing.title'),
      price: t('services.landing.price'),
      description: t('services.landing.desc'),
      features: [
        t('services.landing.feature1'),
        t('services.landing.feature2'),
        t('services.landing.feature3'),
      ],
      cta: t('services.landing.cta'),
      icon: <Zap className="w-6 h-6 text-primary" />,
      delay: 1,
    },
    {
      title: t('services.authority.title'),
      price: t('services.authority.price'),
      description: t('services.authority.desc'),
      features: [
        t('services.authority.feature1'),
        t('services.authority.feature2'),
        t('services.authority.feature3'),
        t('services.authority.feature4'),
      ],
      cta: t('services.authority.cta'),
      icon: <Crown className="w-6 h-6 text-primary" />,
      popular: true,
      delay: 2,
    },
    {
      title: t('services.custom.title'),
      price: t('services.custom.price'),
      description: t('services.custom.desc'),
      features: [
        t('services.custom.feature1'),
        t('services.custom.feature2'),
        t('services.custom.feature3'),
        t('services.custom.feature4'),
      ],
      cta: t('services.custom.cta'),
      icon: <Sparkles className="w-6 h-6 text-primary" />,
      delay: 3,
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Floating background elements */}
      <FloatingElements count={10} />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t('services.title')}
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t('services.subtitle')}
          </motion.p>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
