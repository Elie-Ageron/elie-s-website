const puppeteer = require('puppeteer');
const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const OUT = process.argv[2];
const WIDTH = Number(process.argv[3] || 1440);
const TAG = process.argv[4] || 'd';
// Sections à cadrer individuellement (scroll jusqu'à l'ancre puis capture)
const TARGETS = process.argv.slice(5);

(async () => {
  const browser = await puppeteer.launch({
    executablePath: EDGE,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--force-prefers-reduced-motion'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: WIDTH, height: WIDTH > 700 ? 900 : 844, deviceScaleFactor: 1 });
  await page.goto('http://localhost:4321/', { waitUntil: 'networkidle2', timeout: 45000 });
  await page.evaluate(async () => {
    await new Promise((res) => {
      let y = 0;
      const step = () => {
        window.scrollBy(0, 700); y += 700;
        if (y < document.body.scrollHeight + 1500) setTimeout(step, 80);
        else { window.scrollTo(0, 0); setTimeout(res, 500); }
      };
      step();
    });
  });

  for (const sel of TARGETS) {
    const el = await page.$(sel);
    if (!el) { console.log(`absent: ${sel}`); continue; }
    await el.evaluate((n) => n.scrollIntoView({ block: 'start', behavior: 'instant' }));
    await new Promise((r) => setTimeout(r, 400));
    const name = sel.replace(/[^a-z0-9]/gi, '') || 'sec';
    await el.screenshot({ path: `${OUT}/${TAG}-${name}.png`, captureBeyondViewport: true });
    console.log(`-> ${TAG}-${name}.png`);
  }
  await browser.close();
})().catch((e) => { console.error('Error:', e.message); process.exit(1); });
