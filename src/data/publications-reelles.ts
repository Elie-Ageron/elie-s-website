/**
 * Des videos reellement publiees, avec leur lien.
 *
 * Elie : « va prendre directement des vraies videos qui ont ete postees, avec
 * le lien, et les gens peuvent cliquer pour avoir le profil ». Une couverture
 * generee montre a quoi ca ressemble ; celle-ci prouve que ca existe.
 *
 * ── Ce qui a ete verifie le 13 septembre 2026 ─────────────────────────────
 *
 * | Compte | Etat releve |
 * |---|---|
 * | Isabelle Ageron-Vicat, page Facebook | 7 300 abonnes, Reels en ligne, page active le jour meme |
 * | Nouit / IneVolve Intuition, Instagram | 57 abonnes, aucun Reel publie |
 *
 * La fiche `40-etat-du-tunnel.md` du dossier Nouit disait « 8 pretes, 0
 * publiee », et le profil Instagram le confirmait. **Rien de Nouit ici tant
 * que ses videos ne sont pas en ligne.** Une vignette qui renvoie vers un
 * compte vide se retourne contre la page.
 *
 * ── Deux regles ──────────────────────────────────────────────────────────
 *
 * 1. **Aucun compteur de vues.** Facebook en affiche sous chaque Reel, et
 *    certains sont tres hauts. Ils ne sont pas repris : Elie ne vend pas sur
 *    des chiffres de performance, et un compteur affiche se lit comme une
 *    promesse. La regle vaut ici comme ailleurs sur le site.
 * 2. **Les vignettes sont copiees en local**, dans `public/publications/reels/`.
 *    Les URL du CDN de Facebook sont signees et expirent : un lien direct
 *    afficherait une image cassee sous quelques jours.
 *
 * ⚠️ Ces vignettes montrent le visage d'une cliente sur un site commercial.
 * C'est Elie qui l'a demande, et c'est a lui de s'assurer de son accord.
 * Ne pas ajouter d'autre personne ici sans le meme accord.
 *
 * Pour ajouter une video : recuperer l'URL du Reel sur la page publique,
 * enregistrer sa vignette en 540 x 960 webp dans `public/publications/reels/`,
 * puis ajouter l'entree. Le titre de la video est deja grave dans l'image,
 * donc `titre` sert uniquement au texte alternatif et au survol.
 */

export type PublicationReelle = {
  id: string;
  /** Vignette locale, 9:16. */
  image: string;
  /** Lien vers la publication elle-meme. */
  url: string;
  /** Lien vers le compte, pour qui veut voir le reste. */
  compte: string;
  nomCompte: string;
  metierFr: string;
  metierEn: string;
  titreFr: string;
  titreEn: string;
};

export const publicationsReelles: PublicationReelle[] = [
  {
    id: 'isabelle-ce-que-je-regarde',
    image: '/publications/reels/isabelle-ce-que-je-regarde.webp',
    url: 'https://www.facebook.com/reel/1783319569651904/',
    compte: 'https://www.facebook.com/isabelleageronvicat/',
    nomCompte: 'Isabelle Ageron-Vicat',
    metierFr: "Formatrice en rééducation de l'écriture, Albertville",
    metierEn: 'Handwriting remediation trainer, Albertville',
    titreFr: 'Ce que je regarde, comment il tient son stylo',
    titreEn: 'What I look at, how he holds his pen',
  },
  {
    id: 'isabelle-pas-du-graphisme',
    image: '/publications/reels/isabelle-pas-du-graphisme.webp',
    url: 'https://www.facebook.com/reel/2159624344930719/',
    compte: 'https://www.facebook.com/isabelleageronvicat/',
    nomCompte: 'Isabelle Ageron-Vicat',
    metierFr: "Formatrice en rééducation de l'écriture, Albertville",
    metierEn: 'Handwriting remediation trainer, Albertville',
    titreFr: "Ce n'est pas du graphisme, pas des petits dessins",
    titreEn: 'This is not drawing, not little pictures',
  },
  {
    id: 'isabelle-est-ce-grave',
    image: '/publications/reels/isabelle-est-ce-grave.webp',
    url: 'https://www.facebook.com/reel/1301828458469854/',
    compte: 'https://www.facebook.com/isabelleageronvicat/',
    nomCompte: 'Isabelle Ageron-Vicat',
    metierFr: "Formatrice en rééducation de l'écriture, Albertville",
    metierEn: 'Handwriting remediation trainer, Albertville',
    titreFr: "Est-ce que c'est grave ?",
    titreEn: 'Is it serious?',
  },
];
