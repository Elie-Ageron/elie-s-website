import logoIsabelle from '@/assets/logo-isabelle.webp';
import logoInevolve from '@/assets/logo-inevolve.webp';

/**
 * Ce qui a ete livre, montre directement sur la page, range par cliente.
 *
 * 🔴 **Le lien vers les comptes est revenu le 10 octobre 2026.** Elie : *« le
 * lien vers leur compte, comme ca, c'est carre. »*
 *
 * Il avait ete retire le 21 septembre, et pour une bonne raison a l'epoque :
 * *« sans le lien vers le reseau social de la personne, parce que les reseaux,
 * ils n'ont pas encore beaucoup de resultats. »* Un lien vers un compte qui
 * demarre dessert le travail qu'il est cense prouver. Trois semaines plus
 * tard, la page Facebook d'Isabelle a passe plusieurs reels au dela de
 * 80 000 vues : le compte soutient maintenant le lien, et le lien devient la
 * preuve verifiable que la page ne peut pas afficher elle meme.
 *
 * Ce qui ne change pas : **les fichiers restent servis par le site.** Le
 * visiteur regarde sur place, et le lien sert a qui veut verifier le reste.
 * La preuve ne depend donc toujours pas d'une URL Facebook ni d'une vignette
 * de CDN signee qui expire.
 *
 * ── Les regles ────────────────────────────────────────────────────────────
 *
 * 1. **Aucun compteur ecrit par nous.** Ni vues, ni abonnes, meme quand ils
 *    sont bons. C'est la regle du site. Le lien laisse le visiteur les voir
 *    sur la plateforme, ce qui vaut mieux qu'un chiffre qu'on affiche soi meme.
 * 2. **Les fichiers sont reencodes pour le web**, pas deposes tels quels. Les
 *    masters font 60 a 210 Mo en 2160 x 3840. Ici : 540 x 960, h264, CRF 30,
 *    audio mono 64 kbit/s, soit 2 a 5 Mo. Et `preload="none"` cote composant,
 *    donc rien ne se telecharge avant un clic.
 * 3. **Le metier est celui que la personne accepte de lire sur une page
 *    commerciale.** Pour Nouit, Elie a tranche : *« tu dis que c'est pour
 *    Nouit, therapeute, et conseil, met pas le mot medium. »*
 * 4. **Une video n'entre ici qu'une fois publiee par la cliente.** La montrer
 *    sur le site avant sa sortie lui volerait sa premiere diffusion.
 * 5. **Trois pieces par cliente.** La grille est en trois colonnes : une
 *    rangee de deux laisse une case vide qui se lit comme un oubli.
 *
 * ⚠️ Ces images et ces videos montrent le visage de clientes sur un site
 * commercial. C'est Elie qui l'a demande, et c'est a lui de s'assurer de leur
 * accord. Ne rien ajouter ici sans le meme accord.
 */

type Base = {
  id: string;
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

export type ClienteLivree = {
  id: string;
  /** Le nom affiche au dessus de ses pieces. */
  nom: string;
  /** Le nom de la marque, pour le texte alternatif du logo. */
  marque: string;
  logo: string;
  /** Le metier, tel qu'il peut etre lu publiquement. */
  metierFr: string;
  metierEn: string;
  /** Les noms de reseau ne se traduisent pas. */
  liens: { reseau: string; href: string }[];
  pieces: PublicationLivree[];
};

const carrouselNouit = Array.from(
  { length: 10 },
  (_, i) => `/publications/carrousel-nouit/${String(i + 1).padStart(2, '0')}.webp`
);

/* Isabelle d'abord : c'est le compte le plus avance, et le lien vers sa page
   Facebook est celui qui prouve le plus. */
export const clientesLivrees: ClienteLivree[] = [
  {
    id: 'isabelle',
    nom: 'Isabelle Ageron-Vicat',
    marque: 'Isabelle Ageron-Vicat',
    logo: logoIsabelle,
    metierFr: "formatrice en rééducation de l'écriture, Albertville",
    metierEn: 'handwriting rehabilitation trainer, Albertville',
    // Instagram retrouve le 11 octobre 2026 : il commente le reel d'Elie.
    liens: [
      { reseau: 'Facebook', href: 'https://www.facebook.com/isabelleageronvicat/' },
      { reseau: 'Instagram', href: 'https://www.instagram.com/cabinetisabelleageronvicat/' },
    ],
    pieces: [
      {
        // Sa derniere video publiee, et celle qu'Elie a demande de mettre :
        // « elle a vraiment bien marche ». Tournage du 3 octobre.
        type: 'video',
        id: 'isabelle-une-forme',
        fichier: '/publications/videos/isabelle-une-forme-six-lettres.mp4',
        poster: '/publications/videos/isabelle-une-forme-six-lettres.webp',
        titreFr: 'Une forme, six lettres',
        titreEn: 'One shape, six letters',
      },
      {
        type: 'video',
        id: 'isabelle-maternelle',
        fichier: '/publications/videos/isabelle-par-quoi-commencer-maternelle.mp4',
        poster: '/publications/videos/isabelle-par-quoi-commencer-maternelle.webp',
        titreFr: "Par où commencer le geste d'écriture en maternelle",
        titreEn: 'Where to start with handwriting in nursery school',
      },
      {
        type: 'video',
        id: 'isabelle-crayon',
        fichier: '/publications/videos/isabelle-crayon-papier-couleur.mp4',
        poster: '/publications/videos/isabelle-crayon-papier-couleur.webp',
        titreFr: 'Crayon de papier ou crayon de couleur',
        titreEn: 'Pencil or coloured pencil',
      },
    ],
  },
  {
    id: 'nouit',
    nom: 'Nouït',
    marque: 'Inevolve Intuition',
    logo: logoInevolve,
    metierFr: 'thérapeute et conseil, Albertville',
    metierEn: 'therapist and counsellor, Albertville',
    liens: [
      { reseau: 'Instagram', href: 'https://www.instagram.com/inevolve_intuition' },
      { reseau: 'Facebook', href: 'https://www.facebook.com/inevolveintuition' },
    ],
    pieces: [
      {
        type: 'carrousel',
        id: 'nouit-presentation',
        images: carrouselNouit,
        titreFr: 'Carrousel de présentation, dix planches',
        titreEn: 'Introduction carousel, ten slides',
      },
      {
        // Publiee le 9 octobre 2026, la plus recente du tournage 2.
        type: 'video',
        id: 'nouit-quand-tout-va-bien',
        fichier: '/publications/videos/nouit-quand-tout-va-bien.mp4',
        poster: '/publications/videos/nouit-quand-tout-va-bien.webp',
        titreFr: 'Quand tout va bien',
        titreEn: 'When everything is fine',
      },
      {
        type: 'video',
        id: 'nouit-boule-de-cristal',
        fichier: '/publications/videos/nouit-boules-de-cristal.mp4',
        poster: '/publications/videos/nouit-boules-de-cristal.webp',
        titreFr: 'La boule de cristal, la question qui revient',
        titreEn: 'The crystal ball, the question that keeps coming up',
      },
    ],
  },
];

/**
 * Le Salon Habitat & Deco d'Albertville, octobre 2026.
 *
 * Elie a interviewe les exposants sur leur stand, une question par artisan,
 * puis a monte leur video le soir meme et la leur a envoyee. Ce ne sont pas
 * des clients : ils n'ont rien achete.
 *
 * 🔴 **Donc jamais leur logo dans la bande clients de l'accueil.** Elle dit
 * « mes clients », et ce serait faux, exactement le cas de MyDrop. Sous une
 * video, le nom de l'entreprise reste vrai : c'est la sienne, dans sa video.
 *
 * 🔴 **Une video n'entre ici qu'avec un « oui » ecrit de l'exposant**, pour
 * le site precisement. Accepter une interview au salon n'est pas accepter
 * d'apparaitre sur le site commercial d'un prestataire. Elie leur envoie :
 * « Est-ce que je peux mettre votre video sur mon site, dans mes
 * realisations, avec le nom de [entreprise] ? »
 *
 * | Exposant | Accord |
 * |---|---|
 * | Generation Menuiserie 73 (Yohann) | « Avec plaisir », WhatsApp, 10 octobre 2026 |
 * | Parcs et Jardins (Cyril Delavigne) | « Pas de soucis, vous pouvez publier la video », WhatsApp, 10 octobre 2026 |
 * | La Cuisine by Louise Verlaine, Chambery | « Oui, bien sur, avec grand plaisir », WhatsApp, 11 octobre 2026 |
 *
 * ⚠️ Louise Verlaine demandait aussi un lien vers son site. Elie a tranche
 * le 11 octobre : le nom oui, le lien non. Un lien sortant ici donnerait de
 * l'autorite a un tiers depuis la page qui vend, et ouvrirait la porte a
 * chaque exposant suivant.
 *
 * ⚠️ Sept videos ont ete livrees. Les quatre autres attendent leur reponse, et
 * Belle Belle Belle n'avait pas ete prevenue d'une diffusion au moment du
 * tournage.
 *
 * C'est la seule preuve du site qui montre des artisans, le trou que la
 * relecture par profil signalait depuis le 13 septembre 2026.
 */
export type VideoSalon = {
  id: string;
  entreprise: string;
  /** Un lien vers la publication, quand la video est sortie sur un reseau. */
  lien?: LienVideo;
  metierFr: string;
  metierEn: string;
  fichier: string;
  poster: string;
  /**
   * La question posee, sert au titre de la video. Seulement quand elle est
   * lisible a l'ecran : on ne la reconstitue pas de memoire.
   */
  questionFr?: string;
  questionEn?: string;
};

export const videosSalon: VideoSalon[] = [
  {
    id: 'salon-generation-menuiserie-73',
    entreprise: 'Génération Menuiserie 73',
    metierFr: 'menuiserie, Savoie',
    metierEn: 'windows and doors, Savoie',
    fichier: '/publications/videos/salon-generation-menuiserie-73.mp4',
    poster: '/publications/videos/salon-generation-menuiserie-73.webp',
    questionFr: "Le plus beau compliment qu'un client vous a fait",
    questionEn: 'The best compliment a customer ever paid you',
  },
  {
    id: 'salon-parcs-et-jardins',
    entreprise: 'Parcs et Jardins',
    metierFr: 'espaces verts, Savoie',
    metierEn: 'landscaping, Savoie',
    fichier: '/publications/videos/salon-parcs-et-jardins.mp4',
    poster: '/publications/videos/salon-parcs-et-jardins.webp',
  },
  {
    id: 'salon-louise-verlaine-chambery',
    entreprise: 'La Cuisine by Louise Verlaine',
    metierFr: 'cuisiniste, Chambéry',
    metierEn: 'kitchen designer, Chambéry',
    fichier: '/publications/videos/salon-louise-verlaine-chambery.mp4',
    poster: '/publications/videos/salon-louise-verlaine-chambery.webp',
  },
];

/* ── Les videos de l'accueil ──────────────────────────────────────────────

   Elie, le 11 octobre 2026 : « ce serait bien que ce soit sur l'accueil,
   toutes ces videos-la, les videos Nouit, Isabelle, etc. Ca fait la preuve
   sociale en plus. »

   Les memes fichiers que `/reseaux-sociaux`, aplatis en une seule bande. Le
   carrousel de Nouit n'y est pas : un carrousel qui defile dans une bande qui
   defile, c'est deux gestes identiques l'un dans l'autre, et le doigt ne sait
   plus lequel il pousse. */

export const INSTAGRAM_ELIE = 'https://www.instagram.com/elie.ageron/';

export type LienVideo = { libelleFr: string; libelleEn: string; href: string };

export type VideoBande = {
  id: string;
  fichier: string;
  poster: string;
  titreFr: string;
  titreEn: string;
  /** La personne ou l'entreprise, affichee sous la video. */
  nom: string;
  metierFr: string;
  metierEn: string;
  lien?: LienVideo;
};

export const depuisSalon = (v: VideoSalon): VideoBande => ({
  id: v.id,
  fichier: v.fichier,
  poster: v.poster,
  titreFr: v.questionFr ? `${v.entreprise} : ${v.questionFr}` : `${v.entreprise}, interview au salon`,
  titreEn: v.questionEn ? `${v.entreprise}: ${v.questionEn}` : `${v.entreprise}, interview at the fair`,
  nom: v.entreprise,
  metierFr: v.metierFr,
  metierEn: v.metierEn,
  lien: v.lien,
});

const depuisCliente = (c: ClienteLivree): VideoBande[] =>
  c.pieces.flatMap((p) =>
    p.type === 'video'
      ? [
          {
            id: p.id,
            fichier: p.fichier,
            poster: p.poster,
            titreFr: `${c.nom} : ${p.titreFr}`,
            titreEn: `${c.nom}: ${p.titreEn}`,
            nom: c.nom,
            metierFr: c.metierFr,
            metierEn: c.metierEn,
          },
        ]
      : []
  );

/* L'ordre alterne les trois sources, pour que les trois premieres videos
   visibles montrent trois personnes et deux metiers differents. Une video
   absente de cette liste n'est pas perdue : elle s'ajoute a la fin. */
const ORDRE_ACCUEIL = [
  'isabelle-une-forme',
  'nouit-quand-tout-va-bien',
  'salon-generation-menuiserie-73',
  'isabelle-maternelle',
  'nouit-boule-de-cristal',
  'salon-parcs-et-jardins',
  'isabelle-crayon',
  'salon-louise-verlaine-chambery',
];

const toutes = [...clientesLivrees.flatMap(depuisCliente), ...videosSalon.map(depuisSalon)];
const rang = (id: string) => {
  const i = ORDRE_ACCUEIL.indexOf(id);
  return i === -1 ? ORDRE_ACCUEIL.length : i;
};

export const videosAccueil: VideoBande[] = [...toutes].sort((a, b) => rang(a.id) - rang(b.id));
