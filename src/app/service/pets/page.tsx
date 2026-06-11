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
    canonical: "https://www.nm18transport.com/service/pets",
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
    <main className="bg-[#050a14] min-h-screen text-[#B0B8C4] pb-[70px] md:pb-0" style={{ backgroundImage: "radial-gradient(circle at 50% 10%, #1a2c4e 0%, #050a14 60%)", backgroundAttachment: "fixed" }}>
      <Script
        id="service-pets-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* HERO SECTION */}
      <section className="pt-[50px] pb-[30px] md:pt-[100px] md:pb-[60px] text-center relative overflow-hidden px-[15px] md:px-[20px]">
        <i className="fa-solid fa-paw absolute text-[8rem] md:text-[15rem] text-[rgba(255,215,0,0.03)] -z-10 top-[40%] md:top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2"></i>
        <div className="max-w-[1200px] mx-auto flex flex-col items-center">
          <h1 className="text-[1.8rem] md:text-[3.5rem] leading-[1.3] md:leading-[1.2] mb-[10px] md:mb-[20px] text-white font-extrabold drop-shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            ส่งสัตว์เลี้ยง <span className="font-[800] text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFA500]">VIP CLASS</span><br/>ปลอดภัย ไม่ร้อน ถึงไว
          </h1>
          <p className="text-[0.95rem] md:text-[1.2rem] mb-[20px] md:mb-[30px] max-w-[700px] mx-auto px-[10px]">
            เราเข้าใจว่าเขาไม่ใช่แค่สัตว์เลี้ยง แต่คือ &quot;คนสำคัญ&quot; ของครอบครัว บริการขนส่งด้วยรถปรับอากาศ ดูแลตลอดการเดินทาง รายงานผล Real-time
          </p>
          
          <div className="mt-[20px] md:mt-[40px] flex flex-col md:flex-row justify-center items-center gap-[15px] md:gap-[20px] w-full">
            <a href="tel:0958010958" className="inline-flex items-center justify-center gap-[10px] p-[12px_20px] md:p-[15px_40px] rounded-[50px] font-[800] text-[#000] text-[1rem] md:text-[1.2rem] bg-gradient-to-r from-[#FFD700] to-[#FFC107] border-none shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(255,215,0,0.7)] w-[90%] md:w-auto max-w-[320px]">
              <i className="fa-solid fa-phone-volume"></i> โทรจองคิวรถ
            </a>
            <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=952yyanc" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-[10px] p-[12px_20px] md:p-[15px_40px] rounded-[50px] font-[800] text-[#fff] text-[1rem] md:text-[1.2rem] bg-[#06C755] border-none shadow-[0_0_20px_rgba(6,199,85,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(6,199,85,0.7)] w-[90%] md:w-auto max-w-[320px]">
              <i className="fa-brands fa-line"></i> ทักไลน์ (24ชม.)
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-[15px] md:px-[20px]">
        
        {/* FEATURE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[15px] md:gap-[30px] mt-[30px] md:mt-[50px]">
          <div className="bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.1)] rounded-[20px] p-[20px] md:p-[35px] text-center transition-all duration-400 relative overflow-hidden group hover:-translate-y-[10px] hover:border-[#FFD700] hover:shadow-[0_0_30px_rgba(255,215,0,0.15)]">
            <div className="text-[2rem] md:text-[3rem] text-[#FFD700] mb-[10px] md:mb-[20px] drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">
              <i className="fa-solid fa-temperature-arrow-down"></i>
            </div>
            <h3 className="text-white text-[1.2rem] md:text-[1.4rem] mb-[10px] font-medium">Cool Air System</h3>
            <p className="text-[#B0B8C4] text-[0.9rem] md:text-[1rem]">รถห้องโดยสารปรับอากาศ 100% เปิดแอร์เย็นฉ่ำตลอดเส้นทาง ไม่นำน้องไปตากแดดตากลมหลังกระบะ ป้องกัน Heat Stroke</p>
          </div>

          <div className="bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.1)] rounded-[20px] p-[20px] md:p-[35px] text-center transition-all duration-400 relative overflow-hidden group hover:-translate-y-[10px] hover:border-[#FFD700] hover:shadow-[0_0_30px_rgba(255,215,0,0.15)]">
            <div className="text-[2rem] md:text-[3rem] text-[#FFD700] mb-[10px] md:mb-[20px] drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">
              <i className="fa-solid fa-pump-medical"></i>
            </div>
            <h3 className="text-white text-[1.2rem] md:text-[1.4rem] mb-[10px] font-medium">Hygiene Standard</h3>
            <p className="text-[#B0B8C4] text-[0.9rem] md:text-[1rem]">ฉีดพ่นน้ำยาฆ่าเชื้อเกรดโรงพยาบาลทุกครั้งก่อนและหลังรับงาน ไม่มีกลิ่นเหม็น ไม่เสี่ยงติดโรค ปลอดภัยต่อน้องๆ</p>
          </div>

          <div className="bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.1)] rounded-[20px] p-[20px] md:p-[35px] text-center transition-all duration-400 relative overflow-hidden group hover:-translate-y-[10px] hover:border-[#FFD700] hover:shadow-[0_0_30px_rgba(255,215,0,0.15)]">
            <div className="text-[2rem] md:text-[3rem] text-[#FFD700] mb-[10px] md:mb-[20px] drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">
              <i className="fa-solid fa-video"></i>
            </div>
            <h3 className="text-white text-[1.2rem] md:text-[1.4rem] mb-[10px] font-medium">Live Updates</h3>
            <p className="text-[#B0B8C4] text-[0.9rem] md:text-[1rem]">อุ่นใจได้ตลอดทาง คนขับถ่ายรูป/วิดีโอส่งรายงานทุกจุดพักรถ เห็นหน้าน้องตลอด ไม่ต้องกังวลว่าจะเหงา</p>
          </div>
        </div>

        {/* IMAGE GALLERY */}
        <div className="m-[40px_0] md:m-[80px_0] p-[20px_15px] md:p-[40px] rounded-[20px] md:rounded-[30px] bg-gradient-to-br from-[rgba(255,255,255,0.02)] to-[rgba(0,0,0,0.2)] border-2 border-[rgba(255,215,0,0.3)] text-center relative">
          <div className="absolute top-[-15px] left-1/2 -translate-x-1/2 bg-[#050a14] px-[20px] text-[#FFD700] font-bold tracking-[2px]">REAL WORKS</div>
          <h2 className="text-white text-[1.5rem] md:text-[2rem] mb-[10px] md:mb-[20px] font-bold">ภาพการทำงานจริง</h2>
          <p className="text-[#999] mb-[20px] md:mb-[30px]">ดูแลอย่างใกล้ชิด ทั้งน้องหมา น้องแมว รับจากหน้าบ้าน ส่งถึงมือผู้รับ</p>
          
          <div className="relative w-full max-w-[900px] aspect-[16/9] mx-auto rounded-[15px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.1)] group">
            <Image src="/images/services/pet.jpg" alt="รีวิวการขนส่งสัตว์เลี้ยง N&M18" fill className="object-cover transition-transform duration-500 group-hover:scale-102" />
          </div>
          
          <div className="mt-[20px] text-[0.9rem] text-[#FFD700]">
            <i className="fa-solid fa-circle-check"></i> รถเก๋งส่วนตัว / รถ SUV กว้างขวาง นั่งสบาย ไม่แออัด
          </div>
        </div>

        {/* SYSTEM & SAFETY LIST */}
        <div className="flex flex-col lg:flex-row flex-wrap items-center gap-[30px] lg:gap-[40px] m-[40px_0] md:m-[60px_0]">
          <div className="flex-1 min-w-0 md:min-w-[300px] w-full text-center lg:text-left">
            <h2 className="text-[1.8rem] lg:text-[2.5rem] text-white font-extrabold mb-[10px]">ระบบความปลอดภัย <span className="text-[#06C755]">สูงสุด</span></h2>
            <p className="mb-[20px] lg:mb-[30px] text-[0.9rem] lg:text-[1rem]">เราเตรียมความพร้อมในทุกด้าน เพื่อให้การเดินทางราบรื่นที่สุด</p>
            
            <div className="mt-[15px] lg:mt-[20px] flex flex-col gap-[10px] lg:gap-[20px] text-left">
              <div className="flex items-center gap-[10px] lg:gap-[15px] bg-[rgba(255,255,255,0.03)] p-[12px_15px] lg:p-[15px_20px] rounded-[10px] border-l-[4px] border-[#FFD700]">
                <i className="fa-solid fa-shield-cat text-[#06C755] text-[1.2rem]"></i>
                <div>
                  <h4 className="text-white m-0 text-[1rem] lg:text-[1.1rem]">Door-to-Door Service</h4>
                  <p className="m-0 text-[0.85rem] lg:text-[0.9rem] text-[#999]">รับถึงหน้าบ้าน ส่งถึงห้องนอน ไม่ต้องนัดเจอระหว่างทาง</p>
                </div>
              </div>
              <div className="flex items-center gap-[10px] lg:gap-[15px] bg-[rgba(255,255,255,0.03)] p-[12px_15px] lg:p-[15px_20px] rounded-[10px] border-l-[4px] border-[#FFD700]">
                <i className="fa-solid fa-clock text-[#06C755] text-[1.2rem]"></i>
                <div>
                  <h4 className="text-white m-0 text-[1rem] lg:text-[1.1rem]">Express Delivery</h4>
                  <p className="m-0 text-[0.85rem] lg:text-[0.9rem] text-[#999]">วิ่งตรง ไม่ดองงาน ไม่แวะรับของจุกจิก ถึงปลายทางรวดเร็ว</p>
                </div>
              </div>
              <div className="flex items-center gap-[10px] lg:gap-[15px] bg-[rgba(255,255,255,0.03)] p-[12px_15px] lg:p-[15px_20px] rounded-[10px] border-l-[4px] border-[#FFD700]">
                <i className="fa-solid fa-hand-holding-heart text-[#06C755] text-[1.2rem]"></i>
                <div>
                  <h4 className="text-white m-0 text-[1rem] lg:text-[1.1rem]">Pet Lover Driver</h4>
                  <p className="m-0 text-[0.85rem] lg:text-[0.9rem] text-[#999]">คนขับรักสัตว์ เข้าใจธรรมชาติ จอดพักให้น้ำ/ขับถ่ายตามเหมาะสม</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full text-center bg-[rgba(255,255,255,0.02)] p-[40px] rounded-[20px] border border-dashed border-[#FFD700]">
            <i className="fa-solid fa-clipboard-list text-[4rem] text-[#555] mb-[20px]"></i>
            <h3 className="text-white text-[1.5rem] font-bold">สิ่งที่ลูกค้าต้องเตรียม</h3>
            <ul className="text-left mt-[20px] text-[#ccc] leading-[2] list-disc pl-[20px] max-w-[300px] mx-auto">
              <li>กรง/Box เดินทางที่แข็งแรง</li>
              <li>อาหารและน้ำสำหรับระหว่างทาง</li>
              <li>แผ่นรองซับขับถ่าย (ถ้ามี)</li>
              <li>ของเล่นหรือผ้าที่มีกลิ่นเจ้าของ (ช่วยลดเครียด)</li>
            </ul>
          </div>
        </div>

        {/* SERVICE AREA SECTION */}
        <section className="mt-[40px] mb-[60px] p-[30px] bg-[rgba(15,28,56,0.6)] rounded-[15px] border border-[rgba(255,255,255,0.05)]">
          <h3 className="text-white text-center mb-[25px] text-[1.5rem]">
            <i className="fa-solid fa-map-location-dot text-[#FFD700]"></i> พื้นที่รับ-ส่งน้องๆ ยอดนิยม
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] text-left text-[#d0d7e1]">
            <div>
              <h4 className="text-[#06C755] text-[1.1rem] mb-[10px]">ในกรุงเทพฯ & ปริมณฑล</h4>
              <ul className="list-none font-[0.9rem] leading-[1.8]">
                <li><i className="fa-solid fa-check text-[#FFD700] mr-[5px]"></i> ลาดพร้าว / จตุจักร / รามอินทรา</li>
                <li><i className="fa-solid fa-check text-[#FFD700] mr-[5px]"></i> บางแค / พระราม 2 / ฝั่งธน</li>
                <li><i className="fa-solid fa-check text-[#FFD700] mr-[5px]"></i> รังสิต / นนทบุรี / สมุทรปราการ</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#06C755] text-[1.1rem] mb-[10px]">ต่างจังหวัด (เหมาคัน)</h4>
              <ul className="list-none font-[0.9rem] leading-[1.8]">
                <li><i className="fa-solid fa-check text-[#FFD700] mr-[5px]"></i> ชลบุรี / พัทยา / ระยอง</li>
                <li><i className="fa-solid fa-check text-[#FFD700] mr-[5px]"></i> หัวหิน / ประจวบฯ</li>
                <li><i className="fa-solid fa-check text-[#FFD700] mr-[5px]"></i> เชียงใหม่ / โคราช (นัดล่วงหน้า)</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#06C755] text-[1.1rem] mb-[10px]">ประเภทรถที่ใช้ (4 ล้อเท่านั้น)</h4>
              <ul className="list-none font-[0.9rem] leading-[1.8]">
                <li><i className="fa-solid fa-car text-[#FFD700] mr-[5px]"></i> รถเก๋งส่วนตัว (Private Car)</li>
                <li><i className="fa-solid fa-truck-pickup text-[#FFD700] mr-[5px]"></i> รถ SUV (สำหรับน้องตัวใหญ่)</li>
                <li><i className="fa-solid fa-wind text-[#FFD700] mr-[5px]"></i> แอร์เย็นฉ่ำ ไม่ขังกรงหลังกระบะ</li>
              </ul>
            </div>
          </div>
        </section>

        <FAQClient />
      </div>
    </main>
  );
}
