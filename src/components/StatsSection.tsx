import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Clock, Shield, Smartphone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const StatsSection = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"]
  });

  const valueProps = [
    { 
      icon: Clock, 
      title: t('stats.always.title'), 
      desc: t('stats.always.desc'),
    },
    { 
      icon: Shield, 
      title: t('stats.trust.title'), 
      desc: t('stats.trust.desc'),
    },
    { 
      icon: Smartphone, 
      title: t('stats.mobile.title'), 
      desc: t('stats.mobile.desc'),
    },
  ];

  // Staggered animations - each card has its own scroll range
  const card1X = useTransform(scrollYProgress, [0, 0.3], [-100, 0]);
  const card1Opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  
  const card2X = useTransform(scrollYProgress, [0.15, 0.5], [100, 0]);
  const card2Opacity = useTransform(scrollYProgress, [0.15, 0.45], [0, 1]);
  
  const card3X = useTransform(scrollYProgress, [0.35, 0.7], [-100, 0]);
  const card3Opacity = useTransform(scrollYProgress, [0.35, 0.65], [0, 1]);

  // Connecting line animation
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  const cardAnimations = [
    { x: card1X, opacity: card1Opacity, direction: 'left' },
    { x: card2X, opacity: card2Opacity, direction: 'right' },
    { x: card3X, opacity: card3Opacity, direction: 'left' },
  ];

  return (
    <section ref={containerRef} className="py-20 sm:py-28 md:py-36 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        
        {/* Animated vertical connecting line - hidden on mobile */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block">
          <motion.div 
            className="w-full bg-gradient-to-b from-primary via-primary to-transparent"
            style={{ height: lineHeight }}
          />
        </div>

        {/* Staircase layout */}
        <div className="flex flex-col gap-12 sm:gap-16 md:gap-20">
          {valueProps.map((prop, index) => {
            const anim = cardAnimations[index];
            const isLeft = anim.direction === 'left';
            
            return (
              <motion.div
                key={index}
                className={`
                  flex items-center gap-6 md:gap-12
                  ${isLeft ? 'md:flex-row md:pr-[50%]' : 'md:flex-row-reverse md:pl-[50%]'}
                  flex-col md:text-left text-center
                `}
                style={{
                  x: anim.x,
                  opacity: anim.opacity,
                }}
              >
                {/* Card content */}
                <div 
                  className={`
                    relative flex-1 p-6 sm:p-8 rounded-2xl
                    bg-secondary/80 backdrop-blur-sm
                    border border-border/50
                    transition-all duration-500
                    hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10
                    group
                  `}
                >
                  {/* Number indicator */}
                  <div className={`
                    absolute -top-4 ${isLeft ? 'md:-right-4 right-4' : 'md:-left-4 left-4'}
                    w-8 h-8 rounded-full bg-primary text-primary-foreground
                    flex items-center justify-center text-sm font-bold
                    shadow-lg shadow-primary/30
                  `}>
                    {index + 1}
                  </div>

                  <div className="flex items-start gap-4 md:gap-5">
                    {/* Icon */}
                    <motion.div 
                      className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <prop.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                    </motion.div>
                    
                    {/* Text */}
                    <div className="flex-1 text-left">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {prop.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {prop.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline dot - visible on desktop */}
                <motion.div 
                  className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/50"
                  style={{ opacity: anim.opacity }}
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;