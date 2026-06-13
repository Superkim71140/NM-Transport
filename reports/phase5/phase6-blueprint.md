# Phase 6 Programmatic SEO: Location Pages Architecture Blueprint

This blueprint outlines the plan for implementing 50+ programmatic, high-performance location landing pages in the Next.js 14 App Router, consuming the dataset scaffolded in Phase 5.

---

## 1. Dynamic Routing Architecture

We will create a dynamic route folder structure under `src/app/location/[district]/page.tsx`.
To ensure zero hydration issues, maximum crawlability, and sub-millisecond TTFB, all pages will be statically generated at build time using Next.js **Static Site Generation (SSG)**.

### File: `src/app/location/[district]/page.tsx`

```tsx
import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Container } from '../../../components/ui/Container';
import locations from '../../../data/bangkok-locations.json';

type Props = {
  params: {
    district: string;
  };
};

// 1. generateStaticParams() for static pre-rendering
export async function generateStaticParams() {
  return locations.map((loc) => ({
    district: loc.slug,
  }));
}

// 2. Dynamic Metadata Generation for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const location = locations.find((loc) => loc.slug === params.district);
  if (!location) return {};

  const title = `รถรับจ้างขนของ ${location.thaiName} ย้ายบ้าน ย้ายหอพัก คอนโด เริ่ม 1,000.-`;
  const description = `บริการรถรับจ้างขนของในพื้นที่ ${location.thaiName} รถกระบะตู้ทึบ รถ 4 ล้อใหญ่ ขนส่งย้ายบ้าน คอนโด หอพัก ทั่วกรุงเทพ-ปริมณฑล พร้อมคนช่วยยกของ ราคาเป็นกันเอง ตกลงราคาชัดเจน โทร 095-801-0958`;

  return {
    title,
    description,
    alternates: {
      canonical: `/location/${location.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.nm18transport.com/location/${location.slug}`,
      type: 'website',
    },
  };
}

export default function LocationPage({ params }: Props) {
  const location = locations.find((loc) => loc.slug === params.district);
  if (!location) {
    notFound();
  }

  // Schema.org JSON-LD
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://www.nm18transport.com/location/${location.slug}#service`,
    "name": `บริการรถรับจ้างขนของ ${location.thaiName} - N&M18 TRANSPORT`,
    "serviceType": "Moving Service",
    "provider": {
      "@id": "https://www.nm18transport.com/#organization"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": location.thaiName
    },
    "offers": {
      "@type": "Offer",
      "price": location.startingPrice,
      "priceCurrency": "THB",
      "url": `https://www.nm18transport.com/location/${location.slug}`
    }
  };

  return (
    <main className="bg-[#02040a] min-h-screen text-[#e2e8f0] pb-[80px]" style={{ backgroundImage: "radial-gradient(circle at 50% 0%, #1a2c4e 0%, #02040a 70%)", backgroundAttachment: "fixed" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, '\\u003c'),
        }}
      />

      <Container className="pt-20 max-w-[850px] mx-auto px-5">
        <article>
          <header className="mb-8 border-b border-white/10 pb-6 text-center md:text-left">
            <span className="bg-orange-lava/10 text-orange-lava px-3 py-1 rounded-full font-semibold text-sm">
              พื้นที่บริการ: {location.zone}
            </span>
            <h1 className="text-[2rem] md:text-[2.8rem] font-extrabold text-white leading-tight mt-3 mb-4">
              รถรับจ้างขนของ {location.thaiName} บริการ 24 ชั่วโมง
            </h1>
            <p className="text-text-gray text-base leading-relaxed">
              บริการย้ายบ้าน ย้ายหอ ย้ายคอนโด หรือขนส่งสินค้าในเขต {location.thaiName} และพื้นที่ใกล้เคียง สะดวก รวดเร็ว ตกลงราคาก่อนเริ่มงาน ราคาเริ่มต้นเพียง {location.startingPrice} บาท
            </p>
          </header>

          <section className="mb-8">
            <h2 className="text-[1.5rem] font-bold text-white mb-4">
              ทำไมต้องเลือกใช้บริการรถขนของในพื้นที่ {location.thaiName} กับเรา?
            </h2>
            <p className="text-[#ccc] leading-relaxed mb-4">
              เรามีรถรับจ้างตู้ทึบสแตนด์บายให้บริการในเขต {location.thaiName} ตลอดเวลา ทำให้สามารถเข้ารับงานได้อย่างรวดเร็ว พนักงานขับรถชำนาญเส้นทางตรอกซอกซอยเป็นอย่างดี และมีคนยกของช่วยอำนวยความสะดวก
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#ccc]">
              {location.keywords.map((kw, idx) => (
                <li key={idx}>{kw} บริการสุภาพ ปลอดภัย</li>
              ))}
            </ul>
          </section>

          <footer className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center mt-12">
            <p className="text-white font-bold text-lg mb-4">ติดต่อเช็คคิวรถขนของเขต {location.thaiName}</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="tel:0958010958" className="bg-orange-lava px-6 py-2.5 rounded-full font-semibold text-white">โทร 095-801-0958</a>
              <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=952yyanc" target="_blank" rel="noopener noreferrer" className="bg-[#06C755] px-6 py-2.5 rounded-full font-semibold text-white">แอดไลน์ประเมินราคา</a>
            </div>
          </footer>
        </article>
      </Container>
    </main>
  );
}
```

---

## 2. XML Sitemap & Indexing Control

All 50 statically generated pages will be added to the Next.js Sitemap router at `src/app/sitemap.ts` to ensure immediate indexing.

```typescript
// Update src/app/sitemap.ts
import locations from './data/bangkok-locations.json';

// Inside sitemap():
const locationPages = locations
  .filter(loc => loc.status === 'active') // Only index active verified zones
  .map((loc) => ({
    url: `${domain}/location/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));
```

---

## 3. SEO Safeguard Compliance (Anti-Doorway Rules)

To strictly follow Google Search Console's doorway page guidelines, location pages will:
1. **Highlight Zone-Specific Context:** Dynamically change text structures, pricing details, and targeting queries based on region (e.g. `Thonburi` vs. `Pathum Thani`).
2. **Pre-Rendered at Build-Time:** Pre-generated through `generateStaticParams()` to ensure immediate crawling availability, avoiding client-side layout jumps.
3. **Rollout Verification:** Records with `pending_verification` status will be served, but *not* added to the XML sitemap to prevent search indexing of unverified routes.
