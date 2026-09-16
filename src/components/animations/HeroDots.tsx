import { useReducedMotion } from 'framer-motion';

/**
 * Le champ de points du hero, en CSS.
 *
 * 🔴 **Ce qu'il remplace, et ce que ça coûtait.** Le hero affichait une scène
 * WebGL construite avec Three.js et react-three-fiber : `HeroScene3D`, 515
 * lignes, trois nappes de particules, une répulsion au curseur, et trois
 * pastilles flottantes.
 *
 * Le prix, mesuré le 16 septembre 2026 : **776 ko bruts, 208 ko compressés**,
 * plus une boucle de rendu réglée sur `frameloop="always"`, donc qui tourne en
 * permanence même quand rien ne bouge, plus un écouteur de mouvement de souris
 * sur la fenêtre. Pour des points roses derrière un titre.
 *
 * Deux raisons de le retirer, et la seconde pèse plus lourd que la première.
 *
 * 1. Le coût. 208 ko compressés sur la page la plus importante du site, c'est
 *    plus que tout le reste du JavaScript de cette page réuni.
 * 2. **Les pastilles disaient « SEO », « Design » et « Web »**, dans la police
 *    Inter. C'est l'ancien positionnement, celui d'avant le pivot vers les deux
 *    piliers, écrit dans une typographie qui n'est pas celle du site. Un
 *    vestige que la refonte n'avait pas vu parce qu'il était dessiné dans un
 *    canvas.
 *
 * Et les pastilles flottantes sont nommément ce qu'Elie appelle « vraiment
 * intelligence artificielle » dans la liste de ses retours récurrents.
 *
 * Ce composant rend la même chose, les points, pour zéro kilo-octet.
 *
 * ⚠️ Les positions sont écrites en dur, pas tirées au hasard. Un rendu
 * aléatoire donnerait une image différente à chaque visite, et surtout une
 * image différente entre le pré-rendu et le navigateur.
 */

/** x, y en pourcentage, taille en pixels, opacité, durée et retard en secondes. */
const POINTS: [number, number, number, number, number, number][] = [
  [6, 18, 5, 0.5, 22, 0], [12, 62, 3, 0.3, 26, 3], [17, 34, 7, 0.45, 19, 1],
  [21, 81, 4, 0.35, 24, 5], [27, 11, 6, 0.4, 21, 2], [31, 47, 3, 0.25, 28, 6],
  [36, 72, 5, 0.5, 20, 4], [41, 26, 4, 0.3, 25, 7], [46, 88, 6, 0.35, 23, 1],
  [52, 15, 3, 0.25, 27, 8], [57, 55, 7, 0.45, 18, 2], [62, 33, 4, 0.3, 26, 5],
  [66, 77, 5, 0.4, 22, 3], [71, 21, 3, 0.25, 29, 9], [76, 64, 6, 0.5, 20, 0],
  [81, 41, 4, 0.35, 24, 6], [85, 84, 5, 0.3, 21, 4], [89, 29, 3, 0.25, 27, 2],
  [93, 58, 6, 0.4, 19, 7], [97, 13, 4, 0.3, 25, 1], [9, 45, 4, 0.3, 23, 8],
  [24, 58, 3, 0.25, 28, 2], [44, 68, 4, 0.35, 21, 6], [68, 9, 5, 0.4, 24, 3],
  [88, 70, 3, 0.25, 26, 5],
];

const HeroDots = () => {
  const reduit = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      {POINTS.map(([x, y, taille, opacite, duree, retard], i) => (
        <span
          key={i}
          className="absolute rounded-full bg-primary"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: taille,
            height: taille,
            opacity: opacite,
            // Le mouvement est une dérive de quelques pixels, pas une animation.
            // Il doit se remarquer si on le cherche, et pas autrement.
            animation: reduit ? undefined : `hero-derive ${duree}s ease-in-out ${retard}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default HeroDots;
