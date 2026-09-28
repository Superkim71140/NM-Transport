import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { AREA_ZONES, AreaZone } from '@/data/area-zones';
import {
  FaPhoneVolume,
  FaLine,
  FaLocationDot,
  FaRoute,
  FaTruckFast,
  FaShieldHalved,
  FaCalculator,
  FaArrowRight,
  FaBoxOpen,
  FaMotorcycle,
  FaCity,
  FaCircleCheck,
  FaMapLocationDot,
  FaHouse,
  FaCouch,
  FaBuilding,
  FaCalendarDays,
  FaChevronDown,
  FaCircleQuestion,
} from 'react-icons/fa6';

interface Props {
  params: {
    zone: string;
  };
}

// 1. Static pre-rendering for all 5 official zone slugs
export async function generateStaticParams() {
  return Object.keys(AREA_ZONES).map((slug) => ({
    zone: slug,
  }));
}

// 2. Strict dynamicParams policy - unknown slugs return a genuine 404
export const dynamicParams = false;

// 3. Dynamic metadata generation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const zone = AREA_ZONES[params.zone];
  if (!zone) {
    return {};
  }

  const canonicalPath = `/area/${zone.slug}`;
  const ogImageUrl = `https://www.nm18transport.com${zone.coverImage}`;

  return {
    title: {
      absolute: zone.metaTitle,
    },
    description: zone.metaDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: zone.metaTitle,
      description: zone.ogDescription,
      url: `https://www.nm18transport.com${canonicalPath}`,
      siteName: 'N&M18 TRANSPORT',
      images: [
        {
          url: ogImageUrl,
          width: 800,
          height: 600,
          alt: zone.heroHeading,
        },
      ],
      locale: 'th_TH',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: zone.metaTitle,
      description: zone.ogDescription,
      images: [ogImageUrl],
    },
  };
}

// Icon helper for trust cards
function renderTrustIcon(name: string) {
  switch (name) {
    case 'route':
      return <FaRoute className="w-6 h-6 text-[#FF6B35]" aria-hidden="true" />;
    case 'truck':
      return <FaTruckFast className="w-6 h-6 text-[#FF6B35]" aria-hidden="true" />;
    case 'shield':
      return <FaShieldHalved className="w-6 h-6 text-[#FF6B35]" aria-hidden="true" />;
    case 'calculator':
    default:
      return <FaCalculator className="w-6 h-6 text-[#FF6B35]" aria-hidden="true" />;
  }
}

// Icon helper for quote checklist
function renderChecklistIcon(name: string) {
  switch (name) {
    case 'pin':
      return <FaLocationDot className="w-5 h-5 text-[#FF6B35]" aria-hidden="true" />;
    case 'boxes':
      return <FaBoxOpen className="w-5 h-5 text-[#FF6B35]" aria-hidden="true" />;
    case 'building':
      return <FaBuilding className="w-5 h-5 text-[#FF6B35]" aria-hidden="true" />;
    case 'calendar':
    default:
      return <FaCalendarDays className="w-5 h-5 text-[#FF6B35]" aria-hidden="true" />;
  }
}

// Icon helper for job cards
function renderJobIcon(name: string) {
  switch (name) {
    case 'dorm':
      return <FaHouse className="w-6 h-6 text-[#FF6B35]" aria-hidden="true" />;
    case 'furniture':
      return <FaCouch className="w-6 h-6 text-[#FF6B35]" aria-hidden="true" />;
    case 'moto':
    default:
      return <FaMotorcycle className="w-6 h-6 text-[#FF6B35]" aria-hidden="true" />;
  }
}

// Verified portfolio items depicting enclosed pickup truck operations only
interface PortfolioItem {
  src: string;
  alt: string;
  caption: string;
  tag: string;
}

const VERIFIED_PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    src: '/images/portfolio/S__2531424.webp',
    alt: 'ภาพท้ายรถกระบะตู้ทึบ Isuzu D-Max บรรทุกกระเป๋าเดินทาง พัดลม และกล่องย้ายหอพักปิดมิดชิด',
    caption: 'ขนย้ายหอพักและคอนโดด้วยรถกระบะตู้ทึบ จัดเรียงกระเป๋าและกล่องสัมภาระแน่นหนา',
    tag: 'ย้ายหอพักและคอนโด',
  },
  {
    src: '/images/portfolio/S__2531422.webp',
    alt: 'ภาพภายในรถกระบะตู้ทึบ จัดวางเฟอร์นิเจอร์ห่อฟิล์มกันรอยพร้อมสายรัดก๊อกแก๊กมาตรฐาน',
    caption: 'เฟอร์นิเจอร์ห่อฟิล์มกันรอย จัดวางชิดผนังตู้พร้อมสายรัด ไม่ให้โยกหรือกระแทกระหว่างทาง',
    tag: 'ป้องกันเฟอร์นิเจอร์',
  },
  {
    src: '/images/portfolio/S__2531423.webp',
    alt: 'ภาพรถกระบะตู้ทึบ Isuzu D-Max N&M18 บรรทุกอุปกรณ์สัตว์เลี้ยง กรง และกล่องพัสดุปิดสนิท',
    caption: 'ขนย้ายสิ่งของและอุปกรณ์สัตว์เลี้ยงในตู้ทึบสะอาด ปิดมิดชิด ปลอดภัยจากฝุ่นและละอองฝน',
    tag: 'ขนส่งสิ่งของและอุปกรณ์',
  },
  {
    src: '/images/portfolio/S__2531431.webp',
    alt: 'ภาพการนำรถมอเตอร์ไซค์ขึ้นท้ายรถกระบะตู้ทึบผ่านสะพานทางลาดอะลูมิเนียมอย่างปลอดภัย',
    caption: 'บริการขนส่งมอเตอร์ไซค์ มีสะพานทางลาดและสายรัดสำหรับขึ้น-ลงตู้ทึบอย่างปลอดภัย',
    tag: 'ขนส่งมอเตอร์ไซค์',
  },
  {
    src: '/images/portfolio/S__2531436.webp',
    alt: 'ภาพรถกระบะตู้ทึบ Isuzu D-Max บรรทุกมอเตอร์ไซค์ 2 คัน พร้อมกล่องของและแผ่นกั้นกันกระแทก',
    caption: 'ขนย้ายมอเตอร์ไซค์และสัมภาระในรถกระบะตู้ทึบ มัดตรึงแน่นหนา ป้องกันการล้มหรือเสียดสี',
    tag: 'ยึดตรึงสัมภาระแน่นหนา',
  },
  {
    src: '/images/portfolio/S__17556170.webp',
    alt: 'ภาพมอเตอร์ไซค์ห่อฟิล์มกันรอยสีแดง เตรียมเคลื่อนย้ายขึ้นรถกระบะตู้ทึบ Toyota Hilux Revo',
    caption: 'แพ็กรถมอเตอร์ไซค์ด้วยฟิล์มยืดกันรอยรอบคันก่อนนำขึ้นรถกระบะตู้ทึบ ปลอดภัยไร้รอยขีดข่วน',
    tag: 'แพ็กกิ้งกันรอยก่อนขนย้าย',
  },
];

export default function AreaZonePage({ params }: Props) {
  const zone: AreaZone | undefined = AREA_ZONES[params.zone];

  if (!zone) {
    notFound();
  }

  // Schema 1: BreadcrumbList
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'หน้าแรก',
        item: 'https://www.nm18transport.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'พื้นที่ให้บริการ',
        item: 'https://www.nm18transport.com/area',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: zone.displayName,
        item: `https://www.nm18transport.com/area/${zone.slug}`,
      },
    ],
  };

  // Schema 2: Service (No arbitrary fixed price)
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://www.nm18transport.com/area/${zone.slug}#service`,
    name: `บริการรถกระบะตู้ทึบรับจ้างขนของ ${zone.displayName} - N&M18 TRANSPORT`,
    serviceType: 'บริการขนย้ายและขนส่งสินค้าด้วยรถกระบะตู้ทึบ',
    provider: {
      '@id': 'https://www.nm18transport.com/#organization',
    },
    areaServed: zone.schemaAreas.map((name) => ({
      '@type': 'AdministrativeArea',
      name,
    })),
    description: zone.heroDescription,
    url: `https://www.nm18transport.com/area/${zone.slug}`,
  };

  // Schema 3: FAQPage (Direct reflection of visible FAQs)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `https://www.nm18transport.com/area/${zone.slug}#faq`,
    mainEntity: zone.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-[#050A14] text-slate-200 selection:bg-[#FF4500] selection:text-white">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c'),
        }}
      />

      {/* SECTION 1: HERO */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b border-white/5">
        {/* Ambient Glow Effects */}
        <div
          aria-hidden="true"
          className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#FF4500]/15 via-[#FF6B35]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-20 -left-20 w-[450px] h-[450px] bg-[#0f1c38]/80 rounded-full blur-3xl pointer-events-none -z-10"
        />

        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Semantic Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 md:mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF6B35] rounded"
                >
                  หน้าแรก
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-600">/</li>
              <li>
                <Link
                  href="/area"
                  className="hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF6B35] rounded"
                >
                  พื้นที่ให้บริการ
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-600">/</li>
              <li aria-current="page" className="text-[#FF6B35] font-medium">
                {zone.displayName}
              </li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Column: Heading, Supporting Content, CTAs */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF4500]/10 border border-[#FF4500]/30 text-[#FF6B35] text-xs sm:text-sm font-semibold mb-5">
                <FaMapLocationDot aria-hidden="true" />
                <span>พื้นที่ให้บริการหลัก: {zone.displayName}</span>
              </div>

              {/* Exactly ONE visible H1 following the pattern รถรับจ้างพื้นที่[ชื่อโซน] */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
                {zone.heroHeading}
              </h1>

              <p className="text-base sm:text-lg text-[#FF6B35] font-medium mb-4">
                {zone.heroTagline}
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-xl">
                {zone.heroDescription}
              </p>

              {/* Action Buttons Row */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-md sm:max-w-none">
                <a
                  href="tel:0958010958"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-[#FF4500] to-[#FF6B35] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_20px_rgba(255,69,0,0.4)] hover:shadow-[0_0_25px_rgba(255,69,0,0.65)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white text-sm sm:text-base"
                  aria-label="โทรด่วนติดต่อ N&M18 TRANSPORT เบอร์ 095-801-0958"
                >
                  <FaPhoneVolume className="text-base" aria-hidden="true" />
                  <span>โทรด่วน: 095-801-0958</span>
                </a>

                <a
                  href="https://liff.line.me/1645278921-kWRPP32q/?accountId=952yyanc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-white bg-[#06C755] hover:bg-[#05a84a] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_15px_rgba(6,199,85,0.4)] hover:shadow-[0_0_25px_rgba(6,199,85,0.65)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white text-sm sm:text-base"
                  aria-label="แชท LINE เพื่อประเมินราคาฟรีกับ N&M18 TRANSPORT"
                >
                  <FaLine className="text-xl" aria-hidden="true" />
                  <span>แชท LINE ประเมินราคาฟรี</span>
                </a>
              </div>

              {/* Verified Features Pills */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4 text-xs text-slate-400">
                <span className="inline-flex items-center gap-1.5">
                  <FaCircleCheck className="text-[#FF6B35]" aria-hidden="true" />
                  รถกระบะตู้ทึบสะอาด ปิดมิดชิด
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <FaCircleCheck className="text-[#FF6B35]" aria-hidden="true" />
                  ประเมินราคาตามจริง ไม่มีบวกเพิ่ม
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <FaCircleCheck className="text-[#FF6B35]" aria-hidden="true" />
                  พร้อมทีมงานช่วยยกของมืออาชีพ
                </span>
              </div>
            </div>

            {/* Right Column: Restrained Location & Route Graphic */}
            <div className="relative">
              <div className="relative rounded-3xl border border-white/10 bg-[#0B1528]/80 p-6 sm:p-8 backdrop-blur-md shadow-2xl overflow-hidden">
                <div
                  aria-hidden="true"
                  className="absolute -top-12 -right-12 w-48 h-48 bg-[#FF4500]/20 rounded-full blur-2xl pointer-events-none"
                />

                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Service Coverage Map</span>
                    <h2 className="text-lg font-bold text-white flex items-center gap-2 mt-1">
                      <FaCity className="text-[#FF6B35]" aria-hidden="true" />
                      โครงข่ายเส้นทาง {zone.displayName}
                    </h2>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    พร้อมให้บริการ
                  </span>
                </div>

                {/* SVG Route Visualization */}
                <div className="relative h-64 sm:h-72 w-full bg-[#050A14]/70 rounded-2xl border border-white/5 p-4 flex flex-col justify-between overflow-hidden">
                  <svg
                    className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern id="grid-pattern" width="32" height="32" patternUnits="userSpaceOnUse">
                        <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5" />
                      </pattern>
                      <linearGradient id="route-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF4500" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#FF6B35" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                    <path
                      d="M 50 180 Q 150 90 280 140 T 450 70"
                      fill="none"
                      stroke="url(#route-grad)"
                      strokeWidth="3"
                      strokeDasharray="6 4"
                    />
                    <path
                      d="M 80 230 Q 220 200 360 220"
                      fill="none"
                      stroke="rgba(255, 107, 53, 0.4)"
                      strokeWidth="2"
                    />
                  </svg>

                  {/* Top Hub Indicator */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-2 bg-[#0B1528] border border-white/10 px-3 py-1.5 rounded-xl text-xs text-white">
                      <span className="w-2 h-2 rounded-full bg-[#FF4500] animate-pulse" />
                      <span>ศูนย์บริการหลัก: {zone.displayName}</span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono">GPS TRACKED</span>
                  </div>

                  {/* Nodes Highlight */}
                  <div className="relative z-10 grid grid-cols-2 gap-2 my-auto">
                    {zone.supportedDistrictsSummary.slice(0, 4).map((district, idx) => (
                      <div
                        key={idx}
                        className="bg-[#0B1528]/90 border border-white/10 rounded-xl p-2.5 flex items-center gap-2 text-xs text-slate-200"
                      >
                        <FaLocationDot className="text-[#FF6B35] shrink-0" aria-hidden="true" />
                        <span className="truncate font-medium">{district}</span>
                      </div>
                    ))}
                  </div>

                  {/* Vehicle Callout: Enclosed Pickup Trucks Only */}
                  <div className="relative z-10 bg-[#0B1528]/95 border border-[#FF6B35]/20 rounded-xl p-3 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <FaTruckFast className="text-[#FF6B35] text-base" aria-hidden="true" />
                      <div>
                        <p className="font-semibold text-white">รถกระบะตู้ทึบ (Enclosed Pickup)</p>
                        <p className="text-[11px] text-slate-400">ปิดมิดชิด ป้องกันแดด ฝุ่น และละอองฝน</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-[#FF6B35]">ประเมินราคาตามจริง</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: LOCAL TRUST SIGNALS */}
      <section className="py-16 md:py-20 border-b border-white/5 relative">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              จุดเด่นบริการ N&M18 ในพื้นที่{zone.displayName}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              มั่นใจด้วยมาตรฐานการขนย้ายจริงใจ ข้อมูลตรงไปตรงมา และความเชี่ยวชาญในเส้นทางเฉพาะพื้นที่
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {zone.trustSignals.map((signal, idx) => (
              <div
                key={idx}
                className="bg-[#0B1528]/90 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-[#FF6B35]/40 hover:-translate-y-0.5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FF4500]/10 border border-[#FF4500]/20 flex items-center justify-center mb-4">
                    {renderTrustIcon(signal.iconName)}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                    {signal.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {signal.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* TASK 2 SECTION B: THREE LOCALIZED JOB-USE CARDS */}
      <section className="py-16 md:py-20 border-b border-white/5 relative">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF4500]/10 text-[#FF6B35] text-xs font-semibold mb-3">
              <FaBoxOpen aria-hidden="true" />
              <span>บริการขนย้ายเฉพาะทางด้วยรถกระบะตู้ทึบ</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-3">
              รูปแบบงานขนย้ายยอดนิยมในพื้นที่{zone.displayName}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              เลือกประเภทงานที่ตรงกับความต้องการของคุณ ขนส่งด้วยรถกระบะตู้ทึบมาตรฐาน คล่องตัว ปลอดภัย และประเมินราคาตามขอบเขตจริง
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {zone.jobCards.map((card, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#0B1528]/90 border border-white/10 p-6 md:p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#FF6B35]/40 hover:-translate-y-1 shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FF4500]/10 border border-[#FF4500]/20 flex items-center justify-center">
                      {renderJobIcon(card.iconName)}
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FF4500]/10 text-[#FF6B35] border border-[#FF4500]/20">
                      {card.tagText}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-snug">
                    {card.title}
                  </h3>

                  {/* Situation */}
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-slate-400 mb-1">สถานการณ์ของลูกค้า:</p>
                    <p className="text-sm text-slate-300 leading-relaxed">{card.situation}</p>
                  </div>

                  {/* Pickup Benefit */}
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-[#FF6B35] mb-1">จุดเด่นของรถกระบะตู้ทึบ:</p>
                    <p className="text-sm text-slate-300 leading-relaxed">{card.pickupBenefit}</p>
                  </div>

                  {/* Details Needed */}
                  <div className="mb-5 bg-white/5 p-3.5 rounded-xl border border-white/5">
                    <p className="text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                      <FaCircleCheck className="text-emerald-400 shrink-0" aria-hidden="true" />
                      ข้อมูลที่ใช้ในการประเมินราคา:
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">{card.detailsNeeded}</p>
                  </div>
                </div>

                <a
                  href="https://liff.line.me/1645278921-kWRPP32q/?accountId=952yyanc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-[#06C755] text-slate-200 hover:text-white border border-white/10 hover:border-[#06C755] text-xs sm:text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                >
                  <FaLine className="text-base" aria-hidden="true" />
                  <span>ประเมินราคางานนี้ผ่าน LINE</span>
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* TASK 2 SECTION A: GENUINE LOCAL PORTFOLIO */}
      <section className="py-16 md:py-20 border-b border-white/5 relative">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF4500]/10 text-[#FF6B35] text-xs font-semibold mb-3">
              <FaTruckFast aria-hidden="true" />
              <span>ภาพผลงานจากสถานที่จริง</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-3">
              ภาพผลงานจริงของ N&M18 TRANSPORT
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              รวมภาพถ่ายจริงจากการปฏิบัติงานขนย้ายด้วยรถกระบะตู้ทึบของทีมงาน N&M18 TRANSPORT จัดวางเรียบร้อย รัดตรึงแน่นหนา ปลอดภัยตลอดการเดินทาง
            </p>
            <div className="mt-3 inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-slate-400">
              * ภาพถ่ายจริงจากการปฏิบัติงานของ N&M18 TRANSPORT ด้วยรถกระบะตู้ทึบ (ภาพรวมผลงานจริง ไม่ได้ระบุเจาะจงเฉพาะจุดใดจุดหนึ่ง)
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {VERIFIED_PORTFOLIO_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B1528] group transition-all duration-300 hover:border-[#FF6B35]/40 flex flex-col justify-between shadow-xl"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#050A14]/80 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded-lg text-[11px] font-medium text-slate-200">
                    {item.tag}
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-b from-[#0B1528] to-[#070F1E] flex-grow flex items-center">
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CONVERSION FEATURE 1: QUOTE-PREPARATION CHECKLIST */}
      <section className="py-14 md:py-18 border-b border-white/5 relative bg-[#070F1E]/60">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B1528]/80 border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-md">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-2">
                เตรียมข้อมูลเพื่อประเมินราคา
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm">
                ช่วยให้ทีมงานประเมินราคาได้รวดเร็วและตรงตามความเป็นจริง เพียงเตรียมข้อมูล 4 ข้อนี้ก่อนทักแชท LINE
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {zone.quoteChecklist.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/5 rounded-2xl p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#FF4500]/10 border border-[#FF4500]/20 flex items-center justify-center mb-3">
                      {renderChecklistIcon(item.iconName)}
                    </div>
                    <h3 className="text-white font-bold text-sm sm:text-base mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="https://liff.line.me/1645278921-kWRPP32q/?accountId=952yyanc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-white bg-[#06C755] hover:bg-[#05a84a] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(6,199,85,0.4)] text-sm sm:text-base"
              >
                <FaLine className="text-xl" aria-hidden="true" />
                <span>ส่งข้อมูลประเมินราคาผ่าน LINE (ฟรี)</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* CONVERSION FEATURE 2: CLEAR BOOKING & HANDLING PROCESS */}
      <section className="py-16 md:py-20 border-b border-white/5 relative">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF4500]/10 text-[#FF6B35] text-xs font-semibold mb-3">
              <FaRoute aria-hidden="true" />
              <span>ขั้นตอนการให้บริการ</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
              ขั้นตอนการจองรถและการขนย้าย 4 ขั้นตอน
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              สรุปขอบเขตงานและตกลงราคาก่อนเริ่มงานเสมอ ปฏิบัติงานเป็นขั้นตอนอย่างโปร่งใส
            </p>
          </div>

          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none p-0 m-0">
            {zone.processSteps.map((step, idx) => (
              <li
                key={idx}
                className="relative rounded-2xl bg-[#0B1528]/80 border border-white/10 p-6 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-[#FF6B35]">
                      {step.stepNumber}
                    </span>
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-white/5 text-slate-400">
                      Step {idx + 1}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* SECTION 3: INTERACTIVE LOCATION-CARD SEO HUB */}
      <section className="py-16 md:py-24 border-b border-white/5 relative bg-gradient-to-b from-[#050A14] via-[#081224] to-[#050A14]">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF4500]/10 text-[#FF6B35] text-xs font-semibold mb-3">
                <FaRoute aria-hidden="true" />
                <span>Locality & Corridor Directory</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-3">
                {zone.locationCardsTitle}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {zone.locationCardsIntro}
              </p>
            </div>

            {/* Link to Main Area Hub */}
            <div className="shrink-0">
              <Link
                href="/area"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B1528] border border-white/10 text-sm font-semibold text-slate-300 hover:text-white hover:border-[#FF6B35]/60 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF6B35]"
              >
                <FaMapLocationDot className="text-[#FF6B35]" aria-hidden="true" />
                <span>ดูพื้นที่ทั้งหมดในระบบ</span>
              </Link>
            </div>
          </div>

          {/* Location Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {zone.locationCards.map((card) => (
              <Link
                key={card.slug}
                href={card.href}
                className="group relative rounded-2xl border border-white/10 bg-[#0B1528]/80 p-6 transition-all duration-300 hover:border-[#FF6B35]/60 hover:bg-[#0E1A32] focus-within:ring-2 focus-within:ring-[#FF6B35] flex flex-col justify-between min-h-[190px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-[#FF4500]/10 border border-[#FF4500]/20 flex items-center justify-center text-[#FF6B35] group-hover:bg-[#FF4500] group-hover:text-white transition-colors duration-300">
                        <FaLocationDot className="w-4 h-4" aria-hidden="true" />
                      </span>
                      <h3 className="text-lg font-bold text-white group-hover:text-[#FF6B35] transition-colors">
                        {card.name}
                      </h3>
                    </div>
                    {card.highlightTag && (
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#FF4500]/15 text-[#FF6B35] border border-[#FF4500]/30">
                        {card.highlightTag}
                      </span>
                    )}
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {card.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-[#FF6B35] group-hover:text-white transition-colors">
                  <span>{card.isLongHaul ? 'ดูเส้นทางขนส่งนี้' : 'ดูรายละเอียดจุดบริการนี้'}</span>
                  <FaArrowRight
                    className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            ))}
          </div>

          {/* Quick Pillar Links */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm">
            <span className="text-slate-400">บริการขนย้ายเฉพาะทางที่เกี่ยวข้อง:</span>
            <div className="flex flex-wrap gap-2.5">
              <Link
                href="/service/moving"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0B1528] border border-white/10 text-slate-300 hover:text-white hover:border-[#FF6B35]/50 transition-colors"
              >
                <FaBoxOpen className="text-[#FF6B35]" aria-hidden="true" />
                ย้ายบ้าน/คอนโด
              </Link>
              <Link
                href="/service/moto"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0B1528] border border-white/10 text-slate-300 hover:text-white hover:border-[#FF6B35]/50 transition-colors"
              >
                <FaMotorcycle className="text-[#FF6B35]" aria-hidden="true" />
                ขนส่งมอเตอร์ไซค์
              </Link>
              <Link
                href="/service/pets"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0B1528] border border-white/10 text-slate-300 hover:text-white hover:border-[#FF6B35]/50 transition-colors"
              >
                <FaBoxOpen className="text-[#FF6B35]" aria-hidden="true" />
                รับส่งสัตว์เลี้ยง
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* TASK 2 SECTION C: ENCLOSED-PICKUP ADVANTAGE & TRANSPARENT PRICING */}
      <section className="py-16 md:py-24 border-b border-white/5 relative">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#FF4500]/30 bg-gradient-to-br from-[#0B1528] to-[#101D36] p-6 sm:p-10 lg:p-12 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 mb-10">
              {/* Left Column: Enclosed Pickup Advantages */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF4500]/15 text-[#FF6B35] text-xs font-semibold mb-4">
                  <FaTruckFast aria-hidden="true" />
                  <span>จุดเด่นของรถกระบะตู้ทึบ N&M18</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                  ทำไมรถกระบะตู้ทึบจึงตอบโจทย์การขนย้ายในพื้นที่{zone.displayName}
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-slate-300">
                  <div className="flex items-start gap-3">
                    <FaCircleCheck className="text-[#FF6B35] w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <strong className="text-white">ตู้บรรทุกมิดชิด ปกป้องสัมภาระ:</strong> ตู้ทึบอลูมิเนียมมาตรฐาน ช่วยป้องกันแดด ฝุ่นละอองถนน และละอองฝนระหว่างทาง ขนย้ายได้อย่างมั่นใจ
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCircleCheck className="text-[#FF6B35] w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <strong className="text-white">คล่องตัวในซอยแคบและอาคาร:</strong> เข้าถึงตรอกซอยแคบ ถนนสายรอง และพื้นที่จำกัดความสูงของคอนโดมิเนียมได้สะดวกกว่ารถบรรทุกขนาดใหญ่
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCircleCheck className="text-[#FF6B35] w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <strong className="text-white">อุปกรณ์รัดตรึงครบครัน:</strong> ภายในตู้มีสายรัดก๊อกแก๊กและผ้ารองสัมภาระ ช่วยตรึงกล่อง เฟอร์นิเจอร์ หรือมอเตอร์ไซค์ให้มั่นคง ไม่เลื่อนไถลขณะเดินทาง
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Transparent Quotation Factors */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-4 border border-emerald-500/20">
                  <FaCalculator aria-hidden="true" />
                  <span>หลักเกณฑ์การประเมินราคาที่โปร่งใส</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                  ปัจจัยที่ใช้ในการคำนวณราคาขนย้าย
                </h2>
                <div className="space-y-3 text-sm text-slate-300 bg-[#070F1E]/80 p-5 rounded-2xl border border-white/5">
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FF6B35]" />
                    <strong className="text-white">ระยะทางจริง:</strong> คำนวณจากจุดรับของถึงจุดส่งของตามเส้นทางเดินรถ
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FF6B35]" />
                    <strong className="text-white">ปริมาณและขนาดสิ่งของ:</strong> ตรวจสอบว่าบรรจุในตู้กระบะได้อย่างปลอดภัยในรอบเดียว
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FF6B35]" />
                    <strong className="text-white">บริการช่วยยกของ:</strong> ระบุว่าต้องการเฉพาะคนขับช่วยยก หรือต้องการทีมงานยกเพิ่ม
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FF6B35]" />
                    <strong className="text-white">ลักษณะหน้างาน:</strong> ชั้นที่ต้องขนย้าย มีลิฟต์ขนของหรือบันได และระยะทางเดินยก
                  </p>
                  <div className="pt-3 border-t border-white/10 text-xs text-slate-400">
                    * เมื่อสรุปขอบเขตงานและตกลงราคาก่อนเริ่มงานแล้ว จะไม่มีการบวกเพิ่มสำหรับขอบเขตงานเดิมที่ตกลงกัน
                  </div>
                </div>
              </div>
            </div>

            {/* Conversion CTA Footer */}
            <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-lg sm:text-xl font-bold text-white mb-1">
                  สอบถามค่าบริการขนย้ายในพื้นที่{zone.displayName}
                </p>
                <p className="text-slate-400 text-xs sm:text-sm">
                  ส่งรูปสิ่งของและจุดรับ-ส่ง เพื่อให้ทีมงานประเมินราคาตามจริงได้ทันที
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <a
                  href="https://liff.line.me/1645278921-kWRPP32q/?accountId=952yyanc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-white bg-[#06C755] hover:bg-[#05a84a] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(6,199,85,0.4)] text-sm sm:text-base text-center"
                >
                  <FaLine className="text-xl shrink-0" aria-hidden="true" />
                  <span>ประเมินราคาฟรีผ่าน LINE</span>
                </a>

                <a
                  href="tel:0958010958"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm sm:text-base text-center"
                >
                  <FaPhoneVolume className="text-sm shrink-0" aria-hidden="true" />
                  <span>โทร 095-801-0958</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* TASK 3 SEO 1: ZONE-SPECIFIC FAQ (ACCESSIBLE NATIVE DETAILS/SUMMARY) */}
      <section className="py-16 md:py-20 border-b border-white/5 relative">
        <Container className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF4500]/10 text-[#FF6B35] text-xs font-semibold mb-3">
              <FaCircleQuestion aria-hidden="true" />
              <span>คำถามที่พบบ่อย</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
              คำถามที่พบบ่อยเกี่ยวกับการขนย้ายในพื้นที่{zone.displayName}
            </h2>
            <p className="text-slate-400 text-sm">
              ข้อสงสัยยอดนิยมเกี่ยวกับการใช้บริการรถกระบะตู้ทึบ การคำนวณราคา และการเตรียมตัวก่อนขนย้าย
            </p>
          </div>

          <div className="space-y-4">
            {zone.faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-2xl border border-white/10 bg-[#0B1528]/80 p-5 transition-all duration-300 open:border-[#FF6B35]/50 open:bg-[#0D1A33]"
              >
                <summary className="flex cursor-pointer items-center justify-between text-base sm:text-lg font-bold text-white list-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF6B35] rounded-lg">
                  <span>{faq.question}</span>
                  <span className="ml-4 shrink-0 transition-transform duration-300 group-open:rotate-180 text-[#FF6B35]">
                    <FaChevronDown className="w-4 h-4" aria-hidden="true" />
                  </span>
                </summary>
                <div className="mt-4 pt-3 border-t border-white/5 text-sm sm:text-base text-slate-300 leading-relaxed">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 4: LOCAL GEOGRAPHY & ROAD GUIDANCE */}
      <section className="py-16 md:py-24">
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B1528]/70 border border-white/10 rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl backdrop-blur-md">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-6 pb-4 border-b border-white/10">
              {zone.localGuideTitle}
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              {zone.localGuideParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Contact Conversion Anchor within Local Guide */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/5 p-6 rounded-2xl">
              <div>
                <p className="text-white font-bold text-base sm:text-lg">
                  ต้องการจองคิวรถหรือสอบถามค่าบริการในพื้นที่{zone.displayName}?
                </p>
                <p className="text-slate-400 text-xs sm:text-sm">
                  ทีมงาน N&M18 ยินดีให้คำปรึกษาและประเมินราคาล่วงหน้าฟรี ไม่มีข้อผูกมัด
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <a
                  href="tel:0958010958"
                  className="px-5 py-2.5 rounded-full font-bold text-white bg-gradient-to-r from-[#FF4500] to-[#FF6B35] hover:scale-105 transition-all text-xs sm:text-sm inline-flex items-center gap-2 shadow-[0_0_15px_rgba(255,69,0,0.4)]"
                >
                  <FaPhoneVolume aria-hidden="true" />
                  <span>โทร 095-801-0958</span>
                </a>
                <a
                  href="https://liff.line.me/1645278921-kWRPP32q/?accountId=952yyanc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full font-bold text-white bg-[#06C755] hover:bg-[#05a84a] hover:scale-105 transition-all text-xs sm:text-sm inline-flex items-center gap-2"
                >
                  <FaLine className="text-base" aria-hidden="true" />
                  <span>แชท LINE</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
