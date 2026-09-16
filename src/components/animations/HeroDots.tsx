import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * Le champ de points du hero, en CSS, avec répulsion au curseur.
 *
 * 🔴 **Ce qu'il remplace, et ce que ça coûtait.** Le hero affichait une scène
 * WebGL construite avec Three.js et react-three-fiber : `HeroScene3D`, 515
 * lignes, trois nappes de particules, une répulsion au curseur, et trois
 * pastilles flottantes.
 *
 * Le prix, mesuré le 16 septembre 2026 : **776 ko bruts, 208 ko compressés**,
 * plus une boucle de rendu réglée sur `frameloop="always"`, donc qui tourne en
 * permanence même quand rien ne bouge. Pour des points roses derrière un titre.
 *
 * Deux raisons de l'avoir retiré, et la seconde pèse plus lourd que la première.
 *
 * 1. Le coût. 208 ko compressés sur la page la plus importante du site, c'est
 *    plus que tout le reste du JavaScript de cette page réuni.
 * 2. **Les pastilles disaient « SEO », « Design » et « Web »**, dans la police
 *    Inter. C'est l'ancien positionnement, celui d'avant le pivot vers les deux
 *    piliers, écrit dans une typographie qui n'est pas celle du site. Un
 *    vestige que la refonte n'avait pas vu parce qu'il était dessiné dans un
 *    canvas.
 *
 * 🔴 **La répulsion, elle, est revenue le 16 septembre au soir.** Elie :
 * *« les points étaient beaucoup mieux avant, c'était interactif avec la
 * souris et tout, ça je kiffais. »* Ce qu'il regrettait était l'interaction,
 * pas la technique qui la portait. Elle est refaite ici en transformations CSS
 * pilotées par un seul écouteur, **pour zéro kilo-octet ajouté** : pas de
 * bibliothèque, pas de canvas, pas de boucle qui tourne dans le vide.
 *
 * ⚠️ **Ne pas réintroduire les pastilles flottantes avec.** C'est nommément ce
 * qu'Elie appelle *« vraiment intelligence artificielle »* dans la liste de ses
 * retours récurrents, et leur texte était faux.
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

/**
 * Rayon d'influence du curseur, en pixels, et poussée maximale.
 *
 * ⚠️ **Le rayon se règle contre l'espacement des points, pas au feeling.**
 * Vingt-cinq points sur un hero de 1000 x 830 px, ça fait environ 180 px entre
 * voisins : à 170 de rayon, un seul point bougeait à la fois, et un point seul
 * qui se décale ne se voit pas. À 280, trois à cinq points répondent ensemble
 * et le champ a l'air vivant. Si on change le nombre de points, on revérifie
 * ce chiffre.
 */
const RAYON = 280;
const POUSSEE = 30;

const HeroDots = () => {
  const reduit = useReducedMotion();
  const conteneur = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /* Pas de curseur à suivre sur un téléphone, et pas de mouvement du tout
       quand le visiteur a demandé qu'on lui en épargne. Dans les deux cas on
       n'attache rien : un écouteur qui ne sert à rien coûte quand même. */
    if (reduit || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const racine = conteneur.current;
    if (!racine) return;
    const points = Array.from(racine.children) as HTMLElement[];

    let cadre = 0;
    let x = 0;
    let y = 0;
    let dedans = false;

    /* Le rectangle est relu au défilement et au redimensionnement, jamais à
       chaque mouvement de souris : `getBoundingClientRect` force un calcul de
       mise en page, et l'appeler soixante fois par seconde est exactement ce
       qui rend une animation saccadée. */
    let zone = racine.getBoundingClientRect();
    const remesurer = () => {
      zone = racine.getBoundingClientRect();
    };

    const peindre = () => {
      cadre = 0;
      for (const point of points) {
        if (!dedans) {
          point.style.transform = '';
          continue;
        }
        const px = zone.left + (parseFloat(point.dataset.x ?? '0') / 100) * zone.width;
        const py = zone.top + (parseFloat(point.dataset.y ?? '0') / 100) * zone.height;
        const dx = px - x;
        const dy = py - y;
        const distance = Math.hypot(dx, dy);
        if (distance > RAYON || distance === 0) {
          point.style.transform = '';
          continue;
        }
        const force = ((RAYON - distance) / RAYON) ** 2 * POUSSEE;
        point.style.transform = `translate(${(dx / distance) * force}px, ${(dy / distance) * force}px)`;
      }
    };

    const bouger = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      dedans = x >= zone.left && x <= zone.right && y >= zone.top && y <= zone.bottom;
      if (!cadre) cadre = requestAnimationFrame(peindre);
    };

    const sortir = () => {
      dedans = false;
      if (!cadre) cadre = requestAnimationFrame(peindre);
    };

    window.addEventListener('pointermove', bouger, { passive: true });
    window.addEventListener('pointerleave', sortir, { passive: true });
    window.addEventListener('scroll', remesurer, { passive: true });
    window.addEventListener('resize', remesurer);
    return () => {
      window.removeEventListener('pointermove', bouger);
      window.removeEventListener('pointerleave', sortir);
      window.removeEventListener('scroll', remesurer);
      window.removeEventListener('resize', remesurer);
      if (cadre) cancelAnimationFrame(cadre);
    };
  }, [reduit]);

  return (
    <div
      ref={conteneur}
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {POINTS.map(([x, y, taille, opacite, duree, retard], i) => (
        /* Deux éléments imbriqués, et ce n'est pas du zèle : la dérive est une
           animation CSS sur `transform`, la répulsion est un `transform` écrit
           par le script. Sur le même élément, le second écrase la première. */
        <span
          key={i}
          data-x={x}
          data-y={y}
          className="absolute will-change-transform"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: taille,
            height: taille,
            transition: 'transform 420ms cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          <span
            className="block h-full w-full rounded-full bg-primary"
            style={{
              opacity: opacite,
              // Le mouvement est une dérive de quelques pixels, pas une animation.
              // Il doit se remarquer si on le cherche, et pas autrement.
              animation: reduit ? undefined : `hero-derive ${duree}s ease-in-out ${retard}s infinite`,
            }}
          />
        </span>
      ))}
    </div>
  );
};

export default HeroDots;
