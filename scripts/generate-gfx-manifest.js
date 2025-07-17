import fs from 'node:fs';
import path from 'node:path';

const gfxDirectory = path.join(process.cwd(), 'public', 'gfx');
const manifest = {};

fs.readdirSync(gfxDirectory).forEach((dir) => {
  if (dir.startsWith('gfx')) {
    const gfxType = Number.parseInt(dir.substring(3), 10);
    const files = fs.readdirSync(path.join(gfxDirectory, dir));
    manifest[gfxType] = files.length;
  }
});

fs.writeFileSync(
  path.join(process.cwd(), 'public', 'gfx-manifest.json'),
  JSON.stringify(manifest, null, 2),
);

console.log('GFX manifest generated.');
