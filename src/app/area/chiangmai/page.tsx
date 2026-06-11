import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'รถรับจ้างขนของ เชียงใหม่ - กรุงเทพ (ไป-กลับ) ย้ายบ้าน ย้ายหอ ราคาถูก | N&M18 TRANSPORT',
  description: 'บริการรถรับจ้างเชียงใหม่ รถกระบะตู้ทึบ รับขนย้ายของ ย้ายบ้าน ย้ายหอพัก ขนส่งสินค้า กรุงเทพ-เชียงใหม่ ให้บริการครอบคลุมทุกอำเภอ ปลอดภัย ราคาเหมาจ่าย เริ่มต้น 1,000 บาท โทร 095-801-0958',
  keywords: 'รถรับจ้าง เชียงใหม่, ย้ายหอ เชียงใหม่, ขนของ หลัง มช, รถกระบะรับจ้าง หางดง, ขนส่ง กรุงเทพ เชียงใหม่, ย้ายบ้าน สันทราย, รถคอก แม่ริม, ขนมอไซค์ เชียงใหม่, N&M18 TRANSPORT',
  alternates: {
    canonical: 'https://www.nm18transport.com/area/chiangmai',
  },
  openGraph: {
    title: 'รถรับจ้าง เชียงใหม่ - กรุงเทพ ย้ายหอ ย้ายบ้าน ชำนาญทางดอย - N&M18 TRANSPORT',
    description: 'บริการรถกระบะตู้ทึบ เชียงใหม่-กรุงเทพ วิ่งงานทั่วไทย ชำนาญเส้นทางเขา ปลอดภัย 100%',
    url: 'https://www.nm18transport.com/area/chiangmai',
    images: ['/images/portfolio/S__17556172.jpg'],
    type: 'article',
  },
};

export default function ChiangMaiAreaPage() {
  return (
    <main className="min-h-screen text-text-gray font-sans selection:bg-[#D92B2B] selection:text-white">
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
              { "@type": "Place", "name": "Chiang Mai" },
              { "@type": "Place", "name": "Mueang Chiang Mai" },
              { "@type": "Place", "name": "Hang Dong" },
              { "@type": "Place", "name": "San Sai" },
              { "@type": "Place", "name": "Mae Rim" },
              { "@type": "Place", "name": "Saraphi" },
              { "@type": "Place", "name": "San Kamphaeng" }
            ],
            "description": "บริการรถรับจ้างขนของ จังหวัดเชียงใหม่ และเส้นทาง เชียงใหม่-กรุงเทพฯ"
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden text-center bg-cover bg-center" style={{ backgroundImage: "linear-gradient(to bottom, rgba(2, 6, 13, 0.7), rgba(15, 28, 56, 0.95)), url('/images/portfolio/S__17556172.jpg')" }}>
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#D92B2B] to-neon-blue shadow-[0_-5px_20px_rgba(217,43,43,0.5)]"></div>
        <Container className="relative z-10">
          <div className="text-sm md:text-base mb-6 tracking-wider text-text-gray uppercase">
            <Link href="/" className="text-neon-blue hover:text-white transition-colors">หน้าแรก</Link> / <span className="text-text-gray">พื้นที่ให้บริการ</span> / <span className="text-[#D92B2B]">โซนเชียงใหม่</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            รถรับจ้าง เชียงใหม่ - กทม.<br />
            <span className="bg-gradient-to-r from-[#D92B2B] to-gold bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(217,43,43,0.4)]">
              ชำนาญทางดอย ปลอดภัย 100%
            </span>
          </h1>

          <p className="text-base md:text-xl text-[#d0d7e1] max-w-2xl mx-auto mb-8 leading-relaxed">
            บริการขนย้ายของทั่วเชียงใหม่ และวิ่งล่อง กรุงเทพ-เชียงใหม่<br />
            รถกระบะตู้ทึบพลังแรง ขึ้นดอยสบายๆ ขนมอเตอร์ไซค์ ย้ายหอพัก ราคาคนกันเอง
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-[#D92B2B]/30 text-white text-sm backdrop-blur-sm">
              <i className="fa-solid fa-road text-[#D92B2B]"></i> ชำนาญเส้นทางเขา
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-[#D92B2B]/30 text-white text-sm backdrop-blur-sm">
              <i className="fa-solid fa-truck-fast text-[#D92B2B]"></i> วิ่งกรุงเทพ-เชียงใหม่
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-[#D92B2B]/30 text-white text-sm backdrop-blur-sm">
              <i className="fa-solid fa-house-chimney text-[#D92B2B]"></i> ย้ายหอ/บ้าน
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <a href="tel:0958010958" className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-[#D92B2B] to-[#b91c1c] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(217,43,43,0.5)] hover:shadow-[0_0_30px_rgba(217,43,43,0.8)]">
              <i className="fa-solid fa-phone-volume"></i> โทรจองรถ (สายเหนือ)
            </a>
            <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=952yyanc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-white bg-line-green hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(6,199,85,0.6)] hover:bg-[#05a84a]">
              <i className="fa-brands fa-line text-xl"></i> แอดไลน์จองคิว
            </a>
          </div>
        </Container>
      </section>

      {/* Content Box Section */}
      <section className="pt-20">
        <Container>
          <div className="bg-gradient-to-br from-navy-primary to-[#D92B2B]/10 p-8 md:p-12 rounded-3xl border border-[#D92B2B]/30 shadow-[0_10px_30px_rgba(0,0,0,0.3)] max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <i className="fa-solid fa-truck-house text-[#D92B2B]"></i> 
              บริการย้ายบ้าน ย้ายหอพัก เชียงใหม่
            </h2>
            <p className="text-[#d0d7e1] text-base md:text-lg mb-6 leading-relaxed">
              <strong className="text-white">N&M18 TRANSPORT</strong> ให้บริการ <strong className="text-white">รถรับจ้างขนของ เชียงใหม่</strong> ครอบคลุมทุกอำเภอ ไม่ว่าจะเป็นย้ายหอพักนักศึกษา (หลัง มช., แม่โจ้, ราชภัฏ), ย้ายบ้านพักข้าราชการ, หรือย้ายคอนโดในตัวเมืองเชียงใหม่ เราเข้าใจสภาพเส้นทางในเชียงใหม่เป็นอย่างดี ทั้งตรอกซอกซอยในคูเมือง และทางลาดชันบนดอย (ดอยสุเทพ, ม่อนแจ่ม, สะเมิง)
            </p>
            <p className="text-[#d0d7e1] text-base md:text-lg leading-relaxed mb-0">
              สำหรับท่านที่ต้องการ <strong className="text-white">ย้ายของกลับต่างจังหวัด</strong> หรือ <strong className="text-white">ย้ายจากกรุงเทพฯ มาเชียงใหม่</strong> เรามีรถวิ่งล่องขึ้น-ลง ทุกสัปดาห์ ช่วยให้ท่านประหยัดค่าใช้จ่ายด้วยราคาเหมาที่คุ้มค่า พร้อมทีมงานยกของมืออาชีพ ดูแลทรัพย์สินของท่านเหมือนเป็นคนในครอบครัว
            </p>
          </div>
        </Container>
      </section>

      {/* Advantage Section */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h4 className="text-[#D92B2B] font-bold uppercase tracking-wider mb-2">ทำไมต้อง N&M18 เชียงใหม่?</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">ตัวจริงเรื่อง &quot;ขึ้นดอย - ล่องกรุง&quot;</h2>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#D92B2B]/10 border border-[#D92B2B]/30 flex items-center justify-center text-[#D92B2B] text-xl">
                    <i className="fa-solid fa-mountain"></i>
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-bold mb-1">ชำนาญทางดอยและทางโค้ง</h4>
                    <p className="text-text-gray text-sm md:text-base">ไม่ว่าจะดอยสุเทพ สะเมิง ม่อนแจ่ม หรือแม่ริม คนขับเรามีประสบการณ์ขับขี่บนเขา ปลอดภัย สินค้าไม่ไหลกอง</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#D92B2B]/10 border border-[#D92B2B]/30 flex items-center justify-center text-[#D92B2B] text-xl">
                    <i className="fa-solid fa-map-location-dot"></i>
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-bold mb-1">เส้นทาง กรุงเทพ - เชียงใหม่</h4>
                    <p className="text-text-gray text-sm md:text-base">เรามีรถวิ่งขึ้น-ล่อง เป็นประจำ ใครจะฝากของกลับบ้าน หรือย้ายของมาเรียน/ทำงานที่เชียงใหม่ จองคิวได้เลย</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#D92B2B]/10 border border-[#D92B2B]/30 flex items-center justify-center text-[#D92B2B] text-xl">
                    <i className="fa-solid fa-motorcycle"></i>
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-bold mb-1">ขนย้ายมอเตอร์ไซค์ อย่างมืออาชีพ</h4>
                    <p className="text-text-gray text-sm md:text-base">รับขนส่งรถมอเตอร์ไซค์ไป-กลับ เชียงใหม่ มีอุปกรณ์รัดล้ออย่างดี (ตามภาพ) รถไม่ล้ม ไม่เป็นรอยแน่นอน</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="flex-1 w-full max-w-xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#D92B2B]/20 shadow-[0_0_25px_rgba(217,43,43,0.3)]">
                <Image 
                  src="/images/portfolio/S__17556172.jpg" 
                  alt="ขนส่งรถมอเตอร์ไซค์ เชียงใหม่ N&M18" 
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
              <i className="fa-solid fa-location-dot text-neon-blue mr-2"></i> 
              พื้นที่ให้บริการ (เชียงใหม่ & ใกล้เคียง)
            </h2>
            <p className="text-text-gray text-base max-w-xl mx-auto">บริการครอบคลุมอำเภอเมืองและรอบนอก</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              { name: 'อ.เมือง / นิมมาน / คูเมือง', icon: 'fa-solid fa-city' },
              { name: 'หลัง มช. / สวนดอก', icon: 'fa-solid fa-graduation-cap' },
              { name: 'แม่โจ้ / สันทราย', icon: 'fa-solid fa-tree' },
              { name: 'หางดง / แม่เหียะ', icon: 'fa-solid fa-shop' },
              { name: 'แม่ริม / ม่อนแจ่ม', icon: 'fa-solid fa-mountain-sun' },
              { name: 'สารภี / ถนนซุปเปอร์ฯ', icon: 'fa-solid fa-road' },
              { name: 'สันกำแพง / บ่อสร้าง', icon: 'fa-solid fa-umbrella-beach' },
              { name: 'ดอยสะเก็ด / สันป่าตอง', icon: 'fa-solid fa-seedling' },
              { name: 'ลำพูน (นิคมฯ)', icon: 'fa-solid fa-map' },
              { name: 'เส้นทาง เชียงใหม่-กทม.', icon: 'fa-solid fa-route' }
            ].map((district, idx) => (
              <div 
                key={idx} 
                className="relative bg-gradient-to-br from-navy-lighter to-navy-primary p-6 rounded-2xl border border-white/5 text-center transition-all duration-300 hover:border-neon-blue hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] group overflow-hidden"
              >
                <div className="absolute inset-0 bg-radial-gradient from-neon-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <i className={`${district.icon} text-3xl text-[#D92B2B] mb-4 inline-block transition-transform duration-300 group-hover:text-neon-blue group-hover:scale-110`}></i>
                <h5 className="text-white text-sm md:text-base font-medium relative z-10">{district.name}</h5>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing / Promotion Section */}
      <section className="py-20">
        <Container>
          <div className="relative bg-gradient-to-br from-navy-primary to-[#0a152b] p-8 md:p-12 lg:p-16 rounded-3xl border-2 border-[#D92B2B]/30 shadow-[0_0_40px_rgba(217,43,43,0.15)] text-center max-w-4xl mx-auto overflow-hidden">
            <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-radial-gradient from-[#D92B2B]/20 to-transparent pointer-events-none" />
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">🔥 โปรโมชั่นขนของ เชียงใหม่</h3>
            <p className="text-[#d0d7e1] text-base md:text-lg">รถตู้ทึบสะอาด บริการดุจญาติมิตร เริ่มต้นเพียง</p>
            
            <div className="text-5xl md:text-7xl font-black bg-gradient-to-r from-[#D92B2B] to-gold bg-clip-text text-transparent my-6 filter drop-shadow-[0_0_15px_rgba(217,43,43,0.4)]">
              1000.-
            </div>
            
            <p className="text-gray-400 text-xs md:text-sm mb-8 max-w-md mx-auto">
              (ประเมินราคาตามระยะทางจริง ทักไลน์ส่งพิกัดเช็คราคาได้เลยครับ)
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <a href="tel:0958010958" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-[#D92B2B] to-[#b91c1c] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(217,43,43,0.5)]">
                <i className="fa-solid fa-calculator"></i> โทรเช็คราคา (คุณนิว)
              </a>
              <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=952yyanc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-white bg-line-green hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(6,199,85,0.6)]">
                <i className="fa-brands fa-line fa-lg"></i> แอดไลน์จองคิว
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
