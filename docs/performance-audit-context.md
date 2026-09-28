# Next.js 14 Performance, Loading Speed & Asset Audit Context

This document bundles the complete performance, asset loading, font strategy, bundling configuration, and visual component footprint for the **N&M18 TRANSPORT** Next.js 14 application.

---

## 1. Image Loading Configuration & Performance Strategy Summary

### Image Optimization Matrix (`next/image`)

| Component | Asset Path | Strategy (`priority` / `fill` / `sizes` / `quality`) | Observation & Potential Optimization |
| :--- | :--- | :--- | :--- |
| **Root Layout Preload** | `/images/portfolio/S__2531437.webp` | `<link rel="preload" as="image" href="..." fetchPriority="high" type="image/webp" />` | Preloads image in `<head>` for instant display. |
| **Hero Carousel (Slide 0)** | `/n18back.webp` | `fill`, `priority={true}`, `sizes="(max-width: 768px) 100vw, (max-width: 1280px) 1280px, 1400px"` | LCP candidate. Preloaded with high priority. |
| **Hero Carousel (Slide 1)** | `/n18back1.webp` | `fill`, `priority={false}`, `sizes="(max-width: 768px) 100vw, (max-width: 1280px) 1280px, 1400px"` | Lazy-loaded second slide to avoid LCP bandwidth competition. |
| **Service Highlight Banner** | `/nm18box.webp` | `fill`, `priority={true}`, `sizes="(max-width: 1024px) 100vw, 40vw"` | Worker visual holding package. Sits above fold on some viewports. |
| **Core Services Section** | `/nm18backg.png` | `fill`, `priority={false}`, `sizes="(max-width: 1280px) 100vw, 1400px"`, `opacity-25` | Background decorative asset. Unoptimized PNG format (377 KB). |
| **Comparison Table Section**| `/nm18backg1.png` | `fill`, `priority={false}`, `sizes="(max-width: 1280px) 100vw, 1400px"`, `opacity-25` | Background decorative asset. PNG format (168 KB). |
| **Fleet Authority Cards (x4)**| `/images/portfolio/*.webp` | `fill`, `sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"` | WebP format, responsive sizes. |
| **Fleet Authority Worker** | `/nm18box.webp` | `width={380}`, `height={380}`, `priority={false}` | Below-the-fold image with ambient radial glow. |
| **Gallery Grid (x6)** | `/images/portfolio/*.webp` | `fill`, `loading="lazy"`, `quality={75}`, `sizes="(max-width: 768px) 50vw, 33vw"` | Below-the-fold portfolio showcase. |

---

## 2. Build & Bundling Configurations

### `next.config.mjs`
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
};

export default nextConfig;
```

### `package.json`
```json
{
  "name": "temp-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.2.3",
    "react": "^18",
    "react-dom": "^18",
    "react-icons": "^5.6.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "eslint": "^8",
    "eslint-config-next": "14.2.3",
    "postcss": "^8",
    "sharp": "^0.35.1",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}
```

### `tailwind.config.ts`
```typescript
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

### `src/app/globals.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-navy-dark: #050a14;
  --color-navy-primary: #0f1c38;
  --color-orange-lava: #FF4500;
  --color-orange-glow: #ff6b35;
  --color-neon-blue: #00f2ff;
  --color-text-gray: #B0B8C4;
  --color-line-green: #06C755;
  --color-gold: #FFD700;
}

@layer base {
  html {
    scroll-behavior: smooth;
    color-scheme: dark;
  }

  body {
    background-color: theme('colors.navy.dark', #050a14);
    color: theme('colors.text-gray', #B0B8C4);
    font-family: var(--font-prompt), sans-serif;
    line-height: 1.6;
    padding-bottom: 70px; /* Reserves space for fixed mobile bottom navigation */
    overflow-x: hidden;
  }

  @media (min-width: 768px) {
    body {
      padding-bottom: 0;
    }
  }

  @media (min-width: 1024px) {
    body {
      background-attachment: fixed;
    }
  }

  /* Custom Sleek Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #050a14;
  }

  ::-webkit-scrollbar-thumb {
    background: #1a2c4e;
    border-radius: 4px;
    border: 1px solid rgba(255, 69, 0, 0.2);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #FF4500;
  }
}

@layer utilities {
  .glass-card {
    background: linear-gradient(145deg, rgba(15, 28, 56, 0.9), rgba(5, 10, 20, 0.95));
    border: 1px solid rgba(255, 69, 0, 0.2);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(12px);
  }

  .glass-card-hover {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .glass-card-hover:hover {
    border-color: #FF4500;
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(255, 69, 0, 0.2);
  }
  
  .glass-header {
    background: rgba(15, 28, 56, 0.92);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
  }

  .text-shadow-neon {
    text-shadow: 0 0 15px rgba(255, 69, 0, 0.8);
  }
  
  .text-shadow-blue {
    text-shadow: 0 0 15px rgba(0, 242, 255, 0.8);
  }

  .glow-blue {
    box-shadow: 0 0 20px rgba(0, 242, 255, 0.4);
  }

  .glow-orange {
    box-shadow: 0 0 20px rgba(255, 69, 0, 0.5);
  }

  /* Shimmer and pulse animations */
  @keyframes shine { 
    0% { left: -60%; } 
    100% { left: 160%; } 
  }
  
  @keyframes neonPulse { 
    0% { 
      text-shadow: 0 0 10px rgba(255, 69, 0, 0.4);
      filter: drop-shadow(0 0 5px rgba(255, 69, 0, 0.4));
    } 
    100% { 
      text-shadow: 0 0 25px rgba(255, 69, 0, 0.9);
      filter: drop-shadow(0 0 15px rgba(255, 69, 0, 0.8));
    } 
  }

  @keyframes pulseIcon {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }
}
```

---

## 3. Root Asset Loading & Font Strategy

### `src/app/layout.tsx`
```tsx
import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

import { TopBar } from "../components/layout/TopBar";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { MobileStickyBar } from "../components/layout/MobileStickyBar";

const prompt = Prompt({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['thai', 'latin'],
  display: 'swap',
  variable: '--font-prompt',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nm18transport.com"),
  title: {
    default: "N&M18 TRANSPORT - รถรับจ้างขนของ ย้ายคอนโด ย้ายหอพัก กรุงเทพ-ปริมณฑล เริ่ม 1,000.-",
    template: "%s | N&M18 TRANSPORT"
  },
  description: "N&M18 TRANSPORT บริการรถรับจ้างขนของ รถกระบะตู้ทึบ รถ 4 ล้อใหญ่ ย้ายหอพัก ย้ายคอนโด ย้ายบ้าน กรุงเทพ-ปริมณฑลและทั่วไทย เริ่มต้น 1,000 บาท โทร 095-801-0958",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

const schemaObject = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MovingCompany",
      "@id": "https://www.nm18transport.com/#organization",
      "name": "N&M18 TRANSPORT",
      "image": "https://www.nm18transport.com/images/logos/logo-nm18.png",
      "telephone": "+66958010958",
      "priceRange": "฿1,000 - ฿5,000",
      "url": "https://www.nm18transport.com",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.nm18transport.com/#website",
      "url": "https://www.nm18transport.com",
      "name": "N&M18 TRANSPORT",
      "inLanguage": "th-TH",
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${prompt.variable}`}>
      <head>
        <link rel="preload" as="image" href="/images/portfolio/S__2531437.webp" fetchPriority="high" type="image/webp" />
      </head>
      <body>
        <script
          id="moving-company-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObject).replace(/</g, '\\u003c') }}
        />
        <TopBar />
        <Header />
        {children}
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
```

---

## 4. Homepage Rendering & Dynamic Splitting Strategy

### `src/app/page.tsx`
```tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { HeroCarousel } from '../components/home/HeroCarousel';
import { ServiceHighlightBanner } from '../components/home/ServiceHighlightBanner';
import { CTASection } from '../components/sections/CTASection';
import { ServiceCard } from '../components/cards/ServiceCard';
import { Container } from '../components/ui/Container';
import { FleetAuthoritySection } from '../components/home/FleetAuthoritySection';
import { LazyReviewsSection } from '../components/performance/LazyBelowFoldSections';
import dynamic from 'next/dynamic';
import { ProgrammaticHub } from '../components/seo/ProgrammaticHub';

// Dynamic split for below-the-fold FAQ
const IndexFAQ = dynamic(() => import('./IndexFAQ').then(m => m.IndexFAQ), { ssr: true });

export const metadata: Metadata = {
  title: "N&M18 TRANSPORT - รถกระบะตู้ทึบ/รถ 4 ล้อใหญ่รับจ้างขนของ ย้ายบ้าน เริ่ม 1,000.-",
  description: "N&M18 TRANSPORT บริการรถกระบะตู้ทึบรับจ้าง รถ 4 ล้อใหญ่ย้ายบ้าน ย้ายหอพัก คอนโด กรุงเทพ-ปริมณฑลและทั่วไทย ราคาถูก ปลอดภัย เริ่มต้น 1,000 บาท โทร 095-801-0958",
};

export default function Home() {
  return (
    <main className="bg-[#050a14] min-h-screen">
      {/* 1. Auto-Sliding Hero Carousel */}
      <HeroCarousel />

      {/* 2. Value Props / Feature Highlights Grid */}
      <section className="relative z-10 pb-12 -mt-10 sm:-mt-12">
        <Container>
          {/* 3 feature highlights cards */}
        </Container>
      </section>

      {/* 2.5 Service Highlight Banner */}
      <ServiceHighlightBanner />

      {/* 3. Core Services Section (with /nm18backg.png) */}
      <section className="relative py-24 bg-[#050A14] overflow-hidden" id="services">
        {/* Ambient lighting + /nm18backg.png */}
        <Container className="relative z-10">
          {/* 3 ServiceCards */}
        </Container>
      </section>

      {/* 4. Portfolio Works Showcase */}
      <section className="py-20 bg-[#0f1c38]/30 border-y border-white/5" id="gallery">
        <Container>
          {/* 6 Grid Portfolio images with loading="lazy" quality={75} */}
        </Container>
      </section>

      {/* 4.5 Fleet & Authority Section (with 4 cards, curved arch, worker & floating stat box) */}
      <FleetAuthoritySection />

      {/* 5. Feature Comparison Table (with /nm18backg1.png) */}
      <section className="relative py-24 bg-[#050A14] overflow-hidden">
        {/* Ambient lighting + /nm18backg1.png */}
        <Container className="relative z-10">
          {/* Feature Comparison Table */}
        </Container>
      </section>

      {/* 6. Legal Registration & Trust Badge */}
      <section className="py-12">
        {/* Certificate Image */}
      </section>

      {/* 7. Real Customer Reviews (IntersectionObserver Lazy Loaded) */}
      <section className="py-20 bg-gradient-to-b from-[#050a14] via-[#0f1c38]/40 to-[#050a14]">
        <Container>
          <LazyReviewsSection />
        </Container>
      </section>

      {/* 9. Special Pricing Promotion Banner */}
      <section className="py-16">
        {/* Promotion Box */}
      </section>

      {/* 10. 4-Step Easy Booking Workflow */}
      <section className="py-20 bg-[#0f1c38]/40 border-t border-white/5" id="how-it-works">
        {/* 4 step cards */}
      </section>

      {/* 11. FAQ Section */}
      <section className="py-20" id="faq">
        <Container>
          <IndexFAQ />
        </Container>
      </section>

      {/* 12. Programmatic Hub */}
      <ProgrammaticHub />

      {/* 13. High-Conversion Bottom CTA Section */}
      <CTASection />
    </main>
  );
}
```

---

## 5. Key Heavy UI & Visual Components

### `src/components/home/HeroCarousel.tsx`
```tsx
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

const slideImages = [
  "/n18back.webp",
  "/n18back1.webp"
];

export const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slideImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slideImages.length) % slideImages.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-2 sm:px-6 pt-2 sm:pt-4">
      <div 
        className="relative w-full aspect-[16/9] min-h-[380px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[660px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#050a14]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        aria-label="N&M18 TRANSPORT แบนเนอร์บริการรถกระบะรับจ้าง"
      >
        {slideImages.map((src, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out z-0 ${
                isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <Image
                src={src}
                alt="N&M18 TRANSPORT บริการรถรับจ้างตู้ทึบ ขนของ ย้ายบ้าน"
                fill
                priority={index === 0}
                className="object-cover object-top sm:object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 1280px, 1400px"
              />
            </div>
          );
        })}

        {/* Controls and dots */}
      </div>
    </div>
  );
};
```

### `src/components/home/ServiceHighlightBanner.tsx`
```tsx
import React from 'react';
import Image from 'next/image';
import { FaCheck, FaPhoneVolume, FaLine } from 'react-icons/fa6';

export const ServiceHighlightBanner: React.FC = () => {
  const checklistItems = [
    "รถกระบะ 4 ล้อตู้ทึบหลังคาสูง กันแดด กันฝน ปลอดภัย 100%",
    "ทีมงานมืออาชีพพร้อมยกของ ดูแลสินค้าทุกชิ้นอย่างระมัดระวัง",
    "พิกัดหลัก บางแค เพชรเกษม ฝั่งธนบุรี และพื้นที่ใกล้เคียง บริการวิ่งทั่วไทย 24 ชม.",
    "ประเมินราคาฟรีตามจริง แจ้งราคาก่อนเริ่มงาน ไม่มีบวกเพิ่ม"
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-[#0A1B38] via-[#071326] to-[#050A14] pt-12 md:pt-16 pb-16 md:pb-20 mt-12 md:mt-16">
      {/* Upward SVG Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-[98%] pointer-events-none">
        <svg className="relative block w-full h-[60px] md:h-[100px] text-[#0A1B38] fill-current" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,100 C480,10 960,10 1440,100 L1440,100 L0,100 Z"></path>
        </svg>
      </div>

      {/* Ambient Glows */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      {/* Content Card */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-[#0B1528] rounded-[28px] sm:rounded-[36px] overflow-hidden border border-slate-800/80 shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-end">
            <div className="lg:col-span-5 relative w-full flex items-end justify-center self-end pt-8 lg:pt-12 px-4 sm:px-6 -mb-1">
              <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-none aspect-[4/5] sm:aspect-[3/4]">
                <Image 
                  alt="เจ้าหน้าที่ขนส่ง N&M18 TRANSPORT" 
                  className="object-contain object-bottom" 
                  fill 
                  priority 
                  sizes="(max-width: 1024px) 100vw, 40vw" 
                  src="/nm18box.webp"
                />
              </div>
            </div>
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 lg:pl-4 self-center">
              {/* Checklist & CTA buttons */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
```

### `src/components/home/FleetAuthoritySection.tsx`
```tsx
import React from 'react';
import Image from 'next/image';
import { FaCheck, FaLine } from 'react-icons/fa6';

interface FleetCardData {
  id: string;
  name: string;
  pill: string;
  pillClass: string;
  image: string;
  specs: [string, string, string, string];
  cta: string;
}

const fleetData: FleetCardData[] = [
  {
    id: 'standard-box',
    name: 'รถกระบะตู้ทึบมาตรฐาน',
    pill: '🏷️ ราคาประหยัดยอดนิยม',
    pillClass: 'bg-red-500/10 text-red-400 border border-red-500/20',
    image: '/images/portfolio/S__2531422.webp',
    specs: ['ความจุ 4.5 ลบ.ม.', 'รองรับน้ำหนักบรรทุก 1.5 ตัน', 'ตู้ทึบกันฝน 100% ล็อคแน่นหนา', 'เหมาะสำหรับ ย้ายหอพัก กล่องพัสดุ'],
    cta: 'ประเมินราคา (เริ่มต้น 1,000.-)'
  },
  {
    id: 'high-roof-box',
    name: 'รถกระบะตู้ทึบหลังคาสูง 2.1 ม.',
    pill: '🔥 ยอดนิยม ย้ายคอนโด',
    pillClass: 'bg-orange-500/10 text-orange-400 border border-orange-500/20',
    image: '/images/portfolio/S__2531424.webp',
    specs: ['ความจุ 6.5 ลบ.ม. (สูง 2.10 ม.)', 'รองรับน้ำหนักบรรทุก 1.8 ตัน', 'ตู้ทึบกันฝน 100% ฟูก 6 ฟุตยืนตรงได้', 'เหมาะสำหรับ ย้ายคอนโด ห้องพัก'],
    cta: 'ประเมินราคา (ปรึกษาฟรี)'
  },
  {
    id: 'jumbo-4-wheeler',
    name: 'รถ 4 ล้อใหญ่ตู้ทึบจัมโบ้',
    pill: '⚡ ขนของเยอะ ไม่ติดเวลา',
    pillClass: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
    image: '/images/portfolio/S__2531437.webp',
    specs: ['ความจุ 12–14 ลบ.ม. (จุเท่ากระบะ 2 คัน)', 'รองรับน้ำหนักบรรทุก 2.5–3.0 ตัน', 'ตู้ทึบกันฝน 100% ไม่ติดเวลา 24 ชม.', 'เหมาะสำหรับ ย้ายบ้านทาวน์โฮม'],
    cta: 'ประเมินราคา (สุดคุ้ม)'
  },
  {
    id: '6-wheeler',
    name: 'รถ 6 ล้อรับจ้างตู้ทึบ',
    pill: '👑 แนะนำ ย้ายบ้านเดี่ยว',
    pillClass: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    image: '/images/portfolio/S__2531426.webp',
    specs: ['ความจุ 25–30 ลบ.ม. จุเต็มพิกัด', 'รองรับน้ำหนักบรรทุก 5.0 ตัน', 'ตู้ทึบกันฝน 100% มีลิฟท์ท้ายไฮดรอลิก', 'เหมาะสำหรับ ย้ายบ้านเดี่ยว ขนส่งโรงงาน'],
    cta: 'ประเมินราคา (เหมาคัน)'
  }
];

export const FleetAuthoritySection: React.FC = () => {
  return (
    <section id="fleet" className="relative w-full bg-[#050A14] flex flex-col pt-16 sm:pt-20">
      {/* 4 Cards Grid sitting on top of the curve */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 pb-4">
        {/* Header and Grid */}
      </div>

      {/* Sweeping Arch Container (-mt-40 md:-mt-52 lg:-mt-60) */}
      <div className="relative w-full bg-gradient-to-b from-[#0B254E] to-[#071731] -mt-40 md:-mt-52 lg:-mt-60 pt-48 md:pt-60 lg:pt-72 pb-24 md:pb-28">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-[98%] pointer-events-none">
          <svg className="relative block w-full h-[80px] md:h-[140px] lg:h-[180px] text-[#0B254E] fill-current" viewBox="0 0 1440 180" preserveAspectRatio="none">
            <path d="M0,180 C480,0 960,0 1440,180 L1440,180 L0,180 Z"></path>
          </svg>
        </div>
        {/* Mid section text & worker image with ambient radial glow */}
      </div>

      {/* Floating White Stat Box */}
      <div className="relative z-30 max-w-4xl mx-auto px-4 -mt-16 md:-mt-20 mb-8 md:mb-12 w-full">
        {/* 4 stats columns + 24h hotline */}
      </div>
    </section>
  );
};
```

---

## 6. Lazy-Loaded Below-the-Fold Modules

### `src/components/performance/LazyBelowFoldSections.tsx`
```tsx
"use client";

import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

const LazyReviewsSlider = dynamic(
  () => import('../sections/ReviewsSlider').then((mod) => mod.ReviewsSlider),
  {
    ssr: false,
    loading: () => <ReviewsSliderPlaceholder />,
  }
);

function ReviewsSliderPlaceholder() {
  return (
    <div className="relative max-w-[900px] mx-auto px-0 md:px-[50px] animate-pulse" aria-hidden="true">
      <div className="bg-gradient-to-br from-[#0f1c38]/90 to-white/5 border border-orange-lava/20 rounded-[20px] p-8 md:p-10 flex flex-col items-center text-center min-h-[380px] justify-center">
        <div className="w-[100px] h-[100px] rounded-full bg-white/5 border-4 border-orange-lava/20 mb-5"></div>
        <div className="h-4 bg-white/10 rounded w-1/4 mb-4"></div>
        <div className="h-3 bg-white/5 rounded w-3/4 mb-2"></div>
      </div>
    </div>
  );
}

export function LazyReviewsSection() {
  const [shouldRender, setShouldRender] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full min-h-[380px]">
      {shouldRender ? <LazyReviewsSlider /> : <ReviewsSliderPlaceholder />}
    </div>
  );
}
```

### `src/app/IndexFAQ.tsx`
```tsx
"use client";

import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import { homeFaqs } from '../data/home-faq';

export const IndexFAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-[800px] mx-auto">
      {homeFaqs.map((faq, index) => {
        const isActive = activeIndex === index;
        const FAQIcon = faq.icon;
        return (
          <div 
            key={index} 
            className={`mb-[15px] border border-white/10 rounded-xl overflow-hidden transition-all duration-300 ${
              isActive ? 'bg-navy-primary border-orange-lava shadow-[0_0_15px_rgba(255,69,0,0.2)]' : 'bg-[#0f1c38]/60 hover:border-orange-lava hover:shadow-[0_0_15px_rgba(255,69,0,0.2)]'
            }`}
          >
            <button 
              id={`faq-button-${index}`}
              aria-expanded={isActive}
              aria-controls={`faq-panel-${index}`}
              className="w-full p-5 bg-transparent border-none text-white text-[1.1rem] font-medium text-left flex justify-between items-center cursor-pointer font-prompt outline-none focus-visible:ring-2 focus-visible:ring-orange-lava focus-visible:ring-offset-2 focus-visible:ring-offset-navy-primary rounded-xl"
              onClick={() => toggleFAQ(index)}
            >
              <span className="flex items-center">
                <FAQIcon aria-hidden="true" focusable="false" className="mr-2 h-[1em] w-[1em] shrink-0 text-orange-lava" />
                {faq.question}
              </span>
              <FaChevronDown aria-hidden="true" focusable="false" className={`h-[1em] w-[1em] shrink-0 transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} />
            </button>
            <div 
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-button-${index}`}
              className={`overflow-hidden transition-[max-height] duration-300 ease-out bg-black/20 ${isActive ? 'max-h-[200px]' : 'max-h-0'}`}
            >
              <p className="p-5 text-[#ccc] leading-relaxed border-t border-white/5" dangerouslySetInnerHTML={{ __html: faq.answer.replace(/1-2 วัน/, '<strong>1-2 วัน</strong>') }} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
```

---

## 7. Public Asset Footprint Inventory

### Root `public/` Directory

| File Name | Format | Size | Evaluation & Optimization Opportunity |
| :--- | :--- | :--- | :--- |
| `nm18box.png` | PNG | **1,701,712 B (1.70 MB)** | ⚠️ **Critical Overhead**: Uncompressed original PNG. Use `nm18box.webp` (233 KB) instead. |
| `n18back1.webp` | WebP | **500,162 B (500 KB)** | Second hero carousel slide. Candidate for quality reduction to ~150-200 KB. |
| `nm18backg.png` | PNG | **377,902 B (377 KB)** | ⚠️ Background graphic for Core Services. Convert to WebP/AVIF (~80 KB). |
| `NM18-house-condo-moving-service.webp` | WebP | **372,976 B (372 KB)** | Card thumbnail. Can be compressed to ~120 KB. |
| `NM18-freight-cargo-chartered-truck.webp` | WebP | **321,658 B (321 KB)** | Card thumbnail. |
| `NM18-motorcycle-bigbike-transport.webp` | WebP | **289,314 B (289 KB)** | Card thumbnail. |
| `nm18box.webp` | WebP | **233,168 B (233 KB)** | Main worker visual in Service Highlight & Fleet sections. |
| `n18back.webp` | WebP | **204,908 B (204 KB)** | Primary LCP Hero banner image. |
| `n18back_2.webp` | WebP | **204,908 B (204 KB)** | Duplicate of `n18back.webp`. |
| `nm18backg1.png` | PNG | **168,690 B (168 KB)** | ⚠️ Background graphic for Comparison table. Convert to WebP (~50 KB). |
| `logo-nm18.png` | PNG | **68,551 B (68.5 KB)** | Header/Footer logo. |
| `Logo nm tp.png` | PNG | **82,625 B (82.6 KB)** | Legacy logo. |
| `android-chrome-512x512.png` | PNG | **104,087 B (104 KB)** | PWA icon. |
| `android-chrome-192x192.png` | PNG | **22,745 B (22.7 KB)** | PWA icon. |
| `apple-touch-icon.png` | PNG | **20,888 B (20.8 KB)** | iOS icon. |
| `favicon.ico` | ICO | **15,406 B (15.4 KB)** | Favicon. |
| `favicon-32x32.png` | PNG | **1,883 B (1.8 KB)** | Favicon. |
| `favicon-16x16.png` | PNG | **741 B (0.7 KB)** | Favicon. |

### `public/images/portfolio/` Directory (Works & Gallery Showcase)

| File Name | Format | Size | Status |
| :--- | :--- | :--- | :--- |
| `S__17556176.jpg` | JPG | **6,399,040 B (6.40 MB)** | ⚠️ Raw camera original. `S__17556176.webp` (2.7 MB) exists. |
| `S__17556168.jpg` | JPG | **4,003,961 B (4.00 MB)** | ⚠️ Raw camera original. `S__17556168.webp` (1.1 MB) exists. |
| `S__17556176.webp` | WebP | **2,716,384 B (2.71 MB)** | ⚠️ Large WebP. Suitable for high-res gallery lightbox only. |
| `S__17556168.webp` | WebP | **1,163,404 B (1.16 MB)** | ⚠️ Large WebP. |
| `S__17556171.webp` | WebP | **418,006 B (418 KB)** | WebP optimized. |
| `S__17556172.webp` | WebP | **330,440 B (330 KB)** | WebP optimized. |
| `S__17556169.webp` | WebP | **316,036 B (316 KB)** | WebP optimized. |
| `S__2531439.webp` | WebP | **287,152 B (287 KB)** | WebP optimized. |
| `S__2531438.webp` | WebP | **280,848 B (280 KB)** | WebP optimized. |
| `S__2531424.webp` | WebP | **272,102 B (272 KB)** | Used in Fleet card. |
| `S__17556173.webp` | WebP | **247,848 B (247 KB)** | WebP optimized. |
| `S__17556170.webp` | WebP | **244,568 B (244 KB)** | WebP optimized. |
| `S__2531422.webp` | WebP | **207,884 B (207 KB)** | Used in Fleet card & Gallery. |
| `S__2531431.webp` | WebP | **201,792 B (201 KB)** | WebP optimized. |
| `S__2531423.webp` | WebP | **188,814 B (188 KB)** | WebP optimized. |
| `S__2531437.webp` | WebP | **185,980 B (185 KB)** | Used in Fleet card & Gallery (Preloaded). |
| `S__2531426.webp` | WebP | **75,790 B (75.8 KB)** | Used in Fleet card. |
| `S__2531436.webp` | WebP | **68,174 B (68.1 KB)** | WebP optimized. |
| `S__2531434.webp` | WebP | **63,736 B (63.7 KB)** | WebP optimized. |
| `S__17556286.webp` | WebP | **23,756 B (23.7 KB)** | Lightweight WebP thumbnail. |
| `S__17556285.webp` | WebP | **21,610 B (21.6 KB)** | Lightweight WebP thumbnail. |
| `S__17556166.webp` | WebP | **18,646 B (18.6 KB)** | Used in Legal certificate. |

### `public/images/logos/` Directory

| File Name | Format | Size |
| :--- | :--- | :--- |
| `logo nm transport.png` | PNG | **3,631,142 B (3.63 MB)** |
| `logo nm transport.webp` | WebP | **2,552,730 B (2.55 MB)** |
| `logoN&M18 TRANSPORT.webp` | WebP | **197,442 B (197 KB)** |
| `logo-nm18.png` | PNG | **68,551 B (68.5 KB)** |
| `logo-nm18.webp` | WebP | **59,276 B (59.2 KB)** |
| `Logo nm tp.png` | PNG | **82,625 B (82.6 KB)** |
| `Logo nm tp.webp` | WebP | **47,714 B (47.7 KB)** |
| `logoN&M18 TRANSPORT.jpg` | JPG | **58,161 B (58.1 KB)** |
