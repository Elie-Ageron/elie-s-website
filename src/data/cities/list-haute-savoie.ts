import type { CityData } from './types';

/**
 * Bassins de Haute-Savoie hors Annecy. Trois tissus economiques tres
 * differents : l'industrie de l'Arve, le Chablais frontalier et lacustre,
 * le pays du Mont-Blanc, plus l'Albanais agroalimentaire.
 *
 * Regle du projet : une page locale n'existe que si on a de la matiere
 * propre a ecrire dessus. Ces quatre bassins en ont.
 */
export const hauteSavoieCities: CityData[] = [
  {
    slug: 'creation-site-web-cluses',
    postalCode: '74300',
    lat: 46.0603,
    lng: 6.5789,
    department: 'Haute-Savoie',
    departmentCode: 'FR-74',
    scope: 'city',
    relatedCities: [
      'creation-site-web-sallanches',
      'creation-site-web-haute-savoie',
      'web-designer-annecy',
    ],
    fr: {
      name: 'Cluses',
      title: 'Création Site Web Cluses | Elie Ageron',
      description:
        "Web designer pour les entreprises de Cluses et de la vallée de l'Arve. Sites B2B, sous-traitance industrielle, artisans et commerces. Devis sous 48h.",
      h1Pre: 'Création de site web à ',
      h1Highlight: 'Cluses',
      h2: "Une vallée qui vend surtout à d'autres entreprises.",
      intro:
        "La vallée de l'Arve n'est pas un marché comme les autres en Haute-Savoie. Une grande partie des entreprises d'ici vendent à d'autres entreprises, souvent loin, et leur site ne sert pas à séduire un particulier mais à rassurer un acheteur industriel. Ça change entièrement ce qu'il faut écrire dessus.",
      breadcrumb: 'Création Site Web Cluses',
    },
    en: {
      name: 'Cluses',
      title: 'Web Design Cluses Haute-Savoie | Elie Ageron',
      description:
        'Web designer for businesses in Cluses and the Arve valley. B2B sites, industrial subcontracting, trades and shops. Quote within 48 hours.',
      h1Pre: 'Web design in ',
      h1Highlight: 'Cluses',
      h2: 'A valley that mostly sells to other businesses.',
      intro:
        'The Arve valley is not a typical Haute-Savoie market. Many companies here sell to other companies, often far away, and their website exists to reassure an industrial buyer rather than charm a consumer. That changes everything about what belongs on it.',
      breadcrumb: 'Web Design Cluses',
    },
    depthFr: {
      travel: "Environ une heure et quart depuis Albertville, par Megève et Sallanches.",
      nearby: [
        'Scionzier',
        'Marnaz',
        'Thyez',
        'Marignier',
        'Bonneville',
        'Magland',
        'Saint-Jeoire',
        'Taninges',
      ],
      sectors: [
        'Décolletage et mécanique de précision',
        'Sous-traitance automobile, médicale et aéronautique',
        'Traitement de surface et usinage',
        'Bâtiment et second œuvre',
        'Commerces et services de vallée',
        'Transport et logistique',
      ],
      context: [
        "La vallée de l'Arve concentre le décolletage français, cette industrie de la pièce tournée de précision qui alimente l'automobile, le médical, l'aéronautique et la connectique. Autour de Cluses, de Scionzier et de Marnaz, des centaines d'ateliers de dix à cent salariés travaillent en sous-traitance, souvent pour des donneurs d'ordre situés à des centaines de kilomètres.",
        "Cette structure change complètement la logique de visibilité. Un décolleteur ne cherche pas à sortir sur une recherche locale : ses clients ne sont pas dans la vallée. Il a besoin qu'un acheteur ou un bureau d'études qui cherche une capacité précise le trouve, comprenne ce qu'il sait faire, et le juge crédible avant de demander une consultation.",
        "À côté de ce tissu industriel vit une économie de vallée classique : artisans du bâtiment, commerces, garages, restauration, services. Pour eux, la logique redevient locale et le bloc carte de Google redevient le premier enjeu. Une même commune, deux marchés qui n'ont presque rien en commun.",
      ],
      blocks: [
        {
          title: 'Un site industriel doit lister des capacités, pas des valeurs',
          body: "La quasi-totalité des sites de sous-traitance que je regarde parlent de savoir-faire, d'exigence et de partenariat. Un acheteur, lui, cherche des matières usinées, des diamètres, des tolérances, des parcs machines, des certifications, des volumes de série et des délais. Écrire ces éléments noir sur blanc n'est pas une question de référencement, c'est ce qui permet d'être consulté plutôt qu'écarté.",
        },
        {
          title: 'Les photos d\'atelier valent tous les arguments',
          body: "Un acheteur qui ne vous connaît pas veut voir le parc machines, l'organisation, la métrologie, la propreté des postes. Ce sont des images que vous pouvez prendre vous-même en une heure et qui font davantage pour la crédibilité qu'une page entière de texte. Peu d'entreprises de la vallée les montrent.",
        },
        {
          title: 'Le recrutement est un sujet de site à part entière',
          body: "Dans l'Arve, la difficulté à recruter des régleurs, des opérateurs et des techniciens est un problème structurel. Un site qui parle correctement aux candidats, avec des photos de l'atelier réel et des témoignages de salariés, sert autant que celui qui parle aux clients. C'est un usage que presque personne n'exploite.",
        },
        {
          title: 'Les artisans et commerces de la vallée jouent un autre match',
          body: "Pour un plombier de Scionzier ou un garage de Marnaz, l'enjeu redevient la fiche Google Business, les avis et les recherches par commune. C'est un travail plus rapide et moins coûteux, et il produit des demandes en quelques semaines.",
        },
      ],
      social:
        "Dans la vallée de l'Arve, la vidéo courte a un avantage rare : les gestes industriels sont spectaculaires et personne ne les montre. Une pièce qui sort d'un tour à commande numérique, un contrôle au projecteur de profil, un montage de série : ce sont des images qui retiennent l'attention, qui prouvent votre capacité, et qui servent autant en recrutement qu'en prospection. Pour les commerces et les artisans du fond de vallée, la logique reste celle du local, avec les groupes de commune comme relais de recommandation.",
      faq: [
        {
          q: 'Vous vous déplacez dans la vallée de l\'Arve ?',
          a: "Oui. Comptez environ une heure et quart depuis Albertville par Megève et Sallanches. Les rendez-vous de cadrage et les tournages se font sur place, le reste peut se traiter à distance.",
        },
        {
          q: 'Travaillez-vous pour des entreprises industrielles ?',
          a: "Oui, sur la partie site et contenu. Un site de sous-traitance se construit autour de vos capacités réelles, de vos certifications et de vos références, pas autour d'un discours commercial. Je ne fais en revanche ni publicité en ligne ni photographie industrielle professionnelle.",
        },
        {
          q: 'Un site sert-il quand nos clients sont des grands comptes ?',
          a: "Souvent plus qu'on ne le croit. Un acheteur ou un bureau d'études vérifie systématiquement en ligne avant de lancer une consultation, et un site absent ou daté pèse dans la décision, même quand la relation vient d'ailleurs.",
        },
        {
          q: 'Faites-vous des pages de recrutement ?',
          a: "Oui, et c'est un des usages les plus rentables dans cette vallée. Une page qui montre l'atelier, l'équipe et les conditions réelles change le nombre de candidatures reçues.",
        },
      ],
    },
  },
  {
    slug: 'creation-site-web-thonon-les-bains',
    postalCode: '74200',
    lat: 46.3707,
    lng: 6.4794,
    department: 'Haute-Savoie',
    departmentCode: 'FR-74',
    scope: 'city',
    relatedCities: [
      'creation-site-web-haute-savoie',
      'web-designer-annecy',
      'creation-site-web-cluses',
    ],
    fr: {
      name: 'Thonon-les-Bains',
      title: 'Création Site Web Thonon-les-Bains | Elie Ageron',
      description:
        'Web designer pour les entreprises du Chablais et de Thonon-les-Bains. Commerces, santé, bâtiment, tourisme lacustre. Devis sous 48h.',
      h1Pre: 'Création de site web à ',
      h1Highlight: 'Thonon-les-Bains',
      h2: 'Un bassin dense, avec une clientèle qui travaille en Suisse.',
      intro:
        "Le Chablais a une particularité que peu de bassins français partagent : une part importante des habitants travaillent de l'autre côté du lac ou de la frontière. Ils décident vite, ils comparent en ligne, et ils sont peu disponibles en journée. Ça change la façon dont une entreprise locale doit se rendre joignable.",
      breadcrumb: 'Création Site Web Thonon-les-Bains',
    },
    en: {
      name: 'Thonon-les-Bains',
      title: 'Web Design Thonon-les-Bains | Elie Ageron',
      description:
        'Web designer for businesses in Thonon-les-Bains and the Chablais. Shops, healthcare, construction, lakeside tourism. Quote within 48 hours.',
      h1Pre: 'Web design in ',
      h1Highlight: 'Thonon-les-Bains',
      h2: 'A dense area where many residents work in Switzerland.',
      intro:
        'The Chablais has a rare feature: a large share of residents work across the lake or across the border. They decide quickly, they compare online, and they are rarely available during the day. That changes how a local business needs to be reachable.',
      breadcrumb: 'Web Design Thonon-les-Bains',
    },
    depthFr: {
      travel: "Un peu moins de deux heures depuis Albertville, par Annecy ou par la rive du lac.",
      nearby: [
        'Évian-les-Bains',
        'Publier',
        'Anthy-sur-Léman',
        'Margencel',
        'Sciez',
        'Douvaine',
        'Bons-en-Chablais',
        'Perrignier',
      ],
      sectors: [
        'Bâtiment et rénovation',
        'Santé et professions libérales',
        'Commerces de centre-ville',
        'Hôtellerie et restauration au bord du lac',
        'Bien-être et thérapies',
        'Services aux frontaliers',
      ],
      context: [
        "Thonon est la ville centre d'un bassin qui va de la rive du Léman aux premiers reliefs du Chablais. Le tissu économique y est varié : commerce de centre-ville, santé et professions libérales, bâtiment très actif, et une économie touristique lacustre qui fonctionne surtout l'été, à l'inverse des vallées de Tarentaise.",
        "La singularité du secteur tient au travail frontalier. Une part importante de la population active traverse la frontière ou le lac chaque jour. Ces gens partent tôt, rentrent tard, ont un pouvoir d'achat supérieur à la moyenne locale, et gèrent presque tout depuis leur téléphone, souvent le soir.",
        "Pour une entreprise locale, ça produit une conséquence très concrète : les demandes arrivent en dehors des heures ouvrables, et celui qui répond le lendemain matin a déjà perdu une partie d'entre elles. La joignabilité compte ici plus que dans la plupart des bassins savoyards.",
      ],
      blocks: [
        {
          title: 'Se rendre joignable en dehors des heures de bureau',
          body: "Un formulaire court, un numéro cliquable, une messagerie professionnelle avec un message d'absence honnête, et une réponse dans la journée. Ce n'est pas de la technique, c'est de l'organisation, et c'est ce qui sépare les entreprises qui captent les demandes du soir de celles qui les laissent filer.",
        },
        {
          title: 'Afficher ses prix face à une clientèle qui compare',
          body: "Une clientèle au pouvoir d'achat élevé n'est pas une clientèle qui ne regarde pas les prix. C'est une clientèle qui compare vite et qui écarte ce qui reste flou. Un ordre de grandeur affiché fait gagner des rendez-vous et évite des visites inutiles.",
        },
        {
          title: 'Le bâtiment, un marché tendu où le site sert à filtrer',
          body: "Dans le Chablais, beaucoup d'artisans du bâtiment sont pleins et n'ont pas besoin de plus de demandes, mais de meilleures. Un site qui dit clairement ce que vous faites, ce que vous ne faites pas, votre zone et vos délais réels transforme un flot de demandes ingérable en un carnet mieux qualifié.",
        },
        {
          title: 'Le tourisme du lac obéit au calendrier inverse de la montagne',
          body: "Hébergements, restaurants et activités du bord du Léman vivent surtout de mai à septembre. La visibilité se prépare donc en hiver et au début du printemps, au moment où les gens choisissent, pas en pleine saison quand tout est plein.",
        },
      ],
      social:
        "Dans le Chablais, les groupes de commune et les pages locales sont un canal de recommandation très actif, en partie parce que le bassin est dense et que les gens s'y connaissent. Une entreprise dont le nom revient régulièrement dans ces conversations obtient des demandes sans jamais rien payer. Les vidéos courtes qui montrent un chantier fini, un lieu reconnaissable du bord du lac ou un conseil pratique circulent bien parce que le territoire est identifiable en une image.",
      faq: [
        {
          q: 'Vous intervenez dans le Chablais ?',
          a: "Oui, en me déplaçant pour les rendez-vous de cadrage et les tournages. Comptez un peu moins de deux heures depuis Albertville. Une partie du travail se fait ensuite à distance, ce qui rend le suivi simple quelle que soit la distance.",
        },
        {
          q: 'Faut-il un site en anglais dans ce secteur ?',
          a: "Cela dépend de votre clientèle réelle. Pour un hébergement du bord du lac ou une activité touristique, une version traduite des pages qui décident vaut souvent le coup. Pour un artisan qui travaille pour des résidents, non.",
        },
        {
          q: 'Travaillez-vous avec des professions de santé ?',
          a: "Oui, en tenant compte des règles propres à chaque profession. Elles limitent ce qu'on peut écrire et montrer, et il vaut mieux en tenir compte dès la conception plutôt que de corriger après.",
        },
      ],
    },
  },
  {
    slug: 'creation-site-web-sallanches',
    postalCode: '74700',
    lat: 45.9366,
    lng: 6.632,
    department: 'Haute-Savoie',
    departmentCode: 'FR-74',
    scope: 'city',
    relatedCities: [
      'creation-site-web-cluses',
      'creation-site-web-haute-savoie',
      'creation-site-web-bourg-saint-maurice',
    ],
    fr: {
      name: 'Sallanches',
      title: 'Création Site Web Sallanches | Elie Ageron',
      description:
        'Web designer pour les entreprises de Sallanches et du pays du Mont-Blanc. Bâtiment, commerces, hébergement, activités de montagne. Devis sous 48h.',
      h1Pre: 'Création de site web à ',
      h1Highlight: 'Sallanches',
      h2: 'Le carrefour commercial du pays du Mont-Blanc.',
      intro:
        "Sallanches est la ville où l'on descend faire ses courses et ses démarches quand on habite la vallée, de Passy à Megève. C'est un bassin de service qui alimente des stations à fort pouvoir d'achat, et cette position de carrefour définit ce qu'une entreprise d'ici doit mettre en avant.",
      breadcrumb: 'Création Site Web Sallanches',
    },
    en: {
      name: 'Sallanches',
      title: 'Web Design Sallanches Mont-Blanc | Elie Ageron',
      description:
        'Web designer for businesses in Sallanches and the Mont-Blanc area. Construction, shops, accommodation, mountain activities. Quote within 48 hours.',
      h1Pre: 'Web design in ',
      h1Highlight: 'Sallanches',
      h2: 'The commercial crossroads of the Mont-Blanc valley.',
      intro:
        'Sallanches is where people come down to shop and run errands, from Passy up to Megève. It is a service hub feeding high-spending resorts, and that crossroads position defines what a local business should put forward.',
      breadcrumb: 'Web Design Sallanches',
    },
    depthFr: {
      travel: "Environ une heure depuis Albertville, par Ugine, Flumet et Megève.",
      nearby: [
        'Passy',
        'Domancy',
        'Combloux',
        'Cordon',
        'Megève',
        'Saint-Gervais-les-Bains',
        'Praz-sur-Arly',
        'Magland',
      ],
      sectors: [
        'Bâtiment, charpente et rénovation de chalets',
        'Commerces et services de zone',
        'Hébergement et location saisonnière',
        'Activités de montagne et encadrement sportif',
        'Santé et bien-être',
        'Restauration',
      ],
      context: [
        "Sallanches occupe une place particulière dans le pays du Mont-Blanc : c'est le point de convergence commercial et administratif d'une vallée dont les extrémités, de Megève à Saint-Gervais, vivent du tourisme haut de gamme. Les habitants des stations descendent ici, et une partie des entreprises de Sallanches travaillent en réalité pour les stations.",
        "Le bâtiment y est particulièrement structurant. La rénovation et l'entretien de chalets, la charpente, la menuiserie, l'agencement et les métiers du second œuvre alimentent un marché à panier élevé, avec une clientèle qui n'habite pas forcément sur place et qui décide à distance.",
        "Cette clientèle non résidente est le point clé du bassin. Un propriétaire de chalet qui vit à Paris, à Lyon ou à Genève choisit son artisan sans pouvoir passer à l'atelier. Il choisit sur ce qu'il trouve en ligne, sur des photos de réalisations et sur des avis. C'est un cas où le site pèse beaucoup plus lourd qu'ailleurs.",
      ],
      blocks: [
        {
          title: 'Vendre à un client qui n\'habite pas sur place',
          body: "Quand le propriétaire est à trois cents kilomètres, il ne peut ni passer voir votre travail ni juger votre sérieux de visu. Tout ce qui remplace cette visite compte double : des photos nombreuses de réalisations, un déroulé de chantier écrit, des comptes rendus réguliers, et des avis détaillés. C'est précisément ce que la plupart des entreprises de la vallée ne fournissent pas.",
        },
        {
          title: 'Le panier élevé justifie un site sérieux',
          body: "Sur un marché où une rénovation de chalet se compte en dizaines de milliers d'euros, un site bâclé coûte des affaires entières. Plus le montant est élevé, plus le client cherche des raisons de faire confiance, et plus le moindre détail bancal pèse dans la balance.",
        },
        {
          title: 'La saisonnalité double des activités de montagne',
          body: "Beaucoup d'entreprises d'ici vivent deux saisons et deux creux. La visibilité se prépare pendant les intersaisons, avec la matière captée pendant les périodes pleines. C'est le calendrier inversé, et il s'applique aussi bien aux hébergements qu'aux encadrants sportifs et aux commerces.",
        },
        {
          title: 'Une clientèle internationale, en partie',
          body: "Le pays du Mont-Blanc reçoit une clientèle étrangère régulière. Traduire ce qui décide, sans traduire tout le site, suffit dans la plupart des cas et se fait une fois.",
        },
      ],
      social:
        "Le décor fait une partie du travail : peu de bassins offrent des images aussi immédiatement reconnaissables. Un chantier avec le massif en arrière-plan, un chalet fini, un lever de jour sur la vallée retiennent l'attention sans effort de production. Pour les entreprises du bâtiment, l'avant et après est particulièrement efficace ici, parce que la rénovation de chalet produit des transformations spectaculaires et que la clientèle non résidente n'a que ces images pour juger.",
      faq: [
        {
          q: 'Vous vous déplacez à Sallanches et dans le pays du Mont-Blanc ?',
          a: "Oui, régulièrement. Comptez environ une heure depuis Albertville par Ugine, Flumet et Megève. C'est une des vallées les plus accessibles depuis chez moi.",
        },
        {
          q: 'Travaillez-vous avec des entreprises du bâtiment de montagne ?',
          a: "Oui. C'est un des cas où un site bien fait change vraiment le carnet, parce qu'une partie des clients décident à distance et n'ont que vos photos et vos avis pour vous juger.",
        },
        {
          q: 'Faites-vous des sites pour des locations saisonnières ?',
          a: "Oui, avec un objectif précis : reprendre une part des réservations en direct plutôt que de tout laisser aux plateformes. Cela suppose un calendrier à jour, des tarifs visibles et une fiche Google, pas seulement un joli site.",
        },
      ],
    },
  },
  {
    slug: 'creation-site-web-rumilly',
    postalCode: '74150',
    lat: 45.8664,
    lng: 5.9455,
    department: 'Haute-Savoie',
    departmentCode: 'FR-74',
    scope: 'city',
    relatedCities: [
      'web-designer-annecy',
      'creation-site-web-aix-les-bains',
      'creation-site-web-haute-savoie',
    ],
    fr: {
      name: 'Rumilly',
      title: 'Création Site Web Rumilly | Elie Ageron',
      description:
        "Web designer pour les entreprises de Rumilly et de l'Albanais. Industrie, agroalimentaire, artisans et commerces. Devis sous 48h.",
      h1Pre: 'Création de site web à ',
      h1Highlight: 'Rumilly',
      h2: "Un bassin de travail, entre Annecy et Aix-les-Bains.",
      intro:
        "L'Albanais est un territoire de production plus que de tourisme, coincé entre deux agglomérations qui aspirent l'attention. C'est aussi un bassin où la concurrence en ligne est nettement plus faible qu'à Annecy, ce qui en fait un des endroits où l'on obtient des résultats le plus vite.",
      breadcrumb: 'Création Site Web Rumilly',
    },
    en: {
      name: 'Rumilly',
      title: 'Web Design Rumilly Haute-Savoie | Elie Ageron',
      description:
        'Web designer for businesses in Rumilly and the Albanais area. Industry, food processing, trades and shops. Quote within 48 hours.',
      h1Pre: 'Web design in ',
      h1Highlight: 'Rumilly',
      h2: 'A working area between Annecy and Aix-les-Bains.',
      intro:
        'The Albanais is a production area rather than a tourist one, wedged between two urban centres that absorb the attention. Online competition is far lighter than in Annecy, which makes it one of the places where results come fastest.',
      breadcrumb: 'Web Design Rumilly',
    },
    depthFr: {
      travel: "Environ une heure depuis Albertville, par Annecy.",
      nearby: [
        'Alby-sur-Chéran',
        'Vallières-sur-Fier',
        'Sales',
        'Marcellaz-Albanais',
        'Boussy',
        'Saint-Félix',
        'Hauteville-sur-Fier',
        'Massingy',
      ],
      sectors: [
        'Industrie et agroalimentaire',
        'Bâtiment et travaux publics',
        'Agriculture et circuits courts',
        'Artisanat de production',
        'Commerces et services de proximité',
        'Transport',
      ],
      context: [
        "Rumilly est la ville centre de l'Albanais, un territoire de plaine et de collines entre Annecy et Aix-les-Bains. Contrairement à ses deux voisines, ce n'est pas un bassin touristique : c'est un bassin de production, avec de l'industrie, de l'agroalimentaire, de l'agriculture et un artisanat de fabrication.",
        "La position entre deux agglomérations a un effet paradoxal. Beaucoup d'habitants travaillent à Annecy ou à Chambéry, ce qui vide le territoire en journée, mais l'activité économique locale reste réelle et les entreprises d'ici servent souvent un rayon large.",
        "Pour la visibilité en ligne, c'est une bonne nouvelle. La concurrence sur les recherches locales y est nettement plus faible qu'à Annecy, où le moindre métier est disputé par des dizaines d'entreprises installées. Une fiche Google bien tenue et quelques pages sérieuses suffisent souvent à prendre la première place en quelques mois.",
      ],
      blocks: [
        {
          title: 'Un marché où les résultats arrivent vite',
          body: "C'est l'argument principal de ce bassin. Là où une entreprise annécienne met un an ou deux à bouger sur une recherche disputée, une entreprise de l'Albanais peut se placer en quelques mois avec un travail sérieux mais modeste. Le rendement du temps investi est simplement meilleur.",
        },
        {
          title: 'Nommer les communes, toutes',
          body: "L'Albanais est un territoire de petites communes, et les gens cherchent avec le nom de la leur. Écrire la liste réelle, d'Alby-sur-Chéran à Saint-Félix, vaut mieux que la mention générique d'un département. C'est gratuit et presque personne ne le fait.",
        },
        {
          title: 'Les circuits courts et la vente directe',
          body: "Producteurs, transformateurs et artisans de bouche gagnent beaucoup à être trouvables : horaires de vente, points de retrait, marchés fréquentés, disponibilité des produits. Ce sont des informations pratiques que les gens cherchent activement et qui manquent presque toujours en ligne.",
        },
        {
          title: 'Ne pas se battre sur Annecy quand on est à Rumilly',
          body: "La tentation est forte de viser la grande ville voisine. C'est le meilleur moyen de perdre son temps et son budget : Google privilégie fortement la proximité sur les recherches locales. Mieux vaut dominer son bassin et travailler Annecy avec du contenu ciblé, pas avec des déclarations de zone.",
        },
      ],
      social:
        "Sur un territoire de petites communes, les groupes locaux et les pages de village pèsent lourd dans la recommandation. Une entreprise identifiée comme étant du coin obtient une préférence spontanée que les enseignes des zones commerciales d'Annecy n'auront jamais. La vidéo courte y sert surtout à montrer le travail réel et les visages, dans un contexte où tout le monde finit par se connaître.",
      faq: [
        {
          q: 'Vous vous déplacez à Rumilly et dans l\'Albanais ?',
          a: "Oui. Comptez environ une heure depuis Albertville en passant par Annecy. Les rendez-vous de cadrage et les tournages se font sur place.",
        },
        {
          q: 'Combien de temps pour ressortir sur Google à Rumilly ?',
          a: "Souvent plus vite qu'ailleurs en Haute-Savoie, parce que la concurrence locale y est plus faible qu'à Annecy ou à Chambéry. Quelques mois de travail régulier suffisent en général sur des recherches précises.",
        },
        {
          q: 'Travaillez-vous avec des producteurs et des artisans de bouche ?',
          a: "Oui. L'essentiel pour eux tient à des informations pratiques bien tenues : horaires de vente directe, points de retrait, marchés, disponibilité. C'est peu de travail et ça change le nombre de gens qui poussent la porte.",
        },
      ],
    },
  },
];
