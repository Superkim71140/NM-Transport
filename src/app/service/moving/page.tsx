import { 
  FaPeopleCarryBox, 
  FaBox, 
  FaLayerGroup, 
  FaHeart, 
  FaFileInvoiceDollar, 
  FaDolly,
  FaPhoneVolume, 
  FaLine, 
  FaTruckFront, 
  FaBoxOpen, 
  FaTruckFast, 
  FaShieldHalved, 
  FaMapLocationDot, 
  FaCheck,
  FaLock
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
  title: "รับจ้างย้ายบ้าน ย้ายหอพัก ด้วยรถกระบะตู้ทึบ ปลอดภัย กันฝน 100% - N&M18 TRANSPORT",
  description: "บริการรับจ้างย้ายบ้าน ย้ายหอพัก คอนโด ด้วยรถกระบะตู้ทึบรับจ้าง และรถ 4 ล้อใหญ่ ปลอดภัย กันฝน 100% พร้อมคนยกของ ราคาถูก โทร 095-801-0958 ประเมินราคาฟรี",
  keywords: "รับจ้างย้ายบ้าน, ย้ายหอพัก, รถกระบะตู้ทึบรับจ้าง, รถ 4 ล้อใหญ่ย้ายบ้าน, รถรับจ้างย้ายบ้าน, ย้ายบ้านราคาถูก, ขนย้ายบ้านตู้ทึบ, N&M18 TRANSPORT",
  alternates: {
    canonical: "https://www.nm18transport.com/service/moving",
  },
  openGraph: {
    title: "รับจ้างย้ายบ้าน ย้ายหอพัก ด้วยรถกระบะตู้ทึบ ปลอดภัย กันฝน 100%",
    description: "บริการรับจ้างย้ายบ้าน ย้ายหอพัก คอนโด ด้วยรถกระบะตู้ทึบรับจ้าง และรถ 4 ล้อใหญ่ ปลอดภัย กันฝน 100% พร้อมคนยกของ ราคาถูก โทร 095-801-0958",
    url: "https://www.nm18transport.com/service/moving",
    siteName: "N&M18 TRANSPORT",
    locale: "th_TH",
    images: [{ 
      url: "https://www.nm18transport.com/images/portfolio/S__2531437.webp",
      width: 1200,
      height: 630,
      alt: "บริการรับจ้างย้ายบ้าน ย้ายหอพัก N&M18 TRANSPORT",
    }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "รับจ้างย้ายบ้าน ย้ายหอพัก ด้วยรถกระบะตู้ทึบ ปลอดภัย กันฝน 100%",
    description: "บริการรับจ้างย้ายบ้าน ย้ายหอพัก คอนโด ด้วยรถกระบะตู้ทึบรับจ้าง และรถ 4 ล้อใหญ่ ปลอดภัย กันฝน 100% พร้อมคนยกของ โทร 095-801-0958",
    images: ["https://www.nm18transport.com/images/portfolio/S__2531437.webp"],
  },
};

export default function ServiceMovingPage() {
  const movingFaqs = [
    { question: "คิดราคาค่าขนย้ายยังไงครับ?", answer: "ราคาขึ้นอยู่กับ 3 ปัจจัยหลักครับ: <strong>1. ระยะทาง (ต้นทาง-ปลายทาง)</strong> <strong>2. ประเภทรถที่ใช้ (กระบะตู้ทึบ/4 ล้อใหญ่)</strong> และ <strong>3. จำนวนคนช่วยยกของ</strong> แนะนำให้ทักแชทแจ้งรายการของและสถานที่เพื่อรับราคาเหมาจ่ายที่คุ้มค่าที่สุดได้ฟรีครับ" },
    { question: "ต้องเก็บของลงกล่องเองไหม?", answer: "สำหรับของใช้ส่วนตัว เสื้อผ้า หนังสือ แนะนำให้ลูกค้าใส่กล่องหรือถุงไว้ล่วงหน้าเพื่อความรวดเร็วครับ ส่วน <strong>เฟอร์นิเจอร์ชิ้นใหญ่</strong> เช่น ตู้ เตียง ฟูกที่นอน ทีวี ตู้เย็น ทางทีมงานจะช่วยห่อฟิล์มกันกระแทกและยกขนย้ายให้อย่างปลอดภัยครับ" },
    { question: "ไปช่วยขนด้วยได้ไหม นั่งไปกับรถได้ไหม?", answer: "ได้ครับ! ลูกค้าสามารถนั่งติดรถไปกับคนขับได้ 1 ท่าน (สำหรับรถกระบะ) และหากลูกค้ามีคนช่วยยกอยู่แล้ว สามารถจ้างเฉพาะรถพร้อมคนขับได้ ราคาจะประหยัดลงครับ" }
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "MovingCompany",
      "@id": "https://www.nm18transport.com/#organization",
      "name": "N&M18 TRANSPORT",
      "image": "https://www.nm18transport.com/logo-nm18.png",
      "telephone": "095-801-0958",
      "url": "https://www.nm18transport.com/service/moving",
      "priceRange": "฿500 - ฿10,000",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bang Khae",
        "addressRegion": "Bangkok",
        "addressCountry": "TH"
      },
      "areaServed": [
        { "@type": "City", "name": "Bangkok" },
        { "@type": "City", "name": "Nonthaburi" },
        { "@type": "City", "name": "Pathum Thani" },
        { "@type": "City", "name": "Samut Prakan" },
        { "@type": "Country", "name": "Thailand" }
      ],
      "description": "บริการรับจ้างย้ายบ้าน หอพัก คอนโด ขนย้ายเฟอร์นิเจอร์ รถกระบะตู้ทึบและรถ 4 ล้อรับจ้าง พร้อมคนยกของมืออาชีพ ปลอดภัย กันฝน 100% บริการ 24 ชม.",
      "openingHours": "Mo-Su 00:00-23:59"
    }
  ];

  return (
    <main className="bg-[#02040a] min-h-screen text-[#e2e8f0] pb-24 md:pb-0">
      <Script
        id="service-moving-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[550px] md:min-h-[620px] flex items-center justify-center overflow-hidden">
        {/* 1. Background Image Layer */}
        <div className="absolute inset-0 z-0 bg-slate-900">
          <Image 
            src="/images/portfolio/S__2531437.webp" 
            alt="บริการรับจ้างย้ายบ้าน ย้ายหอพัก ด้วยรถกระบะตู้ทึบ ปลอดภัย กันฝน 100%" 
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-orange-400 bg-orange-500/10 border border-orange-500/20 mb-6">
            <FaBoxOpen className="text-xs shrink-0" />
            <span>บริการขนย้ายครบวงจร 24 ชั่วโมง</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5 text-white">
            รับจ้างย้ายบ้าน ย้ายหอพัก<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-orange-400 to-orange-500">
              ด้วยรถกระบะตู้ทึบ กันฝน 100%
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            เรื่องย้ายให้เป็นหน้าที่เรา แพ็ค-ยก-ขน-ส่ง ถึงที่หมายปลอดภัย 100%<br className="hidden sm:inline" />
            ด้วยรถกระบะตู้ทึบพร้อมทีมงานผู้เชี่ยวชาญ ประเมินราคาฟรี
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto hidden md:flex">
            <a 
              href="tel:0958010958" 
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 py-3.5 px-8 rounded-full font-bold text-base text-white bg-gradient-to-r from-orange-500 to-orange-600 shadow-neon-orange transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,69,0,0.9)]"
            >
              <FaPhoneVolume className="shrink-0 animate-pulse" /> 
              <span>ประเมินราคาฟรี</span>
            </a>

            <a 
              href="https://liff.line.me/1645278921-kWRPP32q/?accountId=952yyanc" 
              target="_blank" 
              rel="noreferrer" 
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 py-3.5 px-8 rounded-full font-bold text-base text-white bg-[#06C755] shadow-neon-green transition-all duration-300 hover:scale-105 hover:bg-[#05b84e]"
            >
              <FaLine className="text-xl shrink-0" /> 
              <span>ทักไลน์จองคิว</span>
            </a>
          </div>
        </div>
      </section>

      <ServiceTrustBadges />
      <ServiceWorkflow />
      <ServiceChatReviews />

      <Container className="py-16">
        
        {/* FEATURE CARDS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="bg-slate-900/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl text-left border border-white/10 hover:border-orange-500/40 transition-all">
            <div className="w-14 h-14 bg-orange-500/10 border border-orange-500/30 rounded-2xl flex items-center justify-center text-2xl text-orange-400 mb-5">
              <FaPeopleCarryBox className="shrink-0" />
            </div>
            <h3 className="text-white mb-2 text-xl font-bold">ทีมงานช่วยยกของ</h3>
            <p className="text-slate-400 text-sm leading-relaxed">มีพนักงานช่วยยกของขึ้น-ลงรถ และจัดวางเข้าที่เรียบร้อย ไม่ต้องเหนื่อยทำเอง</p>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl text-left border border-white/10 hover:border-orange-500/40 transition-all">
            <div className="w-14 h-14 bg-orange-500/10 border border-orange-500/30 rounded-2xl flex items-center justify-center text-2xl text-orange-400 mb-5">
              <FaBox className="shrink-0" />
            </div>
            <h3 className="text-white mb-2 text-xl font-bold">บริการแพ็คกิ้งกันกระแทก</h3>
            <p className="text-slate-400 text-sm leading-relaxed">ห่อหุ้มเฟอร์นิเจอร์ ตู้ เตียง ทีวี เครื่องซักผ้า ด้วยฟิล์มและวัสดุกันกระแทกอย่างดี</p>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl text-left border border-white/10 hover:border-orange-500/40 transition-all">
            <div className="w-14 h-14 bg-orange-500/10 border border-orange-500/30 rounded-2xl flex items-center justify-center text-2xl text-orange-400 mb-5">
              <FaTruckFront className="shrink-0" />
            </div>
            <h3 className="text-white mb-2 text-xl font-bold">รถตู้ทึบกันฝน 100%</h3>
            <p className="text-slate-400 text-sm leading-relaxed">รถกระบะและ 4 ล้อตู้ทึบ ปิดมิดชิด กันแดด กันฝน สิ่งของปลอดภัยตลอดทาง</p>
          </div>
        </section>

        {/* WHY CHOOSE US GRID */}
        <section className="bg-slate-900/40 rounded-3xl p-6 sm:p-10 mb-20 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-white">
                ทำไมต้องเลือกขนย้ายกับ <span className="text-orange-400">N&M18</span>?
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-400 text-xl shrink-0">
                    <FaFileInvoiceDollar />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base mb-1">ประเมินราคาชัดเจน</h4>
                    <p className="text-slate-300 text-xs sm:text-sm">ไม่มีบวกเพิ่มหน้างาน จบที่ราคาตกลง เป็นธรรมและโปร่งใส</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-400 text-xl shrink-0">
                    <FaShieldHalved />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base mb-1">รับประกันสินค้า 100%</h4>
                    <p className="text-slate-300 text-xs sm:text-sm">หากเกิดความเสียหายจากการขนส่งยินดีรับผิดชอบตามตกลง</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-400 text-xl shrink-0">
                    <FaDolly />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base mb-1">อุปกรณ์ครบครัน</h4>
                    <p className="text-slate-300 text-xs sm:text-sm">มีรถเข็น สายรัด ผ้าใบ พลาสติกซีน พร้อมลุยงานหนักทุกรูปแบบ</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-400 text-xl shrink-0">
                    <FaMapLocationDot />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base mb-1">ชำนาญเส้นทางทั่วไทย</h4>
                    <p className="text-slate-300 text-xs sm:text-sm">วิ่งงานตรงเวลา คนขับสุภาพ มีประสบการณ์ขนย้ายสูง</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[4/3] bg-slate-900">
              <Image 
                src="/images/portfolio/S__2531423.webp" 
                alt="อุปกรณ์แพ็คกิ้งครบครัน N&M18" 
                fill 
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover" 
              />
            </div>
          </div>
        </section>

      </Container>

      <ServiceFAQ faqs={movingFaqs} />
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
