/**
 * Cherche les paragraphes trop longs sur telephone, et les chapos de hero trop
 * bavards.
 *
 * 🔴 **Ecrit le 12 octobre 2026.** Elie, sur son telephone : *« c'est vraiment
 * des gros textes partout, c'est dur a lire. »* Mesure du jour, a 390 px : les
 * quinze pages de villes portaient chacune quatorze paragraphes de cinq a neuf
 * lignes, le chapo du hero de `/reseaux-sociaux` en faisait sept, et l'accueil
 * mesurait vingt ecrans. Aucun controle ne le voyait : `check:overflow` regarde
 * la largeur, `check:hierarchie` la taille des titres, `check:writing` les
 * tournures. **La longueur d'un paragraphe ne se lit que dans les lignes
 * rendues**, a la largeur d'un telephone.
 *
 * Deux seuils, tires de ce qu'Elie a valide le meme jour :
 *  - un paragraphe ne depasse pas 4 lignes a 390 px. Un paragraphe decoupe par
 *    `ParagrapheDecoupe` est juge sur son plus long morceau ;
 *  - le chapo d'un hero (le texte entre le `h1` et le premier bouton) ne depasse
 *    pas 30 mots.
 *
 * Ce controle signale, il ne bloque rien : une phrase unique de cinq lignes ne
 * se decoupe pas, et les citations des avis clients ne se raccourcissent pas.
 *
 * Usage : node scripts/check-densite.mjs [/route ...] [--base http://localhost:8080]
 * Demande le serveur de dev allume.
 */
import { existsSync } from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const puppeteer = require('puppeteer');

const args = process.argv.slice(2);
const i = args.indexOf('--base');
const base = i === -1 ? 'http://localhost:8080' : args[i + 1];
const routesDemandees = args.filter((a, j) => a.startsWith('/') && args[j - 1] !== '--base');

const LIGNES_MAX = 5;
const MOTS_HERO_MAX = 30;

/** Une page de chaque gabarit, plus les pages qu'on vend. */
const PAGES = routesDemandees.length
  ? routesDemandees
  : [
      '/',
      '/reseaux-sociaux',
      '/creation-site-web',
      '/services',
      '/audit-gratuit',
      '/a-propos',
      '/portfolio',
      '/contact',
      '/creation-site-web-albertville',
      '/web-designer-savoie',
      '/community-manager-albertville',
      '/gestion-reseaux-sociaux-savoie',
      '/fiche-google-business',
      '/guides/visibilite-google-locale',
      '/blog/restaurant-reseaux-sociaux',
    ];

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
let total = 0;

for (const route of PAGES) {
  const page = await navigateur.newPage();
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1, isMobile: true, hasTouch: true });
  // Le bandeau cookies n'a rien a faire dans une mesure de texte.
  await page.evaluateOnNewDocument(() => {
    try {
      localStorage.setItem('elie-cookies', JSON.stringify({ choix: 'refuse', date: Date.now() }));
    } catch {
      /* stockage bloque : le bandeau s'affichera, la mesure reste juste */
    }
  });
  try {
    await page.goto(base + route, { waitUntil: 'networkidle0', timeout: 90000 });
  } catch {
    console.log(`${route} : la page ne repond pas`);
    await page.close();
    continue;
  }
  // Les sections apparaissent au defilement : on descend une fois.
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 80));
    }
    window.scrollTo(0, 0);
  });

  const r = await page.evaluate((LIGNES_MAX) => {
    const main = document.querySelector('main') || document.body;
    const visible = (el) => {
      if (el.closest('[aria-hidden="true"], footer, [data-state="closed"], blockquote, figure')) return false;
      const s = getComputedStyle(el);
      if (s.display === 'none' || s.visibility === 'hidden') return false;
      const b = el.getBoundingClientRect();
      return b.width > 0 && b.height > 0;
    };
    const lignesDe = (el, lh) =>
      getComputedStyle(el).display === 'block'
        ? Math.round(el.getBoundingClientRect().height / lh)
        : el.getClientRects().length;

    const longs = [];
    for (const p of main.querySelectorAll('p')) {
      if (!visible(p)) continue;
      const s = getComputedStyle(p);
      const lh = parseFloat(s.lineHeight) || parseFloat(s.fontSize) * 1.5;
      const morceaux = [...p.children].filter((c) => c.tagName === 'SPAN' && getComputedStyle(c).display === 'block');
      const lignes = morceaux.length
        ? Math.max(...[p.firstElementChild, ...morceaux].map((c) => lignesDe(c, lh)))
        : Math.round(p.getBoundingClientRect().height / lh);
      if (lignes > LIGNES_MAX) {
        longs.push({ lignes, debut: p.innerText.replace(/\s+/g, ' ').trim().slice(0, 70) });
      }
    }

    // Le chapo du hero : le texte des paragraphes entre le h1 et le premier bouton ou lien d'action.
    const h1 = main.querySelector('h1');
    let motsHero = 0;
    if (h1) {
      const section = h1.closest('section') || h1.parentElement;
      const action = section && [...section.querySelectorAll('a, button')].find(
        (el) => el.compareDocumentPosition(h1) & Node.DOCUMENT_POSITION_PRECEDING,
      );
      for (const p of section ? section.querySelectorAll('p') : []) {
        const apresTitre = p.compareDocumentPosition(h1) & Node.DOCUMENT_POSITION_PRECEDING;
        const avantAction = !action || p.compareDocumentPosition(action) & Node.DOCUMENT_POSITION_FOLLOWING;
        // Le texte d'aide d'un formulaire n'est pas un chapo (`/audit-gratuit`).
        if (apresTitre && avantAction && visible(p) && !p.closest('form')) motsHero += p.innerText.trim().split(/\s+/).length;
      }
    }
    return { longs, motsHero, ecrans: +(document.documentElement.scrollHeight / 844).toFixed(1) };
  }, LIGNES_MAX);

  const heroTrop = r.motsHero > MOTS_HERO_MAX;
  total += r.longs.length + (heroTrop ? 1 : 0);
  console.log(`${route} : ${r.ecrans} ecrans, chapo ${r.motsHero} mots${heroTrop ? ' (trop long)' : ''}, ${r.longs.length} paragraphe(s) de plus de ${LIGNES_MAX} lignes`);
  for (const l of r.longs) console.log(`    ${l.lignes} lignes : ${l.debut}`);
  await page.close();
}

await navigateur.close();
console.log(total ? `\n${total} signalement(s). A juger un par un : une phrase unique ne se decoupe pas.` : '\nAucun paragraphe trop long.');
