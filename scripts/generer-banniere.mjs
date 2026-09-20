/**
 * Les bannieres de couverture Facebook et LinkedIn.
 *
 * 🔴 **Pourquoi.** Elie, le 20 septembre 2026 : *« elle est noire et elle ne
 * correspond pas au design de mon site. Je veux une banniere simple, mais qui
 * corresponde au site. Comme ca, les gens sur Facebook, quand ils vont sur le
 * site, c'est pareil : meme design, meme couleur, meme spacing. »*
 *
 * L'ancienne etait un aplat noir violace avec un halo flou, soit trois choses
 * que le site bannit nommement : le fond sombre, le degrade decoratif et le
 * halo. Voir la liste des retours recurrents dans `CLAUDE.md`.
 *
 * Meme parti pris que `generate-blog-covers.mjs`, et les memes jetons : fond
 * papier, filet rose, grille de colonnes en trait fin, titre typographique.
 * Un visiteur qui passe de Facebook au site doit voir la meme marque.
 *
 * ⚠️ **La police est celle du systeme, pas General Sans.** Le rendu SVG ne
 * telecharge aucune police distante. Segoe UI est deja ce qu'utilisent les
 * couvertures d'articles, la famille reste coherente.
 *
 * ⚠️ **Le coin bas gauche reste vide.** Facebook et LinkedIn y posent la photo
 * de profil, par dessus la banniere. Tout ce qui compte est centre.
 *
 * Usage : node scripts/generer-banniere.mjs
 */

import { mkdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const sortie = join(root, 'public', 'social');

/* Palette alignee sur les variables CSS du site, mode clair. Identique a
   `generate-blog-covers.mjs` : c'est ce qui fait que les deux se ressemblent. */
const PAPIER = '#FAF8F6';
const ENCRE = '#292522';
const SOURDINE = '#6B6560';
const ROSE = '#C4396A';
const FILET = '#E4DEDA';

const POLICE = 'Segoe UI, Helvetica Neue, Arial, sans-serif';

const echapper = (s) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

/**
 * Les trois pastilles, en ligne et centrees.
 *
 * ⚠️ Chaque valeur doit etre vraie et figurer sur le site. Aucun compteur, ni
 * vues ni abonnes : c'est la regle de `CLAUDE.md`, et une banniere n'y echappe
 * pas. Ici ce sont trois elements du perimetre publie.
 */
const pastilles = (textes, cy, taille) => {
  const padding = taille * 1.1;
  const hauteur = taille * 2.2;
  const ecart = taille * 0.9;
  /* Largeur approchee : Segoe UI en demi-gras fait environ 0,53 em par signe.
     On mesure sur le texte plutot que de figer une largeur, sinon une pastille
     plus longue deborde de son cadre sans que rien ne le signale. */
  const largeurs = textes.map((t) => t.length * taille * 0.53 + padding * 2);
  const total = largeurs.reduce((a, b) => a + b, 0) + ecart * (textes.length - 1);

  let x = -total / 2;
  return textes
    .map((texte, i) => {
      const l = largeurs[i];
      const bloc =
        `<rect x="${x.toFixed(1)}" y="${(cy - hauteur / 2).toFixed(1)}" width="${l.toFixed(1)}" height="${hauteur}" rx="${hauteur / 2}" ` +
        `fill="none" stroke="${ROSE}" stroke-width="2" opacity="0.55"/>` +
        `<text x="${(x + l / 2).toFixed(1)}" y="${(cy + taille * 0.36).toFixed(1)}" text-anchor="middle" ` +
        `font-family="${POLICE}" font-size="${taille}" font-weight="600" fill="${SOURDINE}">${echapper(texte)}</text>`;
      x += l + ecart;
      return bloc;
    })
    .join('');
};

/**
 * Une banniere.
 *
 * Le titre suit la convention du site : un membre noir, un membre rose plus
 * petit et un cran plus leger. Voir la table des classes de titre dans
 * `CLAUDE.md`.
 */
const svg = ({ W, H, titreNoir, titreRose, badges, tailleTitre, tailleBadge }) => {
  /* Grille de colonnes, tres discrete, exactement comme les couvertures. */
  const marge = Math.round(W * 0.065);
  const grille = Array.from({ length: 11 }, (_, i) => {
    const x = marge + ((i + 1) * (W - marge * 2)) / 12;
    return `<line x1="${x.toFixed(1)}" y1="0" x2="${x.toFixed(1)}" y2="${H}" stroke="${FILET}" stroke-width="1" opacity="0.55"/>`;
  }).join('');

  /* 🔴 **Le bloc se centre sur son etendue reelle, pas sur sa premiere ligne.**
     Premiere version : la ligne noire etait posee a `H / 2` et les pastilles
     tombaient ou elles tombaient. Resultat, deux cents pixels de vide en bas et
     des pastilles collees au titre rose. On calcule donc le haut des
     capitales, le bas des pastilles, et on centre ce qui est entre les deux.

     ⚠️ L'ecart titre / pastilles est volontairement large. C'est le retour
     numero 4 d'Elie, « c'est trop proche de la section d'apres », et il vaut
     aussi a l'interieur d'une image. */
  const interligne = tailleTitre * 1.1;
  const hautCapitale = tailleTitre * 0.72;
  const basJambage = tailleTitre * 0.85 * 0.22;
  const hauteurPastille = tailleBadge * 2.2;
  const ecartPastilles = tailleTitre * 0.62;

  const hauteurBloc = hautCapitale + interligne + basJambage + ecartPastilles + hauteurPastille;
  /* Centre optique legerement au dessus du centre geometrique. */
  const haut = (H - hauteurBloc) / 2 - H * 0.015;

  const hautTitre = haut + hautCapitale;
  const cyBadges = hautTitre + interligne + basJambage + ecartPastilles + hauteurPastille / 2;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${PAPIER}"/>
  ${grille}
  <rect x="0" y="0" width="${W}" height="${Math.round(H * 0.016)}" fill="${ROSE}"/>

  <text x="${W / 2}" y="${hautTitre.toFixed(1)}" text-anchor="middle" font-family="${POLICE}" font-size="${tailleTitre}" font-weight="600" letter-spacing="${(-tailleTitre * 0.025).toFixed(2)}" fill="${ENCRE}">${echapper(titreNoir)}</text>
  <text x="${W / 2}" y="${(hautTitre + interligne).toFixed(1)}" text-anchor="middle" font-family="${POLICE}" font-size="${(tailleTitre * 0.85).toFixed(1)}" font-weight="500" letter-spacing="${(-tailleTitre * 0.02).toFixed(2)}" fill="${ROSE}">${echapper(titreRose)}</text>

  <g transform="translate(${W / 2}, 0)">${pastilles(badges, cyBadges, tailleBadge)}</g>

  <text x="${W - marge}" y="${H - Math.round(H * 0.06)}" text-anchor="end" font-family="${POLICE}" font-size="${tailleBadge}" font-weight="600" letter-spacing="1.6" fill="${SOURDINE}">elieageron.com</text>
</svg>`;
};

/* Les deux formats demandes, en double densite pour rester net sur un ecran
   retina. Facebook affiche 820 x 312, LinkedIn 1584 x 396 pour un profil. */
const FORMATS = [
  {
    nom: 'banniere-facebook',
    W: 1640,
    H: 624,
    tailleTitre: 78,
    tailleBadge: 26,
  },
  {
    nom: 'banniere-linkedin',
    W: 1584,
    H: 396,
    tailleTitre: 58,
    tailleBadge: 21,
  },
];

const CONTENU = {
  titreNoir: 'Une journée de tournage par mois.',
  titreRose: 'Vos réseaux tournent sans vous.',
  badges: ['8 vidéos par mois', 'sans engagement', '890 €/mois'],
};

mkdirSync(sortie, { recursive: true });

for (const f of FORMATS) {
  const markup = svg({ ...f, ...CONTENU });
  writeFileSync(join(sortie, `${f.nom}.svg`), markup);
  await sharp(Buffer.from(markup)).png().toFile(join(sortie, `${f.nom}.png`));
  console.log(`  public/social/${f.nom}.png  (${f.W} x ${f.H})`);
}

console.log('\nDeux bannieres ecrites.');
