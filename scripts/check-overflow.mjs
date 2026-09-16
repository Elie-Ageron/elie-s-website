/**
 * Cherche les debordements horizontaux, sur plusieurs largeurs et plusieurs pages.
 *
 * Un debordement horizontal est invisible sur un grand ecran et ruine une page
 * sur un telephone : la page defile de cote, les boutons partent hors cadre.
 * Ce controle ouvre chaque page a chaque largeur et signale les elements plus
 * larges que la fenetre.
 *
 * Usage : node scripts/check-overflow.mjs [--base http://localhost:8080]
 */
import { existsSync } from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const puppeteer = require('puppeteer');

const args = process.argv.slice(2);
const i = args.indexOf('--base');
const base = i === -1 ? 'http://localhost:8080' : args[i + 1];

const LARGEURS = [320, 375, 414, 768, 1024, 1280, 1440];
const PAGES = ['/', '/reseaux-sociaux', '/services', '/audit-gratuit', '/portfolio', '/contact', '/blog', '/a-propos', '/community-manager-albertville'];

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

const navigateur = await puppeteer.launch({ executablePath, headless: 'new', args: ['--no-sandbox'] });
const soucis = [];

for (const route of PAGES) {
  for (const largeur of LARGEURS) {
    const page = await navigateur.newPage();
    await page.setViewport({ width: largeur, height: 900 });
    await page.goto(base + route, { waitUntil: 'networkidle0', timeout: 60000 });
    await page.evaluate(async () => {
      const pas = window.innerHeight * 0.9;
      for (let y = 0; y < document.body.scrollHeight; y += pas) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 60));
      }
      window.scrollTo(0, 0);
    });

    const rapport = await page.evaluate(() => {
      const w = document.documentElement.clientWidth;
      const coupables = [];
      for (const el of document.querySelectorAll('body *')) {
        const r = el.getBoundingClientRect();
        if (r.width === 0) continue;
        // Un conteneur qui defile de lui-meme a le droit de deborder.
        const style = getComputedStyle(el);
        if (style.overflowX === 'auto' || style.overflowX === 'scroll') continue;
        if (r.right > w + 1 || r.left < -1) {
          const parent = el.parentElement;
          if (parent) {
            const ps = getComputedStyle(parent);
            if (ps.overflowX === 'auto' || ps.overflowX === 'scroll' || ps.overflowX === 'hidden') continue;
          }
          coupables.push(`${el.tagName.toLowerCase()}.${String(el.className).slice(0, 60)} (${Math.round(r.left)} a ${Math.round(r.right)})`);
        }
      }
      return { debordement: document.documentElement.scrollWidth > w + 1, coupables: coupables.slice(0, 5) };
    });

    if (rapport.debordement) {
      soucis.push(`${route} @ ${largeur}px : la page defile de cote`);
      for (const c of rapport.coupables) soucis.push(`      ${c}`);
    }
    await page.close();
  }
  process.stdout.write(`${route} verifie\n`);
}

await navigateur.close();

if (!soucis.length) {
  console.log(`\nAucun debordement horizontal sur ${PAGES.length} pages x ${LARGEURS.length} largeurs.`);
  process.exit(0);
}
console.log('\n' + soucis.join('\n'));
process.exit(1);
