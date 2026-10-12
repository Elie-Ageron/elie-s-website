import type { ElementType, ReactNode } from 'react';

/**
 * Un paragraphe long, découpé en paragraphes courts sur téléphone seulement.
 *
 * 🔴 **Créé le 12 octobre 2026.** Elie, sur son téléphone : *« c'est vraiment
 * des gros textes, c'est dur à lire. Il faut cet effet très aéré, très facile
 * à lire, où, quand on cherche une info, elle arrive toute seule sous notre
 * œil. »* Mesuré à 390 px le même jour : les quinze pages de villes portaient
 * chacune quatorze paragraphes de cinq à neuf lignes, les pages réseaux
 * locales et les pages de service une dizaine.
 *
 * ⚠️ **On découpe, on ne coupe pas.** Le texte de ces pages est ce qui les
 * distingue d'une page dupliquée où seul le nom de la commune change, c'est à
 * dire ce qui les fait exister pour Google (`CLAUDE.md`, pages locales). Le
 * raccourcir les affaiblirait. Le découper les rend lisibles sans rien retirer.
 *
 * Le paragraphe reste **un seul `<p>`** : les morceaux sont des `<span>` qui
 * passent en bloc sous `lg` et restent en ligne au dessus. Le grand écran ne
 * change pas d'un pixel, et un lecteur d'écran lit toujours un paragraphe.
 *
 * Le découpage se fait aux fins de phrase, par groupes d'environ 170 signes,
 * soit trois ou quatre lignes à 390 px. Un dernier morceau trop court est
 * recollé au précédent : une phrase seule de quatre mots en fin de paragraphe
 * se lit comme un oubli.
 */

const LIMITE = 160;
const RELIQUAT = 70;
const COURT = 60;
const PLAFOND = 200;

/* ⚠️ Pas de « lookbehind » (`(?<=...)`) : Safari ne le comprend qu'à partir
   d'iOS 16.4, et une expression qu'il ne sait pas lire fait échouer tout le
   module, donc la page. On pose un marqueur après chaque fin de phrase suivie
   d'une majuscule, puis on coupe sur le marqueur. */
const FIN_DE_PHRASE = /([.!?…])\s+(?=[A-ZÀ-ÖØ-Þ«"“])/g;

export const decouper = (texte: string): string[] => {
  const phrases = texte.replace(FIN_DE_PHRASE, '$1\u0000').split('\u0000');
  const morceaux: string[] = [];
  let courant = '';
  for (const phrase of phrases) {
    const ensemble = courant.length + 1 + phrase.length;
    /* Jamais de coupure au milieu d'un gras (`**`) ou d'un lien (`[...](...)`)
       des articles : le morceau ouvert attend sa fermeture. */
    const ouvert = (courant.match(/\*\*/g) ?? []).length % 2 === 1 ||
      (courant.match(/\[/g) ?? []).length > (courant.match(/\)/g) ?? []).length;
    /* Une phrase courte reste collée à la suivante, même au delà de la limite :
       seule sur sa ligne, « Ça change deux choses. » hachait la lecture au lieu
       de l'aérer. Mesuré sur les pages de villes le jour même. */
    const tropCourt = courant.length < COURT && ensemble <= PLAFOND;
    if (courant && ensemble > LIMITE && !tropCourt && !ouvert) {
      morceaux.push(courant);
      courant = phrase;
    } else {
      courant = courant ? `${courant} ${phrase}` : phrase;
    }
  }
  if (courant) {
    if (morceaux.length && courant.length < RELIQUAT) morceaux[morceaux.length - 1] += ` ${courant}`;
    else morceaux.push(courant);
  }
  return morceaux;
};

type Props = {
  texte: string;
  className?: string;
  /** Le rendu d'un morceau. Les articles y passent leur gras et leurs liens. */
  rendu?: (morceau: string) => ReactNode;
  /** L'élément porteur, `p` par défaut. `motion.p` pour garder une apparition. */
  as?: ElementType;
  [prop: string]: unknown;
};

const ParagrapheDecoupe = ({ texte, className, as: Element = 'p', rendu = (m) => m, ...reste }: Props) => {
  const morceaux = decouper(texte);
  return (
    <Element className={className} {...reste}>
      {morceaux.map((morceau, i) =>
        i === 0 ? (
          <span key={i}>{rendu(morceau)}</span>
        ) : (
          <span key={i} className="mt-4 block lg:mt-0 lg:inline">
            {' '}
            {rendu(morceau)}
          </span>
        ),
      )}
    </Element>
  );
};

export default ParagrapheDecoupe;
