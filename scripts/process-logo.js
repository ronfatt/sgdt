const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processLogo() {
  const inputPath = path.join(__dirname, '../logo/Gemini_Generated_Image_em6f6zem6f6zem6f.png');
  
  if (!fs.existsSync(inputPath)) {
    console.error('Input logo file not found:', inputPath);
    return;
  }

  // Load raw image
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  const { width, height } = metadata;

  // Get raw RGBA buffer
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });

  // Convert white/near-white pixels to transparent
  for (let i = 0; i < data.length; i += info.channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    // If pixel is near white (>235), adjust alpha gradually
    if (r > 230 && g > 230 && b > 230) {
      const minC = Math.min(r, g, b);
      const alphaFactor = Math.max(0, (255 - minC) / 25);
      data[i + 3] = Math.round(alphaFactor * 255);
    }
  }

  // Re-encode trimmed transparent PNG
  const transparentPngBuffer = await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: info.channels
    }
  })
  .png()
  .trim() // Crop empty transparent borders
  .toBuffer();

  const outDir = path.join(__dirname, '../public/images');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  // 1. Save Full Transparent Horizontal Logo
  await sharp(transparentPngBuffer)
    .resize({ height: 120 })
    .toFile(path.join(outDir, 'logo-sgdt-full.png'));

  await sharp(transparentPngBuffer)
    .resize({ height: 240 })
    .toFile(path.join(outDir, 'logo-sgdt-large.png'));

  // 2. Crop just the Hexagon Emblem Icon (Left half of image)
  const transparentMeta = await sharp(transparentPngBuffer).metadata();
  const iconWidth = Math.floor(transparentMeta.width * 0.46);

  await sharp(transparentPngBuffer)
    .extract({ left: 0, top: 0, width: iconWidth, height: transparentMeta.height })
    .trim()
    .resize(200, 200, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toFile(path.join(outDir, 'logo-sgdt-icon.png'));

  // Default logo-sgdt.png to full horizontal logo
  await sharp(transparentPngBuffer)
    .resize({ height: 120 })
    .toFile(path.join(outDir, 'logo-sgdt.png'));

  console.log('Logo processing complete! Created logo-sgdt.png, logo-sgdt-full.png, logo-sgdt-icon.png, logo-sgdt-large.png');
}

processLogo().catch(console.error);
