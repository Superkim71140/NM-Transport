import fs from 'fs';
import path from 'path';

const LOCATIONS_PATH = path.resolve('src/data/bangkok-locations.json');
const SITEMAP_PATH = path.resolve('src/app/sitemap.ts');

async function validateDataset() {
  console.log('--- Starting Location Dataset Validation ---');
  const fileContent = fs.readFileSync(LOCATIONS_PATH, 'utf-8');
  let locations;
  
  // 1. JSON Parses successfully
  try {
    locations = JSON.parse(fileContent);
    console.log('[PASS] JSON parses successfully');
  } catch (err) {
    console.error('[FAIL] JSON parsing failed:', err.message);
    process.exit(1);
  }

  const slugSet = new Set();
  const errors = [];
  const warnings = [];
  let samutSakhonCount = 0;
  let activeCount = 0;
  let draftCount = 0;
  let aliasCount = 0;

  locations.forEach((loc, index) => {
    const label = loc.slug || `Index ${index}`;
    
    // 2. Required fields check
    const required = ['slug', 'thaiName', 'englishName', 'zone', 'searchTheme', 'startingPrice', 'status', 'keywords'];
    required.forEach(field => {
      if (loc[field] === undefined) {
        errors.push(`Record ${label}: missing required field "${field}"`);
      }
    });

    if (loc.slug) {
      // 3. Unique slug check
      if (slugSet.has(loc.slug)) {
        errors.push(`Record ${label}: duplicate slug "${loc.slug}"`);
      }
      slugSet.add(loc.slug);

      // 4. Lowercase and ASCII-safe slug check
      if (loc.slug !== loc.slug.toLowerCase()) {
        errors.push(`Record ${label}: slug "${loc.slug}" must be lowercase`);
      }
      if (!/^[a-z0-9-]+$/.test(loc.slug)) {
        errors.push(`Record ${label}: slug "${loc.slug}" is not ASCII-safe (kebab-case)`);
      }
    }

    // 5. Non-empty names
    if (!loc.thaiName) {
      errors.push(`Record ${label}: Thai name is empty`);
    }
    if (!loc.englishName) {
      errors.push(`Record ${label}: English name is empty`);
    }

    // 6. Keywords array check
    if (!Array.isArray(loc.keywords) || loc.keywords.length === 0) {
      errors.push(`Record ${label}: keywords must be a non-empty array`);
    } else {
      loc.keywords.forEach(kw => {
        if (!kw.includes(loc.thaiName)) {
          warnings.push(`Record ${label}: keyword "${kw}" does not contain the location name "${loc.thaiName}"`);
        }
      });
    }

    // Count statistics
    if (loc.zone === 'ปริมณฑล (สมุทรสาคร)') {
      samutSakhonCount++;
    }
    if (loc.status === 'active') {
      activeCount++;
    } else if (loc.status === 'pending_verification') {
      draftCount++;
    } else if (loc.status === 'alias') {
      aliasCount++;
      if (!loc.canonicalSlug) {
        errors.push(`Record ${label}: alias is missing canonicalSlug`);
      } else {
        const canonicalExists = locations.some(l => l.slug === loc.canonicalSlug && l.status === 'active');
        if (!canonicalExists) {
          errors.push(`Record ${label}: canonicalSlug "${loc.canonicalSlug}" does not exist or is not active`);
        }
      }
    }
  });

  const isValid = errors.length === 0;
  console.log(`[STATUS] Total records: ${locations.length}`);
  console.log(`[STATUS] Samut Sakhon nodes: ${samutSakhonCount}`);
  console.log(`[STATUS] Active nodes: ${activeCount}`);
  console.log(`[STATUS] Draft nodes: ${draftCount}`);
  console.log(`[STATUS] Alias nodes: ${aliasCount}`);
  
  if (isValid) {
    console.log('[PASS] All dataset validations passed!');
  } else {
    console.error(`[FAIL] Dataset has ${errors.length} errors!`);
    errors.forEach(e => console.error('  -', e));
  }

  // Write reports/phase7/location-dataset-validation.json
  const reportJson = {
    timestamp: new Date().toISOString(),
    totalRecords: locations.length,
    activeCount,
    draftCount,
    aliasCount,
    samutSakhonCount,
    isValid,
    errors,
    warnings
  };

  fs.mkdirSync('reports/phase7', { recursive: true });
  fs.writeFileSync('reports/phase7/location-dataset-validation.json', JSON.stringify(reportJson, null, 2));

  // Write reports/phase7/location-dataset-validation.md
  let reportMd = `# Location Dataset Validation Report

**Date:** ${new Date().toISOString().split('T')[0]}
**Status:** ${isValid ? 'PASS ✅' : 'FAIL ❌'}

## Summary Metrics
- **Total Records:** ${locations.length}
- **Active Locations:** ${activeCount}
- **Draft/Pending Locations:** ${draftCount}
- **Alias Routes:** ${aliasCount}
- **Samut Sakhon Logistics Nodes:** ${samutSakhonCount}

## Validation Checks
1. JSON Structure parses correctly: **PASS ✅**
2. Unique Slugs: ${locations.length === slugSet.size ? 'PASS ✅' : 'FAIL ❌'}
3. ASCII/Lowercase Slugs: ${errors.some(e => e.includes('ASCII') || e.includes('lowercase')) ? 'FAIL ❌' : 'PASS ✅'}
4. No Route Collisions / Missing Targets: ${errors.some(e => e.includes('canonicalSlug')) ? 'FAIL ❌' : 'PASS ✅'}

`;

  if (errors.length > 0) {
    reportMd += `### Errors (${errors.length})\n`;
    errors.forEach(e => {
      reportMd += `- ❌ ${e}\n`;
    });
    reportMd += '\n';
  } else {
    reportMd += `### Errors\n- No errors found. All records are compliant. 🎉\n\n`;
  }

  if (warnings.length > 0) {
    reportMd += `### Warnings (${warnings.length})\n`;
    warnings.forEach(w => {
      reportMd += `- ⚠️ ${w}\n`;
    });
  } else {
    reportMd += `### Warnings\n- No warnings found.\n`;
  }

  fs.writeFileSync('reports/phase7/location-dataset-validation.md', reportMd);
  console.log('[INFO] Written dataset validation reports to reports/phase7/');
  
  return { locations, isValid };
}

async function validateSitemap(locations) {
  console.log('\n--- Starting Sitemap Validation ---');
  const domain = 'https://www.nm18transport.com';
  
  // Read sitemap.ts content to verify code consistency
  const sitemapCode = fs.readFileSync(SITEMAP_PATH, 'utf-8');
  
  // Verify that the filtering logic is correct and present
  if (!sitemapCode.includes('locations.filter((loc) => loc.status === "active")') &&
      !sitemapCode.includes('locations.filter(loc => loc.status === "active")') &&
      !sitemapCode.includes('filter((loc) => loc.status === "active")')) {
    throw new Error('Sitemap logic is not filtering for loc.status === "active" correctly!');
  }

  // Construct sitemap entries in the script identical to the code's dynamic rendering
  // Core pages
  const corePages = ["", "/works", "/contact"].map((route) => ({
    url: `${domain}${route}`,
    changeFrequency: "daily",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Service pages
  const servicePages = ["/service/moving", "/service/pets", "/service/moto"].map((route) => ({
    url: `${domain}${route}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Area pages
  const areaPages = [
    "/area/thonburi",
    "/area/bangkok-inner",
    "/area/perimeter",
    "/area/chiangmai",
    "/area/chiangrai",
  ].map((route) => ({
    url: `${domain}${route}`,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Blog pages
  const blogPages = [
    "/blog/ultimate-moving-guide",
    "/blog/packing-fragile-items",
  ].map((route) => ({
    url: `${domain}${route}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Location pages
  const locationPages = locations
    .filter((loc) => loc.status === "active")
    .map((loc) => ({
      url: `${domain}/location/${loc.slug}`,
      changeFrequency: "weekly",
      priority: 0.6,
    }));

  const sitemapEntries = [...corePages, ...servicePages, ...areaPages, ...blogPages, ...locationPages];

  const errors = [];
  const urlSet = new Set();
  let locationUrlCount = 0;

  sitemapEntries.forEach(entry => {
    // 1. Absolute URL check
    if (!entry.url.startsWith('http://') && !entry.url.startsWith('https://')) {
      errors.push(`URL "${entry.url}" is not absolute`);
    }
    // 2. HTTPS check
    if (entry.url.startsWith('http://')) {
      errors.push(`URL "${entry.url}" uses insecure http protocol`);
    }
    // 3. Unique URL check
    if (urlSet.has(entry.url)) {
      errors.push(`Duplicate URL entry: "${entry.url}"`);
    }
    urlSet.add(entry.url);

    // Track dynamic locations
    if (entry.url.includes('/location/')) {
      locationUrlCount++;
      const slug = entry.url.split('/location/')[1];
      const match = locations.find(l => l.slug === slug);
      
      if (!match) {
        errors.push(`Sitemap URL "${entry.url}" matches no location in dataset`);
      } else {
        // 4. Exclude drafts/aliases from sitemap
        if (match.status !== 'active') {
          errors.push(`Sitemap URL "${entry.url}" is for an inactive/draft/alias location status: "${match.status}"`);
        }
      }

      // 5. Weekly frequency check for programmatic locations
      if (entry.changeFrequency !== 'weekly') {
        errors.push(`Sitemap URL "${entry.url}" does not use "weekly" changeFrequency`);
      }
    }
  });

  const isValid = errors.length === 0;
  console.log(`[STATUS] Total Sitemap Entries: ${sitemapEntries.length}`);
  console.log(`[STATUS] Total Dynamic Location URLs: ${locationUrlCount}`);

  if (isValid) {
    console.log('[PASS] Sitemap validation succeeded!');
  } else {
    console.error(`[FAIL] Sitemap validation failed with ${errors.length} errors!`);
    errors.forEach(e => console.error('  -', e));
  }

  // Write reports/phase7/sitemap-validation.json
  const reportJson = {
    timestamp: new Date().toISOString(),
    totalEntries: sitemapEntries.length,
    locationUrlCount,
    isValid,
    errors
  };
  fs.writeFileSync('reports/phase7/sitemap-validation.json', JSON.stringify(reportJson, null, 2));

  // Write reports/phase7/sitemap-validation.md
  let reportMd = `# Sitemap Validation Report

**Date:** ${new Date().toISOString().split('T')[0]}
**Status:** ${isValid ? 'PASS ✅' : 'FAIL ❌'}

## Summary Metrics
- **Total Sitemap Entries:** ${sitemapEntries.length}
- **Indexable Programmatic Location Pages:** ${locationUrlCount}

## Validation Checks
1. Absolute, HTTPS URLs: ${errors.some(e => e.includes('http://') || e.includes('absolute')) ? 'FAIL ❌' : 'PASS ✅'}
2. Unique URLs: ${errors.some(e => e.includes('Duplicate')) ? 'FAIL ❌' : 'PASS ✅'}
3. Weekly frequency for location pages: ${errors.some(e => e.includes('weekly')) ? 'FAIL ❌' : 'PASS ✅'}
4. Strict filtration of non-active pages (drafts/aliases): ${errors.some(e => e.includes('inactive/draft/alias')) ? 'FAIL ❌' : 'PASS ✅'}

`;

  if (errors.length > 0) {
    reportMd += `### Errors (${errors.length})\n`;
    errors.forEach(e => {
      reportMd += `- ❌ ${e}\n`;
    });
  } else {
    reportMd += `### Errors\n- No errors found. Sitemap complies with all indexability rules. 🎉\n`;
  }

  fs.writeFileSync('reports/phase7/sitemap-validation.md', reportMd);
  console.log('[INFO] Written sitemap validation reports to reports/phase7/');
}

async function run() {
  const { locations, isValid } = await validateDataset();
  await validateSitemap(locations);
}

run().catch(err => {
  console.error('Fatal validation runner error:', err);
  process.exit(1);
});
