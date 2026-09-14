# Les photos de publication du site

Les maquettes de téléphone et la bande de publications affichent de vraies
couvertures de vidéo. Tant qu'un fichier n'existe pas, un dégradé rose tient la
place et rien ne casse.

## Où les déposer

Dans `public/publications/`, sous ces noms exacts :

| Fichier | Métier | Où il apparaît |
|---|---|---|
| `menuiserie.webp` | Menuisier | Le téléphone de l'accueil, en grand |
| `restaurant.webp` | Restaurateur | Bande de publications, accueil |
| `plomberie.webp` | Plombier | Bande de publications, accueil |
| `therapeute.webp` | Thérapeute | Bande de publications, accueil |
| `coiffure.webp` | Coiffeuse | Bande de publications, page réseaux sociaux |
| `boulangerie.webp` | Boulanger | Bande de publications, page réseaux sociaux |

Format **vertical 4:5**, environ 800 x 1000 px, en `.webp`. Pas plus de 150 Ko
par image : elles se chargent toutes sur la même page.

**Ne pas convertir à la main.** Les générateurs sortent du JPEG de 3 Mo en
1856 x 2304. Un script recadre au centre, redimensionne et encode :

```bash
node scripts/importer-publications.mjs ~/Downloads/woodworker.jpg menuiserie
```

Le second argument est le nom du tableau ci-dessus, sans extension. Compter
environ 3 400 Ko en entrée pour 110 Ko en sortie.

**Déjà en place** : `menuiserie`, `restaurant` et `therapeute`, générées le
13 septembre 2026. Restent `plomberie`, `coiffure` et `boulangerie`.

## La meilleure option, avant les prompts

**Les vraies images arrêtées des vidéos déjà tournées.** Il y a des mois de
rushes pour Nouït et pour Isabelle. Une image arrêtée d'un plan où la personne
sourit en parlant est meilleure que n'importe quelle génération, parce qu'elle
est vraie et qu'elle montre exactement le livrable.

Ce que ça demande : l'accord de la personne pour figurer sur elieageron.com.
Le contrat de Nouït couvre la production, pas la republication sur un site
tiers, donc ça se demande.

Les prompts qui suivent sont la solution de repli, et pour les métiers où il
n'y a pas encore de client.

## Pourquoi la première série de prompts se voyait

Elie, en regardant le résultat : *« elle est réaliste mais IA quand même, un
œil entraîné le voit »*. Il a raison, et le défaut venait du prompt, pas du
modèle. Je demandais un portrait de magazine :

| Ce que je demandais | Ce que ça produit |
|---|---|
| « lumière naturelle latérale par une grande fenêtre » | La lumière parfaite que personne n'a jamais dans son atelier |
| « arrière-plan légèrement flou » | Un bokeh d'objectif à 1 200 € sur une scène d'artisan |
| « elle occupe le tiers central » | Une composition trop juste, jamais celle d'une vraie prise |
| « rendu photo réaliste » | Le modèle vise la belle image, donc la peau lisse et le visage symétrique |

**Le principe correct** : ce n'est pas une photo, c'est **une image arrêtée
d'une vidéo verticale**. Une image arrêtée est toujours un peu ratée. C'est ce
raté qu'il faut demander.

## La deuxième correction : le rire et le grand angle

Deux essais avant d'arriver au bon réglage. Ce qui a été écarté, et pourquoi :

| Essai | Ce qui n'allait pas |
|---|---|
| Grand angle de téléphone | La déformation des bords se voit sur toutes les images générées |
| `zoom x3` plus micro-cravate DJI | Le micro a été essayé puis retiré : il attire l'oeil au lieu de disparaître |
| `elle rit franchement, bouche ouverte` | Elie : *« ils rigolent trop, on dirait c'est forcé »*. Un rire à pleines dents est une pose, jamais un moment de tournage |

**Les trois réglages retenus :**

1. **`objectif 50 mm, focale standard, aucune déformation de bord.`** Ni grand
   angle, ni téléobjectif marqué. C'est la focale qui ressemble le plus à un
   oeil, donc celle qu'on ne remarque pas.
2. **Le moment d'après, pas le moment fort.** `vient de finir de répondre à une
   question, l'expression retombe : sourire discret et sincère, bouche à peine
   entrouverte, coin des yeux plissé`. Sur un vrai tournage, la personne répond
   à une question, elle ne joue pas la joie.
3. **Le regard à côté de l'objectif**, vers la personne qui pose les questions.

`grand angle`, `déformation de bord`, `rire franc`, `bouche grande ouverte`,
`dents visibles en grand` et `micro-cravate` sont tous dans la liste des rejets.

## Les prompts

Les six suivent la même trame. Seuls le métier, le décor et la lumière changent.

### Menuisier

> Image arrêtée d'une vidéo verticale 4:5, filmée à l'objectif 50 mm, focale
> standard, aucune déformation de bord. Une menuisière d'environ 45 ans dans son
> atelier. Elle vient de finir de répondre à une question, l'expression retombe :
> sourire discret et sincère, bouche à peine entrouverte, coin des yeux plissé,
> regard légèrement à côté de l'objectif. Léger flou de mouvement sur sa main
> droite. Lumière mélangée, néons de plafond blanc froid et lumière du jour par
> une porte ouverte au fond, légère dominante verte. Atelier bien tenu et en
> activité : outils rangés au tableau, une planche en cours sur l'établi, sol
> dégagé. Tablier de travail porté, cheveux attachés avec une mèche qui dépasse. Cadrage un peu haut, elle
> est légèrement décalée à gauche. Peau réelle avec pores visibles et front qui
> brille. Le tiers bas de l'image reste calme et peu contrasté.
> À éviter : grand angle, déformation de bord, rire franc, bouche grande
> ouverte, dents visibles en grand, lumière dorée, éclairage de studio, peau
> lissée, pose de banque d'images, lieu sale ou vétuste, câbles apparents, désordre au
> sol, micro-cravate, texte.

### Restaurateur

> Image arrêtée d'une vidéo verticale 4:5, filmée à l'objectif 50 mm, focale
> standard, aucune déformation de bord. Un chef d'environ 50 ans au passe de sa
> cuisine, veste ouverte et col de travers. Il vient de répondre à une question,
> sourire léger et un peu las, bouche fermée, les yeux qui sourient, regard vers
> quelqu'un hors champ. Léger flou de mouvement sur son épaule. Lumière crue des
> néons de cuisine plus une lampe chaude au-dessus du passe, les deux se
> battent. Inox propre, une caisse de légumes posée sur le plan, un torchon sur
> l'épaule. Cadrage serré et un peu bancal. Visage transpirant, peau réelle, barbe de
> trois jours. Le tiers bas de l'image reste calme et peu contrasté.
> À éviter : grand angle, déformation de bord, rire franc, bouche grande
> ouverte, lumière dorée, éclairage de studio, peau lissée, assiette dressée au
> premier plan, pose de banque d'images, lieu sale ou vétuste, câbles apparents, désordre au
> sol, micro-cravate, texte.

### Plombier

> Image arrêtée d'une vidéo verticale 4:5, filmée à l'objectif 50 mm, focale
> standard, aucune déformation de bord. Un plombier d'environ 35 ans accroupi
> devant une chaudière dans une buanderie. Il vient de finir de répondre à une
> question, l'expression retombe : sourire discret et sincère, bouche à peine
> entrouverte, coin des yeux plissé, regard légèrement à côté de l'objectif. Une
> clé dans la main. Léger flou de mouvement sur son épaule. Lumière d'une ampoule
> nue au plafond et d'une fenêtre surexposée derrière lui, contraste
> désagréable. Buanderie propre d'une maison récente, tuyaux en cuivre bien
> alignés, caisse à outils fermée sur le plan de travail. Tenue de travail bleue
> nette, mains propres, front qui brille, peau réelle avec pores visibles. Cadrage un peu serré, il est décentré à droite. Le
> tiers bas de l'image reste calme et peu contrasté.
> À éviter : grand angle, déformation de bord, rire franc, bouche grande
> ouverte, dents visibles en grand, lumière dorée, éclairage de studio, peau
> lissée, pose de banque d'images, lieu sale ou vétuste, câbles apparents, désordre au
> sol, micro-cravate, texte.

### Thérapeute

> Image arrêtée d'une vidéo verticale 4:5, filmée à l'objectif 50 mm, focale
> standard, aucune déformation de bord. Une praticienne d'environ 45 ans assise
> dans son cabinet. Elle vient de répondre à une question, sourire léger et
> calme, bouche fermée, la tête un peu de travers, regard légèrement à côté de
> l'objectif. Lumière du jour par une fenêtre derrière elle, donc le fond est un
> peu surexposé et son visage un peu sombre. Cabinet simple et bien tenu : une table de
> soin faite, une plante, un radiateur. Gilet
> en maille, cheveux simples. Cadrage avec trop d'air au-dessus de la tête. Peau
> réelle, sans maquillage marqué. Le tiers bas de l'image reste calme et peu
> contrasté.
> À éviter : grand angle, déformation de bord, rire franc, bouche grande
> ouverte, lumière dorée, éclairage de studio, ambiance spa, bougies, peau
> lissée, pose de banque d'images, lieu sale ou vétuste, câbles apparents, désordre au
> sol, micro-cravate, texte.

### Coiffeuse

> Image arrêtée d'une vidéo verticale 4:5, filmée à l'objectif 50 mm, focale
> standard, aucune déformation de bord. Une coiffeuse d'environ 32 ans debout
> dans son salon, ciseaux et peigne à la main. Elle est en train de parler,
> expression détendue, sourire léger et sincère, bouche à peine entrouverte,
> regard vers quelqu'un hors champ. Léger flou de mouvement sur les ciseaux.
> Lumière de vitrine très forte d'un côté et néons blancs de l'autre, dominante
> froide et désagréable. Salon de quartier soigné, plafond nu et sans
> aucun câble visible, un miroir, un fauteuil, quelques flacons posés simplement
> sur la tablette. Peau réelle, maquillage
> simple, une mèche qui tombe. Cadrage légèrement de travers, trop d'air au-dessus
> de la tête. Le tiers bas de l'image reste calme et peu contrasté.
> À éviter : grand angle, déformation de bord, rire franc, bouche grande
> ouverte, dents visibles en grand, lumière dorée, éclairage de studio, peau
> lissée, salon impeccable, pose de banque d'images, micro-cravate, texte.

### Boulanger

> Image arrêtée d'une vidéo verticale 4:5, filmée à l'objectif 50 mm, focale
> standard, aucune déformation de bord. Un boulanger d'environ 45 ans dans son
> fournil à cinq heures du matin, tablier fariné, une miche dans les mains. Il
> vient de répondre à une question, sourire discret et fatigué, bouche fermée,
> les yeux qui sourient, regard légèrement à côté de l'objectif. Léger flou de
> mouvement sur ses bras. Lumière de néons de fournil uniquement, blanche et
> plate, aucune lumière naturelle. Fournil professionnel propre, four fermé,
> grilles de pain rangées, sol dégagé. Cernes, front qui brille, peau réelle avec
> pores visibles. Cadrage un peu serré et décentré. Le tiers bas de l'image reste
> calme et peu contrasté.
> À éviter : grand angle, déformation de bord, rire franc, bouche grande
> ouverte, lumière dorée, éclairage de studio, peau lissée, fournil impeccable,
> pose de banque d'images, micro-cravate, texte.

## Le test avant de garder une image

Trois questions. Une seule réponse « non » suffit à jeter l'image.

1. Est-ce qu'il y a au moins **un élément raté** dans le cadre, quelque chose
   qu'un photographe aurait enlevé ?
2. Est-ce que la **lumière est laide** quelque part, surexposée ou verdâtre ?
3. Est-ce que la personne pourrait être **quelqu'un croisé à Albertville**,
   plutôt que quelqu'un vu dans une publicité ?
4. Est-ce que le lieu **donne envie**, ou est-ce qu'il fait négligé ? Un
   artisan qui se voit dans un décor sale ne rappelle pas.
5. Est-ce que l'expression est celle de **quelqu'un qui vient de parler**,
   plutôt que celle de quelqu'un à qui on a demandé de sourire ? Un rire à
   pleines dents rate cette question à tous les coups.

## Ce que dit la maquette par-dessus

Chaque image reçoit un titre de vidéo posé en bas, en blanc sur un dégradé
sombre, plus un compteur de mentions et de commentaires. Les titres sont écrits
dans `src/data/publications.ts` : ce sont des exemples de sujets réels, pas des
promesses de résultat.

> ⚠️ Ces photos illustrent le service, elles ne représentent pas des clients
> d'Elie. Elles sont donc `aria-hidden` comme le reste des maquettes, et aucune
> légende ne laisse croire qu'il s'agit d'un client réel. Le jour où de vraies
> captures de comptes clients sont disponibles, elles remplacent celles-ci et la
> section devient une vraie preuve.
