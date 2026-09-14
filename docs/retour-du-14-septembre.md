# Retour d'Elie, à traiter

> Dicté le 14 septembre 2026 avant de fermer le PC. **Rien n'a été lancé.**
> Cette fiche existe pour que la liste survive à la fermeture de la session.
> L'ordre est celui de son parcours sur le site, pas un ordre de priorité.

---

## 1. Accueil

### 1.1 Le téléphone est trop bas 🔴

Dans la première section, la maquette de téléphone tombe trop bas dans la
colonne de droite. Elle doit **remonter pour arriver à hauteur des trois
étapes**, et se terminer au-dessus du bloc « À partir de 890 € par mois ».

> **Prendre une capture avant de toucher quoi que ce soit.** Elie : *« prends
> une capture d'écran et tu comprendras un petit peu le problème. »* La cause
> est probablement le `lg:sticky lg:top-28` combiné à la dérive au défilement :
> la dérive part de +70 px, donc le téléphone commence bas.

### 1.2 « Je ne peux pas prendre trente clients » 🔴 à jeter

Elie : *« c'est quoi ça ? C'est pourri, c'est tellement nul. »*

**Ce qu'il veut à la place** : une présentation simple de lui. Qu'il est à
Albertville, qu'il aide les gens à exister sur les réseaux et sur le web.
*« C'est pas compliqué. »*

**Il demande plusieurs propositions de titre et de texte, pas une seule.**
Tout peut changer : le titre, les deux paragraphes, le bouton.

### 1.3 « Si le site ne suit pas, je le refais » : à centrer

C'est une nouvelle section, donc elle se centre.

- Le titre sur deux lignes centrées : « Si le site ne suit pas » puis, en
  dessous, « je le refais ».
- Le paragraphe en dessous centré aussi. Il est actuellement collé à gauche.

### 1.4 Le bloc de fin

- **Le titre et la phrase peuvent être meilleurs.** Elie : *« on peut faire
  mieux sur ce titre là, en montrant bien la valeur que je vais rapporter. »*
  Le titre actuel décrit l'action, pas le gain.
- **La ligne « Ou directement » est trop petite et n'est pas centrée.** Elle
  doit être centrée comme le reste du bloc.

### 1.5 Ce qui est validé

- La section des avis, avec la photo et le titre : bien.
- Les formules de site : bien.
- Le formulaire à deux champs : **testé de bout en bout, le mail arrive**. Le
  nom de l'entreprise et le contact suffisent pour retrouver le site et la
  fiche.

### 1.6 Détail sans urgence

Le mail de notification reçu porte « nouveau lead sur concept ». Pas beau,
mais Elie ne veut pas qu'on s'y arrête. C'est dans le script Apps Script, pas
dans le site.

---

## 2. Réseaux sociaux

### 2.1 Remonter la meilleure section tout en haut 🔴

*« J'aime bien le truc. Vous savez qu'il faut poster, le problème n'a jamais
été là. Ça faut que ce soit tout en haut, la première section. »*

Cette section passe donc juste après le hero.

### 2.2 Après « comment ça se passe », enrichir les preuves

Aujourd'hui : trois Reels d'Isabelle, cliquables. Elie veut en plus :

- **trois vidéos expliquées**, c'est à dire commentées plutôt que simplement
  montrées ;
- **une vidéo d'environ une minute**, pour changer du format court ;
- **un carrousel de Nouït**, en plus des vidéos d'Isabelle.

> ⚠️ Point bloquant connu : au dernier relevé, **Nouït n'avait rien de publié**
> (57 abonnés, aucun Reel). Vérifier avant de brancher quoi que ce soit, et
> sinon lui demander où en sont ses publications.

### 2.3 À clarifier avec lui

*« Il y a besoin, même des gens ici, peut-être, pour voir les différents
compos. »* Phrase incomplète à la dictée. Deux lectures possibles : des photos
de gens sur cette page aussi, ou un aperçu des différents comptes gérés.
**Lui poser la question plutôt que deviner.**

---

## 3. Cohérence sur tout le site

### 3.1 La FAQ doit avoir le même format partout 🔴

*« Est-ce que la FAQ dans les services, c'est pas la même que dans l'accueil ?
C'est des paragraphes de texte, pas des questions où tu peux cliquer. C'est
bizarre. Il faut que ce soit pareil partout. »*

- L'accueil utilise un accordéon, `FAQAccordion`.
- `/services` affiche une liste `dl` de questions et de réponses dépliées.
- `/reseaux-sociaux` a encore un autre accordéon local.

**Les questions peuvent différer d'une page à l'autre, le format non.** Un seul
composant, réutilisé, pour que le visiteur reconnaisse le motif où qu'il soit.

### 3.2 Zones d'intervention dans le pied de page

*« Je sais pas si c'est utile d'avoir toutes les zones d'intervention, ça
rapporte pas grand chose, mais OK. »*

Pas une demande de suppression. À garder, c'est du maillage vers les quinze
pages locales, mais on peut alléger la présentation.

---

## 4. Ce qui n'a pas été touché, et qu'il a vu

Portfolio, blog, guides, contact : pas de refonte de fond. Le titre du
portfolio lui convient. Ce sont les pages à reprendre après l'accueil et
`/reseaux-sociaux`.

---

## Ordre proposé pour demain

1. Le téléphone de l'accueil, capture d'écran d'abord.
2. Les propositions de remplacement pour « Je ne peux pas prendre trente
   clients », plusieurs pistes à lui soumettre.
3. Le centrage de la section des sites, et celui de la ligne de contact.
4. Le titre et la phrase du bloc de fin, tournés vers le gain.
5. La FAQ unifiée sur les trois pages.
6. La remontée de la section sur `/reseaux-sociaux`.
7. Les questions à lui poser : le carrousel de Nouït, la vidéo d'une minute,
   et la phrase sur « les différents compos ».
