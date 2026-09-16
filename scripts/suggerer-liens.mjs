/**
 * Pour chaque article orphelin, propose les articles qui devraient le citer.
 *
 * Un article vers lequel rien ne pointe ne recoit aucune autorite interne. Il
 * existe dans le sitemap, il est explore, et il reste au fond. Le releve du
 * 16 septembre 2026 en comptait vingt-cinq sur cent trente-neuf.
 *
 * Le classement des candidats se fait sur trois signaux, du plus fort au plus
 * faible : etiquettes partagees, meme categorie, meme pilier. Un candidat qui
 * a deja quatre `related` est ecarte : au-dela, la liste ne s'affiche plus.
 *
 * ⚠️ Ce script propose, il n'ecrit rien. Un lien interne doit avoir un sens
 * editorial, et ca, aucune heuristique ne le decide.
 *
 * Usage : node scripts/suggerer-liens.mjs
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const racine = join(dirname(fileURLToPath(import.meta.url)), '..');
const lire = (p) => readFileSync(join(racine, p), 'utf8');

const fichiers = readdirSync(join(racine, 'src/data/blog'))
  .filter((f) => f.startsWith('posts-'))
  .map((f) => `src/data/blog/${f}`);

const articles = new Map();
for (const fichier of fichiers) {
  const src = lire(fichier);
  const reperes = [...src.matchAll(/\bslug:\s*'([^']+)'/g)];
  reperes.forEach((m, i) => {
    const bloc = src.slice(m.index, reperes[i + 1]?.index ?? src.length);
    const corps = bloc.slice(bloc.indexOf('contentFr:'));
    articles.set(m[1], {
      slug: m[1],
      fichier,
      titre: (bloc.match(/titleFr:\s*(['"])((?:\\.|(?!\1).)*)\1/) ?? [])[2] ?? m[1],
      categorie: (bloc.match(/categorySlug:\s*'([^']+)'/) ?? [])[1] ?? '?',
      pilier: (bloc.match(/pillar:\s*'([^']+)'/) ?? [])[1] ?? null,
      tags: [...((bloc.match(/tags:\s*\[([^\]]*)\]/) ?? [])[1] ?? '').matchAll(/["']([^"']+)["']/g)].map(
        (x) => x[1]
      ),
      related: [...((bloc.match(/related:\s*\[([^\]]*)\]/) ?? [])[1] ?? '').matchAll(/'([^']+)'/g)].map(
        (x) => x[1]
      ),
      liensCorps: [...corps.matchAll(/\]\((\/blog\/[^)\s#]+)/g)].map((x) => x[1].slice('/blog/'.length)),
    });
  });
}

const entrants = new Map([...articles.keys()].map((s) => [s, new Set()]));
for (const a of articles.values()) {
  for (const s of [...a.related, ...a.liensCorps]) {
    if (entrants.has(s) && s !== a.slug) entrants.get(s).add(a.slug);
  }
}

const orphelins = [...entrants.entries()].filter(([, e]) => e.size === 0).map(([s]) => articles.get(s));

console.log(`\n${orphelins.length} article(s) sans aucun lien entrant.\n`);

for (const o of orphelins) {
  const candidats = [...articles.values()]
    .filter((c) => c.slug !== o.slug && !c.related.includes(o.slug) && c.related.length < 4)
    .map((c) => {
      const communs = c.tags.filter((t) => o.tags.includes(t));
      const score = communs.length * 3 + (c.categorie === o.categorie ? 2 : 0) + (c.pilier === o.pilier ? 1 : 0);
      return { c, score, communs };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);

  console.log(`### ${o.slug}`);
  console.log(`    ${o.titre}`);
  console.log(`    categorie ${o.categorie} | etiquettes ${o.tags.join(', ') || '(aucune)'}`);
  if (!candidats.length) {
    console.log('    aucun candidat proche, a rattacher a la main');
  }
  for (const { c, score, communs } of candidats) {
    console.log(
      `    [${score}] ${c.slug}  (${c.related.length} related)  ${communs.length ? 'communs: ' + communs.join(', ') : 'meme categorie'}`
    );
  }
  console.log('');
}
