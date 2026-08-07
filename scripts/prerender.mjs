/**
 * Pre-rendu HTML du site.
 *
 * Le site est une application React sans rendu serveur : sans cette etape,
 * chaque URL est servie comme une coquille vide que le moteur doit executer.
 * Google finit par le faire, avec du retard. Les moteurs de reponse (ChatGPT,
 * Perplexity) ne le font pas du tout et ne voient donc aucun contenu.
 *
 * react-snap embarque un puppeteer 1.x dont le Chromium ne se telecharge plus.
 * On lui fournit donc un navigateur deja installe sur la machine, resolu ici
 * ou via la variable d'environnement PRERENDER_BROWSER.
 *
 * Usage : node scripts/prerender.mjs  (apres `vite build`)
 */

import { existsSync } from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

const candidates = [
  process.env.PRERENDER_BROWSER,
  process.env.PUPPETEER_EXECUTABLE_PATH,
  // Vercel et images Linux de CI
  '/usr/bin/google-chrome-stable',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium-browser',
  '/usr/bin/chromium',
  // Windows
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  // macOS
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].filter(Boolean);

const browser = candidates.find((path) => existsSync(path));

if (!browser) {
  console.error(
    'Pre-rendu ignore : aucun navigateur Chromium trouve.\n' +
      'Definissez PRERENDER_BROWSER avec le chemin de Chrome pour activer le pre-rendu.'
  );
  // Sortie en succes : un pre-rendu impossible ne doit jamais casser un deploiement.
  process.exit(0);
}

console.log(`Pre-rendu avec ${browser}`);

const { run } = require('react-snap');

run({
  source: 'dist',
  puppeteerExecutablePath: browser,
  puppeteerArgs: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  concurrency: 2,
  // Le CSS reste dans les feuilles de style : l'inliner casse le theme sombre.
  inlineCss: false,
  skipThirdPartyRequests: true,
  // Les listes chargent au defilement : on laisse le temps aux sections de sortir.
  waitFor: 800,
  // Routes non atteignables par simple crawl depuis la page d'accueil.
  include: ['/', '/blog', '/guides', '/a-propos', '/services', '/reseaux-sociaux'],
})
  .then(() => console.log('Pre-rendu termine'))
  .catch((err) => {
    console.error('Pre-rendu en echec, le build continue :', err.message);
    process.exit(0);
  });
