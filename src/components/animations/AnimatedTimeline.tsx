import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef, ElementType } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Palette, BarChart3, Rocket } from 'lucide-react';

interface StepProps {
  icon: ElementType;
  title: string;
  description: string;
  index: number;
  scrollYProgress: MotionValue<number>;
}

// Each step is its own component so useTransform is never called inside a loop.
const TimelineStep = ({ icon: Icon, title, description, index, scrollYProgress }: StepProps) => {
  const start = index * 0.25;
  const end = (index + 1) * 0.25;

  const stepProgress = useTransform(scrollYProgress, [start, end], [0, 1]);
  const borderColor = useTransform(stepProgress, [0, 0.5], ['hsl(0 0% 15%)', 'hsl(328 100% 54%)']);
  const boxShadow = useTransform(
    stepProgress,
    [0, 1],
    ['0 0 0 hsl(328 100% 54% / 0)', '0 0 30px hsl(328 100% 54% / 0.5)']
  );

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: 0.1 }}
    >
      {/* Mobile layout: icon left, text right */}
      <div className="flex items-start gap-4 md:hidden">
        <motion.div
          className="flex-shrink-0 w-12 h-12 rounded-full bg-card border-2 border-border flex items-center justify-center"
          style={{ borderColor, boxShadow }}
        >
          <Icon className="w-5 h-5 text-primary" />
        </motion.div>
        <div className="pt-1 min-w-0">
          <h3 className="text-lg font-bold text-foreground mb-2 leading-snug">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Desktop layout: alternating sides */}
      <div className={`hidden md:flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
          <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>

        <motion.div
          className="relative z-10 w-16 h-16 rounded-full bg-card border-2 border-border flex items-center justify-center"
          style={{ borderColor, boxShadow }}
        >
          <Icon className="w-6 h-6 text-primary" />
        </motion.div>

        <div className="flex-1" />
      </div>
    </motion.div>
  );
};

const AnimatedTimeline = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const steps = [
    { icon: Phone,    title: t('process.step1.title'), description: t('process.step1.desc') },
    { icon: Palette,  title: t('process.step2.title'), description: t('process.step2.desc') },
    { icon: BarChart3,title: t('process.step3.title'), description: t('process.step3.desc') },
    { icon: Rocket,   title: t('process.step4.title'), description: t('process.step4.desc') },
  ];

  return (
    <div ref={containerRef} className="relative py-12 md:py-20">
      {/* Desktop center line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2">
        <motion.div
          className="w-full bg-primary origin-top"
          style={{
            scaleY: scrollYProgress,
            height: '100%',
            boxShadow: '0 0 20px hsl(328 100% 54% / 0.5)',
          }}
        />
      </div>

      {/* Mobile left line — aligned to icon center (w-12 / 2 = 24px = left-6) */}
      <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-border">
        <motion.div
          className="w-full bg-primary origin-top"
          style={{
            scaleY: scrollYProgress,
            height: '100%',
            boxShadow: '0 0 12px hsl(328 100% 54% / 0.4)',
          }}
        />
      </div>

      <div className="space-y-14 md:space-y-24">
        {steps.map((step, index) => (
          <TimelineStep
            key={index}
            index={index}
            icon={step.icon}
            title={step.title}
            description={step.description}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedTimeline;
