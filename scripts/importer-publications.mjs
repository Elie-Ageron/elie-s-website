/**
 * Importe une image de couverture de publication depuis un fichier quelconque.
 *
 * Recadre en 4:5 par le centre, redimensionne en 800 x 1000, encode en webp.
 * Les generateurs sortent du JPEG de 3 Mo en 1856 x 2304 : tel quel, trois de
 * ces images sur une page coutent 9 Mo au visiteur.
 *
 * Usage : node scripts/importer-publications.mjs <source> <nom>
 *   node scripts/importer-publications.mjs ~/Downloads/woodworker.jpg menuiserie
 */
import { createRequire } from 'node:module';
import { statSync } from 'node:fs';
import { join } from 'node:path';

const require = createRequire(import.meta.url);
const sharp = require('sharp');

const [source, nom] = process.argv.slice(2);
if (!source || !nom) {
  console.error('Usage : node scripts/importer-publications.mjs <source> <nom>');
  process.exit(1);
}

const cible = join(process.cwd(), 'public', 'publications', `${nom}.webp`);

await sharp(source)
  .resize(800, 1000, { fit: 'cover', position: 'attention' })
  .webp({ quality: 78 })
  .toFile(cible);

const avant = statSync(source).size;
const apres = statSync(cible).size;
console.log(
  `${nom}.webp ecrit : ${Math.round(avant / 1024)} Ko -> ${Math.round(apres / 1024)} Ko`
);
