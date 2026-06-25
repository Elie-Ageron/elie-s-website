import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Download, Briefcase, Phone, Mail, MapPin, MessageCircle, MessageSquareText, ShieldCheck, Loader2, Check, UserPlus } from 'lucide-react';
import portrait from '@/assets/elie-ageron-portrait.webp';

/**
 * Carte de visite virtuelle — page totalement indépendante.
 * Pas de Header / Footer / Layout global (montée hors de <Layout> dans App.tsx).
 * noindex : page destinée au partage direct (QR code / NFC / lien), pas au référencement.
 */
const Card = () => {
  const PHONE = '+33695555318';
  const EMAIL = 'elie@elieageron.com';
  const MESSAGE = 'Bonjour Elie, je voudrais créer mon site web, pourrait-on en discuter ?';

  // Feedback visuel pendant l'enregistrement du contact (le téléchargement / import peut prendre quelques secondes)
  const [contactStatus, setContactStatus] = useState<'idle' | 'saving' | 'done'>('idle');

  const handleSaveContact = () => {
    setContactStatus('saving');
    window.setTimeout(() => setContactStatus('done'), 1400);
    window.setTimeout(() => setContactStatus('idle'), 6000);
  };

  return (
    <>
      <Helmet>
        <title>Elie Ageron, Créateur de sites web</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Carte de visite d'Elie Ageron, créateur de sites web pour artisans et commerçants en Savoie et partout en France."
        />
      </Helmet>

      <main className="relative min-h-[100dvh] w-full overflow-hidden flex items-center justify-center px-5 py-10">
        {/* Fond signé : dégradé rosé + halos haut/bas */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.07] via-background to-primary/[0.06]" />
          <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-primary/20 rounded-full blur-[130px]" />
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[26rem] h-[26rem] bg-primary/10 rounded-full blur-[120px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-sm flex flex-col items-center text-center"
        >
          {/* Photo de profil */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.05, ease: 'easeOut' }}
            className="relative mb-6"
          >
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-primary/60 to-primary/20 blur-sm" aria-hidden="true" />
            <img
              src={portrait}
              alt="Portrait d'Elie Ageron, créateur de sites web"
              width={144}
              height={144}
              className="relative w-36 h-36 rounded-full object-cover border-4 border-card shadow-xl"
            />
          </motion.div>

          {/* Nom complet */}
          <h1 className="text-4xl font-bold text-foreground tracking-tight">Elie Ageron</h1>

          {/* Titre */}
          <p className="mt-1 text-lg font-medium text-primary">Créateur de sites web</p>

          {/* Ligne de confiance */}
          <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-card/70 backdrop-blur border border-border px-3.5 py-1.5 text-[13px] font-medium text-muted-foreground">
            <MapPin className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
            Albertville, Savoie · France entière
          </div>

          {/* Accroche */}
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground max-w-xs">
            Je crée des sites web sur-mesure pour les artisans et commerçants qui veulent
            être trouvés et choisis près de chez eux.
          </p>

          {/* CTA principal — télécharge le contact */}
          <motion.a
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            href="/elie.vcf"
            download="elie.vcf"
            onClick={handleSaveContact}
            className="mt-8 w-full flex items-center justify-center gap-2.5 rounded-2xl bg-primary text-primary-foreground font-semibold text-base px-6 py-4 shadow-lg shadow-primary/25 active:scale-[0.98] transition-transform"
          >
            <Download className="w-5 h-5" aria-hidden="true" />
            Enregistrer le contact
          </motion.a>

          {/* Réalisations — pleine largeur */}
          <motion.a
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.28 }}
            href="/portfolio"
            className="mt-3 w-full flex items-center justify-center gap-2.5 rounded-2xl glass-card text-foreground font-medium text-base px-6 py-4 border border-border hover:border-primary/40 active:scale-[0.98] transition-all"
          >
            <Briefcase className="w-5 h-5 text-primary" aria-hidden="true" />
            Voir mes réalisations
          </motion.a>

          {/* Me joindre — 2 colonnes */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.34 }}
            className="mt-3 w-full grid grid-cols-2 gap-3"
          >
            <a
              href={`tel:${PHONE}`}
              className="flex items-center justify-center gap-2 rounded-2xl glass-card text-foreground font-medium text-base px-4 py-4 border border-border hover:border-primary/40 active:scale-[0.98] transition-all"
            >
              <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
              Appeler
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center justify-center gap-2 rounded-2xl glass-card text-foreground font-medium text-base px-4 py-4 border border-border hover:border-primary/40 active:scale-[0.98] transition-all"
            >
              <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
              Email
            </a>
          </motion.div>

          {/* M'envoyer un message — WhatsApp ou SMS */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mt-5 w-full"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground/70">
                M'envoyer un message
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`https://wa.me/${PHONE.replace('+', '')}?text=${encodeURIComponent(MESSAGE)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl glass-card text-foreground font-medium text-base px-4 py-4 border border-border hover:border-[#25D366]/50 active:scale-[0.98] transition-all"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" aria-hidden="true" />
                WhatsApp
              </a>
              <a
                href={`sms:${PHONE}?body=${encodeURIComponent(MESSAGE)}`}
                className="flex items-center justify-center gap-2 rounded-2xl glass-card text-foreground font-medium text-base px-4 py-4 border border-border hover:border-primary/40 active:scale-[0.98] transition-all"
              >
                <MessageSquareText className="w-5 h-5 text-primary" aria-hidden="true" />
                SMS
              </a>
            </div>
            <div className="mt-4 flex items-start gap-2.5 rounded-2xl bg-primary/[0.06] border border-primary/15 px-4 py-3 text-left">
              <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-[13px] leading-relaxed text-foreground/80">
                <span className="font-semibold text-foreground">Réponse rapide, sans engagement.</span>{' '}
                Une question, un projet ou juste un bonjour : écrivez-moi, sans aucune pression commerciale.
              </p>
            </div>
          </motion.div>

          {/* Pied discret */}
          <a
            href="https://elieageron.com"
            className="mt-8 text-xs text-muted-foreground/70 hover:text-primary transition-colors"
          >
            elieageron.com
          </a>
        </motion.div>

        {/* Popup feedback : enregistrement du contact */}
        <AnimatePresence>
          {contactStatus !== 'idle' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setContactStatus('idle')}
              className="fixed inset-0 z-50 flex items-center justify-center px-6 bg-background/70 backdrop-blur-sm"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 14 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 8 }}
                transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                onClick={(e) => e.stopPropagation()}
                role="status"
                aria-live="polite"
                className="relative w-full max-w-xs rounded-3xl bg-card border border-border shadow-2xl px-7 py-8 text-center"
              >
                {contactStatus === 'saving' ? (
                  <>
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <Loader2 className="h-7 w-7 text-primary animate-spin" aria-hidden="true" />
                    </div>
                    <p className="text-lg font-semibold text-foreground">Enregistrement du contact…</p>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      Préparation de la fiche d'Elie sur votre appareil.
                    </p>
                  </>
                ) : (
                  <>
                    <motion.div
                      initial={{ scale: 0.6 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 380, damping: 18 }}
                      className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]/15"
                    >
                      <Check className="h-7 w-7 text-[#25D366]" aria-hidden="true" />
                    </motion.div>
                    <p className="text-lg font-semibold text-foreground">Contact prêt !</p>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      Confirmez l'ajout dans votre application Contacts pour le garder.
                    </p>
                    <button
                      type="button"
                      onClick={() => setContactStatus('idle')}
                      className="mt-5 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm px-5 py-3 active:scale-[0.98] transition-transform"
                    >
                      <UserPlus className="w-4 h-4" aria-hidden="true" />
                      C'est fait
                    </button>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
};

export default Card;
