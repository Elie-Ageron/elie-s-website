import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Palette, BarChart3, Rocket } from 'lucide-react';

const AnimatedTimeline = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const steps = [
    {
      icon: Phone,
      title: t('process.step1.title'),
      description: t('process.step1.desc'),
    },
    {
      icon: Palette,
      title: t('process.step2.title'),
      description: t('process.step2.desc'),
    },
    {
      icon: BarChart3,
      title: t('process.step3.title'),
      description: t('process.step3.desc'),
    },
    {
      icon: Rocket,
      title: t('process.step4.title'),
      description: t('process.step4.desc'),
    },
  ];

  return (
    <div ref={containerRef} className="relative py-20">
      {/* Animated line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2">
        <motion.div
          className="w-full bg-primary origin-top"
          style={{ 
            scaleY: scrollYProgress,
            height: '100%',
            boxShadow: '0 0 20px hsl(328 100% 54% / 0.5)',
          }}
        />
      </div>

      <div className="space-y-24">
        {steps.map((step, index) => {
          const stepProgress = useTransform(
            scrollYProgress,
            [index * 0.25, (index + 1) * 0.25],
            [0, 1]
          );

          return (
            <motion.div
              key={index}
              className={`relative flex items-center gap-8 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                <h3 className="text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              
              <motion.div 
                className="relative z-10 w-16 h-16 rounded-full bg-card border-2 border-border flex items-center justify-center"
                style={{
                  borderColor: useTransform(stepProgress, [0, 0.5], ['hsl(0 0% 15%)', 'hsl(328 100% 54%)']),
                  boxShadow: useTransform(
                    stepProgress,
                    [0, 1],
                    ['0 0 0 hsl(328 100% 54% / 0)', '0 0 30px hsl(328 100% 54% / 0.5)']
                  ),
                }}
              >
                <step.icon className="w-6 h-6 text-primary" />
              </motion.div>
              
              <div className="flex-1" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedTimeline;
