import type { NextConfig } from "next";
import path from 'path';
import fs from 'fs';
import SVGSpriter from 'svg-sprite';

const spriter = new SVGSpriter({
  dest: './public',
  mode: {
    symbol: {
      sprite: '../sprite.svg',
      example: false,
    },
  },
});

const iconsPath = path.resolve(__dirname, 'assets/icons');

fs.readdirSync(iconsPath).forEach((file: string) => {
  if (file.endsWith('.svg')) {
    const filePath = path.resolve(iconsPath, file);
    const svgContent = fs.readFileSync(filePath, 'utf-8');
    spriter.add(filePath, null, svgContent);
  }
});

spriter.compile((error: Error | null, result: any) => {
  if (error) {
    console.error(error);
    process.exit(1);
  }

  for (const mode in result) {
    for (const resource in result[mode]) {
      const { path: outPath, contents } = result[mode][resource];
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, contents);
      console.log(`SVG Sprite gerado em: ${outPath}`);
    }
  }
});

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
