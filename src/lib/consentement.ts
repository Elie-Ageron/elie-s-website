/**
 * Le choix du visiteur sur la mesure d'audience, et rien d'autre.
 *
 * 🔴 **Rien ne se charge avant un clic sur « Accepter ».** Google Analytics et
 * Hotjar posent des cookies qui ne sont pas exemptes : la CNIL exige un
 * consentement prealable, et un accord « par defaut » ne vaut pas accord
 * (CJUE, Planet49, 2019). Elie avait demande un bandeau accepte d'office le
 * 2 octobre 2026, ecarte pour cette raison. Ne pas y revenir.
 *
 * Ce qui ne demande rien : Vercel Web Analytics (aucun cookie, aucun
 * stockage), la langue et ce choix lui meme (stockage fonctionnel).
 *
 * Le choix est garde six mois, la duree que recommande la CNIL, puis on
 * redemande. Un refus est garde aussi longtemps qu'un accord : redemander
 * plus souvent a qui a refuse, c'est le harceler jusqu'au oui.
 */

export type Choix = 'accepte' | 'refuse';

const CLEF = 'elie-cookies';
const SIX_MOIS = 1000 * 60 * 60 * 24 * 182;
export const EVENEMENT_CHOIX = 'elie-cookies-choix';
export const EVENEMENT_OUVRIR = 'elie-cookies-ouvrir';

// Repli quand le stockage est bloque : le choix vaut pour la visite en cours.
let enMemoire: Choix | null = null;

export const lireChoix = (): Choix | null => {
  if (typeof window === 'undefined') return null;
  try {
    const brut = window.localStorage.getItem(CLEF);
    if (!brut) return enMemoire;
    const { choix, date } = JSON.parse(brut) as { choix: Choix; date: number };
    if (choix !== 'accepte' && choix !== 'refuse') return enMemoire;
    if (Date.now() - date > SIX_MOIS) return null;
    return choix;
  } catch {
    return enMemoire;
  }
};

export const enregistrerChoix = (choix: Choix) => {
  const avant = lireChoix();
  enMemoire = choix;
  try {
    window.localStorage.setItem(CLEF, JSON.stringify({ choix, date: Date.now() }));
  } catch {
    // Stockage bloque : le choix tient jusqu'a la fin de la visite.
  }
  window.dispatchEvent(new CustomEvent(EVENEMENT_CHOIX, { detail: choix }));

  // Un retrait doit effacer ce qui a deja ete pose, pas seulement arreter
  // d'en poser. Les scripts deja charges ne se dechargent pas : on recharge.
  if (avant === 'accepte' && choix === 'refuse') {
    effacerCookiesDeMesure();
    window.location.reload();
  }
};

/** Le lien « Cookies » du pied de page rouvre le bandeau. */
export const rouvrirBandeau = () => {
  window.dispatchEvent(new Event(EVENEMENT_OUVRIR));
};

const effacerCookiesDeMesure = () => {
  const domaines = ['', window.location.hostname, `.${window.location.hostname.replace(/^www\./, '')}`];
  document.cookie.split(';').forEach((morceau) => {
    const nom = morceau.split('=')[0].trim();
    if (!/^(_ga|_gid|_gat|_hj)/.test(nom)) return;
    domaines.forEach((domaine) => {
      document.cookie = `${nom}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domaine ? `; domain=${domaine}` : ''}`;
    });
  });
};
