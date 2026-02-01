import { motion } from 'framer-motion';
import { Check, Zap, Crown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay * 0.1, duration: 0.6 }}
      className={`relative glass-card rounded-3xl p-8 flex flex-col h-full ${
        popular ? 'neon-border' : ''
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
          ⭐ Most Popular
        </div>
      )}
      
      <div className="flex items-center gap-3 mb-6">
        <div className={`p-3 rounded-xl ${popular ? 'bg-primary/20' : 'bg-secondary'}`}>
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
        </div>
      </div>
      
      <div className="mb-6">
        <span className="text-4xl font-bold text-foreground">{price}</span>
      </div>
      
      <p className="text-muted-foreground mb-6">{description}</p>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3 text-sm text-foreground/80">
            <Check className="w-4 h-4 text-primary flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      
      <Button 
        variant={popular ? 'hero' : 'neonOutline'} 
        size="lg" 
        className="w-full"
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
    <section id="services" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

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
