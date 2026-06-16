import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useSpring,
  useReducedMotion,
} from 'framer-motion';
import { Star, Plus, Unplug, ImageOff, Search, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Cinematic, scroll-driven "morph" showcase for /services.
 * A forgotten, broken site is rebuilt — live — into a vibrant, working one.
 * The reveal is scrubbed by scroll: a scanner sweeps down and the new site
 * materialises beneath its edge (clip-path wipe). The stage is pinned (sticky)
 * so the whole transformation plays out slowly as the visitor scrolls.
 *
 * Respects prefers-reduced-motion (renders the final living state, no scrub).
 * Markup only · transform / opacity / clip-path — no layout shift.
 */

/* ---- The two sites share the exact same structure, so the reveal reads as
   the SAME site being rebuilt, not two different ones. ---- */

const DeadSite = ({ t }: { t: (fr: string, en: string) => string }) => (
  <div className="absolute inset-0 bg-stone-100 grayscale flex flex-col">
    {/* nav */}
    <div className="flex items-center gap-2 px-4 h-9 border-b border-stone-300 bg-stone-200/70 shrink-0">
      <span className="w-4 h-4 rounded bg-stone-300" />
      <span className="ml-1 h-1.5 w-10 rounded-full bg-stone-300" />
      <span className="h-1.5 w-8 rounded-full bg-stone-300" />
      <span className="h-1.5 w-8 rounded-full bg-stone-300" />
      <span className="ml-auto h-4 w-12 rounded bg-stone-300" />
    </div>
    {/* broken hero */}
    <div className="h-[100px] flex flex-col items-center justify-center text-center gap-1.5 shrink-0">
      <div className="w-11 h-11 rounded-2xl bg-stone-200 border border-stone-300 flex items-center justify-center">
        <Unplug className="w-5 h-5 text-stone-400" />
      </div>
      <p className="text-2xl font-extrabold text-stone-400 leading-none tracking-tight">404</p>
      <p className="text-[10px] font-semibold text-stone-400">{t('Site en panne, oublié', 'Broken, forgotten site')}</p>
    </div>
    {/* broken image row */}
    <div className="h-[72px] px-4 grid grid-cols-3 gap-2.5 items-center shrink-0">
      {[0, 1, 2].map((i) => (
        <div key={i} className="h-14 rounded-md bg-stone-200 border border-dashed border-stone-300 flex items-center justify-center">
          <ImageOff className="w-4 h-4 text-stone-300" />
        </div>
      ))}
    </div>
    {/* dead stats band */}
    <div className="h-12 mx-4 rounded-lg bg-stone-200/70 border border-stone-300 grid grid-cols-3 items-center px-3 shrink-0">
      {[0, 1, 2].map((i) => (
        <span key={i} className="h-1.5 w-10 rounded-full bg-stone-300 mx-auto" />
      ))}
    </div>
    {/* dead testimonial */}
    <div className="h-20 mx-4 mt-2 rounded-lg bg-stone-200/60 border border-stone-300 p-3 flex items-center gap-3 shrink-0">
      <span className="w-9 h-9 rounded-full bg-stone-300 shrink-0" />
      <div className="flex-1 space-y-1.5">
        <span className="block h-1.5 rounded-full bg-stone-300 w-full" />
        <span className="block h-1.5 rounded-full bg-stone-300 w-2/3" />
      </div>
    </div>
    {/* dead cta */}
    <div className="h-[52px] mx-4 my-2 rounded-lg bg-stone-200/70 border border-stone-300 flex items-center justify-center shrink-0">
      <span className="h-5 w-24 rounded bg-stone-300" />
    </div>
  </div>
);

const LiveSite = ({ t }: { t: (fr: string, en: string) => string }) => (
  <div className="absolute inset-0 bg-card flex flex-col">
    {/* nav */}
    <div className="flex items-center gap-2 px-4 h-9 border-b border-border/60 bg-secondary/40 shrink-0">
      <span className="w-4 h-4 rounded bg-gradient-to-br from-rose-400 to-fuchsia-500" />
      <span className="ml-1 h-1.5 w-10 rounded-full bg-foreground/30" />
      <span className="h-1.5 w-8 rounded-full bg-foreground/20" />
      <span className="h-1.5 w-8 rounded-full bg-foreground/20" />
      <span className="ml-auto inline-flex h-4 px-2.5 items-center rounded bg-primary text-[8px] font-bold text-primary-foreground">
        {t('Contact', 'Contact')}
      </span>
    </div>
    {/* vibrant hero */}
    <div className="h-[100px] bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500 relative flex flex-col justify-end p-4 shrink-0">
      <span className="block h-2.5 w-2/3 rounded-full bg-white/90" />
      <span className="block h-2 w-1/2 rounded-full bg-white/60 mt-2" />
      <span className="mt-2.5 inline-flex h-6 w-fit px-3.5 rounded-md bg-white text-rose-600 text-[10px] font-bold items-center">
        {t('Réserver', 'Book now')}
      </span>
    </div>
    {/* image gallery */}
    <div className="h-[72px] px-4 grid grid-cols-3 gap-2.5 items-center shrink-0">
      <div className="h-14 rounded-md bg-gradient-to-br from-amber-300 to-orange-500" />
      <div className="h-14 rounded-md bg-gradient-to-br from-teal-300 to-emerald-500" />
      <div className="h-14 rounded-md bg-gradient-to-br from-sky-300 to-indigo-500" />
    </div>
    {/* stats band */}
    <div className="h-12 mx-4 rounded-lg bg-primary/8 border border-primary/20 grid grid-cols-3 items-center px-3 text-center shrink-0">
      <div>
        <p className="text-[12px] font-extrabold text-foreground leading-none">+38%</p>
        <p className="text-[7px] uppercase tracking-wide text-muted-foreground mt-0.5">{t('visites', 'visits')}</p>
      </div>
      <div className="border-x border-border/50">
        <p className="text-[12px] font-extrabold text-foreground leading-none">5,0★</p>
        <p className="text-[7px] uppercase tracking-wide text-muted-foreground mt-0.5">{t('avis', 'reviews')}</p>
      </div>
      <div>
        <p className="text-[12px] font-extrabold text-foreground leading-none">#1</p>
        <p className="text-[7px] uppercase tracking-wide text-muted-foreground mt-0.5">Google</p>
      </div>
    </div>
    {/* testimonial */}
    <div className="h-20 mx-4 mt-2 rounded-lg bg-secondary/50 border border-border/60 p-3 flex items-center gap-3 shrink-0">
      <span className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-400 to-fuchsia-500 shrink-0" />
      <div className="flex-1">
        <div className="flex gap-0.5 mb-1.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
          ))}
        </div>
        <span className="block h-1.5 rounded-full bg-foreground/25 w-full" />
        <span className="block h-1.5 rounded-full bg-foreground/15 w-2/3 mt-1.5" />
      </div>
    </div>
    {/* cta banner */}
    <div className="h-[52px] mx-4 my-2 rounded-lg bg-gradient-to-r from-primary to-fuchsia-500 flex items-center justify-between px-4 shrink-0">
      <span className="h-2 w-20 rounded-full bg-white/70" />
      <span className="inline-flex h-6 px-3 items-center rounded-md bg-white text-[10px] font-bold text-primary">
        {t('Devis gratuit', 'Free quote')}
      </span>
    </div>
  </div>
);

const ServiceHeroMorph = () => {
  const { language } = useLanguage();
  const t = (fr: string, en: string) => (language === 'fr' ? fr : en);
  const reduce = useReducedMotion();

  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });
  // Smooth the scrub so the reveal feels liquid, not stepped.
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.4 });

  // Reveal wipe: the living site is clipped from the bottom, opening top→down.
  const bottomInset = useTransform(p, [0.14, 0.74], [100, 0]);
  const revealClip = useMotionTemplate`inset(0% 0% ${bottomInset}% 0%)`;

  // Scanner rides the reveal edge.
  const scanTop = useTransform(p, [0.14, 0.74], ['0%', '100%']);
  const scanOpacity = useTransform(p, [0.1, 0.2, 0.66, 0.78], [0, 1, 1, 0]);

  // Frame comes alive.
  const stageScale = useTransform(p, [0.12, 0.85], [0.96, 1]);
  const ringOpacity = useTransform(p, [0.4, 0.85], [0, 1]);
  const glowOpacity = useTransform(p, [0.3, 0.85], [0.15, 0.6]);

  // URL bar swaps.
  const urlDead = useTransform(p, [0.18, 0.32], [1, 0]);
  const urlLive = useTransform(p, [0.42, 0.6], [0, 1]);

  // Proof chips fly in at the end.
  const chips = useTransform(p, [0.74, 0.92], [0, 1]);
  const chipUp = useTransform(p, [0.74, 0.92], [16, 0]);
  const chipDown = useTransform(p, [0.74, 0.92], [-16, 0]);

  // Caption flips from "before" to "after".
  const capDead = useTransform(p, [0, 0.22], [1, 0]);
  const capLive = useTransform(p, [0.7, 0.9], [0, 1]);
  const capLiveScale = useTransform(p, [0.7, 0.92], [0.9, 1]);

  /* Reduced motion: skip the scrub, show the finished living site. */
  if (reduce) {
    return (
      <div className="flex justify-center px-6 py-10">
        <div className="relative w-full max-w-[460px]">
          <div className="relative rounded-2xl border border-primary/30 ring-1 ring-primary/20 bg-card overflow-hidden shadow-2xl">
            <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border/70 bg-secondary/60">
              <span className="w-2 h-2 rounded-full bg-rose-400/70" />
              <span className="w-2 h-2 rounded-full bg-amber-400/70" />
              <span className="w-2 h-2 rounded-full bg-emerald-400/70" />
              <span className="ml-2 flex-1 h-4 rounded-full bg-background/80 border border-border/50 flex items-center px-2 text-[9px] text-primary font-medium">
                votresite.fr
              </span>
            </div>
            <div className="relative h-[412px]">
              <LiveSite t={t} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    // Tall track: the stage stays pinned while this scrolls past → scrub room.
    <div ref={trackRef} className="relative h-[230vh] sm:h-[260vh]">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-4">
        {/* pain point + hint */}
        <div className="mb-8 sm:mb-12 text-center max-w-2xl px-2">
          <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-none tracking-tight">
            {t('Pas de site = clients perdus.', 'No site = lost clients.')}
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            {t('Scrollez pour voir la différence', 'Scroll to see the difference')}
          </p>
        </div>

        <motion.div style={{ scale: stageScale }} className="relative w-full max-w-[480px]" aria-hidden="true">
          {/* ambient glow */}
          <motion.div
            style={{ opacity: glowOpacity }}
            className="absolute -inset-10 rounded-[40px] bg-primary/20 blur-[90px]"
          />

          <div className="relative rounded-2xl border border-border/70 bg-card overflow-hidden shadow-2xl">
            {/* primary ring as it comes alive */}
            <motion.div
              style={{ opacity: ringOpacity }}
              className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-primary/40 shadow-[0_0_70px_-14px_hsl(var(--primary)/0.5)] z-40"
            />

            {/* browser bar */}
            <div className="relative flex items-center gap-1.5 px-3.5 py-2.5 border-b border-border/70 bg-secondary/60 z-30">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
              <span className="relative ml-2 flex-1 h-5 rounded-full bg-background/80 border border-border/50 flex items-center px-2.5 overflow-hidden">
                <motion.span style={{ opacity: urlDead }} className="absolute text-[10px] text-stone-500">
                  monsite-2009.fr
                </motion.span>
                <motion.span style={{ opacity: urlLive }} className="text-[10px] text-primary font-medium">
                  votresite.fr
                </motion.span>
              </span>
            </div>

            {/* stage — both sites stacked, the living one revealed by clip */}
            <div className="relative h-[412px]">
              <DeadSite t={t} />
              <motion.div style={{ clipPath: revealClip }} className="absolute inset-0 z-10">
                <LiveSite t={t} />
              </motion.div>

              {/* scanner riding the reveal edge */}
              <motion.div
                style={{ top: scanTop, opacity: scanOpacity }}
                className="pointer-events-none absolute left-0 right-0 -translate-y-1/2 h-16 z-20 bg-gradient-to-b from-transparent via-primary/25 to-transparent"
              >
                <span className="absolute bottom-1/2 left-0 right-0 h-[2px] bg-primary shadow-[0_0_16px_3px_hsl(var(--primary)/0.7)]" />
              </motion.div>
            </div>
          </div>

          {/* floating proof chips */}
          <motion.div
            style={{ opacity: chips, y: chipDown }}
            className="absolute -right-3 sm:-right-6 top-10 rotate-6 rounded-xl bg-card border border-border shadow-xl px-3 py-2 flex items-center gap-1.5 z-50"
          >
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-[11px] font-bold text-foreground">5,0</span>
          </motion.div>

          <motion.div
            style={{ opacity: chips, y: chipUp }}
            className="absolute -left-4 sm:-left-8 bottom-16 -rotate-3 flex items-center gap-2 rounded-2xl bg-card border border-border shadow-xl px-3.5 py-2.5 z-50"
          >
            <span className="flex -space-x-2">
              <span className="w-5 h-5 rounded-full bg-gradient-to-br from-rose-400 to-fuchsia-500 border-2 border-card" />
              <span className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 border-2 border-card" />
              <span className="w-5 h-5 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 border-2 border-card" />
            </span>
            <span className="text-[11px] font-semibold text-foreground flex items-center gap-0.5">
              <Plus className="w-3 h-3 text-emerald-500" /> {t('nouveaux clients', 'new clients')}
            </span>
          </motion.div>

          <motion.div
            style={{ opacity: chips, y: chipDown }}
            className="absolute -left-3 sm:-left-7 top-20 -rotate-6 rounded-xl bg-card border border-border shadow-xl px-3 py-2 flex items-center gap-1.5 z-50"
          >
            <Search className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-semibold text-foreground">{t('1er sur Google', '#1 on Google')}</span>
          </motion.div>

          <motion.div
            style={{ opacity: chips, y: chipUp }}
            className="absolute -right-3 sm:-right-7 bottom-20 rotate-3 rounded-xl bg-card border border-border shadow-xl px-3 py-2 flex items-center gap-1.5 z-50"
          >
            <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
            <span className="text-[11px] font-semibold text-foreground">+38% {t('visites', 'visits')}</span>
          </motion.div>
        </motion.div>

        {/* caption flips before → after */}
        <div className="relative mt-6 sm:mt-8 h-9 w-full text-center flex items-center justify-center">
          <motion.span style={{ opacity: capDead }} className="absolute left-1/2 -translate-x-1/2 text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
            {t('Un site oublié', 'A forgotten site')}
          </motion.span>
          <motion.span
            style={{ opacity: capLive, scale: capLiveScale }}
            className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-lg sm:text-2xl font-extrabold text-primary"
          >
            {t('Un site qui travaille pour vous', 'A site that works for you')}
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default ServiceHeroMorph;
