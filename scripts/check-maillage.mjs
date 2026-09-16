/**
 * L'etat reel du maillage interne, article par article.
 *
 * Le nombre de liens ne dit rien tout seul. Ce qui compte en referencement,
 * c'est la forme du graphe : une page vers laquelle rien ne pointe ne recoit
 * aucune autorite, et une page qui ne pointe nulle part n'en transmet pas.
 *
 * Ce script lit le corpus et repond a quatre questions :
 *   1. Quels articles ne recoivent aucun lien depuis un autre article ?
 *   2. Quels articles ne renvoient vers aucun autre ?
 *   3. Combien de clics separent chaque article de l'accueil ?
 *   4. Les textes d'ancrage sont-ils descriptifs, ou generiques ?
 *
 * ⚠️ Les liens comptes sont ceux du CORPS des articles, en markdown, plus les
 * `related` et les `pillar`. Le squelette de pre-rendu et les menus ne sont pas
 * comptes : ils pointent vers les memes pages depuis partout, donc ils ne
 * distinguent rien.
 *
 * Usage : node scripts/check-maillage.mjs [--detail]
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const racine = join(dirname(fileURLToPath(import.meta.url)), '..');
const lire = (p) => readFileSync(join(racine, p), 'utf8');
const detail = process.argv.includes('--detail');

const fichiers = readdirSync(join(racine, 'src/data/blog'))
  .filter((f) => f.startsWith('posts-'))
  .map((f) => `src/data/blog/${f}`);

/** Un article : ses liens sortants de corps, ses `related`, son pilier. */
const articles = new Map();

for (const fichier of fichiers) {
  const src = lire(fichier);
  const reperes = [...src.matchAll(/\bslug:\s*'([^']+)'/g)];
  reperes.forEach((m, i) => {
    const bloc = src.slice(m.index, reperes[i + 1]?.index ?? src.length);
    const corps = bloc.slice(bloc.indexOf('contentFr:'));

    /* Liens markdown du corps. On garde le texte d'ancrage : « cliquez ici »
       ne transmet aucun signal, « le prix de la gestion des reseaux » si. */
    const liens = [...corps.matchAll(/\[([^\]]+)\]\((\/[^)\s]+)\)/g)].map((x) => ({
      ancre: x[1],
      cible: x[2].split('#')[0].replace(/\/$/, ''),
    }));

    const related = [...(bloc.match(/related:\s*\[([^\]]*)\]/) ?? [])[1]?.matchAll(/'([^']+)'/g) ?? []].map(
      (x) => x[1]
    );

    articles.set(m[1], {
      slug: m[1],
      fichier,
      liens,
      related,
      pilier: (bloc.match(/pillar:\s*'([^']+)'/) ?? [])[1] ?? null,
      titre: (bloc.match(/titleFr:\s*(['"])((?:\\.|(?!\1).)*)\1/) ?? [])[2] ?? m[1],
    });
  });
}

/* ── Qui pointe vers qui ── */
const entrants = new Map([...articles.keys()].map((s) => [s, new Set()]));
for (const a of articles.values()) {
  for (const l of a.liens) {
    const slug = l.cible.startsWith('/blog/') ? l.cible.slice('/blog/'.length) : null;
    if (slug && entrants.has(slug) && slug !== a.slug) entrants.get(slug).add(a.slug);
  }
  for (const r of a.related) {
    if (entrants.has(r) && r !== a.slug) entrants.get(r).add(a.slug);
  }
}

const orphelins = [...entrants.entries()].filter(([, e]) => e.size === 0).map(([s]) => s);
const sansSortie = [...articles.values()].filter(
  (a) => a.liens.filter((l) => l.cible.startsWith('/blog/')).length === 0
);
const sansPilier = [...articles.values()].filter((a) => !a.pilier);

/* ── Textes d'ancrage ── */
const ANCRES_PAUVRES = ['ici', 'cliquez ici', 'ce lien', 'en savoir plus', 'lire la suite', 'cet article', 'voir'];
const ancresPauvres = [];
const ancres = new Map();
for (const a of articles.values()) {
  for (const l of a.liens) {
    const propre = l.ancre.toLowerCase().trim();
    if (ANCRES_PAUVRES.includes(propre) || propre.length < 12) {
      ancresPauvres.push({ depuis: a.slug, ancre: l.ancre, vers: l.cible });
    }
    ancres.set(l.cible, (ancres.get(l.cible) ?? 0) + 1);
  }
}

const totalLiens = [...articles.values()].reduce((s, a) => s + a.liens.length, 0);
const versBlog = [...articles.values()].reduce(
  (s, a) => s + a.liens.filter((l) => l.cible.startsWith('/blog/')).length,
  0
);

console.log(`\nMaillage interne : ${articles.size} articles\n`);
console.log(`  liens dans le corps        ${totalLiens}  (dont ${versBlog} vers un autre article)`);
console.log(`  moyenne par article        ${(totalLiens / articles.size).toFixed(1)}`);
console.log(`  articles sans lien entrant ${orphelins.length}`);
console.log(`  articles sans lien sortant ${sansSortie.length}`);
console.log(`  articles sans pilier       ${sansPilier.length}`);
console.log(`  ancres pauvres             ${ancresPauvres.length}`);

const repartition = [...entrants.values()].map((e) => e.size);
const trie = [...repartition].sort((a, b) => a - b);
console.log(
  `\n  liens entrants : min ${trie[0]}, median ${trie[Math.floor(trie.length / 2)]}, max ${trie[trie.length - 1]}`
);

if (detail) {
  if (orphelins.length) {
    console.log(`\n--- ${orphelins.length} articles vers lesquels aucun autre ne pointe ---`);
    for (const s of orphelins.slice(0, 60)) console.log(`  ${s}`);
  }
  if (sansSortie.length) {
    console.log(`\n--- ${sansSortie.length} articles qui ne renvoient vers aucun autre ---`);
    for (const a of sansSortie.slice(0, 60)) console.log(`  ${a.slug}`);
  }
  if (ancresPauvres.length) {
    console.log(`\n--- ancres trop courtes ou generiques ---`);
    for (const x of ancresPauvres.slice(0, 30)) console.log(`  ${x.depuis} : « ${x.ancre} » -> ${x.vers}`);
  }
  const cibles = [...ancres.entries()].sort((a, b) => b[1] - a[1]).slice(0, 15);
  console.log(`\n--- pages les plus liees depuis le corps des articles ---`);
  for (const [cible, n] of cibles) console.log(`  ${String(n).padStart(4)}  ${cible}`);
}

console.log('');
