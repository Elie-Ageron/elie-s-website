# Carte de couverture SEO

Tableau de bord de la couverture éditoriale de elieageron.com.
Dernière mise à jour : 13 août 2026.

**État : 139 articles, 15 pages locales, 4 guides piliers, 178 URL au sitemap.**
Point de départ du 13 août au matin : 47 articles, 11 pages locales, 3 guides,
81 URL.

## Comment lire ce document

Chaque ligne est une question qu'un artisan, un commerçant, un thérapeute ou une
TPE de Savoie ou Haute-Savoie tape réellement sur Google. **Couvert** : une page
répond à la requête et y répond bien. **Trou** : rien sur le site.

---

## Front 1 : créer un site

Couvert : combien ça coûte, combien de temps, faire soi-même ou pas, agence
contre freelance contre plateforme, offre à bas prix et ses clauses, nom de
domaine et hébergement, récupérer un site dont on a perdu les accès, changer de
prestataire, mentions légales et RGPD, accessibilité, site vitrine contre
boutique en ligne, quoi écrire, quelles photos, photos pro contre smartphone,
formulaire de contact, page d'accueil, page réalisations, page à propos, une
page par prestation, page unique contre multipage, ce qui vieillit, quand
refaire, refonte sans perdre Google, site en anglais, prise de rendez-vous,
faut-il un blog, choisir le nom de son entreprise, identité visuelle, site
piraté, emails en indésirables, budget annuel, travailler dans la durée.

Pilier : [creer-site-web-tpe](/guides/creer-site-web-tpe).

Trous restants : aucun de premier rang.

## Front 2 : être visible sur Google

Couvert : le référencement expliqué sans jargon, qui fait quoi entre site fiche
et réseaux, ce que personne ne contrôle, créer sa fiche Google, l'optimiser,
publier dessus, fiche suspendue, absence sur Maps, zone d'intervention sans
local, être premier dans sa ville, pourquoi un concurrent passe devant, délais
réels, trouver ses mots-clés, console de recherche, obtenir des avis, répondre à
un avis négatif, vague d'avis négatifs, avis hors Google, annuaires, Google Ads
contre référencement naturel, être cité par les IA, référencement des images,
étoiles dans les résultats, les dix erreurs récurrentes.

Pilier : [visibilite-google-locale](/guides/visibilite-google-locale).

Trous restants : Google Business multi-établissements (faible priorité).

## Front 3 : le contenu court

Couvert : choix de plateforme, Instagram contre Facebook, TikTok, LinkedIn,
YouTube Shorts et Pinterest, groupes de commune, stories contre reels,
fréquence, heure de publication, idées de contenu, calendrier éditorial,
algorithme, hashtags, musique et droits, achat d'abonnés, commentaires et
messages privés, avant-après, témoignage client en vidéo, filmer avec ses
salariés, filmer et son et lumière et montage et sous-titres, prix d'une
gestion, déléguer, concurrent qui copie les contenus.

Piliers : [reseaux-sociaux-entreprise-locale](/guides/reseaux-sociaux-entreprise-locale)
et [video-smartphone-entreprise](/guides/video-smartphone-entreprise).

Trous restants : aucun de premier rang.

## Conversion et acquisition hors Google

Couvert : le devis qui se signe, la relance sans insister, rater moins d'appels,
afficher ses prix ou pas, liste d'emails, WhatsApp Business, bouche à oreille
organisé, salons et marchés, supports physiques, prospection des clients
professionnels, marchés publics, fidélisation sur un métier à cycle long,
agents conversationnels, mesurer si ça rapporte, budget temps hebdomadaire,
recrutement.

## Pages par métier

Couvert : artisan du bâtiment, électricien et plombier et chauffagiste,
menuisier et cuisiniste, paysagiste, garage automobile, restaurant, traiteur et
food truck, commerce de centre-ville, coiffeur et esthétique, thérapeute, coach
sportif et yoga, formateur indépendant, agent immobilier, auto-école, cabinet
comptable et conseil, location saisonnière, hébergement de montagne, moniteur et
guide, activité saisonnière.

Trous restants : métiers du transport de personnes hors auto-école, métiers de
l'événementiel hors traiteur.

## Pages locales

15 en ligne : Albertville, Chambéry, Aix-les-Bains, Ugine, Moûtiers,
Bourg-Saint-Maurice, Saint-Jean-de-Maurienne, La Ravoire, Annecy, Savoie,
Haute-Savoie, Cluses, Thonon-les-Bains, Sallanches, Rumilly.

Candidates restantes, uniquement avec de la matière propre : La Roche-sur-Foron,
Beaufort, Val d'Isère et Tignes, Passy.

Règle inchangée : une page locale sans tissu économique décrit correctement fait
plus de mal que de bien.

---

## Ce qui a été corrigé en route

Trois écarts trouvés entre le site et CLAUDE.md, corrigés et commités :

1. `index.html` annonçait encore « publication 2 à 3 fois par semaine » dans le
   fallback noscript, servi aux crawleurs sur toutes les routes. `check:content`
   scanne désormais `index.html` et `llms.txt`.
2. Les schémas JSON-LD statiques décrivaient l'activité en anglais sur toutes
   les pages, sur une cible française et locale. Passés en français.
3. `llms.txt` annonçait 47 articles, 11 pages locales et 3 guides. Il est
   maintenant généré depuis les sources par `npm run gen:llms`, intégré à
   `gen:all`.

Un audit éditorial du corpus a par ailleurs conduit à retirer deux chiffres
inventés, une promesse de position sur une page locale, une réintroduction de la
« demi-journée de tournage », et à ajouter des phrases de périmètre pour séparer
les articles qui visaient la même requête.

## Funnel et conversion

Le contenu ne sert à rien si le chemin vers la demande est cassé. Sept fuites
trouvées et corrigées le 13 août :

1. **Les 139 articles finissaient sur le même bouton Calendly**, sans aucun lien
   réel. Rien pour les crawleurs, et une seule sortie, la plus engageante de
   toutes. Le bloc est désormais contextualisé par catégorie, avec un vrai lien
   vers la page de service, un lien vers `/contact` et le téléphone cliquable.
2. **Les 6 pages catégorie n'avaient aucune sortie commerciale.** Ajout d'un
   bloc par catégorie, à deux niveaux d'engagement.
3. **`/services` et `/reseaux-sociaux` ne pointaient vers aucun des 139
   articles.** Le maillage ne circulait que dans un sens. Nouveau composant
   `ServiceResources` : guide pilier plus huit articles qui traitent les
   objections d'avant-achat.
4. **Les 15 pages locales ne pointaient vers aucun article.** Six articles par
   page, choisis pour le tissu économique du bassin, pas une liste générique.
5. **`/services` n'avait aucune FAQ ni schéma `FAQPage`**, alors que c'est la
   page qui doit vendre. Huit objections réelles, juste avant le dernier appel
   à l'action.
6. **Le formulaire n'avait ni champ téléphone, ni mention RGPD, ni délai de
   réponse annoncé**, alors que trois articles du site disent que c'est le
   minimum. Corrigé, avec une sortie de secours visible.
7. **Le bloc de contact global n'offrait pas le téléphone** : Calendly, WhatsApp
   et email seulement, sur une clientèle locale dont c'est le canal majoritaire.

Point technique restant à surveiller : le formulaire envoie en `no-cors`. La
réponse du serveur est opaque, donc une erreur côté traitement ne peut pas être
détectée par le navigateur. Le message de confirmation invite à écrire
directement en l'absence de réponse, mais un test d'envoi réel reste à faire.

## Santé technique du site

Audit mesuré sur les 178 pages pré-rendues, le 13 août. État avant, puis après
correction.

| Contrôle | Avant | Après |
|---|---|---|
| Pages plantant à l'affichage | 2 | 0 |
| Pages sans canonical | 7 | 0 |
| Pages sans meta description | 7 | 0 |
| Pages sans `og:title` | 9 | 0 |
| Descriptions sous 110 caractères | 6 | 0 |
| Ancres non descriptives | 176 | 0 |
| Erreurs TypeScript du projet | 2 | 0 |

Le plus grave, et de loin : **`/a-propos` et `/guides` affichaient « Erreur de
rendu » à tous les visiteurs français.** `seoData.fr` s'arrêtait à la clef
`apps`, donc `SEO.tsx` lisait `data.title` sur `undefined`. Ce sont les deux
pages les plus liées du site après l'accueil : `/a-propos` est le signal E-E-A-T
principal, cité depuis chacun des 139 articles, et `/guides` est le hub des
piliers. Corrigé, plus un repli dans le composant pour qu'un oubli du même genre
ne puisse plus faire tomber une page entière.

Autre conflit corrigé : `/get-started` déclarait un canonical vers `/contact`
tout en figurant au sitemap en priorité 0.9. Les deux signaux se contredisaient.
La page a désormais sa propre identité.

`scripts/prerender.mjs` contrôle maintenant ce qu'il a réellement écrit. Il
supprime les pages figées sur l'écran d'erreur, parce qu'un fichier cassé
provoque ensuite une erreur d'hydratation chez le visiteur et vaut donc moins
que pas de fichier du tout, et il liste les pages dont le `<head>` est
incomplet. Il tourne en séquentiel : à deux onglets, les pages lourdes se
disputaient le processeur et deux ou trois pages sortaient sans canonical à
chaque exécution, jamais les mêmes.

## Décisions tranchées

- **Title Case des balises title** : conservé. La convention historique du site
  l'emporte sur la règle générale de CLAUDE.md, qui a été précisée en
  conséquence. Réécrire 139 balises title d'un coup serait un risque sans
  bénéfice.
- **Prix sur /services** : inchangé. L'écart entre le conseil donné aux lecteurs
  et l'absence de prix sur la page services est assumé et expliqué dans
  [afficher-ses-prix-ou-pas](/blog/afficher-ses-prix-ou-pas), vers lequel le
  guide renvoie désormais.

## Suite possible

1. Pages locales Haute-Savoie restantes, seulement si le contenu propre existe.
2. Métiers manquants de second rang.
3. Reprise des articles historiques les plus faibles, plutôt que de nouveaux
   articles : à 139 articles, améliorer une page déjà positionnée rapporte plus
   vite qu'en créer une nouvelle.

## Journal

- 13 août, matin : carte établie. 47 articles, 11 pages locales, 3 guides.
- 13 août : 21 lots poussés. Clusters création de site, visibilité Google,
  métiers de la montagne, réseaux sociaux second rang, métiers hors montagne en
  trois vagues, arbitrages techniques, canaux email et messagerie, pilotage,
  terrain, moment de la décision, outils, problèmes concrets, structure du site,
  acquisition hors Google, visibilité avancée, fondamentaux.
- 13 août : 4e guide pilier `creer-site-web-tpe`, 4 pages locales Haute-Savoie,
  générateur `llms.txt`, trois corrections d'écarts avec CLAUDE.md, une passe de
  corrections issues d'un audit éditorial.
- **Total : 139 articles, 15 pages locales, 4 guides, 178 URL.**
