import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'รถรับจ้างฝั่งธน ขนของ ย้ายหอพัก โซนเพชรเกษม บางแค พระราม 2 - N&M18 TRANSPORT',
  description: 'บริการรถรับจ้างโซนฝั่งธนบุรี บางแค เพชรเกษม พระราม 2 ปิ่นเกล้า จรัญสนิทวงศ์ รถกระบะตู้ทึบ รถ 4 ล้อใหญ่ ย้ายหอ ย้ายคอนโด ฝั่งธน ราคาเริ่มต้น 300.- โทร 095-801-0958',
  keywords: 'รถรับจ้างฝั่งธน, ขนของบางแค, รถกระบะรับจ้าง เพชรเกษม, ย้ายหอพัก จรัญสนิทวงศ์, รถขนของ พระราม 2, ย้ายคอนโด ปิ่นเกล้า, รถ 4 ล้อใหญ่ ฝั่งธน, N&M18 TRANSPORT',
  alternates: {
    canonical: 'https://www.nm18transport.com/area/thonburi',
  },
  openGraph: {
    title: 'รถรับจ้างฝั่งธน ขนของ ย้ายหอพัก โซนเพชรเกษม บางแค พระราม 2 - N&M18 TRANSPORT',
    description: 'จุดจอดบางแค มาไว ถึงใน 1 ชม. รถกระบะตู้ทึบ ย้ายหอพัก คอนโด ฝั่งธน เริ่มต้น 300 บาท',
    url: 'https://www.nm18transport.com/area/thonburi',
    images: ['/images/portfolio/S__2531437.jpg'],
    type: 'article',
  },
};

export default function ThonburiAreaPage() {
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
              { "@type": "Place", "name": "Thonburi" },
              { "@type": "Place", "name": "Bang Khae" },
              { "@type": "Place", "name": "Phasi Charoen" },
              { "@type": "Place", "name": "Bang Bon" },
              { "@type": "Place", "name": "Bang Khun Thian" },
              { "@type": "Place", "name": "Taling Chan" },
              { "@type": "Place", "name": "Bang Phlat" },
              { "@type": "Place", "name": "Rat Burana" }
            ],
            "description": "บริการรถรับจ้างขนของ ย้ายบ้าน ย้ายหอพัก ครอบคลุมพื้นที่ฝั่งธนบุรีทั้งหมด จุดจอดหลักบางแค"
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden text-center bg-cover bg-center" style={{ backgroundImage: "linear-gradient(to bottom, rgba(2, 6, 13, 0.8), rgba(15, 28, 56, 0.95)), url('/images/portfolio/S__2531437.jpg')" }}>
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-orange-lava to-neon-blue shadow-[0_-5px_20px_rgba(255,69,0,0.5)]"></div>
        <Container className="relative z-10">
          <div className="text-sm md:text-base mb-6 tracking-wider text-text-gray uppercase">
            <Link href="/" className="text-neon-blue hover:text-white transition-colors">หน้าแรก</Link> / <span className="text-text-gray">พื้นที่ให้บริการ</span> / <span className="text-orange-lava">โซนฝั่งธนบุรี</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            ย้ายของฝั่งธน ต้องคนพื้นที่!<br />
            <span className="bg-gradient-to-r from-orange-lava to-gold bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(255,69,0,0.4)]">
              N&M18 มาไว เข้าใจทุกซอย
            </span>
          </h1>

          <p className="text-base md:text-xl text-[#d0d7e1] max-w-2xl mx-auto mb-8 leading-relaxed">
            บริการรถกระบะตู้ทึบรับจ้าง จุดจอดหลัก <strong className="text-white">&quot;บางแค&quot;</strong><br />
            เรียกปุ๊บ มาปั๊บ ย้ายหอ ย้ายคอนโด ย่านเพชรเกษม พระราม 2 ปิ่นเกล้า เราเชี่ยวชาญสุดๆ
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-orange-lava/30 text-white text-sm backdrop-blur-sm">
              <i className="fa-solid fa-stopwatch text-orange-lava"></i> ถึงไวใน 60 นาที*
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-orange-lava/30 text-white text-sm backdrop-blur-sm">
              <i className="fa-solid fa-truck-ramp-box text-orange-lava"></i> รถตู้ทึบ 100%
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-orange-lava/30 text-white text-sm backdrop-blur-sm">
              <i className="fa-solid fa-hand-holding-dollar text-orange-lava"></i> ราคาคนกันเอง
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
              <h4 className="text-orange-lava font-bold uppercase tracking-wider mb-2">ทำไมต้อง N&M18 TRANSPORT?</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">เราคือ &quot;ตัวจริง&quot; เรื่องขนย้ายในย่านฝั่งธนฯ</h2>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-lava/10 border border-orange-lava/30 flex items-center justify-center text-orange-lava text-xl">
                    <i className="fa-solid fa-bolt-lightning"></i>
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-bold mb-1">จุดจอดอยู่บางแค เรียกง่าย มาไวสุดๆ</h4>
                    <p className="text-text-gray text-sm md:text-base">ไม่ต้องรอรถตีเปล่ามาจากไกลๆ เราอยู่ใกล้คุณ พร้อมวิ่งงานทันที ประหยัดเวลาได้เยอะ</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-lava/10 border border-orange-lava/30 flex items-center justify-center text-orange-lava text-xl">
                    <i className="fa-solid fa-tags"></i>
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-bold mb-1">ค่าบริการเริ่มต้นถูกกว่า (เพราะอยู่ใกล้)</h4>
                    <p className="text-text-gray text-sm md:text-base">ต้นทุนการเดินทางเราต่ำกว่า ทำให้ทำราคาให้ลูกค้าโซนฝั่งธนได้พิเศษกว่าที่อื่น</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-lava/10 border border-orange-lava/30 flex items-center justify-center text-orange-lava text-xl">
                    <i className="fa-solid fa-route"></i>
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-bold mb-1">ชำนาญเส้นทาง รู้จักทุกซอย</h4>
                    <p className="text-text-gray text-sm md:text-base">ไม่ว่าจะซอยแคบ ทางลัด คอนโดไหน เราไปถูก ไม่หลง ไม่เสียเวลา</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="flex-1 w-full max-w-xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden border-2 border-orange-lava/20 shadow-[0_0_25px_rgba(255,69,0,0.3)]">
                <Image 
                  src="/images/portfolio/S__2531424.jpg" 
                  alt="ทีมงานขนย้ายมืออาชีพ N&M18" 
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
              พื้นที่ให้บริการหลัก (รถถึงไวมาก)
            </h2>
            <p className="text-text-gray text-base max-w-xl mx-auto">ครอบคลุมทุกเขตในโซนฝั่งธนบุรี และพื้นที่ใกล้เคียง</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              { name: 'เขตบางแค (จุดจอด)', icon: 'fa-solid fa-location-crosshairs' },
              { name: 'เพชรเกษม / หนองแขม', icon: 'fa-solid fa-road' },
              { name: 'ภาษีเจริญ / บางหว้า', icon: 'fa-solid fa-building' },
              { name: 'พระราม 2 / บางขุนเทียน', icon: 'fa-solid fa-truck-ramp-box' },
              { name: 'บางบอน / เอกชัย', icon: 'fa-solid fa-tree-city' },
              { name: 'ปิ่นเกล้า / ตลิ่งชัน', icon: 'fa-solid fa-bridge' },
              { name: 'ทวีวัฒนา / พุทธมณฑล', icon: 'fa-solid fa-graduation-cap' },
              { name: 'จรัญสนิทวงศ์ / บางพลัด', icon: 'fa-solid fa-train-subway' },
              { name: 'ท่าพระ / วงเวียนใหญ่', icon: 'fa-solid fa-circle-notch' },
              { name: 'สุขสวัสดิ์ / ราษฎร์บูรณะ', icon: 'fa-solid fa-industry' }
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
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">🔥 โปรโมชั่นย้ายหอ/คอนโด โซนฝั่งธน</h3>
            <p className="text-[#d0d7e1] text-base md:text-lg">ระยะทางใกล้ๆ ราคาพิเศษ! เริ่มต้นเพียง</p>
            
            <div className="text-5xl md:text-7xl font-black bg-gradient-to-r from-orange-lava to-gold bg-clip-text text-transparent my-6 filter drop-shadow-[0_0_15px_rgba(255,69,0,0.4)]">
              1000.-
            </div>
            
            <p className="text-gray-400 text-xs md:text-sm mb-8 max-w-md mx-auto">
              (ราคาเฉพาะค่ารถตามระยะทาง* ไม่รวมคนยก / โปรดสอบถามราคาที่แน่นอนอีกครั้ง)
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <a href="tel:0958010958" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-orange-lava to-[#ff2a00] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,69,0,0.5)]">
                <i className="fa-solid fa-calculator"></i> เช็คราคาฟรี (โทรเลย)
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
