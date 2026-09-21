/**
 * Ce qui a ete livre, montre directement sur la page.
 *
 * 🔴 **Elie, le 21 septembre 2026 :** *« je vais te mettre 3 videos dans le
 * chat a mettre sur la page, et tu les mettras sur la page, mais sans le lien
 * vers le reseau social de la personne. Parce que les reseaux, ils n'ont pas
 * encore beaucoup de resultats. »*
 *
 * C'est le renversement de ce que faisait `publications-reelles.ts`, qui
 * montrait une vignette et renvoyait vers le Reel public. La raison tient en
 * une phrase : **un lien vers un compte qui demarre dessert le travail qu'il
 * est cense prouver.** Le fichier est donc servi par le site, et le visiteur
 * regarde sans partir.
 *
 * Ce qu'on y gagne aussi : la preuve ne depend plus d'une URL Facebook qui
 * peut changer, ni d'une vignette de CDN signee qui expire.
 *
 * ── Les regles ────────────────────────────────────────────────────────────
 *
 * 1. **Aucun lien sortant, aucun identifiant de compte ecrit par nous.**
 * 2. **Aucun compteur.** Ni vues, ni abonnes. C'est la regle du site, et une
 *    video livree n'y echappe pas.
 * 3. **Les fichiers sont reencodes pour le web**, pas deposes tels quels. Les
 *    masters font 150 a 175 Mo en 2160 x 3840. Ici : 540 x 960, h264, CRF 30,
 *    audio mono 64 kbit/s, soit 4 a 5 Mo. Et `preload="none"` cote composant,
 *    donc rien ne se telecharge avant un clic.
 * 4. **Le metier est celui que la personne accepte de lire sur une page
 *    commerciale.** Pour Nouit, Elie a tranche : *« tu dis que c'est pour
 *    Nouit, therapeute, et conseil, met pas le mot medium. »*
 *
 * ⚠️ Ces images et ces videos montrent le visage de clientes sur un site
 * commercial. C'est Elie qui l'a demande, et c'est a lui de s'assurer de leur
 * accord. Ne rien ajouter ici sans le meme accord.
 */

type Base = {
  id: string;
  /** Le nom affiche sous la piece. */
  client: string;
  /** Le metier, tel qu'il peut etre lu publiquement. */
  metierFr: string;
  metierEn: string;
  /** Sert au texte alternatif et au survol, pas d'affichage par dessus l'image. */
  titreFr: string;
  titreEn: string;
};

export type PublicationLivree =
  | (Base & {
      type: 'video';
      /** Fichier mp4 servi par le site. */
      fichier: string;
      /** Vignette locale, meme cadrage que la video. */
      poster: string;
    })
  | (Base & {
      type: 'carrousel';
      /** Les planches, dans l'ordre de lecture. */
      images: string[];
    });

const carrouselNouit = Array.from(
  { length: 10 },
  (_, i) => `/publications/carrousel-nouit/${String(i + 1).padStart(2, '0')}.webp`
);

export const publicationsLivrees: PublicationLivree[] = [
  {
    type: 'carrousel',
    id: 'nouit-presentation',
    images: carrouselNouit,
    client: 'Nouït',
    metierFr: 'thérapeute et conseil, Albertville',
    metierEn: 'therapist and counsellor, Albertville',
    titreFr: 'Carrousel de présentation, dix planches',
    titreEn: 'Introduction carousel, ten slides',
  },
  {
    type: 'video',
    id: 'nouit-boule-de-cristal',
    fichier: '/publications/videos/nouit-boules-de-cristal.mp4',
    poster: '/publications/videos/nouit-boules-de-cristal.webp',
    client: 'Nouït',
    metierFr: 'thérapeute et conseil, Albertville',
    metierEn: 'therapist and counsellor, Albertville',
    titreFr: 'La boule de cristal, la question qui revient',
    titreEn: 'The crystal ball, the question that keeps coming up',
  },
  {
    type: 'video',
    id: 'isabelle-crayon',
    fichier: '/publications/videos/isabelle-crayon-papier-couleur.mp4',
    poster: '/publications/videos/isabelle-crayon-papier-couleur.webp',
    client: 'Isabelle Ageron-Vicat',
    metierFr: "formatrice en rééducation de l'écriture, Albertville",
    metierEn: 'handwriting rehabilitation trainer, Albertville',
    titreFr: 'Crayon de papier ou crayon de couleur',
    titreEn: 'Pencil or coloured pencil',
  },
];
