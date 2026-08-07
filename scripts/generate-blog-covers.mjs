/**
 * Genere les visuels de partage des articles et des guides.
 *
 * Parti pris graphique : composition editoriale imprimee. Fond papier, filet
 * de couleur, grille de colonnes en trait fin, titre typographique, et une
 * marque geometrique choisie de facon deterministe a partir du slug.
 * Aucun degrade diffus, aucune sphere lumineuse, aucune photo de synthese :
 * ce sont precisement les signatures d'une image generee automatiquement.
 *
 * Usage : node scripts/generate-blog-covers.mjs
 */

import { readFileSync, readdirSync, mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'public', 'blog', 'covers');

const W = 1200;
const H = 630;

// Palette alignee sur les variables CSS du site (mode clair).
const PAPER = '#FAF8F6';
const INK = '#292522';
const MUTED = '#6B6560';
const ROSE = '#C4396A';
const RULE = '#E4DEDA';

const FONT = 'Segoe UI, Helvetica Neue, Arial, sans-serif';

/** Hash stable : le meme slug donne toujours la meme composition. */
const hash = (str) => {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
};

const escapeXml = (s) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

/** Retour a la ligne approximatif, calibre pour Segoe UI en demi-gras. */
const wrap = (text, fontSize, maxWidth, maxLines) => {
  const perChar = fontSize * 0.5;
  const maxChars = Math.floor(maxWidth / perChar);
  const words = text.split(/\s+/);
  const lines = [];
  let current = '';

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length <= maxChars) {
      current = candidate;
    } else {
      if (current) lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);

  if (lines.length > maxLines) {
    const kept = lines.slice(0, maxLines);
    kept[maxLines - 1] = `${kept[maxLines - 1].replace(/[\s,.:;]+$/, '')}...`;
    return kept;
  }
  return lines;
};

/**
 * Six marques geometriques. Elles occupent le meme gabarit et se lisent comme
 * une famille, ce qui donne une serie coherente plutot qu'une image par article.
 */
const marks = [
  // Arcs concentriques
  (x, y, r) =>
    [0.42, 0.66, 0.9, 1]
      .map(
        (k, i) =>
          `<path d="M ${x - r * k} ${y} A ${r * k} ${r * k} 0 0 1 ${x + r * k} ${y}" fill="none" stroke="${
            i === 1 ? ROSE : RULE
          }" stroke-width="${i === 1 ? 10 : 6}" stroke-linecap="square"/>`
      )
      .join(''),
  // Barres empilees
  (x, y, r) =>
    [0.35, 0.6, 0.85, 1, 0.7]
      .map(
        (k, i) =>
          `<rect x="${x - r}" y="${y - r + i * (r * 0.42)}" width="${r * 2 * k}" height="${r * 0.2}" fill="${
            i === 2 ? ROSE : RULE
          }"/>`
      )
      .join(''),
  // Trame de points
  (x, y, r) => {
    const cells = [];
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        const cx = x - r + (i * (2 * r)) / 5;
        const cy = y - r + (j * (2 * r)) / 5;
        const on = (i + j) % 4 === 0;
        cells.push(`<circle cx="${cx}" cy="${cy}" r="${on ? 9 : 5}" fill="${on ? ROSE : RULE}"/>`);
      }
    }
    return cells.join('');
  },
  // Hachures diagonales couvrant tout le carre, decoupees par un masque
  (x, y, r) => {
    const id = `hatch-${Math.round(x)}-${Math.round(y)}`;
    const lines = [];
    for (let i = -10; i <= 10; i++) {
      const off = i * (r / 5);
      lines.push(
        `<line x1="${x - r + off}" y1="${y + r}" x2="${x + r + off}" y2="${y - r}" stroke="${
          i === 0 ? ROSE : RULE
        }" stroke-width="${i === 0 ? 10 : 5}"/>`
      );
    }
    return (
      `<defs><clipPath id="${id}"><rect x="${x - r}" y="${y - r}" width="${2 * r}" height="${
        2 * r
      }"/></clipPath></defs>` +
      `<g clip-path="url(#${id})">${lines.join('')}</g>` +
      `<rect x="${x - r}" y="${y - r}" width="${2 * r}" height="${
        2 * r
      }" fill="none" stroke="${INK}" stroke-width="5"/>`
    );
  },
  // Carres emboites
  (x, y, r) =>
    [1, 0.72, 0.44, 0.18]
      .map(
        (k, i) =>
          `<rect x="${x - r * k}" y="${y - r * k}" width="${2 * r * k}" height="${2 * r * k}" fill="${
            i === 3 ? ROSE : 'none'
          }" stroke="${i === 1 ? ROSE : RULE}" stroke-width="${i === 1 ? 9 : 5}"/>`
      )
      .join(''),
  // Cercle coupe
  (x, y, r) =>
    `<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="${RULE}" stroke-width="6"/>` +
    `<path d="M ${x} ${y - r} A ${r} ${r} 0 0 1 ${x} ${y + r} Z" fill="${ROSE}"/>` +
    `<line x1="${x - r * 1.25}" y1="${y}" x2="${x + r * 1.25}" y2="${y}" stroke="${INK}" stroke-width="5"/>`,
];

const buildSvg = ({ title, category, kind }) => {
  const seed = hash(title + category);
  const mark = marks[seed % marks.length];

  // Le titre part sous le label de categorie et doit tenir au dessus du filet
  // de pied de page. On descend la taille jusqu'a ce que le bloc rentre.
  const TITLE_TOP = 232;
  const TITLE_MAX_BOTTOM = 500;
  const TITLE_WIDTH = 620;

  let titleSize = 68;
  let lines = wrap(title, titleSize, TITLE_WIDTH, 4);
  for (const size of [68, 60, 52, 46]) {
    const candidate = wrap(title, size, TITLE_WIDTH, 4);
    const blockBottom = TITLE_TOP + (candidate.length - 1) * size * 1.14;
    if (blockBottom <= TITLE_MAX_BOTTOM && !candidate[candidate.length - 1].endsWith('...')) {
      titleSize = size;
      lines = candidate;
      break;
    }
    titleSize = size;
    lines = candidate;
  }
  const titleTop = TITLE_TOP;

  // Grille de colonnes, tres discrete, qui ancre la composition.
  const grid = Array.from({ length: 11 }, (_, i) => {
    const x = 80 + ((i + 1) * (W - 160)) / 12;
    return `<line x1="${x}" y1="0" x2="${x}" y2="${H}" stroke="${RULE}" stroke-width="1" opacity="0.55"/>`;
  }).join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${PAPER}"/>
  ${grid}
  <rect x="0" y="0" width="${W}" height="10" fill="${ROSE}"/>

  <g transform="translate(920, 330)">${mark(0, 0, 132)}</g>

  <text x="80" y="86" font-family="${FONT}" font-size="20" font-weight="600" letter-spacing="3.4" fill="${MUTED}">ELIEAGERON.COM</text>
  <text x="80" y="150" font-family="${FONT}" font-size="22" font-weight="700" letter-spacing="2.6" fill="${ROSE}">${escapeXml(
    category.toUpperCase()
  )}</text>

  ${lines
    .map(
      (line, i) =>
        `<text x="80" y="${titleTop + i * titleSize * 1.14}" font-family="${FONT}" font-size="${titleSize}" font-weight="600" fill="${INK}">${escapeXml(
          line
        )}</text>`
    )
    .join('\n  ')}

  <line x1="80" y1="${H - 108}" x2="${W - 80}" y2="${H - 108}" stroke="${RULE}" stroke-width="2"/>
  <text x="80" y="${H - 64}" font-family="${FONT}" font-size="24" font-weight="600" fill="${INK}">Elie Ageron</text>
  <text x="80" y="${H - 34}" font-family="${FONT}" font-size="20" fill="${MUTED}">Albertville, Savoie</text>
  <text x="${W - 80}" y="${H - 34}" text-anchor="end" font-family="${FONT}" font-size="20" font-weight="600" letter-spacing="2" fill="${MUTED}">${
    kind === 'guide' ? 'GUIDE' : 'ARTICLE'
  }</text>
</svg>`;
};

/** Extraction des articles depuis les sources TypeScript, sans compilation. */
const collectPosts = () => {
  const files = [
    join(root, 'src', 'data', 'blogPosts.ts'),
    ...readdirSync(join(root, 'src', 'data', 'blog'))
      .filter((f) => f.startsWith('posts-'))
      .map((f) => join(root, 'src', 'data', 'blog', f)),
  ];

  const posts = [];
  for (const file of files) {
    const src = readFileSync(file, 'utf8');
    const re = /slug:\s*'([^']+)',[\s\S]{0,4000}?titleFr:\s*(['"`])([\s\S]*?)\2,[\s\S]{0,6000}?categoryFr:\s*'([^']+)'/g;
    let m;
    while ((m = re.exec(src))) {
      posts.push({
        slug: m[1],
        title: m[3].replace(/\\'/g, "'").replace(/\\"/g, '"'),
        category: m[4],
        kind: 'article',
      });
    }
  }
  return posts;
};

const collectGuides = () => {
  const src = readFileSync(join(root, 'src', 'data', 'guides.ts'), 'utf8');
  const re = /slug:\s*'([^']+)',[\s\S]{0,600}?kicker:\s*'([^']+)',\s*\n\s*title:\s*(['"])([\s\S]*?)\3,/g;
  const guides = [];
  let m;
  while ((m = re.exec(src))) {
    guides.push({ slug: `guides-${m[1]}`, title: m[4], category: m[2], kind: 'guide' });
  }
  return guides;
};

const run = async () => {
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

  const items = [...collectPosts(), ...collectGuides()];
  const seen = new Set();
  let written = 0;

  for (const item of items) {
    if (seen.has(item.slug)) continue;
    seen.add(item.slug);

    const svg = buildSvg(item);
    writeFileSync(join(outDir, `${item.slug}.svg`), svg, 'utf8');
    await sharp(Buffer.from(svg)).png({ compressionLevel: 9, palette: true }).toFile(join(outDir, `${item.slug}.png`));
    written++;
  }

  console.log(`${written} visuels generes dans public/blog/covers`);
};

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
