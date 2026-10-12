import { useEffect } from 'react';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { EVENEMENT_CHOIX, effacerCookiesDeMesure, lireChoix } from '@/lib/consentement';
import { chargerMesure } from '@/lib/mesure';

/**
 * Deux etages de mesure, et ils n'ont pas la meme regle.
 *
 * 1. **Vercel Web Analytics, pour tout le monde.** Aucun cookie, aucun
 *    stockage dans le navigateur, donc aucun consentement a demander. C'est
 *    lui qui compte 100 % des visites : pages vues, provenance, pays, appareil.
 *    Il faut l'activer une fois dans le tableau de bord Vercel, onglet
 *    Analytics, sinon son script repond 404.
 * 2. **Google Analytics et Hotjar, apres « Accepter » seulement.** Voir
 *    `src/lib/consentement.ts` et `src/lib/mesure.ts`.
 *
 * ⚠️ Le conteneur Google Tag Manager charge par `index.html` est vide au
 * 12 octobre 2026 (aucune balise publiee). Il ne pose aucun cookie. Ne pas y
 * publier GA4 en plus : la mesure serait comptee deux fois, et hors bandeau.
 */
const Analytics = () => {
  useEffect(() => {
    const choix = lireChoix();
    if (choix === 'accepte') chargerMesure();
    if (choix === 'refuse') effacerCookiesDeMesure();
    const surChoix = (e: Event) => {
      if ((e as CustomEvent).detail === 'accepte') chargerMesure();
    };
    window.addEventListener(EVENEMENT_CHOIX, surChoix);
    return () => window.removeEventListener(EVENEMENT_CHOIX, surChoix);
  }, []);

  return <VercelAnalytics />;
};

export default Analytics;
