/**
 * Une page par service, parce qu'une ancre ne se classe pas.
 *
 * 🔴 **Le trou, relevé le 16 septembre 2026.** Elie vend sept services. Deux
 * ont une page à eux, `/services` pour les sites et `/reseaux-sociaux`. Les
 * cinq autres n'existaient que comme des sections de `/services`, atteignables
 * par une ancre du type `#google-business`.
 *
 * Une ancre n'est pas une page. Elle n'a pas de balise title, pas de
 * description, pas de canonical, et elle ne remonte jamais seule dans une page
 * de résultats. Quelqu'un qui cherchait « création fiche Google Business » ou
 * « logo entreprise Savoie » ne trouvait donc rien de ce site, alors que ce
 * sont des prestations qu'Elie facture.
 *
 * Elie, le même jour : *« quelqu'un cherche mon service, je sors et dans les
 * premiers. »*
 *
 * ⚠️ **Ces pages ne doublent pas les articles du blog.** L'article explique
 * comment faire soi-même, la page dit que je le fais. L'intention de recherche
 * n'est pas la même, et les deux doivent se renvoyer l'un à l'autre plutôt que
 * se disputer la même requête. Chaque page liste les articles qui la
 * développent, et chaque page nomme ce qu'elle ne fait pas.
 *
 * ⚠️ Les prix affichés viennent de `src/data/services.ts`, source unique. Ne
 * pas en inventer ici.
 */

export interface ServiceBlock {
  title: string;
  body: string;
}

export interface ServicePageFaq {
  q: string;
  a: string;
}

export interface ServicePageData {
  slug: string;
  /** Nom court, pour le fil d'Ariane et les listes. */
  name: string;
  /** Le type de service au sens schema.org, pour le champ `serviceType`. */
  serviceType: string;
  /** Balise title, suffixe marque compris, sous 60 caractères. */
  seoTitle: string;
  /** Meta description, sous 160 caractères. */
  seoDesc: string;
  h1Pre: string;
  h1Highlight: string;
  lede: string;
  /** Prix plancher affiché, repris de `services.ts`. */
  prix: string;
  /** Le prix en euros, pour le schéma `Offer`. Absent si c'est du sur-mesure. */
  prixSchema?: number;
  /** Le problème réel que ça résout, en deux ou trois paragraphes. */
  probleme: string[];
  /** Ce qui est livré, concrètement. */
  livrables: ServiceBlock[];
  /** Ce que ce service ne fait pas. Un service qui ne dit pas ses limites se vend mal. */
  limites: string;
  faq: ServicePageFaq[];
  /** Articles du blog qui développent le sujet. Slugs validés par check:content. */
  articles: string[];
  /** Autres pages de service à proposer. */
  related: string[];
}

export const servicePages: ServicePageData[] = [
  {
    slug: 'fiche-google-business',
    name: 'Fiche Google Business',
    serviceType: 'Optimisation de fiche Google Business',
    seoTitle: 'Fiche Google Business en Savoie | Elie Ageron',
    seoDesc:
      "Je crée ou je reprends votre fiche Google Business : catégories, photos, description, avis, publications. Dès 250 €. Albertville et Savoie.",
    h1Pre: 'Votre fiche Google Business, ',
    h1Highlight: 'faite correctement',
    lede:
      "C'est la première chose qu'un client voit quand il cherche votre métier dans votre ville, et c'est presque toujours la moins soignée. Je la reprends de bout en bout, une fois, et elle travaille ensuite toute seule.",
    prix: 'dès 250 €',
    prixSchema: 250,
    probleme: [
      "Quand quelqu'un tape votre métier suivi de votre commune, Google affiche d'abord une carte avec trois entreprises. Pas dix, pas la première page : trois. Ce bloc capte une part énorme des clics, et il se joue entièrement sur les fiches, pas sur les sites.",
      "La plupart des fiches que je reprends ont le même profil. Elles existent, elles ont été créées un jour, et puis plus rien. Une catégorie principale mal choisie, deux photos floues, pas d'horaires à jour, une description écrite en dix minutes, et aucune publication depuis la création.",
      "Le point qui surprend tout le monde : la catégorie principale pèse plus lourd que tout le reste. Un artisan rangé dans une catégorie voisine mais fausse ne sortira jamais sur sa vraie requête, quoi qu'il fasse d'autre. C'est réparable en cinq minutes, et personne ne le vérifie.",
    ],
    livrables: [
      {
        title: 'La fiche reprise en entier',
        body: "Catégorie principale et catégories secondaires, zone desservie, horaires, attributs, description écrite pour vos clients et pas pour Google. Si la fiche n'existe pas encore, je la crée et je gère la validation.",
      },
      {
        title: "Les photos, qui comptent plus qu'on ne croit",
        body: "Une fiche avec des photos récentes est consultée bien plus longtemps qu'une fiche sans. On fait le tri dans ce que vous avez, on cadre ce qui manque, et on range tout dans les bonnes catégories : extérieur, intérieur, équipe, réalisations.",
      },
      {
        title: 'Les avis, mis en route',
        body: "Un lien direct pour demander un avis en un clic, la méthode pour le demander au bon moment, et les réponses aux avis existants. C'est le levier le plus fort du classement local, et le moins utilisé.",
      },
      {
        title: 'Un état des lieux écrit',
        body: "Je vous laisse un document qui dit ce qui a été changé et pourquoi, et ce qu'il reste à faire de votre côté. Vous gardez la main sur votre fiche, je ne la garde pas en otage.",
      },
    ],
    limites:
      "Je ne garantis aucune position, et personne ne peut le faire honnêtement : le classement local dépend aussi de la distance entre le chercheur et vous, ce qui n'est pilotable par personne. Ce que je garantis, c'est qu'une fiche complète et vivante bat une fiche vide, et que la vôtre sera du bon côté.",
    faq: [
      {
        q: 'Combien coûte la reprise de ma fiche Google ?',
        a: "À partir de 250 €, une fois. Ça couvre la reprise complète, les photos, la description et la mise en route des avis. Il n'y a pas d'abonnement derrière : la fiche vous appartient et continue de tourner sans moi.",
      },
      {
        q: 'Au bout de combien de temps ça se voit ?',
        a: "Quelques jours pour que les changements soient pris en compte, quelques semaines pour que le classement bouge. C'est le levier le plus rapide de tout le référencement local, et de loin.",
      },
      {
        q: "Et si je n'ai pas d'adresse physique ?",
        a: "Ça marche quand même, et c'est même un cas fréquent chez les artisans. On déclare une zone desservie au lieu d'une adresse, et la fiche sort sur les communes que vous couvrez.",
      },
      {
        q: 'Vous gérez aussi les publications sur la fiche ?',
        a: "Sur demande, oui, et c'est souvent inclus quand je gère déjà vos réseaux : les mêmes vidéos servent. Seule, la publication sur la fiche a un effet réel mais modeste, donc je ne la vends pas comme un abonnement à part.",
      },
    ],
    articles: [
      'creer-fiche-google-business',
      'fiche-google-business-optimiser',
      'obtenir-avis-google',
      'apparaitre-sur-google-maps',
      'publications-fiche-google-business',
      'fiche-google-suspendue-que-faire',
    ],
    related: ['referencement-local', 'avis-google'],
  },
  {
    slug: 'referencement-local',
    name: 'Référencement local',
    serviceType: 'Référencement local',
    seoTitle: 'Référencement Local en Savoie | Elie Ageron',
    seoDesc:
      "Sortir sur « votre métier + votre commune », durablement. Fiche Google, pages de service, contenu local. En Savoie et Haute-Savoie, sur devis.",
    h1Pre: 'Sortir quand on cherche votre métier ',
    h1Highlight: 'dans votre commune',
    lede:
      "Le référencement local n'est pas du référencement en plus petit. C'est un autre jeu, avec d'autres règles, et il se gagne avec beaucoup moins de moyens qu'on ne le croit.",
    prix: 'sur devis',
    probleme: [
      "Une recherche locale ne ressemble pas à une recherche normale. Google y mélange trois choses : la carte avec ses trois fiches, les résultats classiques, et de plus en plus une réponse générée. Se battre sur les résultats classiques sans avoir réglé la carte, c'est commencer par le plus dur.",
      "L'autre particularité, c'est que la concurrence y est ridiculement faible. Sur « agence web Paris », vous n'existerez jamais. Sur « menuisier Ugine », il y a souvent moins de cinq entreprises qui ont fait le minimum. La place n'est pas prise, elle est vide.",
      "Ce qui bloque la plupart des entreprises n'est pas technique. C'est qu'elles n'ont aucune page qui dit à la fois ce qu'elles font et où elles le font. Un site avec une page Accueil, une page Services et une page Contact ne peut sortir sur aucune requête précise, parce qu'il ne contient aucune phrase précise.",
    ],
    livrables: [
      {
        title: "L'état des lieux, avant tout",
        body: "Où vous sortez aujourd'hui sur vos vraies requêtes, ce que voit quelqu'un qui cherche votre métier chez vous, et ce que font les trois qui sortent devant. Ça se fait en une matinée et ça évite de travailler au hasard.",
      },
      {
        title: 'La fiche Google en premier',
        body: "C'est le levier le plus rapide et le moins cher. Tant qu'elle n'est pas réglée, tout le reste rapporte moins. Elle passe donc toujours avant le travail sur le site.",
      },
      {
        title: 'Des pages qui répondent à une recherche réelle',
        body: "Une page par prestation nommée, une page par commune quand ça se justifie, écrites avec les mots que vos clients emploient. Pas une page par mot-clé : une page par question qu'on vous pose vraiment.",
      },
      {
        title: 'Le technique, une fois pour toutes',
        body: "Vitesse, affichage sur téléphone, données structurées, liens internes, plan de site. Ce n'est pas ce qui fait la différence, mais c'est ce qui empêche le reste de compter quand c'est cassé.",
      },
    ],
    limites:
      "Ça prend du temps, et je le dis avant de commencer. Comptez quelques semaines pour la fiche Google, trois à six mois pour que les pages du site bougent vraiment. Quiconque vous promet la première place en un mois vend soit de la publicité, soit du vent. Et je ne fais pas de publicité payante : ce n'est pas mon métier.",
    faq: [
      {
        q: 'Combien de temps avant de voir des résultats en référencement local ?',
        a: "Quelques jours à quelques semaines pour la fiche Google, trois à six mois pour les pages du site. Une commune peu disputée va nettement plus vite qu'une ville comme Annecy ou Chambéry.",
      },
      {
        q: 'Est-ce que ça marche si je suis déjà sur Google ?',
        a: "Être indexé et être visible sont deux choses différentes. Beaucoup d'entreprises sont dans l'index de Google et n'apparaissent sur aucune recherche qui compte, parce qu'aucune page ne parle de leur prestation et de leur zone.",
      },
      {
        q: 'Vous garantissez la première position ?',
        a: "Non, et une garantie de position est un signal qu'il faut fuir. Le classement dépend de choses que personne ne contrôle, à commencer par la distance entre le chercheur et vous. Ce qui se garantit, c'est le travail fait.",
      },
      {
        q: 'Faut-il refaire le site pour ça ?',
        a: "Pas toujours. Si la structure tient et que le site est correct sur téléphone, on ajoute des pages et on retravaille les existantes. La refonte ne se justifie que si les fondations empêchent le reste.",
      },
    ],
    articles: [
      'seo-local-guide-complet',
      'etre-premier-google-dans-sa-ville',
      'trouver-mots-cles-clients',
      'concurrent-devant-moi-google',
      'combien-de-temps-referencement-google',
      'ce-que-google-ne-controle-pas',
    ],
    related: ['fiche-google-business', 'avis-google'],
  },
  {
    slug: 'avis-google',
    name: 'Avis et e-réputation',
    serviceType: 'Gestion des avis clients',
    seoTitle: 'Obtenir et Gérer ses Avis Google | Elie Ageron',
    seoDesc:
      "Mettre en place la collecte d'avis Google, répondre à ceux qui arrivent, et traiter les négatifs sans y passer ses soirées. En Savoie, sur devis.",
    h1Pre: 'Des avis qui arrivent ',
    h1Highlight: 'sans les mendier',
    lede:
      "Les avis sont le levier le plus fort du classement local et le plus mal utilisé. Le problème n'est presque jamais la qualité du travail : c'est qu'on ne les demande pas, ou qu'on les demande au mauvais moment.",
    prix: 'sur devis',
    probleme: [
      "Un client content ne laisse pas d'avis spontanément. Il en laisse un quand on le lui demande, au moment où il vient d'être content, et quand ça lui prend dix secondes. Ces trois conditions ne sont presque jamais réunies, et c'est tout le sujet.",
      "L'autre erreur classique est le rattrapage. Une entreprise qui réalise son retard demande trente avis en une semaine à d'anciens clients. Ça se voit, ça ressemble à une opération, et ça compte beaucoup moins que dix avis étalés sur l'année.",
      "Enfin, les réponses. Beaucoup d'entreprises ne répondent qu'aux avis négatifs, et souvent mal. Répondre à tous, brièvement, change deux choses : ça pèse dans le classement, et ça montre à celui qui lit qu'il y a quelqu'un derrière.",
    ],
    livrables: [
      {
        title: 'Le lien qui prend dix secondes',
        body: "Un lien court qui ouvre directement le formulaire d'avis, à mettre dans un message, sur une facture, sur un autocollant ou en QR code. La différence de taux entre ce lien et un « laissez-nous un avis sur Google » est énorme.",
      },
      {
        title: 'Le bon moment, écrit noir sur blanc',
        body: "On définit ensemble le moment exact où la demande part, selon votre métier : à la fin du chantier, après la deuxième séance, à la remise des clés. Un moment fixe transforme la demande en habitude au lieu d'une corvée.",
      },
      {
        title: 'Les réponses, modèles compris',
        body: "Je réponds aux avis existants et je vous laisse des modèles courts pour la suite, y compris pour les cas pénibles. Une réponse à un avis négatif s'adresse à celui qui la lira dans six mois, pas à celui qui l'a écrit.",
      },
      {
        title: 'Le cas de la crise',
        body: "Si vous prenez une série d'avis négatifs, il y a une marche à suivre et elle est contre-intuitive : ne pas répondre tout de suite, ne pas signaler en masse, et travailler le volume plutôt que la suppression.",
      },
    ],
    limites:
      "Je ne rédige pas de faux avis et je ne travaille avec personne qui en achète. Au-delà du fait que c'est interdit, Google les détecte de mieux en mieux et la sanction tombe sur la fiche entière. Je ne peux pas non plus faire supprimer un avis qui ne viole aucune règle, même s'il est injuste : personne ne le peut.",
    faq: [
      {
        q: "Comment obtenir plus d\'avis Google ?",
        a: "En les demandant, à un moment fixe, avec un lien qui prend dix secondes. Ces trois conditions ensemble changent tout. Prises séparément, elles ne donnent presque rien.",
      },
      {
        q: 'Peut-on faire supprimer un avis négatif ?',
        a: "Seulement s'il enfreint les règles de Google : propos haineux, hors sujet, concurrent déguisé, chantage. Un avis sincère mais sévère ne se supprime pas. Il se répond, et il se noie sous les suivants.",
      },
      {
        q: "Combien d\'avis faut-il viser ?",
        a: "Plus que celui qui sort devant vous, et régulièrement. Le rythme compte autant que le nombre : dix avis étalés sur douze mois pèsent plus que trente obtenus en une semaine.",
      },
      {
        q: 'Faut-il répondre à tous les avis ?',
        a: "Oui, y compris aux cinq étoiles sans commentaire, en une phrase. Ça pèse dans le classement local et ça montre au lecteur suivant qu'il y a quelqu'un derrière la fiche.",
      },
    ],
    articles: [
      'obtenir-avis-google',
      'repondre-avis-negatif-google',
      'e-reputation-crise-avis-negatifs',
      'etoiles-avis-resultats-google',
      'avis-clients-autres-plateformes',
      'fiche-google-business-optimiser',
    ],
    related: ['fiche-google-business', 'referencement-local'],
  },
  {
    slug: 'identite-de-marque',
    name: 'Identité de marque',
    serviceType: 'Identité visuelle et logo',
    seoTitle: 'Logo et Identité de Marque en Savoie',
    seoDesc:
      "Logo, couleurs, typographies et règles d'usage, livrés dans tous les formats utiles. Réalisé avec mon frère, designer. En Savoie, sur devis.",
    h1Pre: 'Un logo, des couleurs, ',
    h1Highlight: 'et de quoi les utiliser',
    lede:
      "Une identité de marque n'est pas un logo. C'est un logo, plus tout ce qu'il faut pour que votre entreprise se ressemble d'un support à l'autre, du camion au site.",
    prix: 'sur devis',
    probleme: [
      "Le cas que je rencontre le plus souvent : un logo existe, il a été fait il y a huit ans par un cousin ou acheté trente euros sur un site, et il n'existe qu'en un seul fichier. Pas de version sur fond sombre, pas de version horizontale, pas de fichier vectoriel. Chaque nouveau support demande donc un bricolage.",
      "Le deuxième cas : le logo va très bien, mais il n'y a rien autour. Pas de couleurs définies, pas de typographie, pas de règle. Résultat, le site, la carte de visite, le devis et la page Facebook n'ont pas l'air de venir de la même entreprise.",
      "Ça se voit, et ça coûte de la crédibilité au moment précis où quelqu'un compare trois prestataires. Ce n'est pas une question de goût, c'est une question de cohérence.",
    ],
    livrables: [
      {
        title: 'Le logo, dans tous les formats utiles',
        body: "Version principale, version horizontale, version sur fond sombre, version en une seule couleur, et l'icône seule. En vectoriel et en image, avec les fichiers qui servent vraiment : web, impression, réseaux, favicon.",
      },
      {
        title: 'Les couleurs et les typographies',
        body: "Une palette courte, avec les codes exacts et les usages de chacune. Deux typographies au maximum, choisies pour être disponibles partout, y compris dans un traitement de texte quand vous écrivez un devis.",
      },
      {
        title: "Les règles d'usage, en deux pages",
        body: "Ce qu'on fait et ce qu'on ne fait pas : les tailles minimales, les espaces autour, les fonds autorisés. Deux pages lisibles, pas une charte de quarante pages que personne n'ouvre.",
      },
      {
        title: 'Les gabarits qui servent le lendemain',
        body: "Une carte de visite, un modèle de devis, une couverture de réseau social. De quoi être cohérent dès la semaine suivante sans avoir à redemander quoi que ce soit.",
      },
    ],
    limites:
      "Le travail graphique est réalisé avec mon frère, qui est designer. Je ne prétends pas être directeur artistique : mon rôle est de cadrer le besoin, de faire le lien et de m'assurer que ce qui sort est utilisable partout où votre entreprise apparaît. Et je ne fais pas de packaging ni de signalétique complexe.",
    faq: [
      {
        q: "Combien coûte la création d\'un logo ?",
        a: "Sur devis, parce que l'écart est réel entre reprendre un logo existant et partir d'une page blanche avec plusieurs pistes. Le chiffre vous est donné par écrit avant qu'on commence.",
      },
      {
        q: "Je garde les droits sur le logo ?",
        a: "Oui, entièrement, et vous repartez avec les fichiers sources. Un logo dont vous n'avez pas les fichiers vectoriels est un logo que vous louez.",
      },
      {
        q: 'Peut-on garder mon logo actuel ?',
        a: "Souvent, oui. Beaucoup de logos tiennent debout et manquent seulement de déclinaisons et de règles. Quand c'est le cas je le dis, c'est moins cher et ça évite de perdre la reconnaissance que vous avez déjà.",
      },
      {
        q: 'Faut-il faire le logo avant le site ?',
        a: "C'est plus confortable, mais ce n'est pas bloquant. On peut lancer un site sur une base visuelle simple et l'habiller ensuite. L'inverse, refaire le site parce que le logo a changé, coûte plus cher.",
      },
    ],
    articles: [
      'identite-visuelle-tpe',
      'choisir-nom-entreprise-visibilite',
      'supports-physiques-vehicule-panneaux',
      'photos-pour-son-site-web',
      'page-accueil-trois-secondes',
      'concurrent-copie-mes-contenus',
    ],
    related: ['redaction-web', 'fiche-google-business'],
  },
  {
    slug: 'redaction-web',
    name: 'Rédaction de contenu',
    serviceType: 'Rédaction de contenu web',
    seoTitle: 'Rédaction de Contenu Web en Savoie',
    seoDesc:
      "Les textes de votre site, vos pages de service et vos articles, écrits avec vos mots et ceux de vos clients. En Savoie, sur devis.",
    h1Pre: 'Les textes de votre site, ',
    h1Highlight: 'écrits pour être lus',
    lede:
      "C'est ce qui bloque le plus de projets, et de loin. Le site est prêt, le design est validé, et il manque les textes depuis quatre mois. Je les écris, à partir de ce que vous dites déjà à vos clients.",
    prix: 'sur devis',
    probleme: [
      "Écrire sur son propre métier est étrangement difficile. On le connaît trop bien, on ne sait plus ce qui va de soi, et on finit par écrire ce qu'on croit qu'il faut écrire : une page qui parle de passion, de savoir-faire et de qualité, comme les trois concurrents d'à côté.",
      "Le texte qui marche n'est presque jamais inventé. Il existe déjà, dans ce que vous répondez au téléphone dix fois par semaine. Mon travail consiste surtout à écouter ça, à le trier, et à l'écrire dans l'ordre où les questions se posent.",
      "Et il y a un effet secondaire qui compte pour le référencement : un texte qui emploie les mots de vos clients emploie mécaniquement les mots qu'ils tapent dans Google. On ne bourre pas de mots-clés, on écrit ce que les gens demandent.",
    ],
    livrables: [
      {
        title: "Un appel d'une heure, et c'est tout ce que ça vous demande",
        body: "On parle de votre métier, de vos clients, de ce qu'on vous demande le plus. J'enregistre, je trie, et j'écris. Vous n'avez rien à rédiger ni à préparer.",
      },
      {
        title: 'Les pages du site',
        body: "Accueil, pages de service, page à propos, page contact. Chaque page avec un objectif unique, les objections traitées avant qu'on les pose, et une action claire à la fin.",
      },
      {
        title: "Les balises que personne n\'écrit",
        body: "Titre et description pour chaque page, sous les limites de Google. C'est ce qui s'affiche dans les résultats de recherche, donc ce qui décide du clic, et c'est presque toujours laissé par défaut.",
      },
      {
        title: 'Les articles, si vous en voulez',
        body: "Des articles qui répondent à une question précise que vos clients posent, pas des billets d'humeur. Un article utile continue d'amener des gens pendant des années.",
      },
    ],
    limites:
      "Je n'écris pas de textes de vente agressifs, et je ne promets rien que vous ne puissiez tenir. Si vous voulez une page qui annonce des résultats chiffrés que je ne peux pas vérifier, je ne suis pas la bonne personne. Et je ne fais pas de traduction professionnelle : pour un site en anglais, je travaille avec un traducteur.",
    faq: [
      {
        q: 'Qui écrit les textes, vous ou moi ?',
        a: "Moi, à partir d'un appel d'une heure où vous parlez de votre métier. C'est le format qui marche le mieux : vous savez tout, et vous n'avez ni le temps ni l'envie de rédiger.",
      },
      {
        q: "Vous utilisez de l\'intelligence artificielle ?",
        a: "Comme outil de travail, oui, comme n'importe quel professionnel aujourd'hui. Mais la matière vient de vous et je relis tout : un texte qui sent la machine se repère, et il détruit exactement la confiance qu'on cherchait à installer.",
      },
      {
        q: 'Combien de pages faut-il prévoir ?',
        a: "Pour une TPE, entre quatre et huit pages suffisent la plupart du temps. Mieux vaut six pages qui disent quelque chose que vingt pages qui se répètent.",
      },
      {
        q: 'Est-ce que ça aide pour le référencement ?',
        a: "Oui, mécaniquement. Un texte écrit avec les mots de vos clients contient les mots qu'ils tapent. Mais le texte seul ne suffit pas : il faut aussi que la page existe pour la bonne recherche.",
      },
    ],
    articles: [
      'quoi-ecrire-sur-son-site',
      'page-service-qui-ressort',
      'page-a-propos-qui-sert',
      'page-accueil-trois-secondes',
      'trouver-mots-cles-clients',
      'faut-il-un-blog-quand-on-est-artisan',
    ],
    related: ['identite-de-marque', 'referencement-local'],
  },
];

export const getServicePage = (slug: string) => servicePages.find((s) => s.slug === slug);

/** Les autres pages de service a proposer, dans l'ordre declare. */
export const getRelatedServices = (page: ServicePageData) =>
  page.related.map((slug) => getServicePage(slug)).filter((s): s is ServicePageData => Boolean(s));
