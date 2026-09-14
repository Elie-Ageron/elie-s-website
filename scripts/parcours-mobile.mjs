/**
 * Le parcours d'un visiteur sur telephone, en texte.
 *
 * Les captures d'ecran servent a juger la mise en page. Pour une relecture
 * aveugle il faut autre chose : ce que la personne lit, dans l'ordre exact ou
 * ca lui arrive sur un ecran de 390 px, avec l'endroit ou tombe chaque ecran.
 *
 * Le script ouvre les pages en 390 x 844, releve chaque bloc de texte visible
 * avec sa position verticale, et ecrit le tout dans `.captures/parcours-mobile.txt`.
 * Les relecteurs travaillent sur ce fichier, sans voir le design : s'ils ne
 * comprennent pas l'offre en lisant ca, personne ne la comprendra en survolant.
 *
 * Usage : node scripts/parcours-mobile.mjs [route ...]
 */
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { join } from 'node:path';

const require = createRequire(import.meta.url);
const puppeteer = require('puppeteer');

const base = 'http://localhost:8080';
const args = process.argv.slice(2);
/* Meme rattrapage que dans captures.mjs : Git Bash reecrit « /route » en chemin
   Windows avant que node ne le voie. */
const routes = (args.length ? args : ['/', '/reseaux-sociaux', '/audit-gratuit']).map((a) => {
  if (a === '/') return '/';
  if (a.startsWith('/') && !a.includes(':')) return a;
  if (/^[A-Za-z]:[\/]/.test(a) || a.includes('/Git/')) return '/' + a.split(/[\/]/).pop();
  return '/' + a.replace(/^\/+/, '');
});

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

const HAUTEUR = 844;
const navigateur = await puppeteer.launch({ executablePath, headless: 'new', args: ['--no-sandbox'] });
const sorties = [];

for (const route of routes) {
  const page = await navigateur.newPage();
  await page.setViewport({ width: 390, height: HAUTEUR, deviceScaleFactor: 1 });
  await page.goto(base + route, { waitUntil: 'networkidle0', timeout: 60000 });

  // Les sections apparaissent au defilement : on descend une fois pour les
  // declencher, sinon la moitie du texte est encore a `opacity: 0`.
  await page.evaluate(async () => {
    const pas = window.innerHeight * 0.8;
    for (let y = 0; y < document.body.scrollHeight; y += pas) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 500));
  });

  const blocs = await page.evaluate(() => {
    const interessants = 'h1,h2,h3,p,li,button,a,label,input,summary,blockquote,figcaption';
    const vus = new Set();
    const sortie = [];
    for (const el of document.querySelectorAll(interessants)) {
      // On ignore ce qui est masque, decoratif, ou deja pris par un parent.
      if (el.closest('[aria-hidden="true"]')) continue;
      /* 🔴 Un conteneur dont le texte est deja porte par ses enfants faisait
         apparaitre chaque service deux fois de suite dans le releve : une fois
         par le `li`, une fois par le `h3` et le `p` qu'il contient. Une
         relectrice a cru a un bug d'affichage et l'a signale comme tel. On
         saute donc tout element qui contient lui-meme un bloc de texte. */
      if (el.querySelector('h1,h2,h3,h4,p,li,blockquote')) continue;
      const style = getComputedStyle(el);
      if (style.display === 'none' || style.visibility === 'hidden') continue;
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 && rect.height === 0) continue;

      let texte = '';
      if (el.tagName === 'INPUT') {
        texte = `[champ] ${el.placeholder || el.getAttribute('aria-label') || el.type}`;
      } else {
        texte = (el.innerText || '').trim().replace(/\s+/g, ' ');
      }
      if (!texte || texte.length < 2) continue;
      if (vus.has(texte)) continue;
      vus.add(texte);

      const y = Math.round(rect.top + window.scrollY);
      const role =
        el.tagName === 'H1' ? 'TITRE DE PAGE'
        : el.tagName === 'H2' ? 'TITRE'
        : el.tagName === 'H3' ? 'sous-titre'
        : el.tagName === 'BUTTON' ? '[bouton]'
        : el.tagName === 'A' ? '[lien]'
        : el.tagName === 'INPUT' ? ''
        : el.tagName === 'LABEL' ? '[etiquette]'
        : el.tagName === 'LI' ? '-'
        : '';
      sortie.push({ y, role, texte });
    }
    return sortie.sort((a, b) => a.y - b.y);
  });

  const lignes = [`\n${'='.repeat(70)}\nPAGE ${route}  (telephone, 390 px de large)\n${'='.repeat(70)}`];
  let ecranCourant = -1;
  for (const bloc of blocs) {
    const ecran = Math.floor(bloc.y / HAUTEUR) + 1;
    if (ecran !== ecranCourant) {
      ecranCourant = ecran;
      lignes.push(`\n----- ecran ${ecran} (il faut faire defiler ${ecran - 1} fois pour y arriver) -----`);
    }
    lignes.push(`${bloc.role} ${bloc.texte}`.trim());
  }
  sorties.push(lignes.join('\n'));
  console.log(`${route} : ${blocs.length} blocs, ${Math.ceil(blocs[blocs.length - 1].y / HAUTEUR)} ecrans`);
  await page.close();
}

await navigateur.close();
const dossier = join(process.cwd(), '.captures');
if (!existsSync(dossier)) mkdirSync(dossier, { recursive: true });
const fichier = join(dossier, 'parcours-mobile.txt');
writeFileSync(fichier, sorties.join('\n'), 'utf8');
console.log(`Ecrit dans ${fichier}`);
