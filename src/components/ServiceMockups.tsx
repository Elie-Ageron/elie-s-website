import { motion } from 'framer-motion';
import { Star, MapPin, Search, TrendingUp, Heart, Check, PenLine } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * In-browser "preview" mockups, one per service, used as the visual side of
 * each section on the /services page. Built entirely in markup (no images):
 * tilted cards, floating cut-out elements that break the rectangle, layered
 * depth, and realistic multi-color accents (not just the brand rose).
 */

const Stars = ({ size = 'w-3 h-3' }: { size?: string }) => (
  <span className="flex gap-0.5" aria-hidden="true">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`${size} text-amber-400 fill-amber-400`} />
    ))}
  </span>
);

const Bar = ({ w = 'w-full', tone = 'bg-muted-foreground/25', h = 'h-1.5' }: { w?: string; tone?: string; h?: string }) => (
  <span className={`block rounded-full ${h} ${w} ${tone}`} aria-hidden="true" />
);

/* 1. SITES — browser window with a colorful demo site + floating result chip */
const SitesMockup = () => (
  <div className="relative w-[340px] sm:w-[400px]">
    <div className="rounded-2xl bg-card border border-border shadow-2xl overflow-hidden -rotate-2">
      <div className="flex items-center gap-1.5 px-3 py-2.5 bg-secondary/70 border-b border-border/70">
        <span className="w-2.5 h-2.5 rounded-full bg-rose-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
        <span className="ml-2 flex-1 h-5 rounded-full bg-background/80 border border-border/60 text-[10px] text-muted-foreground flex items-center px-2.5">
          studio-belrose.fr
        </span>
      </div>
      <div className="p-4 space-y-3">
        <div className="h-28 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 relative flex flex-col justify-end p-3 gap-1.5">
          <span className="block h-2 w-2/3 rounded-full bg-white/90" />
          <span className="block h-1.5 w-1/2 rounded-full bg-white/60" />
          <span className="mt-1 inline-flex h-5 w-fit px-3 rounded-md bg-white text-indigo-600 text-[9px] font-bold items-center">Réserver</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="h-9 rounded-lg bg-secondary border border-border/50" />
          <div className="h-9 rounded-lg bg-secondary border border-border/50" />
          <div className="h-9 rounded-lg bg-secondary border border-border/50" />
        </div>
      </div>
    </div>
    {/* floating stat card breaking the frame */}
    <div className="absolute -bottom-5 -left-7 rotate-3 rounded-2xl bg-card border border-border shadow-xl px-3.5 py-2.5 flex items-center gap-2.5 transition-transform duration-300 ease-out group-hover:-translate-x-2.5 group-hover:translate-y-1.5 group-hover:-rotate-1">
      <span className="w-8 h-8 rounded-xl bg-emerald-500/15 flex items-center justify-center">
        <TrendingUp className="w-4 h-4 text-emerald-500" aria-hidden="true" />
      </span>
      <span className="leading-tight">
        <span className="block text-sm font-bold text-foreground">+38%</span>
        <span className="block text-[9px] text-muted-foreground">de contacts</span>
      </span>
    </div>
  </div>
);

/* 2. GOOGLE BUSINESS — map card with Google colors + floating rank chip */
const GoogleBusinessMockup = () => {
  const { language } = useLanguage();
  return (
    <div className="relative w-[320px] sm:w-[360px] -rotate-1">
      <div className="rounded-2xl bg-card border border-border shadow-2xl overflow-hidden">
        <div className="relative h-28 overflow-hidden" style={{ backgroundColor: 'hsl(40 30% 96%)', backgroundImage: 'linear-gradient(hsl(30 10% 88%) 1px, transparent 1px), linear-gradient(90deg, hsl(30 10% 88%) 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          {/* green park blob */}
          <div className="absolute -left-4 -top-3 w-20 h-20 rounded-[40%] bg-emerald-300/50" aria-hidden="true" />
          {/* blue road */}
          <div className="absolute right-0 top-6 w-40 h-2.5 bg-sky-400/60 rotate-[20deg] rounded-full" aria-hidden="true" />
          {/* pin */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="absolute w-10 h-10 rounded-full bg-rose-500/25 animate-pulse" aria-hidden="true" />
            <MapPin className="relative w-8 h-8 text-rose-600 fill-rose-500/40" aria-hidden="true" />
          </div>
        </div>
        <div className="p-4 space-y-1.5">
          <p className="text-base font-bold text-foreground leading-tight">Salon Dupont</p>
          <div className="flex items-center gap-1.5">
            <Stars />
            <span className="text-[11px] text-muted-foreground">5,0 · 47 {language === 'fr' ? 'avis' : 'reviews'}</span>
          </div>
          <p className="text-[11px] text-muted-foreground">{language === 'fr' ? 'Coiffeur · Albertville' : 'Hair salon · Albertville'}</p>
          <div className="flex gap-2 pt-2">
            <span className="flex-1 text-center text-[10px] font-bold py-2 rounded-lg bg-blue-600 text-white">{language === 'fr' ? 'Itinéraire' : 'Directions'}</span>
            <span className="flex-1 text-center text-[10px] font-bold py-2 rounded-lg border border-border text-foreground/70">{language === 'fr' ? 'Appeler' : 'Call'}</span>
          </div>
        </div>
      </div>
      {/* floating rank chip */}
      <div className="absolute -top-4 -right-6 rotate-6 rounded-full bg-card border border-border shadow-xl pl-2 pr-3 py-1.5 flex items-center gap-1.5 transition-transform duration-300 ease-out group-hover:translate-x-2.5 group-hover:-translate-y-1.5 group-hover:rotate-[14deg]">
        <span className="w-5 h-5 rounded-full bg-rose-500 flex items-center justify-center text-white text-[9px] font-bold">1</span>
        <span className="text-[10px] font-semibold text-foreground">{language === 'fr' ? 'à Albertville' : 'in Albertville'}</span>
      </div>
    </div>
  );
};

/* 3. SOCIAL — phone with IG-gradient + floating like + new-follower bubbles */
const SocialMockup = () => {
  const { language } = useLanguage();
  const tiles = ['from-orange-400 to-rose-500', 'from-sky-400 to-indigo-500', 'from-emerald-400 to-teal-500', 'from-fuchsia-400 to-purple-600', 'from-amber-300 to-orange-500', 'from-rose-400 to-pink-600', 'from-cyan-400 to-blue-500', 'from-violet-400 to-fuchsia-500', 'from-lime-400 to-emerald-500'];
  return (
    <div className="relative w-[210px] mx-auto rotate-2">
      <div className="rounded-[2.2rem] border-[5px] border-foreground/10 bg-card shadow-2xl p-3">
        <div className="mx-auto mb-2.5 h-1.5 w-10 rounded-full bg-foreground/15" aria-hidden="true" />
        <div className="flex items-center gap-2.5 px-0.5 mb-2.5">
          <span className="p-[2px] rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-fuchsia-600 shrink-0" aria-hidden="true">
            <span className="block w-9 h-9 rounded-full bg-card border-2 border-card overflow-hidden">
              <span className="block w-full h-full bg-gradient-to-br from-violet-400 to-cyan-400" />
            </span>
          </span>
          <span className="min-w-0">
            <span className="block text-[11px] font-semibold text-foreground truncate">@votremarque</span>
            <span className="block text-[8px] text-muted-foreground">1 248 {language === 'fr' ? 'abonnés' : 'followers'}</span>
          </span>
        </div>
        <div className="grid grid-cols-3 gap-1">
          {tiles.map((t, i) => (
            <div key={i} className={`aspect-square rounded-md bg-gradient-to-br ${t}`} aria-hidden="true" />
          ))}
        </div>
      </div>
      {/* floating like bubble */}
      <div className="absolute -left-8 top-1/4 -rotate-6 rounded-2xl bg-card border border-border shadow-xl px-3 py-2 flex items-center gap-1.5 transition-transform duration-300 ease-out group-hover:-translate-x-2.5 group-hover:-translate-y-1 group-hover:-rotate-[14deg]">
        <Heart className="w-4 h-4 text-rose-500 fill-rose-500" aria-hidden="true" />
        <span className="text-sm font-bold text-foreground">1,2k</span>
      </div>
      {/* floating new-follower chip */}
      <div className="absolute -right-9 bottom-10 rotate-3 rounded-full bg-card border border-border shadow-xl pl-1.5 pr-3 py-1 flex items-center gap-1.5 transition-transform duration-300 ease-out group-hover:translate-x-2.5 group-hover:translate-y-1">
        <span className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500" aria-hidden="true" />
        <span className="text-[9px] font-semibold text-foreground">+ {language === 'fr' ? 'abonné' : 'follower'}</span>
      </div>
    </div>
  );
};

/* 4. BRANDING — brand board with a real multi-color palette + floating swatch */
const BrandingMockup = () => (
  <div className="relative w-[330px] sm:w-[380px] -rotate-1">
    <div className="rounded-2xl bg-card border border-border shadow-2xl p-5 space-y-4">
      <div className="flex items-center gap-3">
        <span className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-orange-400 flex items-center justify-center text-white font-heading font-bold text-xl shrink-0 shadow-lg shadow-rose-500/20">b</span>
        <span className="space-y-1.5">
          <Bar w="w-24" h="h-2.5" tone="bg-foreground/80" />
          <Bar w="w-16" tone="bg-muted-foreground/30" />
        </span>
      </div>
      <div className="flex gap-2">
        {['bg-rose-500', 'bg-orange-400', 'bg-teal-500', 'bg-indigo-500', 'bg-stone-200'].map((c, i) => (
          <div key={i} className={`flex-1 h-11 rounded-xl ${c} ${c === 'bg-stone-200' ? 'border border-border' : ''}`} aria-hidden="true" />
        ))}
      </div>
      <div className="flex items-baseline gap-2.5">
        <span className="font-heading font-bold text-3xl text-foreground">Aa</span>
        <span className="text-base text-muted-foreground">Bb Cc</span>
        <span className="ml-auto text-[9px] text-muted-foreground/70 uppercase tracking-wide">General Sans</span>
      </div>
    </div>
    {/* floating swatch chip */}
    <div className="absolute -top-5 -right-5 rotate-12 w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-400 to-indigo-500 shadow-xl border-4 border-card transition-transform duration-300 ease-out group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:rotate-[20deg]" aria-hidden="true" />
    {/* floating logo sticker */}
    <div className="absolute -bottom-5 -left-6 -rotate-6 w-12 h-12 rounded-2xl bg-card border border-border shadow-xl flex items-center justify-center font-heading font-bold text-lg text-rose-500 transition-transform duration-300 ease-out group-hover:-translate-x-2 group-hover:translate-y-1.5 group-hover:-rotate-[14deg]">b</div>
  </div>
);

/* 5. SEO — Google result with real link colors + floating rank-up + bar chart */
const SeoMockup = () => {
  const { language } = useLanguage();
  return (
    <div className="relative w-[350px] sm:w-[400px] -rotate-1">
      <div className="rounded-2xl bg-card border border-border shadow-2xl p-4 space-y-3">
        <div className="h-8 rounded-full bg-secondary border border-border/60 flex items-center px-3.5 gap-2">
          <Search className="w-3.5 h-3.5 text-muted-foreground shrink-0" aria-hidden="true" />
          <span className="text-[11px] text-muted-foreground">web designer savoie</span>
        </div>
        <div className="rounded-xl border border-rose-500/40 bg-rose-500/[0.04] p-3 space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-emerald-600 font-medium">votresite.fr</span>
            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-rose-500 text-white">#1</span>
          </div>
          <Bar w="w-3/4" h="h-2.5" tone="bg-blue-600/70" />
          <Bar w="w-full" />
          <Bar w="w-2/3" />
        </div>
        <div className="space-y-1.5 px-0.5 opacity-55">
          <Bar w="w-1/2" h="h-2" tone="bg-blue-600/40" />
          <Bar w="w-5/6" />
        </div>
      </div>
      {/* floating rank-up chip */}
      <div className="absolute -top-5 -right-6 rotate-6 rounded-2xl bg-card border border-border shadow-xl px-3 py-2 flex items-center gap-2 transition-transform duration-300 ease-out group-hover:translate-x-2.5 group-hover:-translate-y-1.5 group-hover:rotate-[12deg]">
        <span className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center">
          <TrendingUp className="w-4 h-4 text-white" aria-hidden="true" />
        </span>
        <span className="leading-tight">
          <span className="block text-xs font-bold text-foreground">+12</span>
          <span className="block text-[8px] text-muted-foreground">{language === 'fr' ? 'places' : 'spots'}</span>
        </span>
      </div>
      {/* floating climbing bars */}
      <div className="absolute -bottom-5 -left-6 rotate-3 rounded-xl bg-card border border-border shadow-xl p-2.5 flex items-end gap-1 h-16 transition-transform duration-300 ease-out group-hover:-translate-x-2 group-hover:translate-y-1.5">
        <span className="w-2 h-4 rounded-sm bg-muted-foreground/30" />
        <span className="w-2 h-6 rounded-sm bg-muted-foreground/40" />
        <span className="w-2 h-9 rounded-sm bg-rose-400" />
        <span className="w-2 h-11 rounded-sm bg-rose-500" />
      </div>
    </div>
  );
};

/* 6. REVIEWS — stacked review cards + floating gold rating badge */
const ReviewMockup = () => {
  const { language } = useLanguage();
  return (
    <div className="relative w-[320px] sm:w-[360px]">
      {/* card behind for depth */}
      <div className="absolute inset-0 translate-x-3.5 translate-y-3.5 rotate-3 rounded-2xl bg-secondary border border-border" aria-hidden="true" />
      <div className="relative rounded-2xl bg-card border border-border shadow-2xl p-4 space-y-3 -rotate-1">
        <div className="flex items-center gap-2.5">
          <span className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-400 to-sky-500 shrink-0" aria-hidden="true" />
          <span>
            <span className="flex items-center gap-1.5">
              <span className="text-sm font-semibold text-foreground">Marie L.</span>
              <span className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center">
                <Check className="w-2.5 h-2.5 text-white" aria-hidden="true" />
              </span>
            </span>
            <Stars />
          </span>
        </div>
        <p className="text-[12px] text-muted-foreground leading-relaxed">
          {language === 'fr'
            ? '« Travail impeccable, mon site attire enfin des clients. Je recommande. »'
            : '"Impeccable work, my site finally brings in clients. Highly recommend."'}
        </p>
        <div className="ml-2 pl-2.5 border-l-2 border-rose-500/40">
          <p className="text-[9px] text-muted-foreground/80">
            {language === 'fr' ? 'Réponse du pro : Merci Marie, ravi de vous accompagner.' : 'Owner reply: Thanks Marie, glad to support you.'}
          </p>
        </div>
      </div>
      {/* floating gold rating badge */}
      <div className="absolute -top-6 -right-6 rotate-6 w-[68px] h-[68px] rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 shadow-xl flex flex-col items-center justify-center text-white border-4 border-card transition-transform duration-300 ease-out group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:rotate-[14deg]">
        <span className="text-xl font-bold leading-none">5,0</span>
        <span className="text-[8px] tracking-tight mt-0.5">★★★★★</span>
      </div>
    </div>
  );
};

/* 7. CONTENT — layered article sheets + highlight + floating chip */
const ContentMockup = () => {
  const { language } = useLanguage();
  return (
    <div className="relative w-[320px] sm:w-[360px] -rotate-1">
      {/* sheet behind */}
      <div className="absolute inset-0 -translate-x-3.5 translate-y-3.5 -rotate-3 rounded-2xl bg-secondary border border-border" aria-hidden="true" />
      <div className="relative rounded-2xl bg-card border border-border shadow-2xl p-5 space-y-3">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-600 text-[8px] font-bold uppercase tracking-wide">Article</span>
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 text-[8px] font-bold uppercase tracking-wide flex items-center gap-1">
            <Check className="w-2.5 h-2.5" aria-hidden="true" /> SEO
          </span>
        </div>
        <div className="space-y-2">
          <Bar w="w-5/6" h="h-3.5" tone="bg-foreground/80" />
          <Bar w="w-1/2" h="h-3.5" tone="bg-foreground/80" />
        </div>
        <div className="space-y-2 pt-1">
          <Bar w="w-full" />
          <span className="block h-2 w-2/3 rounded bg-amber-200" aria-hidden="true" />
          <Bar w="w-full" />
          <Bar w="w-3/4" />
        </div>
      </div>
      {/* floating chip */}
      <div className="absolute -bottom-5 -right-6 rotate-6 rounded-2xl bg-card border border-border shadow-xl px-3.5 py-2 flex items-center gap-2 transition-transform duration-300 ease-out group-hover:translate-x-2.5 group-hover:translate-y-1.5 group-hover:rotate-[12deg]">
        <span className="w-7 h-7 rounded-lg bg-rose-500/15 flex items-center justify-center">
          <PenLine className="w-4 h-4 text-rose-500" aria-hidden="true" />
        </span>
        <span className="text-[10px] font-semibold text-foreground">+1 {language === 'fr' ? 'article' : 'post'}</span>
      </div>
    </div>
  );
};

const MOCKUPS: Record<string, () => JSX.Element> = {
  sites: SitesMockup,
  'google-business': GoogleBusinessMockup,
  reseaux: SocialMockup,
  branding: BrandingMockup,
  seo: SeoMockup,
  avis: ReviewMockup,
  contenu: ContentMockup,
};

const ServiceMockup = ({ id }: { id: string }) => {
  const Mockup = MOCKUPS[id];
  if (!Mockup) return null;
  return (
    <motion.div
      className="group cursor-pointer"
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
    >
      <Mockup />
    </motion.div>
  );
};

export default ServiceMockup;
