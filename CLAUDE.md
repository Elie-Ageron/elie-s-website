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
- **Réseaux sociaux** (pilier 2, page dédiée `/reseaux-sociaux`) — tournage sur place une demi-journée par mois, montage vertical, sous-titres, puis 2 à 3 publications par semaine sur Instagram / Facebook / TikTok / YouTube Shorts. Récurrent, dès 450€/mois en interne.
- **Google Business** — création / optimisation de la fiche
- **Identité de marque** — logo, charte (réalisée avec son frère, designer)
- **Référencement local (SEO)** — suivi continu (Elie monte en compétence dessus)
- **Avis & e-réputation** — collecte + réponses aux avis Google
- **Rédaction de contenu** — textes site, posts, blog (produits avec Claude + skill)

**Maintenance site :** Option A 0€, Option B 25€/mois, Option C 80€/mois

### Notes capacité / sous-traitance
- **Pas proposés** : Photo/vidéo (frère photographe pas encore pro) et Publicité Google/Meta Ads (compétence non maîtrisée) — retirés volontairement.
- **Événementiel** : **supprimé (août 2026)**. Plus un service à part : une landing page d'événement est simplement un site web. La page `/event-production` et les démos Apex Summit / Chromatic ont été retirées, l'URL redirige en 301 vers `/services` (règle dans `vercel.json`).

> ⚠️ **Aucun prix n'est affiché publiquement** sur la page `/services` (décision produit). Les prix ci-dessus sont une référence interne. Modèle business : land & expand (acquisition via le site, expansion via le partenariat après livraison).

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
- `src/pages/SocialMedia.tsx` — hero, preuve chiffrée, déroulé d'un mois type (tournage → montage → publication), ce qui est inclus, combo site + réseaux, FAQ (8 questions) et CTA. **Sans prix affiché.**
- Schémas : `Service` (@id `/reseaux-sociaux#service`), `FAQPage`, `BreadcrumbList`.

### Preuve sociale chiffrée (à tenir à jour)
- Chiffre affiché : **56 619 vues + 196 abonnés dès la toute première publication** pour une cliente formatrice en rééducation de l'écriture (Reel Facebook, 3 août 2026). Source : `création de contenue/ressources, data/15-CLIENTS/formatrice-ecriture/04-tableau-de-bord.md`.
- **La cliente n'est jamais nommée** sur le site (pas d'accord de publication).
- Un **disclaimer obligatoire** accompagne le chiffre (exemple ≠ moyenne ≠ garantie). Ne jamais arrondir vers le haut un chiffre non atteint : le tableau de bord fait foi.

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

## Règles d'accessibilité (vérifiées août 2026)

1. **`--muted-foreground` est à `30 5% 38%`**, pas 45%. À 45% le texte secondaire tombait à 4,13:1, sous le seuil WCAG AA de 4,5:1.
2. **Ne jamais appliquer d'opacité à `text-muted-foreground` sur du texte** (`/60`, `/70`, `/80`). Toute transparence le repasse sous 4,5:1. Les icônes peuvent garder une opacité (seuil 3:1).
3. **Cibles tactiles ≥ 24px** (WCAG 2.5.8) sur tout lien ou bouton autonome. Les liens en pleine phrase bénéficient de l'exception.
4. **Les maquettes décoratives** (`ServiceMockups.tsx`, `ServiceHeroMorph.tsx`) sont `aria-hidden="true"` : elles représentent des sites fictifs et ne doivent pas être lues ni évaluées en contraste.

## Règles de rédaction (skill humanizer)

Le contenu du site est passé au filtre "signes d'écriture IA". À maintenir :
- **Aucun tiret cadratin ni demi-cadratin** (— –) nulle part.
- Pas de titres en Title Case en français, pas de gras décoratif, pas de listes à en-tête gras.
- Pas de règle de trois systématique, pas de "il est important de", "dans un monde où", "chaque détail compte".
- Ton : première personne, phrases de longueurs variées, détails concrets et vérifiables (villes, chiffres, délais).

## Bugs SEO connus à surveiller

1. **Email inconsistance** : `JsonLd.tsx` et `OrganizationSchema.tsx` utilisaient `elieageron@gmail.com` → corrigé vers `elie@elieageron.com`
2. **FAQSchema home** : FAQAccordion présent sur Home mais pas de FAQPage schema → à ajouter
3. **Schemas dupliqués** : Person et LocalBusiness définis à la fois dans `index.html` (statique) et dans les composants React → normal, le statique sert de fallback pour les crawlers sans JS
5. **Une seule entité entreprise** : tous les schémas d'entreprise partagent l'`@id` `https://elieageron.com/#business`. Avant août 2026, quatre entités concurrentes (`#business`, `#service`, `#organization`, `#localbusiness`) déclaraient chacune la même note : Google y voyait quatre entreprises notées 5/5.
6. **`aggregateRating` et `review` vivent uniquement dans `ReviewSchema.tsx`.** Ne pas les redéclarer ailleurs.
7. **Un seul `BreadcrumbList` par page** : émis par chaque page via `SEO structuredData`. `Breadcrumb.tsx` ne rend que le fil visuel, et `JsonLd.tsx` n'en émet plus.
4. **hreflang** : le site sert FR/EN sur la même URL → `x-default` + les deux hreflang doivent pointer vers la même URL

---

## Architecture de contenu (refonte SEO, août 2026)

### Hub and spoke : 3 pages piliers + 47 articles
Source unique : `src/data/guides.ts`. Chaque guide est un hub long, découpé en chapitres, qui renvoie vers ses articles satellites. Les articles remontent vers leur pilier via leur champ `pillar`.

- `/guides/reseaux-sociaux-entreprise-locale` (11 chapitres) — pilier 1
- `/guides/video-smartphone-entreprise` (8 chapitres) — production au smartphone
- `/guides/visibilite-google-locale` (8 chapitres) — fiche Google, avis, pages villes
- `/guides` — index, lié depuis le header, le footer et le blog

### Blog : 47 articles, 6 catégories indexées
- Articles pré-août 2026 : bilingues, dans `src/data/blogPosts.ts` (`legacyPosts`)
- Articles depuis août 2026 : **français uniquement** (`frOnly: true`), répartis dans `src/data/blog/posts-*.ts`
- Types et catégories : `src/data/blog/types.ts`
- `frOnly` masque l'article des listes anglaises, et `SEO forceLang` garde `<html lang="fr">` sur ces pages
- Catégories : `/blog/categorie/:slug` — cibles SEO à part entière, chacune renvoie vers son guide pilier
- Chaque article porte : `categorySlug`, `tags`, `related`, `pillar`, `faqFr` (rendu + schéma FAQPage)
- `getRelatedPosts()` respecte d'abord `related`, puis complète par catégorie et tags partagés

### Pages locales : 11 villes
Source : `src/data/cities/`. Chaque page porte un `depthFr` avec contexte économique réel, secteurs, communes desservies, temps de trajet depuis Albertville, blocs éditoriaux, angle réseaux sociaux et FAQ propre.

Albertville, Chambéry, Aix-les-Bains, Ugine, Moûtiers, Bourg-Saint-Maurice, Saint-Jean-de-Maurienne, La Ravoire, Annecy, Savoie, Haute-Savoie.

> Une page locale sans contenu spécifique ne sert à rien et peut desservir. Ne jamais dupliquer une page en changeant seulement le nom de la commune.

### Page À propos (`/a-propos`)
Signal E-E-A-T principal. `AuthorCard.tsx` est affiché en bas de chaque article et de chaque guide, et crée un lien interne systématique vers cette page. L'entité `Person` est définie **une seule fois**, dans `JsonLd.tsx` (`@id` `#person`) ; `/a-propos` ne fait que l'enrichir.

---

## Scripts de génération

Trois scripts remplacent du travail manuel qu'on oubliait de refaire :

- `npm run gen:covers` — visuels de partage 1200x630 (SVG + PNG) dans `public/blog/covers/`. Style éditorial imprimé : fond papier, filet rose, grille de colonnes, titre typographique et marque géométrique déterministe. **Aucun dégradé diffus ni sphère lumineuse** : ce sont les signatures d'une image générée automatiquement.
- `npm run gen:sitemap` — reconstruit `public/sitemap.xml` depuis les sources (81 URL). **Ne plus éditer le sitemap à la main.**
- `npm run gen:all` — les deux.

À lancer après tout ajout d'article, de ville ou de guide.

---

## Pré-rendu HTML

`scripts/prerender.mjs` produit un HTML complet pour les 82 routes après `vite build`.

Pourquoi : sans lui, chaque URL est servie comme une coquille vide. Google finit par exécuter le JS, avec du retard. Les moteurs de réponse (ChatGPT, Perplexity) ne l'exécutent pas et ne voient rien.

- Le script trouve Chrome ou Edge tout seul, ou lit `PRERENDER_BROWSER`
- **S'il ne trouve aucun navigateur, il sort en succès** : un pré-rendu impossible ne casse jamais un déploiement
- Sur Vercel, l'image de build n'a pas de Chromium : le pré-rendu est donc ignoré sauf si `PRERENDER_BROWSER` est défini. Pour vérifier en local : `npm run build:prerender`
- `react-snap` n'est plus appelé directement (son Chromium 1.x ne se télécharge plus)

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
