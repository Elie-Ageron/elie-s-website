/**
 * Le titre de page est-il plus grand que les titres de section ?
 *
 * 🔴 **Ce controle repare un defaut que personne ne voyait depuis un
 * ordinateur.** Elie, le 20 septembre 2026, capture de son telephone a
 * l'appui : *« quand t'es en haut, le titre principal qu'on doit voir en
 * premier, il est tout petit. Il est de la meme taille que tout. »*
 *
 * Mesure du jour, a 375 px : **h1 a 28,1 px, h2 a 30 px.** Le titre de page
 * etait le plus petit titre de la page, sur les onze pages qui ont un hero.
 * En cause, deux `clamp()` dont les planchers se croisaient sous 400 px.
 *
 * Aucun controle existant ne pouvait l'attraper : `check:a11y` verifie l'ordre
 * des niveaux, pas leur taille rendue, et `check:overflow` regarde la largeur.
 * Une hierarchie typographique ne se lit que dans les pixels calcules.
 *
 * Usage : node scripts/check-hierarchie.mjs [--base http://127.0.0.1:4173]
 */
import { existsSync } from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const puppeteer = require('puppeteer');

const args = process.argv.slice(2);
const i = args.indexOf('--base');
const base = i === -1 ? 'http://127.0.0.1:4173' : args[i + 1];

/** Les largeurs qui comptent : le vieux plancher, l'iPhone courant, l'Android large. */
const LARGEURS = [320, 375, 390, 412, 768, 1280];

/** Les pages qui portent un hero, plus une page locale de chaque famille. */
const PAGES = [
  '/',
  '/services',
  '/reseaux-sociaux',
  '/audit-gratuit',
  '/portfolio',
  '/contact',
  '/a-propos',
  '/blog',
  '/guides',
  '/creation-site-web-albertville',
  '/community-manager-albertville',
  '/referencement-local',
];

/** Un titre de page doit depasser ses titres de section d'au moins ce rapport. */
const RAPPORT_MINI = 1.15;

const chemins = [
  process.env.PRERENDER_BROWSER,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/usr/bin/google-chrome',
].filter(Boolean);
const executablePath = chemins.find((p) => existsSync(p));
if (!executablePath) {
  console.error('Aucun Chrome trouve. Definir PRERENDER_BROWSER.');
  process.exit(1);
}

const navigateur = await puppeteer.launch({ executablePath, headless: 'new', args: ['--no-sandbox'] });
const soucis = [];
let mesures = 0;

for (const route of PAGES) {
  const page = await navigateur.newPage();
  for (const largeur of LARGEURS) {
    await page.setViewport({ width: largeur, height: 900 });
    try {
      await page.goto(base + route, { waitUntil: 'networkidle0', timeout: 60000 });
    } catch {
      soucis.push(`${route} @ ${largeur} : page injoignable`);
      continue;
    }
    const r = await page.evaluate(() => {
      const taille = (e) => (e ? parseFloat(getComputedStyle(e).fontSize) : null);
      const h1 = document.querySelector('h1');
      /* On ne compare qu'aux titres de section reellement visibles : un h2
         cache par un accordeon ou hors ecran ne fait pas de hierarchie. */
      const h2s = [...document.querySelectorAll('h2')].filter((e) => {
        const b = e.getBoundingClientRect();
        return b.width > 0 && b.height > 0;
      });
      return { h1: taille(h1), h2max: h2s.length ? Math.max(...h2s.map(taille)) : null };
    });
    mesures += 1;
    if (!r.h1) {
      soucis.push(`${route} @ ${largeur} : aucun h1`);
      continue;
    }
    if (r.h2max && r.h1 / r.h2max < RAPPORT_MINI) {
      soucis.push(
        `${route} @ ${largeur} px : h1 ${r.h1.toFixed(1)} px contre h2 ${r.h2max.toFixed(1)} px` +
          `  (rapport ${(r.h1 / r.h2max).toFixed(2)}, minimum ${RAPPORT_MINI})`
      );
    }
  }
  await page.close();
}

await navigateur.close();

console.log(`\nHierarchie des titres : ${mesures} mesure(s) sur ${PAGES.length} pages et ${LARGEURS.length} largeurs.\n`);

if (soucis.length) {
  console.log(`  ${soucis.length} probleme(s) :\n`);
  for (const s of soucis) console.log(`    ${s}`);
  console.log('');
  process.exit(1);
}

console.log('  Le titre de page domine ses titres de section partout.\n');
