/**
 * Google Analytics 4 et Hotjar, charges seulement apres « Accepter ».
 *
 * Les deux identifiants sont publics par nature (ils finissent dans le HTML
 * de toute facon), ils vivent donc ici plutot que dans une variable
 * d'environnement Vercel qu'on oublie de renseigner. Vide = outil coupe.
 */

// ID de mesure GA4, il commence par « G- ». analytics.google.com > Admin > Flux de donnees.
export const GA_ID = '';
// Hotjar appartient a Contentsquare : un compte cree depuis 2025 ne donne plus
// de Site ID mais un tag Contentsquare. Donne par Elie le 12 octobre 2026.
export const HOTJAR_TAG = 'https://t.contentsquare.net/uxa/3e21667efab51.js';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    _uxa?: unknown[];
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
    window.gtag('config', GA_ID, { cookie_expires: 60 * 60 * 24 * 395 });
    ajouterScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`);
  }

  if (HOTJAR_TAG) {
    window._uxa = window._uxa || [];
    window._uxa.push(['setPath', cheminCourant()]);
    ajouterScript(HOTJAR_TAG);
  }
};

const cheminCourant = () => window.location.pathname + window.location.hash.replace('#', '?__');

/**
 * ⚠️ Le tag Contentsquare ne voit pas les changements de route d'une
 * application React : il compte une page par chargement complet. Chaque
 * navigation doit donc lui etre signalee, sinon toute la visite est rangee
 * sous la premiere page ouverte. GA4, lui, les voit tout seul.
 */
export const signalerPage = () => {
  if (!charge || !HOTJAR_TAG || !window._uxa) return;
  window._uxa.push(['trackPageview', cheminCourant()]);
};
