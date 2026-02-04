import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from './animations/ScrollReveal';
import FloatingElements from './animations/FloatingElements';
import luxuraSpaImage from '@/assets/portfolio-luxura-spa.jpg';
import steelPipeImage from '@/assets/portfolio-steel-pipe.jpg';

interface PortfolioItemProps {
  name: string;
  category: string;
  description: string;
  image: string;
  delay: number;
  previewLabel: string;
  index: number;
}

const PortfolioItem = ({ name, category, description, image, delay, previewLabel, index }: PortfolioItemProps) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        x: index % 2 === 0 ? -80 : 80,
        rotateY: index % 2 === 0 ? 15 : -15
      }}
      whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay * 0.2, duration: 0.8, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.03, 
        y: -10,
        transition: { duration: 0.3 }
      }}
      className="group relative overflow-hidden rounded-3xl glass-card"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img 
          src={image}
          alt={`${name} - ${category} - Site web créé par Elie Ageron Web Design`}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.6 }}
          loading="lazy"
        />
        
        {/* Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"
          initial={{ opacity: 0.6 }}
          whileHover={{ opacity: 0.85 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Hover Preview Button */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium shadow-[0_0_30px_hsl(328_100%_54%/0.4)]"
          >
            <ExternalLink className="w-4 h-4" />
            {previewLabel}
          </motion.div>
        </motion.div>

        {/* Animated corner accent */}
        <motion.div
          className="absolute top-0 right-0 w-20 h-20"
          style={{
            background: 'linear-gradient(135deg, hsl(var(--primary) / 0.5), transparent)',
          }}
          initial={{ x: 80, y: -80 }}
          whileInView={{ x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: delay * 0.2 + 0.3, duration: 0.5 }}
        />
      </div>
      
      {/* Content */}
      <div className="p-6 relative">
        <motion.span 
          className="text-xs text-primary uppercase tracking-wider font-medium"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: delay * 0.2 + 0.2 }}
        >
          {category}
        </motion.span>
        <motion.h3 
          className="text-xl font-bold text-foreground mt-2 mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay * 0.2 + 0.3 }}
        >
          {name}
        </motion.h3>
        <motion.p 
          className="text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay * 0.2 + 0.4 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

const PortfolioSection = () => {
  const { t } = useLanguage();

  const projects = [
    {
      name: t('portfolio.luxura.name'),
      category: t('portfolio.luxura.category'),
      description: t('portfolio.luxura.desc'),
      image: luxuraSpaImage,
      delay: 1,
    },
    {
      name: t('portfolio.steel.name'),
      category: t('portfolio.steel.category'),
      description: t('portfolio.steel.desc'),
      image: steelPipeImage,
      delay: 2,
    },
  ];

  return (
    <section id="portfolio" className="py-24 relative grain overflow-hidden">
      <FloatingElements count={8} />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t('portfolio.title')}
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t('portfolio.subtitle')}
          </motion.p>
        </ScrollReveal>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <PortfolioItem 
              key={index} 
              {...project} 
              index={index}
              previewLabel={t('portfolio.preview')}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
