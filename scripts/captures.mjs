/**
 * Captures d'ecran de relecture, pour regarder le site comme un visiteur.
 *
 * Le volet navigateur de l'editeur rend a 800 px de large : on ne peut pas y
 * juger une mise en page dessinee pour 1440. Ce script ouvre les pages dans
 * Chrome, laisse les animations d'apparition se terminer, et ecrit une image
 * par tranche d'ecran dans `.captures/`.
 *
 * Usage : node scripts/captures.mjs [url ...] [--mobile] [--base http://localhost:8080]
 */
import { existsSync, mkdirSync, rmSync } from 'node:fs';
import { createRequire } from 'node:module';
import { join } from 'node:path';

const require = createRequire(import.meta.url);
const puppeteer = require('puppeteer');

const args = process.argv.slice(2);
const mobile = args.includes('--mobile');
const baseIdx = args.indexOf('--base');
const base = baseIdx === -1 ? 'http://localhost:8080' : args[baseIdx + 1];
/* Git Bash sur Windows reecrit « /reseaux-sociaux » en chemin Windows avant que
   node ne le voie. On accepte donc aussi la route sans barre oblique, et on
   rattrape le chemin mange en ne gardant que son dernier segment. */
const routes = args
  .filter((a) => a !== '--mobile' && a !== '--base' && a !== base)
  .map((a) => {
    if (a.startsWith('/') && !a.includes(':')) return a;
    if (/^[A-Za-z]:[\/]/.test(a) || a.includes('/Git/')) return '/' + a.split(/[\/]/).pop();
    return '/' + a.replace(/^\/+/, '');
  });
if (!routes.length) routes.push('/');

const chemins = [
  process.env.PRERENDER_BROWSER,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  '/usr/bin/google-chrome',
].filter(Boolean);
const executablePath = chemins.find((p) => existsSync(p));
if (!executablePath) {
  console.error('Aucun Chrome trouve. Definir PRERENDER_BROWSER.');
  process.exit(1);
}

const largeur = mobile ? 390 : 1440;
const hauteur = mobile ? 844 : 900;
const dossier = join(process.cwd(), '.captures');
if (existsSync(dossier)) rmSync(dossier, { recursive: true, force: true });
mkdirSync(dossier, { recursive: true });

const navigateur = await puppeteer.launch({ executablePath, headless: 'new', args: ['--no-sandbox'] });

for (const route of routes) {
  const page = await navigateur.newPage();
  await page.setViewport({ width: largeur, height: hauteur, deviceScaleFactor: 1 });
  await page.goto(base + route, { waitUntil: 'networkidle0', timeout: 60000 });

  // Les sections apparaissent au defilement : on descend toute la page une
  // fois pour declencher les reveals, puis on remonte.
  await page.evaluate(async () => {
    const pas = window.innerHeight * 0.8;
    for (let y = 0; y < document.body.scrollHeight; y += pas) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 400));
  });

  const total = await page.evaluate(() => document.body.scrollHeight);
  const nom = route === '/' ? 'accueil' : route.replace(/\//g, '-').replace(/^-/, '');
  const suffixe = mobile ? 'mobile' : 'desktop';
  const tranches = Math.ceil(total / hauteur);

  for (let i = 0; i < tranches; i += 1) {
    await page.evaluate((y) => window.scrollTo(0, y), i * hauteur);
    await new Promise((r) => setTimeout(r, 250));
    const fichier = join(dossier, `${nom}-${suffixe}-${String(i + 1).padStart(2, '0')}.png`);
    await page.screenshot({ path: fichier });
  }
  console.log(`${route} : ${tranches} tranche(s), ${total} px de haut`);
  await page.close();
}

await navigateur.close();
console.log(`Images dans ${dossier}`);
