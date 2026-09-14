/**
 * Controle le HTML reellement produit, pas les sources.
 *
 * Les autres controles lisent les donnees. Celui-ci ouvre les 179 fichiers de
 * `dist/` et verifie ce qu'un robot recevra. C'est le seul qui aurait attrape
 * le bug du 13 septembre 2026, ou les 179 URL renvoyaient le meme HTML avec un
 * canonical pointant vers l'accueil.
 *
 * Ce qu'il verifie, page par page :
 *
 *   - exactement un <title>, non vide, sous 60 caracteres
 *   - exactement une meta description, sous 160 caracteres
 *   - exactement un canonical, et il pointe sur la page elle-meme
 *   - exactement un <h1>
 *   - au moins 10 liens internes crawlables
 *   - le JSON-LD parse sans erreur
 *   - titres et descriptions uniques sur tout le site
 *
 * Usage : node scripts/check-build-seo.mjs   (apres le build et prerender-head)
 */
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const racine = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(racine, 'dist');
const BASE = 'https://elieageron.com';

if (!existsSync(dist)) {
  console.error('dist/ est absent. Lancer `npm run build` puis `npm run prerender:head`.');
  process.exit(1);
}

/** Tous les index.html de dist, avec leur route. */
const pages = [];
const parcourir = (dossier) => {
  for (const entree of readdirSync(dossier)) {
    const complet = join(dossier, entree);
    if (statSync(complet).isDirectory()) {
      if (entree === 'assets' || entree === 'icons' || entree === 'blog' && dossier.endsWith('public')) {
        // on ne saute que les dossiers d'actifs
      }
      parcourir(complet);
    } else if (entree === 'index.html') {
      const rel = relative(dist, dossier).replace(/\\/g, '/');
      pages.push({ route: rel ? `/${rel}` : '/', fichier: complet });
    }
  }
};
parcourir(dist);

const soucis = [];
const ajouter = (route, quoi, detail = '') => soucis.push({ route, quoi, detail });

const titres = new Map();
const descriptions = new Map();

const compter = (html, motif) => (html.match(motif) || []).length;

for (const { route, fichier } of pages) {
  const html = readFileSync(fichier, 'utf8');

  /* ── title ── */
  const titresPage = [...html.matchAll(/<title>([\s\S]*?)<\/title>/g)].map((m) => m[1].trim());
  if (titresPage.length !== 1) ajouter(route, 'TITLE', `${titresPage.length} balises title`);
  else {
    const t = titresPage[0];
    if (!t) ajouter(route, 'TITLE', 'vide');
    else if (t.length > 60) ajouter(route, 'TITLE LONG', `${t.length} car.`);
    else {
      if (!titres.has(t)) titres.set(t, []);
      titres.get(t).push(route);
    }
  }

  /* ── description ── */
  const descs = [...html.matchAll(/<meta[^>]+name="description"[^>]+content="([^"]*)"/g)].map((m) => m[1]);
  if (descs.length !== 1) ajouter(route, 'DESCRIPTION', `${descs.length} balises`);
  else {
    const d = descs[0];
    if (!d) ajouter(route, 'DESCRIPTION', 'vide');
    else if (d.length > 160) ajouter(route, 'DESC LONGUE', `${d.length} car.`);
    else {
      if (!descriptions.has(d)) descriptions.set(d, []);
      descriptions.get(d).push(route);
    }
  }

  /* ── canonical ── */
  const canons = [...html.matchAll(/<link[^>]+rel="canonical"[^>]+href="([^"]*)"/g)].map((m) => m[1]);
  if (canons.length !== 1) ajouter(route, 'CANONICAL', `${canons.length} balises`);
  else {
    const attendu = route === '/' ? `${BASE}/` : `${BASE}${route}`;
    if (canons[0] !== attendu) ajouter(route, 'CANONICAL FAUX', `pointe sur ${canons[0]}`);
  }

  /* ── h1 ── */
  const h1 = compter(html, /<h1[\s>]/g);
  if (h1 !== 1) ajouter(route, 'H1', `${h1} balises h1`);

  /* ── liens internes crawlables ── */
  const liens = new Set(
    [...html.matchAll(/href="(\/[^"#]*)"/g)]
      .map((m) => m[1])
      .filter((h) => !/\.(png|jpg|jpeg|webp|svg|css|js|json|xml|txt|ico|woff2?)$/i.test(h))
      .filter((h) => !h.startsWith('/assets/') && !h.startsWith('/icons/'))
  );
  if (liens.size < 10) ajouter(route, 'PEU DE LIENS', `${liens.size} liens internes`);

  /* ── JSON-LD ── */
  for (const m of html.matchAll(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(m[1]);
    } catch (e) {
      ajouter(route, 'JSON-LD INVALIDE', e.message.slice(0, 70));
    }
  }
}

/* ── Doublons ── */
for (const [t, routes] of titres) {
  if (routes.length > 1) ajouter(routes.join(' + '), 'TITLE EN DOUBLE', t.slice(0, 60));
}
for (const [d, routes] of descriptions) {
  if (routes.length > 1) ajouter(routes.join(' + '), 'DESC EN DOUBLE', d.slice(0, 60));
}

/* ── Rapport ── */
console.log(`${pages.length} page(s) HTML controlee(s) dans dist/.`);

if (!soucis.length) {
  console.log('\nTout est conforme : un title, une description, un canonical juste, un h1 et le maillage sur chaque page.');
  process.exit(0);
}

const groupes = {};
for (const s of soucis) (groupes[s.quoi] ??= []).push(s);
for (const [quoi, liste] of Object.entries(groupes)) {
  console.log(`\n${quoi} (${liste.length})`);
  for (const s of liste.slice(0, 15)) console.log(`   ${s.route}  ${s.detail}`);
  if (liste.length > 15) console.log(`   ... et ${liste.length - 15} de plus`);
}
console.log(`\n${soucis.length} probleme(s).`);
process.exit(1);
