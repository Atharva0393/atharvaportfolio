import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const imgDir = './public';
const files = fs.readdirSync(imgDir);

for (const file of files) {
  if (file.match(/\.(png|jpg|jpeg)$/i)) {
    const filePath = path.join(imgDir, file);
    const parsed = path.parse(filePath);
    const outPath = path.join(imgDir, parsed.name + '.webp');
    console.log(`Converting ${file} to webp...`);
    sharp(filePath).webp({ quality: 80 }).toFile(outPath).then(() => {
        fs.unlinkSync(filePath);
        console.log(`Converted ${file}`);
    }).catch(e => console.error(e));
  }
}

// Convert root BG Image.png
const rootBg = './BG Image.png';
if (fs.existsSync(rootBg)) {
    console.log('Converting root BG Image...');
    sharp(rootBg).webp({ quality: 80 }).toFile('./BG Image.webp').then(() => {
        fs.unlinkSync(rootBg);
        console.log('Converted root BG');
    }).catch(e => console.error(e));
}
