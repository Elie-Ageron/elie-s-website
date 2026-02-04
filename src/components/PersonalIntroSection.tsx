import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import eliePortrait from '@/assets/elie-ageron-portrait.webp';

const PersonalIntroSection = () => {
  const { language } = useLanguage();

  return (
    <section className="py-16 sm:py-20 md:py-24 relative overflow-hidden" aria-labelledby="intro-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image - Left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 md:order-1"
          >
            <div className="relative mx-auto md:mx-0 max-w-sm">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-xl" aria-hidden="true" />
              <div className="absolute -top-2 -left-2 w-20 h-20 border-t-2 border-l-2 border-primary/40 rounded-tl-2xl" aria-hidden="true" />
              <div className="absolute -bottom-2 -right-2 w-20 h-20 border-b-2 border-r-2 border-primary/40 rounded-br-2xl" aria-hidden="true" />
              
              {/* Image - optimized loading */}
              <img
                src={eliePortrait}
                alt="Elie Ageron - Web Designer & Conversion Expert"
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </motion.div>

          {/* Content - Right side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 md:order-2 text-center md:text-left"
          >
            <h2 
              id="intro-heading" 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
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
