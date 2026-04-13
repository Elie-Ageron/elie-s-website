import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCalendly } from '@/contexts/CalendlyContext';
import eliePortrait from '@/assets/elie-ageron-portrait.webp';

const PersonalIntroSection = () => {
  const { language } = useLanguage();
  const { openCalendly } = useCalendly();

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
                alt="Elie Ageron - Web Designer & Conversion Expert spécialisé en sites haute conversion à Annecy, Haute-Savoie"
                className="relative rounded-xl shadow-xl w-full object-cover aspect-[4/5]"
                width={280}
                height={350}
                loading="lazy"
                decoding="async"
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
                {language === 'fr' ? 'Un projet à la fois.' : 'One project at a time.'}
              </span>
              <br />
              <span className="text-primary">
                {language === 'fr' ? 'Le vôtre.' : 'Yours.'}
              </span>
            </h2>

            <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
              {language === 'fr'
                ? 'Je suis Elie. Je ne jongle pas entre trente clients. Quand on travaille ensemble, votre projet reçoit toute mon attention, du brief à la mise en ligne. Un interlocuteur unique, une livraison en 7 à 14 jours, et un site conçu pour convertir, pas juste pour exister.'
                : "I'm Elie. I don't juggle thirty clients at once. When we work together, your project gets my full focus, from brief to launch. One point of contact, delivered in 7 to 14 days, built to convert, not just to exist."}
            </p>

            <div className="hidden md:block">
              <Button 
                variant="hero" 
                size="lg" 
                className="group min-h-[52px] active:scale-[0.98] transition-transform"
                onClick={openCalendly}
              >
                <span className="flex items-center gap-2">
                  {language === 'fr' ? 'Prendre contact' : "Get in touch"}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </span>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* CTA - Mobile only, after photo */}
        <div className="md:hidden flex justify-center mt-6">
          <Button 
            variant="hero" 
            size="lg" 
            className="group min-h-[52px] active:scale-[0.98] transition-transform"
            onClick={openCalendly}
          >
            <span className="flex items-center gap-2">
              {language === 'fr' ? 'Prendre contact' : "Get in touch"}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PersonalIntroSection;
