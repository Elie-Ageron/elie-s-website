# Où on en est, au 13 septembre 2026 au soir

> Les décisions techniques durables sont dans `CLAUDE.md`. Ici, c'est l'état du
> chantier et ce qui attend une décision d'Elie.

---

## Ce qui est fait, et pas encore livré

**Rien n'est commité, rien n'est déployé.** Environ 79 fichiers touchés dans
l'arbre de travail. Le site public est encore celui d'avant.

### Le gros morceau technique : le site était invisible pour les robots

1. **Les 179 URL renvoyaient le même HTML**, canonical vers l'accueil compris.
   Pour tout robot qui n'exécute pas JavaScript, chaque page était un doublon
   de l'accueil qui se déclarait comme tel.
2. **Google ne voyait que 4 liens internes** sur tout le site, contre 108 réels.

Corrigé par `scripts/prerender-head.mjs`, sans navigateur.

### La refonte visuelle

- Une seule échelle de titre pour tout le site, `.section-title`.
- Cinq blocs de fin de page supprimés. Une page se termine par une seule
  proposition, partout : le formulaire d'audit à deux champs.
- Le formulaire libre à quatre champs ne vit plus que sur `/contact`.
- L'accueil relu titre par titre, de façon à se comprendre en survol.
- De vraies photos dans les maquettes, et trois vraies vidéos d'Isabelle
  Ageron-Vicat, cliquables, sur `/reseaux-sociaux`.

### Les contrôles

| Commande | Ce qu'elle couvre |
|---|---|
| `npm run verify` | Build, pré-rendu, HTML produit, contenu, balises, écriture |
| `npm run check:navigateur` | Accessibilité WCAG 2.1 AA et débordement horizontal, dans un vrai Chrome |

---

## Les décisions qui attendent Elie

| # | Décision | État |
|---|---|---|
| 1 | **La couleur d'accent** | 14 options sur `/labo`, route dev uniquement. Le code est en rose. Un script recolore logo, favicon et image de partage dès que la nuance est choisie |
| 2 | **Le déploiement** | Prêt. La correction SEO coûte de l'argent chaque jour où elle n'est pas en ligne |
| 3 | **Tester le formulaire d'audit** | Jamais envoyé de bout en bout. En envoyer un et vérifier que la ligne arrive dans la feuille Google |
| 4 | **L'accord d'Isabelle et de Nouït** | Leur nom, leur métier et, pour Isabelle, son visage et ses vidéos sont affichés sur le site. C'est Elie qui l'a demandé, c'est à lui de confirmer leur accord |
| 5 | **VM Producers ou Virtual Producers** | Le client a changé de nom. Touche l'attribution d'un avis |
| 6 | **`/assessment` ou `/audit-gratuit`** | Deux offres gratuites concurrentes. Mon avis : une seule, sinon les deux perdent |
| 7 | **Le compte Instagram d'Isabelle** | Sa page Facebook et son LinkedIn sont liés. L'identifiant Instagram reste introuvable, ni dans les fiches client ni en recherche |
| 8 | **Un client du bon profil au portfolio** | Aucun artisan, aucun commerce dans les réalisations de sites. Pas corrigeable par le texte |

---

## Un chiffre à revoir dans les fiches

`CLAUDE.md` et `/a-propos` citent **56 619 vues** comme le résultat de
référence, obtenu sur la première publication d'Isabelle le 3 août 2026.

**Relevé le 13 septembre sur sa page Facebook publique : plusieurs Reels sont
très au-dessus.** Le chiffre de référence est donc sous-estimé.

> Rien n'a été modifié sur le site : la règle reste qu'un chiffre de
> performance se raconte et ne s'affiche jamais en gros, et le tableau de bord
> client fait foi. Mais la fiche mérite d'être mise à jour, et c'est une bonne
> nouvelle commerciale.

---

## Ce qu'Elie a tranché, et qu'il ne faut pas rouvrir

- **Pas de fond sombre. Pas de jaune.** Essayés, rejetés.
- **Pas de chiffres de performance en argument de vente.**
- **Fond crème gardé. General Sans gardée.**
- **Prix planchers affichés** : site dès 500 €, réseaux dès 890 €/mois.
- **Les images de gens qui sourient restent discrètes.** Une seule sur
  l'accueil, dans le téléphone.
- **Réponses courtes**, le résultat d'abord.

---

## Le diagnostic SEO, en une ligne

Le problème n'a jamais été le classement : position 1,6 sur « agence seo
albertville », 5,9 sur « agence web albertville ». Le problème, c'est zéro
clic, parce que le clic se joue dans le bloc de fiches Google où Elie a
**3 avis contre 74 pour Blackmoon**. Le plan est dans
`docs/fiche-google-et-avis.md`, et c'est du travail hors du site.
