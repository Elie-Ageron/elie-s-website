# CLAUDE.md — Elie Ageron Web Design

## Contexte du projet

Site vitrine / portfolio de **Elie Ageron**, web designer freelance basé à **Annecy, Haute-Savoie (74), France**.
- URL : https://elieageron.com
- Stack : React + TypeScript + Vite + Tailwind + Supabase + Vercel
- Bilingue : Français (défaut) + Anglais
- Email pro : **web@elieageron.com** (toujours utiliser cette adresse, pas elieageron@gmail.com)
- Téléphone : +33 6 95 55 53 18

## Services proposés
- Landing page haute conversion (dès 500€, livraison 7-14j)
- Site vitrine 4 pages (dès 1500€)
- Apps & dashboards sur mesure
- Maintenance mensuelle (50€/mois landing, 100€/mois vitrine)

---

## Architecture SEO du projet

### Composants SEO principaux
- `src/components/SEO.tsx` — Helmet (title, description, OG, Twitter, canonical, keywords, geo) par page
- `src/components/JsonLd.tsx` — Schemas globaux : Person, ProfessionalService, WebSite, BreadcrumbList
- `src/components/OrganizationSchema.tsx` — Schemas : Organization + LocalBusiness
- `src/components/FAQSchema.tsx` — FAQPage schema (pages pricing + why)
- `src/components/ReviewSchema.tsx` — Review schemas
- `src/components/Breadcrumb.tsx` — Breadcrumb visuel
- `src/components/InternalLinks.tsx` — Liens internes pour crawl
- `src/components/Analytics.tsx` — GTM (GTM-MTQ3GP5H)

### Fichiers techniques
- `index.html` — Meta tags statiques (fallback pour crawlers), schemas JSON-LD statiques
- `public/sitemap.xml` — Sitemap avec hreflang fr/en
- `public/robots.txt` — Directives crawl

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
- Utiliser **UNIQUEMENT** `web@elieageron.com` dans tous les schemas JSON-LD
- Ne jamais utiliser `elieageron@gmail.com` dans les schemas visibles par Google

### 10. Sitemap
- Mettre à jour `lastmod` dans `public/sitemap.xml` après chaque modification de page
- `changefreq` : home/blog/portfolio = weekly, autres = monthly, légal = yearly
- `priority` : home = 1.0, pricing/contact = 0.9, portfolio/why/process = 0.8, blog posts = 0.7

---

## Mots-clés cibles

### Primaires (FR)
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

## SEO Local (Annecy / Haute-Savoie)

- Ville principale : **Annecy** (74000)
- Région : **Haute-Savoie** (FR-74)
- Coordonnées GPS : lat 45.8992, lng 6.1294
- Rayon d'action : Annecy, Haute-Savoie, Rhône-Alpes, France entière + international
- Toujours inclure geo tags dans `index.html` et LocalBusiness schema

---

## Bugs SEO connus à surveiller

1. **Email inconsistance** : `JsonLd.tsx` et `OrganizationSchema.tsx` utilisaient `elieageron@gmail.com` → corrigé vers `web@elieageron.com`
2. **FAQSchema home** : FAQAccordion présent sur Home mais pas de FAQPage schema → à ajouter
3. **Schemas dupliqués** : Person et LocalBusiness définis à la fois dans `index.html` (statique) et dans les composants React → normal, le statique sert de fallback
4. **hreflang** : le site sert FR/EN sur la même URL → `x-default` + les deux hreflang doivent pointer vers la même URL

---

## Checklist avant chaque déploiement

- [ ] Titres < 60 chars sur toutes les pages modifiées
- [ ] Descriptions < 160 chars et uniques
- [ ] Schemas JSON-LD valides (tester sur https://validator.schema.org)
- [ ] Canonical correct sur chaque page
- [ ] `lastmod` sitemap mis à jour
- [ ] Images avec alt text
- [ ] Pas d'erreurs console JS
- [ ] Liens internes cohérents

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
