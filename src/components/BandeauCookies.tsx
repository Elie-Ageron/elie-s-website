import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cookie } from 'lucide-react';
import { useLanguage, preferePeutEtreAnglais } from '@/contexts/LanguageContext';
import { EVENEMENT_OUVRIR, enregistrerChoix, lireChoix } from '@/lib/consentement';

/**
 * Le bandeau cookies : une carte en bas a gauche, qui n'arrete rien.
 *
 * Elie, le 12 octobre 2026 : *« une enorme page cookie qui prend tout et tu
 * ne peux pas utiliser le site, c'est horrible. Un truc en bas a gauche qui
 * n'empeche pas d'utiliser le site, c'est parfait. »* Et : *« il doit donner
 * envie de cliquer sur Accepter, en montrant un gain. »*
 *
 * Donc pas de voile, pas de focus vole, pas de scroll bloque. Le texte dit ce
 * que le visiteur y gagne (un site plus clair) et ce qu'il ne risque pas (pas
 * de pub, rien de revendu), a la premiere personne comme le reste du site.
 *
 * 🔴 **« Refuser » a la meme taille que « Accepter ».** La CNIL exige qu'on
 * refuse aussi facilement qu'on accepte. Le bouton plein peut porter la
 * preference, pas une taille ou un lien gris planque sous le texte.
 *
 * ⚠️ Rien ne s'affiche avant le montage, comme `BandeauLangue` : le bandeau
 * n'existe ni dans le HTML pre-rendu ni pour un robot. Il est hors flux, il
 * ne decale donc rien (CLS de l'accueil a zero).
 *
 * Elie, le meme jour, a la premiere version : *« on dirait que c'est inclus
 * dans le site »*. Meme fond que la page, ombre legere : elle s'y fondait.
 * Elle est maintenant blanche sur le papier, avec une vraie ombre portee,
 * le filet rose en tete et un pictogramme qui dit « cookies » avant qu'on
 * lise. Toujours rien de sombre, rien qui pulse.
 *
 * ⚠️ Sur telephone il s'arrete a 88 px du bord droit : la bulle WhatsApp
 * vit en bas a droite et il la recouvrait.
 */
const DELAI_APPARITION = 1200;

const textes = {
  fr: {
    titre: 'Vous m\'aidez à améliorer le site ?',
    corps:
      'Avec votre accord, je vois quelles pages vous servent et où vous bloquez, pour les rendre plus claires. Pas de pub, rien n\'est revendu.',
    accepter: 'Accepter',
    refuser: 'Refuser',
    details: 'Ce qui est mesuré',
  },
  en: {
    titre: 'Help me make this site better?',
    corps:
      'With your OK, I can see which pages help you and where you get stuck, so I can make them clearer. No ads, nothing sold.',
    accepter: 'Accept',
    refuser: 'Decline',
    details: "What's measured",
  },
};

const BandeauCookies = () => {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [entre, setEntre] = useState(false);

  useEffect(() => {
    let minuterie: number | undefined;
    if (lireChoix() === null) {
      minuterie = window.setTimeout(() => setVisible(true), DELAI_APPARITION);
    }
    const ouvrir = () => setVisible(true);
    window.addEventListener(EVENEMENT_OUVRIR, ouvrir);
    return () => {
      window.clearTimeout(minuterie);
      window.removeEventListener(EVENEMENT_OUVRIR, ouvrir);
    };
  }, []);

  // Une frame d'ecart pour que la transition d'entree ait un etat de depart.
  useEffect(() => {
    if (!visible) {
      setEntre(false);
      return;
    }
    const t = window.setTimeout(() => setEntre(true), 20);
    return () => window.clearTimeout(t);
  }, [visible]);

  if (!visible) return null;

  // Un navigateur en anglais lit le bandeau en anglais, meme sur la page
  // francaise : c'est la seule chose qu'on lui demande de lire avant de choisir.
  const t = language === 'en' || preferePeutEtreAnglais() ? textes.en : textes.fr;

  const choisir = (choix: 'accepte' | 'refuse') => {
    setVisible(false);
    enregistrerChoix(choix);
  };

  return (
    <div
      role="region"
      aria-label="Cookies"
      lang={t === textes.en ? 'en' : 'fr'}
      className={`fixed bottom-4 left-4 right-[5.5rem] z-50 sm:right-auto sm:bottom-6 sm:left-6 sm:w-[23rem] overflow-hidden rounded-2xl border border-foreground/10 bg-card p-4 pt-5 sm:p-5 sm:pt-6 shadow-[0_2px_6px_rgba(0,0,0,0.06),0_16px_48px_rgba(0,0,0,0.16)] transition-all duration-500 ease-out motion-reduce:transition-none ${
        entre ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {/* Le filet rose du site, en tete de carte : c'est lui qui la detache
          du fond papier. Sans lui elle se lisait comme un bloc de la page. */}
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-primary" />
      <p className="flex items-center gap-2.5 font-semibold text-foreground text-base">
        <span aria-hidden="true" className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Cookie className="h-[18px] w-[18px]" strokeWidth={2} />
        </span>
        {t.titre}
      </p>
      <p className="mt-1.5 text-base lg:text-sm text-muted-foreground leading-relaxed">
        {t.corps}{' '}
        <Link
          to="/politique-confidentialite#cookies"
          className="text-foreground underline underline-offset-4 hover:text-primary"
        >
          {t.details}
        </Link>
      </p>
      <div className="mt-4 grid grid-cols-2 gap-2.5">
        <button
          type="button"
          onClick={() => choisir('accepte')}
          className="inline-flex min-h-[44px] sm:min-h-[40px] items-center justify-center rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          {t.accepter}
        </button>
        <button
          type="button"
          onClick={() => choisir('refuse')}
          className="inline-flex min-h-[44px] sm:min-h-[40px] items-center justify-center rounded-full border border-border px-4 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
        >
          {t.refuser}
        </button>
      </div>
    </div>
  );
};

export default BandeauCookies;
