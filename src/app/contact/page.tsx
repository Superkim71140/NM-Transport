import { FaPhoneVolume, FaLine, FaFacebookF, FaLocationDot, FaPhone } from 'react-icons/fa6';
import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "ติดต่อเรา จองคิวรถรับจ้าง ย้ายบ้าน 24 ชม. - N&M18 TRANSPORT",
  description: "ติดต่อจองคิว N&M18 TRANSPORT บริการรถรับจ้างขนของ ย้ายบ้าน ย้ายคอนโด ย้ายหอพัก ครอบคลุมกรุงเทพฯ และปริมณฑล ประเมินราคาเบื้องต้นฟรี ติดต่อได้ทันที โทร 095-801-0958",
  keywords: "ติดต่อรถรับจ้าง, จองรถขนของ, เบอร์โทรรถรับจ้าง, แผนที่ N&M18 TRANSPORT, รถรับจ้าง นครสวรรค์, รถรับจ้าง กรุงเทพ, ไลน์รถรับจ้าง, จองคิวรถย้ายบ้าน, ขนส่งสินค้าทั่วไทย",
  alternates: {
    canonical: "https://www.nm18transport.com/contact",
  },
  openGraph: {
    title: "ติดต่อเรา จองคิวรถรับจ้าง ย้ายบ้าน 24 ชม. - N&M18 TRANSPORT",
    description: "ติดต่อจองคิว N&M18 TRANSPORT บริการรถรับจ้างขนของ ย้ายบ้าน ย้ายคอนโด ย้ายหอพัก ครอบคลุมกรุงเทพฯ และปริมณฑล ประเมินราคาเบื้องต้นฟรี ติดต่อได้ทันที โทร 095-801-0958",
    url: "https://www.nm18transport.com/contact",
    images: [{ url: "https://www.nm18transport.com/S__2531437.jpg" }],
    type: "website",
  },
};

export default function ContactPage() {
  const faqData = [
    {
      question: "ประเมินราคาฟรีหรือไม่?",
      answer: "ประเมินราคาเบื้องต้นฟรีไม่มีค่าใช้จ่าย เพียงลูกค้าส่งรูปภาพสิ่งของที่จะขนย้าย พร้อมระบุต้นทาง-ปลายทาง และวันที่ต้องการขนย้ายผ่านช่องทาง Line ของเรา"
    },
    {
      question: "จองคิวรถด่วนใช้เวลาเท่าไหร่?",
      answer: "ลูกค้าสามารถติดต่อสอบถามคิวรถด่วนหรือคิวว่างที่ใกล้ที่สุดได้ทันทีตลอด 24 ชั่วโมง โดยเวลาในการเข้าหน้างานจะขึ้นอยู่กับระยะทาง ประเภทรถ และสถานะคิวงาน ณ ขณะนั้น"
    },
    {
      question: "ต้องแจ้งข้อมูลอะไรบ้างเพื่อประเมินราคา?",
      answer: "ข้อมูลที่จำเป็นสำหรับการประเมินราคา ได้แก่ สถานที่ต้นทางและปลายทาง (จุดจอดรถและชั้นที่ขนย้าย), วันเวลาที่ต้องการขนย้าย, รายการสิ่งของหรือปริมาณคร่าวๆ, ประเภทรถที่ต้องการใช้งาน และความต้องการทีมยกของเพิ่ม"
    }
  ];

  const pageEntityGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://www.nm18transport.com/contact#webpage",
        "url": "https://www.nm18transport.com/contact",
        "name": "ติดต่อเรา จองคิวรถรับจ้าง ย้ายบ้าน 24 ชม. - N&M18 TRANSPORT",
        "description": "ติดต่อจองคิว N&M18 TRANSPORT บริการรถรับจ้างขนของ ย้ายบ้าน ย้ายคอนโด ย้ายหอพัก ครอบคลุมกรุงเทพฯ และปริมณฑล ประเมินราคาเบื้องต้นฟรี ติดต่อได้ทันที โทร 095-801-0958",
        "isPartOf": {
          "@id": "https://www.nm18transport.com/#website"
        },
        "mainEntity": {
          "@id": "https://www.nm18transport.com/#organization"
        },
        "about": {
          "@id": "https://www.nm18transport.com/contact#transportation-service"
        }
      },
      {
        "@type": "Service",
        "@id": "https://www.nm18transport.com/contact#transportation-service",
        "name": "บริการรถรับจ้างขนของ N&M18 TRANSPORT",
        "serviceType": "TransportationService",
        "provider": {
          "@id": "https://www.nm18transport.com/#organization"
        },
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "กรุงเทพมหานคร"
          },
          {
            "@type": "AdministrativeArea",
            "name": "นนทบุรี"
          },
          {
            "@type": "AdministrativeArea",
            "name": "ปทุมธานี"
          },
          {
            "@type": "AdministrativeArea",
            "name": "สมุทรปราการ"
          }
        ],
        "description": "บริการรถรับจ้างขนของ ย้ายบ้าน คอนโด หอพัก ครอบคลุมพื้นที่กรุงเทพมหานคร นนทบุรี ปทุมธานี และสมุทรปราการ"
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <main>
      <script
        id="contact-page-entity-graph-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageEntityGraph).replace(/</g, '\\u003c') }}
      />
      <script
        id="contact-page-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c') }}
      />
      
      <section className="py-[60px] pb-[100px] relative overflow-hidden bg-[#02040a] min-h-[calc(100vh-80px)]">
        {/* Background Overlay mapped from the HTML's background image */}
        <Image src="/images/portfolio/S__2531437.webp" alt="Background" fill priority fetchPriority="high" className="object-cover absolute inset-0 -z-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(2,4,10,0.85)] to-[rgba(2,4,10,0.95)] -z-10"></div>

        {/* Glow Effects */}
        <div className="absolute w-[300px] h-[300px] bg-[#FF4500] blur-[150px] opacity-[0.15] rounded-full z-0 pointer-events-none top-[10%] -left-[50px]"></div>
        <div className="absolute w-[300px] h-[300px] bg-[#00f2ff] blur-[150px] opacity-[0.15] rounded-full z-0 pointer-events-none bottom-[10%] -right-[50px]"></div>

        <div className="max-w-[1200px] mx-auto px-5 relative z-10">
          <div className="text-center mb-[50px]">
            <h1 className="text-[2.5rem] font-bold mb-[10px] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FF4500]">
              ติดต่อเรา / จองคิวรถ
            </h1>
            <p className="text-[#94a3b8] text-[1.1rem]">
              สอบถามราคา ประเมินหน้างานฟรี ทักไลน์หรือโทรได้ตลอด 24 ชั่วโมง
            </p>
          </div>

          <div className="bg-[rgba(15,28,56,0.95)] backdrop-blur-[30px] border border-[rgba(255,255,255,0.08)] rounded-[24px] p-5 md:p-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6 md:gap-[40px] relative">
            
            <div className="flex flex-col gap-[20px]">
              
              <a href="tel:+66958010958" aria-label="โทรติดต่อ N&M18 TRANSPORT เพื่อประเมินราคาและจองคิวรถรับจ้าง" className="group flex items-center gap-[20px] p-[20px] bg-gradient-to-br from-[rgba(255,255,255,0.03)] to-[rgba(255,255,255,0.01)] border border-[rgba(255,255,255,0.08)] rounded-[16px] transition-all duration-400 cursor-pointer hover:-translate-y-[5px] hover:border-[#FF4500] hover:bg-gradient-to-br hover:from-[rgba(255,69,0,0.1)] hover:to-[rgba(255,255,255,0.01)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
                <div className="w-[50px] h-[50px] rounded-[12px] bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-[1.4rem] text-[#FF4500] transition-all duration-400 flex-shrink-0 group-hover:bg-[#FF4500] group-hover:text-white group-hover:shadow-[0_0_20px_#FF4500]">
                  <FaPhoneVolume aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0" />
                </div>
                <div>
                  <h3 className="text-[0.9rem] text-[#94a3b8] font-medium mb-[2px]">โทรด่วน (คุณนัท)</h3>
                  <p className="text-[1.2rem] font-semibold text-white tracking-[0.5px]">095-801-0958</p>
                  <span className="block text-[0.85rem] text-[#94a3b8] font-normal mt-[2px] opacity-70">พร้อมรับสายตลอด 24 ชม.</span>
                </div>
              </a>

              <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=952yyanc" target="_blank" rel="noreferrer" className="group flex items-center gap-[20px] p-[20px] bg-gradient-to-br from-[rgba(255,255,255,0.03)] to-[rgba(255,255,255,0.01)] border border-[rgba(255,255,255,0.08)] rounded-[16px] transition-all duration-400 cursor-pointer hover:-translate-y-[5px] hover:border-[#FF4500] hover:bg-gradient-to-br hover:from-[rgba(255,69,0,0.1)] hover:to-[rgba(255,255,255,0.01)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
                <div className="w-[50px] h-[50px] rounded-[12px] bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-[1.4rem] text-[#FF4500] transition-all duration-400 flex-shrink-0 group-hover:bg-[#FF4500] group-hover:text-white group-hover:shadow-[0_0_20px_#FF4500]">
                  <FaLine aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0" />
                </div>
                <div>
                  <h3 className="text-[0.9rem] text-[#94a3b8] font-medium mb-[2px]">Line Official</h3>
                  <p className="text-[1.2rem] font-semibold text-white tracking-[0.5px]">ID: 0958010958</p>
                  <span className="block text-[0.85rem] text-[#94a3b8] font-normal mt-[2px] opacity-70">ส่งรูปของเพื่อประเมินราคา</span>
                </div>
              </a>

              <a href="https://www.facebook.com/profile.php?id=100085299521050" target="_blank" rel="noreferrer" className="group flex items-center gap-[20px] p-[20px] bg-gradient-to-br from-[rgba(255,255,255,0.03)] to-[rgba(255,255,255,0.01)] border border-[rgba(255,255,255,0.08)] rounded-[16px] transition-all duration-400 cursor-pointer hover:-translate-y-[5px] hover:border-[#FF4500] hover:bg-gradient-to-br hover:from-[rgba(255,69,0,0.1)] hover:to-[rgba(255,255,255,0.01)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
                <div className="w-[50px] h-[50px] rounded-[12px] bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-[1.4rem] text-[#FF4500] transition-all duration-400 flex-shrink-0 group-hover:bg-[#FF4500] group-hover:text-white group-hover:shadow-[0_0_20px_#FF4500]">
                  <FaFacebookF aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0 -messenger" />
                </div>
                <div>
                  <h3 className="text-[0.9rem] text-[#94a3b8] font-medium mb-[2px]">Facebook Page</h3>
                  <p className="text-[1.2rem] font-semibold text-white tracking-[0.5px]">N&M18 TRANSPORT</p>
                  <span className="block text-[0.85rem] text-[#94a3b8] font-normal mt-[2px] opacity-70">ติดตามผลงานอัพเดท</span>
                </div>
              </a>

              <address className="mt-[10px] p-[20px] rounded-[16px] bg-[rgba(0,0,0,0.3)] border border-dashed border-[rgba(255,255,255,0.15)] not-italic">
                <h4 className="text-[#00f2ff] text-[1rem] mb-[8px]">
                  <FaLocationDot aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0" /> ที่ตั้งสำนักงาน
                </h4>
                <p className="text-[0.95rem] text-[#ccc] leading-[1.5]">
                  232/8 หมู่ 3 ซอยมหาโพธิ 15/1<br/>
                  ต.มหาโพธิ อ.เก้าเลี้ยว<br/>
                  จ.นครสวรรค์ 60230
                </p>
              </address>

            </div>

            <div className="flex flex-col h-full w-full">
              <div className="flex-grow w-full min-h-[300px] md:min-h-[350px] rounded-[16px] overflow-hidden border border-[rgba(255,255,255,0.08)] relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3839.8000676442646!2d100.08453007512891!3d15.866999984784232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDUyJzAxLjIiTiAxMDDCsDA1JzEzLjYiRQ!5e0!3m2!1sth!2sth!4v1709628394875!5m2!1sth!2sth" 
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full border-0 grayscale invert-[1] contrast-[0.85] opacity-80"
                  title="แผนที่ตั้งสำนักงาน N&M18 TRANSPORT"
                ></iframe>
              </div>

              <div className="flex flex-col md:flex-row gap-[12px] md:gap-[15px] mt-[25px]">
                <a href="tel:+66958010958" aria-label="โทรติดต่อ N&M18 TRANSPORT เพื่อประเมินราคาและจองคิวรถรับจ้าง" className="inline-flex flex-1 items-center justify-center gap-[10px] py-[12px] rounded-[50px] font-semibold transition-all duration-300 tracking-[0.5px] bg-[#FF4500] text-white shadow-[0_0_15px_rgba(255,69,0,0.4)] hover:shadow-[0_0_25px_rgba(255,69,0,0.6)]">
                  <FaPhone aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0" /> โทรสอบถาม
                </a>
                <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=952yyanc" target="_blank" rel="noreferrer" className="inline-flex flex-1 items-center justify-center gap-[10px] py-[12px] rounded-[50px] font-semibold transition-all duration-300 tracking-[0.5px] bg-[#06C755] text-white shadow-[0_0_15px_rgba(6,199,85,0.4)] hover:shadow-[0_0_25px_rgba(6,199,85,0.6)]">
                  <FaLine aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0" /> แอดไลน์จองคิว
                </a>
              </div>
            </div>

          </div>

          {/* FAQ Section */}
          <section className="mt-[60px] pt-[50px] border-t border-[rgba(255,255,255,0.08)]">
            <h2 className="text-[1.8rem] font-bold text-center mb-[30px] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FF4500]">
              คำถามที่พบบ่อย (FAQ)
            </h2>
            <div className="max-w-[800px] mx-auto flex flex-col gap-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-[rgba(15,28,56,0.6)] border border-[rgba(255,255,255,0.08)] rounded-[16px] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
                  <h3 className="text-[1.1rem] font-semibold text-white mb-2 flex items-start gap-2">
                    <span className="text-[#FF4500] font-bold">Q:</span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-[#94a3b8] text-[0.95rem] leading-[1.6] pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </section>
    </main>
  );
}
