import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Clock, Shield, Smartphone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const StatsSection = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const valueProps = [
    { 
      icon: Clock, 
      title: t('stats.always.title'), 
      desc: t('stats.always.desc'),
      color: 'from-primary/20 to-primary/5'
    },
    { 
      icon: Shield, 
      title: t('stats.trust.title'), 
      desc: t('stats.trust.desc'),
      color: 'from-primary/30 to-primary/10'
    },
    { 
      icon: Smartphone, 
      title: t('stats.mobile.title'), 
      desc: t('stats.mobile.desc'),
      color: 'from-primary/20 to-primary/5'
    },
  ];

  // Create staggered animations for each card
  const card1X = useTransform(scrollYProgress, [0, 0.3, 0.5], [-200, 0, 0]);
  const card1Opacity = useTransform(scrollYProgress, [0, 0.25, 0.5], [0, 1, 1]);
  const card1Rotate = useTransform(scrollYProgress, [0, 0.3, 0.5], [-15, -6, -6]);
  
  const card2Y = useTransform(scrollYProgress, [0.1, 0.4, 0.6], [150, 0, 0]);
  const card2Opacity = useTransform(scrollYProgress, [0.1, 0.35, 0.6], [0, 1, 1]);
  const card2Scale = useTransform(scrollYProgress, [0.1, 0.4, 0.6], [0.8, 1, 1]);
  
  const card3X = useTransform(scrollYProgress, [0.2, 0.5, 0.7], [200, 0, 0]);
  const card3Opacity = useTransform(scrollYProgress, [0.2, 0.45, 0.7], [0, 1, 1]);
  const card3Rotate = useTransform(scrollYProgress, [0.2, 0.5, 0.7], [15, 6, 6]);

  // Glow effect intensity
  const glowOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0, 1, 0.5]);

  const cardAnimations = [
    { x: card1X, opacity: card1Opacity, rotate: card1Rotate, scale: 1, zIndex: 1 },
    { y: card2Y, opacity: card2Opacity, scale: card2Scale, rotate: 0, zIndex: 3 },
    { x: card3X, opacity: card3Opacity, rotate: card3Rotate, scale: 1, zIndex: 2 },
  ];

  return (
    <section ref={containerRef} className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Background glow effect */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: glowOpacity }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Stacked cards layout - unconventional overlap */}
        <div className="relative flex items-center justify-center min-h-[500px] sm:min-h-[450px]">
          {valueProps.map((prop, index) => {
            const anim = cardAnimations[index];
            const positions = [
              'left-0 sm:left-[5%] top-[10%] sm:top-[15%]', // Card 1 - top left, tilted
              'left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2', // Card 2 - center, prominent
              'right-0 sm:right-[5%] bottom-[10%] sm:bottom-[15%]', // Card 3 - bottom right, tilted
            ];

            return (
              <motion.div
                key={index}
                className={`absolute ${positions[index]} w-[280px] sm:w-[320px]`}
                style={{
                  x: anim.x,
                  y: anim.y,
                  opacity: anim.opacity,
                  rotate: anim.rotate,
                  scale: anim.scale,
                  zIndex: anim.zIndex,
                }}
              >
                <div 
                  className={`
                    relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl
                    bg-gradient-to-br ${prop.color}
                    backdrop-blur-xl border border-border/50
                    shadow-2xl shadow-primary/10
                    transition-all duration-300
                    hover:shadow-primary/20 hover:border-primary/30
                    group cursor-pointer
                  `}
                >
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-tr-3xl rounded-bl-[60px] opacity-50" />
                  
                  {/* Icon */}
                  <motion.div 
                    className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/30 transition-colors"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <prop.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </motion.div>
                  
                  {/* Content */}
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {prop.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {prop.desc}
                  </p>

                  {/* Subtle shine effect on hover */}
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="flex justify-center mt-8"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground/50">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;