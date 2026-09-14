/**
 * Recapture les visuels du portfolio.
 *
 * Les captures dataient de juillet 2026 et plusieurs sites clients avaient ete
 * refaits depuis : la vignette montrait un site qui n'existe plus. Ce script
 * les refait toutes d'un coup, au meme format que les fichiers d'origine
 * (1200 x 675, soit du 16:9), pour qu'aucune mise en page ne bouge.
 *
 * Usage : node scripts/capture-portfolio.mjs [nom]
 * Sans argument, il refait les quatre. Avec un nom, il ne refait que celui-la.
 *
 * Il cherche Chrome ou Edge tout seul, comme le pre-rendu, et il sort en
 * succes s'il n'en trouve aucun : une capture impossible ne doit pas casser
 * un build.
 */
import { existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const racine = join(__dirname, '..');
const dossier = join(racine, 'src', 'assets');
const tmp = join(racine, '.cache-captures');

/** Largeur de rendu, puis reduction en 1200 x 675 pour coller aux fichiers existants. */
const LARGEUR = 1600;
const HAUTEUR = 900;
const SORTIE = { largeur: 1200, hauteur: 675 };

const SITES = [
  { nom: 'naura', url: 'https://naura-finances.fr' },
  { nom: 'mywebglory', url: 'https://mywebglory.com' },
  { nom: 'vm-producers', url: 'https://vmproducers.com' },
  { nom: 'solar-fusion', url: 'https://solar-fusion.fr' },
];

const CANDIDATS = [
  process.env.PRERENDER_BROWSER,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
].filter(Boolean);

const trouverNavigateur = () => CANDIDATS.find((chemin) => existsSync(chemin));

const demandes = process.argv.slice(2);
const aFaire = demandes.length ? SITES.filter((s) => demandes.includes(s.nom)) : SITES;

if (!aFaire.length) {
  console.error(`Aucun site connu parmi : ${demandes.join(', ')}`);
  console.error(`Noms disponibles : ${SITES.map((s) => s.nom).join(', ')}`);
  process.exit(1);
}

const navigateur = trouverNavigateur();
if (!navigateur) {
  console.log('Aucun Chrome ni Edge trouve, captures ignorees.');
  process.exit(0);
}

mkdirSync(tmp, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: navigateur,
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--hide-scrollbars'],
});

let echecs = 0;

for (const site of aFaire) {
  const page = await browser.newPage();
  await page.setViewport({ width: LARGEUR, height: HAUTEUR, deviceScaleFactor: 1 });
  const brut = join(tmp, `${site.nom}.png`);
  const cible = join(dossier, `portfolio-${site.nom}.webp`);

  try {
    await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 60_000 });
    // Les animations d'entree au defilement mettent le hero a opacite 0 pendant
    // une seconde. Sans cette pause, la capture sort a moitie vide.
    await new Promise((r) => setTimeout(r, 4000));
    await page.screenshot({ path: brut, type: 'png' });

    await sharp(brut)
      .resize(SORTIE.largeur, SORTIE.hauteur, { fit: 'cover', position: 'top' })
      .webp({ quality: 82 })
      .toFile(cible);

    console.log(`OK   ${site.nom.padEnd(14)} ${site.url}`);
  } catch (err) {
    echecs += 1;
    console.error(`ECHEC ${site.nom.padEnd(13)} ${site.url} : ${err.message}`);
  } finally {
    await page.close();
  }
}

await browser.close();

if (echecs) {
  console.error(`\n${echecs} capture(s) en echec. Les fichiers concernes n'ont pas ete remplaces.`);
  process.exit(1);
}
console.log('\nToutes les captures sont a jour.');
