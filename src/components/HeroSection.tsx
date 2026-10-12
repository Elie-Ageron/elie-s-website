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
import logoIsabelle from '@/assets/logo-isabelle.webp';
import logoInevolve from '@/assets/logo-inevolve.webp';

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
// six vrais clients, c'est la seule preuve au-dessus de la ligne de
// flottaison, elle a le droit d'etre nette.
//
// Les deux derniers sont les comptes reseaux geres, ajoutes le 10 octobre
// 2026 a la demande d'Elie. Ils sont plus hauts que les quatre premiers, et
// c'est voulu : un monogramme plein tient a 32 px, un dessin au trait (l'arbre
// d'Isabelle, la bougie d'Inevolve) y devient une tache. La hauteur compense
// la graisse, pour que les six pesent pareil a l'oeil.
const CLIENT_LOGOS = [
  { src: logoNaura, name: 'Naura Conseils', flat: false, size: 'h-7 sm:h-8' },
  { src: logoMywebglory, name: 'MyWebGlory', flat: false, size: 'h-7 sm:h-8' },
  // Dessine en sombre sur transparent : sans `brightness-0` il disparait.
  { src: logoVmProducers, name: 'VM Producers', flat: true, size: 'h-7 sm:h-8' },
  { src: logoSolarFusion, name: 'Solar Fusion', flat: false, size: 'h-7 sm:h-8' },
  { src: logoIsabelle, name: 'Isabelle Ageron-Vicat', flat: false, size: 'h-10 sm:h-11' },
  { src: logoInevolve, name: 'Inevolve Intuition', flat: false, size: 'h-8 sm:h-9' },
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
        <div className="hidden lg:block absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/[0.07] blur-[120px] sm:h-96 sm:w-96" />
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
              className="w-full px-8 text-base transition-transform active:scale-[0.98] sm:w-auto"
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
              className="inline-flex min-h-[44px] items-center text-base text-muted-foreground underline-offset-[6px] transition-colors hover:text-foreground hover:underline"
              aria-label={language === 'fr' ? 'Réserver un appel gratuit avec Elie Ageron' : 'Book a free call with Elie Ageron'}
            >
              {t('hero.cta.call')}
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.32, duration: 0.5 }}
            className="mt-6 text-sm text-muted-foreground"
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
          {/* 🔴 Une seule ligne qui defile, sous `lg`. Elie, le 12 octobre
              2026 : *« les logos, tu peux mettre une seule ligne qui defile,
              plutot que six logos comme ca en une case. Comme ca quand on en
              ajoute, on ajoute juste a la ligne et c'est carre. »* La grille de
              trois colonnes faisait un bloc de deux rangees, et chaque logo
              ajoute la redecoupait.

              La liste est rendue deux fois et la piste recule de la moitie de
              sa largeur : le second exemplaire prend exactement la place du
              premier, la boucle ne saute pas. L'espace est un `pr` sur chaque
              logo et non un `gap`, sinon les deux moities n'ont pas la meme
              largeur et la boucle saute d'un ecart.

              ⚠️ Un contenu qui bouge plus de cinq secondes doit pouvoir
              s'arreter (WCAG 2.2.2) : la bande s'arrete sous le doigt ou la
              souris, et ne bouge pas du tout pour qui a coupe les animations
              de son telephone. Dans ce cas le double est masque et la ligne
              defile au doigt.

              Sur grand ecran, rien ne change : les six tiennent sur une
              ligne. */}
          <div className="-mx-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden motion-safe:overflow-hidden motion-safe:[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] sm:-mx-6 lg:mx-0 lg:overflow-visible lg:[mask-image:none] motion-safe:lg:[mask-image:none]">
            <ul className="flex w-max items-center px-4 motion-safe:animate-defile motion-safe:px-0 hover:[animation-play-state:paused] active:[animation-play-state:paused] lg:w-auto lg:flex-wrap lg:justify-center lg:gap-x-14 lg:gap-y-6 lg:px-0 motion-safe:lg:animate-none">
              {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => {
                const double = i >= CLIENT_LOGOS.length;
                return (
                  <li
                    key={`${logo.name}-${i}`}
                    aria-hidden={double || undefined}
                    className={`shrink-0 pr-12 lg:pr-0 ${double ? 'motion-reduce:hidden lg:hidden' : ''}`}
                  >
                    <img
                      src={logo.src}
                      alt={double ? '' : `Logo ${logo.name}, client d'Elie Ageron`}
                      width={120}
                      height={28}
                      className={`w-auto object-contain ${logo.size} ${logo.flat ? 'brightness-0' : ''}`}
                      loading="eager"
                      decoding="async"
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
