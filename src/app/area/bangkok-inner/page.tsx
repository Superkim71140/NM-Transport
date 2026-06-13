import { FaBuilding, FaRoute, FaBolt, FaPhoneVolume, FaLine, FaBuildingUser, FaMapLocationDot, FaTruckFast, FaCity, FaCalculator } from 'react-icons/fa6';
import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'รถรับจ้าง กรุงเทพชั้นใน ย้ายคอนโด สุขุมวิท รัชดา พระราม 9 สาทร - N&M18 TRANSPORT',
  description: 'บริการรถกระบะรับจ้าง โซนกรุงเทพชั้นใน สุขุมวิท อโศก ทองหล่อ สาทร พระราม 9 เชี่ยวชาญงานย้ายคอนโด ขึ้นตึกสูง รถตู้ทึบเข้าห้างได้ ราคาเริ่มต้น 300.- โทร 095-801-0958',
  keywords: 'รถรับจ้าง สุขุมวิท, ย้ายคอนโด พระราม 9, รถกระบะรับจ้าง รัชดา, ขนของ ทองหล่อ, รถ 4 ล้อใหญ่ สาทร, ย้ายหอพัก อโศก, รถรับจ้าง อนุสาวรีย์ชัย, N&M18 TRANSPORT',
  alternates: {
    canonical: "/area/bangkok-inner",
  },
  openGraph: {
    title: 'รถรับจ้าง กรุงเทพชั้นใน ย้ายคอนโด สุขุมวิท-รัชดา งานด่วน - N&M18 TRANSPORT',
    description: 'เชี่ยวชาญงานย้ายคอนโด โซนเมือง สุขุมวิท-สาทร-พระราม9 รถใหม่ ตู้ทึบ สะอาด บริการยกของ',
    url: 'https://www.nm18transport.com/area/bangkok-inner',
    images: ['/images/portfolio/S__2531423.webp'],
    type: 'article',
  },
};

export default function BangkokInnerAreaPage() {
  return (
    <main className="min-h-screen text-text-gray font-sans selection:bg-orange-lava selection:text-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Moving & Transport",
            "provider": {
              "@type": "MovingCompany",
              "name": "N&M18 TRANSPORT"
            },
            "areaServed": [
              { "@type": "Place", "name": "Bangkok Inner City" },
              { "@type": "Place", "name": "Sukhumvit" },
              { "@type": "Place", "name": "Sathorn" },
              { "@type": "Place", "name": "Rama 9" },
              { "@type": "Place", "name": "Ratchada" },
              { "@type": "Place", "name": "Pathum Wan" },
              { "@type": "Place", "name": "Din Daeng" }
            ],
            "description": "บริการขนย้ายคอนโด ย้ายหอพัก โซนกรุงเทพชั้นใน เข้าซอยแคบได้ ชำนาญเส้นทาง"
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden text-center">
        <Image src="/images/portfolio/S__2531437.webp" alt="Background" fill priority fetchPriority="high" className="object-cover absolute inset-0 -z-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(2,6,13,0.8)] to-[rgba(15,28,56,0.95)] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-orange-lava to-neon-blue shadow-[0_-5px_20px_rgba(255,69,0,0.5)]"></div>
        <Container className="relative z-10">
          <div className="text-sm md:text-base mb-6 tracking-wider text-text-gray uppercase">
            <Link href="/" className="text-neon-blue hover:text-white transition-colors">หน้าแรก</Link> / <span className="text-text-gray">พื้นที่ให้บริการ</span> / <span className="text-orange-lava">โซนกรุงเทพชั้นใน</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            รถรับจ้าง กรุงเทพชั้นใน<br />
            <span className="bg-gradient-to-r from-orange-lava to-gold bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(255,69,0,0.4)]">
              สุขุมวิท - พระราม 9 - สาทร
            </span>
          </h1>

          <p className="text-base md:text-xl text-[#d0d7e1] max-w-2xl mx-auto mb-8 leading-relaxed">
            บริการย้ายคอนโด ย้ายหอพัก โซนเมือง รถกระบะตู้ทึบเข้าห้างได้<br />
            รู้ทางลัด หนีรถติด ไม่เสียเวลา เข้างานได้ 24 ชม.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-orange-lava/30 text-white text-sm backdrop-blur-sm">
              <FaBuilding aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0 text-orange-lava" /> เชี่ยวชาญงานคอนโด
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-orange-lava/30 text-white text-sm backdrop-blur-sm">
              <FaRoute aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0 text-orange-lava" /> ชำนาญเส้นทาง
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-orange-lava/30 text-white text-sm backdrop-blur-sm">
              <FaBolt aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0 text-orange-lava" /> เข้างานไว
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <a href="tel:0958010958" className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-orange-lava to-[#ff2a00] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,69,0,0.5)] hover:shadow-[0_0_30px_rgba(255,69,0,0.8)]">
              <FaPhoneVolume aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0" /> โทรเรียกเลย (ด่วน)
            </a>
            <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=952yyanc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-white bg-line-green hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(6,199,85,0.6)] hover:bg-[#05a84a]">
              <FaLine aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0 text-xl" /> แอดไลน์จองคิว
            </a>
          </div>
        </Container>
      </section>

      {/* Advantage Section */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h4 className="text-orange-lava font-bold uppercase tracking-wider mb-2">ทำไมต้อง N&M18 โซนเมือง?</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">ตัวจริงเรื่อง &quot;ขนย้ายคอนโด&quot; ใจกลางกรุง</h2>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-lava/10 border border-orange-lava/30 flex items-center justify-center text-orange-lava text-xl">
                    <FaBuildingUser aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0" />
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-bold mb-1">รู้ระเบียบการขนย้ายคอนโด</h4>
                    <p className="text-text-gray text-sm md:text-base">เรารู้วิธีการติดต่อรถขึ้นตึก การใช้ลิฟต์ขนของ และการป้องกันพื้นเสียหาย มั่นใจได้ว่างานย้ายราบรื่น</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-lava/10 border border-orange-lava/30 flex items-center justify-center text-orange-lava text-xl">
                    <FaMapLocationDot aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0" />
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-bold mb-1">ชำนาญเส้นทางหลบรถติด</h4>
                    <p className="text-text-gray text-sm md:text-base">ไม่ว่าจะสุขุมวิท รัชดา หรือสาทร เรารู้ทางลัดและช่วงเวลาที่เหมาะสม ทำให้งานเสร็จไว ไม่ยืดเยื้อ</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-lava/10 border border-orange-lava/30 flex items-center justify-center text-orange-lava text-xl">
                    <FaTruckFast aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0" />
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-bold mb-1">มีจุดจอดสแตนด์บายรอบเมือง</h4>
                    <p className="text-text-gray text-sm md:text-base">เรามีรถจอดรอเรียกย่านพระราม 9 และลาดพร้าว พร้อมวิ่งเข้าโซนชั้นในได้ทันทีเมื่อท่านเรียกใช้</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="flex-1 w-full max-w-xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden border-2 border-orange-lava/20 shadow-[0_0_25px_rgba(255,69,0,0.3)]">
                <Image 
                  src="/images/portfolio/S__2531423.webp" 
                  alt="ขนย้ายคอนโด กรุงเทพชั้นใน N&M18" 
                  width={800} 
                  height={600} 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Areas Section */}
      <section className="py-20 bg-navy-primary/40">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <FaCity aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0 text-neon-blue mr-2" /> 
              พื้นที่ให้บริการหลัก (กรุงเทพชั้นใน)
            </h2>
            <p className="text-text-gray text-base max-w-xl mx-auto">ครอบคลุมย่านธุรกิจและที่พักอาศัยหนาแน่น</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              { name: 'สุขุมวิท / อโศก', icon: 'fa-solid fa-train-subway' },
              { name: 'ทองหล่อ / เอกมัย', icon: 'fa-solid fa-champagne-glasses' },
              { name: 'พระราม 9 / รัชดา', icon: 'fa-solid fa-building' },
              { name: 'สีลม / สาทร', icon: 'fa-solid fa-briefcase' },
              { name: 'อนุสาวรีย์ชัยฯ / พญาไท', icon: 'fa-solid fa-monument' },
              { name: 'สยาม / ปทุมวัน', icon: 'fa-solid fa-shop' },
              { name: 'ดินแดง / วิภาวดี', icon: 'fa-solid fa-road' },
              { name: 'ยานนาวา / พระราม 3', icon: 'fa-solid fa-water' },
              { name: 'เยาวราช / หัวลำโพง', icon: 'fa-solid fa-archway' },
              { name: 'สวนลุม / วิทยุ', icon: 'fa-solid fa-tree-city' }
            ].map((district, idx) => (
              <div 
                key={idx} 
                className="relative bg-gradient-to-br from-navy-lighter to-navy-primary p-6 rounded-2xl border border-white/5 text-center transition-all duration-300 hover:border-neon-blue hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] group overflow-hidden"
              >
                <div className="absolute inset-0 bg-radial-gradient from-neon-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <i className={`${district.icon} text-3xl text-orange-lava mb-4 inline-block transition-transform duration-300 group-hover:text-neon-blue group-hover:scale-110`}></i>
                <h5 className="text-white text-sm md:text-base font-medium relative z-10">{district.name}</h5>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing / Promotion Section */}
      <section className="py-20">
        <Container>
          <div className="relative bg-gradient-to-br from-navy-primary to-[#0a152b] p-8 md:p-12 lg:p-16 rounded-3xl border-2 border-orange-lava/30 shadow-[0_0_40px_rgba(255,69,0,0.15)] text-center max-w-4xl mx-auto overflow-hidden">
            <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-radial-gradient from-orange-lava/20 to-transparent pointer-events-none" />
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">🔥 โปรโมชั่นย้ายคอนโด โซนเมือง</h3>
            <p className="text-[#d0d7e1] text-base md:text-lg">ระยะทางใกล้ๆ ราคาพิเศษ! เริ่มต้นเพียง</p>
            
            <div className="text-5xl md:text-7xl font-black bg-gradient-to-r from-orange-lava to-gold bg-clip-text text-transparent my-6 filter drop-shadow-[0_0_15px_rgba(255,69,0,0.4)]">
              1000.-
            </div>
            
            <p className="text-gray-400 text-xs md:text-sm mb-8 max-w-md mx-auto">
              (ราคาเริ่มต้นตามระยะทาง* สอบถามราคาเหมาคนยกได้เลย)
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <a href="tel:0958010958" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-orange-lava to-[#ff2a00] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,69,0,0.5)]">
                <FaCalculator aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0" /> เช็คราคาฟรี (โทรเลย)
              </a>
              <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=952yyanc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-white bg-line-green hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(6,199,85,0.6)]">
                <FaLine aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0" /> สอบถามทางไลน์
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
