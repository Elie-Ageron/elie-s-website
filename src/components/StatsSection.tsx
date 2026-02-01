import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import FloatingElements from './animations/FloatingElements';

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

const StatItem = ({ value, suffix, label, delay }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const duration = 2000;
        const steps = 60;
        const increment = value / steps;
        let current = 0;
        
        const counter = setInterval(() => {
          current += increment;
          if (current >= value) {
            setCount(value);
            clearInterval(counter);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);
        
        return () => clearInterval(counter);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: delay / 1000, duration: 0.8, ease: "easeOut" }}
      className="text-center px-8 py-6 relative group"
    >
      {/* Glow effect on hover */}
      <motion.div 
        className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        whileHover={{ scale: 1.05 }}
      />
      
      <motion.div 
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2 relative"
        animate={{ 
          textShadow: isInView ? ['0 0 0px hsl(var(--primary))', '0 0 20px hsl(var(--primary))', '0 0 0px hsl(var(--primary))'] : '0 0 0px hsl(var(--primary))'
        }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
      >
        <span className="text-primary">{count}</span>
        <span className="text-primary">{suffix}</span>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: (delay / 1000) + 0.3, duration: 0.5 }}
        className="text-sm md:text-base text-muted-foreground uppercase tracking-wider"
      >
        {label}
      </motion.div>
    </motion.div>
  );
};

const StatsSection = () => {
  const { t } = useLanguage();

  const stats = [
    { value: 3, suffix: 'x', label: t('stats.visibility'), delay: 0 },
    { value: 45, suffix: '%', label: t('stats.conversion'), delay: 200 },
    { value: 100, suffix: '%', label: t('stats.responsive'), delay: 400 },
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Floating background elements */}
      <FloatingElements count={8} />
      
      {/* Top divider */}
      <div className="section-divider mb-16" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-4 md:p-8 relative overflow-hidden"
        >
          {/* Animated border glow */}
          <motion.div
            className="absolute inset-0 rounded-3xl"
            style={{ 
              background: 'linear-gradient(90deg, transparent, hsl(var(--primary) / 0.3), transparent)',
              backgroundSize: '200% 100%'
            }}
            animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border/30 relative z-10">
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                delay={stat.delay}
              />
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Bottom divider */}
      <div className="section-divider mt-16" />
    </section>
  );
};

export default StatsSection;
