/**
 * Les couvertures de publication affichees dans les maquettes du site.
 *
 * Elie : « les gens adorent voir d'autres gens sourire ». C'est vrai, et c'est
 * aussi la seule facon de montrer le livrable : le service vend des videos
 * verticales de gens qui parlent de leur metier, donc la page doit montrer des
 * videos verticales de gens qui parlent de leur metier.
 *
 * Les fichiers vivent dans `public/publications/`. Tant qu'une image n'existe
 * pas, `PostCover` retombe sur un degrade et la page reste correcte. Les
 * prompts de generation et les regles de cadrage sont dans
 * `docs/photos-de-publication.md`.
 *
 * ⚠️ Ce sont des illustrations du service, pas des clients d'Elie. Rien dans la
 * page ne doit laisser croire le contraire, et les maquettes qui les portent
 * sont `aria-hidden`. Le jour ou de vraies captures de comptes clients sont
 * disponibles, elles prennent leur place et la section devient une preuve.
 *
 * Les titres sont des sujets plausibles, jamais un chiffre ni une promesse.
 *
 * ⚠️ N'afficher qu'une entree dont le fichier existe. Une couverture sans photo
 * tombe sur le degrade, ce qui allait tant qu'aucune n'etait remplie ; a cote
 * de trois vraies photos, la case rose se lit comme une image manquante.
 * `plomberie` et `boulangerie` attendent donc leur fichier avant d'etre
 * affichees quelque part.
 *
 * ⚠️ Ou ces images vivent, et pourquoi c'est court : le telephone de l'accueil
 * en porte une seule, et la bande de trois vit sur `/reseaux-sociaux` sous un
 * titre qui dit pourquoi elle est la. Une bande avait ete posee sur l'accueil
 * et retiree le jour meme, faute de repondre a une question. Elie : « on
 * n'essaie pas de les placarder a tout prix, on se tient discret ».
 */

export type Publication = {
  id: string;
  /** Fichier dans `public/publications/`. */
  image: string;
  metierFr: string;
  metierEn: string;
  titreFr: string;
  titreEn: string;
  mentions: number;
  commentaires: number;
};

export const publications: Publication[] = [
  {
    id: 'menuiserie',
    image: '/publications/menuiserie.webp',
    metierFr: 'Menuisière',
    metierEn: 'Carpenter',
    titreFr: 'Le geste que personne ne voit',
    titreEn: 'The step nobody sees',
    mentions: 214,
    commentaires: 18,
  },
  {
    id: 'restaurant',
    image: '/publications/restaurant.webp',
    metierFr: 'Restaurateur',
    metierEn: 'Restaurant owner',
    titreFr: 'Pourquoi la carte change tous les mardis',
    titreEn: 'Why the menu changes every Tuesday',
    mentions: 341,
    commentaires: 27,
  },
  {
    id: 'plomberie',
    image: '/publications/plomberie.webp',
    metierFr: 'Plombier',
    metierEn: 'Plumber',
    titreFr: 'La fuite que tout le monde répare mal',
    titreEn: 'The leak everybody fixes wrong',
    mentions: 189,
    commentaires: 31,
  },
  {
    id: 'therapeute',
    image: '/publications/therapeute.webp',
    metierFr: 'Thérapeute',
    metierEn: 'Therapist',
    titreFr: 'Ce qui se passe vraiment pendant une séance',
    titreEn: 'What actually happens during a session',
    mentions: 256,
    commentaires: 22,
  },
  {
    id: 'coiffure',
    image: '/publications/coiffure.webp',
    metierFr: 'Coiffeuse',
    metierEn: 'Hairdresser',
    titreFr: 'Ce que je regarde quand vous entrez',
    titreEn: 'What I look at when you walk in',
    mentions: 298,
    commentaires: 19,
  },
  {
    id: 'boulangerie',
    image: '/publications/boulangerie.webp',
    metierFr: 'Boulanger',
    metierEn: 'Baker',
    titreFr: 'Quatre heures du matin, et voilà pourquoi',
    titreEn: 'Four in the morning, and here is why',
    mentions: 412,
    commentaires: 35,
  },
];

export const parId = (id: string): Publication => {
  const p = publications.find((pub) => pub.id === id);
  if (!p) throw new Error(`Publication inconnue : ${id}`);
  return p;
};
