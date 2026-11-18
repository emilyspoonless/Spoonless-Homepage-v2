# Spoonless · The Thanksgiving Issue (Instagram carousel)

Seven 1080 × 1350 (4:5) slides. Editable source: `carousel.html` (plain HTML/CSS, one `<section>` per slide).

## Files
- `export/01-cover.png` … `export/07-pumpkin-pie-smoothie-bowl.png`: post in this order
- `export/contact-sheet.png`: all seven together
- `img/`: the supplied photography, unedited (crops are done in CSS only)
- `fonts/`: Gillius ADF (display) + DM Sans (body), self-hosted

## Re-export
```
node export.js
```

## Sweet potato photo
The sweet potato photo is in `img/sweet-potato.jpg`. To swap it, replace that file and run `node export.js`.

## Design system
- Palette (brand guidelines §03, matched to the swatches as shown): Cream #F9F8EB · Red #DA3A32 · Black #1C1A1B · Brown (oxblood) #3A1D21.
  Note: the hex codes printed in the guidelines (#D86641 orange, #9F5542 brown) don't match their swatches. To use the printed values instead, edit `--terra` / `--walnut` in `:root`.
  Photo-derived accents: butter #E7B277 (drizzle) and cranberry #8E1B2C (slide 06 sticker only).
- Display type: the brand typeface in the guidelines is a humanist Gill-style sans (the doc labels it "Roca", but it isn't).
  The closest open-licence match is **Gillius ADF Bold**, with a hairline stroke added to reach the heavier weight in the doc.
  If you license Gill Sans Nova / Gill Sans MT, change `--serif` in `:root` and remove the `-webkit-text-stroke` lines.
- Body type: DM Sans 300/500, as used in the guidelines.
- Crops: on each `.ph`, `--s` sets the zoom, and `--x` / `--y` set where the crop centres.
- Headline lines marked `.fit` shrink automatically to stay inside the 72px safe margin.

## Editable PDFs (for Canva)
- `node export-pdf.js`: all 7 slides → `export/spoonless-thanksgiving-carousel.pdf`
- `node export-pdf.js 3`: one slide → `export/slide-03.pdf`

In Canva: Upload → choose the PDF → open it. The text stays editable.
Note: the bundled Gillius fonts have their automatic "oe" ligature removed so "potatoes" never renders as "potatœs".
