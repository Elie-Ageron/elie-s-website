import { useState, useRef, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Play, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

import logoVmProducers from '@/assets/logo vm producers.png';
import logoSolarFusion from '@/assets/logo solar fusion.png';
import logoMywebglory from '@/assets/logo mwg.png';
import logoMyDrop from '@/assets/mydrop logo (1).png';
import logoNaura from '@/assets/logo-naura.webp';
import noraVideoMp4 from '@/assets/nora-testimonial.mp4';
import noraVideoWebm from '@/assets/nora-testimonial.webm';
import noraVideoPoster from '@/assets/nora-testimonial-poster.jpg';

// Wrap the key phrase of a quote in the brand color, language-safe.
const withHighlight = (text: string, phrase: string): ReactNode => {
  if (!phrase || !text.includes(phrase)) return text;
  const [before, after] = text.split(phrase);
  return (
    <>
      {before}
      <span className="text-primary">{phrase}</span>
      {after}
    </>
  );
};

const easeOutQuint = [0.22, 1, 0.36, 1] as const;

// Official Google "G" mark, only shown on genuine Google reviews.
const GoogleG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false">
    <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
    <path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
    <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
  </svg>
);

const TestimonialsSection = () => {
  const { t, language } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});
  const toggleCard = (i: number) => setExpandedCards((prev) => ({ ...prev, [i]: !prev[i] }));
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Play from the click itself (user gesture) so the browser keeps the sound on.
  const handlePlay = () => {
    setPlaying(true);
    const v = videoRef.current;
    if (v) {
      v.muted = false;
      void v.play().catch(() => {});
    }
  };

  const scrollCards = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('[data-card]');
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.85;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  // Avis vedette : Nora / Naura Conseils (Google, juillet 2026), le plus récent et le plus complet.
  const featured = {
    spotlight: t('testimonial.5.spotlight'),
    highlight: t('testimonial.5.spotlightHighlight'),
    text: t('testimonial.5.text'),
    founder: t('testimonial.5.founder'),
    role: t('testimonial.5.role'),
    date: t('testimonial.5.date'),
    image: logoNaura,
  };

  // Nora en premier (avis Google vérifié), puis les autres.
  const cards: Array<{
    text: string;
    founder: string;
    role: string;
    date: string;
    image: string;
    whiteLogo: boolean;
    google?: boolean;
  }> = [
    {
      text: t('testimonial.5.excerpt'),
      founder: featured.founder,
      role: featured.role,
      date: featured.date,
      image: logoNaura,
      whiteLogo: false,
      google: true,
    },
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
    <section
      id="testimonials"
      className="py-24 sm:py-32 relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Atmosphere, soft brand light, no boxes */}
      <div
        aria-hidden="true"
        className="absolute top-24 left-[-14%] w-[32rem] h-[32rem] bg-primary/[0.06] rounded-full blur-[120px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-[-10%] w-[26rem] h-[26rem] bg-primary/[0.04] rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easeOutQuint }}
          className="mb-14 sm:mb-20 max-w-2xl"
        >
          <span className="inline-flex items-center gap-2.5 text-sm font-medium text-primary mb-4">
            <span className="flex gap-0.5" aria-label={language === 'fr' ? '5 sur 5 étoiles' : '5 out of 5 stars'}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" aria-hidden="true" />
              ))}
            </span>
            {language === 'fr' ? 'Avis clients · 5/5' : 'Client reviews · 5/5'}
          </span>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl md:text-[2.75rem] font-medium leading-[1.1] text-balance"
          >
            <span className="text-foreground">{t('testimonials.title1')}</span>{' '}
            <span className="text-primary">{t('testimonials.title2')}</span>
          </h2>
        </motion.div>

        {/* Featured, Nora : video + spotlight pull-quote */}
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: easeOutQuint }}
          className="grid lg:grid-cols-[1.4fr_1fr] gap-y-10 gap-x-12 lg:gap-x-16 items-center"
        >
          {/* Video */}
          <div className="relative aspect-[1616/1080] w-full rounded-2xl overflow-hidden bg-neutral-900 ring-1 ring-black/5 shadow-[0_30px_60px_-25px_hsl(340_65%_20%/0.35)]">
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover"
              poster={noraVideoPoster}
              controls={playing}
              playsInline
              preload="none"
            >
              <source src={noraVideoWebm} type="video/webm" />
              <source src={noraVideoMp4} type="video/mp4" />
            </video>
            {!playing && (
              <button
                type="button"
                onClick={handlePlay}
                className="group absolute inset-0 h-full w-full"
                aria-label={language === 'fr' ? 'Lire le témoignage vidéo de Nora' : "Play Nora's video testimonial"}
              >
                <span
                  className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent transition-colors group-hover:from-black/45"
                  aria-hidden="true"
                />
                <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                  <span className="flex h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem] items-center justify-center rounded-full bg-white/95 text-primary shadow-xl transition-transform duration-300 ease-out group-hover:scale-110">
                    <Play className="h-6 w-6 sm:h-7 sm:w-7 translate-x-0.5 fill-current" />
                  </span>
                </span>
                <span
                  className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-black/55 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm"
                  aria-hidden="true"
                >
                  {language === 'fr' ? 'Témoignage vidéo · 40 s' : 'Video testimonial · 40 s'}
                </span>
              </button>
            )}
          </div>

          {/* Spotlight words */}
          <figcaption className="relative">
            <span
              aria-hidden="true"
              className="block font-serif text-primary leading-[0.7] select-none text-[5.5rem] sm:text-[7rem] -mb-3 -ml-1"
            >
              &ldquo;
            </span>

            <blockquote>
              <AnimatePresence mode="wait" initial={false}>
                {expanded ? (
                  <motion.div
                    key="full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4 text-base sm:text-lg leading-relaxed text-foreground/85 text-pretty"
                  >
                    {featured.text.split('\n\n').map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </motion.div>
                ) : (
                  <motion.p
                    key="spotlight"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl sm:text-[1.75rem] lg:text-3xl font-medium leading-[1.32] text-foreground text-pretty"
                  >
                    {withHighlight(featured.spotlight, featured.highlight)}
                  </motion.p>
                )}
              </AnimatePresence>
            </blockquote>

            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
            >
              {expanded
                ? language === 'fr' ? "Réduire l'avis" : 'Show less'
                : language === 'fr' ? "Lire l'avis complet" : 'Read the full review'}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${expanded ? 'rotate-180' : 'group-hover:translate-y-0.5'}`}
                aria-hidden="true"
              />
            </button>

            <div className="mt-7 flex items-center gap-3 border-t border-border/60 pt-5">
              <img
                src={featured.image}
                alt={`Logo ${featured.role}`}
                className="h-10 w-10 rounded-lg object-cover shrink-0 shadow-sm ring-1 ring-black/5"
                loading="lazy"
                decoding="async"
              />
              <div>
                <p className="text-sm font-semibold text-foreground leading-tight">{featured.founder}</p>
                <p className="text-xs text-muted-foreground">
                  {featured.role} · {featured.date}
                </p>
              </div>
            </div>
          </figcaption>
        </motion.figure>

        {/* More voices, swipeable review cards */}
        <div className="mt-20 sm:mt-28">
          <div className="flex items-end justify-between gap-4 mb-6">
            <p className="text-lg sm:text-xl font-medium text-foreground">
              {language === 'fr' ? "Ils l'ont vécu avant vous" : 'They lived it before you'}
            </p>
            <div className="flex gap-2 shrink-0">
              <button
                type="button"
                onClick={() => scrollCards(-1)}
                aria-label={language === 'fr' ? 'Avis précédents' : 'Previous reviews'}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground/70 transition hover:text-primary hover:border-primary/40 active:scale-95"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => scrollCards(1)}
                aria-label={language === 'fr' ? 'Avis suivants' : 'Next reviews'}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground/70 transition hover:text-primary hover:border-primary/40 active:scale-95"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-4 px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {cards.map((item, i) => {
              const isLong = item.text.length > 120;
              const isOpen = expandedCards[i];
              return (
              <article
                key={item.founder + item.role}
                data-card
                className="snap-start shrink-0 w-[85%] sm:w-[calc(50%-12px)] flex flex-col rounded-3xl bg-card border border-border/60 p-6 sm:p-8 shadow-[0_18px_40px_-24px_hsl(340_45%_25%/0.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_50px_-24px_hsl(340_45%_25%/0.32)]"
              >
                <div className="flex items-center justify-between mb-5">
                  {item.google ? (
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80">
                      <GoogleG className="h-[18px] w-[18px]" />
                      Google
                    </span>
                  ) : (
                    <Quote className="w-8 h-8 text-primary/20 fill-primary/10 -scale-x-100" aria-hidden="true" />
                  )}
                  <div className="flex gap-0.5" aria-label={language === 'fr' ? '5 sur 5 étoiles' : '5 out of 5 stars'}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" aria-hidden="true" />
                    ))}
                  </div>
                </div>

                <blockquote className="flex-1">
                  <p
                    className={`text-[1.05rem] text-foreground/90 leading-relaxed text-pretty ${
                      isLong && !isOpen ? 'line-clamp-4 sm:line-clamp-none' : ''
                    }`}
                  >
                    {item.text}
                  </p>
                  {isLong && (
                    <button
                      type="button"
                      onClick={() => toggleCard(i)}
                      className="sm:hidden mt-2 text-sm font-semibold text-primary"
                    >
                      {isOpen
                        ? language === 'fr' ? 'Voir moins' : 'Show less'
                        : language === 'fr' ? 'Voir plus' : 'Show more'}
                    </button>
                  )}
                </blockquote>

                <figcaption className="mt-7 pt-6 border-t border-border/60 flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={`Logo ${item.role}`}
                      className={`max-h-7 max-w-[1.75rem] w-auto object-contain ${item.whiteLogo ? 'brightness-0' : ''}`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground leading-tight truncate">{item.founder}</p>
                    <p className="text-xs text-muted-foreground truncate">
                      {item.role} · {item.date}
                    </p>
                  </div>
                </figcaption>
              </article>
              );
            })}
          </div>
        </div>

        {/* Quiet CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-16 sm:mt-20 text-sm text-muted-foreground text-center"
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
