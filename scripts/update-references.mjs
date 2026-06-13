import fs from 'fs';
import path from 'path';

const FILES_TO_UPDATE = [
  'src/components/sections/ServiceAreaHero.tsx',
  'src/app/works/page.tsx',
  'src/app/service/moving/page.tsx',
  'src/app/service/moto/page.tsx',
  'src/app/area/thonburi/page.tsx',
  'src/app/area/chiangmai/page.tsx',
  'src/app/area/perimeter/page.tsx',
  'src/app/area/bangkok-inner/page.tsx',
  'src/app/area/chiangrai/page.tsx'
];

function run() {
  console.log('Starting exact WebP reference updates...');
  
  // Pattern to match /images/portfolio/S_xxxxxx.jpg or .png or .jpeg
  const portfolioRegex = /\/images\/portfolio\/(S__[0-9]+)\.(jpg|png|jpeg)/g;
  
  for (const relPath of FILES_TO_UPDATE) {
    const fullPath = path.resolve(relPath);
    if (!fs.existsSync(fullPath)) {
      console.warn(`File not found: ${relPath}`);
      continue;
    }
    
    let content = fs.readFileSync(fullPath, 'utf8');
    const matches = content.match(portfolioRegex);
    
    if (matches) {
      console.log(`Updating ${relPath}: found ${matches.length} matches.`);
      content = content.replace(portfolioRegex, '/images/portfolio/$1.webp');
      fs.writeFileSync(fullPath, content, 'utf8');
    } else {
      console.log(`No matches in ${relPath}`);
    }
  }
  
  console.log('Finished updating references.');
}

run();
