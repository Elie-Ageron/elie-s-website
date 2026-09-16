/**
 * Mesure les Core Web Vitals sur des pages reelles, dans un vrai Chrome.
 *
 * Pourquoi ce script existe : le site n'a aucune donnee terrain dans le Chrome
 * UX Report, parce qu'il n'a pas assez de visiteurs pour que Google en publie.
 * Sans champ, il reste le laboratoire, et le laboratoire demande un navigateur
 * pilote, pas un service en ligne.
 *
 * Ce qui est mesure, et pourquoi c'est ce qui compte :
 *   LCP  le plus gros element affiche. Seuil vert a 2,5 s.
 *   CLS  le decalage cumule de la mise en page. Seuil vert a 0,1.
 *   TBT  le temps ou le fil principal est bloque. C'est le substitut de labo
 *        de l'INP, qui lui ne se mesure qu'avec une vraie interaction.
 *   TTFB le temps de reponse du serveur.
 *
 * ⚠️ Mesure par defaut en 4G simulee sur un processeur ralenti quatre fois.
 * Une mesure en fibre sur un portable de developpeur est toujours verte et ne
 * dit rien : la moitie des visiteurs sont sur un telephone en vallee.
 *
 * Usage : node scripts/check-vitals.mjs [--prod] [/route ...]
 */
import { existsSync } from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const puppeteer = require('puppeteer');

const args = process.argv.slice(2);
const prod = args.includes('--prod');
const sansTiers = args.includes('--sans-tiers');
/* `--build` mesure le vrai build servi par `vite preview`, pas le serveur de
   dev, qui charge des centaines de modules non groupes et ne represente rien. */
const port = (args.find((a) => a.startsWith('--port=')) ?? '').split('=')[1];
const base = prod
  ? 'https://elieageron.com'
  : `http://localhost:${port || (args.includes('--build') ? 4173 : 8080)}`;

/* Meme rattrapage que dans captures.mjs : Git Bash reecrit « /route » en
   chemin Windows avant que node ne le voie. */
const nettoyer = (a) => {
  if (a === '/') return '/';
  if (/^[A-Za-z]:[/]/.test(a) || a.includes('/Git/')) return '/' + a.split(/[/]/).pop();
  return '/' + a.replace(/^\/+/, '');
};
const routes = args.filter((a) => !a.startsWith('--')).map(nettoyer);
const PAGES = routes.length
  ? routes
  : ['/', '/reseaux-sociaux', '/community-manager-albertville', '/blog/prix-gestion-reseaux-sociaux'];

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

const SEUILS = { lcp: [2500, 4000], cls: [0.1, 0.25], tbt: [200, 600], ttfb: [800, 1800] };
const juger = (cle, v) => (v <= SEUILS[cle][0] ? 'bon' : v <= SEUILS[cle][1] ? 'a ameliorer' : 'mauvais');

const resultats = [];

/* Un navigateur neuf par page. Avec un seul navigateur, la deuxieme page
   trouve le lot JavaScript deja en cache et la mesure ne represente plus
   personne : un visiteur qui arrive de Google a le cache vide. */
for (const route of PAGES) {
  const navigateur = await puppeteer.launch({
    executablePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-dev-shm-usage'],
  });
  const page = await navigateur.newPage();
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });

  // 4G lente et processeur quatre fois plus lent : un telephone milieu de gamme.
  const client = await page.target().createCDPSession();
  await client.send('Network.emulateNetworkConditions', {
    offline: false,
    latency: 150,
    downloadThroughput: (1.6 * 1024 * 1024) / 8,
    uploadThroughput: (750 * 1024) / 8,
  });
  await client.send('Emulation.setCPUThrottlingRate', { rate: 4 });

  /* `--sans-tiers` bloque les domaines tiers. Ce n'est pas une configuration a
     livrer : c'est une mesure. Comparer les deux passages donne le cout reel
     d'un marqueur, en millisecondes de fil principal bloque, au lieu d'en
     discuter. */
  if (sansTiers) {
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      const url = req.url();
      const tiers = ['googletagmanager.com', 'google-analytics.com', 'googletagservices', 'doubleclick.net', 'calendly.com'];
      if (tiers.some((d) => url.includes(d))) req.abort();
      else req.continue();
    });
  }

  await page.evaluateOnNewDocument(() => {
    window.__vitals = { lcp: 0, cls: 0, longtasks: 0 };
    new PerformanceObserver((l) => {
      const e = l.getEntries();
      const dernier = e[e.length - 1];
      window.__vitals.lcp = dernier.startTime;
      // Sans le nom de l'element, on sait que c'est lent mais pas quoi corriger.
      const el = dernier.element;
      window.__vitals.lcpElement = el
        ? `${el.tagName.toLowerCase()}${el.id ? '#' + el.id : ''}${el.className && typeof el.className === 'string' ? '.' + el.className.split(' ').filter(Boolean).slice(0, 2).join('.') : ''}`
        : dernier.url || '?';
    }).observe({ type: 'largest-contentful-paint', buffered: true });
    new PerformanceObserver((l) => {
      for (const entry of l.getEntries()) {
        if (entry.hadRecentInput) continue;
        window.__vitals.cls += entry.value;
        // Le plus gros decalage, avec son element : c'est celui a corriger.
        if (entry.value > (window.__vitals.pireDecalage || 0)) {
          window.__vitals.pireDecalage = entry.value;
          const src = entry.sources && entry.sources[0] && entry.sources[0].node;
          window.__vitals.clsElement = src
            ? `${src.tagName ? src.tagName.toLowerCase() : '?'}${src.className && typeof src.className === 'string' ? '.' + src.className.split(' ').filter(Boolean).slice(0, 2).join('.') : ''}`
            : '?';
        }
      }
    }).observe({ type: 'layout-shift', buffered: true });
    new PerformanceObserver((l) => {
      for (const entry of l.getEntries()) {
        // Le TBT ne compte que ce qui depasse 50 ms dans une tache longue.
        window.__vitals.longtasks += Math.max(0, entry.duration - 50);
      }
    }).observe({ type: 'longtask', buffered: true });
  });

  const debut = Date.now();
  await page.goto(base + route, { waitUntil: 'networkidle0', timeout: 90000 });
  // Laisse le temps aux images tardives et aux decalages de se produire.
  await new Promise((r) => setTimeout(r, 3000));

  const v = await page.evaluate(() => {
    const nav = performance.getEntriesByType('navigation')[0];
    const transfert = performance
      .getEntriesByType('resource')
      .reduce((somme, r) => somme + (r.transferSize || 0), 0);
    const js = performance
      .getEntriesByType('resource')
      .filter((r) => r.name.endsWith('.js'))
      .reduce((somme, r) => somme + (r.transferSize || 0), 0);
    return {
      ...window.__vitals,
      ttfb: nav ? nav.responseStart : 0,
      dcl: nav ? nav.domContentLoadedEventEnd : 0,
      transfert,
      js,
      requetes: performance.getEntriesByType('resource').length,
    };
  });

  resultats.push({ route, ...v, duree: Date.now() - debut });
  await page.close();
  await navigateur.close();
}

console.log(`\nCore Web Vitals, ${base}, telephone 390 px, 4G lente, processeur x4\n`);
const l = (s, n) => String(s).padEnd(n);
console.log(l('page', 40) + l('LCP', 20) + l('CLS', 18) + l('TBT', 18) + l('TTFB', 16) + 'poids / JS');
console.log('-'.repeat(126));
for (const r of resultats) {
  console.log(
    l(r.route, 40) +
      l(`${Math.round(r.lcp)} ms (${juger('lcp', r.lcp)})`, 20) +
      l(`${r.cls.toFixed(3)} (${juger('cls', r.cls)})`, 18) +
      l(`${Math.round(r.longtasks)} ms (${juger('tbt', r.longtasks)})`, 18) +
      l(`${Math.round(r.ttfb)} ms`, 16) +
      `${(r.transfert / 1024).toFixed(0)} ko / ${(r.js / 1024).toFixed(0)} ko`
  );
  console.log(
    l('', 40) + `LCP porte par : ${r.lcpElement || '?'}` + (r.clsElement ? `   |   decalage : ${r.clsElement}` : '')
  );
}

const mauvais = resultats.filter(
  (r) => juger('lcp', r.lcp) !== 'bon' || juger('cls', r.cls) !== 'bon' || juger('tbt', r.longtasks) !== 'bon'
);
console.log(
  mauvais.length
    ? `\n${mauvais.length} page(s) hors des seuils verts : ${mauvais.map((m) => m.route).join(', ')}`
    : '\nToutes les pages sont dans les seuils verts.'
);
