/**
 * Google Analytics 4 et Hotjar, charges seulement apres « Accepter ».
 *
 * Les deux identifiants sont publics par nature (ils finissent dans le HTML
 * de toute facon), ils vivent donc ici plutot que dans une variable
 * d'environnement Vercel qu'on oublie de renseigner. Vide = outil coupe.
 */

// ID de mesure GA4, il commence par « G- ». analytics.google.com > Admin > Flux de donnees.
export const GA_ID = '';
// Site ID Hotjar, un nombre. insights.hotjar.com > Sites & Organizations.
export const HOTJAR_ID = '';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    hj?: ((...args: unknown[]) => void) & { q?: unknown[] };
    _hjSettings?: { hjid: number; hjsv: number };
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

  if (HOTJAR_ID) {
    const hj =
      window.hj ||
      Object.assign(
        (...args: unknown[]) => {
          (hj.q = hj.q || []).push(args);
        },
        { q: [] as unknown[] },
      );
    window.hj = hj;
    window._hjSettings = { hjid: Number(HOTJAR_ID), hjsv: 6 };
    ajouterScript(`https://static.hotjar.com/c/hotjar-${HOTJAR_ID}.js?sv=6`);
  }
};
