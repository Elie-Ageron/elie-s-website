import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from './animations/ScrollReveal';
import FloatingElements from './animations/FloatingElements';
interface TestimonialCardProps {
  text: string;
  author: string;
  role: string;
  delay: number;
  index: number;
}
const TestimonialCard = ({
  text,
  author,
  role,
  delay,
  index
}: TestimonialCardProps) => {
  const directions: Array<'left' | 'right' | 'up'> = ['left', 'up', 'right'];
  const direction = directions[index % 3];
  return <motion.div initial={{
    opacity: 0,
    x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
    y: direction === 'up' ? 50 : 0,
    rotateY: direction === 'left' ? 10 : direction === 'right' ? -10 : 0
  }} whileInView={{
    opacity: 1,
    x: 0,
    y: 0,
    rotateY: 0
  }} viewport={{
    once: true
  }} transition={{
    delay: delay * 0.15,
    duration: 0.8,
    ease: "easeOut"
  }} whileHover={{
    scale: 1.03,
    y: -5,
    transition: {
      duration: 0.3
    }
  }} className="glass-card rounded-3xl p-8 relative group overflow-hidden">
      {/* Animated gradient background on hover */}
      <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Quote Icon with animation */}
      <motion.div className="absolute top-6 right-6 text-primary/20" animate={{
      rotate: [0, 5, -5, 0],
      scale: [1, 1.1, 1]
    }} transition={{
      duration: 4,
      repeat: Infinity,
      repeatDelay: 2
    }}>
        <Quote className="w-12 h-12" />
      </motion.div>
      
      {/* Testimonial Text */}
      <motion.p className="text-foreground/90 text-lg mb-6 leading-relaxed relative z-10" initial={{
      opacity: 0
    }} whileInView={{
      opacity: 1
    }} viewport={{
      once: true
    }} transition={{
      delay: delay * 0.15 + 0.2
    }}>
        "{text}"
      </motion.p>
      
      {/* Author */}
      <motion.div className="flex items-center gap-4 relative z-10" initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true
    }} transition={{
      delay: delay * 0.15 + 0.4
    }}>
        <motion.div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center" whileHover={{
        scale: 1.1,
        rotate: 360
      }} transition={{
        duration: 0.5
      }}>
          <span className="text-primary font-bold text-lg">{author.charAt(0)}</span>
        </motion.div>
        <div>
          <div className="font-semibold text-foreground">{author}</div>
          <div className="text-sm text-muted-foreground">{role}</div>
        </div>
      </motion.div>
    </motion.div>;
};
const TestimonialsSection = () => {
  const {
    t
  } = useLanguage();
  const testimonials = [{
    text: t('testimonial.1.text'),
    author: t('testimonial.1.author'),
    role: t('testimonial.1.role'),
    delay: 1
  }, {
    text: t('testimonial.2.text'),
    author: t('testimonial.2.author'),
    role: t('testimonial.2.role'),
    delay: 2
  }, {
    text: t('testimonial.3.text'),
    author: t('testimonial.3.author'),
    role: t('testimonial.3.role'),
    delay: 3
  }];
  return <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Floating background elements */}
      <FloatingElements count={4} />
      
      {/* Top divider */}
      
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center mb-16">
          <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }}>
            <span className="text-foreground">{t('testimonials.title1')}</span>{' '}
            <span className="text-primary">{t('testimonials.title2')}</span>
          </motion.h2>
          <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }}>
            {t('testimonials.subtitle')}
          </motion.p>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => <TestimonialCard key={index} {...testimonial} index={index} />)}
        </div>
      </div>
      
      {/* Bottom divider */}
      <div className="section-divider mt-16" />
    </section>;
};
export default TestimonialsSection;