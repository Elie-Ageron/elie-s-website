import { useState } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ScrollReveal from './animations/ScrollReveal';
import FloatingElements from './animations/FloatingElements';

import testimonialMarc from '@/assets/testimonial-marc.jpg';
import testimonialSophie from '@/assets/testimonial-sophie.jpg';
import testimonialThomas from '@/assets/testimonial-thomas.jpg';

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragDirection, setDragDirection] = useState<number>(0);

  const testimonials = [
    {
      text: t('testimonial.1.text'),
      author: t('testimonial.1.author'),
      role: t('testimonial.1.role'),
      date: t('testimonial.1.date'),
      rating: 5,
      image: testimonialMarc,
    },
    {
      text: t('testimonial.2.text'),
      author: t('testimonial.2.author'),
      role: t('testimonial.2.role'),
      date: t('testimonial.2.date'),
      rating: 5,
      image: testimonialSophie,
    },
    {
      text: t('testimonial.3.text'),
      author: t('testimonial.3.author'),
      role: t('testimonial.3.role'),
      date: t('testimonial.3.date'),
      rating: 5,
      image: testimonialThomas,
    },
  ];

  const nextTestimonial = () => {
    setDragDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDragDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      prevTestimonial();
    } else if (info.offset.x < -threshold) {
      nextTestimonial();
    }
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Floating background elements */}
      <FloatingElements count={4} />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-foreground">{t('testimonials.title1')}</span>{' '}
            <span className="text-primary">{t('testimonials.title2')}</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t('testimonials.subtitle')}
          </motion.p>
        </ScrollReveal>

        {/* Testimonial Carousel */}
        <div className="relative">
          {/* Navigation Arrows - Hidden on mobile */}
          <button
            onClick={prevTestimonial}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 z-20 w-12 h-12 rounded-full bg-secondary/80 backdrop-blur-sm border border-border/50 items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 z-20 w-12 h-12 rounded-full bg-secondary/80 backdrop-blur-sm border border-border/50 items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>

          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: dragDirection >= 0 ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dragDirection >= 0 ? -30 : 30 }}
              transition={{ 
                duration: 0.12, 
                ease: "easeOut"
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
              className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/20">
                <Quote className="w-16 h-16" />
              </div>

              {/* Stars Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < currentTestimonial.rating 
                        ? 'text-yellow-400 fill-yellow-400' 
                        : 'text-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground/90 text-lg sm:text-xl mb-8 leading-relaxed relative z-10">
                "{currentTestimonial.text}"
              </p>

              {/* Author Section */}
              <div className="flex items-center gap-4 relative z-10">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.author}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
                />
                <div className="flex-1">
                  <div className="font-semibold text-foreground text-lg">
                    {currentTestimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {currentTestimonial.role}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground/70">
                  {currentTestimonial.date}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mt-10"
          >
            <Button asChild variant="neonOutline" size="lg" className="group">
              <Link to="/portfolio" className="flex items-center gap-2">
                {t('testimonials.cta')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom divider */}
      <div className="section-divider mt-16" />
    </section>
  );
};

export default TestimonialsSection;