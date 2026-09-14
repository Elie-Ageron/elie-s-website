/**
 * Recolore les visuels de marque quand la couleur de la marque change.
 *
 * Le logo, le favicon, les icones d'application et l'image de partage sont tous
 * monochromes : un seul ton, plus du blanc et de l'antialiasing. On peut donc
 * les recolorer sans les redessiner, en remplacant la teinte pixel par pixel et
 * en gardant la luminosite et la transparence.
 *
 * Ce que le script NE fait pas : toucher a une image qui contient une photo ou
 * une deuxieme couleur. Il refuserait de bien faire. Avant de l'utiliser sur un
 * nouveau fichier, verifier que le fichier est bien monochrome.
 *
 * Usage :
 *   node scripts/recolor-brand-assets.mjs            (previsualise, n'ecrit rien)
 *   node scripts/recolor-brand-assets.mjs --ecrire   (ecrit les fichiers)
 *
 * Les originaux sont suivis par git : `git checkout -- <fichier>` les restaure.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const racine = join(dirname(fileURLToPath(import.meta.url)), '..');
const ecrire = process.argv.includes('--ecrire');

/** La teinte de depart, et la tolerance autour. Le rose de la marque. */
const TEINTE_SOURCE = 337;
const TOLERANCE = 70;

/** La teinte d'arrivee : la brique, hsl(14 58% 42%). */
const TEINTE_CIBLE = 14;
/** La brique est moins saturee que le rose, et un cran plus sombre. */
const FACTEUR_SATURATION = 0.8;
const FACTEUR_LUMINOSITE = 0.93;
/** Au-dessus de ce seuil on ne touche pas a la luminosite : ce sont les fonds
 *  tres pales, et les assombrir salirait le degrade. */
const SEUIL_FOND_PALE = 0.72;

const FICHIERS = [
  'public/favicon.png',
  'public/og-image.png',
  'public/icons/apple-touch-icon.png',
  'public/icons/icon-76x76.png',
  'public/icons/icon-120x120.png',
  'public/icons/icon-144x144.png',
  'public/icons/icon-152x152.png',
  'public/icons/icon-192x192.png',
  'public/icons/icon-512x512.png',
  'src/assets/logo.webp',
];

/* ── Conversions ── */

const versTsl = (r, g, b) => {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  const d = max - min;
  if (d === 0) return [0, 0, l];
  const s = d / (1 - Math.abs(2 * l - 1));
  let h;
  if (max === r) h = 60 * (((g - b) / d) % 6);
  else if (max === g) h = 60 * ((b - r) / d + 2);
  else h = 60 * ((r - g) / d + 4);
  if (h < 0) h += 360;
  return [h, s, l];
};

const versRvb = (h, s, l) => {
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r = 0, g = 0, b = 0;
  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  return [
    Math.round((r + m) * 255),
    Math.round((g + m) * 255),
    Math.round((b + m) * 255),
  ];
};

/** Distance angulaire entre deux teintes, en degres. */
const ecartTeinte = (a, b) => {
  const d = Math.abs(a - b) % 360;
  return d > 180 ? 360 - d : d;
};

/* ── Traitement ── */

let total = 0;
let refuses = 0;

for (const relatif of FICHIERS) {
  const chemin = join(racine, relatif);
  let entree;
  try {
    entree = await readFile(chemin);
  } catch {
    console.log(`ABSENT  ${relatif}`);
    continue;
  }

  const image = sharp(entree).ensureAlpha();
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  // Controle : si des pixels franchement colores sortent de la famille rose, le
  // fichier n'est pas monochrome et on ne le touche pas.
  //
  // Le controle ne regarde que les pixels a la fois satures ET de luminosite
  // moyenne. Les fichiers portent du bruit de reechantillonnage sur les zones
  // blanches : quelques centaines de pixels quasi blancs dont la teinte calculee
  // part dans le vert ou le cyan. Ils sont invisibles a l'oeil, mais un controle
  // naif les compte et refuse un fichier parfaitement monochrome.
  let horsFamille = 0;
  let touches = 0;

  for (let i = 0; i < data.length; i += channels) {
    if (data[i + 3] < 8) continue;
    const [h, s, l] = versTsl(data[i], data[i + 1], data[i + 2]);
    if (s < 0.35 || l < 0.12 || l > 0.78) continue;
    if (ecartTeinte(h, TEINTE_SOURCE) > TOLERANCE) horsFamille += 1;
    else touches += 1;
  }

  const proportionHorsFamille = touches + horsFamille === 0 ? 0 : horsFamille / (touches + horsFamille);
  if (proportionHorsFamille > 0.03) {
    console.log(
      `REFUSE  ${relatif} : ${(proportionHorsFamille * 100).toFixed(1)} % des pixels colores sont hors de la famille rose. Fichier non monochrome, a refaire a la main.`
    );
    refuses += 1;
    continue;
  }

  for (let i = 0; i < data.length; i += channels) {
    if (data[i + 3] < 8) continue;
    const [h, s, l] = versTsl(data[i], data[i + 1], data[i + 2]);
    if (s < 0.02) continue;
    if (ecartTeinte(h, TEINTE_SOURCE) > TOLERANCE) continue;
    const sNouveau = Math.min(1, s * FACTEUR_SATURATION);
    const lNouveau = l > SEUIL_FOND_PALE ? l : l * FACTEUR_LUMINOSITE;
    const [r, g, b] = versRvb(TEINTE_CIBLE, sNouveau, lNouveau);
    data[i] = r;
    data[i + 1] = g;
    data[i + 2] = b;
  }

  if (ecrire) {
    const sortie = sharp(data, { raw: { width, height, channels } });
    const buffer = relatif.endsWith('.webp')
      ? await sortie.webp({ quality: 92, lossless: true }).toBuffer()
      : await sortie.png({ compressionLevel: 9 }).toBuffer();
    await writeFile(chemin, buffer);
  }

  console.log(`OK      ${relatif.padEnd(34)} ${width}x${height}  ${touches} pixels recolores`);
  total += 1;
}

console.log(
  `\n${total} fichier(s) traité(s), ${refuses} refusé(s).` +
    (ecrire ? '' : '\nRien n’a été écrit. Relancer avec --ecrire pour appliquer.')
);
