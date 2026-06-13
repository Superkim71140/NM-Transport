import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const TARGET_DIRS = [
  'public/images/portfolio',
  'public/images/logos'
];

const ALLOWED_EXTS = ['.jpg', '.jpeg', '.png'];

async function run() {
  console.log('Starting WebP conversion process...');
  
  const manifest = {
    timestamp: new Date().toISOString(),
    tool: `sharp v${sharp.versions.sharp}`,
    node: process.version,
    converted: [],
    skipped: [],
    failed: []
  };

  for (const dir of TARGET_DIRS) {
    await processDirectory(dir, manifest);
  }

  // Create reports folder if not exists
  const reportDir = 'reports/phase5';
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }

  // Write JSON manifest
  fs.writeFileSync(
    path.join(reportDir, 'webp-conversion-manifest.json'),
    JSON.stringify(manifest, null, 2)
  );

  // Write human-readable Markdown report
  let totalSourceBytes = 0;
  let totalOutputBytes = 0;
  
  let convertedRows = '';
  for (const item of manifest.converted) {
    totalSourceBytes += item.sourceSize;
    totalOutputBytes += item.outputSize;
    
    const sourceKb = (item.sourceSize / 1024).toFixed(1);
    const outputKb = (item.outputSize / 1024).toFixed(1);
    convertedRows += `| \`${path.basename(item.inputPath)}\` | ${item.width}x${item.height} | ${sourceKb} KB | ${outputKb} KB | ${item.reductionPercent}% | ${item.profile} | ${item.warning || 'None'} |\n`;
  }

  const savingsBytes = totalSourceBytes - totalOutputBytes;
  const savingsMb = (savingsBytes / (1024 * 1024)).toFixed(2);
  const overallReduction = totalSourceBytes > 0 ? ((savingsBytes / totalSourceBytes) * 100).toFixed(1) : '0';

  let failedRows = '';
  for (const item of manifest.failed) {
    failedRows += `| \`${path.basename(item.file)}\` | ${item.error} |\n`;
  }

  const summaryMarkdown = `# WebP Image Conversion Summary (Phase 5)

- **Timestamp:** ${manifest.timestamp}
- **Conversion Tool:** ${manifest.tool}
- **Node.js version:** ${manifest.node}
- **Total Converted Assets:** ${manifest.converted.length}
- **Total Failed Assets:** ${manifest.failed.length}
- **Total Bytes Saved:** ${savingsMb} MB (${overallReduction}% overall reduction)

## Converted Assets Detail

| File Name | Resolution | Source Size | WebP Size | Reduction | Profile | Warnings |
| --- | --- | --- | --- | --- | --- | --- |
${convertedRows || '| None | - | - | - | - | - | - |\n'}

${manifest.failed.length > 0 ? `## Failed Conversions

| File Name | Error Message |
| --- | --- |
${failedRows}
` : '## All Conversions Passed Successfully'}
`;

  fs.writeFileSync(
    path.join(reportDir, 'webp-conversion-summary.md'),
    summaryMarkdown
  );

  console.log(`WebP conversion finished! Converted: ${manifest.converted.length}, Failed: ${manifest.failed.length}. Saved ${savingsMb} MB.`);
  
  if (manifest.failed.length > 0) {
    process.exit(1);
  }
}

async function processDirectory(dir, manifest) {
  if (!fs.existsSync(dir)) {
    console.warn(`Warning: Target directory does not exist: ${dir}`);
    return;
  }
  
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      await processDirectory(fullPath, manifest);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (ALLOWED_EXTS.includes(ext)) {
        await convertFile(fullPath, manifest);
      } else if (ext !== '.webp') {
        manifest.skipped.push({
          file: fullPath,
          reason: `Unsupported extension: ${ext}`
        });
      }
    }
  }
}

async function convertFile(filePath, manifest) {
  const ext = path.extname(filePath).toLowerCase();
  const dir = path.dirname(filePath);
  const baseName = path.basename(filePath, ext);
  const outPath = path.join(dir, `${baseName}.webp`);
  
  const isLogo = filePath.includes('logos');
  const profile = isLogo ? 'Logo (Lossless/Near-Lossless)' : 'Portfolio Photo (Lossy Q75)';
  
  try {
    const inputBuffer = fs.readFileSync(filePath);
    const image = sharp(inputBuffer);
    const metadata = await image.metadata();
    
    let converter = sharp(inputBuffer);
    if (isLogo) {
      // Lossless WebP for logos to keep perfect transparency and shape crispness
      converter = converter.webp({ lossless: true, effort: 6 });
    } else {
      // Q75 lossy WebP for photos
      converter = converter.webp({ quality: 75, effort: 4 });
    }
    
    const outputBuffer = await converter.toBuffer();
    
    // Validate the generated WebP file by decoding it
    const outImage = sharp(outputBuffer);
    const outMetadata = await outImage.metadata();
    
    if (!outMetadata.width || !outMetadata.height || outMetadata.width !== metadata.width || outMetadata.height !== metadata.height) {
      throw new Error(`Dimension mismatch: expected ${metadata.width}x${metadata.height}, got ${outMetadata.width}x${outMetadata.height}`);
    }
    
    if (outputBuffer.length === 0) {
      throw new Error('WebP output buffer is empty (0 bytes)');
    }
    
    // Write WebP file to disk
    fs.writeFileSync(outPath, outputBuffer);
    
    const byteReduction = ((inputBuffer.length - outputBuffer.length) / inputBuffer.length) * 100;
    
    const record = {
      inputPath: filePath,
      outputPath: outPath,
      profile,
      width: metadata.width,
      height: metadata.height,
      hasAlpha: !!metadata.hasAlpha,
      sourceSize: inputBuffer.length,
      outputSize: outputBuffer.length,
      reductionPercent: byteReduction.toFixed(1),
      status: 'success'
    };
    
    if (outputBuffer.length > inputBuffer.length) {
      record.warning = 'WebP output size is larger than source';
    }
    
    manifest.converted.push(record);
    console.log(`Converted: ${filePath} -> ${outPath} (${byteReduction.toFixed(1)}% savings)`);
  } catch (error) {
    console.error(`Failed to convert ${filePath}:`, error.message);
    manifest.failed.push({
      file: filePath,
      error: error.message
    });
  }
}

run().catch((err) => {
  console.error('Fatal error during execution:', err);
  process.exit(1);
});
