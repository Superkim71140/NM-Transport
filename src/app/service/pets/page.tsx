import { 
  FaTemperatureArrowDown, 
  FaPumpMedical, 
  FaVideo, 
  FaHandHoldingHeart, 
  FaClipboardList, 
  FaCar, 
  FaWind,
  FaPaw, 
  FaPhoneVolume, 
  FaLine, 
  FaShieldCat, 
  FaClock, 
  FaMapLocationDot, 
  FaCheck, 
  FaShieldHalved
} from 'react-icons/fa6';
import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Image from 'next/image';
import FAQClient from './FAQClient';

export const metadata: Metadata = {
  title: "รับส่งสัตว์เลี้ยง Pet Taxi รถเก๋ง/SUV แอร์เย็นฉ่ำ - N&M18 TRANSPORT",
  description: "บริการรับส่งสัตว์เลี้ยง Pet Taxi รับส่งน้องหมา น้องแมว ไปต่างจังหวัดและในกรุงเทพฯ ด้วยรถยนต์ส่วนตัว (รถเก๋ง/SUV) แอร์เย็น ไม่ร้อน ดูแลเหมือนลูกหลาน ไม่ต้องขังหลังกระบะ โทร 095-801-0958",
  keywords: "รับส่งสัตว์เลี้ยง, Pet Taxi, แท็กซี่สัตว์เลี้ยง, รับส่งน้องหมา, รับส่งน้องแมว, รถรับส่งสัตว์เลี้ยง, ส่งสัตว์เลี้ยงไปต่างจังหวัด, Pet Transport Thailand, รถรับจ้างขนสัตว์เลี้ยง, รถเก๋งรับจ้าง",
  alternates: {
    canonical: "/service/pets",
  },
  openGraph: {
    title: "รับส่งสัตว์เลี้ยง Pet Taxi รถเก๋ง/SUV แอร์เย็นฉ่ำ - N&M18 TRANSPORT",
    description: "บริการรับส่งสัตว์เลี้ยง Pet Taxi รับส่งน้องหมา น้องแมว ไปต่างจังหวัดและในกรุงเทพฯ ด้วยรถยนต์ส่วนตัว (รถเก๋ง/SUV) แอร์เย็น ไม่ร้อน ดูแลเหมือนลูกหลาน ไม่ต้องขังหลังกระบะ โทร 095-801-0958",
    url: "https://www.nm18transport.com/service/pets",
    images: [{ url: "https://www.nm18transport.com/pet.jpg" }],
    type: "article",
  },
};

export default function ServicePetsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "N&M18 TRANSPORT Pet Taxi",
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
    "description": "บริการรับส่งสัตว์เลี้ยง Pet Taxi ทั่วไทย รถเก๋ง/SUV ส่วนตัว แอร์เย็น ไม่ขังกรงกระบะ เจ้าของนั่งไปด้วยได้ สะอาด ปลอดภัย",
    "openingHours": "Mo-Su 00:00-23:59"
  };

  return (
    <main className="relative bg-[#060B14] min-h-screen text-slate-300 pb-20 md:pb-12 overflow-x-hidden selection:bg-amber-500/20 selection:text-amber-300">
      {/* AMBIENT RADIAL LIGHTING */}
      <div 
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none -z-10"
        style={{
          backgroundImage: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245, 158, 11, 0.12) 0%, rgba(15, 28, 56, 0.4) 50%, rgba(6, 11, 20, 0.95) 100%)",
        }}
      />
      <div 
        aria-hidden="true"
        className="fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-10"
      />

      <Script
        id="service-pets-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* HERO SECTION */}
      <section className="pt-12 pb-10 md:pt-24 md:pb-16 text-center relative px-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-6">
            <span>บริการรับส่งสัตว์เลี้ยง VIP</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.2] mb-5">
            รับส่งสัตว์เลี้ยง{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 drop-shadow-sm">
              VIP CLASS
            </span>
            <br className="hidden sm:inline" />
            <span className="text-slate-100 font-bold block sm:inline sm:ml-2">
              ปลอดภัย ไม่ร้อน ถึงไว
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            เราเข้าใจว่าเขาไม่ใช่แค่สัตว์เลี้ยง แต่คือ <span className="text-amber-200 font-medium">&ldquo;คนสำคัญ&rdquo;</span> ของครอบครัว บริการขนส่งด้วยห้องโดยสารปรับอากาศ 100% ดูแลเอาใจใส่ตลอดเส้นทาง พร้อมอัปเดตสถานะแบบ Real-time
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3.5 sm:gap-4 w-full max-w-md mx-auto">
            <a 
              href="tel:0958010958" 
              className="w-full sm:w-auto rounded-full py-3 px-7 md:px-8 text-sm md:text-base font-semibold whitespace-nowrap inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md hover:opacity-95 transition-all"
            >
              <FaPhoneVolume className="text-white text-sm shrink-0" />
              <span>โทรจองคิวรถ</span>
            </a>
            <a 
              href="https://liff.line.me/1645278921-kWRPP32q/?accountId=952yyanc" 
              target="_blank" 
              rel="noreferrer" 
              className="w-full sm:w-auto rounded-full py-3 px-7 md:px-8 text-sm md:text-base font-semibold whitespace-nowrap inline-flex items-center justify-center gap-2 bg-[#06C755] text-white shadow-md hover:bg-[#05b34c] transition-all"
            >
              <FaLine className="text-white text-base shrink-0" />
              <span>ทักไลน์จองคิว (24 ชม.)</span>
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* FEATURE BENTO CARDS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mt-4 mb-16 md:mb-24">
          
          {/* Card 1 */}
          <div className="bg-slate-900/50 backdrop-blur-md border border-white/[0.08] rounded-2xl p-6 text-center hover:border-amber-400/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 text-xl mx-auto mb-4">
              <FaTemperatureArrowDown className="shrink-0" />
            </div>
            <h3 className="text-white font-bold text-base md:text-lg mb-2">
              Cool Air System
            </h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
              รถห้องโดยสารปรับอากาศ 100% เปิดแอร์เย็นฉ่ำตลอดเส้นทาง ไม่นำน้องไปตากแดดตากลมหลังกระบะ ป้องกันภาวะ Heat Stroke ปลอดภัยสูงสุด
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-900/50 backdrop-blur-md border border-white/[0.08] rounded-2xl p-6 text-center hover:border-amber-400/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 text-xl mx-auto mb-4">
              <FaPumpMedical className="shrink-0" />
            </div>
            <h3 className="text-white font-bold text-base md:text-lg mb-2">
              Hygiene Standard
            </h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
              ฉีดพ่นน้ำยาฆ่าเชื้อเกรดโรงพยาบาลทุกครั้งก่อนและหลังรับงาน ไม่มีกลิ่นเหม็นสะสม สะอาด ปลอดเชื้อ ไม่เสี่ยงติดโรค ปลอดภัยต่อสุขภาพน้องๆ
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-900/50 backdrop-blur-md border border-white/[0.08] rounded-2xl p-6 text-center hover:border-amber-400/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 text-xl mx-auto mb-4">
              <FaVideo className="shrink-0" />
            </div>
            <h3 className="text-white font-bold text-base md:text-lg mb-2">
              Live Updates
            </h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
              อุ่นใจได้ตลอดทาง คนขับถ่ายรูปและคลิปวิดีโอรายงานสถานะทุกจุดพักรถ เห็นสภาพน้องตลอดเวลา เดินทางอย่างสบายใจ ไร้กังวล
            </p>
          </div>

        </section>

        {/* SHOWCASE / GALLERY SECTION (IMPECCABLE DESIGN SYSTEM) */}
        <section className="my-14 md:my-24 bg-slate-900/60 backdrop-blur-xl border border-white/10 border-t border-t-white/15 rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent">
          {/* Subtle Ambient Light */}
          <div 
            aria-hidden="true"
            className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" 
          />
          <div 
            aria-hidden="true"
            className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" 
          />

          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10 relative z-10">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-medium tracking-wide text-amber-400 bg-amber-500/10 border border-amber-500/20 backdrop-blur-md shadow-sm mb-4">
              <span>ภาพผลงานจริง</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold tracking-tight mb-3">
              ภาพผลงานการให้บริการรับส่งสัตว์เลี้ยง
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              ใส่ใจดูแลอย่างใกล้ชิด ทั้งน้องหมาและน้องแมวทุกสายพันธุ์ รับจากหน้าบ้าน ส่งมอบถึงมือผู้รับปลายทางอย่างปลอดภัย
            </p>
          </div>
          
          {/* Featured Media Showcase Frame */}
          <div className="relative w-full max-w-4xl aspect-[16/9] mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-950 transition-all duration-300 hover:border-white/20">
            <Image 
              src="/images/services/pet.jpg" 
              alt="รีวิวการขนส่งสัตว์เลี้ยง Pet Taxi N&M18 TRANSPORT" 
              fill 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 896px"
              priority
              className="object-cover" 
            />
            {/* Subtle Gradient Scrim Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
            
            {/* Delicate Floating Badges */}
            <div className="absolute top-4 left-4 sm:top-5 sm:left-5 flex flex-wrap gap-2 z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-950/70 backdrop-blur-md border border-white/10 text-slate-200 shadow-lg">
                <FaShieldHalved className="text-amber-400 text-xs shrink-0" />
                <span>ส่งมอบปลอดภัย 100%</span>
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-950/70 backdrop-blur-md border border-white/10 text-slate-200 shadow-lg">
                <FaCar className="text-amber-400 text-xs shrink-0" />
                <span>ห้องโดยสารปรับอากาศ VIP</span>
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-6 sm:right-6 flex justify-between items-end z-10">
              <div className="text-left text-white drop-shadow-md">
                <p className="text-xs text-amber-300 font-medium mb-0.5 tracking-wide">N&M18 TRANSPORT PET TAXI</p>
                <h3 className="text-sm sm:text-base font-semibold text-white">การเดินทางที่อบอุ่น ปลอดภัย ไร้ความกังวล</h3>
              </div>
            </div>
          </div>
          
          {/* Bottom Specification Badge */}
          <div className="mt-6 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-slate-300 backdrop-blur-sm shadow-sm">
              <FaCheck className="text-amber-400 text-xs shrink-0" />
              <span>บริการด้วยรถยนต์ส่วนตัวปรับอากาศ สะอาด กว้างขวาง นั่งสบาย ไม่แออัด</span>
            </div>
          </div>
        </section>

        {/* SYSTEM SAFETY & PREPARATION GRID */}
        <section className="my-14 md:my-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Safety Standards (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-3">
                  <FaShieldCat className="text-emerald-400 text-xs shrink-0" />
                  <span>SAFETY & SERVICE STANDARD</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-extrabold tracking-tight mb-3">
                  ระบบความปลอดภัย <span className="text-emerald-400 font-bold">ระดับพรีเมียม</span>
                </h2>
                <p className="text-slate-400 text-sm sm:text-base mb-6 leading-relaxed">
                  เราเตรียมความพร้อมในทุกมิติ ทั้งยานพาหนะ คนขับ และระบบการดูแล เพื่อให้ทุกการเดินทางราบรื่นที่สุด
                </p>
              </div>
              
              <div className="flex flex-col gap-4">
                {/* Standard 1 */}
                <div className="flex items-start gap-4 bg-slate-900/40 backdrop-blur-md border border-white/[0.08] hover:border-amber-400/25 p-4 sm:p-5 rounded-2xl transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center text-lg shrink-0 mt-0.5 group-hover:scale-105 transition-transform duration-200">
                    <FaShieldCat className="shrink-0" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-white font-semibold text-base sm:text-lg">Door-to-Door Service</h4>
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      บริการรับถึงหน้าบ้าน และส่งมอบถึงที่หมายอย่างทะนุถนอม ไม่ต้องนัดเจอจุดพักริมทาง
                    </p>
                  </div>
                </div>

                {/* Standard 2 */}
                <div className="flex items-start gap-4 bg-slate-900/40 backdrop-blur-md border border-white/[0.08] hover:border-amber-400/25 p-4 sm:p-5 rounded-2xl transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center text-lg shrink-0 mt-0.5 group-hover:scale-105 transition-transform duration-200">
                    <FaClock className="shrink-0" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-white font-semibold text-base sm:text-lg">Express Delivery</h4>
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      เดินทางตรงตามกำหนด ไม่ดองงาน ไม่แวะรับส่งของอื่นปะปน เดินทางถึงปลายทางอย่างรวดเร็วและปลอดภัย
                    </p>
                  </div>
                </div>

                {/* Standard 3 */}
                <div className="flex items-start gap-4 bg-slate-900/40 backdrop-blur-md border border-white/[0.08] hover:border-amber-400/25 p-4 sm:p-5 rounded-2xl transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center text-lg shrink-0 mt-0.5 group-hover:scale-105 transition-transform duration-200">
                    <FaHandHoldingHeart className="shrink-0" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-white font-semibold text-base sm:text-lg">Pet Lover Driver</h4>
                      <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      พนักงานขับรถรักสัตว์และเข้าใจพฤติกรรมสัตว์เลี้ยง มีการแวะพักให้น้ำและขับถ่ายตามความเหมาะสม
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column: Customer Preparation Card (5 Cols) */}
            <div className="lg:col-span-5 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div 
                aria-hidden="true" 
                className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" 
              />
              
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center text-xl mb-5 shadow-inner">
                  <FaClipboardList className="shrink-0" />
                </div>
                <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight mb-2">
                  สิ่งที่ลูกค้าต้องเตรียมความพร้อม
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
                  เพื่อให้การเดินทางของน้องเป็นไปอย่างปลอดภัยและลดความกังวลตลอดเส้นทาง
                </p>

                {/* Styled Checklist */}
                <div className="space-y-3.5">
                  <div className="flex items-start gap-3 bg-white/[0.02] border border-white/[0.05] p-3.5 rounded-xl">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <FaCheck className="text-[10px]" />
                    </div>
                    <div className="text-xs sm:text-sm text-slate-200">
                      <span className="font-medium text-white">กรงหรือ Box เดินทาง:</span> ที่มีโครงสร้างแข็งแรงและระบายอากาศได้ดี
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white/[0.02] border border-white/[0.05] p-3.5 rounded-xl">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <FaCheck className="text-[10px]" />
                    </div>
                    <div className="text-xs sm:text-sm text-slate-200">
                      <span className="font-medium text-white">อาหารและน้ำดื่ม:</span> พร้อมชามพกพาสำหรับให้ระหว่างจุดพัก
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white/[0.02] border border-white/[0.05] p-3.5 rounded-xl">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <FaCheck className="text-[10px]" />
                    </div>
                    <div className="text-xs sm:text-sm text-slate-200">
                      <span className="font-medium text-white">แผ่นรองซับขับถ่าย:</span> ป้องกันสิ่งสกปรกและเพิ่มสุขอนามัย
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white/[0.02] border border-white/[0.05] p-3.5 rounded-xl">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <FaCheck className="text-[10px]" />
                    </div>
                    <div className="text-xs sm:text-sm text-slate-200">
                      <span className="font-medium text-white">ของเล่น / ผ้ากลิ่นคุ้นเคย:</span> ช่วยให้น้องรู้สึกผ่อนคลายและลดความเครียด
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/[0.06] text-center">
                <p className="text-xs text-amber-300/80 font-medium">
                  💡 มีข้อสงสัยเกี่ยวกับการเตรียมตัว ปรึกษาทีมงานได้ฟรีตลอด 24 ชั่วโมง
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* SERVICE AREA & VEHICLE FLEET SECTION */}
        <section className="my-14 md:my-24 p-6 sm:p-8 md:p-10 bg-slate-900/40 backdrop-blur-md rounded-3xl border border-white/[0.08] shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 mb-3">
              <FaMapLocationDot className="text-amber-400 text-xs shrink-0" />
              <span>COVERAGE & VEHICLE FLEET</span>
            </div>
            <h3 className="text-2xl sm:text-3xl text-white font-bold tracking-tight">
              พื้นที่ให้บริการและมาตรฐานยานพาหนะ
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Area 1 */}
            <div className="bg-white/[0.02] border border-white/[0.06] p-6 rounded-2xl hover:border-white/10 transition-colors duration-200">
              <h4 className="text-emerald-400 font-semibold text-base sm:text-lg mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                ในกรุงเทพฯ & ปริมณฑล
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <FaCheck className="text-amber-400 text-xs shrink-0 mt-1" />
                  <span>ลาดพร้าว / จตุจักร / รามอินทรา</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FaCheck className="text-amber-400 text-xs shrink-0 mt-1" />
                  <span>บางแค / พระราม 2 / ฝั่งธนบุรี</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FaCheck className="text-amber-400 text-xs shrink-0 mt-1" />
                  <span>รังสิต / นนทบุรี / สมุทรปราการ</span>
                </li>
              </ul>
            </div>

            {/* Area 2 */}
            <div className="bg-white/[0.02] border border-white/[0.06] p-6 rounded-2xl hover:border-white/10 transition-colors duration-200">
              <h4 className="text-emerald-400 font-semibold text-base sm:text-lg mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                ต่างจังหวัด (เหมาคัน)
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <FaCheck className="text-amber-400 text-xs shrink-0 mt-1" />
                  <span>ชลบุรี / พัทยา / ระยอง</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FaCheck className="text-amber-400 text-xs shrink-0 mt-1" />
                  <span>หัวหิน / ประจวบคีรีขันธ์</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FaCheck className="text-amber-400 text-xs shrink-0 mt-1" />
                  <span>เชียงใหม่ / นครราชสีมา (นัดล่วงหน้า)</span>
                </li>
              </ul>
            </div>

            {/* Area 3 */}
            <div className="bg-white/[0.02] border border-white/[0.06] p-6 rounded-2xl hover:border-white/10 transition-colors duration-200">
              <h4 className="text-emerald-400 font-semibold text-base sm:text-lg mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                มาตรฐานยานพาหนะ
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <FaCar className="text-amber-400 text-xs shrink-0 mt-1" />
                  <span>รถยนต์ส่วนตัวปรับอากาศ (Private Car)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FaCar className="text-amber-400 text-xs shrink-0 mt-1" />
                  <span>รถ SUV กว้างขวาง (สำหรับน้องตัวใหญ่)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <FaWind className="text-amber-400 text-xs shrink-0 mt-1" />
                  <span>แอร์เย็นฉ่ำ ไม่ขังกรงหลังกระบะ ปลอดโปร่ง</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <FAQClient />
      </div>
    </main>
  );
}
