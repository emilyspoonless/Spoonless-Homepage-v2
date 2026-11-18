// Renders carousel.html → export/spoonless-thanksgiving-carousel.pdf (7 pages, 1080×1350, live text) for Canva import.
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  await p.goto('file://' + path.join(__dirname, 'carousel.html'));
  await p.waitForSelector('body[data-ready="1"]');
  await p.addStyleTag({ content: `@page{size:1080px 1350px;margin:0}
    body{padding:0!important;gap:0!important;background:none!important;display:block!important}
    .slide{break-after:page;page-break-after:always}` });
  await p.pdf({ path: path.join(__dirname, 'export', 'spoonless-thanksgiving-carousel.pdf'),
    width: '1080px', height: '1350px', printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
  await b.close();
  console.log('pdf ok');
})();
