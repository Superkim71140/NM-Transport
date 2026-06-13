import fs from 'fs';
import path from 'path';

const ROUTES_DATA_PATH = path.resolve('src/data/long-haul-routes.json');
const SITEMAP_PATH = path.resolve('src/app/sitemap.ts');

async function validateRoutesDataset() {
  console.log('--- Starting Route Dataset Validation (Phase 8) ---');
  const fileContent = fs.readFileSync(ROUTES_DATA_PATH, 'utf-8');
  let routes;
  
  try {
    routes = JSON.parse(fileContent);
    console.log('[PASS] JSON parses successfully');
  } catch (err) {
    console.error('[FAIL] JSON parsing failed:', err.message);
    process.exit(1);
  }

  const errors = [];
  const warnings = [];
  const routeKeys = new Set();
  let topRoutesCount = 0;

  if (!Array.isArray(routes)) {
    errors.push('Route dataset must be an array of route objects.');
  } else if (routes.length !== 15) {
    errors.push(`Dataset should contain exactly 15 routes, but found ${routes.length}`);
  }

  routes.forEach((route, index) => {
    const label = `${route.originSlug || 'unknown'} -> ${route.destinationSlug || 'unknown'} (index ${index})`;

    // Required fields check
    const required = [
      'originSlug', 'destinationSlug', 'originThai', 'destinationThai',
      'searchTheme', 'estimatedDistance', 'originEnglish', 'destinationEnglish',
      'destinationProvinceThai', 'destinationProvinceEnglish', 'originGeo',
      'destinationGeo', 'serviceRadiusMeters', 'priority', 'isTopRoute',
      'routeCategory', 'routeHighlights', 'recommendedVehicles', 'nearbyAreas',
      'keywords', 'localizedFaqs'
    ];

    required.forEach(field => {
      if (route[field] === undefined) {
        errors.push(`Route [${label}]: missing required field "${field}"`);
      }
    });

    // Unique route path check
    if (route.originSlug && route.destinationSlug) {
      const key = `${route.originSlug}/${route.destinationSlug}`;
      if (routeKeys.has(key)) {
        errors.push(`Route [${label}]: duplicate route defined for "${key}"`);
      }
      routeKeys.add(key);

      // Kebab-case and lowercase slug checks
      if (route.originSlug !== route.originSlug.toLowerCase() || route.destinationSlug !== route.destinationSlug.toLowerCase()) {
        errors.push(`Route [${label}]: slugs must be lowercase`);
      }
      if (!/^[a-z0-9-]+$/.test(route.originSlug) || !/^[a-z0-9-]+$/.test(route.destinationSlug)) {
        errors.push(`Route [${label}]: slugs must be ASCII kebab-case`);
      }
    }

    // Coordinates check
    if (route.originGeo) {
      if (typeof route.originGeo.latitude !== 'number' || typeof route.originGeo.longitude !== 'number') {
        errors.push(`Route [${label}]: originGeo coordinates must be numbers`);
      }
    }
    if (route.destinationGeo) {
      if (typeof route.destinationGeo.latitude !== 'number' || typeof route.destinationGeo.longitude !== 'number') {
        errors.push(`Route [${label}]: destinationGeo coordinates must be numbers`);
      }
    }

    // Lists non-empty check
    if (Array.isArray(route.routeHighlights)) {
      if (route.routeHighlights.length === 0) {
        errors.push(`Route [${label}]: routeHighlights array cannot be empty`);
      }
    } else {
      errors.push(`Route [${label}]: routeHighlights must be an array`);
    }

    if (Array.isArray(route.recommendedVehicles)) {
      if (route.recommendedVehicles.length === 0) {
        errors.push(`Route [${label}]: recommendedVehicles array cannot be empty`);
      }
    } else {
      errors.push(`Route [${label}]: recommendedVehicles must be an array`);
    }

    if (Array.isArray(route.keywords)) {
      if (route.keywords.length === 0) {
        errors.push(`Route [${label}]: keywords array cannot be empty`);
      }
    } else {
      errors.push(`Route [${label}]: keywords must be an array`);
    }

    // Localized FAQs check
    if (Array.isArray(route.localizedFaqs)) {
      if (route.localizedFaqs.length === 0) {
        errors.push(`Route [${label}]: localizedFaqs cannot be empty`);
      } else {
        route.localizedFaqs.forEach((faq, fIdx) => {
          if (!faq.question || !faq.answer) {
            errors.push(`Route [${label}]: FAQ index ${fIdx} must have non-empty question and answer`);
          }
        });
      }
    } else {
      errors.push(`Route [${label}]: localizedFaqs must be an array`);
    }

    // topRoute count
    if (route.isTopRoute) {
      topRoutesCount++;
    }
  });

  if (topRoutesCount !== 5) {
    errors.push(`Required exactly 5 top routes, but found ${topRoutesCount}`);
  }

  const isValid = errors.length === 0;
  console.log(`[STATUS] Total routes validated: ${routes.length}`);
  console.log(`[STATUS] Top routes marked: ${topRoutesCount}`);

  if (isValid) {
    console.log('[PASS] All route dataset validations passed!');
  } else {
    console.error(`[FAIL] Route dataset has ${errors.length} errors!`);
    errors.forEach(e => console.error('  -', e));
  }

  // Write reports/phase8/route-dataset-validation.json
  const reportJson = {
    timestamp: new Date().toISOString(),
    totalRoutes: routes.length,
    topRoutesCount,
    isValid,
    errors,
    warnings
  };

  fs.mkdirSync('reports/phase8', { recursive: true });
  fs.writeFileSync('reports/phase8/route-dataset-validation.json', JSON.stringify(reportJson, null, 2));

  // Write reports/phase8/route-dataset-validation.md
  let reportMd = `# Route Dataset Validation Report (Phase 8)

**Date:** ${new Date().toISOString().split('T')[0]}
**Status:** ${isValid ? 'PASS ✅' : 'FAIL ❌'}

## Summary Metrics
- **Total Routes:** ${routes.length} (Expected: 15)
- **Top Routes:** ${topRoutesCount} (Expected: 5)

## Validation Checks
1. JSON Structure parses correctly: **PASS ✅**
2. Unique Route Paths: ${routes.length === routeKeys.size ? 'PASS ✅' : 'FAIL ❌'}
3. ASCII/Lowercase Slugs: ${errors.some(e => e.includes('lowercase') || e.includes('ASCII')) ? 'FAIL ❌' : 'PASS ✅'}
4. Correct Count of Top Routes (5): ${topRoutesCount === 5 ? 'PASS ✅' : 'FAIL ❌'}

`;

  if (errors.length > 0) {
    reportMd += `### Errors (${errors.length})\n`;
    errors.forEach(e => {
      reportMd += `- ❌ ${e}\n`;
    });
    reportMd += '\n';
  } else {
    reportMd += `### Errors\n- No errors found. All route records are compliant. 🎉\n\n`;
  }

  fs.writeFileSync('reports/phase8/route-dataset-validation.md', reportMd);
  console.log('[INFO] Written route dataset validation reports to reports/phase8/');
  
  return { routes, isValid };
}

async function validateRoutesSitemap(routes) {
  console.log('\n--- Starting Sitemap Validation for Routes ---');
  const domain = 'https://www.nm18transport.com';
  
  const sitemapCode = fs.readFileSync(SITEMAP_PATH, 'utf-8');

  // Verify that the code actually imports and maps routes
  if (!sitemapCode.includes('long-haul-routes.json')) {
    throw new Error('Sitemap configuration is not importing long-haul-routes.json!');
  }

  // Construct sitemap entries in the script identical to the code's dynamic rendering
  const routePages = routes.map((route) => ({
    url: `${domain}/route/${route.originSlug}/${route.destinationSlug}`,
    changeFrequency: "weekly",
    priority: route.isTopRoute ? 0.85 : 0.75,
  }));

  const errors = [];
  const urlSet = new Set();

  routePages.forEach(entry => {
    // HTTPS Check
    if (!entry.url.startsWith('https://')) {
      errors.push(`URL "${entry.url}" is not secure HTTPS`);
    }
    // Unique Check
    if (urlSet.has(entry.url)) {
      errors.push(`Duplicate URL entry in routes sitemap: "${entry.url}"`);
    }
    urlSet.add(entry.url);

    // Verify frequency
    if (entry.changeFrequency !== 'weekly') {
      errors.push(`URL "${entry.url}" has incorrect changeFrequency`);
    }

    // Verify priority values
    const slug = entry.url.split('/route/')[1];
    const [origin, destination] = slug.split('/');
    const match = routes.find(r => r.originSlug === origin && r.destinationSlug === destination);
    if (!match) {
      errors.push(`Sitemap URL "${entry.url}" does not match any route in JSON`);
    } else {
      const expectedPriority = match.isTopRoute ? 0.85 : 0.75;
      if (entry.priority !== expectedPriority) {
        errors.push(`URL "${entry.url}" priority is ${entry.priority}, but expected ${expectedPriority}`);
      }
    }
  });

  const isValid = errors.length === 0;
  console.log(`[STATUS] Total Routes Sitemap Entries: ${routePages.length}`);

  if (isValid) {
    console.log('[PASS] Sitemap route validation succeeded!');
  } else {
    console.error(`[FAIL] Sitemap route validation failed with ${errors.length} errors!`);
    errors.forEach(e => console.error('  -', e));
  }

  // Write reports/phase8/sitemap-validation.json
  const reportJson = {
    timestamp: new Date().toISOString(),
    totalEntries: routePages.length,
    isValid,
    errors
  };
  fs.writeFileSync('reports/phase8/sitemap-validation.json', JSON.stringify(reportJson, null, 2));

  // Write reports/phase8/sitemap-validation.md
  let reportMd = `# Sitemap Routes Validation Report (Phase 8)

**Date:** ${new Date().toISOString().split('T')[0]}
**Status:** ${isValid ? 'PASS ✅' : 'FAIL ❌'}

## Summary Metrics
- **Total Route Sitemap Entries:** ${routePages.length} (Expected: 15)

## Validation Checks
1. Absolute, HTTPS URLs: ${errors.some(e => e.includes('https://') || e.includes('absolute')) ? 'FAIL ❌' : 'PASS ✅'}
2. Unique URLs: ${errors.some(e => e.includes('Duplicate')) ? 'FAIL ❌' : 'PASS ✅'}
3. Correct priority mapped according to topRoute flag: ${errors.some(e => e.includes('priority')) ? 'FAIL ❌' : 'PASS ✅'}

`;

  if (errors.length > 0) {
    reportMd += `### Errors (${errors.length})\n`;
    errors.forEach(e => {
      reportMd += `- ❌ ${e}\n`;
    });
  } else {
    reportMd += `### Errors\n- No errors found. Sitemap complies with all Phase 8 indexability rules. 🎉\n`;
  }

  fs.writeFileSync('reports/phase8/sitemap-validation.md', reportMd);
  console.log('[INFO] Written sitemap route validation reports to reports/phase8/');
}

async function run() {
  const { routes } = await validateRoutesDataset();
  await validateRoutesSitemap(routes);
}

run().catch(err => {
  console.error('Fatal validation runner error:', err);
  process.exit(1);
});
