import { 
  FaTemperatureArrowDown, 
  FaPumpMedical, 
  FaVideo, 
  FaHandHoldingHeart, 
  FaClipboardList, 
  FaTruckFast, 
  FaPaw, 
  FaPhoneVolume, 
  FaLine, 
  FaShieldCat, 
  FaClock, 
  FaMapLocationDot, 
  FaCheck, 
  FaShieldHalved,
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
  title: "รับส่งสัตว์เลี้ยง Pet Taxi รถกระบะตู้ทึบ แอร์เย็น ปลอดภัย 100% - N&M18",
  description: "บริการรับส่งสัตว์เลี้ยง Pet Taxi ส่งสัตว์เลี้ยงตู้ทึบ ไปต่างจังหวัดและกรุงเทพฯ ด้วยรถกระบะตู้ทึบแอร์เย็น ปลอดภัย ไม่ขังกรงกระบะ โทร 095-801-0958",
  keywords: "ส่งสัตว์เลี้ยงตู้ทึบ, รับส่งสัตว์เลี้ยง, Pet Taxi, รับส่งน้องหมา, แท็กซี่สัตว์เลี้ยง, รถกระบะตู้ทึบรับส่งสัตว์เลี้ยง, N&M18 TRANSPORT",
  alternates: {
    canonical: "https://www.nm18transport.com/service/pets",
  },
  openGraph: {
    title: "รับส่งสัตว์เลี้ยง Pet Taxi รถกระบะตู้ทึบ แอร์เย็น ปลอดภัย 100%",
    description: "บริการรับส่งสัตว์เลี้ยง Pet Taxi ส่งสัตว์เลี้ยงตู้ทึบ ไปต่างจังหวัดและกรุงเทพฯ ด้วยรถกระบะตู้ทึบแอร์เย็น ปลอดภัย โทร 095-801-0958",
    url: "https://www.nm18transport.com/service/pets",
    siteName: "N&M18 TRANSPORT",
    locale: "th_TH",
    images: [{ 
      url: "https://www.nm18transport.com/images/portfolio/S__2531437.webp",
      width: 1200,
      height: 630,
      alt: "รับส่งสัตว์เลี้ยง Pet Taxi N&M18 TRANSPORT",
    }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "รับส่งสัตว์เลี้ยง Pet Taxi รถกระบะตู้ทึบ แอร์เย็น ปลอดภัย 100%",
    description: "บริการรับส่งสัตว์เลี้ยง Pet Taxi ส่งสัตว์เลี้ยงตู้ทึบ ไปต่างจังหวัดและกรุงเทพฯ ด้วยรถกระบะตู้ทึบแอร์เย็น ปลอดภัย โทร 095-801-0958",
    images: ["https://www.nm18transport.com/images/portfolio/S__2531437.webp"],
  },
};

export default function ServicePetsPage() {
  const petsFaqs = [
    { question: "เดินทางด้วยรถตู้ทึบ น้องจะร้อนหรืออึดอัดไหม?", answer: "เย็นสบายและปลอดภัยแน่นอนครับ! ทางเราให้บริการด้วยรถกระบะตู้ทึบที่มีการจัดการอากาศและอุณหภูมิที่เหมาะสม ป้องกันแดดและฝน 100% น้องหายใจสะดวก ผ่อนคลาย และปลอดภัยครับ" },
    { question: "ต้องเตรียมกรงหรือ Box เดินทางไหม?", answer: "เพื่อความปลอดภัยสูงสุดของน้อง แนะนำให้ใส่กรงหรือ Box เดินทางที่แข็งแรงครับ ทางเราจะทำการล็อค Box อย่างแน่นหนาภายในตู้ทึบ ไม่ให้ขยับระหว่างเดินทางครับ" },
    { question: "ต้องจองคิวรถล่วงหน้ากี่วัน?", answer: "แนะนำให้จองล่วงหน้า 1 - 3 วัน ครับ โดยเฉพาะช่วงวันหยุดสุดสัปดาห์หรือเทศกาลวันหยุดยาว คิวจะเต็มค่อนข้างเร็ว แต่หากเป็นเคสเร่งด่วนสามารถโทรเช็คคิวรถกับเจ้าหน้าที่ได้ตลอด 24 ชั่วโมงครับ" }
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "TaxiService",
      "name": "N&M18 TRANSPORT Pet Taxi",
      "provider": {
        "@id": "https://www.nm18transport.com/#organization"
      },
      "image": "https://www.nm18transport.com/logo-nm18.png",
      "telephone": "095-801-0958",
      "url": "https://www.nm18transport.com/service/pets",
      "priceRange": "฿500 - ฿5,000",
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
        { "@type": "City", "name": "Chon Buri" },
        { "@type": "City", "name": "Hua Hin" }
      ],
      "description": "บริการรับส่งสัตว์เลี้ยง Pet Taxi ด้วยรถกระบะตู้ทึบแอร์เย็น ไม่ขังกรงกระบะ สะอาด ปลอดภัย 100%",
      "openingHours": "Mo-Su 00:00-23:59"
    }
  ];

  return (
    <main className="bg-[#02040a] min-h-screen text-[#e2e8f0] pb-24 md:pb-0">
      <Script
        id="service-pets-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[550px] md:min-h-[620px] flex items-center justify-center overflow-hidden">
        {/* 1. Background Image Layer */}
        <div className="absolute inset-0 z-0 bg-slate-900">
          <Image 
            src="/images/portfolio/S__2531437.webp" 
            alt="รับส่งสัตว์เลี้ยง Pet Taxi รถกระบะตู้ทึบ แอร์เย็น ปลอดภัย" 
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 mb-6">
            <FaPaw className="text-xs shrink-0" />
            <span>บริการรับส่งสัตว์เลี้ยง VIP ปลอดภัย ทั่วประเทศ</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5 text-white">
            รับส่งสัตว์เลี้ยง Pet Taxi<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
              ด้วยรถตู้ทึบ ปลอดภัย 100%
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            เราเข้าใจว่าน้องๆ คือสมาชิกคนสำคัญของครอบครัว บริการขนส่งด้วยรถกระบะตู้ทึบ ป้องกันแดดฝนอย่างดี สะอาด ปลอดเชื้อ ถ่ายรูปและวิดีโออัปเดตสถานะแบบ Real-time
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto hidden md:flex">
            <a 
              href="tel:0958010958" 
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 py-3.5 px-8 rounded-full font-bold text-base text-white bg-gradient-to-r from-amber-500 to-orange-500 shadow-neon-orange transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.9)]"
            >
              <FaPhoneVolume className="shrink-0 animate-pulse" /> 
              <span>โทรจองคิวรถ</span>
            </a>

            <a 
              href="https://liff.line.me/1645278921-kWRPP32q/?accountId=952yyanc" 
              target="_blank" 
              rel="noreferrer" 
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 py-3.5 px-8 rounded-full font-bold text-base text-white bg-[#06C755] shadow-neon-green transition-all duration-300 hover:scale-105 hover:bg-[#05b84e]"
            >
              <FaLine className="text-xl shrink-0" /> 
              <span>ทักไลน์ (24 ชม.)</span>
            </a>
          </div>
        </div>
      </section>

      <ServiceTrustBadges />
      <ServiceWorkflow />
      <ServiceChatReviews />

      <Container className="py-16">
        
        {/* FEATURE BENTO CARDS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          
          <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 text-left hover:border-amber-400/40 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 text-2xl mb-5">
              <FaTemperatureArrowDown className="shrink-0" />
            </div>
            <h3 className="text-white font-bold text-xl mb-2">
              Temperature Controlled
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              ตู้ทึบป้องกันแดด ฝน ลมแรง 100% ดูแลอุณหภูมิและการระบายอากาศอย่างเหมาะสม ป้องกันภาวะ Heat Stroke ปลอดภัยสูงสุด
            </p>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 text-left hover:border-amber-400/40 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 text-2xl mb-5">
              <FaPumpMedical className="shrink-0" />
            </div>
            <h3 className="text-white font-bold text-xl mb-2">
              Hygiene Standard
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              ฉีดพ่นน้ำยาฆ่าเชื้อเกรดปลอดภัยสำหรับสัตว์เลี้ยงทุกครั้งก่อนและหลังรับงาน สะอาด ปลอดเชื้อโรค ไม่เสี่ยงติดเชื้อ
            </p>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 text-left hover:border-amber-400/40 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 text-2xl mb-5">
              <FaVideo className="shrink-0" />
            </div>
            <h3 className="text-white font-bold text-xl mb-2">
              Live Updates
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              อุ่นใจได้ตลอดเส้นทาง คนขับถ่ายรูปและคลิปวิดีโอรายงานสถานะทุกจุดพักรถ เห็นสภาพน้องตลอดเวลา เดินทางไร้กังวล
            </p>
          </div>

        </section>

        {/* SYSTEM SAFETY & PREPARATION GRID */}
        <section className="bg-slate-900/40 rounded-3xl p-6 sm:p-10 mb-20 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl text-white font-extrabold tracking-tight mb-3">
                  ระบบความปลอดภัย <span className="text-emerald-400 font-bold">ระดับพรีเมียม</span>
                </h2>
                <p className="text-slate-400 text-sm sm:text-base mb-6 leading-relaxed">
                  เราเตรียมความพร้อมในทุกมิติ ทั้งยานพาหนะตู้ทึบสะอาด คนขับ และระบบการดูแล เพื่อให้ทุกการเดินทางราบรื่นที่สุด
                </p>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4 bg-white/5 p-4 sm:p-5 rounded-2xl border border-white/5">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center text-lg shrink-0 mt-0.5">
                    <FaShieldCat className="shrink-0" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-base mb-1">Door-to-Door Service</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      บริการรับถึงหน้าบ้าน และส่งมอบถึงที่หมายอย่างทะนุถนอม ไม่ต้องนัดเจอจุดพักริมทาง
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white/5 p-4 sm:p-5 rounded-2xl border border-white/5">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center text-lg shrink-0 mt-0.5">
                    <FaClock className="shrink-0" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-base mb-1">Express Delivery</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      เดินทางตรงตามกำหนด ไม่ดองงาน ไม่แวะรับส่งของอื่นปะปน ถึงปลายทางอย่างรวดเร็ว
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white/5 p-4 sm:p-5 rounded-2xl border border-white/5">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center text-lg shrink-0 mt-0.5">
                    <FaHandHoldingHeart className="shrink-0" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-base mb-1">Pet Lover Driver</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      พนักงานขับรถรักสัตว์และเข้าใจพฤติกรรมสัตว์เลี้ยง มีการแวะพักให้น้ำตามความเหมาะสม
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[3/4] lg:aspect-auto bg-slate-900">
              <Image 
                src="/images/services/pet.jpg" 
                alt="Pet Transport Service N&M18" 
                fill 
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover" 
              />
            </div>

          </div>
        </section>

      </Container>

      <ServiceFAQ faqs={petsFaqs} />
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
