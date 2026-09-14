import { useState } from 'react';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

/**
 * Le formulaire de l'audit gratuit. Deux champs, pas un de plus.
 *
 * Pourquoi deux champs : l'audit est l'aimant du funnel (voir la fiche
 * 03-funnel du dossier _MOI). Sa valeur vient de sa facilite d'acces. Chaque
 * champ ajoute coute des demandes, et tout ce qui manque se demande dans la
 * reponse. Le nom de l'entreprise suffit a retrouver la fiche Google, le compte
 * et le site : c'est exactement ce que l'audit passe en revue.
 *
 * ⚠️ **Le second champ est un numero de telephone, pas « email ou telephone ».**
 * Elie, apres avoir teste le formulaire de bout en bout : *« si dans le
 * formulaire j'ai deja un numero de telephone, je peux les rappeler le plus
 * rapidement possible. Des que j'envoie l'email, personne ne repond. Faut que
 * ce soit le numero. »*
 *
 * Un champ libre laissait le choix, et le choix par defaut d'un visiteur est
 * l'adresse mail : c'est le canal le plus confortable pour lui, et le moins
 * efficace pour Elie. Demander le numero coute quelques demandes et en
 * transforme beaucoup plus.
 *
 * ⚠️ **La saisie n'accepte qu'un numero.** Les lettres et l'arobase sont
 * filtrees a la frappe, et le formulaire refuse de partir sous neuf chiffres.
 * Elie : *« les gens DOIVENT mettre leur numero. Par email ils ne repondent
 * jamais. Si c'est une zone de texte ils vont se tromper. »*
 *
 * Le filtre est a la frappe et pas seulement a l'envoi : quelqu'un qui commence
 * a taper une adresse voit tout de suite que ca ne rentre pas, au lieu de
 * remplir le champ en entier puis de se faire refuser. Les separateurs usuels
 * restent autorises (espace, point, tiret, parentheses, plus), parce que
 * personne n'ecrit son numero de la meme facon et qu'un format impose ferait
 * perdre des demandes pour rien.
 *
 * Meme endpoint Apps Script que /contact, /get-started et /assessment : les
 * demandes tombent dans la meme feuille Google.
 */
const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxu13-AnjyCaXr818JdA-hCSohWEE2ii1ELGXM-PeQ_sGYYB8rvEhXr_NYh7YWedA4qyg/exec';

interface AuditFormProps {
  /**
   * Le seul ton restant. Les variantes `ink` (fond sombre) et `brand` (fond
   * rose plein) ont ete retirees avec la direction sombre : la page est
   * entierement claire.
   */
  tone?: 'paper';
  /** Identifie le bloc qui a genere la demande, pour savoir ce qui convertit. */
  source: string;
}

const AuditForm = ({ source }: AuditFormProps) => {
  const { language } = useLanguage();
  const fr = language === 'fr';
  const [company, setCompany] = useState('');
  const [telephone, setTelephone] = useState('');
  const [erreurTel, setErreurTel] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [failed, setFailed] = useState(false);

  /* Ce qu'on laisse passer a la frappe : chiffres et separateurs usuels.
     Tout le reste, lettres et arobase compris, est retire au fil de la saisie. */
  const nettoyerTelephone = (saisie: string) => saisie.replace(/[^\d+\s().-]/g, '');

  /** Un numero valide fait entre 9 et 15 chiffres, indicatif compris. */
  const chiffres = telephone.replace(/\D/g, '');
  const telephoneValide = chiffres.length >= 9 && chiffres.length <= 15;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!telephoneValide) {
      setErreurTel(true);
      return;
    }

    setSending(true);
    setFailed(false);

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: company,
          email: '',
          phone: telephone,
          message: `[AUDIT GRATUIT - ${source}] Entreprise : ${company}. Téléphone : ${telephone}.`,
        }),
      });
      setSent(true);
      setCompany('');
      setTelephone('');
      setErreurTel(false);
    } catch (error) {
      console.error('Audit form error:', error);
      setFailed(true);
    } finally {
      setSending(false);
    }
  };

  const fieldClass = 'h-12';
  const labelClass = 'text-foreground';
  const buttonClass = 'bg-primary text-primary-foreground hover:bg-primary/90';
  const noteClass = 'text-muted-foreground';

  if (sent) {
    return (
      <div className="rounded-2xl border border-border bg-secondary p-6 sm:p-7" role="status">
        <div className="flex items-start gap-3">
          <span
            className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"
            aria-hidden="true"
          >
            <Check className="h-4 w-4" />
          </span>
          <div>
            <p className={`font-semibold ${labelClass}`}>
              {fr ? "C'est noté, je m'en occupe." : "Got it, I'm on it."}
            </p>
            <p className={`mt-1.5 text-sm ${noteClass}`}>
              {fr
                ? "Je regarde votre présence en ligne dans les prochains jours, puis je vous appelle pour vous envoyer la vidéo. Comptez 48 h ouvrées. Si vous n'avez aucune nouvelle, écrivez-moi à elie@elieageron.com."
                : 'I go through your online presence in the coming days, then I call you to send the video over. Allow two business days. If you hear nothing, write to elie@elieageron.com.'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor={`audit-company-${source}`} className={labelClass}>
          {fr ? "Le nom de votre entreprise" : 'Your business name'}
        </Label>
        <Input
          id={`audit-company-${source}`}
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
          autoComplete="organization"
          placeholder={fr ? 'Boulangerie Martin, Albertville' : 'Martin Bakery, Albertville'}
          className={fieldClass}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor={`audit-contact-${source}`} className={labelClass}>
          {fr ? 'Votre numéro de téléphone' : 'Your phone number'}
        </Label>
        <Input
          id={`audit-contact-${source}`}
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          maxLength={20}
          value={telephone}
          onChange={(e) => {
            setTelephone(nettoyerTelephone(e.target.value));
            if (erreurTel) setErreurTel(false);
          }}
          required
          aria-invalid={erreurTel}
          aria-describedby={`audit-contact-note-${source}`}
          placeholder="06 12 34 56 78"
          className={fieldClass}
        />
        <p id={`audit-contact-note-${source}`} className={`text-xs ${erreurTel ? 'text-destructive' : noteClass}`}>
          {erreurTel
            ? fr
              ? "Il me faut un numéro de téléphone à dix chiffres. C'est le seul moyen que j'ai de vous joindre vite."
              : 'I need a full phone number. It is the only way I have to reach you quickly.'
            : fr
              /* Deux relecteurs sur cinq ont lu cet appel comme une relance
                 deguisee : « un coup de fil non sollicite, c'est une relance ».
                 Promettre une fois de plus qu'il n'y en a pas ne convainc
                 personne. Dire combien de temps il dure, si. */
              ? "Un appel de deux minutes pour vous l'envoyer, et c'est le seul. Si vous ne décrochez pas, elle part par message."
              : 'I call you once it is ready. If you do not pick up, I send it over by message.'}
        </p>
      </div>

      <button
        type="submit"
        disabled={sending}
        className={`inline-flex h-12 w-full items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-colors disabled:opacity-70 sm:text-base ${buttonClass}`}
      >
        {sending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            {fr ? 'Envoi' : 'Sending'}
          </>
        ) : (
          <>
            {fr ? 'Recevoir mon audit' : 'Get my audit'}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </button>

      {failed && (
        <p className="text-sm text-destructive" role="alert">
          {fr
            ? "L'envoi a échoué. Écrivez-moi directement à elie@elieageron.com, ça marchera."
            : 'Sending failed. Write to me directly at elie@elieageron.com instead.'}
        </p>
      )}

      <p className={`text-xs ${noteClass}`}>
        {fr
          ? "Gratuit, sans engagement, et aucune relance derrière."
          : 'Free, no strings, and no chasing afterwards.'}
      </p>
    </form>
  );
};

export default AuditForm;
