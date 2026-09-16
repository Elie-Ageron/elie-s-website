import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCalendly } from '@/contexts/CalendlyContext';
import { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

import logoVmProducers from '@/assets/logo-vm-producers.webp';
import logoSolarFusion from '@/assets/logo-solar-fusion.webp';
import logoMywebglory from '@/assets/logo-mwg.webp';
import logoNaura from '@/assets/logo-naura.webp';

/**
 * Le hero.
 *
 * Direction : sobre et aere. Un seul accent, le rose de la marque. Beaucoup de
 * vide autour du titre, peu d'elements, aucun decor.
 *
 * Trois choses ont ete essayees puis retirees. Ne pas les remettre :
 *
 * 1. Un fond sombre. Elie n'en veut pas, et un fond noir sous une marque dont
 *    toute l'identite est claire ne tient pas debout.
 * 2. Un accent jaune. Ce n'est pas une couleur de la marque.
 * 3. Un bandeau de chiffres (vues, abonnes, note). C'est le patron
 *    « gros chiffre, petit label, stats de soutien », un cliche de page SaaS.
 *    Elie ne veut pas vendre sur des chiffres de performance : un resultat
 *    client n'est pas une promesse tenable. La preuve vit dans le portfolio et
 *    dans les temoignages, pas au-dessus de la ligne de flottaison.
 */

// Logos clients reels, affiches en pleine opacite.
// Ils etaient a 55 % « pour ne pas concurrencer le titre » : a l'ecran on ne
// les lisait plus, et un logo qu'on ne lit pas ne rassure personne. Ce sont
// quatre vrais clients, c'est la seule preuve au-dessus de la ligne de
// flottaison, elle a le droit d'etre nette.
const CLIENT_LOGOS = [
  { src: logoNaura, name: 'Naura Conseils', flat: false },
  { src: logoMywebglory, name: 'MyWebGlory', flat: false },
  // Dessine en sombre sur transparent : sans `brightness-0` il disparait.
  { src: logoVmProducers, name: 'VM Producers', flat: true },
  { src: logoSolarFusion, name: 'Solar Fusion', flat: false },
];

/* 🔴 Une scene WebGL vivait ici : Three.js et react-three-fiber, 776 ko bruts
   et 208 ko compresses, avec une boucle de rendu permanente et un ecouteur de
   souris sur la fenetre. Elle dessinait des points roses, et trois pastilles
   flottantes qui annoncaient « SEO », « Design » et « Web », c'est-a-dire le
   positionnement d'avant le pivot, dans une police qui n'est pas celle du site.
   `HeroDots` rend les memes points en CSS, pour zero kilo-octet. */
import HeroDots from '@/components/animations/HeroDots';


const HeroSection = () => {
  const { t, language } = useLanguage();
  const { openCalendly } = useCalendly();
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);
  const [show3D, setShow3D] = useState(false);
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Delay 3D scene to prioritize text content (LCP) - desktop only.
  useEffect(() => {
    if (!mounted) return;
    if (!isMobile && !prefersReducedMotion) {
      const timer = setTimeout(() => setShow3D(true), 800);
      return () => clearTimeout(timer);
    }
    setShow3D(false);
  }, [isMobile, mounted]);

  return (
    <section
      className="relative overflow-hidden px-4 pb-16 pt-8 sm:px-6 sm:pb-28 sm:pt-24"
      aria-labelledby="hero-heading"
    >
      {mounted && show3D && <HeroDots />}

      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden="true">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/[0.07] blur-[120px] sm:h-96 sm:w-96" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* `hero-title` porte la taille fluide, la graisse et l'interlettrage
              pour les onze heros du site. Ce titre les ecrivait a la main et
              servait de reference aux autres : la classe reprend ses valeurs,
              au poids pres. Voir la note de `index.css`. */}
          <h1 id="hero-heading" className="hero-title text-foreground">
            {t('hero.headline1')}
            <br />
            <span className="text-primary">{t('hero.headline2')}</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:mt-10 sm:text-lg"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:mt-12 sm:flex-row sm:gap-6"
          >
            <Button
              variant="hero"
              size="lg"
              className="w-full px-8 text-sm transition-transform active:scale-[0.98] sm:w-auto sm:text-base"
              asChild
            >
              <Link to="/audit-gratuit">
                {t('hero.cta.assessment')}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <button
              type="button"
              onClick={openCalendly}
              className="inline-flex min-h-[44px] items-center text-sm text-muted-foreground underline-offset-[6px] transition-colors hover:text-foreground hover:underline sm:text-base"
              aria-label={language === 'fr' ? 'Réserver un appel gratuit avec Elie Ageron' : 'Book a free call with Elie Ageron'}
            >
              {t('hero.cta.call')}
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.32, duration: 0.5 }}
            className="mt-6 text-xs text-muted-foreground sm:text-sm"
          >
            {t('hero.friction')}
          </motion.p>
        </motion.header>

        {/* Preuve sociale discrete, loin sous le titre. */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-20 sm:mt-24"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
            {CLIENT_LOGOS.map((logo) => (
              <img
                key={logo.name}
                src={logo.src}
                alt={`Logo ${logo.name}, client d'Elie Ageron`}
                width={120}
                height={28}
                className={`h-7 w-auto object-contain sm:h-8 ${logo.flat ? 'brightness-0' : ''}`}
                loading="eager"
                decoding="async"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
