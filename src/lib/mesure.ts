/**
 * Google Analytics 4 et Hotjar, charges seulement apres « Accepter ».
 *
 * Les deux identifiants sont publics par nature (ils finissent dans le HTML
 * de toute facon), ils vivent donc ici plutot que dans une variable
 * d'environnement Vercel qu'on oublie de renseigner. Vide = outil coupe.
 */

// ID de mesure GA4, il commence par « G- ». analytics.google.com > Admin > Flux de donnees.
export const GA_ID = 'G-4Y7HSBC6QQ';
// Hotjar appartient a Contentsquare : un compte cree depuis 2025 ne donne plus
// de Site ID mais un tag Contentsquare. Donne par Elie le 12 octobre 2026.
export const HOTJAR_TAG = 'https://t.contentsquare.net/uxa/3e21667efab51.js';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

let charge = false;

const ajouterScript = (src: string) => {
  const script = document.createElement('script');
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
};

/** Idempotent : un second appel ne recharge rien. */
export const chargerMesure = () => {
  if (charge || typeof window === 'undefined') return;
  charge = true;

  if (GA_ID) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // gtag exige l'objet `arguments` lui meme, pas un tableau.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    // ⚠️ 13 mois maximum pour un cookie de mesure, c'est la regle CNIL.
    // GA4 pose 2 ans par defaut. Les pages vues des changements de route sont
    // comptees par GA4 lui meme (mesure amelioree, historique du navigateur) :
    // ne pas en envoyer a la main, elles seraient comptees deux fois.
    // 🔴 Signaux Google et personnalisation publicitaire coupes : sans ca,
    // gtag envoie aussi une requete a stats.g.doubleclick.net, la regie pub
    // de Google. Le bandeau promet « pas de pub », il doit rester vrai.
    window.gtag('config', GA_ID, {
      cookie_expires: 60 * 60 * 24 * 395,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });
    ajouterScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`);
  }

  if (HOTJAR_TAG) {
    // ⚠️ Rien a signaler a la main quand la route change : le projet
    // Contentsquare porte deja une regle « ArtificialPageview » sur
    // pushState et popstate (visible dans t.contentsquare.net/settings/1076220.json).
    // Un `trackPageview` en plus comptait chaque page deux fois, corrige le
    // 12 octobre 2026.
    ajouterScript(HOTJAR_TAG);
  }
};

