const puppeteer = require('puppeteer');

const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const sites = [
  { url: 'https://mywebglory.com', out: 'src/assets/portfolio-mywebglory.png' },
  { url: 'https://solar-fusion.fr', out: 'src/assets/portfolio-solar-fusion.png' },
  { url: 'https://vm-producers.mywebglory.com', out: 'src/assets/portfolio-vm-producers.png' },
];

(async () => {
  const browser = await puppeteer.launch({
    executablePath: EDGE,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  for (const site of sites) {
    console.log(`Capturing ${site.url}...`);
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 });
    await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 30000 });
    await page.screenshot({ path: site.out });
    await page.close();
    console.log(`  -> saved to ${site.out}`);
  }

  await browser.close();
  console.log('All done!');
})().catch(e => { console.error('Error:', e.message); process.exit(1); });
