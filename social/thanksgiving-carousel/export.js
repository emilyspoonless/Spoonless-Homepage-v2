// Renders carousel.html → export/01-cover.png … 07-*.png at exactly 1080×1350, plus a contact sheet.
// Usage: node export.js
const { chromium } = require('playwright');
const path = require('path');

const names = ['01-cover', '02-brussels-sprouts', '03-japanese-sweet-potatoes', '04-pumpkin-pie',
  '05-apple-crisp', '06-black-friday-waffles', '07-pumpkin-pie-smoothie-bowl'];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 1400 }, deviceScaleFactor: 1 });
  await page.goto('file://' + path.join(__dirname, 'carousel.html'));
  await page.waitForSelector('body[data-ready="1"]');
  await page.evaluate(() => document.fonts.ready);
  for (let i = 0; i < names.length; i++) {
    await page.locator('#s' + (i + 1)).screenshot({ path: path.join(__dirname, 'export', names[i] + '.png') });
  }
  // contact sheet
  const imgs = names.map(n => 'export/' + n + '.png');
  const sheet = await browser.newPage({ viewport: { width: 2400, height: 1400 }, deviceScaleFactor: 1 });
  await sheet.setContent(`<!doctype html><html><head><link rel="stylesheet" href="fonts/fonts.css"><style>@font-face{font-family:'Spoonless Display';src:url(fonts/GilliusADF-Bold.otf)}
    body{margin:0;background:#ECE7D6;font-family:'DM Sans';color:#1C1A1B;padding:64px 72px 72px;width:2256px}
    header{display:flex;justify-content:space-between;align-items:baseline;border-bottom:2px solid #1C1A1B;padding-bottom:18px;margin-bottom:40px}
    h1{font:700 56px 'Spoonless Display';margin:0;-webkit-text-stroke:1px currentColor} h1 em{color:#DA3A32}
    header span{font:500 18px 'DM Sans';letter-spacing:.22em;text-transform:uppercase}
    .row{display:grid;grid-template-columns:repeat(4,1fr);gap:36px}
    figure{margin:0} img{width:100%;display:block;box-shadow:0 12px 30px rgba(35,31,32,.16)}
    figcaption{font:500 16px 'DM Sans';letter-spacing:.18em;text-transform:uppercase;margin-top:14px}
  </style></head><body><header><h1>The Thanksgiving Issue — <em>contact sheet</em></h1><span>Spoonless · 7 slides · 1080 × 1350</span></header>
  <div class="row">${imgs.map((s, i) => `<figure><img src="${s}"><figcaption>${names[i].replace(/-/g, ' ')}</figcaption></figure>`).join('')}</div></body></html>`,
    { waitUntil: 'load' }).catch(() => {});
  // setContent has no base URL; navigate to a temp file instead
  const fs = require('fs');
  const html = await sheet.content();
  const tmp = path.join(__dirname, '.contact.html');
  fs.writeFileSync(tmp, html);
  await sheet.goto('file://' + tmp);
  await sheet.evaluate(() => document.fonts.ready);
  await sheet.screenshot({ path: path.join(__dirname, 'export', 'contact-sheet.png'), fullPage: true });
  fs.unlinkSync(tmp);
  await browser.close();
  console.log('exported', names.length, 'slides + contact sheet');
})();
