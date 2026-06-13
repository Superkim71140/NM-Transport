import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(__dirname, '../src');

// Map of fontawesome class to React Icon name
const iconMap = {
  'fa-money-bill-wave': 'FaMoneyBillWave',
  'fa-map-location-dot': 'FaMapLocationDot',
  'fa-user-shield': 'FaUserShield',
  'fa-images': 'FaImages',
  'fa-facebook': 'FaFacebookF',
  'fa-tag': 'FaTag',
  'fa-check': 'FaCheck',
  'fa-xmark': 'FaXmark',
  'fa-shield-cat': 'FaShieldCat',
  'fa-question': 'FaQuestion',
  'fa-truck-ramp-box': 'FaTruckRampBox',
  'fa-umbrella': 'FaUmbrella',
  'fa-headset': 'FaHeadset',
  'fa-certificate': 'FaCertificate',
  'fa-truck-fast': 'FaTruckFast',
  'fa-face-smile': 'FaFaceSmile',
  'fa-clock': 'FaClock',
  'fa-motorcycle': 'FaMotorcycle',
  'fa-box-open': 'FaBoxOpen',
  'fa-truck-pickup': 'FaTruckPickup',
  'fa-calculator': 'FaCalculator',
  'fa-line': 'FaLine',
  'fa-phone-volume': 'FaPhoneVolume',
  'fa-route': 'FaRoute',
  'fa-house-circle-check': 'FaHouseCircleCheck',
  'fa-shield-halved': 'FaShieldHalved',
  'fa-users': 'FaUsers',
  'fa-chevron-down': 'FaChevronDown',
  // Others
  'fa-chevron-left': 'FaChevronLeft',
  'fa-chevron-right': 'FaChevronRight',
  'fa-quote-left': 'FaQuoteLeft',
  'fa-phone': 'FaPhone',
  'fa-thumbs-up': 'FaThumbsUp',
  'fa-bolt-lightning': 'FaBoltLightning',
  'fa-facebook-messenger': 'FaFacebookMessenger',
  'fa-bars': 'FaBars',
  'fa-angle-right': 'FaAngleRight',
  'fa-truck-front': 'FaTruckFront',
  'fa-camera': 'FaCamera',
  'fa-building-user': 'FaBuildingUser',
  'fa-city': 'FaCity',
  'fa-train-subway': 'FaTrainSubway',
  'fa-champagne-glasses': 'FaChampagneGlasses',
  'fa-building': 'FaBuilding',
  'fa-briefcase': 'FaBriefcase',
  'fa-monument': 'FaMonument',
  'fa-shop': 'FaShop',
  'fa-road': 'FaRoad',
  'fa-water': 'FaWater',
  'fa-archway': 'FaArchway',
  'fa-tree-city': 'FaTreeCity',
  'fa-tree': 'FaTree',
  'fa-mountain': 'FaMountain',
  'fa-bolt': 'FaBolt',
  'fa-paw': 'FaPaw',
  'fa-location-dot': 'FaLocationDot',
  'fa-star': 'FaStar',
  'fa-star-half-stroke': 'FaStarHalfStroke',
  'fa-lock': 'FaLock',
  'fa-house-chimney': 'FaHouseChimney',
  'fa-truck-house': 'FaTruck',
  'fa-graduation-cap': 'FaGraduationCap',
  'fa-user-graduate': 'FaUserGraduate',
  'fa-truck': 'FaTruck',
  'fa-truck-moving': 'FaTruckMoving',
  'fa-stopwatch-20': 'FaStopwatch20',
  'fa-hand-holding-dollar': 'FaHandHoldingDollar',
  'fa-stopwatch': 'FaStopwatch',
  'fa-boxes-packing': 'FaBoxesPacking',
  'fa-wine-glass': 'FaWineGlass',
  'fa-tv': 'FaTv',
  'fa-pen-clip': 'FaPenClip',
  'fa-shield-check': 'FaShieldHalved',
  'fa-arrow-right': 'FaArrowRight',
  'fa-calendar-check': 'FaCalendarCheck',
  'fa-list-check': 'FaListCheck',
  'fa-boxes-stacked': 'FaBoxesStacked',
  'fa-triangle-exclamation': 'FaTriangleExclamation',
  'fa-file-invoice-dollar': 'FaFileInvoiceDollar',
  'fa-circle-xmark': 'FaCircleXmark',
  'fa-circle-check': 'FaCircleCheck',
  'fa-house': 'FaHouse',
  'fa-people-carry-box': 'FaPeopleCarryBox',
  'fa-box': 'FaBox',
  'fa-layer-group': 'FaLayerGroup',
  'fa-heart': 'FaHeart',
  'fa-dolly': 'FaDolly',
  'fa-temperature-arrow-down': 'FaTemperatureArrowDown',
  'fa-pump-medical': 'FaPumpMedical',
  'fa-video': 'FaVideo',
  'fa-hand-holding-heart': 'FaHandHoldingHeart',
  'fa-clipboard-list': 'FaClipboardList',
  'fa-car': 'FaCar',
  'fa-wind': 'FaWind',
};

async function walk(dir) {
  let results = [];
  const list = await fs.readdir(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = await fs.stat(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(await walk(filePath));
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      results.push(filePath);
    }
  }
  return results;
}

function camelToKebab(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

async function processFile(filePath) {
  let content = await fs.readFile(filePath, 'utf8');
  let originalContent = content;
  let importedIcons = new Set();
  
  // Replace <i className="..."></i>
  // This regex matches <i className="some classes"></i> and extracts the classes
  const iTagRegex = /<i\s+className=(["`'])(.*?)\1(?:[^>]*)><\/i>/g;
  content = content.replace(iTagRegex, (match, quote, classes) => {
    // Check if it has fa-solid, fa-brands, or fa-regular
    if (!classes.includes('fa-')) return match;
    
    // Find the specific icon
    let iconName = null;
    let otherClasses = classes.replace(/fa-(?:solid|brands|regular|lg)\s*/g, '');
    
    for (const [faClass, reactIcon] of Object.entries(iconMap)) {
      if (classes.includes(faClass)) {
        iconName = reactIcon;
        otherClasses = otherClasses.replace(faClass, '').trim();
        break;
      }
    }
    
    if (!iconName) {
      console.warn(`Could not find mapping for icon in: ${classes} (File: ${filePath})`);
      return match;
    }
    
    importedIcons.add(iconName);
    
    // Combine classes
    let finalClasses = `h-[1em] w-[1em] shrink-0 ${otherClasses}`.trim();
    return `<${iconName} aria-hidden="true" focusable="false" className="${finalClasses}" />`;
  });
  
  // Replace string props like icon="fa-solid fa-phone"
  const propRegex = /icon=(["'])(fa-(?:solid|brands|regular)\s+fa-[\w-]+)\1/g;
  content = content.replace(propRegex, (match, quote, iconClassStr) => {
    let iconName = null;
    for (const [faClass, reactIcon] of Object.entries(iconMap)) {
      if (iconClassStr.includes(faClass)) {
        iconName = reactIcon;
        break;
      }
    }
    if (iconName) {
      importedIcons.add(iconName);
      return `icon={${iconName}}`;
    }
    return match;
  });

  // Handle Dynamic string interpolation in DropdownMenu/IndexFAQ if any
  // But wait, in AreaCard and ServiceCard we change the definition!
  
  if (importedIcons.size > 0 && content !== originalContent) {
    const importStatement = `import { ${Array.from(importedIcons).join(', ')} } from 'react-icons/fa6';\n`;
    
    // Find where to insert
    const useClientMatch = content.match(/^(['"]use client['"];?\n+)/);
    if (useClientMatch) {
      content = content.slice(0, useClientMatch[0].length) + importStatement + content.slice(useClientMatch[0].length);
    } else {
      content = importStatement + content;
    }
    
    await fs.writeFile(filePath, content, 'utf8');
    console.log(`Updated ${path.basename(filePath)}`);
  }
}

async function run() {
  const files = await walk(srcDir);
  for (const file of files) {
    await processFile(file);
  }
  console.log('Migration step 1 complete.');
}

run().catch(console.error);
