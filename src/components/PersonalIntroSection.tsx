import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import eliePortrait from '@/assets/elie-ageron-portrait.webp';

const PersonalIntroSection = () => {
  const { language } = useLanguage();

  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden" aria-labelledby="intro-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-10 items-center">
          {/* Image - Left side - smaller on mobile, balanced on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 md:order-1 md:col-span-2"
          >
            <div className="relative mx-auto md:mx-0 max-w-[180px] sm:max-w-[220px] md:max-w-[280px]">
              {/* Decorative elements - scaled down */}
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/15 to-transparent rounded-2xl blur-lg" aria-hidden="true" />
              <div className="absolute -top-1.5 -left-1.5 w-12 h-12 sm:w-16 sm:h-16 border-t-2 border-l-2 border-primary/40 rounded-tl-xl" aria-hidden="true" />
              <div className="absolute -bottom-1.5 -right-1.5 w-12 h-12 sm:w-16 sm:h-16 border-b-2 border-r-2 border-primary/40 rounded-br-xl" aria-hidden="true" />
              
              {/* Image - optimized loading */}
              <img
                src={eliePortrait}
                alt="Elie Ageron - Web Designer & Conversion Expert"
                className="relative rounded-xl shadow-xl w-full object-cover aspect-[4/5]"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </motion.div>

          {/* Content - Right side - more space */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 md:order-2 md:col-span-3 text-center md:text-left"
          >
            <h2 
              id="intro-heading" 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 leading-tight"
            >
              <span className="text-foreground">
                {language === 'fr' ? 'Laissez-moi' : 'Let me'}
              </span>
              <br />
              <span className="text-primary">
                {language === 'fr' ? 'construire votre succès' : 'build your success'}
              </span>
            </h2>
            
            <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              {language === 'fr' 
                ? 'Je crée des sites web qui transforment vos visiteurs en clients. Design premium, livraison rapide, résultats garantis.'
                : 'I create websites that turn your visitors into clients. Premium design, fast delivery, guaranteed results.'}
            </p>

            <Button 
              variant="hero" 
              size="lg" 
              className="group min-h-[52px] active:scale-[0.98] transition-transform"
              asChild
            >
              <a 
                href="https://calendly.com/elie-ageron/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                {language === 'fr' ? 'Discutons de votre projet' : 'Let\'s discuss your project'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PersonalIntroSection;
