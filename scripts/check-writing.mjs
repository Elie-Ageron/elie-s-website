/**
 * Controle les regles d'ecriture du site sur tout le contenu.
 *
 * Ces regles ne sont pas des gouts : ce sont les marqueurs qui font qu'un texte
 * est reconnu comme genere. Elles sont ecrites dans CLAUDE.md, section « Regles
 * de redaction ». Jusqu'ici rien ne les verifiait, donc elles derivaient.
 *
 * Ce qui est controle :
 *
 *   1. Tirets cadratins et demi-cadratins. Interdits partout.
 *   2. Guillemets courbes doubles. Le site utilise les chevrons francais.
 *   3. Le vocabulaire qui trahit une machine, en francais.
 *   4. Les listes a en-tete en gras (« - **Titre** : texte »).
 *   5. Le Title Case dans les titres de CORPS.
 *      ⚠️ Les balises `seoTitleFr` et `seoTitle` sont exclues volontairement :
 *      le Title Case y est la convention du site depuis l'origine, sur tout le
 *      corpus, et la reecrire d'un coup serait un risque SEO sans benefice.
 *
 * Usage : node scripts/check-writing.mjs            (rapport)
 *         node scripts/check-writing.mjs --strict   (sort en erreur si probleme)
 */
import { readdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const racine = join(dirname(fileURLToPath(import.meta.url)), '..');
const strict = process.argv.includes('--strict');

/** Tournures qui signalent un texte ecrit par une machine, en francais. */
const TOURNURES = [
  "il est important de",
  "il est essentiel de",
  "il convient de noter",
  "dans un monde où",
  "à l'ère du",
  "à l'ère numérique",
  "de nos jours",
  "force est de constater",
  "chaque détail compte",
  "plongeons dans",
  "plonger dans",
  "découvrons ensemble",
  "n'hésitez pas à",
  "véritable atout",
  "incontournable pour",
  "en un mot comme en cent",
  "la clé du succès",
  "sans plus attendre",
];

const fichiersContenu = () => {
  const out = [];
  out.push(join(racine, 'src/data/blogPosts.ts'));
  out.push(join(racine, 'src/data/guides.ts'));
  // Les pages locales du pilier reseaux sociaux, ecrites en septembre 2026.
  out.push(join(racine, 'src/data/social-cities.ts'));
  for (const f of readdirSync(join(racine, 'src/data/blog')).filter((f) => f.endsWith('.ts'))) {
    out.push(join(racine, 'src/data/blog', f));
  }
  for (const f of readdirSync(join(racine, 'src/data/cities')).filter((f) => f.endsWith('.ts'))) {
    out.push(join(racine, 'src/data/cities', f));
  }
  return out;
};

/**
 * Vrai si la tournure est citee plutot qu'employee.
 *
 * Le corpus donne souvent ces formules en contre-exemple (« la formule
 * "n'hesitez pas a me recommander" ne produit rien »). Compter la parite des
 * guillemets ne marche pas : le delimiteur de la chaine TypeScript compte lui
 * aussi. On regarde donc simplement si un guillemet ouvre juste avant la
 * tournure, ce qui est le cas de toutes les citations reelles.
 */
const citee = (ligne, debut) => {
  const amorce = ligne.slice(Math.max(0, debut - 3), debut);
  return /["«’']\s*$/.test(amorce);
};

const soucis = [];
const signaler = (type, fichier, ligne, extrait) =>
  soucis.push({ type, ou: `${fichier.replace(racine, '').replace(/\\/g, '/')}:${ligne}`, extrait });

/* ══════════ Les passes ══════════ */

for (const chemin of fichiersContenu()) {
  const lignes = readFileSync(chemin, 'utf8').split('\n');

  lignes.forEach((ligne, i) => {
    const n = i + 1;

    if (/[—–]/.test(ligne)) {
      signaler('TIRET CADRATIN', chemin, n, ligne.trim().slice(0, 90));
    }
    if (/[“”]/.test(ligne)) {
      signaler('GUILLEMET COURBE', chemin, n, ligne.trim().slice(0, 90));
    }

    const bas = ligne.toLowerCase();
    for (const t of TOURNURES) {
      const pos = bas.indexOf(t);
      if (pos === -1) continue;
      // Une tournure citee n'est pas une tournure employee : le corpus donne
      // souvent ces formules en contre-exemple. On ne signale que si elle n'est
      // ni entre guillemets echappes, ni entre chevrons francais.
      if (citee(ligne, pos)) continue;
      signaler('TOURNURE', chemin, n, `« ${t} » dans : ${ligne.trim().slice(0, 70)}`);
      break;
    }

    // Liste a en-tete en gras : « - **Quelque chose** : suite ».
    if (/(?:^|\\n)\s*[-*]\s+\*\*[^*]+\*\*\s*:/.test(ligne)) {
      signaler('LISTE EN GRAS', chemin, n, ligne.trim().slice(0, 90));
    }
  });
}

/* ── Title Case dans les titres de corps ──
 *
 * On ne regarde que `titleFr`, `h2` et `label` : ce sont les titres lus dans la
 * page. `seoTitleFr` et `seoTitle` sont la convention inverse, assumee.
 *
 * Regle : plus de deux mots pleins commencant par une majuscule au milieu d'un
 * titre. Les mots apres un deux-points ou un point comptent comme des debuts.
 */
const MOTS_COURTS = new Set([
  'le', 'la', 'les', 'un', 'une', 'des', 'du', 'de', 'et', 'ou', 'à', 'au', 'aux',
  'en', 'pour', 'par', 'sur', 'sans', 'avec', 'dans', 'que', 'qui', 'quand', 'ce',
  'se', 'sa', 'son', 'ses', 'mon', 'ma', 'mes', 'votre', 'vos', 'ne', 'pas', 'plus',
]);

const estTitleCase = (titre) => {
  const mots = titre.split(/\s+/).filter(Boolean);
  if (mots.length < 4) return false;
  let majuscules = 0;
  mots.slice(1).forEach((mot) => {
    const propre = mot.replace(/^[«"'(]+|[»"',.:;!?)]+$/g, '');
    if (!propre || MOTS_COURTS.has(propre.toLowerCase())) return;
    if (/^[A-ZÀ-ÖØ-Þ]/.test(propre)) majuscules += 1;
  });
  return majuscules >= 3;
};

for (const chemin of fichiersContenu()) {
  const src = readFileSync(chemin, 'utf8');
  for (const m of src.matchAll(/\b(titleFr|h2|label):\s*(?:'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)")/g)) {
    const valeur = (m[2] ?? m[3] ?? '').replace(/\\'/g, "'");
    if (estTitleCase(valeur)) {
      const ligne = src.slice(0, m.index).split('\n').length;
      signaler('TITRE EN TITLE CASE', chemin, ligne, valeur.slice(0, 90));
    }
  }
}

/* ══════════ Rapport ══════════ */

console.log(`${fichiersContenu().length} fichier(s) de contenu controle(s).`);

if (!soucis.length) {
  console.log('\nAucun marqueur d’ecriture automatique.');
  process.exit(0);
}

const groupes = {};
for (const s of soucis) (groupes[s.type] ??= []).push(s);

for (const [type, liste] of Object.entries(groupes)) {
  console.log(`\n${type} (${liste.length})`);
  for (const s of liste.slice(0, 20)) console.log(`   ${s.ou}  ${s.extrait}`);
  if (liste.length > 20) console.log(`   ... et ${liste.length - 20} de plus`);
}

console.log(`\n${soucis.length} signalement(s).`);
if (strict) process.exit(1);
