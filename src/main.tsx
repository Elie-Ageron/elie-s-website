import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import { langueInitiale } from "./contexts/LanguageContext";
import "./index.css";

const rootElement = document.getElementById("root")!;

const app = (
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

/**
 * 🔴 **Le « on voit une autre page pendant une seconde » venait d'ici.**
 *
 * La condition était `PROD && rootElement.hasChildNodes()`, écrite quand le
 * seul contenu possible dans `#root` venait de `prerender.mjs`, c'est à dire
 * un vrai rendu React qu'on peut hydrater.
 *
 * Depuis le 16 septembre 2026, `prerender-head.mjs` y écrit aussi un squelette
 * de liens pour les robots, en HTML écrit à la main. React tentait donc
 * d'hydrater un arbre qui ne ressemble à rien de ce qu'il produit : relevé en
 * production le 17 septembre, **22 erreurs par chargement de page**, erreur
 * React 418 (l'hydratation ne correspond pas) suivie de 423 (bascule de la
 * racine entière en rendu client).
 *
 * Ce que voyait le visiteur : le squelette, puis un vide, puis la vraie page.
 * Ce que payait le processeur : une tentative d'hydratation complète, jetée,
 * puis un rendu complet. Sur le fil principal déjà chargé de l'accueil.
 *
 * On distingue donc les deux cas au lieu de les confondre. Le squelette porte
 * `data-squelette`, et un squelette ne s'hydrate pas : on vide la racine et on
 * rend une fois. Une seule peinture, aucune erreur.
 *
 * ⚠️ Ne pas revenir à un simple `hasChildNodes()`. Les deux sources de contenu
 * dans `#root` n'ont pas la même nature, et rien dans le DOM ne le dit à part
 * cet attribut.
 */
const squelette = rootElement.firstElementChild?.hasAttribute('data-squelette');

/**
 * Le HTML pre-rendu est en francais, toujours. Un visiteur anglophone rend donc
 * un arbre qui ne correspond pas a ce qui a ete servi, et l'hydrater redonne
 * exactement l'erreur 418 puis 423 corrigee le 17 septembre : arbre jete, page
 * refaite, deux rendus sur le fil principal.
 *
 * On ne tente donc pas de l'hydrater. Un rendu propre, une seule fois.
 */
const autreLangue = langueInitiale !== 'fr';

if (import.meta.env.PROD && rootElement.hasChildNodes() && !squelette && !autreLangue) {
  hydrateRoot(rootElement, app);
} else {
  // `createRoot` vide la racine à son premier rendu, mais on le fait nous mêmes :
  // le comportement est documenté, il n'est pas garanti d'une version à l'autre,
  // et un squelette resté en place se verrait immédiatement.
  if (squelette || autreLangue) rootElement.replaceChildren();
  createRoot(rootElement).render(app);
}
