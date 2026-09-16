/**
 * Le detail d'une page lente : d'ou viennent les decalages, et ce qui pese.
 *
 * `check-vitals.mjs` dit qu'une page est mauvaise. Celui-ci dit pourquoi :
 * chaque decalage de mise en page avec son element et son instant, et les
 * ressources de plus de huit kilo-octets avec leur moment d'arrivee.
 *
 * Usage : node scripts/diagnostic-page.mjs [--prod] [/route]
 */
import { existsSync } from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const puppeteer = require('puppeteer');

const args = process.argv.slice(2);
/* `--build` mesure le vrai build servi par `vite preview`, pas le serveur de
   dev, qui charge des centaines de modules non groupes et ne represente rien. */
const port = (args.find((a) => a.startsWith('--port=')) ?? '').split('=')[1];
const base = args.includes('--prod')
  ? 'https://elieageron.com'
  : `http://localhost:${port || (args.includes('--build') ? 4173 : 8080)}`;
const brut = args.find((a) => !a.startsWith('--'));
/* Git Bash reecrit « /route » en chemin Windows avant que node ne le voie. */
const route = !brut
  ? '/'
  : /^[A-Za-z]:[/]/.test(brut) || brut.includes('/Git/')
    ? '/' + brut.split(/[/]/).pop()
    : '/' + brut.replace(/^\/+/, '');

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
const page = await navigateur.newPage();
await page.setViewport({ width: 390, height: 844, isMobile: true, deviceScaleFactor: 2 });

const cdp = await page.target().createCDPSession();
await cdp.send('Network.emulateNetworkConditions', {
  offline: false,
  latency: 150,
  downloadThroughput: (1.6 * 1024 * 1024) / 8,
  uploadThroughput: (750 * 1024) / 8,
});
await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });

await page.evaluateOnNewDocument(() => {
  window.__d = { shifts: [], peintures: [] };
  /* Le nom seul ne suffit pas : deux `<nav>` sans classe se ressemblent. On
     remonte donc quatre ancetres et on garde l'aria-label, qui est souvent la
     seule chose qui distingue un menu d'un autre. */
  const nom = (n) => {
    if (!n || !n.tagName) return '?';
    const morceaux = [];
    let e = n;
    for (let i = 0; i < 4 && e && e.tagName; i++) {
      const label = e.getAttribute ? e.getAttribute('aria-label') : null;
      morceaux.unshift(
        e.tagName.toLowerCase() +
          (e.id ? '#' + e.id : '') +
          (label ? `[${label}]` : '') +
          (typeof e.className === 'string' && e.className
            ? '.' + e.className.split(' ').filter(Boolean).slice(0, 2).join('.')
            : '')
      );
      e = e.parentElement;
    }
    return morceaux.join(' > ');
  };
  const rect = (r) => (r ? `${Math.round(r.x)},${Math.round(r.y)} ${Math.round(r.width)}x${Math.round(r.height)}` : '-');
  new PerformanceObserver((l) => {
    for (const e of l.getEntries()) {
      if (e.hadRecentInput) continue;
      window.__d.shifts.push({
        v: +e.value.toFixed(4),
        t: Math.round(e.startTime),
        n: (e.sources || []).map((s) => `${nom(s.node)}  [${rect(s.previousRect)} -> ${rect(s.currentRect)}]`),
      });
    }
  }).observe({ type: 'layout-shift', buffered: true });
  new PerformanceObserver((l) => {
    for (const e of l.getEntries()) window.__d.peintures.push({ n: e.name, t: Math.round(e.startTime) });
  }).observe({ type: 'paint', buffered: true });
});

await page.goto(base + route, { waitUntil: 'networkidle0', timeout: 90000 });
await new Promise((r) => setTimeout(r, 3500));

const d = await page.evaluate(() => ({
  shifts: window.__d.shifts,
  peintures: window.__d.peintures,
  res: performance
    .getEntriesByType('resource')
    .filter((r) => r.transferSize > 8000)
    .map((r) => ({
      n: r.name.split('/').pop().slice(0, 44),
      ko: Math.round(r.transferSize / 1024),
      t: Math.round(r.responseEnd),
      type: r.initiatorType,
    }))
    .sort((a, b) => b.ko - a.ko)
    .slice(0, 16),
  total: Math.round(
    performance.getEntriesByType('resource').reduce((s, r) => s + (r.transferSize || 0), 0) / 1024
  ),
}));

console.log(`\n${base}${route}\n`);
console.log('--- peintures ---');
for (const p of d.peintures) console.log(`  ${String(p.t + ' ms').padEnd(10)} ${p.n}`);

console.log('\n--- decalages de mise en page ---');
if (!d.shifts.length) console.log('  aucun');
for (const s of d.shifts) {
  console.log(`  ${String(s.v).padEnd(9)} a ${s.t} ms`);
  for (const n of s.n) console.log(`      ${n}`);
}
const cls = d.shifts.reduce((s, x) => s + x.v, 0);
console.log(`  cumul : ${cls.toFixed(3)} ${cls <= 0.1 ? '(bon)' : cls <= 0.25 ? '(a ameliorer)' : '(mauvais)'}`);

console.log(`\n--- ressources de plus de 8 ko (total page ${d.total} ko) ---`);
for (const r of d.res) {
  console.log(`  ${String(r.ko + ' ko').padEnd(9)} ${String(r.t + ' ms').padEnd(10)} ${String(r.type).padEnd(10)} ${r.n}`);
}

await navigateur.close();
