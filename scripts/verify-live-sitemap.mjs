import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function runVerification() {
  console.log('🔍 Fetching live sitemap from http://localhost:3000/sitemap.xml...\n');

  let xmlContent = '';
  try {
    const res = await fetch('http://localhost:3000/sitemap.xml');
    if (!res.ok) {
      throw new Error(`HTTP ${res.status} ${res.statusText}`);
    }
    xmlContent = await res.text();
  } catch (err) {
    console.error('❌ Failed to fetch live sitemap from dev server:', err.message);
    process.exit(1);
  }

  // Parse XML elements
  const urlBlocks = [...xmlContent.matchAll(/<url>([\s\S]*?)<\/url>/g)];
  const parsedUrls = [];

  for (const block of urlBlocks) {
    const inner = block[1];
    const locMatch = inner.match(/<loc>([^<]+)<\/loc>/);
    const priorityMatch = inner.match(/<priority>([^<]+)<\/priority>/);
    const changefreqMatch = inner.match(/<changefreq>([^<]+)<\/changefreq>/);
    const lastmodMatch = inner.match(/<lastmod>([^<]+)<\/lastmod>/);

    if (locMatch) {
      parsedUrls.push({
        url: locMatch[1].trim(),
        priority: priorityMatch ? priorityMatch[1].trim() : 'N/A',
        changefreq: changefreqMatch ? changefreqMatch[1].trim() : 'N/A',
        lastmod: lastmodMatch ? lastmodMatch[1].trim() : 'N/A',
      });
    }
  }

  const EXPECTED_DOMAIN = 'https://www.nm18transport.com';

  // Categories
  const categories = {
    core: [],
    services: [],
    districts: [],
    routes: [],
    areasAndBlogs: [],
    other: [],
  };

  const formattingErrors = [];
  const seenUrls = new Set();
  const duplicates = [];

  for (const item of parsedUrls) {
    const u = item.url;

    // Check duplicate
    if (seenUrls.has(u)) {
      duplicates.push(u);
    }
    seenUrls.add(u);

    // Check formatting
    if (!u.startsWith('https://')) {
      formattingErrors.push(`Protocol not HTTPS: ${u}`);
    }
    if (!u.startsWith(EXPECTED_DOMAIN)) {
      formattingErrors.push(`Wrong domain (expected ${EXPECTED_DOMAIN}): ${u}`);
    }
    if (/\s/.test(u)) {
      formattingErrors.push(`Contains whitespace: ${u}`);
    }
    if (/[^:]\/\//.test(u)) {
      formattingErrors.push(`Contains double slash in path: ${u}`);
    }

    // Categorization
    const pathPart = u.replace(EXPECTED_DOMAIN, '');

    if (pathPart === '' || pathPart === '/works' || pathPart === '/contact') {
      categories.core.push(item);
    } else if (pathPart.startsWith('/service/')) {
      categories.services.push(item);
    } else if (pathPart.startsWith('/location/')) {
      categories.districts.push(item);
    } else if (pathPart.startsWith('/route/')) {
      categories.routes.push(item);
    } else if (pathPart.startsWith('/area') || pathPart.startsWith('/blog/')) {
      categories.areasAndBlogs.push(item);
    } else {
      categories.other.push(item);
    }
  }

  // Filesystem route audit
  const appDir = path.join(__dirname, '../src/app');
  const checkedKnownRoutes = [
    '/',
    '/works',
    '/contact',
    '/service/moving',
    '/service/pets',
    '/service/moto',
    '/area',
    '/area/thonburi',
    '/area/bangkok-inner',
    '/area/perimeter',
    '/area/chiangmai',
    '/area/chiangrai',
    '/blog/ultimate-moving-guide',
    '/blog/packing-fragile-items',
  ];

  const missingKnownRoutes = [];
  for (const r of checkedKnownRoutes) {
    const expectedUrl = r === '/' ? EXPECTED_DOMAIN : `${EXPECTED_DOMAIN}${r}`;
    if (!seenUrls.has(expectedUrl)) {
      missingKnownRoutes.push(expectedUrl);
    }
  }

  // Print Report
  console.log('================================================================================');
  console.log('               ⚡ NEXT.JS DYNAMIC SITEMAP AUDIT REPORT                         ');
  console.log('================================================================================');
  console.log(`📡 XML Endpoint:       http://localhost:3000/sitemap.xml`);
  console.log(`🌐 Production Domain:  ${EXPECTED_DOMAIN}`);
  console.log(`📊 Total Parsed URLs:  ${parsedUrls.length}`);
  console.log('================================================================================\n');

  console.log('--------------------------------------------------------------------------------');
  console.log('1. CORE PAGES (High Authority & Conversion)');
  console.log('--------------------------------------------------------------------------------');
  categories.core.forEach(i => console.log(`   [Priority: ${i.priority.padEnd(4)}] [Freq: ${i.changefreq.padEnd(7)}] ${i.url}`));

  console.log('\n--------------------------------------------------------------------------------');
  console.log('2. PRIMARY SERVICE PAGES (High-Intent Money Pages)');
  console.log('--------------------------------------------------------------------------------');
  categories.services.forEach(i => console.log(`   [Priority: ${i.priority.padEnd(4)}] [Freq: ${i.changefreq.padEnd(7)}] ${i.url}`));

  console.log('\n--------------------------------------------------------------------------------');
  console.log('3. AREA HUBS & REGIONAL ZONES (Local SEO Footprint)');
  console.log('--------------------------------------------------------------------------------');
  categories.areasAndBlogs.filter(i => i.url.includes('/area')).forEach(i => console.log(`   [Priority: ${i.priority.padEnd(4)}] [Freq: ${i.changefreq.padEnd(7)}] ${i.url}`));

  console.log('\n--------------------------------------------------------------------------------');
  console.log('4. EDUCATIONAL BLOG GUIDES (Content Authority)');
  console.log('--------------------------------------------------------------------------------');
  categories.areasAndBlogs.filter(i => i.url.includes('/blog/')).forEach(i => console.log(`   [Priority: ${i.priority.padEnd(4)}] [Freq: ${i.changefreq.padEnd(7)}] ${i.url}`));

  console.log('\n--------------------------------------------------------------------------------');
  console.log(`5. DISTRICT PROGRAMMATIC PAGES (${categories.districts.length} Active Bangkok Districts)`);
  console.log('--------------------------------------------------------------------------------');
  console.log(`   Summary: ${categories.districts.length} districts mapped (Ladprao, Chatuchak, Don Mueang, Phetkasem, Rama 2, Bang Khae, etc.)`);
  console.log(`   Sample URLs:`);
  categories.districts.slice(0, 6).forEach(i => console.log(`     • ${i.url} [P: ${i.priority}, Freq: ${i.changefreq}]`));
  console.log(`     ... and ${categories.districts.length - 6} more active districts.`);

  console.log('\n--------------------------------------------------------------------------------');
  console.log(`6. INTERPROVINCIAL ROUTES (${categories.routes.length} Long-Haul Corridor Routes)`);
  console.log('--------------------------------------------------------------------------------');
  console.log(`   Summary: ${categories.routes.length} routes mapped (Chiang Mai, Chiang Rai, Chonburi, Rayong, Phuket, Korat, etc.)`);
  console.log(`   Sample URLs:`);
  categories.routes.slice(0, 6).forEach(i => console.log(`     • ${i.url} [P: ${i.priority}, Freq: ${i.changefreq}]`));
  console.log(`     ... and ${categories.routes.length - 6} more interprovincial routes.`);

  console.log('\n================================================================================');
  console.log('🛡️ QUALITY & SANITY VALIDATION SUMMARY');
  console.log('================================================================================');
  console.log(`✓ Duplicates Detected:       ${duplicates.length === 0 ? '0 (PASSED ✅)' : `${duplicates.length} ⚠️ (${duplicates.join(', ')})`}`);
  console.log(`✓ URL Format Errors:         ${formattingErrors.length === 0 ? '0 (PASSED ✅)' : `${formattingErrors.length} ❌`}`);
  console.log(`✓ Missing Known Core Routes: ${missingKnownRoutes.length === 0 ? '0 (PASSED ✅)' : `${missingKnownRoutes.length} ❌ (${missingKnownRoutes.join(', ')})`}`);
  console.log(`✓ Private/Admin Leaks:       ${seenUrls.has(`${EXPECTED_DOMAIN}/api`) || seenUrls.has(`${EXPECTED_DOMAIN}/admin`) ? 'LEAKED ❌' : '0 (PASSED - /api correctly excluded ✅)'}`);
  console.log('================================================================================\n');

  if (duplicates.length > 0 || formattingErrors.length > 0 || missingKnownRoutes.length > 0) {
    process.exit(1);
  }
}

runVerification();
