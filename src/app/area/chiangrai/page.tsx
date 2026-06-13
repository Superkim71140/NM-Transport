import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'รถรับจ้างขนของ เชียงราย-กรุงเทพ (ไป-กลับ) ย้ายบ้าน ย้ายหอ ราคาถูก | N&M18 TRANSPORT',
  description: 'บริการรถรับจ้างขนของ เชียงราย-กรุงเทพ แม่สาย เชียงแสน รับย้ายบ้าน ย้ายหอพัก ส่งสินค้าทั่วไทย รถกระบะตู้ทึบพร้อมคนยก ราคาเริ่มต้น 1,000 บาท โทร 095-801-0958',
  keywords: 'รถรับจ้าง เชียงราย, ย้ายหอ มฟล, ขนของ บ้านดู่, รถกระบะรับจ้าง แม่สาย, ขนส่ง เชียงราย กรุงเทพ, ย้ายบ้าน เชียงแสน, รถคอก พาน, ขนมอไซค์ เชียงราย, N&M18 TRANSPORT',
  alternates: {
    canonical: "/area/chiangrai",
  },
  openGraph: {
    title: 'รถรับจ้าง เชียงราย - กทม. ย้ายหอ มฟล. ขนของทั่วไป ราคาถูก - N&M18 TRANSPORT',
    description: 'บริการรถกระบะตู้ทึบ เชียงราย-กรุงเทพ รับย้ายหอพักนักศึกษา ย้ายบ้านทั่วจังหวัดเชียงราย ปลอดภัย 100%',
    url: 'https://www.nm18transport.com/area/chiangrai',
    images: ['/images/portfolio/S__17556169.webp'],
    type: 'article',
  },
};

export default function ChiangRaiAreaPage() {
  return (
    <main className="min-h-screen text-text-gray font-sans selection:bg-[#10B981] selection:text-white">
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
              { "@type": "Place", "name": "Chiang Rai" },
              { "@type": "Place", "name": "Mueang Chiang Rai" },
              { "@type": "Place", "name": "Mae Sai" },
              { "@type": "Place", "name": "Chiang Saen" },
              { "@type": "Place", "name": "Mae Chan" },
              { "@type": "Place", "name": "Phan" },
              { "@type": "Place", "name": "Wiang Pa Pao" }
            ],
            "description": "บริการรถรับจ้างขนของ จังหวัดเชียงราย ย้ายหอมหาวิทยาลัย และเส้นทาง เชียงราย-กรุงเทพฯ"
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden text-center bg-cover bg-center" style={{ backgroundImage: "linear-gradient(to bottom, rgba(2, 6, 13, 0.7), rgba(15, 28, 56, 0.95)), url('/images/portfolio/S__17556169.webp')" }}>
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#10B981] to-neon-blue shadow-[0_-5px_20px_rgba(16,185,129,0.5)]"></div>
        <Container className="relative z-10">
          <div className="text-sm md:text-base mb-6 tracking-wider text-text-gray uppercase">
            <Link href="/" className="text-neon-blue hover:text-white transition-colors">หน้าแรก</Link> / <span className="text-text-gray">พื้นที่ให้บริการ</span> / <span className="text-[#10B981]">โซนเชียงราย</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            รถรับจ้าง เชียงราย - กทม.<br />
            <span className="bg-gradient-to-r from-[#10B981] to-[#34d399] bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]">
              ย้ายหอ มฟล. / ราชภัฏ
            </span>
          </h1>

          <p className="text-base md:text-xl text-[#d0d7e1] max-w-2xl mx-auto mb-8 leading-relaxed">
            บริการรถตู้ทึบ รับจ้างทั่วไป ในตัวเมือง แม่สาย เชียงแสน และวิ่งล่องกรุงเทพฯ<br />
            ชำนาญเส้นทางดอยตุง แม่จัน ของเยอะแค่ไหนก็ขนหมด
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-[#10B981]/30 text-white text-sm backdrop-blur-sm">
              <i className="fa-solid fa-graduation-cap text-[#10B981]"></i> ขวัญใจเด็ก มฟล.
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-[#10B981]/30 text-white text-sm backdrop-blur-sm">
              <i className="fa-solid fa-route text-[#10B981]"></i> วิ่งกรุงเทพ-เชียงราย
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-[#10B981]/30 text-white text-sm backdrop-blur-sm">
              <i className="fa-solid fa-truck-pickup text-[#10B981]"></i> รถตู้ทึบสะอาด
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <a href="tel:0958010958" className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-[#10B981] to-[#059669] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:shadow-[0_0_30px_rgba(16,185,129,0.8)]">
              <i className="fa-solid fa-phone-volume"></i> โทรจองรถ (สายเชียงราย)
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
          <div className="bg-gradient-to-br from-navy-primary to-[#10B981]/10 p-8 md:p-12 rounded-3xl border border-[#10B981]/30 shadow-[0_10px_30px_rgba(0,0,0,0.3)] max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <i className="fa-solid fa-truck-fast text-[#10B981]"></i> 
              บริการย้ายหอพัก ม.แม่ฟ้าหลวง & ขนของทั่วเชียงราย
            </h2>
            <p className="text-[#d0d7e1] text-base md:text-lg mb-6 leading-relaxed">
              <strong className="text-white">N&M18 TRANSPORT</strong> พร้อมให้บริการ <strong className="text-white">รถรับจ้างขนของ เชียงราย</strong> โดยเฉพาะน้องๆ นักศึกษา <strong className="text-white">ม.แม่ฟ้าหลวง (MFU)</strong> และ <strong className="text-white">ม.ราชภัฏเชียงราย</strong> ที่ต้องการย้ายหอพัก ขนของกลับบ้าน หรือย้ายของเข้าหอใหม่ ย่านหน้ามอ-หลังมอ บ้านดู่ นางแล
            </p>
            <p className="text-[#d0d7e1] text-base md:text-lg leading-relaxed mb-0">
              นอกจากนี้เรายังให้บริการ <strong className="text-white">ย้ายบ้าน ขนส่งสินค้า</strong> ครอบคลุมพื้นที่ แม่สาย เชียงแสน เชียงของ พาน และมีรถวิ่งล่อง <strong className="text-white">เชียงราย - กรุงเทพฯ</strong> เป็นประจำ รองรับทั้งการเหมาคันและการฝากส่งของชิ้นใหญ่ (มอเตอร์ไซค์, ตู้เย็น, เครื่องซักผ้า) ในราคามิตรภาพ
            </p>
          </div>
        </Container>
      </section>

      {/* Advantage Section */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h4 className="text-[#10B981] font-bold uppercase tracking-wider mb-2">ทำไมคนเชียงรายเลือกเรา?</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">บริการมืออาชีพ สายเหนือตัวจริง</h2>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] text-xl">
                    <i className="fa-solid fa-user-graduate"></i>
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-bold mb-1">เชี่ยวชาญงานย้ายหอนักศึกษา</h4>
                    <p className="text-text-gray text-sm md:text-base">เรารู้จักหอพักแถวหน้ามอ-หลังมอ มฟล. และราชภัฏเป็นอย่างดี ช่วยยกของขึ้น-ลงหอ จัดของให้เป็นระเบียบ</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] text-xl">
                    <i className="fa-solid fa-map-location-dot"></i>
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-bold mb-1">เส้นทาง เชียงราย - กรุงเทพ</h4>
                    <p className="text-text-gray text-sm md:text-base">รถวิ่งล่องขึ้น-ลงสม่ำเสมอ เหมาะสำหรับคนย้ายที่ทำงาน หรือส่งของกลับบ้าน ราคาเหมาคุ้มค่ากว่าจ้างรถทั่วไป</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] text-xl">
                    <i className="fa-solid fa-mountain"></i>
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-bold mb-1">ชำนาญทางไกลและทางเขา</h4>
                    <p className="text-text-gray text-sm md:text-base">ขับขี่ปลอดภัยแม้เส้นทางคดเคี้ยวช่วงแพร่-พะเยา-เชียงราย มั่นใจได้ว่าทรัพย์สินของท่านจะถึงปลายทางโดยสวัสดิภาพ</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="flex-1 w-full max-w-xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#10B981]/20 shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                <Image 
                  src="/images/portfolio/S__17556169.webp" 
                  alt="ขนย้ายรถมอเตอร์ไซค์ เชียงราย N&M18" 
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
              พื้นที่ให้บริการ (เชียงราย & ใกล้เคียง)
            </h2>
            <p className="text-text-gray text-base max-w-xl mx-auto">ครอบคลุมทุกอำเภอสำคัญ</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              { name: 'อ.เมืองเชียงราย / หอนาฬิกา', icon: 'fa-solid fa-city' },
              { name: 'ม.แม่ฟ้าหลวง / นางแล', icon: 'fa-solid fa-graduation-cap' },
              { name: 'ราชภัฏ / บ้านดู่', icon: 'fa-solid fa-school' },
              { name: 'แม่สาย / ด่านพรมแดน', icon: 'fa-solid fa-cart-shopping' },
              { name: 'เชียงแสน / สามเหลี่ยมทองคำ', icon: 'fa-solid fa-monument' },
              { name: 'แม่จัน / ดอยตุง', icon: 'fa-solid fa-leaf' },
              { name: 'เชียงของ / เวียงแก่น', icon: 'fa-solid fa-water' },
              { name: 'อ.พาน / แม่ลาว', icon: 'fa-solid fa-road' },
              { name: 'เทิง / เวียงป่าเป้า', icon: 'fa-solid fa-tree' },
              { name: 'เส้นทาง เชียงราย-กทม.', icon: 'fa-solid fa-route' }
            ].map((district, idx) => (
              <div 
                key={idx} 
                className="relative bg-gradient-to-br from-navy-lighter to-navy-primary p-6 rounded-2xl border border-white/5 text-center transition-all duration-300 hover:border-neon-blue hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] group overflow-hidden"
              >
                <div className="absolute inset-0 bg-radial-gradient from-neon-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <i className={`${district.icon} text-3xl text-[#10B981] mb-4 inline-block transition-transform duration-300 group-hover:text-neon-blue group-hover:scale-110`}></i>
                <h5 className="text-white text-sm md:text-base font-medium relative z-10">{district.name}</h5>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing / Promotion Section */}
      <section className="py-20">
        <Container>
          <div className="relative bg-gradient-to-br from-navy-primary to-[#0a152b] p-8 md:p-12 lg:p-16 rounded-3xl border-2 border-[#10B981]/30 shadow-[0_0_40px_rgba(16,185,129,0.15)] text-center max-w-4xl mx-auto overflow-hidden">
            <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-radial-gradient from-[#10B981]/20 to-transparent pointer-events-none" />
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">🔥 โปรโมชั่นขนของ เชียงราย</h3>
            <p className="text-[#d0d7e1] text-base md:text-lg">รถตู้ทึบสะอาด บริการดุจญาติมิตร เริ่มต้นเพียง</p>
            
            <div className="text-5xl md:text-7xl font-black bg-gradient-to-r from-[#10B981] to-gold bg-clip-text text-transparent my-6 filter drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]">
              1000.-
            </div>
            
            <p className="text-gray-400 text-xs md:text-sm mb-8 max-w-md mx-auto">
              (ประเมินราคาตามระยะทางจริง ทักไลน์ส่งพิกัดเช็คราคาได้เลยครับ)
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
              <a href="tel:0958010958" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-[#10B981] to-[#059669] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.5)]">
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
