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
  // Les listes chargent au defilement, et react-helmet ecrit le <head> apres le
  // premier rendu. A 800 ms, des pages sortaient sans canonical ni description,
  // et le controle de fin de script les rattrapait. 2500 ms rend ca stable.
  waitFor: 2500,
  // Routes non atteignables par simple crawl depuis la page d'accueil.
  include: ['/', '/blog', '/guides', '/a-propos', '/services', '/reseaux-sociaux'],
})
  .then(() => {
    console.log('Pre-rendu termine');
    verifier();
  })
  .catch((err) => {
    console.error('Pre-rendu en echec, le build continue :', err.message);
    process.exit(0);
  });

/**
 * Controle de ce qui a reellement ete ecrit.
 *
 * Le pre-rendu peut echouer page par page sans que rien ne le signale : une
 * page peut sortir figee sur l'ecran d'erreur, ou sans son <head> si react-helmet
 * n'a pas eu le temps d'ecrire. Un fichier fige sur l'ecran d'erreur est pire
 * que pas de fichier du tout, parce qu'il provoque ensuite une erreur
 * d'hydratation chez le visiteur : on le supprime pour laisser la main au
 * repli du routeur.
 */
function verifier() {
  const { readdirSync, statSync, readFileSync, unlinkSync } = require('node:fs');
  const { join } = require('node:path');

  const pages = [];
  const parcourir = (dir, route = '') => {
    for (const entree of readdirSync(dir)) {
      const chemin = join(dir, entree);
      if (statSync(chemin).isDirectory()) {
        if (route === '' && ['assets', 'icons', 'videos'].includes(entree)) continue;
        parcourir(chemin, `${route}/${entree}`);
      } else if (entree === 'index.html') {
        pages.push({ route: route || '/', chemin });
      }
    }
  };
  parcourir('dist');

  const casses = [];
  const sansTete = [];

  for (const { route, chemin } of pages) {
    const html = readFileSync(chemin, 'utf8');
    if (html.includes('Erreur de rendu') || html.includes('Une erreur JavaScript')) {
      casses.push(route);
      unlinkSync(chemin);
      continue;
    }
    if (!html.includes('rel="canonical"')) sansTete.push(route);
  }

  console.log(`Controle du pre-rendu : ${pages.length} pages ecrites.`);

  if (casses.length) {
    console.error(
      `\n${casses.length} page(s) figees sur l'ecran d'erreur, fichier supprime pour laisser le repli :`
    );
    casses.forEach((r) => console.error(`  x ${r}`));
    console.error("  Corrigez l'erreur de rendu avant de deployer.\n");
  }

  if (sansTete.length) {
    console.warn(`\n${sansTete.length} page(s) sans canonical, le <head> n'a pas eu le temps d'etre ecrit :`);
    sansTete.forEach((r) => console.warn(`  ! ${r}`));
    console.warn('  Augmentez waitFor si la liste ne se vide pas.\n');
  }

  if (!casses.length && !sansTete.length) console.log('Aucune anomalie.');
}
