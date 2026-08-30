const fs = require('fs');
const path = require('path');

// 1. Load the JSON datasets
const bangkokLocationsPath = path.join(__dirname, '../src/data/bangkok-locations.json');
const longHaulRoutesPath = path.join(__dirname, '../src/data/long-haul-routes.json');

if (!fs.existsSync(bangkokLocationsPath) || !fs.existsSync(longHaulRoutesPath)) {
  console.error('❌ Data files not found. Make sure to run this script from the workspace root.');
  process.exit(1);
}

const locations = JSON.parse(fs.readFileSync(bangkokLocationsPath, 'utf8'));
const routes = JSON.parse(fs.readFileSync(longHaulRoutesPath, 'utf8'));

const domain = "https://www.nm18transport.com";

// 2. Replicate sitemap.ts logic in JavaScript
const corePages = ["", "/works", "/contact"].map((route) => ({
  url: `${domain}${route}`,
  priority: route === "" ? 1.0 : 0.8,
}));

const servicePages = ["/service/moving", "/service/pets", "/service/moto"].map((route) => ({
  url: `${domain}${route}`,
  priority: 0.8,
}));

const areaPages = [
  "/area/thonburi",
  "/area/bangkok-inner",
  "/area/perimeter",
  "/area/chiangmai",
  "/area/chiangrai",
].map((route) => ({
  url: `${domain}${route}`,
  priority: 0.7,
}));

const blogPages = [
  "/blog/ultimate-moving-guide",
  "/blog/packing-fragile-items",
].map((route) => ({
  url: `${domain}${route}`,
  priority: 0.8,
}));

const locationPages = locations
  .filter((loc) => loc.status === "active")
  .map((loc) => ({
    url: `${domain}/location/${loc.slug}`,
    priority: 0.6,
  }));

const routePages = routes.map((route) => ({
  url: `${domain}/route/${route.originSlug}/${route.destinationSlug}`,
  priority: route.isTopRoute ? 0.85 : 0.75,
}));

const allPages = [
  ...corePages,
  ...servicePages,
  ...areaPages,
  ...blogPages,
  ...locationPages,
  ...routePages
];

// 3. Output statistics
console.log('==================================================');
console.log('📊 SITEMAP GENERATION SUMMARY');
console.log('==================================================');
console.log(`🏠 Core Pages:       ${corePages.length}`);
console.log(`🛠️  Service Pages:    ${servicePages.length}`);
console.log(`📍 Area Pages:       ${areaPages.length}`);
console.log(`📝 Blog Pages:       ${blogPages.length}`);
console.log(`🗺️  Location Pages:   ${locationPages.length} (out of ${locations.length} total, filtered by status === 'active')`);
console.log(`🛣️  Route Pages:      ${routePages.length}`);
console.log('--------------------------------------------------');
console.log(`🚀 Total URL Count:  ${allPages.length}`);
console.log('==================================================\n');

// 4. Validate for duplicates
const urls = allPages.map(p => p.url);
const uniqueUrls = new Set(urls);
if (urls.length !== uniqueUrls.size) {
  console.warn('⚠️ Warning: Duplicate URLs found in sitemap!');
  const duplicates = urls.filter((url, index) => urls.indexOf(url) !== index);
  console.warn(duplicates);
} else {
  console.log('✅ Success: No duplicate URLs found.');
}

// 5. Verify format
let formatErrors = 0;
allPages.forEach(p => {
  if (!p.url.startsWith('https://')) {
    console.error(`❌ Error: URL does not use HTTPS protocol: ${p.url}`);
    formatErrors++;
  }
});

if (formatErrors === 0) {
  console.log('✅ Success: All URLs are correctly formatted.');
}
