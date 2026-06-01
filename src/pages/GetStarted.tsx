import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import SEO from '@/components/SEO';
import InternalLinks from '@/components/InternalLinks';
import ScrollArrow from '@/components/ScrollArrow';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxu13-AnjyCaXr818JdA-hCSohWEE2ii1ELGXM-PeQ_sGYYB8rvEhXr_NYh7YWedA4qyg/exec';

const GetStarted = () => {
  const { language } = useLanguage();
  const { toast } = useToast();

  const [currentStep, setCurrentStep] = useState(1);
  const [stepDirection, setStepDirection] = useState(1);
  const TOTAL_STEPS = 4;
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: '',
    hasWebsite: '',
    currentSite: '',
    whatsBroken: '',
    mainGoal: '',
    siteReference: '',
    mainAction: '',
    googleBusinessName: '',
    visualStyle: '',
    description: '',
    mustHave: '',
  });

  const isEventProducer =
    formData.businessType === (language === 'fr' ? "Producteur d'événements" : 'Event producer');

  const canProceed = (): boolean => {
    switch (currentStep) {
      case 1: return !!(formData.name.trim() && formData.email.trim() && formData.businessType);
      case 2: return !!formData.hasWebsite;
      case 3: return !!(formData.mainGoal && formData.mainAction && formData.visualStyle);
      case 4: return !!formData.description.trim();
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
        `Type de business : ${formData.businessType}`,
        `Site existant : ${formData.hasWebsite === 'yes' ? `Oui : ${formData.currentSite || 'URL non renseignée'}` : 'Non'}`,
        formData.whatsBroken ? `Raison du changement : ${formData.whatsBroken}` : null,
        `Objectif principal : ${formData.mainGoal}`,
        `Action souhaitée des visiteurs : ${formData.mainAction}`,
        `Ambiance visuelle : ${formData.visualStyle}`,
        formData.siteReference ? `Référence de site : ${formData.siteReference}` : null,
        formData.googleBusinessName ? `Google Business : ${formData.googleBusinessName}` : 'Google Business : non renseigné',
        `Description : ${formData.description}`,
        formData.mustHave ? `Must-have : ${formData.mustHave}` : null,
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
        description:
          language === 'fr'
            ? 'Réessayez ou écrivez à web@elieageron.com'
            : 'Try again or email web@elieageron.com',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const businessTypes = language === 'fr'
    ? ["Coiffeur / Salon de beauté", "Coach / Thérapeute", "Restaurant / Bar / Café", "Artisan / Prestataire de service", "Boutique en ligne", "PME / Entreprise", "Producteur d'événements", "Autre"]
    : ['Hairdresser / Beauty salon', 'Coach / Therapist', 'Restaurant / Bar / Café', 'Craftsman / Service provider', 'Online store', 'SMB / Company', 'Event producer', 'Other'];

  const goals = language === 'fr'
    ? ['Générer des contacts et leads', 'Vendre mes produits ou services en ligne', 'Présenter mon activité (vitrine)', 'Gagner en visibilité locale', 'Autre']
    : ['Generate leads and inquiries', 'Sell products or services online', 'Showcase my business', 'Boost local visibility', 'Other'];


  const mainActions = language === 'fr'
    ? ['Appeler', 'Remplir un formulaire de contact', 'Acheter en ligne', 'Réserver un rendez-vous', 'Venir en boutique / sur place']
    : ['Call', 'Fill a contact form', 'Buy online', 'Book an appointment', 'Visit in store / on site'];

  const visualStyles = language === 'fr'
    ? ['Moderne & épuré', 'Chaleureux & naturel', 'Élégant & premium', 'Coloré & dynamique']
    : ['Modern & minimal', 'Warm & natural', 'Elegant & premium', 'Bold & dynamic'];

  const stepLabels = language === 'fr'
    ? ['Votre activité', 'Situation actuelle', 'Votre projet', 'Détails']
    : ['Your business', 'Current situation', 'Your project', 'Details'];

  const sel =
    'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground';

  const radioBtn = (active: boolean) =>
    `flex-1 py-2.5 px-3 rounded-xl border text-sm font-medium transition-all ${
      active
        ? 'bg-primary text-primary-foreground border-primary'
        : 'border-input bg-background text-foreground hover:border-primary/50'
    }`;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: language === 'fr' ? 'Accueil' : 'Home', item: 'https://elieageron.com' },
      { '@type': 'ListItem', position: 2, name: language === 'fr' ? 'Démarrer mon projet' : 'Get Started', item: 'https://elieageron.com/get-started' },
    ],
  };

  return (
    <>
      <SEO page="contact" structuredData={[breadcrumbSchema]} />

      {/* Hero */}
      <section className="relative grain min-h-screen flex items-center justify-center" aria-labelledby="gs-heading">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-primary/8 rounded-full blur-[80px]" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10 -mt-24">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              {language === 'fr' ? 'Sans appel · Sans engagement' : 'No call · No commitment'}
            </span>
          </motion.div>
          <motion.header initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h1 id="gs-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-foreground">
                {language === 'fr' ? 'Votre site web,' : 'Your website,'}
              </span>{' '}
              <span className="inline-block text-primary">
                {language === 'fr' ? 'sans passer par un appel.' : 'no call required.'}
              </span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              {language === 'fr'
                ? "Remplissez ce formulaire en 4 étapes. Je construis votre site, vous le validez, vous le gardez si ça vous convient."
                : 'Fill in this 4-step form. I build your site, you review it, you keep it if you like it.'}
            </p>
          </motion.header>
          <ScrollArrow />
        </div>
      </section>

      {/* Form */}
      <section className="pb-16 sm:pb-20 relative">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 neon-border"
          >
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 text-emerald-500" aria-hidden="true" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  {language === 'fr' ? 'Demande reçue.' : 'Request received.'}
                </h2>
                <p className="text-muted-foreground max-w-sm mx-auto">
                  {language === 'fr'
                    ? "Je reviens vers vous sous 24h avec un brief de ce que je propose de construire."
                    : "I'll get back to you within 24h with a brief of what I propose to build."}
                </p>
                <p className="text-xs text-muted-foreground/60">
                  {language === 'fr' ? 'Questions ? web@elieageron.com' : 'Questions? web@elieageron.com'}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Progress */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {language === 'fr' ? `Étape ${currentStep} sur ${TOTAL_STEPS}` : `Step ${currentStep} of ${TOTAL_STEPS}`}
                    </span>
                    <span className="text-xs text-muted-foreground/60">{stepLabels[currentStep - 1]}</span>
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

                      {/* Step 1 — Activité */}
                      {currentStep === 1 && (
                        <div className="space-y-5">
                          <div className="mb-6">
                            <h2 className="text-xl font-bold text-foreground mb-1">
                              {language === 'fr' ? 'Qui êtes-vous ?' : 'Who are you?'}
                            </h2>
                            <p className="text-sm text-muted-foreground">
                              {language === 'fr'
                                ? 'Votre activité et comment vous joindre.'
                                : 'Your business type and how to reach you.'}
                            </p>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="gs-business-type">
                              {language === 'fr' ? 'Type de business' : 'Business type'}{' '}
                              <span className="text-primary" aria-hidden="true">*</span>
                            </Label>
                            <select
                              id="gs-business-type"
                              required
                              value={formData.businessType}
                              onChange={e => setFormData({ ...formData, businessType: e.target.value })}
                              className={sel}
                            >
                              <option value="" disabled>{language === 'fr' ? 'Choisissez...' : 'Choose...'}</option>
                              {businessTypes.map(t => <option key={t} value={t}>{t}</option>)}
                            </select>
                            {isEventProducer && (
                              <motion.p
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-xs text-primary mt-2 flex items-center gap-1.5"
                              >
                                <span aria-hidden="true">→</span>
                                <span>
                                  {language === 'fr'
                                    ? "Nous avons un formulaire dédié pour vous : "
                                    : 'We have a dedicated form for you: '}
                                  <Link
                                    to="/event-production#apply"
                                    className="underline underline-offset-4 font-semibold"
                                  >
                                    {language === 'fr' ? 'formulaire événementiel' : 'event form'}
                                  </Link>
                                </span>
                              </motion.p>
                            )}
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="gs-name">
                                {language === 'fr' ? 'Votre prénom' : 'Your first name'}{' '}
                                <span className="text-primary" aria-hidden="true">*</span>
                              </Label>
                              <Input
                                id="gs-name"
                                type="text"
                                required
                                maxLength={100}
                                placeholder="Thomas"
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="gs-email">
                                Email <span className="text-primary" aria-hidden="true">*</span>
                              </Label>
                              <Input
                                id="gs-email"
                                type="email"
                                required
                                maxLength={255}
                                placeholder="thomas@example.com"
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Step 2 — Situation */}
                      {currentStep === 2 && (
                        <div className="space-y-6">
                          <div className="mb-6">
                            <h2 className="text-xl font-bold text-foreground mb-1">
                              {language === 'fr' ? 'Votre situation actuelle' : 'Your current situation'}
                            </h2>
                            <p className="text-sm text-muted-foreground">
                              {language === 'fr'
                                ? "Pour comprendre d'où vous partez."
                                : "So I understand where you're starting from."}
                            </p>
                          </div>
                          <div className="space-y-2">
                            <Label>
                              {language === 'fr' ? 'Avez-vous déjà un site web ?' : 'Do you already have a website?'}{' '}
                              <span className="text-primary" aria-hidden="true">*</span>
                            </Label>
                            <div className="flex gap-2">
                              {(language === 'fr'
                                ? [{ v: 'yes', l: 'Oui' }, { v: 'no', l: 'Non, pas encore' }]
                                : [{ v: 'yes', l: 'Yes' }, { v: 'no', l: 'No, not yet' }]
                              ).map(({ v, l }) => (
                                <button
                                  key={v}
                                  type="button"
                                  onClick={() =>
                                    setFormData({
                                      ...formData,
                                      hasWebsite: v,
                                      currentSite: v === 'no' ? '' : formData.currentSite,
                                      whatsBroken: v === 'no' ? '' : formData.whatsBroken,
                                    })
                                  }
                                  className={radioBtn(formData.hasWebsite === v)}
                                >
                                  {l}
                                </button>
                              ))}
                            </div>
                          </div>
                          {formData.hasWebsite === 'yes' && (
                            <motion.div
                              initial={{ opacity: 0, y: -8 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="space-y-5"
                            >
                              <div className="space-y-2">
                                <Label htmlFor="gs-current-site">
                                  {language === 'fr' ? 'URL de votre site actuel' : 'Your current site URL'}
                                </Label>
                                <Input
                                  id="gs-current-site"
                                  type="url"
                                  maxLength={255}
                                  placeholder="https://..."
                                  value={formData.currentSite}
                                  onChange={e => setFormData({ ...formData, currentSite: e.target.value })}
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="gs-whats-broken">
                                  {language === 'fr' ? 'Pourquoi vous voulez le changer ?' : 'Why do you want to change it?'}
                                </Label>
                                <Input
                                  id="gs-whats-broken"
                                  type="text"
                                  maxLength={300}
                                  placeholder={
                                    language === 'fr'
                                      ? 'Ex : trop vieux, pas de contacts, lent sur mobile...'
                                      : 'e.g. looks outdated, no leads, slow on mobile...'
                                  }
                                  value={formData.whatsBroken}
                                  onChange={e => setFormData({ ...formData, whatsBroken: e.target.value })}
                                />
                              </div>
                            </motion.div>
                          )}
                        </div>
                      )}

                      {/* Step 3 — Projet */}
                      {currentStep === 3 && (
                        <div className="space-y-5">
                          <div className="mb-6">
                            <h2 className="text-xl font-bold text-foreground mb-1">
                              {language === 'fr' ? 'Votre projet' : 'Your project'}
                            </h2>
                            <p className="text-sm text-muted-foreground">
                              {language === 'fr'
                                ? "Ce que vous voulez accomplir avec votre site."
                                : "What you want to achieve with your site."}
                            </p>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="gs-goal">
                              {language === 'fr' ? 'Objectif principal' : 'Main goal'}{' '}
                              <span className="text-primary" aria-hidden="true">*</span>
                            </Label>
                            <select
                              id="gs-goal"
                              required
                              value={formData.mainGoal}
                              onChange={e => setFormData({ ...formData, mainGoal: e.target.value })}
                              className={sel}
                            >
                              <option value="" disabled>{language === 'fr' ? 'Choisissez...' : 'Choose...'}</option>
                              {goals.map(t => <option key={t} value={t}>{t}</option>)}
                            </select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="gs-site-ref">
                              {language === 'fr' ? 'Un site que vous aimez ? (référence de style)' : 'A site you like? (style reference)'}
                              {' '}<span className="text-muted-foreground/60 text-xs">({language === 'fr' ? 'optionnel' : 'optional'})</span>
                            </Label>
                            <Input
                              id="gs-site-ref"
                              type="text"
                              maxLength={255}
                              placeholder="https://... ou simplement le nom du site"
                              value={formData.siteReference}
                              onChange={e => setFormData({ ...formData, siteReference: e.target.value })}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="gs-main-action">
                              {language === 'fr' ? 'Quelle action voulez-vous que les visiteurs fassent ?' : 'What action do you want visitors to take?'}{' '}
                              <span className="text-primary" aria-hidden="true">*</span>
                            </Label>
                            <select
                              id="gs-main-action"
                              required
                              value={formData.mainAction}
                              onChange={e => setFormData({ ...formData, mainAction: e.target.value })}
                              className={sel}
                            >
                              <option value="" disabled>{language === 'fr' ? 'Choisissez...' : 'Choose...'}</option>
                              {mainActions.map(t => <option key={t} value={t}>{t}</option>)}
                            </select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="gs-google-business">
                              {language === 'fr' ? 'Nom de votre page Google Business (si vous en avez une)' : 'Your Google Business name (if you have one)'}
                              {' '}<span className="text-muted-foreground/60 text-xs">({language === 'fr' ? 'optionnel' : 'optional'})</span>
                            </Label>
                            <Input
                              id="gs-google-business"
                              type="text"
                              maxLength={150}
                              placeholder={language === 'fr' ? 'Ex : Salon de coiffure Dupont' : 'e.g. Dupont Hair Salon'}
                              value={formData.googleBusinessName}
                              onChange={e => setFormData({ ...formData, googleBusinessName: e.target.value })}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="gs-style">
                              {language === 'fr' ? 'Ambiance visuelle souhaitée' : 'Desired visual style'}{' '}
                              <span className="text-primary" aria-hidden="true">*</span>
                            </Label>
                            <select
                              id="gs-style"
                              required
                              value={formData.visualStyle}
                              onChange={e => setFormData({ ...formData, visualStyle: e.target.value })}
                              className={sel}
                            >
                              <option value="" disabled>{language === 'fr' ? 'Choisissez...' : 'Choose...'}</option>
                              {visualStyles.map(t => <option key={t} value={t}>{t}</option>)}
                            </select>
                          </div>
                        </div>
                      )}

                      {/* Step 4 — Détails */}
                      {currentStep === 4 && (
                        <div className="space-y-5">
                          <div className="mb-6">
                            <h2 className="text-xl font-bold text-foreground mb-1">
                              {language === 'fr' ? 'Dernière étape' : 'Last step'}
                            </h2>
                            <p className="text-sm text-muted-foreground">
                              {language === 'fr'
                                ? 'Plus vous en dites, mieux je construis.'
                                : 'The more you tell me, the better I build.'}
                            </p>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="gs-description">
                              {language === 'fr'
                                ? 'Décrivez votre activité en quelques phrases'
                                : 'Describe your business in a few sentences'}{' '}
                              <span className="text-primary" aria-hidden="true">*</span>
                            </Label>
                            <p className="text-xs text-muted-foreground/70">
                              {language === 'fr'
                                ? "Qui vous êtes, ce que vous vendez, à qui, ce qui vous distingue."
                                : "Who you are, what you sell, to whom, what sets you apart."}
                            </p>
                            <textarea
                              id="gs-description"
                              required
                              maxLength={600}
                              rows={4}
                              placeholder={
                                language === 'fr'
                                  ? "Ex : Je suis coach business pour freelances en reconversion. J'accompagne des profils 25-40 ans, secteur tech et marketing, sur 3 mois."
                                  : "e.g. I'm a business coach for freelancers in career transition. I work with 25-40 year-olds in tech and marketing over 3-month programs."
                              }
                              value={formData.description}
                              onChange={e => setFormData({ ...formData, description: e.target.value })}
                              className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none mt-1"
                            />
                            <p className="text-right text-xs text-muted-foreground/50">
                              {formData.description.length}/600
                            </p>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="gs-must-have">
                              {language === 'fr'
                                ? 'Une chose à absolument avoir sur le site'
                                : 'One thing you absolutely want on the site'}{' '}
                              <span className="text-muted-foreground/60 text-xs">
                                ({language === 'fr' ? 'optionnel' : 'optional'})
                              </span>
                            </Label>
                            <Input
                              id="gs-must-have"
                              type="text"
                              maxLength={300}
                              placeholder={
                                language === 'fr'
                                  ? 'Ex : calendrier de réservation, section avis clients, portfolio photos...'
                                  : 'e.g. booking calendar, testimonials section, photo portfolio...'
                              }
                              value={formData.mustHave}
                              onChange={e => setFormData({ ...formData, mustHave: e.target.value })}
                            />
                          </div>
                        </div>
                      )}

                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation */}
                <div className="flex gap-3 mt-8">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={goBack}
                      className="flex-1 py-3 px-4 rounded-xl border border-input text-sm font-semibold text-foreground hover:bg-muted transition-all"
                    >
                      {language === 'fr' ? '← Retour' : '← Back'}
                    </button>
                  )}
                  {currentStep < TOTAL_STEPS ? (
                    <button
                      type="button"
                      onClick={goNext}
                      disabled={!canProceed()}
                      className="flex-1 py-3 px-4 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      {language === 'fr' ? 'Continuer →' : 'Continue →'}
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting || !canProceed()}
                      className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all disabled:opacity-60 disabled:cursor-not-allowed text-sm sm:text-base"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          {language === 'fr' ? 'Envoi...' : 'Sending...'}
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" aria-hidden="true" />
                          {language === 'fr' ? 'Envoyer ma demande' : 'Send my request'}
                        </>
                      )}
                    </button>
                  )}
                </div>

                {currentStep === TOTAL_STEPS && (
                  <p className="text-center text-xs text-muted-foreground/60 mt-4">
                    {language === 'fr'
                      ? 'Réponse sous 24h · Sans engagement · Sans appel'
                      : 'Reply within 24h · No commitment · No call'}
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <InternalLinks currentPage="contact" />
    </>
  );
};

export default GetStarted;
