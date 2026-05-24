import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Check, Zap, Crown, TrendingDown, MousePointerClick,
  Smartphone, Timer, ArrowRight, Send, Plus, Minus,
  Users, Music, Mic, Building,
  ClipboardList, Wrench, Eye, MessageSquare, BadgeCheck,
  Target, Link2, Star, Search, BarChart3, ExternalLink, Scale, X,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
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

const EventProduction = () => {
  const { language } = useLanguage();
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
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source: 'event-production', ...formData }),
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
    name: language === 'fr' ? "Site Web pour Producteurs d'Événements" : 'Event Production Website Design',
    description: language === 'fr' ? "Pages d'inscription optimisées pour convertir le trafic marketing en bookings événementiels." : 'Optimized registration pages that convert your event marketing traffic into actual bookings.',
    url: 'https://elieageron.com/event-production',
    provider: { '@type': 'Person', name: 'Elie Ageron', url: 'https://elieageron.com' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: language === 'fr' ? 'Offres Sites Événementiels' : 'Event Website Offers',
      itemListElement: [
        { '@type': 'Offer', name: language === 'fr' ? 'Page Événement' : 'Event Page', price: '1500', priceCurrency: 'EUR' },
        { '@type': 'Offer', name: language === 'fr' ? 'Site Événementiel' : 'Event Website', price: '3000', priceCurrency: 'EUR' },
      ],
    },
  };

  const painPoints = [
    {
      icon: TrendingDown,
      title: language === 'fr' ? 'Budget pub dépensé, places vides.' : 'Ads paid. Seats empty.',
      desc: language === 'fr'
        ? "Campagnes Instagram, Meta ads, TikTok : vous payez pour les attirer. Une page générique les renvoie d'où ils viennent."
        : "Instagram, Meta, TikTok. You pay to bring them in. A generic page sends them straight back.",
    },
    {
      icon: MousePointerClick,
      title: language === 'fr' ? "Trop d'étapes, zéro inscription." : 'Too many steps. Zero registrations.',
      desc: language === 'fr'
        ? "Chaque étape inutile entre l'arrivée et le booking vous coûte une place. Les gens ne cherchent pas."
        : "Every unnecessary step between landing and booking costs you a seat. People don't go looking.",
    },
    {
      icon: Smartphone,
      title: language === 'fr' ? 'Mobile cassé, audience perdue.' : 'Broken on mobile. Audience gone.',
      desc: language === 'fr'
        ? "72% des gens découvrent un événement sur leur téléphone. Une page qui casse, ou qui charge lentement, les fait partir."
        : "72% discover events on their phone. A page that breaks or loads slowly loses them immediately.",
    },
    {
      icon: Timer,
      title: language === 'fr' ? "Pas d'urgence, pas d'inscription." : 'No urgency. No registration.',
      desc: language === 'fr'
        ? "Les visiteurs qui repartent pour y réfléchir ne reviennent presque jamais. Sans compte à rebours, rien ne pousse à agir."
        : "Visitors who leave to think about it almost never come back. Without a countdown, nothing drives action.",
    },
  ];

  const includes = [
    { icon: Target,    text: language === 'fr' ? 'Page de registration haute conversion' : 'High-conversion registration page' },
    { icon: Smartphone,text: language === 'fr' ? 'Design mobile-first, rapide à charger' : 'Mobile-first, fast-loading design' },
    { icon: Timer,     text: language === 'fr' ? "Compte à rebours et éléments d'urgence" : 'Countdown timer and urgency elements' },
    { icon: Link2,     text: language === 'fr' ? 'Intégration formulaire et billetterie' : 'Form and ticketing system integration' },
    { icon: Users,     text: language === 'fr' ? 'Section intervenants et programme' : 'Speakers section and event schedule' },
    { icon: Star,      text: language === 'fr' ? 'Preuves sociales et témoignages' : 'Social proof and testimonials' },
    { icon: Search,    text: language === 'fr' ? 'SEO optimisé pour votre événement' : 'SEO optimized for your event' },
    { icon: BarChart3, text: language === 'fr' ? 'Analytics et suivi des conversions' : 'Analytics and conversion tracking' },
  ];

  const steps = [
    {
      icon: ClipboardList,
      number: '01', label: language === 'fr' ? 'BRIEF' : 'BRIEF',
      title: language === 'fr' ? 'Vous remplissez le formulaire.' : 'You fill in the form.',
      desc: language === 'fr'
        ? "Type d'événement, date, site actuel. C'est tout. Deux minutes, pas d'appel, pas de réunion de présentation."
        : "Event type, date, current site. That's it. Two minutes, no call, no kickoff meeting.",
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
      q: language === 'fr' ? "C'est quoi exactement ce 'trial de 7 jours' ?" : "What exactly is the '7-day free trial'?",
      a: language === 'fr'
        ? "On construit votre page en 48h et on la met en ligne sur une URL privée. Vous avez 7 jours pour la tester : la regarder sur mobile, la partager avec votre équipe, vérifier que tout colle. À la fin, vous décidez."
        : "We build your page in 48 hours and host it on a private URL. You have 7 days to test it: check it on mobile, share it with your team, make sure everything fits. At the end, you decide.",
    },
    {
      q: language === 'fr' ? "Qu'est-ce qui se passe au bout de 7 jours ?" : "What happens after 7 days?",
      a: language === 'fr'
        ? "Si la page vous convient, vous payez et vous récupérez le code source complet : hébergement, domaine, tout vous appartient. Sinon, on retire la page. Aucune facturation automatique. Aucun suivi commercial."
        : "If the page works for you, you pay and get the full source code: hosting, domain, everything is yours. If not, we take it down. No automatic billing. No follow-up sales call.",
    },
    {
      q: language === 'fr' ? "J'ai besoin de donner ma carte de crédit pour commencer ?" : "Do I need a credit card to get started?",
      a: language === 'fr'
        ? "Non. Vous remplissez le formulaire, on construit la page, vous la testez 7 jours. Le paiement n'intervient que si vous décidez de la garder. Pas de carte, pas d'engagement, pas de surprise."
        : "No. You fill in the form, we build the page, you test it for 7 days. Payment only comes if you decide to keep it. No card, no commitment, no surprise.",
    },
    {
      q: language === 'fr' ? "Comment est-ce qu'on démarre ?" : "How do we get started?",
      a: language === 'fr'
        ? "Remplissez le formulaire en bas de cette page. Deux minutes, pas d'appel nécessaire. On revient vers vous sous 24h pour confirmer le brief, et la page est prête dans les 48h qui suivent."
        : "Fill in the form at the bottom of this page. Two minutes, no call needed. We get back to you within 24h to confirm the brief, and the page is ready within 48 hours.",
    },
    {
      q: language === 'fr' ? 'En combien de temps est construite la page ?' : 'How fast is the page built?',
      a: language === 'fr'
        ? "48 heures après la confirmation du brief. Pour un site complet multi-pages, comptez 7 jours. La date de votre événement ne bougera pas à cause de nous."
        : "48 hours after the brief is confirmed. For a full multi-page site, allow 7 days. Your event date won't slip because of us.",
    },
    {
      q: language === 'fr' ? "Je n'ai pas encore de texte rédigé. C'est un problème ?" : "I don't have copy written yet. Is that a problem?",
      a: language === 'fr'
        ? "Non. On part du brief que vous remplissez dans le formulaire. Les titres, les accroches, les arguments : on les écrit pour vous. Vous validez avant la mise en ligne."
        : "No. We work from the brief you fill in the form. Headlines, hooks, arguments: we write them. You approve before it goes live.",
    },
    {
      q: language === 'fr' ? "C'est un template ou quelque chose de fait pour mon événement ?" : 'Is it a template or built for my event?',
      a: language === 'fr'
        ? "Fait pour votre événement spécifique. Votre programme, vos intervenants, votre audience, votre billetterie. Pas un thème WordPress changé en 20 minutes."
        : "Built for your specific event. Your lineup, your speakers, your audience, your ticketing system. Not a WordPress theme swapped in 20 minutes.",
    },
    {
      q: language === 'fr' ? 'Vous intégrez ma billetterie existante ?' : 'Do you integrate with my existing ticketing system?',
      a: language === 'fr'
        ? "Oui. Billetweb, Eventbrite, Shotgun, Weezevent, ou un formulaire simple. On s'adapte à ce que vous avez déjà en place."
        : "Yes. Billetweb, Eventbrite, Shotgun, Weezevent, or a simple form. We adapt to whatever you already use.",
    },
    {
      q: language === 'fr' ? "Je garde la propriété de la page après la livraison ?" : 'Do I own the page after delivery?',
      a: language === 'fr'
        ? "Oui. Code source complet, hébergement sur votre serveur, domaine à votre nom. Tout vous appartient dès le paiement. On ne garde aucun accès."
        : "Yes. Full source code, hosted on your server, domain in your name. Everything is yours from the moment you pay. We keep no access.",
    },
  ];

  const plans = [
    {
      icon: Zap,
      title: language === 'fr' ? 'Page Événement' : 'Event Page',
      price: '1 500€',
      desc: language === 'fr' ? "Un événement, une page. Chaque euro de pub dépensé a maintenant un endroit utile où atterrir." : 'One event, one page. Every euro you spent on ads now has somewhere useful to land.',
      features: [
        language === 'fr' ? '1 page de registration optimisée' : '1 optimized registration page',
        language === 'fr' ? 'Compte à rebours et urgence' : 'Countdown timer and urgency',
        language === 'fr' ? 'Mobile-first et chargement rapide' : 'Mobile-first and fast-loading',
        language === 'fr' ? 'Formulaire ou billetterie intégré' : 'Form or ticketing integrated',
      ],
      popular: false,
    },
    {
      icon: Crown,
      title: language === 'fr' ? 'Site Événementiel' : 'Event Website',
      price: '3 000€',
      desc: language === 'fr' ? "Votre marque, votre calendrier, votre taux de conversion. Pour les producteurs qui organisent plus d'un événement par an." : 'Your brand, your calendar, your conversion rate. For producers who run more than one event a year.',
      features: [
        language === 'fr' ? 'Tout de la Page Événement' : 'Everything in Event Page',
        language === 'fr' ? "Jusqu'à 5 pages (accueil, événements, sponsors, contact)" : 'Up to 5 pages (home, events, sponsors, contact)',
        language === 'fr' ? 'Page dédiée par événement' : 'Dedicated page per event',
        language === 'fr' ? 'Section intervenants et programme' : 'Speakers and schedule sections',
        language === 'fr' ? 'Galerie photos et preuves sociales' : 'Photo gallery and social proof',
        language === 'fr' ? 'Analytics et suivi des conversions' : 'Analytics and conversion tracking',
      ],
      popular: true,
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 -mt-16 sm:-mt-32">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              {language === 'fr' ? "Pour les producteurs d'événements" : 'For event producers'}
            </span>
          </motion.div>
          <motion.header initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h1 id="event-hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-foreground">
                {language === 'fr' ? 'Transformez votre trafic event' : 'Turn your event traffic'}
              </span>{' '}
              <span className="inline-block text-primary">
                {language === 'fr' ? 'en inscriptions.' : 'into registrations.'}
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              {language === 'fr'
                ? "Vous avez déjà payé pour les attirer. On s'assure qu'ils ne repartent pas les mains vides."
                : "You already paid to bring them there. We make sure they don't leave without registering."}
            </p>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.4 }}>
              <MagneticButton>
                <a href="#apply" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all text-base">
                  <Send className="w-5 h-5" aria-hidden="true" />
                  {language === 'fr' ? 'Obtenir ma démo gratuite' : 'Get my free demo'}
                </a>
              </MagneticButton>
              <p className="text-xs text-muted-foreground/70 mt-3">
                {language === 'fr' ? 'Sans appel. Sans engagement. Vous payez si elle vous convient.' : 'No call. No commitment. You pay if you like it.'}
              </p>
            </motion.div>
          </motion.header>
        </div>
        <ScrollArrow />
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
      <section className="py-12 sm:py-16 md:py-20 relative" aria-labelledby="event-demo-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-14"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">
              {language === 'fr' ? 'Ce que ça donne' : 'What it looks like'}
            </span>
            <h2 id="event-demo-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <span className="text-foreground">
                {language === 'fr' ? 'Une page conçue pour' : 'A page built to'}
              </span>{' '}
              <span className="inline-block text-primary">
                {language === 'fr' ? "que l'on s'inscrive." : 'make people register.'}
              </span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              {language === 'fr'
                ? "Un exemple concret de ce qu'on construit pour vos événements. Design responsive, compte à rebours, section intervenants."
                : 'A concrete example of what we build for your events. Responsive design, countdown timer, speakers section.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

            {/* Demo 1 — Apex Summit */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-3"
            >
              <a
                href="https://apex-summit.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block group relative rounded-2xl overflow-hidden border border-border/50 shadow-xl shadow-primary/5 hover:border-primary/30 transition-all duration-500"
                aria-label={language === 'fr' ? 'Voir la démo Apex Summit' : 'View Apex Summit demo'}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" aria-hidden="true" />
                <div className="bg-muted/60 px-4 py-3 flex items-center gap-3 border-b border-border/30">
                  <div className="flex gap-1.5" aria-hidden="true">
                    <div className="w-3 h-3 rounded-full bg-red-400/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/50" />
                    <div className="w-3 h-3 rounded-full bg-green-400/50" />
                  </div>
                  <div className="flex-1 mx-2">
                    <div className="bg-background/50 rounded-md px-3 py-1 text-xs text-muted-foreground/70 text-center max-w-xs mx-auto">
                      apex-summit.vercel.app
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary transition-colors" aria-hidden="true" />
                </div>
                <div className="relative overflow-hidden" style={{ height: '460px' }}>
                  <iframe
                    src="https://apex-summit.vercel.app"
                    title={language === 'fr' ? 'Démo site événementiel Apex Summit' : 'Apex Summit event website demo'}
                    className="w-full h-full border-0 pointer-events-none"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 text-primary">
                      <span className="text-sm font-medium">{language === 'fr' ? 'Voir le site' : 'View site'}</span>
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </a>
              <div className="text-center">
                <a href="https://apex-summit.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors group">
                  Apex Summit
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                </a>
              </div>
            </motion.div>

            {/* Demo 2 — Chromatic */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-3"
            >
              <a
                href="https://chromatic-pi.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block group relative rounded-2xl overflow-hidden border border-border/50 shadow-xl shadow-primary/5 hover:border-primary/30 transition-all duration-500"
                aria-label={language === 'fr' ? 'Voir la démo Chromatic' : 'View Chromatic demo'}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" aria-hidden="true" />
                <div className="bg-muted/60 px-4 py-3 flex items-center gap-3 border-b border-border/30">
                  <div className="flex gap-1.5" aria-hidden="true">
                    <div className="w-3 h-3 rounded-full bg-red-400/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/50" />
                    <div className="w-3 h-3 rounded-full bg-green-400/50" />
                  </div>
                  <div className="flex-1 mx-2">
                    <div className="bg-background/50 rounded-md px-3 py-1 text-xs text-muted-foreground/70 text-center max-w-xs mx-auto">
                      chromatic-pi.vercel.app
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary transition-colors" aria-hidden="true" />
                </div>
                <div className="relative overflow-hidden" style={{ height: '460px' }}>
                  <iframe
                    src="https://chromatic-pi.vercel.app"
                    title={language === 'fr' ? 'Démo site événementiel Chromatic' : 'Chromatic event website demo'}
                    className="w-full h-full border-0 pointer-events-none"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 text-primary">
                      <span className="text-sm font-medium">{language === 'fr' ? 'Voir le site' : 'View site'}</span>
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </a>
              <div className="text-center">
                <a href="https://chromatic-pi.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors group">
                  Chromatic
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                </a>
              </div>
            </motion.div>

          </div>
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
              {language === 'fr' ? 'Tarifs' : 'Pricing'}
            </span>
            <h2 id="event-pricing-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <span className="text-foreground">{language === 'fr' ? 'Simple, transparent,' : 'Simple, transparent,'}</span>{' '}
              <span className="inline-block text-primary">{language === 'fr' ? 'sans surprise.' : 'no surprises.'}</span>
            </h2>
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
                <div className="mb-4"><span className="text-4xl font-thin text-primary">{plan.price}</span></div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{plan.desc}</p>
                <ul className="space-y-3 flex-1 mb-8" aria-label={`${plan.title} features`}>
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#apply" className={`w-full py-3 px-6 rounded-xl font-semibold text-sm transition-all text-center block ${plan.popular ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'border border-primary/40 text-primary hover:bg-primary/10'}`}>
                  {language === 'fr' ? 'Obtenir ma démo' : 'Get my demo'}
                </a>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="max-w-3xl mx-auto mt-4">
            <div className="glass-card rounded-2xl px-8 py-6 border border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-foreground">{language === 'fr' ? 'Besoin de quelque chose de plus complexe ?' : 'Need something more complex?'}</p>
                <p className="text-sm text-muted-foreground mt-0.5">{language === 'fr' ? 'Plateforme multi-événements, automation, dashboard. On établit un devis sur mesure.' : 'Multi-event platform, automation, dashboard. We put together a custom proposal.'}</p>
              </div>
              <a href="#apply" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-primary/40 text-primary font-semibold text-sm hover:bg-primary/10 transition-all shrink-0">
                {language === 'fr' ? 'En discuter' : "Let's talk"}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
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
              {language === 'fr' ? 'Démo gratuite · 7 jours' : 'Free demo · 7 days'}
            </span>
            <h2 id="event-apply-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              <span className="text-foreground">{language === 'fr' ? 'Votre page en 48h.' : 'Your page in 48h.'}</span>{' '}
              <span className="inline-block text-primary">{language === 'fr' ? 'Vous payez si elle vous convient.' : 'You pay if you like it.'}</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              {language === 'fr'
                ? "Remplissez ce formulaire. Plus vous donnez de détails, mieux je construis votre page."
                : 'Fill in this form. The more detail you give, the better I build your page.'}
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
