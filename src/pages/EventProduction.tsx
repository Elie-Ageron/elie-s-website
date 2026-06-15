import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Check, Zap, Crown, TrendingDown, MousePointerClick,
  Smartphone, Timer, ArrowRight, Send, Plus, Minus,
  Users, Music, Mic, Building,
  ClipboardList, Wrench, Eye, MessageSquare, BadgeCheck,
  Target, Link2, Star, Search, BarChart3, ExternalLink, Scale, X, ChevronLeft, ChevronRight,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCalendly } from '@/contexts/CalendlyContext';
import { useToast } from '@/hooks/use-toast';
import MagneticButton from '@/components/animations/MagneticButton';
import ContactMethodsSection from '@/components/ContactMethodsSection';
import SEO from '@/components/SEO';
import InternalLinks from '@/components/InternalLinks';
import ScrollArrow from '@/components/ScrollArrow';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxu13-AnjyCaXr818JdA-hCSohWEE2ii1ELGXM-PeQ_sGYYB8rvEhXr_NYh7YWedA4qyg/exec';

interface StepNodeProps {
  step: { number: string; label: string; title: string; desc: string; duration: string };
  index: number;
  total: number;
  isLast: boolean;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
  language: string;
}

const StepNode = ({ step, index, total, isLast, scrollYProgress, language }: StepNodeProps) => {
  const start = index / total;
  const end = (index + 1) / total;
  const nodeColor = useTransform(
    useTransform(scrollYProgress, [start, end], [0, 1]),
    [0, 0.6],
    ['hsl(0 0% 15%)', 'hsl(328 100% 54%)']
  );
  const nodeShadow = useTransform(
    useTransform(scrollYProgress, [start, end], [0, 1]),
    [0, 1],
    ['0 0 0px hsl(328 100% 54% / 0)', '0 0 16px hsl(328 100% 54% / 0.6)']
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="relative pl-16 sm:pl-24 pb-12 sm:pb-16"
    >
      <motion.div
        className="absolute left-[22px] sm:left-[34px] top-1 w-5 h-5 rounded-full bg-card border-2 z-10"
        style={{ borderColor: nodeColor, boxShadow: nodeShadow }}
      />
      <div className="flex items-baseline gap-3 mb-3">
        <span className="text-6xl sm:text-8xl font-black text-muted-foreground/8 leading-none select-none">
          {step.number}
        </span>
        <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-primary">
          {step.label}
        </span>
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 leading-snug">
        {step.title}
      </h3>
      <p className="text-muted-foreground leading-relaxed max-w-lg text-sm sm:text-base">
        {step.desc}
      </p>
      <div className="mt-4 flex items-center gap-3 flex-wrap">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
          {step.duration}
        </span>
        {isLast && (
          <a
            href="#apply"
            className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline underline-offset-4 group"
          >
            {language === 'fr' ? 'Commencer maintenant' : 'Start now'}
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

interface DemoSliderProps {
  demos: { url: string; label: string }[];
  language: string;
}

const DemoSlider = ({ demos, language }: DemoSliderProps) => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = useCallback((next: number) => {
    setDirection(next > active ? 1 : -1);
    setActive(next);
  }, [active]);

  const prev = () => go((active - 1 + demos.length) % demos.length);
  const next = () => go((active + 1) % demos.length);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="flex flex-col gap-4"
    >
      {/* Browser frame */}
      <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/5">
        {/* Chrome bar */}
        <div className="bg-muted/60 px-4 py-3 flex items-center gap-3 border-b border-border/30">
          <div className="flex gap-1.5" aria-hidden="true">
            <div className="w-3 h-3 rounded-full bg-red-400/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/50" />
            <div className="w-3 h-3 rounded-full bg-green-400/50" />
          </div>
          <div className="flex-1 mx-2">
            <div className="bg-background/50 rounded-md px-3 py-1 text-xs text-muted-foreground/70 text-center max-w-sm mx-auto truncate">
              {demos[active].url.replace('https://', '')}
            </div>
          </div>
          <a
            href={demos[active].url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={language === 'fr' ? 'Ouvrir dans un nouvel onglet' : 'Open in new tab'}
            onClick={e => e.stopPropagation()}
          >
            <ExternalLink className="w-4 h-4 text-muted-foreground/40 hover:text-primary transition-colors" aria-hidden="true" />
          </a>
        </div>

        {/* Iframe with slide transition */}
        <div className="relative overflow-hidden" style={{ height: '560px' }}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 40 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute inset-0"
            >
              <iframe
                src={demos[active].url}
                title={demos[active].label}
                className="w-full h-full border-0 pointer-events-none"
                loading="lazy"
              />
            </motion.div>
          </AnimatePresence>

          {/* Side arrows — overlaid on the iframe */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/90 border border-border/60 shadow-lg flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-all"
            aria-label={language === 'fr' ? 'Démo précédente' : 'Previous demo'}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/90 border border-border/60 shadow-lg flex items-center justify-center text-foreground hover:text-primary hover:border-primary/50 transition-all"
            aria-label={language === 'fr' ? 'Démo suivante' : 'Next demo'}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Dots + label + link */}
      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center gap-2" role="tablist" aria-label={language === 'fr' ? 'Sélectionner une démo' : 'Select a demo'}>
          {demos.map((demo, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={active === i}
              aria-label={demo.label}
              onClick={() => go(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${active === i ? 'w-6 bg-primary' : 'w-1.5 bg-border hover:bg-muted-foreground/40'}`}
            />
          ))}
        </div>
        <a
          href={demos[active].url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors group"
        >
          {language === 'fr' ? `Ouvrir ${demos[active].label}` : `Open ${demos[active].label}`}
          <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
        </a>
      </div>
    </motion.div>
  );
};

const EventProduction = () => {
  const { language } = useLanguage();
  const { openCalendly } = useCalendly();
  const { toast } = useToast();
  const stepsRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ['start center', 'end center'],
  });
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [stepDirection, setStepDirection] = useState(1);
  const TOTAL_STEPS = 4;
  const [formData, setFormData] = useState({
    name: '', email: '',
    eventName: '', eventType: '', eventDate: '', eventCity: '', expectedAttendees: '',
    currentSite: '', ticketingSystem: '', hasVisuals: '', hasLineup: '',
    eventDescription: '', specificRequests: '',
    siteReference: '', visualStyle: '', colorPalette: '',
  });

  const canProceed = (): boolean => {
    switch (currentStep) {
      case 1: return !!(formData.name.trim() && formData.email.trim());
      case 2: return !!(formData.eventName.trim() && formData.eventType && formData.eventDate && formData.eventCity.trim());
      case 3: return !!(formData.ticketingSystem && formData.hasVisuals && formData.hasLineup);
      case 4: return !!formData.eventDescription.trim();
      default: return false;
    }
  };

  const goNext = () => {
    if (!canProceed()) return;
    setStepDirection(1);
    setCurrentStep(p => p + 1);
  };

  const goBack = () => {
    setStepDirection(-1);
    setCurrentStep(p => p - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canProceed()) return;
    setIsSubmitting(true);
    try {
      const message = [
        `Événement : ${formData.eventName}`,
        `Type : ${formData.eventType}`,
        `Date : ${formData.eventDate}`,
        `Ville : ${formData.eventCity}`,
        formData.expectedAttendees ? `Jauge attendue : ${formData.expectedAttendees}` : null,
        formData.currentSite ? `Site actuel : ${formData.currentSite}` : null,
        `Billetterie : ${formData.ticketingSystem}`,
        `Visuels prêts : ${formData.hasVisuals}`,
        `Lineup confirmé : ${formData.hasLineup}`,
        `Description : ${formData.eventDescription}`,
        formData.specificRequests ? `Demandes spécifiques : ${formData.specificRequests}` : null,
        formData.siteReference ? `Référence de site : ${formData.siteReference}` : null,
        formData.visualStyle ? `Ambiance visuelle : ${formData.visualStyle}` : null,
        formData.colorPalette ? `Couleurs : ${formData.colorPalette}` : null,
      ].filter(Boolean).join('\n');

      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: formData.name, email: formData.email, message }),
      });
      setSubmitted(true);
    } catch {
      toast({
        title: language === 'fr' ? "Erreur lors de l'envoi" : 'Submission error',
        description: language === 'fr' ? 'Réessayez ou écrivez à web@elieageron.com' : 'Try again or email web@elieageron.com',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: language === 'fr' ? 'Accueil' : 'Home', item: 'https://elieageron.com' },
      { '@type': 'ListItem', position: 2, name: language === 'fr' ? "Sites pour Producteurs d'Événements" : 'Event Production Websites', item: 'https://elieageron.com/event-production' },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: language === 'fr' ? "Landing Pages pour Producteurs d'Événements" : 'Event Landing Page Design',
    description: language === 'fr' ? "Landing pages d'événement modernes et percutantes : hero visuel, programme, intervenants, billetterie et preuve sociale. Livrées vite." : 'Bold, modern event landing pages: visual hero, agenda, speakers, ticketing and social proof. Delivered fast.',
    url: 'https://elieageron.com/event-production',
    provider: { '@type': 'Person', name: 'Elie Ageron', url: 'https://elieageron.com' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: language === 'fr' ? "Offres Landing Pages Événement" : 'Event Landing Page Offers',
      itemListElement: [
        { '@type': 'Offer', name: language === 'fr' ? "Landing page d'événement" : 'Event Landing Page' },
        { '@type': 'Offer', name: 'Launch Pack' },
      ],
    },
  };

  const painPoints = [
    {
      icon: TrendingDown,
      title: language === 'fr' ? 'Paraît petit, même si l\'event est grand.' : 'Looks small, even when the event is big.',
      desc: '',
    },
    {
      icon: MousePointerClick,
      title: language === 'fr' ? 'Template générique, zéro effet wow.' : 'Generic template. Zero wow.',
      desc: '',
    },
    {
      icon: Smartphone,
      title: language === 'fr' ? 'Casse ou rame sur mobile.' : 'Breaks or lags on mobile.',
      desc: '',
    },
    {
      icon: Timer,
      title: language === 'fr' ? 'Fait trop tard, bâclé et hors marque.' : 'Built too late. Rushed and off-brand.',
      desc: '',
    },
  ];

  const includes = [
    { icon: Zap,           text: language === 'fr' ? 'Un hero visuel fort qui capte au premier regard' : 'A bold, high-impact hero that grabs attention' },
    { icon: Target,        text: language === 'fr' ? "La valeur de l'événement, claire en 5 secondes" : "Your event's value, clear in 5 seconds" },
    { icon: Users,         text: language === 'fr' ? 'Section intervenants avec photos et bios' : 'Speakers section with photos and bios' },
    { icon: ClipboardList, text: language === 'fr' ? 'Programme complet, lieu et date' : 'Full agenda, venue and date' },
    { icon: BadgeCheck,    text: language === 'fr' ? 'Billetterie multi-tarifs (standard, premium, VIP)' : 'Ticket tiers (standard, premium, VIP)' },
    { icon: Star,          text: language === 'fr' ? 'Preuve sociale : partenaires, chiffres, éditions passées' : 'Social proof: partners, numbers, past editions' },
    { icon: Smartphone,    text: language === 'fr' ? 'Mobile-first et chargement rapide' : 'Mobile-first and fast-loading' },
    { icon: Search,        text: language === 'fr' ? 'Optimisée SEO pour être trouvée' : 'SEO-ready so your event gets found' },
  ];

  const steps = [
    {
      icon: ClipboardList,
      number: '01', label: language === 'fr' ? 'BRIEF' : 'BRIEF',
      title: language === 'fr' ? "Vous me parlez de l'événement." : 'You tell me about the event.',
      desc: language === 'fr'
        ? "Type d'événement, date, programme. Par un court appel ou un formulaire de 2 minutes, comme vous préférez."
        : 'Event type, date, lineup. On a short call or a 2-minute form, whichever you prefer.',
      duration: language === 'fr' ? '2 minutes' : '2 minutes',
    },
    {
      icon: Wrench,
      number: '02', label: language === 'fr' ? 'CRÉATION' : 'BUILD',
      title: language === 'fr' ? 'On construit votre page.' : 'We build your page.',
      desc: language === 'fr'
        ? "Dans les 48 heures, une première version est prête. Design, textes, compte à rebours, formulaire d'inscription."
        : "Within 48 hours, a first version is ready. Design, copy, countdown, registration form.",
      duration: language === 'fr' ? '48 heures' : '48 hours',
    },
    {
      icon: Eye,
      number: '03', label: language === 'fr' ? 'DÉMO' : 'DEMO',
      title: language === 'fr' ? 'Vous recevez la démo.' : 'You receive the demo.',
      desc: language === 'fr'
        ? "Lien direct vers votre page. Vous la regardez sur votre écran, vous la testez sur votre téléphone. Aucune réunion."
        : "A direct link to your page. View it on your screen, test it on your phone. No meeting.",
      duration: language === 'fr' ? 'À votre rythme' : 'At your pace',
    },
    {
      icon: MessageSquare,
      number: '04', label: language === 'fr' ? 'RETOURS' : 'FEEDBACK',
      title: language === 'fr' ? 'Vous dites ce qui ne va pas.' : 'You tell us what to fix.',
      desc: language === 'fr'
        ? "Par email ou WhatsApp. On corrige. On recommence si besoin. Retours illimités."
        : "By email or WhatsApp. We fix it. We go again if needed. No revision limit.",
      duration: language === 'fr' ? '24-48h par retour' : '24-48h per round',
    },
    {
      icon: BadgeCheck,
      number: '05', label: language === 'fr' ? 'DÉCISION' : 'DECISION',
      title: language === 'fr' ? "Vous aimez ? Vous l'achetez." : 'You like it? You buy it.',
      desc: language === 'fr'
        ? "Si la page vous convient, vous payez et recevez le code source complet. Sinon, vous ne devez rien."
        : "If the page works for you, you pay and receive the full source code. If not, you owe nothing.",
      duration: language === 'fr' ? 'Votre décision' : 'Your call',
    },
  ];

  const forWho = [
    { icon: Mic,      title: language === 'fr' ? 'Conférences et sommets' : 'Conferences and summits', desc: language === 'fr' ? 'Vous organisez des événements B2B avec des intervenants et des billets à vendre.' : 'You run B2B events with speakers and tickets to sell.' },
    { icon: Building, title: language === 'fr' ? 'Événements corporate' : 'Corporate events', desc: language === 'fr' ? "Séminaires, formations, team buildings : vous avez besoin que les inscriptions arrivent sans friction." : 'Seminars, training days, team events: you need registrations to come in without friction.' },
    { icon: Music,    title: language === 'fr' ? 'Concerts et soirées' : 'Concerts and parties', desc: language === 'fr' ? "Vous faites de la promotion sur les réseaux. Vos visiteurs ont besoin d'une page qui convertit." : "You promote on social media. Your visitors need somewhere to land that actually sells." },
    { icon: Users,    title: language === 'fr' ? 'Producteurs récurrents' : 'Multi-event producers', desc: language === 'fr' ? "Vous organisez au moins deux événements par an et vous perdez du trafic à chaque fois." : 'You run at least two events a year and lose traffic every single time.' },
  ];

  const faqs = [
    {
      q: language === 'fr' ? "Concrètement, qu'est-ce que je reçois ?" : 'What do I actually get?',
      a: language === 'fr'
        ? "Une landing page claire et rapide, construite autour de votre événement. Hero visuel fort, votre programme, les intervenants avec photos, la billetterie ou l'inscription, et de la preuve sociale. Le tout sur une seule page, parfaite sur mobile, faite pour que votre événement ait l'air sérieux dès la première seconde."
        : 'One clean, fast landing page built around your event. A bold visual hero, your agenda, speakers with photos, ticketing or signup, and social proof. All on a single page, perfect on mobile, made to make your event look legit the second someone lands on it.',
    },
    {
      q: language === 'fr' ? 'En combien de temps tu la livres ?' : 'How fast can you deliver?',
      a: language === 'fr'
        ? "Vite, votre date ne bougera pas à cause de moi. Le délai standard est d'environ 5 jours, soit une petite semaine de travail. Si l'événement approche, j'ai une option express (24-72h) en supplément."
        : "Fast. Your event date won't slip because of me. Standard turnaround is around 5 days, roughly one working week. If your event is close, I offer a rush option (24-72h) for an extra fee.",
    },
    {
      q: language === 'fr' ? 'Comment ça se passe ?' : 'How does it work?',
      a: language === 'fr'
        ? "Simple. On parle de votre événement (un appel rapide ou un court formulaire), je conçois la page et je vous envoie un lien, vous me dites quoi ajuster, je corrige. Pas de longues réunions, pas de jargon."
        : 'Simple. We talk through your event (a quick call or a short form), I design the page and send you a live link, you tell me what to tweak, I adjust. No long meetings, no jargon.',
    },
    {
      q: language === 'fr' ? 'Combien ça coûte ?' : 'How much does it cost?',
      a: language === 'fr'
        ? "Ça dépend de votre événement et de vos besoins, donc je n'affiche pas de prix fixe ici. Réservez un appel rapide et je vous donne un chiffre clair, sans pression et sans baratin."
        : "It depends on your event and what you need, so I don't list a fixed price here. Book a quick call and I'll give you a straight number, no pressure and no sales pitch.",
    },
    {
      q: language === 'fr' ? "J'ai déjà un site ou une page. Tu peux la refaire ?" : 'I already have a site or page. Can you redo it?',
      a: language === 'fr'
        ? "Oui. Je refais souvent des pages d'événement datées ou fades. Envoyez-moi ce que vous avez et je la transforme en page d'un événement où tout le monde veut être."
        : "Yes. I rebuild outdated or underwhelming event pages all the time. Send me what you've got and I'll turn it into the page of an event everyone wants to be at.",
    },
    {
      q: language === 'fr' ? 'Tu gères la billetterie et les intégrations ?' : 'Do you handle ticketing and integrations?',
      a: language === 'fr'
        ? "Oui, quel que soit l'outil que vous utilisez déjà : Eventbrite, Luma, Stripe, Weezevent, Shotgun, un simple formulaire, à peu près tout ce qui peut s'intégrer. Si ça vend des billets, je le connecte. Et si vous ne savez pas quoi prendre, je vous oriente vers une option simple."
        : "Yes, whatever you already use: Eventbrite, Luma, Stripe, Weezevent, Shotgun, a simple form, pretty much anything that can be embedded. If it sells tickets, I'll connect it. And if you're not sure what to use, I'll point you to a simple option.",
    },
    {
      q: language === 'fr' ? 'Et si je dois changer des trucs après (programme, horaire, un speaker) ?' : 'What if I need to change things later (agenda, a time, a speaker)?',
      a: language === 'fr'
        ? "Aucun souci, c'est normal avec un événement. Les line-ups bougent, les horaires changent. Une fois qu'on a démarré et que l'acompte est versé, les retouches sont illimitées jusqu'à ce que la page vous plaise. Je ne vais pas y passer trois mois, mais je ne m'arrête pas tant que ce n'est pas au point."
        : "No problem, that's normal with events. Lineups shift, times move. Once we've started and the deposit is in, revisions are unlimited until the page feels right to you. I won't drag it out for months, but I won't stop until you're happy.",
    },
    {
      q: language === 'fr' ? 'Tu fais aussi le contenu réseaux / les posts de lancement ?' : 'Can you do the social content and launch posts too?',
      a: language === 'fr'
        ? "Oui, c'est mon option Launch Pack. Posts de lancement pour LinkedIn, Instagram et Facebook, plus des bannières LinkedIn et une signature email, le tout brandé à votre événement pour que tout forme une seule campagne."
        : "Yes, that's my Launch Pack add-on. Launch posts for LinkedIn, Instagram and Facebook, plus LinkedIn banners and an email signature, all branded to your event so everything looks like one campaign.",
    },
    {
      q: language === 'fr' ? 'Qui es-tu, et tu as déjà fait ça ?' : 'Who are you, and have you done this before?',
      a: language === 'fr'
        ? "Je suis Elie, web designer, je crée des landing pages pour événements. Vous voyez des exemples réels juste sur cette page : ouvrez-les et testez-les sur votre téléphone. Je suis seul aux commandes, donc vous parlez directement à la personne qui construit votre page."
        : "I'm Elie, a web designer who builds landing pages for events. You can see real examples right here on this page, open them and test them on your phone. It's just me, so you talk to the person actually building your page.",
    },
    {
      q: language === 'fr' ? 'Comment se passe le paiement ?' : 'How does payment work?',
      a: language === 'fr'
        ? "Via Stripe, donc sécurisé et simple. 50% pour démarrer, 50% une fois que la page vous plaît. Vous ne payez jamais pour quelque chose que vous n'avez pas vu."
        : "Through Stripe, so it's secure and simple. 50% to get started, 50% once you're happy with the page. You're never paying for something you haven't seen.",
    },
    {
      q: language === 'fr' ? "Et après l'événement ? Tu gères la maintenance ?" : 'What happens after the event? Do you handle maintenance?',
      a: language === 'fr'
        ? "Une fois le solde réglé, je vous transmets tout (le code complet et les fichiers) et la page est 100% à vous. Elle reste en ligne pour votre événement, et après vous pouvez la garder comme récap, la retirer, ou me demander de la rafraîchir pour votre prochaine édition. Pas de frais mensuels imposés, et si vous avez besoin d'un changement plus tard, écrivez-moi."
        : "Once the final payment is in, I hand over everything (the full code and files) and the page is 100% yours. It stays live for your event, and afterward you can keep it up as a recap, take it down, or have me refresh it for your next edition. No forced monthly fees, and if you need a change later, just reach out.",
    },
  ];

  const plans = [
    {
      icon: Zap,
      title: language === 'fr' ? "Landing page d'événement" : 'Event Landing Page',
      desc: language === 'fr' ? "Un événement, une page. Tout ce qu'il faut pour vendre votre événement et inspirer confiance, sur une seule page percutante." : 'One event, one page. Everything you need to sell your event and build trust, on a single high-impact page.',
      features: [
        language === 'fr' ? "Hero visuel fort + identité de l'événement" : 'Bold visual hero + event branding',
        language === 'fr' ? 'Programme, intervenants (photos), lieu & date' : 'Agenda, speakers (photos), venue & date',
        language === 'fr' ? 'Billetterie multi-tarifs (standard, premium, VIP)' : 'Ticket tiers (standard, premium, VIP)',
        language === 'fr' ? 'Preuve sociale : partenaires, chiffres, éditions passées' : 'Social proof: partners, numbers, past editions',
        language === 'fr' ? 'Mobile-first, rapide, optimisée SEO' : 'Mobile-first, fast, SEO-ready',
      ],
      popular: true,
    },
    {
      icon: Crown,
      title: 'Launch Pack',
      desc: language === 'fr' ? "La landing page, plus tout le kit de lancement pour faire du bruit sur les réseaux. Le tout brandé à votre événement." : 'The landing page, plus a full launch kit to make noise on social. All branded to your event.',
      features: [
        language === 'fr' ? 'Tout de la landing page' : 'Everything in the landing page',
        language === 'fr' ? 'Posts de lancement (LinkedIn, Instagram, Facebook)' : 'Launch posts (LinkedIn, Instagram, Facebook)',
        language === 'fr' ? 'Bannières LinkedIn + signature email brandées' : 'Branded LinkedIn banners + email signature',
        language === 'fr' ? 'Visuels cohérents avec la page' : 'Visuals matched to the page',
      ],
      popular: false,
    },
  ];

  return (
    <>
      <SEO page="event" structuredData={[breadcrumbSchema, serviceSchema]} />

      {/* ─── Hero ─── */}
      <section className="relative grain min-h-screen flex items-center justify-center" aria-labelledby="event-hero-heading">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/3 right-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-primary/20 rounded-full blur-[80px] sm:blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 w-40 sm:w-60 h-40 sm:h-60 bg-primary/10 rounded-full blur-[60px] sm:blur-[100px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 -mt-24">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              {language === 'fr' ? "Pour les producteurs d'événements" : 'For event producers'}
            </span>
          </motion.div>
          <motion.header initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h1 id="event-hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-foreground">
                {language === 'fr' ? 'Des pages qui font tourner les têtes' : 'Event pages that turn heads'}
              </span>{' '}
              <span className="inline-block text-primary">
                {language === 'fr' ? 'et remplissent la salle.' : 'and fill the room.'}
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              {language === 'fr'
                ? "Des landing pages modernes et percutantes pour organisateurs d'événements. Pensées pour donner à votre événement l'ampleur qu'il mérite, et livrées vite."
                : 'Bold, modern landing pages for event organizers. Designed to make your event look as big as it is, and delivered fast.'}
            </p>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.4 }}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <MagneticButton>
                  <button onClick={openCalendly} className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all text-base">
                    <Send className="w-5 h-5" aria-hidden="true" />
                    {language === 'fr' ? 'Réserver un appel' : 'Book a call'}
                  </button>
                </MagneticButton>
                <a href="#demos" className="inline-flex items-center gap-1.5 px-6 py-4 text-primary font-semibold text-base hover:underline underline-offset-4">
                  {language === 'fr' ? 'Voir des exemples' : 'See live examples'}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
              <p className="text-xs text-muted-foreground/70 mt-4">
                {language === 'fr' ? 'Design moderne · Livré en quelques jours · Une seule page, pensée pour votre événement' : 'Modern design · Delivered in days · One single page, built for your event'}
              </p>
            </motion.div>
          </motion.header>
          <ScrollArrow />
        </div>
      </section>

      {/* ─── Problem + Solution ─── */}
      <section className="py-12 sm:py-16 md:py-20" aria-labelledby="event-problem-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16 text-center"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 mb-5" aria-hidden="true">
              <Scale className="w-6 h-6 text-primary" />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground mb-4">
              {language === 'fr' ? 'La vraie différence' : 'The honest difference'}
            </p>
            <h2 id="event-problem-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-foreground">
                {language === 'fr' ? 'Deux résultats très différents.' : 'Two very different outcomes.'}
              </span>
              <br />
              <span className="text-primary">
                {language === 'fr' ? 'Lequel est le vôtre ?' : 'Which one is yours?'}
              </span>
            </h2>
            <div className="flex items-center justify-center gap-3 mt-8" aria-hidden="true">
              <div className="w-16 h-px bg-border/50" />
              <div className="w-8 h-8 rounded-full bg-muted border border-border/60 flex items-center justify-center">
                <Scale className="w-3.5 h-3.5 text-muted-foreground/40" />
              </div>
              <div className="w-16 h-px bg-border/50" />
            </div>
          </motion.div>

          {/* Two columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

            {/* Left — Without */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl bg-destructive/5 border border-destructive/15 p-6"
            >
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-destructive/15">
                <div className="w-6 h-6 rounded-full bg-destructive flex items-center justify-center shrink-0" aria-hidden="true">
                  <X className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="font-semibold text-destructive text-sm sm:text-base">
                  {language === 'fr' ? 'Sans page dédiée' : 'Without a dedicated page'}
                </span>
              </div>
              <div className="space-y-2.5">
                {painPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.07 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-destructive/15"
                  >
                    <point.icon className="w-4 h-4 text-destructive/70 shrink-0" aria-hidden="true" />
                    <span className="text-sm text-foreground font-medium">{point.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right — With */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl bg-emerald-500/5 border border-emerald-500/20 p-6"
            >
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-emerald-500/20">
                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shrink-0" aria-hidden="true">
                  <Check className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="font-semibold text-emerald-500 text-sm sm:text-base">
                  {language === 'fr' ? 'Avec votre page event' : 'With your event page'}
                </span>
              </div>
              <div className="space-y-2.5">
                {includes.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-emerald-500/15"
                  >
                    <item.icon className="w-4 h-4 text-emerald-500 shrink-0" aria-hidden="true" />
                    <span className="text-sm text-foreground font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── Demo Visual ─── */}
      <section id="demos" className="py-12 sm:py-16 md:py-20 relative scroll-mt-20" aria-labelledby="event-demo-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-14"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">
              {language === 'fr' ? 'Exemples réels' : 'Real examples'}
            </span>
            <h2 id="event-demo-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <span className="text-foreground">
                {language === 'fr' ? 'Conçues pour rendre votre' : 'Built to make your event'}
              </span>{' '}
              <span className="inline-block text-primary">
                {language === 'fr' ? 'événement incontournable.' : 'impossible to ignore.'}
              </span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              {language === 'fr'
                ? "Des exemples réels de landing pages d'événement : hero visuel fort, programme, intervenants, billetterie. Testez-les sur votre téléphone."
                : 'Real event landing pages: bold visual hero, agenda, speakers, ticketing. Try them on your phone.'}
            </p>
          </motion.div>

          {/* Slider */}
          <DemoSlider
            demos={[
              { url: 'https://apex-summit.vercel.app', label: 'Apex Summit' },
              { url: 'https://chromatic-pi.vercel.app', label: 'Chromatic' },
            ]}
            language={language}
          />
        </div>
      </section>

      {/* ─── How it works — 5 steps ─── */}
      <section className="py-12 sm:py-16 md:py-20" aria-labelledby="event-steps-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 sm:mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4">
              {language === 'fr' ? 'Comment ça marche' : 'How it works'}
            </span>
            <h2 id="event-steps-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-foreground">{language === 'fr' ? 'La démo,' : 'The demo,'}</span>{' '}
              <span className="inline-block text-primary">{language === 'fr' ? 'en cinq étapes.' : 'in five steps.'}</span>
            </h2>
            <p className="text-muted-foreground mt-4 text-base sm:text-lg max-w-lg">
              {language === 'fr'
                ? "Pas d'appel. Pas de réunion. Voici exactement ce qui se passe entre votre formulaire et votre page en ligne."
                : "No call. No meeting. Here's exactly what happens between your form and your page going live."}
            </p>
          </motion.div>
          <div ref={stepsRef} className="relative">
            <div className="absolute left-[30px] sm:left-[42px] top-0 bottom-0 w-px bg-border overflow-hidden">
              <motion.div className="w-full bg-primary origin-top" style={{ scaleY: lineScaleY, height: '100%', boxShadow: '0 0 12px hsl(328 100% 54% / 0.5)' }} />
            </div>
            {steps.map((step, index) => (
              <StepNode key={index} step={step} index={index} total={steps.length} isLast={index === steps.length - 1} scrollYProgress={scrollYProgress} language={language} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── For Who ─── */}
      <section className="py-12 sm:py-16 md:py-20" aria-labelledby="event-forWho-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">
              {language === 'fr' ? 'Pour qui' : 'For who'}
            </span>
            <h2 id="event-forWho-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <span className="text-foreground">{language === 'fr' ? 'Fait pour un type précis' : 'Built for a specific type'}</span>{' '}
              <span className="inline-block text-primary">{language === 'fr' ? 'de producteur.' : 'of producer.'}</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              {language === 'fr'
                ? "On travaille avec des producteurs qui ont une audience à convertir, pas des particuliers qui organisent un mariage."
                : "We work with producers who have an audience to convert, not individuals planning a wedding."}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {forWho.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="glass-card rounded-2xl p-7 flex gap-5 items-start">
                <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                  <item.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-12 sm:py-16 md:py-20" aria-labelledby="event-faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">
              {language === 'fr' ? 'Questions fréquentes' : 'Common questions'}
            </span>
            <h2 id="event-faq-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <span className="text-foreground">{language === 'fr' ? 'Tout ce que' : 'Everything you'}</span>{' '}
              <span className="inline-block text-primary">{language === 'fr' ? 'vous voulez savoir.' : 'want to know.'}</span>
            </h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }} className="glass-card rounded-2xl overflow-hidden border border-border/40">
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full flex items-center justify-between gap-4 p-6 text-left" aria-expanded={openFaq === index}>
                  <span className="font-semibold text-foreground text-base sm:text-lg">{faq.q}</span>
                  <span className="shrink-0 text-primary" aria-hidden="true">
                    {openFaq === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2, ease: 'easeOut' }} className="overflow-hidden">
                      <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pricing ─── */}
      <section className="py-12 sm:py-16 md:py-20" aria-labelledby="event-pricing-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">
              {language === 'fr' ? "L'offre" : 'The offer'}
            </span>
            <h2 id="event-pricing-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <span className="text-foreground">{language === 'fr' ? 'Choisissez ce qui colle' : 'Pick what fits'}</span>{' '}
              <span className="inline-block text-primary">{language === 'fr' ? 'à votre événement.' : 'your event.'}</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              {language === 'fr'
                ? 'On cale le prix ensemble sur un court appel, en fonction de votre événement.'
                : 'We set the price together on a short call, based on your event.'}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className={`glass-card rounded-2xl p-8 flex flex-col relative ${plan.popular ? 'border-2 border-primary neon-border' : 'border border-primary/20'}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                      {language === 'fr' ? 'Recommandé' : 'Recommended'}
                    </span>
                  </div>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-xl ${plan.popular ? 'bg-primary/20' : 'bg-muted'}`} aria-hidden="true">
                    <plan.icon className={`w-5 h-5 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{plan.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{plan.desc}</p>
                <ul className="space-y-3 flex-1 mb-8" aria-label={`${plan.title} features`}>
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button onClick={openCalendly} className={`w-full py-3 px-6 rounded-xl font-semibold text-sm transition-all text-center block ${plan.popular ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'border border-primary/40 text-primary hover:bg-primary/10'}`}>
                  {language === 'fr' ? 'Réserver un appel' : 'Book a call'}
                </button>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="max-w-3xl mx-auto mt-4">
            <div className="glass-card rounded-2xl px-8 py-6 border border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-foreground flex items-center gap-2">
                  <Timer className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                  {language === 'fr' ? 'Événement dans l\'urgence ? Option Rush.' : 'Event on a tight deadline? Rush option.'}
                </p>
                <p className="text-sm text-muted-foreground mt-0.5">{language === 'fr' ? 'Livraison express en 24-72h en supplément. Et si besoin, je peux aussi gérer le récap après l\'événement.' : 'Express delivery in 24-72h as an add-on. And if needed, I can handle the post-event recap too.'}</p>
              </div>
              <button onClick={openCalendly} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-primary/40 text-primary font-semibold text-sm hover:bg-primary/10 transition-all shrink-0">
                {language === 'fr' ? 'En discuter' : "Let's talk"}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Apply Form ─── */}
      <section id="apply" className="py-12 sm:py-16 md:py-20 relative overflow-hidden" aria-labelledby="event-apply-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/8 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">
              {language === 'fr' ? 'Vous préférez sans appel ?' : 'Prefer to skip the call?'}
            </span>
            <h2 id="event-apply-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              <span className="text-foreground">{language === 'fr' ? 'Envoyez-moi le brief' : 'Send me your event brief'}</span>{' '}
              <span className="inline-block text-primary">{language === 'fr' ? 'de votre événement.' : 'instead.'}</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              {language === 'fr'
                ? "Remplissez ce formulaire. Je reviens vers vous sous 24h, et la première version est prête dans les 48h. Plus vous donnez de détails, mieux je construis votre page."
                : 'Fill in this form. I get back to you within 24h, and a first version is ready within 48h. The more detail you give, the better I build your page.'}
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 neon-border">
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 text-emerald-500" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{language === 'fr' ? 'Demande reçue.' : 'Request received.'}</h3>
                <p className="text-muted-foreground max-w-sm mx-auto">
                  {language === 'fr'
                    ? "Je reviens vers vous sous 24h pour confirmer le brief. La page sera prête dans les 48h."
                    : "I'll get back to you within 24h to confirm the brief. The page will be ready within 48 hours."}
                </p>
                <p className="text-xs text-muted-foreground/60">{language === 'fr' ? 'Questions ? Écrivez à web@elieageron.com' : 'Questions? Email web@elieageron.com'}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Progress bar */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {language === 'fr' ? `Étape ${currentStep} sur ${TOTAL_STEPS}` : `Step ${currentStep} of ${TOTAL_STEPS}`}
                    </span>
                    <span className="text-xs text-muted-foreground/60">
                      {[
                        language === 'fr' ? 'Vous' : 'You',
                        language === 'fr' ? "L'événement" : 'The event',
                        language === 'fr' ? 'Situation actuelle' : 'Current setup',
                        language === 'fr' ? 'Détails' : 'Details',
                      ][currentStep - 1]}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      animate={{ width: `${(currentStep / TOTAL_STEPS) * 100}%` }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                    />
                  </div>
                </div>

                {/* Step content */}
                <div className="overflow-hidden min-h-[320px]">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, x: stepDirection * 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -stepDirection * 40 }}
                      transition={{ duration: 0.22, ease: 'easeOut' }}
                    >

                      {/* Step 1 — Contact */}
                      {currentStep === 1 && (
                        <div className="space-y-5">
                          <div className="mb-6">
                            <h3 className="text-xl font-bold text-foreground mb-1">{language === 'fr' ? 'Qui êtes-vous ?' : 'Who are you?'}</h3>
                            <p className="text-sm text-muted-foreground">{language === 'fr' ? 'Juste votre prénom et votre email pour commencer.' : 'Just your name and email to get started.'}</p>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="f-name">{language === 'fr' ? 'Votre prénom' : 'Your first name'} <span className="text-primary" aria-hidden="true">*</span></Label>
                            <Input id="f-name" type="text" required maxLength={100} placeholder="Thomas" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="f-email">Email <span className="text-primary" aria-hidden="true">*</span></Label>
                            <Input id="f-email" type="email" required maxLength={255} placeholder="thomas@vmproducers.com" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                          </div>
                        </div>
                      )}

                      {/* Step 2 — Event details */}
                      {currentStep === 2 && (
                        <div className="space-y-5">
                          <div className="mb-6">
                            <h3 className="text-xl font-bold text-foreground mb-1">{language === 'fr' ? "Parlez-moi de votre événement" : 'Tell me about your event'}</h3>
                            <p className="text-sm text-muted-foreground">{language === 'fr' ? "Ces infos me permettent de construire une page qui colle à votre réalité." : "This lets me build a page that fits your actual event."}</p>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="f-event-name">{language === 'fr' ? "Nom de l'événement" : 'Event name'} <span className="text-primary" aria-hidden="true">*</span></Label>
                            <Input id="f-event-name" type="text" required maxLength={150} placeholder={language === 'fr' ? "Ex : The Sound Experience" : "e.g. The Sound Experience"} value={formData.eventName} onChange={e => setFormData({ ...formData, eventName: e.target.value })} />
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="f-event-type">{language === 'fr' ? "Type d'événement" : 'Event type'} <span className="text-primary" aria-hidden="true">*</span></Label>
                              <select id="f-event-type" required value={formData.eventType} onChange={e => setFormData({ ...formData, eventType: e.target.value })} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground">
                                <option value="" disabled>{language === 'fr' ? 'Choisissez...' : 'Choose...'}</option>
                                {(language === 'fr'
                                  ? ['Conférence / Sommet', 'Concert / Soirée', 'Événement corporate', 'Festival', 'Formation / Atelier', 'Autre']
                                  : ['Conference / Summit', 'Concert / Party', 'Corporate event', 'Festival', 'Training / Workshop', 'Other']
                                ).map(t => <option key={t} value={t}>{t}</option>)}
                              </select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="f-event-date">{language === 'fr' ? "Date de l'événement" : 'Event date'} <span className="text-primary" aria-hidden="true">*</span></Label>
                              <Input id="f-event-date" type="date" required value={formData.eventDate} onChange={e => setFormData({ ...formData, eventDate: e.target.value })} />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="f-city">{language === 'fr' ? 'Ville / Lieu' : 'City / Venue'} <span className="text-primary" aria-hidden="true">*</span></Label>
                              <Input id="f-city" type="text" required maxLength={150} placeholder={language === 'fr' ? "Ex : Paris, Zénith" : "e.g. Paris, Zenith"} value={formData.eventCity} onChange={e => setFormData({ ...formData, eventCity: e.target.value })} />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="f-attendees">{language === 'fr' ? 'Participants attendus' : 'Expected attendees'}</Label>
                              <select id="f-attendees" value={formData.expectedAttendees} onChange={e => setFormData({ ...formData, expectedAttendees: e.target.value })} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground">
                                <option value="">{language === 'fr' ? 'Choisissez...' : 'Choose...'}</option>
                                {(language === 'fr'
                                  ? ['Moins de 50', '50 à 200', '200 à 500', '500 à 1 000', 'Plus de 1 000']
                                  : ['Under 50', '50 to 200', '200 to 500', '500 to 1,000', 'Over 1,000']
                                ).map(t => <option key={t} value={t}>{t}</option>)}
                              </select>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Step 3 — Current setup */}
                      {currentStep === 3 && (
                        <div className="space-y-6">
                          <div className="mb-6">
                            <h3 className="text-xl font-bold text-foreground mb-1">{language === 'fr' ? 'Votre situation actuelle' : 'Your current setup'}</h3>
                            <p className="text-sm text-muted-foreground">{language === 'fr' ? "Pour ne pas partir de zéro sur ce qui existe déjà." : "So I don't start from scratch on what already exists."}</p>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="f-current-site">
                              {language === 'fr' ? 'Site ou page actuelle' : 'Current site or page'}{' '}
                              <span className="text-muted-foreground/60 text-xs">({language === 'fr' ? 'optionnel' : 'optional'})</span>
                            </Label>
                            <Input id="f-current-site" type="url" maxLength={255} placeholder="https://..." value={formData.currentSite} onChange={e => setFormData({ ...formData, currentSite: e.target.value })} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="f-ticketing">{language === 'fr' ? 'Billetterie utilisée' : 'Ticketing system'} <span className="text-primary" aria-hidden="true">*</span></Label>
                            <select id="f-ticketing" required value={formData.ticketingSystem} onChange={e => setFormData({ ...formData, ticketingSystem: e.target.value })} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground">
                              <option value="" disabled>{language === 'fr' ? 'Choisissez...' : 'Choose...'}</option>
                              {['Eventbrite', 'Billetweb', 'Shotgun', 'Weezevent',
                                language === 'fr' ? 'Formulaire simple' : 'Simple form',
                                language === 'fr' ? 'Pas encore / À définir' : 'Not yet / TBD',
                                language === 'fr' ? 'Autre' : 'Other',
                              ].map(t => <option key={t} value={t}>{t}</option>)}
                            </select>
                          </div>
                          <div className="space-y-2">
                            <Label>{language === 'fr' ? 'Visuels / photos disponibles ?' : 'Visuals / photos available?'} <span className="text-primary" aria-hidden="true">*</span></Label>
                            <div className="flex gap-2">
                              {(language === 'fr'
                                ? [{ v: 'yes', l: 'Oui' }, { v: 'inProgress', l: 'En cours' }, { v: 'no', l: 'Non' }]
                                : [{ v: 'yes', l: 'Yes' }, { v: 'inProgress', l: 'In progress' }, { v: 'no', l: 'No' }]
                              ).map(({ v, l }) => (
                                <button key={v} type="button" onClick={() => setFormData({ ...formData, hasVisuals: v })}
                                  className={`flex-1 py-2.5 px-3 rounded-xl border text-sm font-medium transition-all ${formData.hasVisuals === v ? 'bg-primary text-primary-foreground border-primary' : 'border-input bg-background text-foreground hover:border-primary/50'}`}>
                                  {l}
                                </button>
                              ))}
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label>{language === 'fr' ? 'Intervenants / programme défini ?' : 'Speakers / lineup defined?'} <span className="text-primary" aria-hidden="true">*</span></Label>
                            <div className="flex gap-2">
                              {(language === 'fr'
                                ? [{ v: 'yes', l: 'Oui' }, { v: 'inProgress', l: 'En cours' }, { v: 'no', l: 'Non' }]
                                : [{ v: 'yes', l: 'Yes' }, { v: 'inProgress', l: 'In progress' }, { v: 'no', l: 'No' }]
                              ).map(({ v, l }) => (
                                <button key={v} type="button" onClick={() => setFormData({ ...formData, hasLineup: v })}
                                  className={`flex-1 py-2.5 px-3 rounded-xl border text-sm font-medium transition-all ${formData.hasLineup === v ? 'bg-primary text-primary-foreground border-primary' : 'border-input bg-background text-foreground hover:border-primary/50'}`}>
                                  {l}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Step 4 — Details */}
                      {currentStep === 4 && (
                        <div className="space-y-5">
                          <div className="mb-6">
                            <h3 className="text-xl font-bold text-foreground mb-1">{language === 'fr' ? 'Dernière ligne droite' : 'Last stretch'}</h3>
                            <p className="text-sm text-muted-foreground">{language === 'fr' ? 'Plus vous en dites, mieux je construis.' : 'The more you tell me, the better I build.'}</p>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="f-description">
                              {language === 'fr' ? "Décrivez votre événement en quelques phrases" : 'Describe your event in a few sentences'} <span className="text-primary" aria-hidden="true">*</span>
                            </Label>
                            <p className="text-xs text-muted-foreground/70">
                              {language === 'fr' ? "Audience cible, ambiance, artistes / intervenants principaux, ce qui rend votre événement unique." : "Target audience, vibe, main artists / speakers, what makes your event unique."}
                            </p>
                            <textarea
                              id="f-description"
                              required
                              maxLength={600}
                              rows={4}
                              placeholder={language === 'fr'
                                ? "Ex : Conférence tech B2B pour 300 décideurs, focus IA & startups. Intervenants : 3 CEOs de licornes françaises. Public : DSI et fondateurs."
                                : "e.g. B2B tech conference for 300 decision-makers, focused on AI & startups. Speakers: 3 French unicorn CEOs. Audience: CTOs and founders."}
                              value={formData.eventDescription}
                              onChange={e => setFormData({ ...formData, eventDescription: e.target.value })}
                              className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none mt-1"
                            />
                            <p className="text-right text-xs text-muted-foreground/50">{formData.eventDescription.length}/600</p>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="f-requests">
                              {language === 'fr' ? "Une chose à absolument avoir sur la page" : 'One thing you absolutely want on the page'}{' '}
                              <span className="text-muted-foreground/60 text-xs">({language === 'fr' ? 'optionnel' : 'optional'})</span>
                            </Label>
                            <Input id="f-requests" type="text" maxLength={300}
                              placeholder={language === 'fr' ? "Ex : un compte à rebours, une section VIP, une vidéo teaser..." : "e.g. countdown timer, VIP section, teaser video..."}
                              value={formData.specificRequests} onChange={e => setFormData({ ...formData, specificRequests: e.target.value })} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="f-site-ref">
                              {language === 'fr' ? 'Un site ou événement dont vous aimez le design' : 'A site or event whose design you like'}{' '}
                              <span className="text-muted-foreground/60 text-xs">({language === 'fr' ? 'optionnel' : 'optional'})</span>
                            </Label>
                            <Input id="f-site-ref" type="text" maxLength={255}
                              placeholder={language === 'fr' ? "Ex : tomorrowland.com, We Love Green..." : "e.g. tomorrowland.com, Coachella..."}
                              value={formData.siteReference} onChange={e => setFormData({ ...formData, siteReference: e.target.value })} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="f-visual-style">
                              {language === 'fr' ? 'Ambiance visuelle souhaitée' : 'Desired visual style'}{' '}
                              <span className="text-muted-foreground/60 text-xs">({language === 'fr' ? 'optionnel' : 'optional'})</span>
                            </Label>
                            <select id="f-visual-style" value={formData.visualStyle} onChange={e => setFormData({ ...formData, visualStyle: e.target.value })}
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground">
                              <option value="">{language === 'fr' ? 'Choisissez...' : 'Choose...'}</option>
                              {(language === 'fr'
                                ? ['Sombre & intense', 'Minimal & épuré', 'Coloré & festif', 'Élégant & premium']
                                : ['Dark & intense', 'Minimal & clean', 'Colorful & festive', 'Elegant & premium']
                              ).map(t => <option key={t} value={t}>{t}</option>)}
                            </select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="f-colors">
                              {language === 'fr' ? 'Couleurs principales de votre événement' : 'Main colors of your event'}{' '}
                              <span className="text-muted-foreground/60 text-xs">({language === 'fr' ? 'optionnel' : 'optional'})</span>
                            </Label>
                            <Input id="f-colors" type="text" maxLength={150}
                              placeholder={language === 'fr' ? "Ex : rouge et noir, violet néon, blanc et doré..." : "e.g. red and black, neon purple, white and gold..."}
                              value={formData.colorPalette} onChange={e => setFormData({ ...formData, colorPalette: e.target.value })} />
                          </div>
                        </div>
                      )}

                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation */}
                <div className="flex gap-3 mt-8">
                  {currentStep > 1 && (
                    <button type="button" onClick={goBack}
                      className="flex-1 py-3 px-4 rounded-xl border border-input text-sm font-semibold text-foreground hover:bg-muted transition-all">
                      {language === 'fr' ? '← Retour' : '← Back'}
                    </button>
                  )}
                  {currentStep < TOTAL_STEPS ? (
                    <button type="button" onClick={goNext} disabled={!canProceed()}
                      className="flex-1 py-3 px-4 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all disabled:opacity-40 disabled:cursor-not-allowed">
                      {language === 'fr' ? 'Continuer →' : 'Continue →'}
                    </button>
                  ) : (
                    <button type="submit" disabled={isSubmitting || !canProceed()}
                      className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all disabled:opacity-60 disabled:cursor-not-allowed text-sm sm:text-base">
                      {isSubmitting
                        ? <><div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />{language === 'fr' ? 'Envoi...' : 'Sending...'}</>
                        : <><Send className="w-4 h-4" aria-hidden="true" />{language === 'fr' ? 'Demander ma démo gratuite' : 'Get my free demo'}</>
                      }
                    </button>
                  )}
                </div>

                {currentStep === TOTAL_STEPS && (
                  <p className="text-center text-xs text-muted-foreground/60 mt-4">
                    {language === 'fr' ? 'Réponse sous 24h · Sans engagement · Démo 7 jours offerte' : 'Reply within 24h · No commitment · 7-day free demo'}
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <InternalLinks currentPage="event" />
      <ContactMethodsSection />
    </>
  );
};

export default EventProduction;
