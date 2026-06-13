import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Image from 'next/image';
import FAQClient from './FAQClient';

export const metadata: Metadata = {
  title: "รับส่งมอเตอร์ไซค์ ขนส่งบิ๊กไบค์ รถสไลด์/ตู้ทึบ ไปต่างจังหวัด ราคาถูก - N&M18 TRANSPORT",
  description: "บริการขนส่งมอเตอร์ไซค์ รับส่งบิ๊กไบค์ (Big Bike) รถเล็ก รถวิบาก ฮาร์เลย์ เวสป้า ทั่วประเทศไทย ด้วยรถตู้ทึบ/รถสไลด์ มีประกันสินค้า 100% แพ็คกันรอยรอบคัน โทร 095-801-0958",
  keywords: "ขนส่งมอเตอร์ไซค์, รับส่งบิ๊กไบค์, รถสไลด์มอเตอร์ไซค์, ส่งรถมอไซค์ไปต่างจังหวัด, รถรับจ้างขนรถ, ขนย้ายบิ๊กไบค์, รถตู้ทึบขนมอเตอร์ไซค์, ส่งรถฮาร์เลย์, ส่งรถเวสป้า, N&M18 TRANSPORT",
  alternates: {
    canonical: "/service/moto",
  },
  openGraph: {
    title: "รับส่งมอเตอร์ไซค์ ขนส่งบิ๊กไบค์ รถสไลด์/ตู้ทึบ ไปต่างจังหวัด ราคาถูก",
    description: "บริการขนส่งมอเตอร์ไซค์ รับส่งบิ๊กไบค์ (Big Bike) รถเล็ก รถวิบาก ฮาร์เลย์ เวสป้า ทั่วประเทศไทย ด้วยรถตู้ทึบ/รถสไลด์ มีประกันสินค้า 100% แพ็คกันรอยรอบคัน โทร 095-801-0958",
    url: "https://www.nm18transport.com/service/moto",
    images: [{ url: "https://www.nm18transport.com/S__17556168.jpg" }],
    type: "article",
  },
};

export default function ServiceMotoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Motorcycle Transport Service",
    "provider": {
      "@type": "TransportationService",
      "name": "N&M18 TRANSPORT",
      "telephone": "095-801-0958",
      "image": "https://www.nm18transport.com/logo-nm18.png",
      "url": "https://www.nm18transport.com/service/moto",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bang Khae",
        "addressRegion": "Bangkok",
        "addressCountry": "TH"
      }
    },
    "areaServed": [
      { "@type": "City", "name": "Bangkok" },
      { "@type": "City", "name": "Nonthaburi" },
      { "@type": "City", "name": "Chiang Mai" },
      { "@type": "City", "name": "Phuket" },
      { "@type": "Country", "name": "Thailand" }
    ],
    "description": "บริการขนส่งมอเตอร์ไซค์ รับส่งบิ๊กไบค์ (Big Bike) รถสไลด์ รถตู้ทึบ รับถึงหน้าบ้าน ส่งถึงที่หมายทั่วไทย มีประกันสินค้า ปลอดภัย 100%",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "THB",
      "price": "Call for price",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <main 
      className="bg-[#02040a] min-h-screen text-[#e2e8f0] pb-[70px] md:pb-0" 
      style={{ 
        backgroundImage: "linear-gradient(to bottom, rgba(2, 4, 10, 0.85), rgba(2, 4, 10, 0.98)), url('/images/portfolio/S__17556168.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <Script
        id="service-moto-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* HERO SECTION */}
      <section className="pt-[40px] md:pt-[80px] pb-[20px] md:pb-[40px] text-center relative px-[15px]">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-[1.8rem] md:text-[3rem] leading-[1.2] mb-[15px] text-white font-[800]">
            ขนส่งบิ๊กไบค์ <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00f2ff]">ระดับมืออาชีพ</span>
          </h1>
          <p className="text-[0.95rem] md:text-[1.1rem] mb-[20px] md:mb-[30px] max-w-[800px] mx-auto text-[#94a3b8] px-[10px]">
            มั่นใจทุกการเดินทาง รถตู้ทึบกันฝน 100% <strong>มีทางลาดขึ้น-ลงสะดวก</strong> พร้อมอุปกรณ์ล็อคล้อมาตรฐานศูนย์ ไม่ต้องขี่มาส่ง เราไปรับถึงหน้าบ้าน
          </p>
          
          <div className="mt-[25px] flex justify-center gap-[15px] flex-wrap">
            <a href="tel:0958010958" className="inline-flex items-center justify-center gap-[10px] p-[12px_30px] rounded-[50px] font-bold border-none text-[1rem] cursor-pointer transition-all duration-300 bg-[#00f2ff] text-[#02040a] shadow-[0_0_15px_rgba(0,242,255,0.4)] hover:-translate-y-[2px] hover:shadow-[0_0_25px_rgba(0,242,255,0.7)] hover:bg-white w-[90%] md:w-auto max-w-[300px]">
              <i className="fa-solid fa-phone-volume"></i> โทรประเมินราคา
            </a>
            <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=952yyanc" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-[10px] p-[12px_30px] rounded-[50px] font-bold border-2 border-[#06C755] text-[#06C755] text-[1rem] cursor-pointer transition-all duration-300 bg-transparent hover:bg-[#06C755] hover:text-white hover:shadow-[0_0_15px_#06C755] w-[90%] md:w-auto max-w-[300px]">
              <i className="fa-brands fa-line"></i> ส่งรูปรถทาง LINE
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-[15px] md:px-[20px]">
        
        {/* TECH GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[15px] md:gap-[20px] mb-[40px] md:mb-[60px] mt-[30px] md:mt-[50px]">
          <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[16px] p-[20px] md:p-[25px] text-left transition-all duration-300 relative overflow-hidden group hover:-translate-y-[5px] hover:border-[#00f2ff] hover:bg-gradient-to-br hover:from-[rgba(0,242,255,0.05)] hover:to-[rgba(255,255,255,0.01)]">
            <div className="text-[2rem] text-[#00f2ff] mb-[15px] drop-shadow-[0_0_8px_rgba(0,242,255,0.5)]">
              <i className="fa-solid fa-truck-ramp-box"></i>
            </div>
            <h3 className="text-white mb-[8px] text-[1.2rem] font-medium">ทางลาดขึ้น-ลงสะดวก</h3>
            <p className="text-[#94a3b8] text-[0.9rem] leading-[1.5]">มีทางลาดอลูมิเนียมยาวพิเศษ รถโหลดเตี้ย หรือรถทรงสปอร์ตขึ้นได้ง่าย ไม่ติดใต้ท้องรถ</p>
          </div>

          <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[16px] p-[20px] md:p-[25px] text-left transition-all duration-300 relative overflow-hidden group hover:-translate-y-[5px] hover:border-[#00f2ff] hover:bg-gradient-to-br hover:from-[rgba(0,242,255,0.05)] hover:to-[rgba(255,255,255,0.01)]">
            <div className="text-[2rem] text-[#00f2ff] mb-[15px] drop-shadow-[0_0_8px_rgba(0,242,255,0.5)]">
              <i className="fa-solid fa-shield-cat"></i>
            </div>
            <h3 className="text-white mb-[8px] text-[1.2rem] font-medium">แพ็คซีนกันรอย 100%</h3>
            <p className="text-[#94a3b8] text-[0.9rem] leading-[1.5]">เราห่อหุ้มจุดสัมผัสและตัวรถด้วยฟิล์มยืดอย่างดี ป้องกันรอยขีดข่วนระหว่างขนส่ง</p>
          </div>

          <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[16px] p-[20px] md:p-[25px] text-left transition-all duration-300 relative overflow-hidden group hover:-translate-y-[5px] hover:border-[#00f2ff] hover:bg-gradient-to-br hover:from-[rgba(0,242,255,0.05)] hover:to-[rgba(255,255,255,0.01)]">
            <div className="text-[2rem] text-[#00f2ff] mb-[15px] drop-shadow-[0_0_8px_rgba(0,242,255,0.5)]">
              <i className="fa-solid fa-lock"></i>
            </div>
            <h3 className="text-white mb-[8px] text-[1.2rem] font-medium">ล็อคล้อ 4 จุด</h3>
            <p className="text-[#94a3b8] text-[0.9rem] leading-[1.5]">ใช้อุปกรณ์ Wheel Chock ล็อคล้อหน้า และสายรัด Soft Strap ไม่กดทับแฟริ่งให้เสียหาย</p>
          </div>

          <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[16px] p-[20px] md:p-[25px] text-left transition-all duration-300 relative overflow-hidden group hover:-translate-y-[5px] hover:border-[#00f2ff] hover:bg-gradient-to-br hover:from-[rgba(0,242,255,0.05)] hover:to-[rgba(255,255,255,0.01)]">
            <div className="text-[2rem] text-[#00f2ff] mb-[15px] drop-shadow-[0_0_8px_rgba(0,242,255,0.5)]">
              <i className="fa-solid fa-clock"></i>
            </div>
            <h3 className="text-white mb-[8px] text-[1.2rem] font-medium">บริการ 24 ชั่วโมง</h3>
            <p className="text-[#94a3b8] text-[0.9rem] leading-[1.5]">วิ่งงานด่วน งานเหมา ทั่วไทย รับรถดึกแค่ไหนก็ไปรับได้ (นัดหมายล่วงหน้า)</p>
          </div>
        </div>

        {/* GALLERY SECTION */}
        <div className="p-[20px] md:p-[40px] rounded-[20px] bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.05)] mb-[40px] md:mb-[60px]">
          <div className="text-center mb-[30px]">
            <h2 className="text-white text-[1.5rem] md:text-[1.8rem] mb-[10px] font-bold"><i className="fa-solid fa-camera text-[#00f2ff] mr-2"></i> ภาพผลงานจริง</h2>
            <p className="text-[#aaa] text-[0.9rem]">รถเล็ก รถใหญ่ รถเก่า รถวิบาก เรารับจบทุกคัน</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px]">
            <div className="aspect-[16/9] md:aspect-[4/3] overflow-hidden rounded-[12px] border border-[rgba(255,255,255,0.1)] relative group transition-all duration-300 hover:border-[#00f2ff] hover:shadow-[0_0_15px_rgba(0,242,255,0.3)]">
              <Image src="/images/portfolio/S__2531431.webp" alt="ขนส่งรถบิ๊กไบค์ ขึ้นรถสไลด์" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="aspect-[16/9] md:aspect-[4/3] overflow-hidden rounded-[12px] border border-[rgba(255,255,255,0.1)] relative group transition-all duration-300 hover:border-[#00f2ff] hover:shadow-[0_0_15px_rgba(0,242,255,0.3)]">
              <Image src="/images/portfolio/S__17556169.webp" alt="แพ็คกันรอยรถบิ๊กไบค์ GS Adventure" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="aspect-[16/9] md:aspect-[4/3] overflow-hidden rounded-[12px] border border-[rgba(255,255,255,0.1)] relative group transition-all duration-300 hover:border-[#00f2ff] hover:shadow-[0_0_15px_rgba(0,242,255,0.3)]">
              <Image src="/images/portfolio/S__17556176.webp" alt="ขนส่งรถคลาสสิคแบบเหมาคัน" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="aspect-[16/9] md:aspect-[4/3] overflow-hidden rounded-[12px] border border-[rgba(255,255,255,0.1)] relative group transition-all duration-300 hover:border-[#00f2ff] hover:shadow-[0_0_15px_rgba(0,242,255,0.3)]">
              <Image src="/images/portfolio/S__17556173.webp" alt="บริการขนส่งรถมอเตอร์ไซค์ 24 ชม" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="aspect-[16/9] md:aspect-[4/3] overflow-hidden rounded-[12px] border border-[rgba(255,255,255,0.1)] relative group transition-all duration-300 hover:border-[#00f2ff] hover:shadow-[0_0_15px_rgba(0,242,255,0.3)]">
              <Image src="/images/portfolio/S__17556286.webp" alt="ขนส่งรถวิบาก รถแข่งสนาม" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="aspect-[16/9] md:aspect-[4/3] overflow-hidden rounded-[12px] border border-[rgba(255,255,255,0.1)] relative group transition-all duration-300 hover:border-[#00f2ff] hover:shadow-[0_0_15px_rgba(0,242,255,0.3)]">
              <Image src="/images/portfolio/S__17556168.webp" alt="รถตู้ทึบ N&M18 TRANSPORT" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
          </div>
        </div>

        {/* SERVICE AREA SECTION */}
        <section className="mt-[40px] mb-[60px] p-[30px] bg-[rgba(15,28,56,0.6)] rounded-[15px] border border-[rgba(255,255,255,0.05)]">
          <h3 className="text-white text-center mb-[25px] text-[1.5rem]">
            <i className="fa-solid fa-map-location-dot text-[#00f2ff]"></i> พื้นที่รับ-ส่งยอดนิยม (รับถึงหน้าบ้าน)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] text-left text-[#d0d7e1]">
            <div>
              <h4 className="text-[#FF4500] text-[1.1rem] mb-[10px]">กรุงเทพ & ปริมณฑล</h4>
              <ul className="list-none font-[0.9rem] leading-[1.8]">
                <li><i className="fa-solid fa-check text-[#06C755] mr-[5px]"></i> บางแค / ฝั่งธน / พระราม 2</li>
                <li><i className="fa-solid fa-check text-[#06C755] mr-[5px]"></i> ลาดพร้าว / รังสิต / ดอนเมือง</li>
                <li><i className="fa-solid fa-check text-[#06C755] mr-[5px]"></i> บางนา / สมุทรปราการ</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#FF4500] text-[1.1rem] mb-[10px]">เส้นทางต่างจังหวัด</h4>
              <ul className="list-none font-[0.9rem] leading-[1.8]">
                <li><i className="fa-solid fa-check text-[#06C755] mr-[5px]"></i> ภาคเหนือ (เชียงใหม่/นครสวรรค์)</li>
                <li><i className="fa-solid fa-check text-[#06C755] mr-[5px]"></i> ภาคอีสาน (โคราช/ขอนแก่น)</li>
                <li><i className="fa-solid fa-check text-[#06C755] mr-[5px]"></i> ภาคใต้ (หัวหิน/ภูเก็ต)</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#FF4500] text-[1.1rem] mb-[10px]">ประเภทรถที่รับขนส่ง</h4>
              <ul className="list-none font-[0.9rem] leading-[1.8]">
                <li><i className="fa-solid fa-check text-[#06C755] mr-[5px]"></i> Big Bike ทุกรุ่น (Harley/BMW/Ducati)</li>
                <li><i className="fa-solid fa-check text-[#06C755] mr-[5px]"></i> รถมอเตอร์ไซค์เล็ก / เวสป้า / รถป๊อป</li>
                <li><i className="fa-solid fa-check text-[#06C755] mr-[5px]"></i> รถวิบาก / รถ ATV / รถกอล์ฟ</li>
              </ul>
            </div>
          </div>
        </section>

        <FAQClient />
      </div>
    </main>
  );
}
