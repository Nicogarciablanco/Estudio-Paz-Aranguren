import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const images = [
  {
    input: 'public/Heroimgs/Balanza-hero-optimized.png',
    output: 'public/Heroimgs/Balanza-hero-optimized',
  },
  {
    input: 'public/Navbarimgs/Balanza-navbar-optimized.png',
    output: 'public/Navbarimgs/Balanza-navbar-optimized',
  },
];

async function convertImage(inputPath, outputPrefix) {
  try {
    const image = sharp(inputPath);
    
    // WebP conversion
    await image
      .clone()
      .webp({ quality: 80 })
      .toFile(`${outputPrefix}.webp`);
    
    console.log(`✓ Created ${outputPrefix}.webp`);
    
    // AVIF conversion
    await image
      .clone()
      .avif({ quality: 75 })
      .toFile(`${outputPrefix}.avif`);
    
    console.log(`✓ Created ${outputPrefix}.avif`);
  } catch (err) {
    console.error(`Error converting ${inputPath}:`, err.message);
  }
}

async function main() {
  for (const img of images) {
    if (fs.existsSync(img.input)) {
      await convertImage(img.input, img.output);
    } else {
      console.warn(`Input not found: ${img.input}`);
    }
  }
  console.log('Image optimization complete.');
}

main();
