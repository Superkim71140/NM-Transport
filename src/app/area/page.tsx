import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { FaMapLocationDot, FaChevronRight, FaLocationDot } from 'react-icons/fa6';

export const metadata: Metadata = {
  title: 'พื้นที่ให้บริการรถรับจ้าง ขนของทั่วไทย - N&M18 TRANSPORT',
  description: 'N&M18 TRANSPORT ให้บริการรถรับจ้างขนของ ขนย้าย ครอบคลุมพื้นที่กรุงเทพฯ ปริมณฑล เชียงใหม่ และเชียงราย บริการรวดเร็ว ปลอดภัย ตลอด 24 ชั่วโมง',
  keywords: 'พื้นที่ให้บริการรถรับจ้าง, รถรับจ้างกรุงเทพ, รถรับจ้างปริมณฑล, รถรับจ้างเชียงใหม่, รถรับจ้างเชียงราย',
  alternates: {
    canonical: "https://www.nm18transport.com/area",
  },
  openGraph: {
    title: 'พื้นที่ให้บริการรถรับจ้าง ขนของทั่วไทย - N&M18 TRANSPORT',
    description: 'ให้บริการรถรับจ้างขนของ ขนย้าย ครอบคลุมกรุงเทพฯ ปริมณฑล เชียงใหม่ เชียงราย และวิ่งงานทั่วประเทศ',
    url: "https://www.nm18transport.com/area",
    siteName: 'N&M18 TRANSPORT',
    locale: 'th_TH',
    images: [{
      url: "https://www.nm18transport.com/images/portfolio/S__2531437.webp",
      width: 1200,
      height: 630,
      alt: "พื้นที่ให้บริการ N&M18 TRANSPORT",
    }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: 'พื้นที่ให้บริการรถรับจ้าง ขนของทั่วไทย - N&M18 TRANSPORT',
    description: 'ให้บริการรถรับจ้างขนของ ขนย้าย ครอบคลุมกรุงเทพฯ ปริมณฑล เชียงใหม่ เชียงราย และวิ่งงานทั่วประเทศ',
    images: ["https://www.nm18transport.com/images/portfolio/S__2531437.webp"],
  },
};

const areas = [
  {
    title: 'ฝั่งธนบุรี (จุดจอดหลัก)',
    description: 'เพชรเกษม บางแค พระราม 2 ปิ่นเกล้า จรัญสนิทวงศ์ มาไว เข้าถึงทุกซอย',
    href: '/area/thonburi',
    image: '/images/portfolio/S__2531437.webp'
  },
  {
    title: 'กรุงเทพฯ ชั้นใน',
    description: 'สุขุมวิท สาทร สีลม ห้วยขวาง รัชดา รถตู้ทึบเข้าตึกง่าย ย้ายคอนโดสะดวก',
    href: '/area/bangkok-inner',
    image: '/images/portfolio/S__2531437.webp'
  },
  {
    title: 'ปริมณฑล',
    description: 'นนทบุรี ปทุมธานี สมุทรปราการ รถกระบะตู้ทึบจุของได้เยอะ เหมาคันราคาคุ้ม',
    href: '/area/perimeter',
    image: '/images/portfolio/S__2531437.webp'
  },
  {
    title: 'เชียงใหม่',
    description: 'ย้ายหอ มช. ขึ้นดอย เข้าเมือง ขนส่งของปลอดภัย ในตัวเมืองและต่างอำเภอ',
    href: '/area/chiangmai',
    image: '/images/portfolio/S__2531437.webp'
  },
  {
    title: 'เชียงราย',
    description: 'รถรับจ้างขนของ ย้ายบ้าน ขนส่งพัสดุขนาดใหญ่ ครอบคลุมทุกพื้นที่ในเชียงราย',
    href: '/area/chiangrai',
    image: '/images/portfolio/S__2531437.webp'
  }
];

export default function AreaHubPage() {
  return (
    <main className="min-h-screen bg-[#050A14] text-text-gray pb-24 selection:bg-orange-lava selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1B38] via-[#071326] to-[#050A14] -z-10"></div>
        <div className="absolute top-0 left-0 w-full h-[500px] bg-[url('/nm18backg.png')] bg-cover bg-center opacity-20 mix-blend-screen pointer-events-none -z-10"></div>
        
        <Container className="text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF4500]/10 border border-[#FF4500]/20 text-[#FF4500] font-medium text-sm mb-6">
            <FaMapLocationDot aria-hidden="true" focusable="false" />
            <span>Service Areas</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            พื้นที่ให้บริการ <span className="text-[#FF4500]">N&M18 TRANSPORT</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            บริการรถกระบะตู้ทึบ ขนของ ย้ายหอพัก ย้ายคอนโด พร้อมทีมงานมืออาชีพ ครอบคลุมพื้นที่กรุงเทพฯ ปริมณฑล และภาคเหนือ
          </p>
        </Container>
      </section>

      {/* Areas List */}
      <section className="relative z-10 -mt-8">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, index) => (
              <Link key={index} href={area.href} className="group relative bg-[#0A162C] rounded-2xl overflow-hidden border border-white/10 hover:border-[#FF4500]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,69,0,0.15)] flex flex-col h-full z-10 hover:z-20">
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <div className="absolute inset-0 bg-[#050A14]/60 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <Image src={area.image} alt={area.title} fill loading="lazy" className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-[#0A162C] to-[#070F1E]">
                  <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <FaLocationDot aria-hidden="true" focusable="false" className="text-[#FF4500]" />
                    {area.title}
                  </h2>
                  <p className="text-gray-400 mb-6 flex-grow leading-relaxed">{area.description}</p>
                  <div className="inline-flex items-center gap-2 text-[#FF4500] font-medium mt-auto group-hover:text-[#ff5a1f] transition-colors">
                    ดูรายละเอียดพื้นที่นี้ <FaChevronRight aria-hidden="true" focusable="false" className="text-xs transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
