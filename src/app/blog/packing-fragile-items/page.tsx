import { FaBoxesPacking, FaWineGlass, FaTv, FaPenClip, FaShieldHalved, FaArrowRight } from 'react-icons/fa6';
import { FaTruckRampBox, FaPhone, FaLine } from 'react-icons/fa6';
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../../../components/ui/Container';

export const metadata: Metadata = {
  title: "วิธีแพ็คของแตกง่ายก่อนขนย้าย ให้ปลอดภัยและลดความเสียหาย - N&M18 TRANSPORT",
  description: "คู่มือแนะนำเคล็ดลับขั้นตอนการเตรียมอุปกรณ์และการแพ็คสิ่งของเปราะบางแตกง่าย เช่น แก้วน้ำ จานชาม ถ้วยเซรามิก เครื่องใช้ไฟฟ้า ก่อนการขนย้าย เพื่อลดความเสียหาย",
  alternates: {
    canonical: "/blog/packing-fragile-items",
  },
  openGraph: {
    title: "วิธีแพ็คของแตกง่ายก่อนขนย้าย ให้ปลอดภัยและลดความเสียหาย",
    description: "คู่มือแนะนำเคล็ดลับขั้นตอนการเตรียมอุปกรณ์และการแพ็คสิ่งของเปราะบางแตกง่าย เช่น แก้วน้ำ จานชาม ถ้วยเซรามิก เครื่องใช้ไฟฟ้า ก่อนการขนย้าย เพื่อลดความเสียหาย",
    url: "https://www.nm18transport.com/blog/packing-fragile-items",
    images: [{ url: "https://www.nm18transport.com/images/portfolio/S__2531424.jpg" }],
    type: "article",
  },
};

export default function PackingFragileItemsPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": "https://www.nm18transport.com/blog/packing-fragile-items#article",
    "isPartOf": {
      "@id": "https://www.nm18transport.com/#website"
    },
    "mainEntityOfPage": "https://www.nm18transport.com/blog/packing-fragile-items",
    "headline": "วิธีแพ็คของแตกง่ายก่อนขนย้าย ให้ปลอดภัยและลดความเสียหาย",
    "description": "คู่มือแนะนำเคล็ดลับขั้นตอนการเตรียมอุปกรณ์และการแพ็คสิ่งของเปราะบางแตกง่าย เช่น แก้วน้ำ จานชาม ถ้วยเซรามิก เครื่องใช้ไฟฟ้า ก่อนการขนย้าย เพื่อลดความเสียหาย",
    "inLanguage": "th-TH",
    "datePublished": "2026-06-12T11:00:00+07:00",
    "dateModified": "2026-06-12T11:00:00+07:00",
    "author": {
      "@id": "https://www.nm18transport.com/#organization"
    },
    "publisher": {
      "@id": "https://www.nm18transport.com/#organization"
    },
    "image": "https://www.nm18transport.com/images/portfolio/S__2531424.jpg"
  };

  return (
    <main className="bg-[#02040a] min-h-screen text-[#e2e8f0] pb-[70px] md:pb-[40px]" style={{ backgroundImage: "radial-gradient(circle at 50% 0%, #1a2c4e 0%, #02040a 70%)", backgroundAttachment: "fixed" }}>
      <script
        type="application/ld+json"
        id="blog-supporting-jsonld"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c'),
        }}
      />

      <article className="max-w-[850px] mx-auto px-5 pt-[60px] md:pt-[80px]">
        <header className="mb-8 border-b border-white/10 pb-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 text-sm text-text-gray mb-3">
            <span className="bg-orange-lava/10 text-orange-lava px-3 py-1 rounded-full font-semibold">เทคนิคการแพ็ค</span>
            <time dateTime="2026-06-12">12 มิถุนายน 2569</time>
            <span>•</span>
            <span>เขียนโดย N&M18 TRANSPORT</span>
          </div>
          <h1 className="text-[2rem] md:text-[2.8rem] font-extrabold text-white leading-tight mb-4">
            วิธีแพ็คของแตกง่ายก่อนขนย้าย ให้ปลอดภัยและลดความเสียหาย
          </h1>
          <p className="text-text-gray text-base md:text-lg leading-relaxed">
            จาน ชาม แก้วน้ำ โคมไฟระย้า และอุปกรณ์อิเล็กทรอนิกส์ คือสิ่งของที่มีอัตราการชำรุดเสียหายสูงสุดระหว่างการขนย้ายบ้าน บทความนี้สรุปเทคนิคระดับมืออาชีพที่สามารถทำตามได้ง่ายๆ เพื่อปกป้องสิ่งของเหล่านี้ให้ถึงปลายทางในสภาพสมบูรณ์ที่สุด
          </p>
        </header>

        {/* Section 1: Packing Materials */}
        <section className="mb-10">
          <h2 className="text-[1.5rem] md:text-[1.8rem] font-bold text-white mb-4 flex items-center gap-3">
            <FaBoxesPacking aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0 text-orange-lava" /> 1. การเตรียมวัสดุอุปกรณ์กันกระแทกที่เหมาะสม
          </h2>
          <p className="text-[#ccc] leading-relaxed mb-4">
            ห้ามใช้กล่องที่บางเกินไปหรือกล่องเก่าที่โครงสร้างยุบตัวง่าย ควรเลือกใช้:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#ccc]">
            <li><strong>กล่องกระดาษลูกฟูก 5 ชั้น:</strong> มีความหนาพิเศษทนต่อแรงกดทับและความชื้นได้ดี</li>
            <li><strong>พลาสติกกันกระแทก (Bubble Wrap):</strong> แนะนำขนาดปุ่มมาตรฐานและมีความยืดหยุ่น</li>
            <li><strong>กระดาษห่อของสีขาวสะอาด:</strong> หรือกระดาษหนังสือพิมพ์เก่าสำหรับขยำอุดช่องว่าง</li>
            <li><strong>แรปพลาสติกยืด (Stretch Film):</strong> สำหรับรัดรวบสิ่งของชิ้นเล็กและกันฝุ่น</li>
          </ul>
        </section>

        {/* Section 2: Tableware & Glassware packing */}
        <section className="mb-10">
          <h2 className="text-[1.5rem] md:text-[1.8rem] font-bold text-white mb-4 flex items-center gap-3">
            <FaWineGlass aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0 text-orange-lava" /> 2. ขั้นตอนการแพ็คแก้วน้ำและจานชามเซรามิก
          </h2>
          <p className="text-[#ccc] leading-relaxed mb-4">
            แก้วน้ำและจานชามควรแพ็คห่อแยกชิ้น ห้ามวางแก้วซ้อนกันโดยไม่มีวัสดุกั้น:
          </p>
          <ol className="list-decimal pl-6 space-y-3 text-[#ccc]">
            <li><strong>ห่อแยกชิ้นเดี่ยว:</strong> ใช้กระดาษห่อหรือบับเบิ้ลพันรอบชิ้นงานอย่างน้อย 2 รอบ</li>
            <li><strong>จัดวางจานในแนวตั้ง:</strong> การจัดเรียงจานกระเบื้องในแนวตั้งที่ก้นกล่องจะรับแรงกระแทกจากด้านล่างได้ดีกว่าการวางซ้อนแนวนอนราบ</li>
            <li><strong>ยัดช่องว่างในกล่อง:</strong> ใช้กระดาษขยำอุดในแก้วน้ำหรือช่องว่างรอบๆ กล่อง เพื่อป้องกันไม่ให้เกิดการเคลื่อนที่และกระทบกันเอง</li>
          </ol>
        </section>

        {/* Section 3: Electronics Packing */}
        <section className="mb-10">
          <h2 className="text-[1.5rem] md:text-[1.8rem] font-bold text-white mb-4 flex items-center gap-3">
            <FaTv aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0 text-orange-lava" /> 3. วิธีการแพ็คและป้องกันเครื่องใช้ไฟฟ้า
          </h2>
          <p className="text-[#ccc] leading-relaxed mb-4">
            สำหรับทีวีจอแบน มอนิเตอร์คอมพิวเตอร์ หรือไมโครเวฟ ควรห่อจอแสดงผลด้วยแผ่นโฟมบางหรือบับเบิ้ลหลายชั้น จากนั้นซีลทับด้วยเทปยึดสายไฟและอุปกรณ์เสริมให้ติดอยู่กับตัวเครื่องอย่างเป็นระเบียบ หากกล่องเดิมที่ซื้อมายังอยู่ ให้จัดวางเครื่องใช้ไฟฟ้ากลับเข้ากล่องเดิมพร้อมโฟมบล็อกมุม ซึ่งเป็นวิธีป้องกันการตกกระแทกที่มีประสิทธิภาพที่สุด
          </p>
        </section>

        {/* Section 4: Box Labeling */}
        <section className="mb-10">
          <h2 className="text-[1.5rem] md:text-[1.8rem] font-bold text-white mb-4 flex items-center gap-3">
            <FaPenClip aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0 text-orange-lava" /> 4. เทคนิคการเขียนระบุหน้ากล่องและติดป้ายเตือน
          </h2>
          <p className="text-[#ccc] leading-relaxed mb-4">
            ใช้ปากกาเคมีหัวใหญ่เขียนคำว่า <strong>&ldquo;ระวังแตก&rdquo; (FRAGILE)</strong> หรือติดสติกเกอร์สีสะท้อนแสงที่เด่นชัดไว้ทุกด้านของกล่อง และเขียนลูกศรชี้ขึ้นแสดงทิศทางที่ต้องจัดตั้งกล่อง (THIS SIDE UP) เพื่อให้ทีมงานขนย้ายตระหนักและระมัดระวังในการจัดเรียงและยกขนกล่องใบนั้นเป็นพิเศษ
          </p>
        </section>

        {/* Section 5: Arrangement on Truck */}
        <section className="mb-10">
          <h2 className="text-[1.5rem] md:text-[1.8rem] font-bold text-white mb-4 flex items-center gap-3">
            <FaTruckRampBox aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0 text-orange-lava" /> 5. การจัดเรียงกล่องของแตกง่ายบนรถขนส่ง
          </h2>
          <p className="text-[#ccc] leading-relaxed mb-4">
            ในขั้นตอนการเรียงของขึ้นรถขนส่ง ห้ามนำกล่องที่บรรจุแก้วหรือของแตกง่ายไปไว้ด้านล่างสุดของกองกล่อง เนื่องจากน้ำหนักของกล่องอื่นๆ ด้านบนจะกดทับจนกล่องบุบและสร้างความเสียหายได้ ควรวางกล่องประเภทนี้ไว้แถวบนสุด และจัดยึดด้วยสายรัดเพื่อป้องกันกล่องล้มเอียงขณะเลี้ยวโค้ง
          </p>
        </section>

        {/* Section 6: Damage Warranty */}
        <section className="mb-10">
          <h2 className="text-[1.5rem] md:text-[1.8rem] font-bold text-white mb-4 flex items-center gap-3">
            <FaShieldHalved aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0 text-orange-lava" /> 6. ประกันความเสียหายจากการขนย้าย
          </h2>
          <p className="text-[#ccc] leading-relaxed mb-4">
            เพื่อความสบายใจสูงสุด ควรเลือกใช้ผู้ให้บริการรถรับจ้างที่มีการรับประกันความชำรุดเสียหายจากการขนส่ง ที่ N&M18 TRANSPORT เรามีประกันความเสียหายและดูแลรับผิดชอบความปลอดภัยของทรัพย์สินตลอดการเดินทางให้แก่ลูกค้าทุกท่านตามข้อตกลงที่ตกลงกันไว้
          </p>
        </section>

        {/* Back Link to Pillar Page */}
        <section className="mb-10 p-6 bg-gradient-to-br from-orange-lava/10 to-transparent border border-orange-lava/20 rounded-2xl">
          <h4 className="text-white font-bold text-lg mb-2">บทความที่เกี่ยวข้องแนะนำ:</h4>
          <p className="text-[#ccc] text-sm mb-4">
            อ่านคู่มือวางแผนการขนย้ายที่ครอบคลุมทุกด้านเพื่อให้การย้ายบ้าน คอนโด หรือหอพักของคุณผ่านพ้นไปได้อย่างราบรื่นและเป็นระบบ:
          </p>
          <Link 
            href="/blog/ultimate-moving-guide" 
            className="text-orange-lava hover:text-orange-glow font-bold underline inline-flex items-center gap-1.5 transition-colors"
          >
            คู่มือย้ายบ้าน ย้ายคอนโด และย้ายหอพัก ฉบับครบถ้วน วางแผนขนย้ายปลอดภัย <FaArrowRight aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0 text-sm" />
          </Link>
        </section>

        {/* Related Services Links */}
        <div className="border-t border-white/10 pt-8 mt-12 mb-10">
          <h4 className="text-white font-bold text-lg mb-3">บริการของเรา:</h4>
          <p className="text-[#ccc] mb-4">
            N&M18 TRANSPORT ยินดีให้บริการรถกระบะ รถ 4 ล้อใหญ่ ตู้ทึบ รับขนย้ายสิ่งของทั่วประเทศ ปลอดภัยหายห่วง:
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link 
              href="/service/moving" 
              className="px-5 py-2.5 rounded-lg bg-navy-primary border border-white/10 hover:border-orange-lava hover:text-orange-lava transition-all text-sm font-semibold"
            >
              บริการรถรับจ้างย้ายบ้าน/คอนโด
            </Link>
            <Link 
              href="/contact" 
              className="px-5 py-2.5 rounded-lg bg-navy-primary border border-white/10 hover:border-orange-lava hover:text-orange-lava transition-all text-sm font-semibold"
            >
              ติดต่อสอบถาม/จองคิวรถ
            </Link>
          </div>
        </div>

        {/* CTA section */}
        <footer className="bg-gradient-to-br from-[#0f1c38] to-navy-dark border border-orange-lava/30 p-6 md:p-8 rounded-2xl text-center shadow-lg relative overflow-hidden">
          <p className="text-white text-[1.1rem] mb-2">สอบถามราคาบริการรถขนย้ายของแตกง่าย ปลอดภัย มั่นใจได้!</p>
          <p className="text-[#ccc] text-sm mb-6">บริษัท เอ็นแอนด์เอ็ม 18 ทรานสปอร์ต จำกัด ยินดีให้บริการประเมินราคาก่อนเริ่มงานฟรี</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="tel:0958010958" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold bg-orange-lava text-white hover:bg-orange-glow transition-all shadow-neon-orange"
            >
              <FaPhone aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0" /> โทร 095-801-0958
            </Link>
            <a 
              href="https://liff.line.me/1645278921-kWRPP32q/?accountId=952yyanc" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold bg-[#06C755] text-white hover:bg-[#05a84a] transition-all"
            >
              <FaLine aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0" /> แอดไลน์ประเมินราคา (LINE)
            </a>
          </div>
        </footer>
      </article>
    </main>
  );
}
