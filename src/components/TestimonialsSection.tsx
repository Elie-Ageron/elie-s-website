import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface TestimonialCardProps {
  text: string;
  author: string;
  role: string;
  delay: number;
}

const TestimonialCard = ({ text, author, role, delay }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay * 0.1, duration: 0.6 }}
      className="glass-card rounded-3xl p-8 relative"
    >
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 text-primary/20">
        <Quote className="w-12 h-12" />
      </div>
      
      {/* Testimonial Text */}
      <p className="text-foreground/90 text-lg mb-6 leading-relaxed relative z-10">
        "{text}"
      </p>
      
      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
          <span className="text-primary font-bold text-lg">{author.charAt(0)}</span>
        </div>
        <div>
          <div className="font-semibold text-foreground">{author}</div>
          <div className="text-sm text-muted-foreground">{role}</div>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      text: t('testimonial.1.text'),
      author: t('testimonial.1.author'),
      role: t('testimonial.1.role'),
      delay: 1,
    },
    {
      text: t('testimonial.2.text'),
      author: t('testimonial.2.author'),
      role: t('testimonial.2.role'),
      delay: 2,
    },
    {
      text: t('testimonial.3.text'),
      author: t('testimonial.3.author'),
      role: t('testimonial.3.role'),
      delay: 3,
    },
  ];

  return (
    <section id="testimonials" className="py-24 relative">
      {/* Top divider */}
      <div className="section-divider mb-16" />
      
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
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
      
      {/* Bottom divider */}
      <div className="section-divider mt-16" />
    </section>
  );
};

export default TestimonialsSection;
