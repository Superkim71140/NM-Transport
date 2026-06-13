import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'รถรับจ้าง ปริมณฑล นนทบุรี-ปทุม-สมุทรปราการ ย้ายบ้านราคาถูก - N&M18 TRANSPORT',
  description: 'บริการรถรับจ้างขนของ โซนปริมณฑล นนทบุรี ปากเกร็ด บางใหญ่ ปทุมธานี รังสิต สมุทรปราการ บางพลี ย้ายบ้าน ย้ายหอพัก รถกระบะตู้ทึบ ขนของข้ามจังหวัด ราคาเหมาเริ่มต้น 500.-',
  keywords: 'รถรับจ้าง นนทบุรี, รถกระบะรับจ้าง ปทุมธานี, ย้ายหอ รังสิต, ขนของ ปากเกร็ด, รถรับจ้าง สมุทรปราการ, ย้ายบ้าน บางใหญ่, รถ 4 ล้อใหญ่ บางพลี, รถรับจ้าง ลำลูกกา, N&M18 TRANSPORT',
  alternates: {
    canonical: "/area/perimeter",
  },
  openGraph: {
    title: 'รถรับจ้าง ปริมณฑล นนทบุรี-ปทุม-สมุทรปราการ ย้ายบ้านราคาถูก - N&M18 TRANSPORT',
    description: 'บริการรถรับจ้างขนของ โซนปริมณฑล นนทบุรี ปากเกร็ด บางใหญ่ ปทุมธานี รังสิต สมุทรปราการ บางพลี ย้ายบ้าน ย้ายหอพัก รถกระบะตู้ทึบ ขนของข้ามจังหวัด ราคาเหมาเริ่มต้น 500.-',
    url: 'https://www.nm18transport.com/area/perimeter',
    images: ['/images/portfolio/S__2531434.webp'],
    type: 'article',
  },
};

export default function PerimeterAreaPage() {
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
              { "@type": "Place", "name": "Nonthaburi" },
              { "@type": "Place", "name": "Pak Kret" },
              { "@type": "Place", "name": "Bang Yai" },
              { "@type": "Place", "name": "Pathum Thani" },
              { "@type": "Place", "name": "Rangsit" },
              { "@type": "Place", "name": "Lam Luk Ka" },
              { "@type": "Place", "name": "Samut Prakan" },
              { "@type": "Place", "name": "Bang Phli" }
            ],
            "description": "บริการรถรับจ้างขนย้ายบ้าน ขนของทั่วไป ครอบคลุมพื้นที่ปริมณฑลรอบกรุงเทพฯ"
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden text-center bg-cover bg-center" style={{ backgroundImage: "linear-gradient(to bottom, rgba(2, 6, 13, 0.8), rgba(15, 28, 56, 0.95)), url('/images/portfolio/S__2531437.webp')" }}>
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-orange-lava to-neon-blue shadow-[0_-5px_20px_rgba(255,69,0,0.5)]"></div>
        <Container className="relative z-10">
          <div className="text-sm md:text-base mb-6 tracking-wider text-text-gray uppercase">
            <Link href="/" className="text-neon-blue hover:text-white transition-colors">หน้าแรก</Link> / <span className="text-text-gray">พื้นที่ให้บริการ</span> / <span className="text-orange-lava">โซนปริมณฑล</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            รถรับจ้าง โซนปริมณฑล<br />
            <span className="bg-gradient-to-r from-orange-lava to-gold bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(255,69,0,0.4)]">
              นนทบุรี - ปทุมฯ - สมุทรปราการ
            </span>
          </h1>

          <p className="text-base md:text-xl text-[#d0d7e1] max-w-2xl mx-auto mb-8 leading-relaxed">
            บริการย้ายบ้านข้ามจังหวัด ย้ายหอพัก โซนรอบกรุงเทพฯ<br />
            รถใหญ่ใส่ของจุ ของเยอะแค่ไหนก็ขนหมด วิ่งทางด่วน ถึงไว
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-orange-lava/30 text-white text-sm backdrop-blur-sm">
              <i className="fa-solid fa-truck text-orange-lava"></i> รถใหญ่ 4 ล้อจัมโบ้
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-orange-lava/30 text-white text-sm backdrop-blur-sm">
              <i className="fa-solid fa-road text-orange-lava"></i> วิ่งงานทางไกล
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-orange-lava/30 text-white text-sm backdrop-blur-sm">
              <i className="fa-solid fa-check-double text-orange-lava"></i> ราคาเหมาสุดคุ้ม
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <a href="tel:0958010958" className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-orange-lava to-[#ff2a00] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,69,0,0.5)] hover:shadow-[0_0_30px_rgba(255,69,0,0.8)]">
              <i className="fa-solid fa-phone-volume"></i> โทรเรียกเลย (ด่วน)
            </a>
            <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=952yyanc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-white bg-line-green hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(6,199,85,0.6)] hover:bg-[#05a84a]">
              <i className="fa-brands fa-line text-xl"></i> แอดไลน์จองคิว
            </a>
          </div>
        </Container>
      </section>

      {/* Advantage Section */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h4 className="text-orange-lava font-bold uppercase tracking-wider mb-2">ทำไมต้อง N&M18 โซนปริมณฑล?</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">มืออาชีพเรื่อง &quot;ย้ายบ้านข้ามโซน&quot;</h2>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-lava/10 border border-orange-lava/30 flex items-center justify-center text-orange-lava text-xl">
                    <i className="fa-solid fa-truck-moving"></i>
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-bold mb-1">รถใหญ่ จุของได้ทั้งหลัง</h4>
                    <p className="text-text-gray text-sm md:text-base">สำหรับลูกค้าโซนชานเมืองที่ต้องการย้ายบ้าน เรามีรถกระบะตู้ทึบหลังคาสูงพิเศษ ใส่ตู้เย็น ที่นอน 6 ฟุต ได้สบายๆ รอบเดียวจบ</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-lava/10 border border-orange-lava/30 flex items-center justify-center text-orange-lava text-xl">
                    <i className="fa-solid fa-stopwatch-20"></i>
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-bold mb-1">ชำนาญเส้นทางเลี่ยงเมือง/ทางด่วน</h4>
                    <p className="text-text-gray text-sm md:text-base">ไม่ว่าจะไปบางใหญ่ รังสิต หรือบางพลี เรารู้จุดขึ้นลงทางด่วนและวงแหวนรอบนอก ช่วยประหยัดเวลาเดินทาง</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-lava/10 border border-orange-lava/30 flex items-center justify-center text-orange-lava text-xl">
                    <i className="fa-solid fa-hand-holding-dollar"></i>
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-bold mb-1">ราคาเหมาทางไกล คุ้มกว่า</h4>
                    <p className="text-text-gray text-sm md:text-base">วิ่งจากปริมณฑลเข้าเมือง หรือข้ามไปจังหวัดอื่น เรามีเรทราคาเหมาจ่ายที่ชัดเจน รวมคนยก ไม่มีบวกเพิ่มทีหลัง</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="flex-1 w-full max-w-xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden border-2 border-orange-lava/20 shadow-[0_0_25px_rgba(255,69,0,0.3)]">
                <Image 
                  src="/images/portfolio/S__2531434.webp" 
                  alt="ย้ายบ้าน นนทบุรี ปทุมธานี รถรับจ้าง N&M18" 
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
              <i className="fa-solid fa-map-location-dot text-neon-blue mr-2"></i> 
              พื้นที่ให้บริการหลัก (ปริมณฑล)
            </h2>
            <p className="text-text-gray text-base max-w-xl mx-auto">ครอบคลุม นนทบุรี ปทุมธานี สมุทรปราการ และพื้นที่ใกล้เคียง</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              { name: 'นนทบุรี / เมืองทอง', icon: 'fa-solid fa-city' },
              { name: 'ปากเกร็ด / แจ้งวัฒนะ', icon: 'fa-solid fa-bridge' },
              { name: 'บางใหญ่ / บางบัวทอง', icon: 'fa-solid fa-house-chimney' },
              { name: 'รังสิต / ดอนเมือง', icon: 'fa-solid fa-plane-departure' },
              { name: 'ลำลูกกา / สายไหม', icon: 'fa-solid fa-road' },
              { name: 'นวนคร / คลองหลวง', icon: 'fa-solid fa-industry' },
              { name: 'สมุทรปราการ / ปากน้ำ', icon: 'fa-solid fa-water' },
              { name: 'บางพลี / สุวรรณภูมิ', icon: 'fa-solid fa-plane' },
              { name: 'พุทธมณฑล / ศาลายา', icon: 'fa-solid fa-tree' },
              { name: 'สมุทรสาคร / มหาชัย', icon: 'fa-solid fa-ship' }
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
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">🔥 โปรโมชั่นย้ายบ้าน ปริมณฑล</h3>
            <p className="text-[#d0d7e1] text-base md:text-lg">ระยะทางใกล้ๆ ราคาพิเศษ! เริ่มต้นเพียง</p>
            
            <div className="text-5xl md:text-7xl font-black bg-gradient-to-r from-orange-lava to-gold bg-clip-text text-transparent my-6 filter drop-shadow-[0_0_15px_rgba(255,69,0,0.4)]">
              1,xxx.-
            </div>
            
            <p className="text-gray-400 text-xs md:text-sm mb-8 max-w-md mx-auto">
              (ราคาเริ่มต้นตามระยะทางและปริมาณของ* สอบถามราคาเหมาจบได้เลย)
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <a href="tel:0958010958" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-orange-lava to-[#ff2a00] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,69,0,0.5)]">
                <i className="fa-solid fa-calculator"></i> เช็คราคาเหมา (โทรเลย)
              </a>
              <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=952yyanc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-white bg-line-green hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(6,199,85,0.6)]">
                <i className="fa-brands fa-line fa-lg"></i> สอบถามทางไลน์
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
