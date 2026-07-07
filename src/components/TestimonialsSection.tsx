import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

import logoVmProducers from '@/assets/logo vm producers.png';
import logoSolarFusion from '@/assets/logo solar fusion.png';
import logoMywebglory from '@/assets/logo mwg.png';
import logoMyDrop from '@/assets/mydrop logo (1).png';
import logoNaura from '@/assets/logo-naura.webp';

// Témoignages éditoriaux : une citation mise en avant en grand,
// les autres en colonnes — tout est visible, aucune carte.
const TestimonialsSection = () => {
  const { t, language } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  // Avis vedette : Nora / Naura Conseils (Google, juillet 2026) — le plus récent et le plus complet.
  // Extrait par défaut, texte complet dépliable pour ne pas noyer la page.
  const featured = {
    excerpt: t('testimonial.5.excerpt'),
    text: t('testimonial.5.text'),
    founder: t('testimonial.5.founder'),
    role: t('testimonial.5.role'),
    date: t('testimonial.5.date'),
    image: logoNaura,
  };

  const testimonials = [
    {
      text: t('testimonial.3.text'),
      founder: t('testimonial.3.founder'),
      role: t('testimonial.3.role'),
      date: t('testimonial.3.date'),
      image: logoMywebglory,
      whiteLogo: false,
    },
    {
      text: t('testimonial.4.text'),
      founder: t('testimonial.4.founder'),
      role: t('testimonial.4.role'),
      date: t('testimonial.4.date'),
      image: logoMyDrop,
      whiteLogo: false,
    },
    {
      text: t('testimonial.1.text'),
      founder: t('testimonial.1.founder'),
      role: t('testimonial.1.role'),
      date: t('testimonial.1.date'),
      image: logoVmProducers,
      whiteLogo: true,
    },
    {
      text: t('testimonial.2.text'),
      founder: t('testimonial.2.founder'),
      role: t('testimonial.2.role'),
      date: t('testimonial.2.date'),
      image: logoSolarFusion,
      whiteLogo: false,
    },
  ];

  return (
    <section id="testimonials" className="py-20 sm:py-28 relative overflow-hidden" aria-labelledby="testimonials-heading">
      {/* Soft brand accent behind the featured quote */}
      <div
        aria-hidden="true"
        className="absolute top-32 left-[-12%] w-[28rem] h-[28rem] bg-primary/[0.07] rounded-full blur-[110px] pointer-events-none"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16 max-w-2xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2.5 text-sm font-medium text-primary mb-4">
            <span className="flex gap-0.5" aria-label="5 sur 5 étoiles">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" aria-hidden="true" />
              ))}
            </span>
            {language === 'fr' ? 'Avis clients · 5/5' : 'Client reviews · 5/5'}
          </span>
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl md:text-[2.75rem] font-medium leading-[1.1] text-balance">
            <span className="text-foreground">{t('testimonials.title1')}</span>{' '}
            <span className="text-primary">{t('testimonials.title2')}</span>
          </h2>
        </motion.div>

        {/* Featured quote — big, with an oversized quotation mark behind */}
        <motion.figure
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto text-center"
        >
          <span
            aria-hidden="true"
            className="absolute -top-12 sm:-top-16 -left-3 sm:-left-10 text-[7rem] sm:text-[10rem] leading-none font-bold text-primary/[0.08] select-none pointer-events-none"
          >
            «
          </span>
          <blockquote className="relative">
            {expanded ? (
              <div className="space-y-4 text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-foreground text-balance">
                {featured.text.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            ) : (
              <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-foreground text-balance">
                {featured.excerpt}
              </p>
            )}
            <AnimatePresence initial={false}>
              {!expanded && (
                <motion.button
                  key="more"
                  exit={{ opacity: 0 }}
                  onClick={() => setExpanded(true)}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline underline-offset-4"
                >
                  {language === 'fr' ? "Lire l'avis complet" : 'Read the full review'}
                  <ChevronDown className="w-4 h-4" aria-hidden="true" />
                </motion.button>
              )}
            </AnimatePresence>
          </blockquote>
          <figcaption className="mt-7 sm:mt-9 flex items-center justify-center gap-3.5">
            <img
              src={featured.image}
              alt={`Logo ${featured.role}`}
              className="h-11 w-11 rounded-xl object-cover shrink-0 shadow-sm"
              loading="lazy"
              decoding="async"
            />
            <div className="text-left">
              <p className="font-semibold text-foreground leading-tight">{featured.founder}</p>
              <p className="text-sm text-muted-foreground">
                {featured.role} · {featured.date}
              </p>
            </div>
          </figcaption>
        </motion.figure>

        {/* Four more voices — 2×2 grid, thin rules, no boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 sm:gap-y-10 mt-14 sm:mt-20">
          {testimonials.map((item, index) => (
            <motion.figure
              key={item.founder + item.role}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="border-t border-border/60 pt-6 flex flex-col"
            >
              <blockquote className="flex-1">
                <p className="text-[0.95rem] text-foreground/85 leading-relaxed">
                  «&nbsp;{item.text}&nbsp;»
                </p>
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <img
                  src={item.image}
                  alt={`Logo ${item.role}`}
                  className={`h-6 w-auto object-contain shrink-0 ${item.whiteLogo ? 'brightness-0' : ''}`}
                  loading="lazy"
                  decoding="async"
                />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground leading-tight truncate">{item.founder}</p>
                  <p className="text-xs text-muted-foreground truncate">
                    {item.role} · {item.date}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Quiet CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-12 sm:mt-14 text-sm text-muted-foreground text-center"
        >
          {language === 'fr' ? 'Envie de voir les sites derrière ces avis ? ' : 'Want to see the sites behind these reviews? '}
          <Link
            to="/portfolio"
            className="text-primary font-medium hover:underline underline-offset-4 inline-flex items-center gap-1"
          >
            {t('testimonials.cta')}
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </motion.p>
      </div>
    </section>
  );
};

export default TestimonialsSection;
