import fs from 'fs';
import path from 'path';

export default function SvgSprite() {
  const spritePath = path.resolve(process.cwd(), 'public/sprite.svg');
  const spriteContent = fs.readFileSync(spritePath, 'utf8');

  return (
    <div
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: spriteContent }}
      style={{ display: 'none' }}
    />
  );
}
