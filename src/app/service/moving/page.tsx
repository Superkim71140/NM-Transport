import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Image from 'next/image';
import FAQClient from './FAQClient';

export const metadata: Metadata = {
  title: "รถรับจ้างย้ายบ้าน ย้ายหอพัก คอนโด รถกระบะ/4ล้อ ตู้ทึบ ราคาถูก - N&M18 TRANSPORT",
  description: "บริการรถรับจ้างย้ายบ้าน ย้ายหอพัก ย้ายคอนโด ขนย้ายเฟอร์นิเจอร์ รถกระบะตู้ทึบ รถ 4 ล้อรับจ้าง พร้อมคนยกของ ราคาถูก ประเมินราคาฟรี วิ่งทั่วกรุงเทพฯ และต่างจังหวัด โทร 095-801-0958",
  keywords: "รถรับจ้างย้ายบ้าน, รถรับจ้างขนของ, ย้ายหอพัก, รถ 4 ล้อรับจ้าง, รถกระบะรับจ้างขนของ, จ้างรถขนของ, ย้ายบ้านราคาถูก, รถรับจ้าง กรุงเทพ, ขนย้ายเฟอร์นิเจอร์, N&M18 TRANSPORT",
  alternates: {
    canonical: "/service/moving",
  },
  openGraph: {
    title: "รถรับจ้างย้ายบ้าน ย้ายหอพัก คอนโด รถกระบะ/4ล้อ ตู้ทึบ ราคาถูก",
    description: "บริการรถรับจ้างย้ายบ้าน ย้ายหอพัก ย้ายคอนโด ขนย้ายเฟอร์นิเจอร์ รถกระบะตู้ทึบ รถ 4 ล้อรับจ้าง พร้อมคนยกของ ราคาถูก ประเมินราคาฟรี วิ่งทั่วกรุงเทพฯ และต่างจังหวัด โทร 095-801-0958",
    url: "https://www.nm18transport.com/service/moving",
    images: [{ url: "https://www.nm18transport.com/S__2531438.jpg" }],
    type: "article",
  },
};

export default function ServiceMovingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
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
    "description": "บริการรถรับจ้างย้ายบ้าน หอพัก คอนโด ขนย้ายเฟอร์นิเจอร์ รถกระบะตู้ทึบและรถ 4 ล้อรับจ้าง พร้อมคนยกของมืออาชีพ ราคาถูก บริการ 24 ชม.",
    "openingHours": "Mo-Su 00:00-23:59"
  };

  return (
    <main className="bg-[#02040a] min-h-screen text-[#e2e8f0] pb-[70px] md:pb-0" style={{ backgroundImage: "radial-gradient(circle at 50% 0%, #1a2c4e 0%, #02040a 70%)", backgroundAttachment: "fixed" }}>
      <Script
        id="service-moving-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* HERO SECTION */}
      <section className="pt-[80px] pb-[40px] text-center relative px-5 md:pt-[50px] md:pb-[20px]">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-[2rem] md:text-[3rem] leading-[1.2] mb-[15px] text-white font-extrabold">
            ขนย้ายบ้าน หอพัก <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FF4500]">ครบวงจร</span>
          </h1>
          <p className="text-[0.95rem] md:text-[1.1rem] mb-[30px] max-w-[800px] mx-auto text-[#94a3b8] px-2.5 md:px-0">
            เรื่องย้ายให้เป็นหน้าที่เรา.. แพ็ค-ยก-ขน-ส่ง ถึงที่หมายปลอดภัย 100%<br/>ด้วยทีมงานมืออาชีพและรถตู้ทึบกันฝน
          </p>
          
          <div className="mt-[25px] flex justify-center gap-[15px] flex-wrap">
            <a href="tel:0958010958" className="inline-flex items-center justify-center gap-[10px] py-[12px] px-[35px] rounded-[50px] font-bold border-none text-[1rem] md:text-[1.1rem] cursor-pointer transition-all duration-300 bg-[#FF4500] text-white shadow-[0_0_15px_rgba(255,69,0,0.4)] hover:-translate-y-[2px] hover:shadow-[0_0_25px_rgba(255,69,0,0.7)] w-full md:w-auto max-w-[300px]">
              <i className="fa-solid fa-phone-volume"></i> ประเมินราคาฟรี
            </a>
            <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=952yyanc" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-[10px] py-[12px] px-[35px] rounded-[50px] font-bold border-none text-[1rem] md:text-[1.1rem] cursor-pointer transition-all duration-300 bg-[#06C755] text-white shadow-[0_0_15px_rgba(6,199,85,0.4)] hover:-translate-y-[2px] w-full md:w-auto max-w-[300px]">
              <i className="fa-brands fa-line"></i> ทักไลน์จองคิว
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-[15px] md:px-5">
        
        {/* FEATURE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[15px] md:gap-[20px] my-[40px]">
          <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-[20px] md:p-[30px] text-left transition-all duration-300 relative overflow-hidden group hover:-translate-y-[5px] hover:border-[#FF4500] hover:bg-gradient-to-br hover:from-[rgba(255,69,0,0.05)] hover:to-[rgba(255,255,255,0.01)]">
            <div className="w-[60px] h-[60px] bg-[rgba(255,69,0,0.1)] rounded-[12px] flex items-center justify-center text-[1.8rem] text-[#FF4500] mb-[20px]">
              <i className="fa-solid fa-people-carry-box"></i>
            </div>
            <h3 className="text-white mb-[10px] text-[1.3rem] font-medium">ทีมงานยกของ</h3>
            <p className="text-[#94a3b8] text-[0.95rem]">มีพนักงานช่วยยกของขึ้น-ลงรถ และจัดวางเข้าที่ ไม่ต้องเหนื่อยทำเอง</p>
          </div>

          <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-[20px] md:p-[30px] text-left transition-all duration-300 relative overflow-hidden group hover:-translate-y-[5px] hover:border-[#FF4500] hover:bg-gradient-to-br hover:from-[rgba(255,69,0,0.05)] hover:to-[rgba(255,255,255,0.01)]">
            <div className="w-[60px] h-[60px] bg-[rgba(255,69,0,0.1)] rounded-[12px] flex items-center justify-center text-[1.8rem] text-[#FF4500] mb-[20px]">
              <i className="fa-solid fa-box"></i>
            </div>
            <h3 className="text-white mb-[10px] text-[1.3rem] font-medium">บริการแพ็คกิ้ง</h3>
            <p className="text-[#94a3b8] text-[0.95rem]">ห่อหุ้มเฟอร์นิเจอร์ ตู้ เตียง ทีวี ด้วยพลาสติกกันกระแทกอย่างดี</p>
          </div>

          <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-[20px] md:p-[30px] text-left transition-all duration-300 relative overflow-hidden group hover:-translate-y-[5px] hover:border-[#FF4500] hover:bg-gradient-to-br hover:from-[rgba(255,69,0,0.05)] hover:to-[rgba(255,255,255,0.01)]">
            <div className="w-[60px] h-[60px] bg-[rgba(255,69,0,0.1)] rounded-[12px] flex items-center justify-center text-[1.8rem] text-[#FF4500] mb-[20px]">
              <i className="fa-solid fa-truck-front"></i>
            </div>
            <h3 className="text-white mb-[10px] text-[1.3rem] font-medium">รถตู้ทึบ 100%</h3>
            <p className="text-[#94a3b8] text-[0.95rem]">รถกระบะและ 4 ล้อตู้ทึบ ปิดมิดชิด กันแดด กันฝน ของไม่หล่นหาย</p>
          </div>
        </div>

        {/* GALLERY SHOWCASE */}
        <div className="bg-[rgba(0,0,0,0.3)] rounded-[20px] p-[20px] md:p-[40px] border border-[rgba(255,255,255,0.05)] mb-[40px] md:mb-[60px]">
          <div className="text-center mb-[30px]">
            <h2 className="text-[1.5rem] md:text-[2rem] color-white mb-[10px] font-bold">ภาพการทำงานจริง</h2>
            <p className="text-[#aaa]">ใส่ใจทุกรายละเอียด ดูแลสินค้าเหมือนของตัวเอง</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px] md:gap-[20px]">
            <div className="rounded-[15px] overflow-hidden relative border border-[rgba(255,255,255,0.1)] shadow-[0_10px_30px_rgba(0,0,0,0.3)] group lg:col-span-2 aspect-[4/3] lg:aspect-[16/9]">
              <Image src="/images/portfolio/S__2531438.webp" alt="รถตู้ทึบขนของเต็มคัน N&M18" fill className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-70" />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[rgba(5,10,20,0.95)] to-[rgba(5,10,20,0.6)] p-[10px] md:p-[15px] text-white text-[0.9rem] md:text-[1rem] font-medium flex items-center gap-[10px] transition-all duration-400 opacity-100 md:opacity-0 md:translate-y-full group-hover:opacity-100 group-hover:translate-y-0">
                <i className="fa-solid fa-layer-group text-[#FF4500] text-[1.1rem]"></i> 
                จัดเรียงของเป็นระเบียบ เต็มคันคุ้มค่า
              </div>
            </div>
            
            <div className="rounded-[15px] overflow-hidden relative border border-[rgba(255,255,255,0.1)] shadow-[0_10px_30px_rgba(0,0,0,0.3)] group aspect-[4/3]">
              <Image src="/images/portfolio/S__2531423.webp" alt="การแพ็คกิ้งของในรถ" fill className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-70" />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[rgba(5,10,20,0.95)] to-[rgba(5,10,20,0.6)] p-[10px] md:p-[15px] text-white text-[0.9rem] md:text-[1rem] font-medium flex items-center gap-[10px] transition-all duration-400 opacity-100 md:opacity-0 md:translate-y-full group-hover:opacity-100 group-hover:translate-y-0">
                <i className="fa-solid fa-box-open text-[#FF4500] text-[1.1rem]"></i> 
                แพ็คกันกระแทกทุกชิ้น
              </div>
            </div>

            <div className="rounded-[15px] overflow-hidden relative border border-[rgba(255,255,255,0.1)] shadow-[0_10px_30px_rgba(0,0,0,0.3)] group aspect-[4/3]">
              <Image src="/images/services/บริการขนย้ายบ้าน.png" alt="รวมภาพรีวิวขนย้ายบ้าน" fill className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-70" />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[rgba(5,10,20,0.95)] to-[rgba(5,10,20,0.6)] p-[10px] md:p-[15px] text-white text-[0.9rem] md:text-[1rem] font-medium flex items-center gap-[10px] transition-all duration-400 opacity-100 md:opacity-0 md:translate-y-full group-hover:opacity-100 group-hover:translate-y-0">
                <i className="fa-solid fa-heart text-[#FF4500] text-[1.1rem]"></i> 
                บริการประทับใจลูกค้า
              </div>
            </div>

            <div className="rounded-[15px] overflow-hidden relative border border-[rgba(255,255,255,0.1)] shadow-[0_10px_30px_rgba(0,0,0,0.3)] group aspect-[4/3]">
              <Image src="/images/portfolio/S__17556285.webp" alt="ขนย้ายหอพัก" fill className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-70" />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[rgba(5,10,20,0.95)] to-[rgba(5,10,20,0.6)] p-[10px] md:p-[15px] text-white text-[0.9rem] md:text-[1rem] font-medium flex items-center gap-[10px] transition-all duration-400 opacity-100 md:opacity-0 md:translate-y-full group-hover:opacity-100 group-hover:translate-y-0">
                <i className="fa-solid fa-truck-fast text-[#FF4500] text-[1.1rem]"></i> 
                ย้ายหอพัก/คอนโด รวดเร็ว
              </div>
            </div>
          </div>
        </div>

        {/* PACKING SECTION */}
        <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[50px] items-center mb-[80px] p-[30px_20px] lg:p-[50px] rounded-[30px] border border-[rgba(255,255,255,0.1)] relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)]" style={{ background: "radial-gradient(circle at top right, rgba(21, 35, 65, 0.8), rgba(5, 10, 20, 0.95))" }}>
          <div className="absolute w-[400px] h-[400px] bg-[#FF4500] blur-[150px] opacity-[0.15] rounded-full z-0 pointer-events-none -top-[100px] -left-[100px]"></div>
          <div className="absolute w-[400px] h-[400px] bg-[#00f2ff] blur-[150px] opacity-[0.15] rounded-full z-0 pointer-events-none -bottom-[100px] -right-[100px]"></div>

          <div className="flex-1 relative z-10 w-full">
            <h2 className="text-[1.8rem] lg:text-[2.2rem] font-extrabold mb-[30px] text-center lg:text-left text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FF4500]">ทำไมต้องเลือก N&M18?</h2>
            
            <div className="flex flex-col gap-[15px]">
              <div className="flex items-center gap-[20px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] p-[20px] rounded-[16px] transition-all duration-300 hover:bg-gradient-to-r hover:from-[rgba(255,69,0,0.1)] hover:to-transparent hover:border-[#FF4500] hover:translate-x-[10px] hover:shadow-[0_5px_15px_rgba(0,0,0,0.2)] lg:hover:-translate-y-0 hover:-translate-y-[5px]">
                <div className="w-[50px] h-[50px] flex-shrink-0 bg-[rgba(255,69,0,0.15)] rounded-[12px] flex items-center justify-center text-[#FF4500] text-[1.5rem] shadow-[0_0_10px_rgba(255,69,0,0.2)]">
                  <i className="fa-solid fa-file-invoice-dollar"></i>
                </div>
                <div>
                  <h4 className="m-0 mb-[5px] text-white text-[1.1rem]">ประเมินราคาชัดเจน</h4>
                  <p className="m-0 text-[#aaa] text-[0.9rem] leading-[1.4]">ไม่มีบวกเพิ่มหน้างาน จบที่ตกลง ราคาเป็นธรรม</p>
                </div>
              </div>

              <div className="flex items-center gap-[20px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] p-[20px] rounded-[16px] transition-all duration-300 hover:bg-gradient-to-r hover:from-[rgba(255,69,0,0.1)] hover:to-transparent hover:border-[#FF4500] hover:translate-x-[10px] hover:shadow-[0_5px_15px_rgba(0,0,0,0.2)] lg:hover:-translate-y-0 hover:-translate-y-[5px]">
                <div className="w-[50px] h-[50px] flex-shrink-0 bg-[rgba(255,69,0,0.15)] rounded-[12px] flex items-center justify-center text-[#FF4500] text-[1.5rem] shadow-[0_0_10px_rgba(255,69,0,0.2)]">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <div>
                  <h4 className="m-0 mb-[5px] text-white text-[1.1rem]">รับประกันสินค้า 100%</h4>
                  <p className="m-0 text-[#aaa] text-[0.9rem] leading-[1.4]">เสียหายจากการขนส่งยินดีชดใช้ตามจริง แพ็คให้อย่างดี</p>
                </div>
              </div>

              <div className="flex items-center gap-[20px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] p-[20px] rounded-[16px] transition-all duration-300 hover:bg-gradient-to-r hover:from-[rgba(255,69,0,0.1)] hover:to-transparent hover:border-[#FF4500] hover:translate-x-[10px] hover:shadow-[0_5px_15px_rgba(0,0,0,0.2)] lg:hover:-translate-y-0 hover:-translate-y-[5px]">
                <div className="w-[50px] h-[50px] flex-shrink-0 bg-[rgba(255,69,0,0.15)] rounded-[12px] flex items-center justify-center text-[#FF4500] text-[1.5rem] shadow-[0_0_10px_rgba(255,69,0,0.2)]">
                  <i className="fa-solid fa-dolly"></i>
                </div>
                <div>
                  <h4 className="m-0 mb-[5px] text-white text-[1.1rem]">อุปกรณ์ครบครัน</h4>
                  <p className="m-0 text-[#aaa] text-[0.9rem] leading-[1.4]">มีรถเข็น สายรัด ผ้าใบ พลาสติกซีน พร้อมลุยงานหนัก</p>
                </div>
              </div>

              <div className="flex items-center gap-[20px] bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] p-[20px] rounded-[16px] transition-all duration-300 hover:bg-gradient-to-r hover:from-[rgba(255,69,0,0.1)] hover:to-transparent hover:border-[#FF4500] hover:translate-x-[10px] hover:shadow-[0_5px_15px_rgba(0,0,0,0.2)] lg:hover:-translate-y-0 hover:-translate-y-[5px]">
                <div className="w-[50px] h-[50px] flex-shrink-0 bg-[rgba(255,69,0,0.15)] rounded-[12px] flex items-center justify-center text-[#FF4500] text-[1.5rem] shadow-[0_0_10px_rgba(255,69,0,0.2)]">
                  <i className="fa-solid fa-map-location-dot"></i>
                </div>
                <div>
                  <h4 className="m-0 mb-[5px] text-white text-[1.1rem]">ชำนาญเส้นทาง</h4>
                  <p className="m-0 text-[#aaa] text-[0.9rem] leading-[1.4]">วิ่งทั่วไทย ถึงปลายทางตรงเวลา คนขับสุภาพ</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 relative z-10 rounded-[20px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.1)] w-full aspect-[4/3] group">
            <Image src="/images/portfolio/S__2531423.webp" alt="อุปกรณ์แพ็คกิ้งครบครัน N&M18" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
        </div>

        {/* SERVICE AREA SECTION */}
        <section className="mt-[40px] mb-[60px] p-[30px] bg-[rgba(15,28,56,0.6)] rounded-[15px] border border-[rgba(255,255,255,0.05)]">
          <h3 className="text-white text-center mb-[25px] text-[1.5rem]">
            <i className="fa-solid fa-map-location-dot text-[#FF4500]"></i> พื้นที่ให้บริการขนย้ายยอดนิยม
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] text-left text-[#d0d7e1]">
            <div>
              <h4 className="text-[#00f2ff] text-[1.1rem] mb-[10px]">กรุงเทพฯ & ปริมณฑล</h4>
              <ul className="list-none font-[0.9rem] leading-[1.8]">
                <li><i className="fa-solid fa-check text-[#06C755] mr-[5px]"></i> ลาดพร้าว / จตุจักร / รัชดา</li>
                <li><i className="fa-solid fa-check text-[#06C755] mr-[5px]"></i> บางแค / ฝั่งธน / พระราม 2</li>
                <li><i className="fa-solid fa-check text-[#06C755] mr-[5px]"></i> นนทบุรี / ปทุมธานี / สมุทรปราการ</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#00f2ff] text-[1.1rem] mb-[10px]">เส้นทางต่างจังหวัด</h4>
              <ul className="list-none font-[0.9rem] leading-[1.8]">
                <li><i className="fa-solid fa-check text-[#06C755] mr-[5px]"></i> ภาคเหนือ (เชียงใหม่/นครสวรรค์)</li>
                <li><i className="fa-solid fa-check text-[#06C755] mr-[5px]"></i> ภาคอีสาน (โคราช/ขอนแก่น/อุดร)</li>
                <li><i className="fa-solid fa-check text-[#06C755] mr-[5px]"></i> ภาคใต้ / ภาคตะวันออก</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#00f2ff] text-[1.1rem] mb-[10px]">ประเภทรถให้บริการ</h4>
              <ul className="list-none font-[0.9rem] leading-[1.8]">
                <li><i className="fa-solid fa-check text-[#06C755] mr-[5px]"></i> รถกระบะตู้ทึบ (ขนของทั่วไป/ย้ายหอ)</li>
                <li><i className="fa-solid fa-check text-[#06C755] mr-[5px]"></i> รถกระบะคอก (ขนสินค้าเกษตร/มอไซค์)</li>
                <li><i className="fa-solid fa-check text-[#06C755] mr-[5px]"></i> รถ 4 ล้อรับจ้าง (ย้ายบ้านทั้งหลัง)</li>
              </ul>
            </div>
          </div>
        </section>

        <FAQClient />
      </div>
    </main>
  );
}
