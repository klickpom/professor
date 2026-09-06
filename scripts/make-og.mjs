import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const WIDTH = 1200;
const HEIGHT = 630;

const logo = join(root, "public/assets/brand/logo-circle.jpg");
const bag = join(root, "public/assets/products/fix-700-c2te.jpg");
const latex = join(root, "public/assets/products/bond-latex.jpg");

const glow = Buffer.from(`
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="g" cx="50%" cy="48%" r="58%">
      <stop offset="0%" stop-color="#3A2A12" stop-opacity="0.95"/>
      <stop offset="55%" stop-color="#161411" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#0B0A09" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="#0B0A09"/>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <rect x="28" y="28" width="1144" height="574" fill="none" stroke="#C9A227" stroke-width="3" rx="10"/>
  <rect x="0" y="0" width="${WIDTH}" height="10" fill="#B42318"/>
  <rect x="0" y="${HEIGHT - 10}" width="${WIDTH}" height="10" fill="#B42318"/>
</svg>
`);

const emblem = await sharp(logo)
  .resize(468, 468, { fit: "cover" })
  .toBuffer();

const leftPack = await sharp(bag)
  .resize(300, 420, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .toBuffer();

const rightPack = await sharp(latex)
  .resize(250, 360, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .toBuffer();

const jpeg = await sharp(glow)
  .composite([
    { input: leftPack, left: 56, top: 118 },
    { input: rightPack, left: 894, top: 148 },
    { input: emblem, left: 366, top: 81 },
  ])
  .jpeg({ quality: 90, mozjpeg: true })
  .toBuffer();

const outputs = [
  join(root, "public/og.jpg"),
  join(root, "app/opengraph-image.jpg"),
  join(root, "app/twitter-image.jpg"),
];

for (const file of outputs) {
  mkdirSync(dirname(file), { recursive: true });
  await sharp(jpeg).toFile(file);
  console.log("wrote", file);
}
