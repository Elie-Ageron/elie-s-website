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
    /* 🔴 **Ici vivait `matchMedia('(hover: hover) and (pointer: fine)')`, et il
       coupait l'effet chez Elie.** Beaucoup de portables Windows ont un écran
       tactile, et la requête peut alors répondre « pointeur grossier » alors
       qu'une souris est branchée. Pire : le défaut est muet, rien ne se passe
       et rien ne le dit.

       On ne devine donc plus le matériel, on regarde ce qui arrive : un
       `pointermove` porte son `pointerType`. Un doigt n'envoie jamais `mouse`,
       donc l'effet reste éteint sur un téléphone sans qu'on ait à le prédire.
       La règle générale : **tester le geste réel plutôt que le profil de
       l'appareil.** */
    if (reduit) return;

    const racine = conteneur.current;
    if (!racine) return;
    const points = Array.from(racine.children) as HTMLElement[];

    /* 🔴 **Ce bloc était piloté par `requestAnimationFrame`, et c'est ce qui
       l'a rendu invisible pendant une heure.** Une frame ne se planifie que si
       le navigateur compose réellement la page : onglet masqué, page hors
       écran, volet d'aperçu non composé, et le rappel n'est jamais appelé. Le
       code était juste, l'écouteur recevait bien les événements, et rien ne
       bougeait, sans la moindre erreur.

       On limite donc à la montre plutôt qu'à la frame. Le rendu est identique
       pour le visiteur, il ne dépend plus d'une condition invisible, et il se
       vérifie dans n'importe quel environnement. */
    let dernier = 0;
    let x = 0;
    let y = 0;

    /* Le rectangle est relu à chaque passage, et non gardé depuis le montage.
       Au montage le hero n'a pas sa taille finale, la police n'est pas encore
       chargée : un rectangle mis en cache là devient faux et le reste.

       Une lecture de géométrie sur un seul élément, soixante fois par seconde,
       ne coûte rien. Ce qui coûte, c'est d'alterner lecture et écriture dans
       une boucle : ici on lit une fois, puis on écrit vingt-cinq fois. */
    const peindre = () => {
      const zone = racine.getBoundingClientRect();
      const dedans = x >= zone.left && x <= zone.right && y >= zone.top && y <= zone.bottom;
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
      // Un doigt ou un stylet ne pousse rien : seule une souris repousse.
      if (e.pointerType !== 'mouse') return;
      x = e.clientX;
      y = e.clientY;
      // Une soixantaine de passages par seconde au maximum, quoi qu'envoie la souris.
      const maintenant = performance.now();
      if (maintenant - dernier < 16) return;
      dernier = maintenant;
      peindre();
    };

    /* Curseur sorti de la fenêtre : on l'envoie très loin, et l'image suivante
       remet tous les points en place. Pas de drapeau à tenir à jour. */
    const sortir = () => {
      x = -1e6;
      y = -1e6;
      dernier = 0;
      peindre();
    };

    window.addEventListener('pointermove', bouger, { passive: true });
    window.addEventListener('pointerleave', sortir, { passive: true });
    return () => {
      window.removeEventListener('pointermove', bouger);
      window.removeEventListener('pointerleave', sortir);
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
