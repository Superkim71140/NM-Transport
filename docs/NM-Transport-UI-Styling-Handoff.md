# NM-Transport UI Styling Handoff Documentation

This document serves as the complete, read-only UI styling and design handoff report for the `NM-Transport-main` Next.js project. It details all design tokens, global stylesheets, the updated uncropped `ServiceCard` implementation, the `#services` section markup, and the SEO preservation record.

---

## A. Tailwind Configuration (`tailwind.config.ts`)

The project uses Tailwind CSS with custom extensions tailored for the Navy Dark & Neon Orange/Lava brand visual identity.

### Content Paths
```ts
content: [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
]
```

### Theme Extensions

#### 1. Typography & Fonts
* **Font Family**:
  * `sans`: `['var(--font-prompt)', 'sans-serif']` (Google Fonts Prompt font via CSS variable)

#### 2. Color Palette
* **Navy Core**:
  * `navy.dark`: `#050a14` (Deep background canvas)
  * `navy.primary`: `#0f1c38` (Card & section container background)
* **Orange Accents**:
  * `orange.lava`: `#FF4500` (Primary CTA, highlight borders, icons)
  * `orange.glow`: `#ff6b35` (Hover state for interactive elements)
* **Status & Neon Accents**:
  * `neon.blue`: `#00f2ff` (Highlights, stats counters)
  * `gold`: `#FFD700` (Certificates, trust badges)
  * `line-green`: `#06C755` (LINE messaging button, checklist indicators)
  * `fb-blue`: `#1877F2` (Facebook social links)
* **Text**:
  * `text-gray`: `#B0B8C4` (Body copy, muted descriptions)

#### 3. Box Shadows & Neon Effects
* `neon-orange`: `0 0 15px rgba(255, 69, 0, 0.6)`
* `neon-orange-strong`: `0 0 25px rgba(255, 69, 0, 0.8)`
* `neon-green`: `0 0 15px rgba(6, 199, 85, 0.6)`
* `neon-blue`: `0 0 20px rgba(0, 242, 255, 0.4)`

#### 4. Background Gradients
* `glass-gradient`: `linear-gradient(145deg, rgba(15, 28, 56, 0.9), rgba(5, 10, 20, 0.95))`
* `glass-gradient-light`: `linear-gradient(145deg, rgba(15, 28, 56, 0.95), rgba(255, 255, 255, 0.02))`

### Complete Source Code (`tailwind.config.ts`)
```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-prompt)', 'sans-serif'],
      },
      colors: {
        navy: {
          dark: '#050a14',
          primary: '#0f1c38',
        },
        orange: {
          lava: '#FF4500',
          glow: '#ff6b35',
        },
        neon: {
          blue: '#00f2ff',
        },
        gold: '#FFD700',
        'text-gray': '#B0B8C4',
        'line-green': '#06C755',
        'fb-blue': '#1877F2',
      },
      boxShadow: {
        'neon-orange': '0 0 15px rgba(255, 69, 0, 0.6)',
        'neon-orange-strong': '0 0 25px rgba(255, 69, 0, 0.8)',
        'neon-green': '0 0 15px rgba(6, 199, 85, 0.6)',
        'neon-blue': '0 0 20px rgba(0, 242, 255, 0.4)',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(145deg, rgba(15, 28, 56, 0.9), rgba(5, 10, 20, 0.95))',
        'glass-gradient-light': 'linear-gradient(145deg, rgba(15, 28, 56, 0.95), rgba(255, 255, 255, 0.02))',
      }
    },
  },
  plugins: [],
};
export default config;
```

---

## B. Global Stylesheet (`src/app/globals.css`)

### Base Layer Defaults
* **Smooth Scrolling**: `html { scroll-behavior: smooth; }`
* **Body Styling**:
  * Default background: `#050a14` (`theme('colors.navy.dark')`)
  * Default text color: `#B0B8C4` (`theme('colors.text-gray')`)
  * Default line height: `1.6`
  * Mobile padding offset: `padding-bottom: 70px;` (reserves vertical clearance for the fixed mobile sticky action bar)
  * Desktop parallax/attachment: `@media (min-width: 1024px) { body { background-attachment: fixed; } }`

### Custom Utility Classes
* `.glass-card`: Glassmorphism panel styling with subtle orange lava border (`border: 1px solid rgba(255, 69, 0, 0.2)`) and depth shadow (`box-shadow: 0 10px 20px rgba(0,0,0,0.3)`).
* `.glass-header`: Sticky navigation bar glassmorphism with `backdrop-filter: blur(15px)` and `rgba(15, 28, 56, 0.95)`.
* `.text-shadow-neon`: Neon glowing text shadow effect (`text-shadow: 0 0 15px rgba(255, 69, 0, 0.8)`).
* `.glow-blue`: Soft blue glow shadow (`box-shadow: 0 0 20px rgba(0, 242, 255, 0.4)`).

### CSS Keyframes
* `@keyframes shine`: Shimmer highlight sweep animation across promotional elements (`0% { left: -50%; } 100% { left: 150%; }`).
* `@keyframes neonPulse`: Pulsing neon text glow for prices and hero callouts (`0% { text-shadow: 0 0 10px rgba(255,69,0,0.4); } 100% { text-shadow: 0 0 25px rgba(255,69,0,0.8); }`).

### Complete Source Code (`src/app/globals.css`)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  body {
    background-color: theme('colors.navy.dark');
    color: theme('colors.text-gray');
    line-height: 1.6;
    padding-bottom: 70px; /* For mobile sticky bar */
  }

  @media (min-width: 1024px) {
    body {
      background-attachment: fixed;
    }
  }
}

@layer utilities {
  .glass-card {
    background: theme('backgroundImage.glass-gradient');
    border: 1px solid rgba(255, 69, 0, 0.2);
    box-shadow: 0 10px 20px rgba(0,0,0,0.3);
  }
  
  .glass-header {
    background: rgba(15, 28, Source: 56, 0.95);
    backdrop-filter: blur(15px);
  }

  .text-shadow-neon {
    text-shadow: 0 0 15px rgba(255, 69, 0, 0.8);
  }
  
  .glow-blue {
    box-shadow: 0 0 20px rgba(0, 242, 255, 0.4);
  }

  /* Keyframes for animations defined in Step 4 */
  @keyframes shine { 
    0% { left: -50%; } 
    100% { left: 150%; } 
  }
  @keyframes neonPulse { 
    0% { text-shadow: 0 0 10px rgba(255,69,0,0.4); } 
    100% { text-shadow: 0 0 25px rgba(255,69,0,0.8); } 
  }
}
```

---

## C. Updated Component (`src/components/cards/ServiceCard.tsx`)

### Problem Analysis & Root Cause of Previous Cropping
1. **Aspect Ratio Mismatch**: The container was constrained to `aspect-[16/10]` (1.6 ratio), whereas the actual source assets are `1672 × 941` px (1.7768 ratio).
2. **`object-cover` with `fill`**: Stretched and cropped the left and right borders of the banners, removing critical Thai headline characters and the N&M18 logo.
3. **Gradient Overlay**: An absolute gradient overlay (`bg-gradient-to-t from-[#0f1c38]/55`) dimmed and masked the bottom portion of the banner graphic.
4. **Hover Scale**: `group-hover:scale-105` inside an `overflow-hidden` container clipped image boundaries upon hover.
5. **Corner Radius Clipping**: Edge-to-edge images were clipped by the article's `rounded-2xl` corners.

### Applied Solution
* **Natural Aspect Ratio**: Utilizes Next.js intrinsic image sizing with `width={1672}` and `height={941}`, rendering naturally via `w-full h-auto`.
* **Zero Cropping (`object-contain`)**: Guaranteed 100% image presentation across mobile, tablet, and desktop viewports.
* **Protective Inset & Background**: Encased in a `bg-[#0b1730] p-1 sm:p-1.5` container with `rounded-xl` image border to ensure card rounded corners (`rounded-2xl`) never cut into headline typography or logos.
* **Separation & Equal Heights**: Added `p-5 sm:p-6` to the lower card body with `flex-1` layout, ensuring clean separation from the icon and equal heights across all three grid columns.
* **Overlay & Zoom Removal**: Removed dark gradient overlay and hover scaling to maintain total readability and prevent cumulative layout shift (CLS).

### Complete Component Code
```tsx
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: IconType;
  href: string;
  imageSrc: string;
  imageAlt: string;
  ctaLabel?: string;
};

export function ServiceCard({
  title,
  description,
  icon: Icon,
  href,
  imageSrc,
  imageAlt,
  ctaLabel = "ดูรายละเอียด / จองคิว →",
}: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0f1c38]/90 shadow-[0_14px_35px_rgba(0,0,0,0.28)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-lava hover:shadow-[0_18px_45px_rgba(0,0,0,0.4)]">
      <div className="relative w-full overflow-hidden bg-[#0b1730] p-1 sm:p-1.5">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1672}
          height={941}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="block h-auto w-full rounded-xl object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-orange-lava/30 bg-orange-lava/10 text-xl text-orange-lava">
          <Icon aria-hidden="true" focusable="false" />
        </div>

        <h3 className="mb-3 text-xl font-bold leading-tight text-white">
          {title}
        </h3>

        <p className="mb-6 flex-1 leading-relaxed text-slate-300">
          {description}
        </p>

        <Link
          href={href}
          aria-label={`${ctaLabel}: ${title}`}
          className="inline-flex w-fit items-center font-semibold text-orange-lava transition-colors hover:text-orange-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-lava focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1c38]"
        >
          {ctaLabel}
        </Link>
      </div>
    </article>
  );
}
```

---

## D. Service Section Markup (`src/app/page.tsx`)

Below is the complete “บริการของเรา” / `#services` section excerpt from `src/app/page.tsx`:

```tsx
      {/* SERVICES */}
      <section className="py-[80px]" id="services">
        <Container>
          <div className="text-center mb-[60px] -mt-[20px]">
            <h2 className="text-[2.5rem] font-bold text-white mb-5 relative inline-block after:content-[''] after:block after:w-[80px] after:h-[5px] after:bg-orange-lava after:my-[15px] after:mx-auto after:shadow-neon-orange after:rounded-[5px]">บริการของเรา</h2>
            <p className="text-text-gray max-w-2xl mx-auto">ตอบโจทย์ทุกการขนย้าย ด้วยรถกระบะตู้ทึบมาตรฐาน</p>
          </div>
          <div className="grid grid-cols-1 items-stretch gap-[30px] md:grid-cols-3">
            <ServiceCard
              title="รับส่งมอเตอร์ไซค์"
              description="มีอุปกรณ์ล็อคล้อ เชือกมัดแน่นหนา ยกขึ้น-ลงให้ ไม่ต้องเหนื่อยเอง ส่งถึงหน้าบ้าน"
              icon={FaMotorcycle}
              href="/service/moto"
              imageSrc="/NM18-motorcycle-bigbike-transport.webp"
              imageAlt="บริการรับส่งมอเตอร์ไซค์และบิ๊กไบค์ด้วยรถกระบะตู้ทึบ N&M18 TRANSPORT"
            />

            <ServiceCard
              title="ย้ายบ้าน / ย้ายหอ"
              description="ขนย้ายเฟอร์นิเจอร์ ตู้เย็น เครื่องซักผ้า รถตู้ทึบกันฝน 100% ของเยอะแค่ไหนก็จัดให้คุ้ม"
              icon={FaBoxOpen}
              href="/service/moving"
              imageSrc="/NM18-house-condo-moving-service.webp"
              imageAlt="บริการย้ายบ้าน ย้ายหอ และย้ายคอนโดด้วยรถกระบะตู้ทึบ N&M18 TRANSPORT"
            />

            <ServiceCard
              title="ฝากส่งสินค้า/เหมาคัน"
              description="รับฝากส่งสินค้าชิ้นใหญ่ ชิ้นเล็ก ไปต่างจังหวัด วิ่งงานด่วน งานเหมา ทั่วราชอาณาจักร"
              icon={FaTruckPickup}
              href="/contact"
              imageSrc="/NM18-freight-cargo-chartered-truck.webp"
              imageAlt="บริการฝากส่งสินค้าและเหมาคัน รถกระบะตู้ทึบขนส่งทั่วไทย N&M18 TRANSPORT"
            />
          </div>
        </Container>
      </section>
```

---

## E. Design-Token Summary Table

| Token / Class Name | Actual Value / Hex | Visual Purpose | Source File |
| :--- | :--- | :--- | :--- |
| `navy.dark` | `#050a14` | Global canvas / page background | `tailwind.config.ts` |
| `navy.primary` | `#0f1c38` | Card background, container surfaces | `tailwind.config.ts` |
| `bg-[#0b1730]` | `#0b1730` | Inset frame background behind banner images | `ServiceCard.tsx` |
| `orange.lava` | `#FF4500` | Primary brand accent, icons, CTA text, active borders | `tailwind.config.ts` |
| `orange.glow` | `#ff6b35` | Interactive hover accent for buttons/links | `tailwind.config.ts` |
| `neon.blue` | `#00f2ff` | Stats accents, icons, and counter glow | `tailwind.config.ts` |
| `gold` | `#FFD700` | License certificates and trust badges | `tailwind.config.ts` |
| `text-gray` | `#B0B8C4` | Global body text & subheadings | `tailwind.config.ts` |
| `text-slate-300` | `#cbd5e1` | High-contrast description text inside cards | `ServiceCard.tsx` |
| `line-green` | `#06C755` | LINE official chat indicators & checkmarks | `tailwind.config.ts` |
| `fb-blue` | `#1877F2` | Facebook review button background | `tailwind.config.ts` |
| `font-sans` | `'var(--font-prompt)', sans-serif` | Global font family (Google Prompt) | `tailwind.config.ts` |
| `glass-gradient` | `linear-gradient(145deg, rgba(15,28,56,0.9), rgba(5,10,20,0.95))` | Glassmorphism card fill | `tailwind.config.ts` |
| `glass-card` | Gradient fill + lava border + depth shadow | Utility class for elevated cards | `src/app/globals.css` |
| `glass-header` | `rgba(15, 28, 56, 0.95)` + `blur(15px)` | Utility class for sticky navigation | `src/app/globals.css` |
| `shadow-neon-orange` | `0 0 15px rgba(255, 69, 0, 0.6)` | Button and badge neon glow | `tailwind.config.ts` |
| `shadow-[0_14px_35px_rgba(0,0,0,0.28)]` | `rgba(0,0,0,0.28)` | Default elevation shadow for ServiceCard | `ServiceCard.tsx` |
| `shadow-[0_18px_45px_rgba(0,0,0,0.4)]` | `rgba(0,0,0,0.4)` | Hover elevation shadow for ServiceCard | `ServiceCard.tsx` |

---

## F. SEO Preservation Record

| SEO / Routing Parameter | State | Detailed Verification |
| :--- | :--- | :--- |
| **Routes & Slugs** | **UNCHANGED** | `/`, `/service/moto`, `/service/moving`, `/service/pets`, `/contact`, `/works`, `/area/*`, `/location/*`, `/route/*` fully preserved. |
| **Links & CTA Destinations** | **UNCHANGED** | Exact link targets preserved: `/service/moto`, `/service/moving`, and `/contact`. |
| **Canonical Tags** | **UNCHANGED** | Primary canonical `https://www.nm18transport.com/` and page-level alternates untouched. |
| **Metadata & Open Graph** | **UNCHANGED** | `title`, `description`, OpenGraph cards, and Twitter cards identical across all routes. |
| **JSON-LD Schemas** | **UNCHANGED** | LocalBusiness, BreadcrumbList, and Service schema blocks preserved without modification. |
| **Sitemap & Robots** | **UNCHANGED** | `src/app/sitemap.ts` and `src/app/robots.ts` left 100% untouched. |
| **Image Alt Text** | **UNCHANGED** | Exact Thai SEO alt attributes preserved: <br>1. `"บริการรับส่งมอเตอร์ไซค์และบิ๊กไบค์ด้วยรถกระบะตู้ทึบ N&M18 TRANSPORT"`<br>2. `"บริการย้ายบ้าน ย้ายหอ และย้ายคอนโดด้วยรถกระบะตู้ทึบ N&M18 TRANSPORT"`<br>3. `"บริการฝากส่งสินค้าและเหมาคัน รถกระบะตู้ทึบขนส่งทั่วไทย N&M18 TRANSPORT"` |
| **Heading Hierarchy** | **UNCHANGED** | Single `h1` in hero, `h2` for `"บริการของเรา"`, and semantic `h3` for individual card service titles strictly maintained. |
