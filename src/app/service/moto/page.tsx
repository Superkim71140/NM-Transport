import { 
  FaPhoneVolume, 
  FaLine, 
  FaTruckRampBox, 
  FaShieldCat, 
  FaLock, 
  FaClock, 
  FaCamera, 
  FaMapLocationDot, 
  FaCheck,
  FaMotorcycle,
  FaShieldHalved
} from 'react-icons/fa6';
import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Image from 'next/image';
import { Container } from '../../../components/ui/Container';
import ServiceTrustBadges from '../../../components/sections/ServiceTrustBadges';
import ServiceWorkflow from '../../../components/sections/ServiceWorkflow';
import ServiceChatReviews from '../../../components/sections/ServiceChatReviews';
import ServiceFAQ from '../../../components/sections/ServiceFAQ';
import ServiceLocalSEO from '../../../components/sections/ServiceLocalSEO';

export const metadata: Metadata = {
  title: "ขนส่งบิ๊กไบค์ ขนส่งมอเตอร์ไซค์ ด้วยรถกระบะตู้ทึบ ล็อคล้อ 100% - N&M18",
  description: "บริการขนส่งบิ๊กไบค์ (Big Bike) ขนส่งมอเตอร์ไซค์ ไปต่างจังหวัด ด้วยรถกระบะตู้ทึบรับจ้าง มีทางลาดขึ้น-ลง ล็อคล้อแน่นหนา ปลอดภัย กันฝน 100% โทร 095-801-0958",
  keywords: "ขนส่งบิ๊กไบค์, ขนส่งมอเตอร์ไซค์, ส่งรถมอไซค์ไปต่างจังหวัด, รถกระบะตู้ทึบขนมอเตอร์ไซค์, รับส่งบิ๊กไบค์, รถตู้ทึบขนบิ๊กไบค์, รถรับจ้างขนรถ, N&M18 TRANSPORT",
  alternates: {
    canonical: "https://www.nm18transport.com/service/moto",
  },
  openGraph: {
    title: "ขนส่งบิ๊กไบค์ ขนส่งมอเตอร์ไซค์ ด้วยรถกระบะตู้ทึบ ล็อคล้อ 100%",
    description: "บริการขนส่งบิ๊กไบค์ (Big Bike) ขนส่งมอเตอร์ไซค์ ไปต่างจังหวัด ด้วยรถกระบะตู้ทึบรับจ้าง มีทางลาดขึ้น-ลง ล็อคล้อแน่นหนา ปลอดภัย โทร 095-801-0958",
    url: "https://www.nm18transport.com/service/moto",
    siteName: "N&M18 TRANSPORT",
    locale: "th_TH",
    images: [{ 
      url: "https://www.nm18transport.com/images/portfolio/S__2531437.webp",
      width: 1200,
      height: 630,
      alt: "ขนส่งบิ๊กไบค์ มอเตอร์ไซค์ N&M18 TRANSPORT",
    }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "ขนส่งบิ๊กไบค์ ขนส่งมอเตอร์ไซค์ ด้วยรถกระบะตู้ทึบ ล็อคล้อ 100%",
    description: "บริการขนส่งบิ๊กไบค์ (Big Bike) ขนส่งมอเตอร์ไซค์ ไปต่างจังหวัด ด้วยรถกระบะตู้ทึบรับจ้าง ล็อคล้อแน่นหนา ปลอดภัย โทร 095-801-0958",
    images: ["https://www.nm18transport.com/images/portfolio/S__2531437.webp"],
  },
};

export default function ServiceMotoPage() {
  const motoFaqs = [
    { question: "รับขนส่งมอเตอร์ไซค์รุ่นไหนบ้าง?", answer: "เรารับขนส่งมอเตอร์ไซค์ทุกรุ่น ตั้งแต่รถเล็ก รถแม่บ้าน ไปจนถึง Big Bike ขนาด 1000cc+ ครับ มีอุปกรณ์ขึ้นลงและล็อคล้อครบชุด" },
    { question: "มีประกันความเสียหายระหว่างขนส่งไหม?", answer: "มีครับ เรารับประกันสินค้าและตัวรถตลอดการเดินทาง หากเกิดความเสียหายจากการขนส่ง ทางเรายินดีรับผิดชอบตามเงื่อนไขที่ตกลงไว้ครับ" },
    { question: "รถตู้ทึบมีสแลนหรือรอกดึงขึ้นไหม?", answer: "เรามีทางลาด (Ramp) อลูมิเนียมมาตรฐานและอุปกรณ์สายรัด (Tie-down) 4 จุด พร้อม Wheel Chock ล็อคล้อหน้าอย่างแน่นหนา ปลอดภัย 100% ครับ" }
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Motorcycle Transport Service",
      "provider": {
        "@id": "https://www.nm18transport.com/#organization"
      },
      "areaServed": [
        { "@type": "City", "name": "Bangkok" },
        { "@type": "City", "name": "Nonthaburi" },
        { "@type": "City", "name": "Chiang Mai" },
        { "@type": "City", "name": "Phuket" },
        { "@type": "Country", "name": "Thailand" }
      ],
      "description": "บริการขนส่งมอเตอร์ไซค์ รับส่งบิ๊กไบค์ (Big Bike) รถตู้ทึบ รับถึงหน้าบ้าน ส่งถึงที่หมายทั่วไทย ปลอดภัย กันฝน 100%",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "THB",
        "price": "Call for price",
        "availability": "https://schema.org/InStock"
      }
    }
  ];

  return (
    <main className="bg-[#02040a] min-h-screen text-[#e2e8f0] pb-24 md:pb-0">
      <Script
        id="service-moto-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[550px] md:min-h-[620px] flex items-center justify-center overflow-hidden">
        {/* 1. Background Image Layer */}
        <div className="absolute inset-0 z-0 bg-slate-900">
          <Image 
            src="/images/portfolio/S__2531437.webp" 
            alt="บริการขนส่งบิ๊กไบค์ ขนส่งมอเตอร์ไซค์ ด้วยรถกระบะตู้ทึบ ล็อคล้อ 100%" 
            fill 
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1920px"
            className="object-cover object-center" 
          />
        </div>

        {/* 2. Dark Overlay Layer (Crucial: keeps image visible while text stays sharp) */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#070b14]/85 via-[#070b14]/75 to-[#070b14]/95 backdrop-blur-[1px]" />

        {/* 3. Foreground Content Layer */}
        <div className="relative z-20 container mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-neon-blue bg-neon-blue/10 border border-neon-blue/20 mb-6">
            <FaMotorcycle className="text-xs shrink-0" />
            <span>บริการขนส่งบิ๊กไบค์ & มอเตอร์ไซค์ทั่วไทย</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5 text-white">
            ขนส่งมอเตอร์ไซค์ บิ๊กไบค์<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-cyan-400 to-neon-blue">
              ด้วยรถตู้ทึบ ล็อคล้อ 100%
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            มั่นใจทุกการเดินทาง รถกระบะตู้ทึบกันฝน 100% มีทางลาดขึ้น-ลงสะดวก พร้อมอุปกรณ์ Wheel Chock ล็อคล้อหน้า ไม่ต้องขี่มาส่ง เราไปรับถึงหน้าบ้าน
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto hidden md:flex">
            <a 
              href="tel:0958010958" 
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 py-3.5 px-8 rounded-full font-bold text-base text-navy-dark bg-neon-blue shadow-neon-blue transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-[0_0_30px_rgba(0,242,255,0.8)]"
            >
              <FaPhoneVolume className="shrink-0 animate-pulse" /> 
              <span>โทรประเมินราคา</span>
            </a>

            <a 
              href="https://liff.line.me/1645278921-kWRPP32q/?accountId=952yyanc" 
              target="_blank" 
              rel="noreferrer" 
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 py-3.5 px-8 rounded-full font-bold text-base text-white bg-[#06C755] shadow-neon-green transition-all duration-300 hover:scale-105 hover:bg-[#05b84e]"
            >
              <FaLine className="text-xl shrink-0" /> 
              <span>ส่งรูปรถทาง LINE</span>
            </a>
          </div>
        </div>
      </section>

      <ServiceTrustBadges />
      <ServiceWorkflow />
      <ServiceChatReviews />

      <Container className="py-16">
        
        {/* TECH GRID */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <div className="bg-slate-900/50 backdrop-blur-md p-6 rounded-2xl text-left border border-white/10 hover:border-neon-blue/40 transition-all">
            <div className="text-3xl text-neon-blue mb-4 drop-shadow-[0_0_8px_rgba(0,242,255,0.6)]">
              <FaTruckRampBox />
            </div>
            <h3 className="text-white mb-2 text-lg font-bold">ทางลาดขึ้น-ลงสะดวก</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">ทางลาดอลูมิเนียมยาวพิเศษ รถโหลดเตี้ยหรือทรงสปอร์ตขึ้นได้ง่าย ไม่ติดใต้ท้อง</p>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-md p-6 rounded-2xl text-left border border-white/10 hover:border-neon-blue/40 transition-all">
            <div className="text-3xl text-neon-blue mb-4 drop-shadow-[0_0_8px_rgba(0,242,255,0.6)]">
              <FaShieldCat />
            </div>
            <h3 className="text-white mb-2 text-lg font-bold">แพ็คซีนกันรอย 100%</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">ห่อหุ้มจุดสัมผัสและตัวรถด้วยฟิล์มยืดอย่างดี ป้องกันรอยขีดข่วนระหว่างขนส่ง</p>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-md p-6 rounded-2xl text-left border border-white/10 hover:border-neon-blue/40 transition-all">
            <div className="text-3xl text-neon-blue mb-4 drop-shadow-[0_0_8px_rgba(0,242,255,0.6)]">
              <FaLock />
            </div>
            <h3 className="text-white mb-2 text-lg font-bold">ล็อคล้อ 4 จุดมาตรฐาน</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">ใช้อุปกรณ์ Wheel Chock ล็อคล้อหน้า และสายรัด Soft Strap ไม่กดทับแฟริ่ง</p>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-md p-6 rounded-2xl text-left border border-white/10 hover:border-neon-blue/40 transition-all">
            <div className="text-3xl text-neon-blue mb-4 drop-shadow-[0_0_8px_rgba(0,242,255,0.6)]">
              <FaClock />
            </div>
            <h3 className="text-white mb-2 text-lg font-bold">บริการด่วน 24 ชั่วโมง</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">วิ่งงานด่วน งานเหมา ทั่วไทย รับรถดึกแค่ไหนก็ไปรับได้ นัดหมายตรงเวลา</p>
          </div>
        </section>

        {/* GALLERY SHOWCASE */}
        <section className="bg-slate-900/40 rounded-3xl p-6 sm:p-10 mb-20 border border-white/10 shadow-2xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium text-neon-blue bg-neon-blue/10 border border-neon-blue/20 mb-3">
              <FaCamera className="text-xs shrink-0" />
              <span>ภาพผลงานจริง</span>
            </div>
            <h2 className="text-2xl sm:text-3xl text-white mb-2 font-bold">ภาพผลงานการขนส่งมอเตอร์ไซค์</h2>
            <p className="text-slate-400 text-sm sm:text-base">รถเล็ก รถใหญ่ รถคลาสสิค รถวิบาก เรารับจบทุกคันด้วยความปลอดภัย</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="rounded-2xl overflow-hidden border border-white/10 relative group aspect-[4/3] bg-slate-900 hover:border-neon-blue hover:shadow-neon-blue transition-all duration-300">
              <Image 
                src="/images/portfolio/S__2531431.webp" 
                alt="ขนส่งรถบิ๊กไบค์ ขึ้นรถตู้ทึบ" 
                fill 
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 relative group aspect-[4/3] bg-slate-900 hover:border-neon-blue hover:shadow-neon-blue transition-all duration-300">
              <Image 
                src="/images/portfolio/S__17556169.webp" 
                alt="แพ็คกันรอยรถบิ๊กไบค์ GS Adventure" 
                fill 
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 relative group aspect-[4/3] bg-slate-900 hover:border-neon-blue hover:shadow-neon-blue transition-all duration-300">
              <Image 
                src="/images/portfolio/S__17556176.webp" 
                alt="ขนส่งรถคลาสสิคแบบเหมาคัน" 
                fill 
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 relative group aspect-[4/3] bg-slate-900 hover:border-neon-blue hover:shadow-neon-blue transition-all duration-300">
              <Image 
                src="/images/portfolio/S__17556173.webp" 
                alt="บริการขนส่งรถมอเตอร์ไซค์ 24 ชม" 
                fill 
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 relative group aspect-[4/3] bg-slate-900 hover:border-neon-blue hover:shadow-neon-blue transition-all duration-300">
              <Image 
                src="/images/portfolio/S__17556286.webp" 
                alt="ขนส่งรถวิบาก รถแข่งสนาม" 
                fill 
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 relative group aspect-[4/3] bg-slate-900 hover:border-neon-blue hover:shadow-neon-blue transition-all duration-300">
              <Image 
                src="/images/portfolio/S__17556168.webp" 
                alt="รถตู้ทึบ N&M18 TRANSPORT" 
                fill 
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
          </div>
        </section>

        {/* SERVICE AREA SECTION */}
        <section className="bg-slate-900/40 rounded-3xl p-6 sm:p-10 mb-20 border border-white/10">
          <h3 className="text-white text-center mb-8 text-2xl font-bold flex items-center justify-center gap-3">
            <FaMapLocationDot className="text-neon-blue" />
            <span>พื้นที่รับ-ส่งยอดนิยม (รับถึงหน้าบ้าน)</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white/5 border border-white/5 p-5 rounded-2xl">
              <h4 className="text-orange-400 font-bold text-base mb-3">กรุงเทพ & ปริมณฑล</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2"><FaCheck className="text-emerald-400 shrink-0" /> บางแค / ฝั่งธน / พระราม 2</li>
                <li className="flex items-center gap-2"><FaCheck className="text-emerald-400 shrink-0" /> ลาดพร้าว / รังสิต / ดอนเมือง</li>
                <li className="flex items-center gap-2"><FaCheck className="text-emerald-400 shrink-0" /> บางนา / สมุทรปราการ / นนทบุรี</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/5 p-5 rounded-2xl">
              <h4 className="text-orange-400 font-bold text-base mb-3">เส้นทางต่างจังหวัด</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2"><FaCheck className="text-emerald-400 shrink-0" /> ภาคเหนือ (เชียงใหม่ / นครสวรรค์)</li>
                <li className="flex items-center gap-2"><FaCheck className="text-emerald-400 shrink-0" /> ภาคอีสาน (โคราช / ขอนแก่น)</li>
                <li className="flex items-center gap-2"><FaCheck className="text-emerald-400 shrink-0" /> ภาคใต้ (หัวหิน / ภูเก็ต / สุราษฎร์)</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/5 p-5 rounded-2xl">
              <h4 className="text-orange-400 font-bold text-base mb-3">ประเภทรถที่รับขนส่ง</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2"><FaCheck className="text-emerald-400 shrink-0" /> Big Bike ทุกรุ่น (Harley, BMW, Ducati)</li>
                <li className="flex items-center gap-2"><FaCheck className="text-emerald-400 shrink-0" /> มอเตอร์ไซค์ทั่วไป / Vespa / รถคลาสสิค</li>
                <li className="flex items-center gap-2"><FaCheck className="text-emerald-400 shrink-0" /> รถวิบาก / Enduro / ATV / รถแข่ง</li>
              </ul>
            </div>
          </div>
        </section>

      </Container>

      <ServiceFAQ faqs={motoFaqs} />
      <ServiceLocalSEO />

      {/* STICKY MOBILE CTA BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#02040a]/90 backdrop-blur-md border-t border-white/10 p-4">
        <div className="flex gap-3 max-w-md mx-auto">
          <a href="tel:0958010958" className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 shadow-neon-orange">
            <FaPhoneVolume className="animate-pulse" /> โทรด่วน
          </a>
          <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=952yyanc" target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white bg-[#06C755] shadow-neon-green">
            <FaLine className="text-xl" /> ทักไลน์
          </a>
        </div>
      </div>
    </main>
  );
}
