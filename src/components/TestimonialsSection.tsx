import { useState } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ScrollReveal from './animations/ScrollReveal';
import FloatingElements from './animations/FloatingElements';

import logoVmProducers from '@/assets/logo vm producers.png';
import logoSolarFusion from '@/assets/logo solar fusion.png';
import logoMywebglory from '@/assets/logo mwg.png';
import logoMyDrop from '@/assets/mydrop logo (1).png';

const TestimonialsSection = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragDirection, setDragDirection] = useState<number>(0);

  const testimonials = [
    {
      text: t('testimonial.4.text'),
      author: t('testimonial.4.author'),
      founder: t('testimonial.4.founder'),
      role: t('testimonial.4.role'),
      date: t('testimonial.4.date'),
      rating: 5,
      image: logoMyDrop,
      isCompany: true,
      whiteLogo: false,
    },
    {
      text: t('testimonial.3.text'),
      author: t('testimonial.3.author'),
      founder: t('testimonial.3.founder'),
      role: t('testimonial.3.role'),
      date: t('testimonial.3.date'),
      rating: 5,
      image: logoMywebglory,
      isCompany: true,
      whiteLogo: false,
    },
    {
      text: t('testimonial.1.text'),
      author: t('testimonial.1.author'),
      founder: t('testimonial.1.founder'),
      role: t('testimonial.1.role'),
      date: t('testimonial.1.date'),
      rating: 5,
      image: logoVmProducers,
      isCompany: true,
      whiteLogo: true,
    },
    {
      text: t('testimonial.2.text'),
      author: t('testimonial.2.author'),
      founder: t('testimonial.2.founder'),
      role: t('testimonial.2.role'),
      date: t('testimonial.2.date'),
      rating: 5,
      image: logoSolarFusion,
      isCompany: true,
      whiteLogo: false,
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
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
        <div className="relative sm:px-16">
          {/* Navigation Arrows - Hidden on mobile */}
          <button
            onClick={prevTestimonial}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-secondary/80 backdrop-blur-sm border border-border/50 items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-secondary/80 backdrop-blur-sm border border-border/50 items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group"
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
              <p className="text-foreground/90 text-base sm:text-xl mb-8 leading-relaxed relative z-10">
                "{currentTestimonial.text}"
              </p>

              {/* Author Section */}
              <div className="flex items-center gap-4 relative z-10">
                {currentTestimonial.isCompany ? (
                  <img
                    src={currentTestimonial.image}
                    alt={`Logo ${currentTestimonial.author}`}
                    className={`h-12 w-auto object-contain shrink-0 ${
                      currentTestimonial.whiteLogo ? 'brightness-0' : ''
                    }`}
                    loading="eager"
                    decoding="sync"
                  />
                ) : (
                  <img
                    src={currentTestimonial.image}
                    alt={`Photo de ${currentTestimonial.author}, client satisfait Elie Ageron Web Design - ${currentTestimonial.role}`}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
                    width={64}
                    height={64}
                    loading="lazy"
                    decoding="async"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-foreground text-base sm:text-lg truncate">
                    {currentTestimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground truncate">
                    {currentTestimonial.founder}
                  </div>
                  <div className="hidden sm:block text-sm text-muted-foreground/70 mt-0.5">
                    {currentTestimonial.date}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator - Touch optimized with 44x44 min touch target */}
          <div className="flex justify-center gap-1 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <span className={`block rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-8 h-3' 
                    : 'bg-muted-foreground/30 w-3 h-3 hover:bg-muted-foreground/50'
                }`} />
              </button>
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