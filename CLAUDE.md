# CLAUDE.md — Elie Ageron Web Design

## Contexte du projet

Site vitrine / portfolio de **Elie Ageron**, web designer et partenaire web basé à **Albertville, Savoie (73), France**. Zone d'intervention : Savoie, Haute-Savoie, bassin annécien, France entière.
- URL : https://elieageron.com
- Stack : React + TypeScript + Vite + Tailwind + Supabase + Vercel
- Bilingue : Français (défaut) + Anglais
- Email pro : **elie@elieageron.com** (adresse canonique — toujours l'utiliser, pas elieageron@gmail.com). `web@elieageron.com` est un ancien alias encore fonctionnel mais déprécié : ne plus l'utiliser.
- Téléphone : +33 6 95 55 53 18

## Positionnement
**Partenaire web tout-en-un**, avec **deux gros services de rang égal** : la **création de sites web** et la **création de contenu pour les réseaux sociaux**. Elie accompagne ses clients sur toute leur présence en ligne, dans la durée. ICP : TPE, artisans, thérapeutes / formateurs, et PME locales (hors multinationales).

## Services proposés
Les 7 services (source unique : `src/data/services.ts`, **l'ordre du tableau pilote l'affichage**) :
- **Sites web** (pilier 1) — landing dès 500€, vitrine dès 1500€, pack lancement dès 3500€
- **Réseaux sociaux** (pilier 2, page dédiée `/reseaux-sociaux`) — tournage sur place **une journée** par mois, montage vertical, sous-titres, puis **6 à 12 publications dans le mois** sur Instagram / Facebook / TikTok / YouTube Shorts. Récurrent, **à partir de 890€/mois**.
  > ⚠️ **Révisé en août 2026, deux points à ne jamais réintroduire.**
  > 1. **La « demi-journée » de tournage n'existe plus** : c'est une journée entière. L'ancien périmètre (demi-journée + 2 à 3 publications par semaine) représentait environ 23 h de travail pour 450 €, soit 19 €/h brut.
  > 2. **Aucune formule où le client filme lui-même.** Écartée volontairement : sans production sur place, la matière s'épuise en six semaines et le compte retombe. C'est le raisonnement de l'article `/blog/prix-gestion-reseaux-sociaux`, il doit rester cohérent avec l'offre.
  >
  > Le plancher **890 € est le seul prix affiché publiquement** (page `/reseaux-sociaux`, FAQ et section « ce qui est compris », `llms.txt`, schéma `Offer`). La grille complète reste hors ligne.
  > Sources internes : `création de contenue/ressources, data/15-CLIENTS/_MOI/02-offre.md`.
- **Google Business** — création / optimisation de la fiche
- **Identité de marque** — logo, charte (réalisée avec son frère, designer)
- **Référencement local (SEO)** — suivi continu (Elie monte en compétence dessus)
- **Avis & e-réputation** — collecte + réponses aux avis Google
- **Rédaction de contenu** — textes site, posts, blog (produits avec Claude + skill)

**Maintenance site :** Option A 0€, Option B 25€/mois, Option C 80€/mois

### Notes capacité / sous-traitance
- **Pas proposés** : Photo/vidéo (frère photographe pas encore pro) et Publicité Google/Meta Ads (compétence non maîtrisée) — retirés volontairement.
- **Événementiel** : **supprimé (août 2026)**. Plus un service à part : une landing page d'événement est simplement un site web. La page `/event-production` et les démos Apex Summit / Chromatic ont été retirées, l'URL redirige en 301 vers `/services` (règle dans `vercel.json`).

> ⚠️ **Révisé le 13 septembre 2026 : les prix planchers sont désormais publics.**
> Affichés : site une page **dès 500 €**, site vitrine **dès 1 500 €**, pack lancement **dès 3 500 €**, réseaux sociaux **dès 890 €/mois**. Ils apparaissent sur les formules de la home (`ServicesSection.tsx`), dans les meta descriptions, dans `llms.txt` et `llms-full.txt`.
> **Pourquoi** : relevé du SERP « agence web albertville » le 13/09/2026, tous les concurrents locaux annoncent un prix ou un délai dans leur extrait Google (agencecomsi « dès 2 100 € HT » et « livré dès 3 semaines », aacréation « dès 500 € HT », Agence Marin « dès 49 €/mois »). Et la fiche `02-offre.md` le dit : un prix qu'on doit demander est un prix qu'on peut négocier.
> **La grille complète reste hors ligne** (890 / 1 290 / 1 890 pour les réseaux). Seul le plancher est public. Modèle business inchangé : land & expand.

---

## Architecture SEO du projet

### Composants SEO principaux
- `src/components/SEO.tsx` — Helmet (title, description, OG, Twitter, canonical, keywords, geo) par page
- `src/components/JsonLd.tsx` — Schemas globaux : Person, ProfessionalService, WebSite, BreadcrumbList
- `src/components/OrganizationSchema.tsx` — Schemas : Organization + LocalBusiness
- `src/components/FAQSchema.tsx` — FAQPage schema (pages home + why)
- `src/components/ReviewSchema.tsx` — Review schemas
- `src/components/Breadcrumb.tsx` — Breadcrumb visuel
- `src/components/InternalLinks.tsx` — Liens internes pour crawl
- `src/components/Analytics.tsx` — GTM (GTM-MTQ3GP5H)

### Fichiers techniques
- `index.html` — Meta tags statiques (fallback pour crawlers), schemas JSON-LD statiques
- `public/sitemap.xml` — Sitemap avec hreflang fr/en
- `public/robots.txt` — Directives crawl

### Page Services (/services)
- `src/pages/Services.tsx` — Page hub du partenaire web : hero, manifeste (repositionnement), **une section alternée par service** (numéro fantôme, orbe, kicker), "pourquoi un partenaire", CTA. **Sans prix affiché.**
- `src/data/services.ts` — Source unique des 7 services (kicker, titre, desc, bullets, prix interne FR/EN, icône, ancre)
- `src/components/ServicesEcosystem.tsx` — Section grille "Et une fois le site en ligne ?" affichée sur la Home (après les formules site)
- Le menu est **plat** (Services · Réseaux sociaux · Portfolio · Blog · Contact) — "Services" pointe vers la page unique `/services`, "Réseaux sociaux" vers `/reseaux-sociaux`. Les ancres (`#reseaux-sociaux`, `#google-business`…) servent aux pills du hero de la page services.
- **Pas de page Tarifs** : la page `/pricing` a été retirée (tout est sur devis). Les 3 formules de site vivent sur la home (`ServicesSection.tsx`), suivies d'une note « chiffré sur devis ». L'URL `/pricing` redirige vers `/services` (SEO). Prix de référence internes conservés dans `src/data/services.ts` (jamais affichés).

### Page Réseaux sociaux (`/reseaux-sociaux`)
- `src/pages/SocialMedia.tsx` — hero, preuve en prose, déroulé d'un mois type (tournage → montage → publication), ce qui est inclus, combo site + réseaux, FAQ (8 questions) et CTA. Le prix plancher de 890 € est affiché.
- **Le CTA principal du hero et du pied de page est `/audit-gratuit`**, l'appel Calendly passe en second. Deux champs valent mieux qu'un créneau à poser pour quelqu'un qui découvre la page.
- Schémas : `Service` (@id `/reseaux-sociaux#service`), `FAQPage`, `BreadcrumbList`.

### Les six pages locales du pilier réseaux (16 septembre 2026)

Source : `src/data/social-cities.ts`, rendu par `src/pages/SocialCityPage.tsx`.

> 🔴 **Le trou était structurel, et il expliquait la plainte d'Elie.** *« les
> gens me trouvent pour les sites web, je veux que quand les gens cherchent
> réseaux sociaux Albertville ils me trouvent. »* Les quinze pages de
> `src/data/cities/` portent toutes un titre de création de site web. Pour
> « community manager Albertville », le site n'avait donc **qu'une seule page
> candidate**, `/reseaux-sociaux`, régionale et générique, en concurrence
> interne avec quinze pages de site web mieux maillées.
>
> Relevé de la page de résultats le même jour : les quatre sites qui tiennent
> la première page (123digital, Luca De Sa, Comète Digital, Agence Origin) ont
> **tous** une page dédiée dont l'URL et la balise title contiennent le métier
> et le nom de la commune. Aucun des quatre ne se déplace pour filmer.

| URL | Zone |
|---|---|
| `/community-manager-albertville` | la base, plus la combe et la vallée |
| `/community-manager-chambery` | le plus gros bassin, et le seul où la concurrence se voit |
| `/community-manager-annecy` | exigence visuelle haute, viser la commune pas la ville |
| `/community-manager-aix-les-bains` | thermalisme, praticiens, saison de mars à octobre |
| `/gestion-reseaux-sociaux-savoie` | quatre marchés qui ne se ressemblent pas |
| `/gestion-reseaux-sociaux-haute-savoie` | Genevois, Arve, Chablais |

**Le mot « community manager » est dans la balise title parce que c'est le mot
que les gens tapent.** Le H1 le reprend et le premier paragraphe corrige
aussitôt : Elie ne gère pas des publications, il vient produire la matière.
C'est l'écart qui le distingue sur cette page de résultats, pas un défaut à
masquer.

> 🔴 **La règle de cannibalisation, trouvée le jour même par `check:tags`.**
> `/reseaux-sociaux` s'appelait « Gestion Réseaux Sociaux Savoie », exactement
> le titre de la nouvelle page département. Deux pages du même site sur la même
> requête se coupent l'herbe sous le pied. **La page pilier porte l'offre, les
> pages locales portent le lieu.** Le titre du pilier est devenu « Gestion de
> Réseaux Sociaux Entreprise ». Ne pas y remettre un nom de lieu.

⚠️ Même règle que pour les quinze autres pages locales : **chaque page doit
dire quelque chose de vrai sur SON bassin.** Une page dupliquée où seul le nom
de la commune change ne sert à rien et peut desservir. Chacune porte son
terrain réel, ses angles de tournage, sa FAQ, ses articles et un renvoi croisé
vers la page site web de la même commune.

⚠️ **Le maillage est la moitié du travail.** Les six pages sont dans le
sitemap, dans `llms.txt`, dans le pied de page, et dans le squelette HTML
pré-rendu de l'accueil, de `/services`, de `/portfolio` et de
`/reseaux-sociaux`. Sans ça elles n'étaient atteignables que par le sitemap,
soit exactement la situation qui a bloqué le site en août 2026.

⚠️ `SocialClientsSection` est affichée sur ces pages. Elle vit sur
`/portfolio` et Elie l'avait fait descendre de l'accueil (*« ça ne fait pas
assez longtemps que je gère »*). **Elle est ici parce que les deux comptes
gérés sont à Albertville** et qu'une page qui vend une prestation sans aucune
preuve ne tient pas. À trancher s'il n'est pas d'accord.

⚠️ Toute nouvelle page de cette famille doit être ajoutée à
`scripts/check-a11y.mjs` et `scripts/check-overflow.mjs` : les deux campagnes
tournent sur des listes de pages fixes, et ce qui n'y est pas n'est jamais
mesuré.

### Page Audit gratuit (`/audit-gratuit`)
- `src/pages/AuditGratuit.tsx` + `src/components/AuditForm.tsx` — **l'aimant du funnel**, créé le 13 septembre 2026.
- L'offre : Elie passe trente à quarante-cinq minutes sur la présence en ligne d'une entreprise, puis enregistre **4 minutes de vidéo** (fiche Google, réseaux, site, position sur « métier + commune »), livrées **sous 48 h ouvrées**.
- **Le formulaire fait deux champs** : nom de l'entreprise, et **numéro de téléphone**. Ne jamais en ajouter : la valeur de l'aimant vient de sa facilité d'accès. Tout le reste se demande dans la réponse.
  > ⚠️ **Révisé le 14 septembre 2026 : le second champ était « email ou téléphone », c'est maintenant le numéro.** Elie, après avoir testé le formulaire de bout en bout : *« si dans le formulaire j'ai déjà un numéro, je peux les rappeler le plus rapidement possible. Dès que j'envoie l'email, personne ne répond. Faut que ce soit le numéro. »* Un champ libre laisse le choix, et le choix par défaut est l'adresse mail : le canal le plus confortable pour le visiteur, le moins efficace pour Elie.
  >
  > **La saisie n'est pas validée au format.** Quelqu'un qui tape quand même une adresse passe, et le script la range du bon côté. Un formulaire d'aimant ne refuse jamais une demande pour un problème de format.
  >
  > 🔴 **Ce changement a rendu fausses quatre promesses « aucun rappel ».** Elles ont toutes été réécrites en **« aucune relance »**, qui reste vrai : un appel pour livrer la vidéo, et rien après. Chercher `relance` avant de retoucher cette page.
- **Les trois interdits, affichés en clair sur la page parce qu'ils sont l'argument** : ne rien vendre dedans, ne jamais dénigrer le travail existant (on décrit le parcours du visiteur, jamais la personne), ne jamais dépasser 5 minutes. Le troisième disait « je ne vous rappelle pas » : il dit maintenant « je ne relance pas », puisque l'appel fait partie de la livraison.

### Ce que la relecture aveugle a fait changer, le 14 septembre 2026

Trois profils lisaient le bloc de fin de page : un plombier d'Albertville, une restauratrice de Chambéry, un visiteur sans contexte. Trois corrections sur trois :

| Ce qui était écrit | Pourquoi ça a sauté |
|---|---|
| « Vous voulez savoir pourquoi vos concurrents sortent devant vous ? » | Braque les trois profils. Elle présuppose une défaite, et le plombier refuse déjà des chantiers. Le visiteur sans contexte y lit « l'ouverture d'un démarcheur » |
| « Je vous appelle pour vous envoyer la vidéo » | Prétexte visible : on n'appelle pas quelqu'un pour envoyer un fichier. Il annulait « je ne vends rien » juste au-dessus |
| « ce qui vous coûte des appels » | Vocabulaire d'artisan. Un restaurant perd des couverts, un thérapeute des rendez-vous. Le mot excluait la moitié de la clientèle visée |

L'accroche dit maintenant **« Je tape le nom de votre entreprise sur Google, et je vous dis ce que je vois. »** Elle décrit le geste, et le geste est déjà la promesse.

> **La règle qui en sort** : une accroche qui présuppose une défaite ferme la porte avant d'avoir rien montré. Et une justification qui sonne comme un prétexte coûte plus cher que l'absence de justification.
- L'audit était déjà décidé dans `15-CLIENTS/_MOI/03-funnel.md` et `05-pieces-du-funnel.md`. Son formulaire avait été retiré avec la page `/lieux-de-reception` : les demandes passaient par `/contact`, qui demande un message libre. C'était le « trou connu » de la fiche funnel.
- C'est le **CTA principal du header, du menu mobile, du footer et du hero de l'accueil**. Il a remplacé « Démarrer » (`/get-started`), qui demandait un brief en quatre étapes.
- Schémas : `Service` (prix 0), `FAQPage`, `BreadcrumbList`.

### Preuve sociale : aucun chiffre sur le site, et c'est définitif

> 🔴 **Le 14 septembre 2026, la dernière section chiffrée a été supprimée.** Elle vivait sur `/reseaux-sociaux` et racontait les 56 619 vues de la première publication d'une cliente, suivies d'un disclaimer de trois lignes. Elie : *« enlève cette section. »*
>
> Elle cumulait trois défauts. Un chiffre de performance en argument de vente, ce qu'il refuse depuis le début (*« j'aime pas promettre du chiffre »*). Un disclaimer qui annulait le chiffre juste après l'avoir donné. Et une cliente présentée comme anonyme alors qu'elle est nommée plus bas sur la même page.
>
> Avant elle, le chiffre était monté en 8xl sur `/reseaux-sociaux`, et un bandeau de quatre compteurs avait été posé sur le hero de l'accueil. Les deux avaient déjà sauté le 13 septembre. Le skill `impeccable` bannit ce patron nommément (« gros chiffre, petit label, stats de soutien », cliché de page SaaS).

**La règle : aucun compteur nulle part.** Ni vues, ni abonnés, ni « 12+ clients », ni « 100 % satisfaits », ni pourcentage de progression. La preuve du site passe par des choses vérifiables : trois Reels publics d'Isabelle Ageron-Vicat sur `/reseaux-sociaux`, quatre sites livrés dans le portfolio, quatre avis. Un lecteur peut cliquer et vérifier chacune.

Le chiffre existe toujours dans les notes internes (`création de contenue/ressources, data/15-CLIENTS/formatrice-ecriture/04-tableau-de-bord.md`) et il peut servir dans une conversation. Il ne se met plus sur une page.

> 🔴 **Un survivant, repéré le 16 septembre 2026 et pas encore tranché.**
> L'article `/blog/video-courte-entreprise-locale` est bâti sur ce chiffre :
> il est dans le `titleFr` de la première section, dans l'`excerptFr`, et
> surtout dans la **`seoDescFr`**, donc il s'affiche dans les résultats Google.
> C'est la même donnée qu'Elie a fait retirer de `/reseaux-sociaux`.
>
> Ce n'est pas corrigé parce que la décision lui appartient : réécrire la
> colonne vertébrale d'un article indexé n'est pas le même geste que supprimer
> une section de page de vente, et sa note préserve l'usage du chiffre « dans
> une conversation ». **Les deux lectures se défendent, il tranche.**

> ⚠️ **Une bande de quatre pastilles vivait aussi sur les quinze pages locales** : « 12+ clients accompagnés · 100 % Satisfaits · Avis 5 étoiles · Suivi personnalisé ». Retirée le 14 septembre. Deux des quatre ne reposaient sur rien, et les deux lignes juste au-dessus disaient déjà la même chose en vrai (le numéro direct, la réponse sous 48 h, le temps de trajet).

---

## Règles SEO absolues (à appliquer à chaque modification)

### 1. Titres de page (title tags)
- **Max 60 caractères** (idéalement 50-55)
- Format : `[Mot-clé principal] | Elie Ageron`
- Inclure le mot-clé de la page en premier
- Éviter la duplication entre pages

### 2. Meta descriptions
- **Max 160 caractères** (idéalement 150-155)
- Contenir le mot-clé principal + CTA implicite
- Unique par page, descriptive et engageante

### 3. Structure H1/H2/H3
- **1 seul H1 par page**, contenant le mot-clé principal
- H2 pour sections principales (avec mots-clés secondaires)
- H3 pour sous-sections
- Ne jamais sauter de niveau (H1 → H3 sans H2)

### 4. Données structurées JSON-LD
- Toujours utiliser `@id` pour relier les schemas entre eux
- Référencer `#person`, `#business`, `#organization` depuis les pages
- Sur chaque page de service → ajouter schema `Service` ou `Offer`
- Sur les articles de blog → schema `Article` avec `datePublished`, `dateModified`, `author`
- Sur les pages avec FAQ → toujours inclure `FAQPage` schema
- Sur les pages avec avis → `AggregateRating` ou `Review` schema

### 5. Images
- Tout `<img>` doit avoir un `alt` descriptif (pas juste "image")
- Format recommandé : WebP
- Lazy loading sur images below the fold
- Dimensions explicites (width/height) pour éviter Layout Shift (CLS)

### 6. Liens internes
- Chaque page doit avoir au minimum 3-5 liens internes vers d'autres pages du site
- Utiliser des anchor texts descriptifs (pas "cliquez ici")
- Vérifier `src/components/InternalLinks.tsx` pour cohérence

### 7. URL et canonical
- URLs en kebab-case, courtes, descriptives
- Canonical toujours défini dans `SEO.tsx`
- Pour bilinguisme : même URL, hreflang `fr` + `en` + `x-default`

### 8. Core Web Vitals
- **LCP** (Largest Contentful Paint) < 2.5s : preload les images hero
- **CLS** (Cumulative Layout Shift) < 0.1 : dimensions explicites sur images/iframes
- **FID/INP** < 200ms : éviter les scripts bloquants
- Fonts : toujours charger avec `media="print" onload="this.media='all'"` pattern

### 9. Email cohérence (CRITIQUE)
- Utiliser **UNIQUEMENT** `elie@elieageron.com` dans tous les schemas JSON-LD
- Ne jamais utiliser `elieageron@gmail.com` dans les schemas visibles par Google

### 10. Sitemap
- Mettre à jour `lastmod` dans `public/sitemap.xml` après chaque modification de page
- `changefreq` : home/blog/portfolio = weekly, autres = monthly, légal = yearly
- `priority` : home = 1.0, pricing/contact = 0.9, portfolio/why/process = 0.8, blog posts = 0.7

---

## Mots-clés cibles

### Primaires (FR)
- création site web Savoie
- web designer Savoie
- création site web Annecy
- web designer Annecy
- création site internet Haute-Savoie
- site web haute conversion
- landing page professionnelle France

### Primaires (EN)
- web designer France
- high conversion web design
- landing page design France
- web designer Annecy France

### Secondaires (FR)
- refonte site web professionnel
- tarif création site web
- agence web Annecy
- site vitrine PME
- optimisation taux de conversion

### Secondaires (EN)
- conversion rate optimization
- affordable web design France
- premium web designer Europe
- web design freelancer France

### Longue traîne prioritaire
- "combien coûte un site web professionnel"
- "web designer pas cher France"
- "création site web 500 euros"
- "délai création site web"

---

## SEO Local (Savoie / Haute-Savoie)

- **NAP / adresse réelle** : **Albertville** (73200), **Savoie**, FR-73, GPS lat 45.6756, lng 6.3925. C'est l'adresse à utiliser partout (mentions légales, schémas, Google Business). Elie a quitté la Haute-Savoie (Thônes/Annecy) pour la vallée d'Albertville.
- **Zone d'intervention** (areaServed, ≠ adresse) : Savoie + Haute-Savoie + bassin annécien + Rhône-Alpes + France entière + international. On garde Annecy et la Haute-Savoie comme cibles SEO (marché plus gros, servi sur place et à distance).
- **Pages locales** : `/web-designer-savoie` (Albertville/Savoie), `/web-designer-annecy`, `/creation-site-web-haute-savoie`. Le schéma LocalBusiness de ces pages utilise l'adresse réelle (Albertville) avec `areaServed` = la ville ciblée.
- Toujours inclure geo tags dans `index.html` et LocalBusiness schema.

---

## Responsive : les points vérifiés (13 septembre 2026)

Mesuré à 320, 375, 414, 768, 1024 et 1280 px sur 13 pages : **aucun débordement horizontal**.

Deux défauts corrigés ce jour-là :

1. **Les titres de hero étaient en paliers fixes.** À 320 px le titre de l'accueil passait à 40 px, prenait cinq lignes et poussait le bouton sous la ligne de flottaison. Ils sont maintenant en `clamp()` : `clamp(1.75rem, 7.5vw, 4.5rem)` sur l'accueil, `clamp(1.6rem, 6.5vw, 3.4rem)` sur `/audit-gratuit`. Mesure après correction à 320x720 : titre à 142 px du haut, bas du bouton à 525 px, **visible sans défiler**.
2. **Le menu horizontal apparaissait à 1024 px, la largeur exacte où il ne rentre plus.** « Réseaux sociaux » passait sur deux lignes et le header doublait de hauteur (114 px mesurés). Mesure à 1024 : logo 127 + menu 410 + bloc droit 390 = 927 px pour 1009 px utiles. Le point de rupture est passé à `xl` (1280 px), et les libellés portent `whitespace-nowrap`. Header à 62 px à 1280.

---

## Règles de mise en page (révisées le 13 septembre 2026)

> 🔴 **La section « bandes de section » qui vivait ici est morte.** Elle
> décrivait trois classes `band-paper`, `band-ink`, `band-brand` et des jetons
> `--ink`, `--pop`. Elie a rejeté la direction sombre en entier : *« le fond
> noir, c'est en oublié. Je déteste, c'est vraiment intelligence artificielle. »*
> Les classes et les jetons ont été retirés de `index.css`. Ne pas les
> réintroduire, et ne pas chercher à créer du rythme par des aplats de couleur.
> **Le rythme vient de l'espace et de la taille du texte.**

### La règle du titre, et c'est la plus importante

**On doit comprendre toute l'offre en ne lisant que les titres noirs.** C'est
ce que fait un visiteur qui descend vite, et c'est la seule chose que fait un
visiteur qui ne connaît pas Elie. Lus à la suite, les titres de l'accueil
racontent l'offre entière :

```
Vos réseaux tournent tout le mois sans que vous y pensiez
Un jour de tournage. Un mois de publications.
Deux comptes que je gère en ce moment.
Ils étaient à votre place. Ils ont accepté d'en parler.
Un projet à la fois. Le vôtre.
Si le site ne suit pas, je le refais.
La formule qu'il vous faut
Un seul interlocuteur pour tout le reste.
Ce qu'on me demande le plus souvent.
Je regarde votre présence en ligne. C'est gratuit.
```

Donc : **une idée par titre, jamais deux phrases imbriquées, jamais de
négation double.** Celui de la section réseaux disait *« Un compte laissé en
plan ne dit pas rien. Il dit quelque chose, et c'est faux. »* Personne ne lit
ça en survolant.

**Deux classes portent tous les titres du site**, définies dans `index.css`.
Avant, chaque section écrivait sa propre échelle et son propre poids, six
combinaisons différentes sur la même page, et sept pages recopiaient à la main
`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold`.

| Classe | Où | Taille | Noir | Rose |
|---|---|---|---|---|
| `.hero-title` | Le `h1` des onze pages qui ont un hero | `clamp(1.75rem, 7.5vw, 4.5rem)` | 500 | 400 |
| `.section-title` | Tous les `h2` de section | `clamp(1.875rem, 4.6vw, 3.25rem)` | 600 | 450 |

`.section-lede` accompagne pour le paragraphe qui suit. Le second membre du
titre est en `text-primary` : c'est la convention du site, et il est toujours
plus petit (`0.85em`) et un cran plus léger que le noir.

> 🔴 **Le hero est plus léger que le titre de section, et c'est voulu.** Elie,
> le 14 septembre : *« je trouve les titres des hero un peu trop gras, ça fait
> cheap. »* La graisse perçue monte avec la taille : un 600 qui tient à 52 px
> devient un pavé à 72 px. Une typo d'affichage se dégraisse quand elle
> grandit, c'est l'inverse du réflexe. Ne pas « harmoniser » les deux poids.
>
> 🔴 **General Sans n'est pas une police variable ici.** `index.html` charge
> quatre faces statiques (`@400,500,600,700`). Une valeur intermédiaire retombe
> sur la face la plus proche : `450` rend du 500, `550` rend du 600. **Le seul
> pas disponible est de 100.** Quand Elie dit « baisse légèrement », la réponse
> est un cran, pas une demi-mesure.

Une page qui a besoin d'un titre plus petit surcharge la seule `font-size`,
jamais la graisse. C'est le cas de `/audit-gratuit`, dont le hero partage sa
largeur avec le formulaire.

### Une seule fin de page, sur les quatorze pages

Chaque page se terminait par quatre à six blocs qui demandaient tous quelque
chose. Sur l'accueil : « Un projet à la fois », la FAQ, une seconde liste de
questions vers le blog, « Par où commencer ? » avec trois cases, « Continuer
votre exploration » avec trois autres cases, la section de contact avec quatre
cartes, le formulaire libre injecté par le gabarit, et un bandeau d'audit dans
le footer. Elie : *« il y a trop de cases, on croit que c'est une double FAQ,
on comprend rien. »*

**L'ordre retenu, identique partout : contenu, puis `InternalLinks`, puis
`ContactMethodsSection`.** Et rien après.

| Ce qui a été supprimé | Pourquoi |
|---|---|
| `StatsSection` | Titre sur la recherche Google, chiffres sur les délais de livraison. Aucun rapport entre les deux. Les chiffres sont passés sous les formules de site |
| `RoutingSection` | « Par où commencer ? » en fin de page. Une page qui demande ça à la fin n'a pas commencé |
| `HomeArticles` | Une seconde liste de questions sous la FAQ. Les articles sont maintenant accrochés aux réponses de la FAQ qu'ils développent |
| Le CTA final de `/services` et de `/reseaux-sociaux` | Doublon avec la section de contact, qui porte le formulaire |
| Le bandeau d'audit du `Footer` | Il arrivait à trois cents pixels du même formulaire |

**`GlobalContactForm` ne s'affiche plus que sur `/contact`.** Il était injecté
au bas des quatorze pages, sous un autre formulaire. Deux demandes de même
poids, donc aucune. Le lien « Décrivez-le moi » sous le formulaire d'audit
mène à `/contact` pour ceux qui ont déjà un projet précis.

**`ContactMethodsSection` porte maintenant le formulaire d'audit à deux
champs**, plus les canaux directs en texte à côté. C'étaient quatre cartes de
verre avec une pastille « recommandé » qui pulsait en boucle.

### Les éléments physiques

Le téléphone avec le mois programmé, les couvertures de vidéo, les badges
collés de travers : ils montrent le livrable au lieu de le décrire. C'est la
pièce qu'Elie préfère dans la page. Ils sont tous `aria-hidden="true"`.

**Ne pas transformer une liste éditoriale en grille de cartes.** Les cartes
sont la réponse paresseuse. Trois colonnes séparées par un filet disent la
même chose sans encadrer six fois le même vide.

---

## Les photos de publication

Les maquettes affichent de vraies couvertures de vidéo verticale : des gens
qui sourient dans leur métier. Elie : *« les gens adorent voir d'autres gens
sourire. »*

- Les fichiers vivent dans **`public/publications/`**, la liste et les titres
  dans `src/data/publications.ts`, le rendu dans `PostCover.tsx`.
- **Tant qu'un fichier n'existe pas, un dégradé tient la place** et la mise en
  page ne bouge pas. C'est ce qui permet de les ajouter une par une.
- Import : `node scripts/importer-publications.mjs <source> <nom>`. Recadre en
  4:5, redimensionne en 800 x 1000, encode en webp. Les générateurs sortent du
  JPEG de 3 Mo, soit 9 Mo pour une seule bande de trois.
- **Les prompts et les règles anti-IA sont dans
  [`docs/photos-de-publication.md`](docs/photos-de-publication.md).** Trois
  séries ont été nécessaires. Le réglage retenu est `objectif 50 mm, aucune
  déformation de bord` plus `vient de finir de répondre à une question,
  l'expression retombe`.

> 🔴 **Le réalisme vient de la lumière, du cadrage et du visage. Jamais du
> décor.** La consigne `arrière-plan en désordre, rien n'est rangé` a été
> écartée : le modèle comprend crasse, et on s'est retrouvé avec une coiffeuse
> sous des câbles au plafond et un plombier couvert de cambouis. Personne ne
> veut voir son métier montré en taudis, surtout pas le client qui va payer
> 890 € par mois. **Le lieu est normal, bien tenu et en activité.** Le seul
> désordre autorisé est celui du travail en cours.

> ⚠️ **Ce sont des illustrations du service, pas des clients.** La légende de
> `PublicationsStrip` le dit en clair. La preuve client vit dans
> `SocialClientsSection`, avec des liens vérifiables.

### Où elles vivent, et pourquoi c'est court

| Emplacement | Contenu |
|---|---|
| Le téléphone de l'accueil | **Une seule** couverture, la coiffeuse |
| `/reseaux-sociaux`, après les trois étapes | Une bande de trois, sous le titre « À quoi ressemble une vidéo à la sortie » |

> 🔴 **Une bande de trois avait été posée sur l'accueil, et retirée le jour
> même.** Elie : *« tu placardes les images de gens qui sourient alors qu'on ne
> sait pas ce que ça apporte, on ne sait pas pourquoi elles sont là. On n'essaie
> pas de les placarder à tout prix, on se tient discret. »*
>
> **La règle : une photo se pose sous un titre qui dit pourquoi elle est là,
> ou elle ne se pose pas.** Celle du téléphone est à sa place parce qu'elle
> montre le livrable dans son contexte. Celle de `/reseaux-sociaux` répond à la
> question que la liste d'étapes vient de poser.

> ⚠️ **Ne jamais afficher une entrée dont le fichier manque.** Le dégradé de
> repli passait tant qu'aucune image n'existait ; à côté de trois vraies
> photos, la case rose se lit comme une image cassée. `plomberie` et
> `boulangerie` attendent leur fichier.

---

## La preuve du pilier n°1 : les comptes gérés

`SocialClientsSection.tsx`, entre l'offre réseaux et les sites. L'accueil
passait de « je gère vos réseaux » à « quelques sites que j'ai créés
récemment » sans transition : la preuve du pilier n°1 manquait alors qu'elle
est publique.

Deux comptes affichés, avec leur métier, leur commune et leurs liens :
**Nouït** (médium et praticienne en soins énergétiques, Albertville, Instagram
et Facebook) et **Isabelle Ageron-Vicat** (formatrice en rééducation de
l'écriture, Albertville).

> ⚠️ **Aucun chiffre ici.** Ni vues, ni abonnés, ni progression. Un compteur
> au-dessus d'un nom se lit comme une promesse, et Elie ne vend pas là-dessus.
>
> ⚠️ **Toute ligne ajoutée demande l'accord du client concerné.** Ce ne sont
> pas des logos, ce sont des personnes nommées avec leur métier. La fiche
> `formatrice-ecriture` notait qu'elle n'était pas nommable ; Elie a demandé
> lui-même de l'afficher le 13 septembre 2026.
>
> 🔴 **Les comptes Instagram et Facebook d'Isabelle ne sont pas liés**, faute
> d'avoir les identifiants exacts. Son site fait le lien en attendant.

---

## Les huit tendances des retours d'Elie

> Elie, le 13 septembre 2026 : *« il y a quand même des tendances que tu peux
> repérer. »* Les voici, tirées de six retours successifs sur la même journée.
> **Les appliquer avant qu'il ait à les redemander.**

| # | Ce qu'il dit à chaque fois | Ce que ça veut dire dans le code |
|---|---|---|
| 1 | « le titre est trop long, on comprend pas ce qu'il dit » | Une idée par titre, jamais deux phrases imbriquées, jamais de double négation. Et un accent rose : un titre entièrement noir ne se lit pas en survol |
| 2 | « c'est du petit texte, on a du mal à voir », « les icônes sont tout petits » | Pas de `text-[15px]`, pas de `text-sm` sur du contenu, pas de `text-foreground/85`. Les numéros d'étape sont des repères : `text-5xl` minimum. Une icône décorative de 12 px ne sert à rien, elle se supprime |
| 3 | « il y a trop de cases, on comprend rien » | Listes éditoriales séparées par un filet. Une grille de cartes se justifie seulement quand on compare vraiment. Un formulaire garde son panneau, c'est son affordance |
| 4 | « c'est trop proche de la section d'après » | Un `py-20 sm:py-28` par section au minimum, et un `pb` supplémentaire quand un bloc dense finit la section |
| 5 | « ça n'a pas changé sur les autres pages », « il faut que ce soit pareil partout » | Une correction faite sur l'accueil se propage le jour même. Même ordre de fin de page, même échelle de titre, même traitement de liste, sur les quatorze pages |
| 6 | « ça, c'est faux » | Aucune affirmation invérifiable. « Un projet à la fois » a sauté parce qu'il fait plusieurs projets. Un argument vrai et petit bat un argument gros et faux |
| 7 | « c'est vraiment intelligence artificielle » | Pas de fond sombre, pas de jaune, pas de dégradé décoratif, pas de pastille à paillettes, pas de badge qui pulse, pas de halo flou posé derrière une section |
| 8 | « on ne sait pas pourquoi c'est là » | Chaque bloc répond à une question que la page vient de poser. Une image, une bande, un encart sans titre au-dessus n'a pas sa place |

> **Le test de survol.** Descendre la page sans lire un seul paragraphe. Si les
> titres noirs seuls ne racontent pas l'offre entière, la page n'est pas finie.

---

## Relecture aveugle du 14 septembre 2026 : cinq profils, et ce qu'ils ont cassé

Cinq lecteurs, sur le texte réel des deux pages principales : un plombier
d'Albertville, un ébéniste sceptique, un visiteur sans contexte, une thérapeute
qui compare trois devis, une boulangère qui ne cherche rien.

### Les autogoals qu'ils ont trouvés, et qui sont corrigés

| Ce qui était écrit | Pourquoi c'était grave |
|---|---|
| « beaucoup de vues, et aucune page pour recevoir les gens » | La seule preuve chiffrée du site était présentée comme n'ayant rapporté aucun client. Relevé par deux profils sur deux |
| « vous pouvez tout appliquer sans jamais me contacter » | Dernière phrase avant le seul formulaire. Elle donnait la permission de partir au moment de convertir |
| « vous apparaissez devant vos concurrents locaux » | Promesse de classement Google, indéfendable, et le lecteur informé le sait |
| « 4 avis, tous vérifiables » | Un des quatre n'a pas de nom d'entreprise. Une affirmation fausse dans un bloc d'avis coûte plus cher que pas d'affirmation |
| « Vous n'ouvrez jamais l'application » | Faux dès qu'un client envoie un message privé. La thérapeute : « pour un cabinet, c'est la question numéro un » |
| « Votre lancement digital complet [...] démarrer fort » | Langue d'agence, exactement ce que le reste du site évite |
| Pastille « Deux champs » sous le hero | Jargon interne : personne n'a encore vu le formulaire |

### Les trois règles qui en sortent

1. **Le formulaire ne vit pas qu'en bas.** Il était en onzième position sur
   onze. Un second exemplaire (`AuditInline`) tombe juste après le prix
   plancher, au sommet de l'intérêt. Impact estimé par la relecture : entre
   20 et 40 % de formulaires vus en plus.
2. **Aucune sortie dans un bloc de conversion.** Pas de lien blog, pas de
   « à voir aussi », pas de canal alternatif à l'intérieur du bloc qui porte le
   formulaire. L'accueil offrait dix-neuf propositions cliquables différentes,
   dont sept faisaient quitter la page.
3. **Une phrase honnête qui détruit la preuve n'est pas de l'honnêteté, c'est
   du sabotage.** L'honnêteté du site vit dans les trois interdits de l'audit,
   qui sont des engagements tenables. Pas dans un aveu qui annule le seul
   résultat affiché.

### 🔴 Ce qui reste ouvert, et qui n'est pas décidable sans Elie

- **Le champ téléphone.** Les cinq profils le désignent comme la friction
  numéro un, estimée à 30 à 50 % de remplissages en moins face à un champ
  libre. L'argument qui compte : la perte n'est pas répartie au hasard, elle
  enlève les curieux et les pas-encore-prêts, soit exactement le haut du tunnel
  que l'aimant existe pour attraper. **Elie a tranché en connaissance de cause
  le 14 septembre.** Ne pas revenir dessus sans lui, mais c'est le premier
  endroit à regarder si les demandes ne viennent pas.
- **Deux des trois preuves nommées portent le nom Ageron** (un avis, et la
  cliente de la page réseaux). Deux relecteurs sur cinq l'ont vu en quinze
  secondes, et ça requalifie la preuve en avis de famille.
- **Aucun des quatre avis ne parle des réseaux sociaux**, le pilier n°1, et
  aucun n'est artisan ni commerçant. Le titre « Ils étaient à votre place » est
  donc faux pour la moitié de la clientèle visée.
- **Quatre pages héritées sont indexées et liées, dans l'ancien langage
  visuel** : `/why-a-website` et `/our-process` (les deux dans le pied de page
  et dans `InternalLinks`), `/get-started` et `/assessment`. Elles portent des
  cartes de verre, des bordures néon, des pastilles « Recommandé », des halos
  flous et des survols qui agrandissent, soit exactement ce qu'Elie appelle
  *« vraiment intelligence artificielle »*. Le reste du site a été refait, pas
  elles. **Trois issues possibles, et c'est son choix** : les refaire au niveau
  du reste, les sortir du sitemap et du pied de page en gardant l'URL, ou les
  rediriger en 301 comme `/pricing` et `/event-production`.
- **Deux destinations pour la même intention.** « Décrire mon projet » mène à
  `/get-started` (brief en quatre étapes) depuis `/services`, `/portfolio`,
  `/blog` et les formules de site, et à `/contact` (message libre) depuis le
  formulaire d'audit. `/contact` renvoie lui-même vers `/get-started` dans une
  carte marquée « Recommandé ». Les deux chemins fonctionnent, donc ce n'est pas
  un bug, mais un seul devrait exister.

---

## La campagne SEO du 16 septembre 2026

> Elie ce soir-là : *« bosse le SEO au max. on doit remonter haut en recherche
> et pop dans les résultats. »* Puis, chiffré : *« dans 1 mois je veux voir des
> milliers d'impressions, un bon CTR et remonter, plus être à la deuxième
> page. »* Et enfin : *« quelqu'un cherche mon service, je sors et dans les
> premiers. »*

### Le point de départ, mesuré

Search Console, 3 février au 16 septembre 2026 : **49 clics, 2 080 impressions,
2,4 % de CTR, position moyenne 15,2.** La courbe est plate de février à début
juillet, puis décolle à partir du 10 août.

Deux lectures qui comptent. Le CTR de 2,4 % en position 15 est **plus du double
de la normale** à cette position : les balises font leur travail, le problème
est le classement. Et la position moyenne couvre la période où les 179 URL
servaient le même HTML avec un canonical pointant sur l'accueil, réparé
seulement le 13 septembre.

### Performance : ce qui a été mesuré, et corrigé

Mesures dans un vrai Chrome, téléphone 390 px, 4G lente, processeur ralenti
quatre fois. **Jamais en fibre sur un portable de développeur : ça donne du
vert qui ne veut rien dire.**

| | Avant | Après |
|---|---|---|
| JS pour lire un article | 594 ko | 52 ko compressés |
| LCP d'un article | 7 220 ms | 1 820 ms |
| LCP `/reseaux-sociaux` en production | 6 232 ms | 3 304 ms |
| Fil principal bloqué, production | 1 933 ms | 432 ms |
| CLS de l'accueil | 0,138 | 0 |

Trois causes, toutes documentées dans le code :

1. **`blogPosts.ts` pesait 1,1 Mo** et partait sur 150 des 185 pages. Découpé :
   `blogIndex` porte les métadonnées, `blogContent` charge à la demande le seul
   fichier qui contient l'article demandé. 25 lots au lieu d'un.
2. **Le CLS venait de la police du squelette de pré-rendu.** Les liens
   grandissaient à 2 179 ms quand General Sans finissait de charger. Le
   squelette est passé en police système et hors flux.
3. **776 ko de Three.js pour des points roses.** Remplacé par `HeroDots` en CSS.
   Les pastilles flottantes disaient encore « SEO », « Design » et « Web ».

> 🔴 **`npx tsc --noEmit` ne vérifiait rien.** Le `tsconfig.json` racine a
> `"files": []` et ne fait que référencer les sous-projets. C'est ce qui a
> laissé passer un bug d'apostrophe qui n'a explosé qu'au build. **La commande
> qui contrôle vraiment est `npm run check:types`**, branchée dans `npm run
> check`. Ne jamais revenir au `tsc --noEmit` nu.

### Ce qui a été construit pour les impressions

Une impression suppose une page qui vise une requête. Le site en avait trop peu.

| Famille | Avant | Après |
|---|---|---|
| Pages locales réseaux sociaux | 0 | 10 |
| Pages de service dédiées | 2 sur 7 | 7 sur 7 |
| Articles | 139 | 142 |
| Articles orphelins | 25 | 0 |
| Articles sans lien sortant | 19 | 9 |

Les trois articles créés visent des requêtes qui n'avaient **aucune** page :
`devenir-viral-entreprise-locale`, `shadowban-instagram-realite`,
`publicite-instagram-facebook-tpe`.

> ⚠️ **La règle de cannibalisation, trouvée deux fois dans la même soirée par
> `check:tags`.** Une page pilier et une page locale ne peuvent pas porter le
> même titre, ni une page de service et une catégorie de blog. **La page qui
> vend porte la requête commerciale, la page qui explique porte la requête
> informationnelle.** Les deux se renvoient l'une à l'autre.

### Le plafond, et il n'est pas dans le code

**3 liens externes.** Search Console, rapport Liens. Aucune quantité de travail
on-site ne compense ça.

Et au 16 septembre, Elie n'avait **aucun de ses propres comptes sur son site** :
ni Instagram, ni TikTok, ni YouTube, seulement LinkedIn et les comptes de ses
clientes. Sa fiche Google Business n'était déclarée nulle part non plus. La
fiche est maintenant branchée (`sameAs`, `hasMap`, lien visible en pied de
page, CID 10223724609164966776). **Les comptes restent à créer**, et la
décision a été prise ce soir-là : Instagram neuf, LinkedIn le profil existant,
Facebook une Page.

### Trois nouveaux contrôles

| Commande | Ce qu'elle mesure |
|---|---|
| `npm run check:types` | Le vrai contrôle TypeScript, sur `tsconfig.app.json` |
| `npm run check:vitals` | LCP, CLS, TBT et TTFB, téléphone bridé. `--prod`, `--build`, `--port=`, `--sans-tiers` |
| `node scripts/diagnostic-page.mjs` | Quel élément décale la mise en page, et quand |
| `node scripts/check-maillage.mjs` | Orphelins, culs-de-sac, ancres pauvres, pages les plus liées |
| `node scripts/suggerer-liens.mjs` | Des parents possibles pour un article orphelin |

> ⚠️ **Les motifs qui lisent les données au regex doivent tolérer le CRLF.**
> Git réécrit les fins de ligne à chaque aller-retour sous Windows, et `$` en
> mode multiligne ne matche que devant le saut de ligne. `generate-llms.mjs`
> avait déjà perdu les dix pages locales réseaux **sans rien signaler**.
> Écrire `',\s*$` et jamais `',$`.

### La passe CTR sur les 142 balises d'articles (16 septembre 2026)

> Elie : *« faire en sorte que, une fois que les gens me verront, ils cliquent
> dessus, avec un texte qui donne envie. »*

**Le point de départ, mesuré avant d'écrire une ligne.** Sur les 142 articles :
66 titres et 78 descriptions étaient bâtis en « Sujet, deux points,
énumération ». **6 titres contenaient un chiffre. Un seul contenait un lieu.**
Et 17 balises héritées portaient `| Elie Ageron` en dur, ce qui leur mangeait
14 des 60 caractères disponibles alors que `withBrand()` dans `blogIndex.ts`
ajoute déjà ce suffixe quand il rentre.

Un CTR de 2,4 % en position 15 est **plus du double de la normale** à cette
position : les balises n'étaient pas mauvaises, elles étaient interchangeables.

#### La règle, et elle tient en une phrase

**Le titre ne répète pas la question du visiteur, il donne la réponse.**

| Avant | Après |
|---|---|
| Combien Coûte un Site Web ? | 500 à 3 500 € en 2026 |
| Combien de Temps pour Être Référencé | 3 à 6 mois pour ressortir |
| Prix de la Gestion des Réseaux Sociaux | 200 à 1 500 €/mois |
| Apparaître sur Google Maps | Ma fiche n'apparaît pas, 6 causes |
| Mon Site ne Génère Aucun Contact | Regardez d'abord vos visites |

> 🔴 **Aucun chiffre n'a été inventé.** Chacun vient de la FAQ de l'article
> concerné ou du plancher public de `CLAUDE.md`. Le script
> `faits.mjs` (scratchpad) sortait les deux premières réponses de FAQ de chaque
> article avant d'écrire sa balise. C'est la seule façon de tenir la règle n°6
> d'Elie, *« ça, c'est faux »*, sur un lot de cette taille.

#### Les neuf métiers qui disaient tous la même chose

Neuf titres commençaient par **« [Métier] : Trouver des Clients »** ou
« [Métier] : Se Rendre Visible ». Dans une page de résultats ils sont
indistinguables entre eux, et surtout indistinguables de n'importe quel blog
d'agence. Chacun porte maintenant la chose vraie de ce métier là, celle qui
était déjà dans l'article : *le portail de votre réseau vend le réseau*,
*ce sont les parents qui comparent*, *visible avant la saison, pas pendant*,
*celui qui décroche gagne*.

#### 🔴 La régression que la mesure a attrapée

Après les huit premiers lots, un nouveau comptage a montré **136 titres à deux
points sur 142**, contre 66 au départ. Le contenu était meilleur et la forme
était devenue une formule, soit exactement le défaut que ce chantier devait
corriger. Soixante titres sont repassés en phrase simple ou en incise.

**La leçon : remesurer la chose qu'on prétendait corriger, après l'avoir
corrigée.** Une amélioration au cas par cas peut dégrader la distribution
d'ensemble, et rien ne le signale.

Répartition finale sur 142 : 76 à deux points, 47 en phrase simple, 19 en
incise. Le mot de la requête reste en tête de chaque titre.

| | Avant | Après |
|---|---|---|
| Titres portant un chiffre | 6 | 32 |
| Titres à deux points | 66 | 76 |
| Titres gâchant 14 signes sur la marque | 17 | 0 |
| Descriptions en énumération à deux points | 78 | 16 |

#### Deux choses trouvées en route

1. **Une balise annonçait encore 2025** dans une page de résultats de 2026, sur
   l'article le plus ancien du corpus. Son titre porte maintenant la thèse
   réelle de l'article, qui ne périme pas. Le slug `pourquoi-site-web-2025`
   garde l'année : le changer imposerait une redirection 301, **c'est la
   décision d'Elie.**
2. **Les 56 619 vues sont sorties de la balise Google** de
   `/blog/video-courte-entreprise-locale`. C'est le chiffre exact qu'Elie avait
   fait retirer de `/reseaux-sociaux`. Le corps de l'article et son `excerptFr`
   le gardent : réécrire la colonne vertébrale d'un article indexé n'est pas le
   même geste, **et ça reste son choix.**

> ⚠️ **Le suffixe de marque ne se remet pas en dur dans une `seoTitleFr`.**
> `withBrand()` l'ajoute automatiquement quand le titre fait 46 caractères ou
> moins, et le saute sinon. Un titre qui porte une réponse vaut mieux qu'un
> titre qui porte un nom que personne ne cherche encore.

### Ce qui reste à faire, par ordre de valeur

1. **Le fil principal reste bloqué 1,7 s sur l'accueil**, pour 312 ko de
   JavaScript. La mesure varie trop d'un passage à l'autre pour attribuer la
   part de chacun. Google Tag Manager pèse 192 ko transférés.
2. **Les 42 ancres de lien trop génériques**, dont environ 25 « écrivez moi »
   vers `/contact`. Défendable pour un appel à l'action, discutable en volume.
3. **Les quatre pages héritées**, toujours pas tranchées par Elie.

---

## Contrôles automatiques avant de livrer

Une seule commande : `npm run check`. Elle enchaîne les quatre.

| Commande | Ce qu'elle vérifie |
|---|---|
| `npm run check:types` | **Le vrai contrôle TypeScript.** `npx tsc --noEmit` ne vérifie rien : le tsconfig racine a `"files": []` |
| `npm run check:content` | Articles, villes, guides, les six pages locales réseaux, et les 108 liens internes pointent quelque part |
| `npm run check:tags` | Les 196 titles et descriptions : longueur, doublons, absences. Lit les mêmes sources que le pré-rendu, donc ce qu'elle mesure est ce que Google reçoit |
| `npm run check:writing` | Les marqueurs d'écriture automatique : tirets cadratins, guillemets courbes, tournures IA, listes à en-tête gras, Title Case dans les titres de corps |
| `npm run check:build` | **Le HTML réellement produit**, pas les sources. Ouvre les 197 fichiers de `dist/` : un seul title, une seule description, un canonical qui pointe sur la page, un seul h1, au moins 10 liens internes, JSON-LD valide, aucun doublon |
| `npm run verify` | Build, pré-rendu, puis les quatre contrôles d'affilée. **C'est la commande à lancer avant de livrer.** |
| `npm run check:a11y` | **axe-core en WCAG 2.1 AA**, 13 pages en 1440 px et 5 en 375 px, dans un vrai Chrome. Demande le serveur de dev allumé |
| `npm run check:overflow` | Le débordement horizontal, 9 pages sur 7 largeurs de 320 à 1440 px. Demande le serveur de dev allumé |
| `npm run check:navigateur` | Les deux d'un coup |
| `npm run captures [/route] [--mobile]` | Écrit les captures de relecture dans `.captures/`, une par tranche d'écran. Le volet navigateur de l'éditeur rend à 800 px : on ne peut pas y juger une page dessinée pour 1440 |

> ⚠️ **`check:build` est le seul qui aurait attrapé le bug des 179 URL servant l'accueil.** Les autres lisent les données et disaient que tout allait bien. Ne jamais le retirer de `verify`.

> ⚠️ **`check:a11y` et `check:overflow` ne sont pas dans `verify`** : ils ont
> besoin d'un serveur de dev qui tourne, et `verify` sert au moment du build.
> Les lancer à la main après toute refonte visuelle. La campagne du 13 septembre
> 2026 a trouvé huit violations réelles, dont trois qui dataient d'avant.

> ⚠️ **`check:writing` ne regarde pas `seoTitleFr` ni `seoTitle`.** Le Title Case y est la convention du site depuis l'origine, décidée après audit. Ne pas la « corriger ».

> ⚠️ **Une tournure citée n'est pas une tournure employée.** Le corpus donne souvent ces formules en contre-exemple. Le contrôle ignore celles qui suivent un guillemet ouvrant. Si vous ajoutez une tournure à la liste, vérifiez qu'elle ne se déclenche pas sur ses propres contre-exemples.

---

## Relecture par profil : ce que le site ne disait pas

Simulée le 13 septembre 2026 sur trois profils (restaurateur, plombier, visiteur sans contexte). Un défaut dominait les trois.

**Les mots « artisan », « commerçant », « restaurant », « thérapeute », « plombier » n'apparaissaient nulle part** sur l'accueil, ni sur `/reseaux-sociaux`, ni sur `/services`, ni sur `/audit-gratuit`. Le site disait très bien **ce qu'Elie fait**, et jamais **pour qui**. Un plombier d'Albertville lisait la page entière sans croiser un mot qui le décrive.

Corrigé en une phrase par page, sans grille de cartes :

- Accueil et `/reseaux-sociaux` : « Je travaille avec des artisans, des restaurateurs, des thérapeutes et des formateurs, entre Albertville, Chambéry et Annecy. Plus votre métier se voit, plus il est facile à filmer. »
- `/services` : la même idée, en fin de chapô.
- `/audit-gratuit` : une question de FAQ, « Ça marche pour mon métier ? », qui répond que l'audit ne dépend pas du métier.

> ⚠️ **Le manque de fond n'est pas corrigé, et il ne peut pas l'être par le texte.** Le portfolio montre Naura (courtage), Solar Fusion (solaire), MyWebGlory et Virtual Producers (deux agences américaines). **Aucun artisan, aucun commerce, aucun thérapeute.** Un restaurateur ne se projette dans aucune des réalisations affichées. C'est le premier trou à combler quand un client du bon profil sera livré.

---

## Accessibilité : l'état réel (13 septembre 2026)

Audit **axe-core 4.10 en WCAG 2.1 AA**, 13 pages en 1440 px et 5 en 375 px :
**zéro violation**. Il est désormais automatisé, `npm run check:a11y`.

Trois choses corrigées lors de la refonte visuelle du soir, à ne pas défaire :

1. **Le carrousel d'avis porte `tabIndex={0}`, `role="region"` et un
   `aria-label`.** Une zone qui défile sans être atteignable au clavier rend
   son contenu inaccessible à qui n'a pas de souris. Règle
   `scrollable-region-focusable`, gravité serious. Il était comme ça depuis
   l'origine.
2. **Aucune opacité sur `text-primary`.** Le `text-primary/70` des compteurs de
   catégorie tombait sous 4,5:1 sur cinq pages. Même famille que la règle
   existante sur `text-muted-foreground` : **aucune opacité sur du texte
   coloré, jamais.**
3. **Une animation d'apparition ne s'intercale jamais entre un `<ul>` et ses
   `<li>`.** Le `ScrollReveal` va dans le `<li>`. Un div intercalé casse la
   liste pour un lecteur d'écran, qui n'annonce plus ni le nombre d'éléments ni
   leur rang. Règles `list` et `listitem`.

Et les trois du matin, qu'il ne faut pas défaire non plus :

1. **`CalendlyPopup` porte `inert` quand il est fermé.** Avant, `aria-hidden` le masquait aux lecteurs d'écran mais laissait le bouton de fermeture et l'iframe dans l'ordre de tabulation : un visiteur au clavier tabulait dans des commandes invisibles, **sur chaque page**. Règle axe `aria-hidden-focus`, gravité serious.
2. **Les notes en étoiles portent `role="img"`.** `aria-label` sur un `div` sans rôle est ignoré, et les étoiles étant `aria-hidden`, la note n'était annoncée à personne.
3. **Un lien d'évitement** en tête de `Layout.tsx`, plus `id="contenu"` et `tabIndex={-1}` sur `<main>`. Sans lui, un visiteur au clavier traversait neuf entrées de menu, le sélecteur de langue et deux boutons avant d'atteindre le contenu. Le saut est fait en JavaScript : un simple `href="#contenu"` ne déplaçait pas le focus, le routeur interceptant la navigation.

Plus un **anneau de focus global** dans `index.css` sur `a, button, [role=button], summary`. Les composants `Button` et `Input` avaient le leur, les liens et boutons écrits à la main n'avaient que le contour par défaut du navigateur, peu visible sur ce fond clair.

> Les liens en pleine phrase (téléphone, email, politique de confidentialité) font moins de 24 px de haut. C'est l'exception prévue par WCAG 2.5.8, pas une infraction.

---

## Règles d'accessibilité (vérifiées août 2026)

1. **`--muted-foreground` est à `30 5% 38%`**, pas 45%. À 45% le texte secondaire tombait à 4,13:1, sous le seuil WCAG AA de 4,5:1.
2. **Ne jamais appliquer d'opacité à `text-muted-foreground` sur du texte** (`/60`, `/70`, `/80`). Toute transparence le repasse sous 4,5:1. Les icônes peuvent garder une opacité (seuil 3:1).
3. **Cibles tactiles ≥ 24px** (WCAG 2.5.8) sur tout lien ou bouton autonome. Les liens en pleine phrase bénéficient de l'exception.
4. **Les maquettes décoratives** (`ServiceMockups.tsx`, `ServiceHeroMorph.tsx`) sont `aria-hidden="true"` : elles représentent des sites fictifs et ne doivent pas être lues ni évaluées en contraste.

## Règles de rédaction (skill humanizer)

Le contenu du site est passé au filtre "signes d'écriture IA". À maintenir :
- **Aucun tiret cadratin ni demi-cadratin** (— –) nulle part.
- Pas de titres en Title Case en français dans le **corps** des contenus (H2, H3, titres d'articles, titres de sections), pas de gras décoratif, pas de listes à en-tête gras.
  > Exception assumée : les balises `seoTitleFr` et les `seoTitle` de guides utilisent le Title Case depuis l'origine, sur tout le corpus. C'est la convention du site, décidée en août 2026 après audit. Ne pas la « corriger » : réécrire les balises title de toutes les pages indexées d'un coup est un risque SEO sans bénéfice mesurable.
- Pas de règle de trois systématique, pas de "il est important de", "dans un monde où", "chaque détail compte".
- Ton : première personne, phrases de longueurs variées, détails concrets et vérifiables (villes, chiffres, délais).

## Clients référencés : ce qu'on a le droit d'afficher

> **13 septembre 2026 : MyDrop a été retiré de tout le site.** Elie n'a pas réalisé ce site. Retiré du hero, du portfolio (accueil et page), des témoignages, du schéma `Review` (le compte agrégé passe de 5 à 4 avis), de `llms.txt` et `llms-full.txt`, et les deux fichiers d'image ont été supprimés. **Ne pas le réintroduire.**

Les quatre clients affichables : **Naura Conseils Finance**, **Solar Fusion**, **MyWebGlory**, **Virtual Producers** (anciennement VM Producers).

> ⚠️ **VM Producers s'appelle maintenant Virtual Producers** sur son propre site. Le nom, le logo et l'attribution du témoignage d'Austin Talley ne sont pas encore à jour sur elieageron.com. À trancher avec Elie avant de modifier : ça touche l'attribution d'un avis.

---

## Bugs SEO connus à surveiller

1. **Email inconsistance** : `JsonLd.tsx` et `OrganizationSchema.tsx` utilisaient `elieageron@gmail.com` → corrigé vers `elie@elieageron.com`
2. **FAQSchema home** : corrigé. La home émet bien un `FAQPage`, vérifié après pré-rendu. `/services` en a reçu un aussi en août 2026.
2 ter. 🔴 **Une FAQPage invisible sur `/why-a-website`, corrigée le 14 septembre 2026.** Cette page affiche `FAQAccordion`, donc les questions de l'accueil, et envoyait à Google **huit questions complètement différentes** que personne ne pouvait voir à l'écran. C'est une infraction directe aux règles de Google sur les FAQ, et le motif d'exclusion est une action manuelle, pas un simple non-affichage. Les questions invisibles promettaient en plus « une garantie satisfaction 100 % », « 40 % de leads en plus dès le premier mois », « 81 % des consommateurs » et « des fondations SEO élites », le tout au pluriel (« nos clients », « nous travaillerons ») sur un site écrit à la première personne du singulier. Le composant ne supporte plus que `page="home"`, et son contenu vient de `src/data/faq.ts`, la même source que l'accordéon affiché. **Ne jamais recopier une question dans un schéma : ce qui est balisé doit être ce qui est affiché.** Le jeu `pricing`, mort depuis le retrait de la page Tarifs, est parti avec.
2 bis. **`seoData` doit couvrir les deux langues.** Les clefs `guides` et `about` n'existaient qu'en anglais : `SEO.tsx` lisait `data.title` sur `undefined`, l'ErrorBoundary prenait la main, et `/a-propos` comme `/guides` affichaient « Erreur de rendu » à tous les visiteurs français. Corrigé, plus un repli dans le composant. **Toute nouvelle valeur de `page` doit être ajoutée dans `pageKeywords` ET `seoData`, en `fr` et en `en`.**
3. **Schemas dupliqués** : Person et LocalBusiness définis à la fois dans `index.html` (statique) et dans les composants React → normal, le statique sert de fallback pour les crawlers sans JS
5. **Une seule entité entreprise** : tous les schémas d'entreprise partagent l'`@id` `https://elieageron.com/#business`. Avant août 2026, quatre entités concurrentes (`#business`, `#service`, `#organization`, `#localbusiness`) déclaraient chacune la même note : Google y voyait quatre entreprises notées 5/5.
6. **`aggregateRating` et `review` vivent uniquement dans `ReviewSchema.tsx`.** Ne pas les redéclarer ailleurs.
7. **Un seul `BreadcrumbList` par page** : émis par chaque page via `SEO structuredData`. `Breadcrumb.tsx` ne rend que le fil visuel, et `JsonLd.tsx` n'en émet plus.
4. **hreflang** : le site sert FR/EN sur la même URL → `x-default` + les deux hreflang doivent pointer vers la même URL

---

## Architecture de contenu (refonte SEO, août 2026)

### Hub and spoke : 4 pages piliers + 139 articles
Source unique : `src/data/guides.ts`. Chaque guide est un hub long, découpé en chapitres, qui renvoie vers ses articles satellites. Les articles remontent vers leur pilier via leur champ `pillar`.

- `/guides/reseaux-sociaux-entreprise-locale` (11 chapitres) — pilier 1
- `/guides/video-smartphone-entreprise` (8 chapitres) — production au smartphone
- `/guides/visibilite-google-locale` (8 chapitres) — fiche Google, avis, pages villes
- `/guides/creer-site-web-tpe` (10 chapitres) — création de site, le front n°1
- `/guides` — index, lié depuis le header, le footer et le blog

### Blog : 142 articles, 6 catégories indexées
- Articles pré-août 2026 : bilingues, dans `src/data/blogPosts.ts` (`legacyPosts`)
- Articles depuis août 2026 : **français uniquement** (`frOnly: true`), répartis dans `src/data/blog/posts-*.ts`
- Types et catégories : `src/data/blog/types.ts`
- `frOnly` masque l'article des listes anglaises, et `SEO forceLang` garde `<html lang="fr">` sur ces pages
- Catégories : `/blog/categorie/:slug` — cibles SEO à part entière, chacune renvoie vers son guide pilier
- Chaque article porte : `categorySlug`, `tags`, `related`, `pillar`, `faqFr` (rendu + schéma FAQPage)
- `getRelatedPosts()` respecte d'abord `related`, puis complète par catégorie et tags partagés

> 🔴 **Les dix-sept articles hérités n'avaient rien de tout ça, et ça a duré
> jusqu'au 16 septembre 2026.** Ni `pillar`, ni `tags`, ni `related`, ni
> `faqFr` : aucune autorité ne remontait vers un guide, ils étaient absents du
> calcul des articles voisins, et ils n'émettaient aucun schéma FAQPage.
>
> Ce sont pourtant eux qui portent les requêtes les plus cherchées du pilier
> réseaux : l'algorithme, l'absence de vues, les idées de contenu, combien
> publier, déléguer. Dix des dix-sept.
>
> **Le corpus est maintenant complet : 139 articles sur 139 ont un pilier et
> une FAQ balisée.** La catégorie réseaux sociaux passe de 21 à 29 articles, le
> pilier réseaux de 35 à 44. Un article ajouté sans ces cinq champs retombe
> dans le même trou : le type ne les rend pas obligatoires, seule la relecture
> les attrape.

### Pages locales : 15 villes
Source : `src/data/cities/`. Chaque page porte un `depthFr` avec contexte économique réel, secteurs, communes desservies, temps de trajet depuis Albertville, blocs éditoriaux, angle réseaux sociaux et FAQ propre.

Albertville, Chambéry, Aix-les-Bains, Ugine, Moûtiers, Bourg-Saint-Maurice, Saint-Jean-de-Maurienne, La Ravoire, Annecy, Savoie, Haute-Savoie, Cluses, Thonon-les-Bains, Sallanches, Rumilly.

Chaque page porte aussi un `depthFr.articles` : six articles du blog choisis pour le tissu économique du bassin. Les slugs sont validés par `check:content`.

> Une page locale sans contenu spécifique ne sert à rien et peut desservir. Ne jamais dupliquer une page en changeant seulement le nom de la commune.

### Page À propos (`/a-propos`)
Signal E-E-A-T principal. `AuthorCard.tsx` est affiché en bas de chaque article et de chaque guide, et crée un lien interne systématique vers cette page. L'entité `Person` est définie **une seule fois**, dans `JsonLd.tsx` (`@id` `#person`) ; `/a-propos` ne fait que l'enrichir.

---

## Scripts de génération

Trois scripts remplacent du travail manuel qu'on oubliait de refaire :

- `npm run gen:covers` — visuels de partage 1200x630 (SVG + PNG) dans `public/blog/covers/`. Style éditorial imprimé : fond papier, filet rose, grille de colonnes, titre typographique et marque géométrique déterministe. **Aucun dégradé diffus ni sphère lumineuse** : ce sont les signatures d'une image générée automatiquement.
- `npm run gen:sitemap` — reconstruit `public/sitemap.xml` depuis les sources. **Ne plus éditer le sitemap à la main.**
- `npm run gen:llms` — régénère les sections de listing de `public/llms.txt` et de `public/llms-full.txt`. La prose écrite à la main est conservée. **Ne plus lister les articles à la main :** les deux fichiers annonçaient encore 47 et 17 articles alors que le blog en comptait 139.
- `npm run gen:index` — régénère `src/data/blogIndex.ts`, l'index léger des articles.
  > ⚠️ **Ne jamais importer `@/data/blogPosts` depuis une page qui n'affiche pas d'article.** Ce module embarque le texte intégral et pèse environ 1 Mo une fois compilé : un seul import y fait tomber tout le corpus dans le lot de téléchargement de la page. Pour afficher des liens, importer `@/data/blogIndex` (36 Ko). C'est arrivé en août 2026 sur l'accueil, les deux pages de service et les quinze pages locales.
- `npm run gen:all` — les quatre.
- `npm run prerender:head` — **écrit un `<head>` correct par route, sans navigateur.** Lancé automatiquement par le build Vercel après `prerender.mjs`. Voir la section « toutes les URL servaient l'accueil » plus bas : c'est ce qui empêche le bug de revenir.
- `node scripts/capture-portfolio.mjs [nom]` — **recapture les vignettes du portfolio** (1200 x 675) sur les vrais sites clients. Les captures dataient de juillet 2026 et plusieurs sites avaient été refaits depuis : la vignette montrait un site qui n'existait plus. À relancer dès qu'un client refait son site. Sans argument il refait les quatre, sinon `naura`, `mywebglory`, `vm-producers` ou `solar-fusion`.

À lancer après tout ajout d'article, de ville ou de guide.

---

## Pré-rendu HTML

`scripts/prerender.mjs` produit un HTML complet pour les 197 routes après `vite build`, puis **contrôle ce qu'il a réellement écrit**.

Pourquoi : sans lui, chaque URL est servie comme une coquille vide. Google finit par exécuter le JS, avec du retard. Les moteurs de réponse (ChatGPT, Perplexity) ne l'exécutent pas et ne voient rien.

- Le script trouve Chrome ou Edge tout seul, ou lit `PRERENDER_BROWSER`
- **S'il ne trouve aucun navigateur, il sort en succès** : un pré-rendu impossible ne casse jamais un déploiement
- Sur Vercel, l'image de build n'a pas de Chromium : le pré-rendu est donc ignoré sauf si `PRERENDER_BROWSER` est défini. Pour vérifier en local : `npm run build:prerender`
- `react-snap` n'est plus appelé directement (son Chromium 1.x ne se télécharge plus)
- Il tourne **en séquentiel** (`concurrency: 1`, `waitFor: 2500`). À deux onglets, les pages lourdes se disputaient le processeur et deux ou trois sortaient sans `canonical` à chaque exécution, jamais les mêmes. Compter environ 12 minutes.
- **Le script vérifie sa propre sortie** : il supprime les pages figées sur l'écran d'erreur, parce qu'un fichier cassé provoque ensuite une erreur d'hydratation chez le visiteur et vaut moins que pas de fichier, et il liste les pages dont le `<head>` est incomplet. Une sortie propre affiche « Aucune anomalie ».

---

## Bug corrigé : toutes les URL servaient l'accueil (13 septembre 2026)

> **Le bug le plus cher du site, et il était invisible depuis un navigateur.**

Relevé sur la production : les 179 URL renvoyaient **exactement le même HTML de 11 330 octets**. Même `<title>`, même `<h1>`, et surtout **le même `<link rel="canonical">` pointant vers l'accueil**.

```bash
curl -s https://elieageron.com/reseaux-sociaux | grep canonical
```

Pour tout robot qui n'exécute pas JavaScript, chaque page du site était donc un doublon de l'accueil **qui se déclarait lui-même comme tel**. La Search Console le disait mot pour mot : « Page en double sans URL canonique sélectionnée par l'utilisateur », plus 26 pages en « détectée, actuellement non indexée » et 5 en « explorée, actuellement non indexée ».

**Pourquoi** : `scripts/prerender.mjs` fait le travail, mais il lui faut Chrome. L'image de build de Vercel n'en a pas, et le script sort **en succès** quand il n'en trouve aucun (choix délibéré : un pré-rendu impossible ne doit pas casser un déploiement). Il n'a donc jamais tourné en production, alors qu'il était bien appelé par `vercel.json`.

**La correction** : `scripts/prerender-head.mjs`, qui écrit un `dist/<route>/index.html` par route **sans navigateur**. Il dérive titre, description et canonical des mêmes sources que le sitemap (lues au regex), puis réécrit le `<head>` du gabarit.

- Il **ne touche jamais** un fichier déjà écrit par `prerender.mjs`. Quand le vrai pré-rendu tourne (en local, avec Chrome), ses fichiers gagnent, parce qu'ils contiennent aussi le corps de la page.
- Il **n'écrit pas** les routes qui partent en 301 (lues dans `vercel.json`) : Vercel applique les redirections avant le système de fichiers.
- ⚠️ **Il échoue le build si une URL du sitemap n'a pas son fichier.** C'est le garde-fou qui compte : sans lui, ajouter une page sans l'ajouter au script la ferait retomber silencieusement sur le HTML de l'accueil, soit exactement le bug d'origine.

### Et le maillage interne, qui était invisible

Relevé le même jour, Search Console, rapport « Liens » :

```
Liens externes : 3          Liens internes : 4
```

**Quatre.** Le site en compte 108 vérifiés par `check:content`, plus toute l'architecture hub and spoke des guides et des catégories. Google n'en voyait aucun, pour la raison la plus bête qui soit : le corps du HTML servi est `<div id="root"></div>`, donc il ne contient pas une seule balise `<a>`.

Sans liens internes, aucune page ne transmet d'autorité à une autre et les 139 articles ne sont atteignables que par le sitemap. C'est ce qui explique les 26 pages « détectée, actuellement non indexée » et le corpus bloqué entre la position 40 et 80.

`prerender-head.mjs` injecte donc aussi un **squelette dans `#root`** : le H1, la description, et un graphe de liens réels. React le remplace au montage, donc le visiteur ne le voit pas (vérifié : React monte avant l'affichage).

| Page | Liens internes en HTML |
|---|---|
| N'importe quelle page | 19 (navigation + 4 guides + 6 catégories) |
| `/blog` | 158 (les 139 articles) |
| `/blog/categorie/X` | 19 + les articles de X |
| `/services` et `/portfolio` | 19 + les 15 pages locales |

Toute URL du site est donc atteignable **en deux clics depuis n'importe quelle autre**, en HTML brut.

> ⚠️ **Le `<noscript>` du corps a été réduit à une note.** Il portait un `<h1>`, ce qui faisait deux `<h1>` par page une fois le squelette injecté. Attention en le modifiant : **il y a un premier `<noscript>` dans le `<head>`**, celui qui charge la police en repli. Un motif `/<noscript>.*?<\/noscript>/` attrape celui-là et laisse le bon en place. Le script s'ancre donc sur le commentaire `<!-- Fallback content for crawlers`.

**Ce qu'il ne fait pas** : rendre le corps de la page. Le contenu reste écrit par React chez le visiteur. Les moteurs de réponse qui n'exécutent pas JS voient donc un `<head>` correct et un corps vide. Pour eux, `llms.txt` et `llms-full.txt` restent le vrai canal.

**Trois bugs trouvés en écrivant ce script**, tous corrigés :
1. La clef `getStarted` n'existait **que côté anglais** dans `seoData`. Le repli servait donc le titre et la description anglais sur `/get-started`, aux visiteurs français comme à Google. Même classe de bug que `guides` et `about` en août 2026.
2. Le champ des guides s'appelle `seoDesc`, pas `seoDescription`.
3. Trois pages écrivent leur `<head>` elles-mêmes et ne passent pas par `seoData` : `/assessment` (customTitle) et les deux pages légales (Helmet à la main). Elles sont déclarées en dur dans le script, et le contrôle de complétude les surveille.

---

## Bug corrigé : canonical en double

`index.html` déclarait un `<link rel="canonical">` vers l'accueil, plus une `description` et des balises Open Graph statiques. React Helmet ajoutait les siennes **sans supprimer les statiques** : chaque page servait donc deux canonical, dont un pointant vers la home.

Correction : les balises statiques que `SEO.tsx` réémet portent maintenant `data-rh="true"`, ce qui les confie à react-helmet-async qui les remplace au lieu de les doubler.

**Règle :** toute balise ajoutée dans le `<head>` de `index.html` qui est aussi émise par `SEO.tsx` doit porter `data-rh="true"`. Les balises purement globales (`viewport`, `charset`, icônes, `geo.position`, `twitter:site`) restent sans l'attribut.

---

## Checklist avant chaque déploiement

- [ ] Titres < 60 chars sur toutes les pages modifiées
- [ ] Descriptions < 160 chars et uniques
- [ ] Schemas JSON-LD valides (tester sur https://validator.schema.org)
- [ ] Canonical correct sur chaque page
- [ ] `npm run gen:all` lancé (visuels + sitemap)
- [ ] Images avec alt text
- [ ] Pas d'erreurs console JS
- [ ] Liens internes cohérents
- [ ] Un seul canonical par page (vérifier après build)
- [ ] Aucun tiret cadratin ni guillemet courbe dans le contenu ajouté

---

## Pour les sites clients

Quand tu travailles sur le site d'un client, adapte ce template :
1. **Identifier les mots-clés** : secteur, ville, service principal
2. **Auditer l'existant** : title, description, H1, schemas, vitesse
3. **Prioriser** : (1) title/description, (2) H1 + contenu, (3) schemas JSON-LD, (4) internal links, (5) performance
4. **Toujours comparer aux 3 concurrents top Google** pour le mot-clé principal
5. **Schema obligatoire par type de site** :
   - Artisan/Local : LocalBusiness + GeoCoordinates + OpeningHours
   - E-commerce : Product + Offer + AggregateRating
   - Blog : Article + Author + BreadcrumbList
   - Restaurant : Restaurant + Menu + OpeningHours
   - Médecin/Avocat : Physician/LegalService + FAQPage
