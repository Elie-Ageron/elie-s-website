const puppeteer = require('puppeteer');

(async () => {
  const execPath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  console.log('Chrome path:', execPath);
  const browser = await puppeteer.launch({
    executablePath: execPath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });
  console.log('Navigating...');
  await page.goto('https://vm-producers.mywebglory.com', { waitUntil: 'networkidle2', timeout: 30000 });
  console.log('Taking screenshot...');
  await page.screenshot({ path: 'src/assets/portfolio-vm-producers.png' });
  await browser.close();
  console.log('Done!');
})().catch(e => { console.error('Error:', e.message); process.exit(1); });
