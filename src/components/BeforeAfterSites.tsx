import { motion } from 'framer-motion';
import { Star, ArrowRight, Unplug, Plus } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Visual before/after for the /services manifesto — what a prospect lands on.
 * Left: a dull, broken, abandoned site (greyed out) and a visitor who leaves.
 * Right: a vibrant, living site and a visitor who converts. Markup only.
 */

const BrowserBar = ({ url, dim = false }: { url: string; dim?: boolean }) => (
  <div className={`flex items-center gap-1.5 px-3 py-2 border-b ${dim ? 'bg-stone-200 border-stone-300' : 'bg-secondary/70 border-border/70'}`}>
    <span className={`w-2 h-2 rounded-full ${dim ? 'bg-stone-400' : 'bg-rose-400/70'}`} />
    <span className={`w-2 h-2 rounded-full ${dim ? 'bg-stone-400' : 'bg-amber-400/70'}`} />
    <span className={`w-2 h-2 rounded-full ${dim ? 'bg-stone-400' : 'bg-emerald-400/70'}`} />
    <span className={`ml-2 flex-1 h-4 rounded-full flex items-center px-2 text-[9px] ${dim ? 'bg-stone-100 border border-stone-300 text-stone-500' : 'bg-background/80 border border-border/50 text-muted-foreground'}`}>{url}</span>
  </div>
);

/* AVANT — site gris, cassé, abandonné. Le client repart. */
export const DeadSiteMockup = () => {
  const { language } = useLanguage();
  return (
    <div className="relative w-full max-w-[290px] mx-auto rotate-1">
      <div className="rounded-xl border border-stone-300 overflow-hidden shadow-sm grayscale opacity-80">
        <BrowserBar url="monsite-2009.fr" dim />
        <div className="bg-stone-100 px-4 py-7 flex flex-col items-center text-center gap-2">
          <div className="w-12 h-12 rounded-2xl bg-stone-200 border border-stone-300 flex items-center justify-center">
            <Unplug className="w-6 h-6 text-stone-400" aria-hidden="true" />
          </div>
          <p className="text-3xl font-extrabold text-stone-500 leading-none tracking-tight">404</p>
          <p className="text-[12px] font-semibold text-stone-500">{language === 'fr' ? "Ce site n'existe pas" : "This site doesn't exist"}</p>
          <p className="text-[9px] text-stone-400">{language === 'fr' ? "ou plus personne ne s'en occupe" : 'or nobody maintains it anymore'}</p>
        </div>
      </div>
      {/* clients leave to the competitor */}
      <div className="absolute -bottom-5 -right-5 rotate-3 flex items-center gap-2 rounded-2xl bg-card border border-border shadow-xl px-3 py-2">
        <span className="flex -space-x-2" aria-hidden="true">
          <span className="w-5 h-5 rounded-full bg-stone-300 border-2 border-card" />
          <span className="w-5 h-5 rounded-full bg-stone-300 border-2 border-card" />
          <span className="w-5 h-5 rounded-full bg-stone-300 border-2 border-card" />
        </span>
        <ArrowRight className="w-3.5 h-3.5 text-stone-400 shrink-0" aria-hidden="true" />
        <span className="text-[10px] font-semibold text-stone-500">{language === 'fr' ? 'chez le concurrent' : 'to the competitor'}</span>
      </div>
    </div>
  );
};

/* APRÈS — beau site vivant, belles images. Le client reste et contacte. */
export const LiveSiteMockup = () => {
  const { language } = useLanguage();
  return (
    <motion.div
      className="relative w-full max-w-[300px] mx-auto"
      whileHover={{ y: -8, scale: 1.025 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
    >
      <div className="relative rounded-2xl bg-card border border-primary/30 shadow-2xl shadow-primary/15 overflow-hidden -rotate-1 ring-1 ring-primary/10">
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/15 blur-3xl" aria-hidden="true" />
        <BrowserBar url="votresite.fr" />
        <div className="relative z-10">
          <div className="h-24 bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500 relative flex flex-col justify-end p-3">
            <span className="block h-2 w-2/3 rounded-full bg-white/90" />
            <span className="block h-1.5 w-1/2 rounded-full bg-white/60 mt-1.5" />
            <span className="mt-2 inline-flex h-5 w-fit px-3 rounded-md bg-white text-rose-600 text-[9px] font-bold items-center">Réserver</span>
          </div>
          <div className="p-3 grid grid-cols-3 gap-1.5">
            <div className="aspect-square rounded-md bg-gradient-to-br from-amber-300 to-orange-500" aria-hidden="true" />
            <div className="aspect-square rounded-md bg-gradient-to-br from-teal-300 to-emerald-500" aria-hidden="true" />
            <div className="aspect-square rounded-md bg-gradient-to-br from-sky-300 to-indigo-500" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* rating */}
      <div className="absolute -right-5 top-6 rotate-6 rounded-xl bg-card border border-border shadow-xl px-2.5 py-1.5 flex items-center gap-1">
        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" aria-hidden="true" />
        <span className="text-[10px] font-bold text-foreground">5,0</span>
      </div>
      {/* new clients stay */}
      <div className="absolute -left-5 bottom-6 -rotate-3 flex items-center gap-2 rounded-2xl bg-card border border-border shadow-xl px-3 py-2">
        <span className="flex -space-x-2" aria-hidden="true">
          <span className="w-5 h-5 rounded-full bg-gradient-to-br from-rose-400 to-fuchsia-500 border-2 border-card" />
          <span className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 border-2 border-card" />
          <span className="w-5 h-5 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 border-2 border-card" />
        </span>
        <span className="text-[10px] font-semibold text-foreground flex items-center gap-0.5">
          <Plus className="w-3 h-3 text-emerald-500" aria-hidden="true" /> {language === 'fr' ? 'nouveaux clients' : 'new clients'}
        </span>
      </div>
    </motion.div>
  );
};
