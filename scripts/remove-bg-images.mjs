import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(__dirname, '../src');

async function walk(dir) {
  let results = [];
  const list = await fs.readdir(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = await fs.stat(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(await walk(filePath));
    } else if (filePath.endsWith('.tsx')) {
      results.push(filePath);
    }
  }
  return results;
}

async function processFile(filePath) {
  let content = await fs.readFile(filePath, 'utf8');
  let originalContent = content;

  // Pattern 1: <section ... style={{ backgroundImage: "linear-gradient(...), url('...')" }}>
  const regex1 = /<section([^>]*)style=\{\{\s*backgroundImage:\s*["']linear-gradient\(([^)]+)\),\s*url\((['"])(.*?)\3\)["']\s*\}\}([^>]*)>/g;
  
  content = content.replace(regex1, (match, beforeStyle, gradientArgs, quote, url, afterStyle) => {
    // Attempt to parse gradient args, e.g. "to bottom, rgba(2, 6, 13, 0.8), rgba(15, 28, 56, 0.95)"
    const parts = gradientArgs.split(/,(?![^()]*\))/); // split by comma not in parentheses
    let color1 = 'rgba(2,6,13,0.8)';
    let color2 = 'rgba(15,28,56,0.95)';
    if (parts.length >= 3) {
      color1 = parts[1].trim().replace(/\s/g, '');
      color2 = parts[2].trim().replace(/\s/g, '');
    }

    let remainingAttrs = (beforeStyle + ' ' + afterStyle).replace(/\s+/g, ' ');
    
    // Remove bg-cover bg-center from className
    remainingAttrs = remainingAttrs.replace(/bg-cover\s*/g, '').replace(/bg-center\s*/g, '');

    return `<section${remainingAttrs}>
        <Image src="${url}" alt="Hero Background" fill priority fetchPriority="high" className="object-cover absolute inset-0 -z-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[${color1}] to-[${color2}] -z-10"></div>`;
  });

  // Pattern 2: works/page.tsx <div ... style={{ backgroundImage: "linear-gradient(...), url('...')" }}>
  const regex2 = /<div([^>]*)style=\{\{\s*backgroundImage:\s*["']linear-gradient\(([^)]+)\),\s*url\((['"])(.*?)\3\)["']\s*\}\}([^>]*)>/g;
  content = content.replace(regex2, (match, beforeStyle, gradientArgs, quote, url, afterStyle) => {
    const parts = gradientArgs.split(/,(?![^()]*\))/);
    let color1 = 'rgba(5,10,20,0.7)';
    let color2 = 'rgba(5,10,20,1)';
    if (parts.length >= 3) {
      color1 = parts[1].trim().replace(/\s/g, '');
      color2 = parts[2].trim().replace(/\s/g, '');
    }

    let remainingAttrs = (beforeStyle + ' ' + afterStyle).replace(/\s+/g, ' ');
    remainingAttrs = remainingAttrs.replace(/bg-cover\s*/g, '').replace(/bg-center\s*/g, '');

    return `<div${remainingAttrs}>
        <Image src="${url}" alt="Background" fill priority fetchPriority="high" className="object-cover absolute inset-0 -z-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[${color1}] to-[${color2}] -z-10"></div>`;
  });

  if (content !== originalContent) {
    if (!content.includes('import Image from')) {
      content = "import Image from 'next/image';\n" + content;
    }
    await fs.writeFile(filePath, content, 'utf8');
    console.log('Updated ' + path.basename(filePath));
  }
}

async function run() {
  const files = await walk(srcDir);
  for (const file of files) {
    await processFile(file);
  }
}

run().catch(console.error);
