/**
 * Audit d'accessibilite automatise, WCAG 2.1 niveau AA.
 *
 * Il etait fait a la main dans un navigateur, donc il n'etait fait qu'une fois.
 * Trois defauts serieux avaient ete trouves comme ca en septembre 2026 (une
 * fenetre Calendly qui gardait le focus une fois fermee, des notes en etoiles
 * annoncees a personne, aucun lien d'evitement). Un site qui se refait souvent
 * les reintroduit tout seul si rien ne les surveille.
 *
 * Le script charge axe-core depuis le CDN dans une page ouverte par Chrome, en
 * 1440 px puis en 375 px, et sort en erreur au premier manquement.
 *
 * Usage : node scripts/check-a11y.mjs [--base http://localhost:8080]
 */
import { existsSync } from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const puppeteer = require('puppeteer');

const args = process.argv.slice(2);
const i = args.indexOf('--base');
const base = i === -1 ? 'http://localhost:8080' : args[i + 1];

const AXE = 'https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.10.2/axe.min.js';
const REGLES = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'];

const PAGES = [
  '/',
  '/reseaux-sociaux',
  '/services',
  '/audit-gratuit',
  '/portfolio',
  '/contact',
  '/blog',
  '/guides',
  '/a-propos',
  '/why-a-website',
  '/our-process',
  '/web-designer-savoie',
];
const MOBILES = ['/', '/reseaux-sociaux', '/audit-gratuit', '/services'];

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
let analysees = 0;

const analyser = async (route, largeur) => {
  const page = await navigateur.newPage();
  await page.setViewport({ width: largeur, height: 900 });
  await page.goto(base + route, { waitUntil: 'networkidle0', timeout: 60000 });
  await page.addScriptTag({ url: AXE });

  const resultat = await page.evaluate(
    (regles) => window.axe.run(document, { runOnly: { type: 'tag', values: regles } }),
    REGLES
  );

  analysees += 1;
  for (const v of resultat.violations) {
    soucis.push(
      `${route} @ ${largeur}px  [${v.impact}]  ${v.id} : ${v.help}\n` +
        v.nodes.slice(0, 3).map((n) => `      ${n.target.join(' ')}`).join('\n')
    );
  }
  await page.close();
};

for (const route of PAGES) await analyser(route, 1440);
for (const route of MOBILES) await analyser(route, 375);

await navigateur.close();

if (!soucis.length) {
  console.log(`${analysees} page(s) analysee(s) en WCAG 2.1 AA.\n\nAucune violation.`);
  process.exit(0);
}

console.log(`${analysees} page(s) analysee(s) en WCAG 2.1 AA.\n`);
console.log(soucis.join('\n\n'));
console.log(`\n${soucis.length} violation(s).`);
process.exit(1);
