import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MessageSquare, ShieldCheck, MousePointerClick, Sparkles, Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCalendly } from '@/contexts/CalendlyContext';
import { useToast } from '@/hooks/use-toast';
import SEO from '@/components/SEO';
import InternalLinks from '@/components/InternalLinks';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// Same Google Apps Script endpoint already used by /get-started and the contact form.
// Leads land in Elie's Google Sheet (and notification email if configured).
const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxu13-AnjyCaXr818JdA-hCSohWEE2ii1ELGXM-PeQ_sGYYB8rvEhXr_NYh7YWedA4qyg/exec';

type Axis = 'message' | 'trust' | 'convert';
type Lang = 'fr' | 'en';

interface Option {
  fr: string;
  en: string;
  points: number;
}
interface ScoredQuestion {
  id: string;
  kind: 'scored';
  axis: Axis;
  fr: string;
  en: string;
  options: Option[];
}
interface ChoiceQuestion {
  id: string;
  kind: 'choice';
  fr: string;
  en: string;
  options: { fr: string; en: string }[];
}
type Question = ScoredQuestion | ChoiceQuestion;

// 7 scored "best-practice" questions across 3 axes + 3 qualification questions.
const QUESTIONS: Question[] = [
  {
    id: 'q_clarity',
    kind: 'scored',
    axis: 'message',
    fr: "En arrivant sur votre site, comprend-on en 5 secondes ce que vous proposez et pour qui ?",
    en: 'Within 5 seconds of landing on your site, is it clear what you offer and for whom?',
    options: [
      { fr: "Oui, c'est limpide", en: 'Yes, crystal clear', points: 3 },
      { fr: 'À peu près', en: 'More or less', points: 2 },
      { fr: 'Pas vraiment', en: 'Not really', points: 1 },
      { fr: "Je n'ai pas encore de site", en: "I don't have a site yet", points: 0 },
    ],
  },
  {
    id: 'q_headline',
    kind: 'scored',
    axis: 'message',
    fr: 'Votre titre principal met-il en avant un bénéfice client (pas seulement votre métier) ?',
    en: 'Does your main headline highlight a client benefit (not just what you do)?',
    options: [
      { fr: 'Oui, un vrai bénéfice', en: 'Yes, a real benefit', points: 3 },
      { fr: 'Il décrit surtout mon métier', en: 'It mostly describes my job', points: 1 },
      { fr: 'Je ne sais pas', en: "I'm not sure", points: 1 },
      { fr: 'Pas de site', en: 'No site', points: 0 },
    ],
  },
  {
    id: 'q_reviews',
    kind: 'scored',
    axis: 'trust',
    fr: 'Affichez-vous des avis, témoignages ou logos de clients sur votre site ?',
    en: 'Do you show reviews, testimonials or client logos on your site?',
    options: [
      { fr: 'Oui, bien visibles', en: 'Yes, clearly visible', points: 3 },
      { fr: 'Un peu, pas mis en avant', en: 'A little, not highlighted', points: 2 },
      { fr: 'Non, aucun', en: 'None at all', points: 0 },
      { fr: 'Pas de site', en: 'No site', points: 0 },
    ],
  },
  {
    id: 'q_trust',
    kind: 'scored',
    axis: 'trust',
    fr: "A-t-on de quoi vous faire confiance ? (photos réelles, page À propos, coordonnées claires)",
    en: 'Is there enough to build trust? (real photos, About page, clear contact details)',
    options: [
      { fr: 'Oui, tout y est', en: 'Yes, all there', points: 3 },
      { fr: 'En partie', en: 'Partially', points: 1 },
      { fr: 'Non', en: 'No', points: 0 },
      { fr: 'Pas de site', en: 'No site', points: 0 },
    ],
  },
  {
    id: 'q_cta',
    kind: 'scored',
    axis: 'convert',
    fr: "Y a-t-il un bouton d'action clair (réserver, contact) visible sans avoir à scroller ?",
    en: 'Is there a clear action button (book, contact) visible without scrolling?',
    options: [
      { fr: 'Oui, impossible à manquer', en: 'Yes, impossible to miss', points: 3 },
      { fr: 'Il faut scroller pour le trouver', en: 'You have to scroll to find it', points: 1 },
      { fr: 'Non', en: 'No', points: 0 },
      { fr: 'Pas de site', en: 'No site', points: 0 },
    ],
  },
  {
    id: 'q_contact',
    kind: 'scored',
    axis: 'convert',
    fr: 'Peut-on vous contacter en 1 clic (formulaire, WhatsApp, téléphone) ?',
    en: 'Can people reach you in one click (form, WhatsApp, phone)?',
    options: [
      { fr: 'Oui, très facile', en: 'Yes, very easy', points: 3 },
      { fr: 'Possible mais peu pratique', en: 'Possible but clunky', points: 1 },
      { fr: 'Difficile', en: 'Hard', points: 0 },
      { fr: 'Pas de site', en: 'No site', points: 0 },
    ],
  },
  {
    id: 'q_mobile',
    kind: 'scored',
    axis: 'convert',
    fr: 'Votre site est-il rapide et impeccable sur mobile ?',
    en: 'Is your site fast and flawless on mobile?',
    options: [
      { fr: 'Oui, parfait', en: 'Yes, perfect', points: 3 },
      { fr: 'Correct sans plus', en: 'Okay-ish', points: 1 },
      { fr: 'Non / je ne sais pas', en: "No / I don't know", points: 0 },
      { fr: 'Pas de site', en: 'No site', points: 0 },
    ],
  },
  // --- Qualification (not scored) ---
  {
    id: 'sector',
    kind: 'choice',
    fr: 'Votre activité, en deux mots ?',
    en: 'Your business, in a nutshell?',
    options: [
      { fr: 'Coiffeur / Beauté / Bien-être', en: 'Hair / Beauty / Wellness' },
      { fr: 'Coach / Thérapeute / Conseil', en: 'Coach / Therapist / Consultant' },
      { fr: 'Restaurant / Bar / Café', en: 'Restaurant / Bar / Café' },
      { fr: 'Artisan / Prestataire de service', en: 'Craftsman / Service provider' },
      { fr: 'Commerce / Boutique', en: 'Shop / Retail' },
      { fr: "Producteur d'événements", en: 'Event producer' },
      { fr: 'PME / Entreprise', en: 'SMB / Company' },
      { fr: 'Autre', en: 'Other' },
    ],
  },
  {
    id: 'goal',
    kind: 'choice',
    fr: 'Votre objectif principal en ce moment ?',
    en: 'Your main goal right now?',
    options: [
      { fr: 'Avoir plus de contacts / clients', en: 'Get more leads / clients' },
      { fr: 'Inspirer plus confiance', en: 'Build more trust' },
      { fr: 'Être visible sur Google', en: 'Be visible on Google' },
      { fr: 'Vendre en ligne', en: 'Sell online' },
      { fr: 'Refaire une image vieillissante', en: 'Refresh an outdated image' },
    ],
  },
  {
    id: 'solution',
    kind: 'choice',
    fr: 'Quelle solution vous conviendrait le mieux ?',
    en: 'Which solution would suit you best?',
    options: [
      { fr: 'Une page simple qui convertit', en: 'A simple page that converts' },
      { fr: 'Un site vitrine complet', en: 'A full showcase website' },
      { fr: 'Une refonte de mon site actuel', en: 'A redesign of my current site' },
      { fr: 'Je ne sais pas encore', en: 'I\'m not sure yet' },
    ],
  },
];

const AXIS_META: Record<Axis, { fr: string; en: string; icon: typeof MessageSquare }> = {
  message: { fr: 'Clarté du message', en: 'Message clarity', icon: MessageSquare },
  trust: { fr: 'Confiance & preuve', en: 'Trust & proof', icon: ShieldCheck },
  convert: { fr: 'Capacité à convertir', en: 'Ability to convert', icon: MousePointerClick },
};

const Assessment = () => {
  const { language } = useLanguage();
  const { openCalendly } = useCalendly();
  const { toast } = useToast();
  const L = (fr: string, en: string) => (language === 'fr' ? fr : en);

  const quizRef = useRef<HTMLDivElement>(null);

  const [view, setView] = useState<'intro' | 'quiz' | 'result'>('intro');
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [openNote, setOpenNote] = useState('');
  const [lead, setLead] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Steps = questions + open note + lead capture
  const TOTAL_STEPS = QUESTIONS.length + 2;
  const noteStepIndex = QUESTIONS.length; // open note
  const leadStepIndex = QUESTIONS.length + 1; // lead capture

  const startQuiz = () => {
    setView('quiz');
    setStep(0);
    setTimeout(() => quizRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
  };

  const goTo = (next: number, dir: number) => {
    setDirection(dir);
    setStep(next);
    setTimeout(() => quizRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 40);
  };

  const answerAndAdvance = (qid: string, value: string) => {
    setAnswers((a) => ({ ...a, [qid]: value }));
    goTo(step + 1, 1);
  };

  // --- Scoring ---
  const computeScore = () => {
    const axisTotals: Record<Axis, { got: number; max: number }> = {
      message: { got: 0, max: 0 },
      trust: { got: 0, max: 0 },
      convert: { got: 0, max: 0 },
    };
    let got = 0;
    let max = 0;
    QUESTIONS.forEach((q) => {
      if (q.kind !== 'scored') return;
      const maxPts = Math.max(...q.options.map((o) => o.points));
      const chosen = q.options.find((o) => (language === 'fr' ? o.fr : o.en) === answers[q.id]);
      const pts = chosen ? chosen.points : 0;
      got += pts;
      max += maxPts;
      axisTotals[q.axis].got += pts;
      axisTotals[q.axis].max += maxPts;
    });
    const pct = max > 0 ? Math.round((got / max) * 100) : 0;
    const axisPct = (Object.keys(axisTotals) as Axis[]).map((axis) => ({
      axis,
      pct: axisTotals[axis].max > 0 ? Math.round((axisTotals[axis].got / axisTotals[axis].max) * 100) : 0,
    }));
    return { pct, axisPct };
  };

  const submitLead = async () => {
    if (!lead.name.trim() || !lead.email.trim()) return;
    setIsSubmitting(true);
    const { pct, axisPct } = computeScore();
    try {
      const lines = [
        `🎯 ASSESSMENT · Score global : ${pct}/100`,
        ...axisPct.map((a) => `  · ${AXIS_META[a.axis].fr} : ${a.pct}/100`),
        '',
        ...QUESTIONS.map((q) => `${language === 'fr' ? q.fr : q.en} → ${answers[q.id] || '-'}`),
        openNote ? `\nNote libre : ${openNote}` : '',
        lead.phone ? `Téléphone : ${lead.phone}` : 'Téléphone : non renseigné',
      ].filter(Boolean);

      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: lead.name, email: lead.email, message: lines.join('\n') }),
      });
    } catch {
      toast({
        title: L("Erreur lors de l'envoi", 'Submission error'),
        description: L('Réessayez ou écrivez à web@elieageron.com', 'Try again or email web@elieageron.com'),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
      setView('result');
      setTimeout(() => quizRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: L('Accueil', 'Home'), item: 'https://elieageron.com' },
      { '@type': 'ListItem', position: 2, name: L('Test de conversion', 'Conversion test'), item: 'https://elieageron.com/assessment' },
    ],
  };

  const radioBtn =
    'w-full text-left py-3.5 px-4 rounded-xl border border-input bg-background text-foreground text-sm sm:text-base font-medium transition-all hover:border-primary hover:bg-primary/5 active:scale-[0.99]';

  return (
    <>
      <SEO
        page="contact"
        customTitle={L('Test : votre site convertit-il ? | Elie Ageron', 'Test: is your site converting? | Elie Ageron')}
        customDescription={L(
          'Répondez à 10 questions (2 min) et découvrez ce qui freine votre site et comment le corriger. Gratuit, résultat immédiat.',
          'Answer 10 questions (2 min) and find out what holds your site back and how to fix it. Free, instant result.'
        )}
        customCanonical="https://elieageron.com/assessment"
        structuredData={[breadcrumbSchema]}
      />

      {/* ===== Intro / Hook ===== */}
      <section className="relative grain min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6" aria-labelledby="assess-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[110px]" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[90px]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto py-16 sm:py-20 text-center -mt-16 sm:-mt-24">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full glass-card mb-6">
              <Sparkles className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
              <span className="text-xs sm:text-sm text-muted-foreground">{L('2 minutes · Gratuit · Résultat immédiat', '2 minutes · Free · Instant result')}</span>
            </span>
          </motion.div>

          <motion.h1
            id="assess-heading"
            className="text-3xl sm:text-5xl md:text-6xl font-bold mb-5 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-foreground">{L('Votre site vous fait-il', 'Is your website')}</span>{' '}
            <span className="inline-block text-primary">{L('perdre des clients ?', 'losing you clients?')}</span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            {L(
              'Répondez à quelques questions (2 min) pour découvrir ce qui freine votre site, et exactement comment le corriger.',
              'Answer a few questions (2 min) to find out what holds your site back, and exactly how to fix it.'
            )}
          </motion.p>

          {/* 3 axes we measure */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            {(Object.keys(AXIS_META) as Axis[]).map((axis) => {
              const Icon = AXIS_META[axis].icon;
              return (
                <div key={axis} className="flex items-center gap-2 glass-card rounded-full px-4 py-2">
                  <Icon className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                  <span className="text-sm font-medium text-foreground/80">{L(AXIS_META[axis].fr, AXIS_META[axis].en)}</span>
                </div>
              );
            })}
          </motion.div>

          <motion.button
            onClick={startQuiz}
            className="inline-flex items-center gap-2 min-h-[56px] px-8 bg-primary text-primary-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all active:scale-[0.98] text-base sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            {L('Démarrer le test', 'Start the test')}
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </motion.button>

          {/* Short credibility */}
          <motion.p
            className="mt-6 text-xs sm:text-sm text-muted-foreground/70 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {L(
              'Par Elie Ageron, web designer à Annecy. Je conçois des sites qui transforment les visiteurs en clients.',
              'By Elie Ageron, web designer in Annecy, France. I build sites that turn visitors into clients.'
            )}
          </motion.p>
        </div>
      </section>

      {/* ===== Quiz + Result ===== */}
      {view !== 'intro' && (
        <section ref={quizRef} className="py-16 sm:py-24 relative scroll-mt-24">
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 neon-border"
            >
              {view === 'quiz' && (
                <>
                  {/* Progress */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        {L(`Question ${step + 1} sur ${TOTAL_STEPS}`, `Question ${step + 1} of ${TOTAL_STEPS}`)}
                      </span>
                      <span className="text-xs text-muted-foreground/60">{Math.round(((step + 1) / TOTAL_STEPS) * 100)}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        animate={{ width: `${((step + 1) / TOTAL_STEPS) * 100}%` }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                      />
                    </div>
                  </div>

                  <div className="overflow-hidden min-h-[340px]">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, x: direction * 36 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -direction * 36 }}
                        transition={{ duration: 0.22, ease: 'easeOut' }}
                      >
                        {/* Question screens */}
                        {step < QUESTIONS.length && (
                          <div className="space-y-5">
                            <h2 className="text-xl sm:text-2xl font-bold text-foreground leading-snug">
                              {L(QUESTIONS[step].fr, QUESTIONS[step].en)}
                            </h2>
                            <div className="space-y-2.5">
                              {QUESTIONS[step].options.map((opt) => {
                                const label = language === 'fr' ? opt.fr : opt.en;
                                const selected = answers[QUESTIONS[step].id] === label;
                                return (
                                  <button
                                    key={label}
                                    type="button"
                                    onClick={() => answerAndAdvance(QUESTIONS[step].id, label)}
                                    className={`group ${radioBtn} ${selected ? 'border-primary bg-primary/5' : ''} flex items-center justify-between gap-3`}
                                  >
                                    <span>{label}</span>
                                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100" aria-hidden="true" />
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {/* Open note */}
                        {step === noteStepIndex && (
                          <div className="space-y-5">
                            <div>
                              <h2 className="text-xl sm:text-2xl font-bold text-foreground leading-snug mb-1">
                                {L('Autre chose à savoir ?', 'Anything else I should know?')}
                              </h2>
                              <p className="text-sm text-muted-foreground">
                                {L('Optionnel : un détail sur votre situation, un blocage, une envie.', 'Optional: a detail about your situation, a blocker, a wish.')}
                              </p>
                            </div>
                            <textarea
                              rows={4}
                              maxLength={500}
                              value={openNote}
                              onChange={(e) => setOpenNote(e.target.value)}
                              placeholder={L('Ex : mon site date de 2018, je n\'ai aucun contact via le formulaire…', "e.g. my site is from 2018, I get zero leads from the form…")}
                              className="flex w-full rounded-xl border border-input bg-background px-3 py-2.5 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                            />
                          </div>
                        )}

                        {/* Lead capture */}
                        {step === leadStepIndex && (
                          <div className="space-y-5">
                            <div>
                              <h2 className="text-xl sm:text-2xl font-bold text-foreground leading-snug mb-1">
                                {L('Où envoyer votre résultat ?', 'Where should I send your result?')}
                              </h2>
                              <p className="text-sm text-muted-foreground">
                                {L('Votre score et vos pistes d\'amélioration s\'affichent juste après.', 'Your score and improvement tips show up right after.')}
                              </p>
                            </div>
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <Label htmlFor="as-name">
                                  {L('Votre prénom', 'Your first name')} <span className="text-primary" aria-hidden="true">*</span>
                                </Label>
                                <Input id="as-name" type="text" required maxLength={100} placeholder="Thomas" value={lead.name} onChange={(e) => setLead({ ...lead, name: e.target.value })} />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="as-email">
                                  Email <span className="text-primary" aria-hidden="true">*</span>
                                </Label>
                                <Input id="as-email" type="email" required maxLength={255} placeholder="thomas@example.com" value={lead.email} onChange={(e) => setLead({ ...lead, email: e.target.value })} />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="as-phone">
                                  {L('Téléphone', 'Phone')} <span className="text-muted-foreground/60 text-xs">({L('optionnel', 'optional')})</span>
                                </Label>
                                <Input id="as-phone" type="tel" maxLength={30} placeholder="+33 6 …" value={lead.phone} onChange={(e) => setLead({ ...lead, phone: e.target.value })} />
                              </div>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Navigation */}
                  <div className="flex gap-3 mt-8">
                    {step > 0 && (
                      <button
                        type="button"
                        onClick={() => goTo(step - 1, -1)}
                        className="flex-1 py-3 px-4 rounded-xl border border-input text-sm font-semibold text-foreground hover:bg-muted transition-all"
                      >
                        {L('← Retour', '← Back')}
                      </button>
                    )}
                    {step === noteStepIndex && (
                      <button
                        type="button"
                        onClick={() => goTo(step + 1, 1)}
                        className="flex-1 py-3 px-4 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all"
                      >
                        {L('Continuer →', 'Continue →')}
                      </button>
                    )}
                    {step === leadStepIndex && (
                      <button
                        type="button"
                        onClick={submitLead}
                        disabled={isSubmitting || !lead.name.trim() || !lead.email.trim()}
                        className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                            {L('Calcul…', 'Calculating…')}
                          </>
                        ) : (
                          <>
                            {L('Voir mon résultat', 'See my result')}
                            <ArrowRight className="w-4 h-4" aria-hidden="true" />
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  {step === leadStepIndex && (
                    <p className="text-center text-xs text-muted-foreground/60 mt-4">
                      {L('Pas de spam. Juste votre résultat et, si vous voulez, des conseils.', 'No spam. Just your result and, if you want, some advice.')}
                    </p>
                  )}
                </>
              )}

              {view === 'result' && <Result computeScore={computeScore} answers={answers} L={L} openCalendly={openCalendly} name={lead.name} />}
            </motion.div>
          </div>
        </section>
      )}

      <InternalLinks currentPage="contact" />
    </>
  );
};

// ===== Result view =====
interface ResultProps {
  computeScore: () => { pct: number; axisPct: { axis: Axis; pct: number }[] };
  answers: Record<string, string>;
  L: (fr: string, en: string) => string;
  openCalendly: () => void;
  name: string;
}

const Result = ({ computeScore, answers, L, openCalendly, name }: ResultProps) => {
  const { pct, axisPct } = computeScore();
  const weakest = [...axisPct].sort((a, b) => a.pct - b.pct)[0];
  const strongest = [...axisPct].sort((a, b) => b.pct - a.pct)[0];

  // Qualification intent → drives the "next step" emphasis
  const solution = answers['solution'] || '';
  const highIntent = /complet|vitrine|refonte|redesign|showcase|full/i.test(solution);

  // WhatsApp pre-filled with their score — no form to refill, the lead is already captured.
  const waText = encodeURIComponent(
    L(
      `Bonjour Elie, j'ai fait le test (score ${pct}/100) et j'aimerais quelques pistes pour mon site.`,
      `Hi Elie, I took the test (score ${pct}/100) and I'd like a few tips for my site.`
    )
  );
  const waHref = `https://wa.me/33695555318?text=${waText}`;

  const band = pct >= 71 ? 'high' : pct >= 41 ? 'mid' : 'low';
  const bandMsg = {
    high: L('Votre site a de solides fondations. Quelques réglages et il devient une vraie machine à clients.', 'Your site has solid foundations. A few tweaks and it becomes a real client machine.'),
    mid: L('Votre site fonctionne, mais laisse passer des clients. Le potentiel d\'amélioration est important.', 'Your site works, but lets clients slip away. There\'s real room to improve.'),
    low: L('Votre site (ou son absence) vous coûte des clients chaque semaine. La bonne nouvelle : tout est corrigeable.', 'Your site (or lack of one) is costing you clients every week. Good news: it\'s all fixable.'),
  }[band];

  const fixes: Record<Axis, { problem: string; fix: string }> = {
    message: {
      problem: L('Votre message n\'est pas assez clair en 5 secondes.', 'Your message isn\'t clear enough within 5 seconds.'),
      fix: L('Un titre qui promet un bénéfice concret + un sous-titre qui explique pour qui. Le visiteur doit se reconnaître instantanément.', 'A headline promising a concrete benefit + a subtitle saying who it\'s for. Visitors must recognise themselves instantly.'),
    },
    trust: {
      problem: L('Il manque des éléments de confiance.', 'Trust signals are missing.'),
      fix: L('Avis clients avec nom, photos réelles, logos, garanties. La preuve sociale rassure avant même le premier contact.', 'Client reviews with names, real photos, logos, guarantees. Social proof reassures before the first contact.'),
    },
    convert: {
      problem: L('Votre site ne pousse pas assez à l\'action.', 'Your site doesn\'t drive action enough.'),
      fix: L('Un bouton d\'action visible sans scroller, un contact en 1 clic, et une vitesse parfaite sur mobile. C\'est là que se gagnent les contacts.', 'An action button visible without scrolling, 1-click contact, and perfect mobile speed. That\'s where leads are won.'),
    },
  };

  const gaugeColor = band === 'high' ? 'hsl(142 70% 42%)' : band === 'mid' ? 'hsl(var(--primary))' : 'hsl(0 72% 51%)';
  const circumference = 2 * Math.PI * 52;

  return (
    <div className="text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">{L('Votre résultat', 'Your result')}</p>
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
        {name ? L(`Merci ${name} 👋`, `Thanks ${name} 👋`) : L('Voici votre score', 'Here\'s your score')}
      </h2>

      {/* Gauge */}
      <div className="relative w-40 h-40 mx-auto mb-6">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="52" fill="none" stroke="hsl(var(--muted))" strokeWidth="12" />
          <motion.circle
            cx="60"
            cy="60"
            r="52"
            fill="none"
            stroke={gaugeColor}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: circumference - (pct / 100) * circumference }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            className="text-4xl font-bold text-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {pct}
          </motion.span>
          <span className="text-xs text-muted-foreground">/ 100</span>
        </div>
      </div>

      <p className="text-base text-foreground/80 max-w-md mx-auto mb-8 leading-relaxed">{bandMsg}</p>

      {/* Axis breakdown */}
      <div className="space-y-3 text-left mb-8">
        {axisPct.map((a) => {
          const Icon = AXIS_META[a.axis].icon;
          return (
            <div key={a.axis}>
              <div className="flex items-center justify-between mb-1">
                <span className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                  <Icon className="w-4 h-4 text-primary" aria-hidden="true" />
                  {L(AXIS_META[a.axis].fr, AXIS_META[a.axis].en)}
                </span>
                <span className="text-sm font-semibold text-foreground">{a.pct}%</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: `${a.pct}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Insights */}
      <div className="space-y-3 text-left mb-8">
        <h3 className="text-lg font-bold text-foreground">{L('Vos 2 priorités', 'Your 2 priorities')}</h3>
        {[weakest, strongest].filter((v, i, arr) => arr.findIndex((x) => x.axis === v.axis) === i).slice(0, 2).map((a, idx) => (
          <div key={a.axis} className="glass-card rounded-xl p-4">
            <p className="text-sm font-semibold text-foreground mb-1 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center shrink-0">{idx + 1}</span>
              {fixes[a.axis].problem}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed pl-7">{fixes[a.axis].fix}</p>
          </div>
        ))}
      </div>

      {/* Next steps */}
      <div className="border-t border-border pt-7">
        <h3 className="text-xl font-bold text-foreground mb-2">
          {highIntent || band !== 'low'
            ? L('La suite logique : un appel gratuit de 30 min', 'Next logical step: a free 30-min call')
            : L('Par où commencer', 'Where to start')}
        </h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto mb-5">
          {highIntent
            ? L('On regarde votre situation ensemble et je vous dis précisément ce qui ferait grimper votre score. Sans engagement.', 'We look at your situation together and I tell you exactly what would lift your score. No commitment.')
            : L('Un appel rapide pour transformer ces pistes en plan d\'action concret pour votre activité.', 'A quick call to turn these tips into a concrete action plan for your business.')}
        </p>
        <div className="flex justify-center">
          <button
            onClick={openCalendly}
            className="inline-flex items-center justify-center gap-2 min-h-[52px] px-8 bg-primary text-primary-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all active:scale-[0.98]"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            {L('Réserver mon appel gratuit', 'Book my free call')}
          </button>
        </div>

        {/* No-call path — the lead is already captured, so NO second form. Just reassurance + a direct line. */}
        <div className="mt-6 pt-6 border-t border-border/60">
          <p className="text-sm text-muted-foreground max-w-md mx-auto mb-3">
            {L(
              `Pas envie d'un appel${name ? `, ${name}` : ''} ? J'ai déjà toutes vos réponses. Je vous envoie 2-3 pistes concrètes sous 24h.`,
              `Don't feel like a call${name ? `, ${name}` : ''}? I already have all your answers. I'll send you 2-3 concrete tips within 24h.`
            )}
          </p>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 border-2 border-primary/30 text-primary font-semibold rounded-xl hover:bg-primary/5 hover:border-primary/50 transition-all"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            {L('M\'écrire sur WhatsApp', 'Message me on WhatsApp')}
          </a>
        </div>

        <p className="text-xs text-muted-foreground/60 mt-6">
          {L('Votre résultat vient aussi de m\'être envoyé. Questions ? web@elieageron.com', 'Your result was just sent to me too. Questions? web@elieageron.com')}
        </p>
      </div>
    </div>
  );
};

export default Assessment;
