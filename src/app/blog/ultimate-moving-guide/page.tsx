import { FaCalendarCheck, FaListCheck, FaBoxesStacked, FaTruck, FaTriangleExclamation, FaArrowRight, FaFileInvoiceDollar, FaCircleXmark } from 'react-icons/fa6';
import { FaClock, FaBuilding, FaBoxOpen, FaMotorcycle, FaPhone, FaLine } from 'react-icons/fa6';
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../../../components/ui/Container';

export const metadata: Metadata = {
  title: "คู่มือย้ายบ้าน ย้ายคอนโด และย้ายหอพัก ฉบับครบถ้วน วางแผนขนย้ายปลอดภัย - N&M18 TRANSPORT",
  description: "เจาะลึกขั้นตอนการวางแผนย้ายบ้าน ย้ายคอนโด ย้ายหอพัก วิธีเตรียมตัว แพ็คของ และเลือกประเภทรถขนของรับจ้างให้ปลอดภัย ประหยัดงบ และคุ้มค่าที่สุด",
  alternates: {
    canonical: "/blog/ultimate-moving-guide",
  },
  openGraph: {
    title: "คู่มือย้ายบ้าน ย้ายคอนโด และย้ายหอพัก ฉบับครบถ้วน วางแผนขนย้ายปลอดภัย",
    description: "เจาะลึกขั้นตอนการวางแผนย้ายบ้าน ย้ายคอนโด ย้ายหอพัก วิธีเตรียมตัว แพ็คของ และเลือกประเภทรถขนของรับจ้างให้ปลอดภัย ประหยัดงบ และคุ้มค่าที่สุด",
    url: "https://www.nm18transport.com/blog/ultimate-moving-guide",
    images: [{ url: "https://www.nm18transport.com/images/portfolio/S__2531424.jpg" }],
    type: "article",
  },
};

export default function UltimateMovingGuidePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": "https://www.nm18transport.com/blog/ultimate-moving-guide#article",
    "isPartOf": {
      "@id": "https://www.nm18transport.com/#website"
    },
    "mainEntityOfPage": "https://www.nm18transport.com/blog/ultimate-moving-guide",
    "headline": "คู่มือย้ายบ้าน ย้ายคอนโด และย้ายหอพัก ฉบับครบถ้วน วางแผนขนย้ายปลอดภัย",
    "description": "เจาะลึกขั้นตอนการวางแผนย้ายบ้าน ย้ายคอนโด ย้ายหอพัก วิธีเตรียมตัว แพ็คของ และเลือกประเภทรถขนของรับจ้างให้ปลอดภัย ประหยัดงบ และคุ้มค่าที่สุด",
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
        id="blog-pillar-jsonld"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c'),
        }}
      />

      <article className="max-w-[850px] mx-auto px-5 pt-[60px] md:pt-[80px]">
        <header className="mb-8 border-b border-white/10 pb-6 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 text-sm text-text-gray mb-3">
            <span className="bg-orange-lava/10 text-orange-lava px-3 py-1 rounded-full font-semibold">คู่มือขนย้าย</span>
            <time dateTime="2026-06-12">12 มิถุนายน 2569</time>
            <span>•</span>
            <span>เขียนโดย N&M18 TRANSPORT</span>
          </div>
          <h1 className="text-[2rem] md:text-[2.8rem] font-extrabold text-white leading-tight mb-4">
            คู่มือย้ายบ้าน ย้ายคอนโด และย้ายหอพัก ฉบับครบถ้วน วางแผนขนย้ายปลอดภัย
          </h1>
          <p className="text-text-gray text-base md:text-lg leading-relaxed">
            การขนย้ายที่อยู่อาศัยเป็นเรื่องใหญ่ที่สร้างความกังวลใจให้หลายๆ คน คู่มือฉบับนี้รวบรวมข้อมูลทุกแง่มุม ตั้งแต่ขั้นตอนการแพ็ค การเลือกพาหนะ ตลอดจนรายการตรวจสอบสำคัญ เพื่อให้คุณพร้อมลุยและประหยัดเวลาอย่างเป็นระบบ
          </p>
        </header>

        {/* Section 1: Why Advance Planning Matters */}
        <section className="mb-10">
          <h2 className="text-[1.5rem] md:text-[1.8rem] font-bold text-white mb-4 flex items-center gap-3">
            <FaCalendarCheck aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0 text-orange-lava" /> 1. ทำไมการวางแผนล่วงหน้าถึงสำคัญ?
          </h2>
          <p className="text-[#ccc] leading-relaxed mb-4">
            ความโกลาหลและความเสียหายระหว่างการย้ายที่อยู่อาศัย มักเกิดจากการไม่ได้วางแผนล่วงหน้า การจัดลำดับสิ่งของผิดพลาด และการรีบเร่งในวันย้ายจริง การเตรียมตัวล่วงหน้าอย่างน้อย 1-2 สัปดาห์ จะช่วยให้คุณคัดแยกสิ่งของได้สมบูรณ์ ไม่ลืมของสำคัญ และเลือกจองคิวบริการรถรับจ้างได้ในช่วงเวลาที่คุณสะดวกที่สุด
          </p>
        </section>

        {/* Section 2: Moving Checklist */}
        <section className="mb-10">
          <h2 className="text-[1.5rem] md:text-[1.8rem] font-bold text-white mb-4 flex items-center gap-3">
            <FaListCheck aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0 text-orange-lava" /> 2. รายการตรวจสอบก่อนการขนย้าย (Moving Checklist)
          </h2>
          <p className="text-[#ccc] leading-relaxed mb-4">
            เพื่อให้การดำเนินการเป็นไปอย่างเป็นระบบ ควรจัดทำเช็คลิสต์ดังนี้:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#ccc]">
            <li><strong>คัดแยกสิ่งของ:</strong> คัดทิ้งสิ่งของที่ชำรุดหรือไม่ต้องการใช้งานแล้ว เพื่อลดปริมาณสัมภาระและลดขนาดรถที่ต้องการจ้าง</li>
            <li><strong>จัดเตรียมอุปกรณ์แพ็คเกจ:</strong> กล่องลูกฟูกหนาพิเศษ เทปกาว บับเบิ้ลกันกระแทก แรปพลาสติก และปากกาเคมี</li>
            <li><strong>แจ้งย้ายที่อยู่กับผู้ให้บริการต่างๆ:</strong> เช่น บริการอินเทอร์เน็ต น้ำประปา ไฟฟ้า และแจ้งเปลี่ยนที่จัดส่งเอกสารสำคัญ</li>
          </ul>
        </section>

        {/* Section 3: Choosing Moving Date/Time */}
        <section className="mb-10">
          <h2 className="text-[1.5rem] md:text-[1.8rem] font-bold text-white mb-4 flex items-center gap-3">
            <FaClock aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0 text-orange-lava" /> 3. การเลือกวันและเวลาในการขนย้าย
          </h2>
          <p className="text-[#ccc] leading-relaxed mb-4">
            วันหยุดสุดสัปดาห์ (เสาร์-อาทิตย์) หรือช่วงสิ้นเดือน มักเป็นช่วงเวลาที่การจองรถรับจ้างแน่นที่สุด หากคุณสามารถเลือกวันธรรมดาหรือช่วงกลางเดือนได้ จะช่วยให้การนัดหมายมีความยืดหยุ่นและหลีกเลี่ยงปัญหารถติดได้ดีกว่า นอกจากนี้ ควรเลี่ยงเวลาเร่งด่วนในกรุงเทพฯ และปริมณฑล (07:00 - 09:00 น. และ 17:00 - 19:00 น.) เพื่อการเดินทางที่รวดเร็ว
          </p>
        </section>

        {/* Section 4: Belongings Estimation */}
        <section className="mb-10">
          <h2 className="text-[1.5rem] md:text-[1.8rem] font-bold text-white mb-4 flex items-center gap-3">
            <FaBoxesStacked aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0 text-orange-lava" /> 4. การประเมินปริมาณและประเภทสิ่งของ
          </h2>
          <p className="text-[#ccc] leading-relaxed mb-4">
            ก่อนจองรถ ควรจดบันทึกของชิ้นใหญ่ที่มีมิติชัดเจน (เช่น เตียง ตู้เสื้อผ้า ตู้เย็น โซฟา) เพื่อแจ้งบริษัทขนย้ายได้อย่างแม่นยำ ของส่วนใหญ่ควรจัดลงกล่องกระดาษเพื่อความเป็นระเบียบและประหยัดพื้นที่ในการจัดเรียงบนรถ การคำนวณจำนวนสัมภาระอย่างถูกต้องจะช่วยป้องกับการใช้รถขนาดเล็กเกินไปจนต้องวิ่งหลายเที่ยว ซึ่งจะทำให้เสียค่าใช้จ่ายซ้ำซ้อน
          </p>
        </section>

        {/* Section 5: Choosing Vehicle Type */}
        <section className="mb-10">
          <h2 className="text-[1.5rem] md:text-[1.8rem] font-bold text-white mb-4 flex items-center gap-3">
            <FaTruck aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0 -moving text-orange-lava" /> 5. วิธีเลือกประเภทรถขนของให้เหมาะสม
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
            <div className="bg-white/5 border border-white/10 p-5 rounded-xl text-center">
              <h3 className="text-orange-lava font-bold text-lg mb-2">รถกระบะตู้ทึบ</h3>
              <p className="text-sm text-text-gray">เหมาะสำหรับการย้ายหอพัก ย้ายคอนโด หรือย้ายห้องพักสัมภาระไม่เกิน 1-2 ตู้/เตียง และกล่องบรรจุภัณฑ์ทั่วไป ตู้ทึบช่วยกันแดดกันฝนได้ 100%</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-5 rounded-xl text-center">
              <h3 className="text-orange-lava font-bold text-lg mb-2">รถ 4 ล้อใหญ่</h3>
              <p className="text-sm text-text-gray">มีขนาดใหญ่กว่ารถกระบะ เหมาะสำหรับการย้ายทาวน์โฮม คอนโดขนาดใหญ่ หรือบ้านที่มีของชิ้นใหญ่ เช่น ตู้เย็นขนาดใหญ่ ที่นอน 6 ฟุต หลายหลัง</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-5 rounded-xl text-center">
              <h3 className="text-orange-lava font-bold text-lg mb-2">รถ 6 ล้อรับจ้าง</h3>
              <p className="text-sm text-text-gray">เหมาะสำหรับการย้ายบ้านเดี่ยวทั้งหลัง ย้ายสำนักงาน หรือขนส่งสินค้าล็อตใหญ่ที่ต้องการพื้นที่การบรรทุกสูงเป็นพิเศษ</p>
            </div>
          </div>
        </section>

        {/* Section 6: Condo/Estate Rules */}
        <section className="mb-10">
          <h2 className="text-[1.5rem] md:text-[1.8rem] font-bold text-white mb-4 flex items-center gap-3">
            <FaBuilding aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0 text-orange-lava" /> 6. ข้อกำหนดนิติบุคคลของหอพัก คอนโด และหมู่บ้านจัดสรร
          </h2>
          <p className="text-[#ccc] leading-relaxed mb-4">
            หากคุณพักอาศัยอยู่ในคอนโดมิเนียมหรือหมู่บ้านจัดสรร ควรติดต่อแจ้งนิติบุคคลล่วงหน้าเพื่อ:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#ccc]">
            <li>จองสิทธิ์ในการใช้ลิฟต์ขนของ</li>
            <li>ทำเรื่องขอรับเงินมัดจำการใช้ลิฟต์หรือพื้นที่ส่วนกลาง (ถ้ามี)</li>
            <li>ตรวจสอบข้อกำหนดความสูงและข้อจำกัดของพื้นที่จอดรถขนของ เพื่อให้มั่นใจว่ารถตู้ทึบสามารถเข้าจอดในช่องจอดใต้อาคารได้</li>
          </ul>
        </section>

        {/* Section 7: Packing Basics */}
        <section className="mb-10">
          <h2 className="text-[1.5rem] md:text-[1.8rem] font-bold text-white mb-4 flex items-center gap-3">
            <FaBoxOpen aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0 text-orange-lava" /> 7. พื้นฐานการแพ็คของอย่างถูกวิธี
          </h2>
          <p className="text-[#ccc] leading-relaxed mb-4">
            จัดวางของที่มีน้ำหนักมากลงที่ก้นกล่อง และของที่มีน้ำหนักเบาไว้ด้านบน ปิดกล่องและซีลเทปกาวให้แน่นหนาทั้งด้านบนและด้านล่าง การพันฟิล์มยืดรอบเฟอร์นิเจอร์ชิ้นใหญ่จะช่วยป้องกันไม่ให้หน้าลิ้นชักหรือประตูตู้เปิดออกระหว่างการเคลื่อนย้ายและป้องกันฝุ่นละออง
          </p>
        </section>

        {/* Section 8: Fragile Items Warning & Link */}
        <section className="mb-10 p-6 bg-gradient-to-br from-orange-lava/10 to-transparent border border-orange-lava/20 rounded-2xl">
          <h2 className="text-[1.3rem] md:text-[1.5rem] font-bold text-white mb-3 flex items-center gap-2">
            <FaTriangleExclamation aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0 text-orange-lava" /> ข้อควรระวังในการย้ายของแตกง่าย
          </h2>
          <p className="text-[#ccc] leading-relaxed mb-4">
            ของเปราะบางจำพวกแก้วน้ำ จานชาม ถ้วยเซรามิก และเครื่องใช้ไฟฟ้า ต้องการการห่อหุ้มและการจัดวางเป็นพิเศษเพื่อหลีกเลี่ยงความเสียหายระหว่างการเคลื่อนย้ายบนรถขนส่ง
          </p>
          <p className="text-white font-medium mb-2">
            อ่านคำแนะนำทีละขั้นตอนฉบับเต็มได้ที่บทความสนับสนุนของเรา:
          </p>
          <Link 
            href="/blog/packing-fragile-items" 
            className="text-orange-lava hover:text-orange-glow font-bold underline inline-flex items-center gap-1.5 transition-colors"
          >
            วิธีแพ็คของแตกง่ายก่อนขนย้าย ให้ปลอดภัยและลดความเสียหาย <FaArrowRight aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0 text-sm" />
          </Link>
        </section>

        {/* Section 9: Motorcycle & Special Items */}
        <section className="mb-10">
          <h2 className="text-[1.5rem] md:text-[1.8rem] font-bold text-white mb-4 flex items-center gap-3">
            <FaMotorcycle aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0 text-orange-lava" /> 9. การขนย้ายรถจักรยานยนต์และของชิ้นใหญ่
          </h2>
          <p className="text-[#ccc] leading-relaxed mb-4">
            สำหรับรถมอเตอร์ไซค์หรือ Big Bike จะต้องใช้อุปกรณ์ยึดจับที่แน่นหนา เช่น สายรัดแบบ Webbing Strap และตัวบล็อกล้อ เพื่อไม่ให้รถล้มระหว่างเลี้ยวโค้งหรือเบรกกะทันหัน N&M18 TRANSPORT มีบริการขนย้ายรถจักรยานยนต์เฉพาะทาง สามารถเข้าไปดูรายละเอียดเพิ่มเติมได้ที่หน้า <Link href="/service/moto" className="text-orange-lava hover:underline font-semibold">บริการขนส่งมอเตอร์ไซค์</Link> ของเรา
          </p>
        </section>

        {/* Section 10: Information for Quotation */}
        <section className="mb-10">
          <h2 className="text-[1.5rem] md:text-[1.8rem] font-bold text-white mb-4 flex items-center gap-3">
            <FaFileInvoiceDollar aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0 text-orange-lava" /> 10. ข้อมูลที่ต้องเตรียมสำหรับเสนอราคา
          </h2>
          <p className="text-[#ccc] leading-relaxed mb-4">
            เมื่อต้องการติดต่อใช้บริการรถขนของ เพื่อให้ได้ราคาที่แม่นยำและรวดเร็ว ควรเตรียมข้อมูลดังนี้:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#ccc]">
            <li><strong>สถานที่ต้นทางและปลายทางที่ชัดเจน:</strong> ระบุแขวง/เขต หรืออำเภอ/จังหวัด เพื่อนำมาคำนวณระยะทางที่แน่นอน</li>
            <li><strong>ประเภทของที่จะขนย้าย:</strong> ถ่ายรูปเฟอร์นิเจอร์ชิ้นใหญ่ส่งให้ทีมงานประเมินขนาดรถ</li>
            <li><strong>รายละเอียดการยกของ:</strong> เดินขึ้นบันไดสูง มีลิฟต์ขนของระยะห่างจอดรถไกลหรือไม่ เพื่อเตรียมจำนวนทีมงานยกของให้เหมาะสม</li>
          </ul>
        </section>

        {/* Section 11: Common Mistakes */}
        <section className="mb-10">
          <h2 className="text-[1.5rem] md:text-[1.8rem] font-bold text-white mb-4 flex items-center gap-3">
            <FaCircleXmark aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0 text-orange-lava" /> 11. ข้อผิดพลาดที่ควรหลีกเลี่ยง
          </h2>
          <p className="text-[#ccc] leading-relaxed mb-4">
            หลีกเลี่ยงการใช้กล่องเก่าที่นิ่มหรือชำรุดเนื่องจากเสี่ยงต่อการแตกทะลุก้นกล่อง และไม่ควรใส่ของมีค่าน้ำหนักมาก (เช่น ทองคำ เอกสารสิทธิ์ เงินสด เครื่องประดับ) ไปกับรถขนของ ให้แยกพกพาติดตัวไว้เสมอเพื่อความปลอดภัยสูงสุด
          </p>
        </section>

        {/* Related Services Links */}
        <div className="border-t border-white/10 pt-8 mt-12 mb-10">
          <h4 className="text-white font-bold text-lg mb-3">บริการขนย้ายที่เกี่ยวข้องของเรา:</h4>
          <p className="text-[#ccc] mb-4">
            หากคุณไม่สะดวกจัดเตรียมแพ็คเกจหรือยกของด้วยตนเอง N&M18 TRANSPORT ยินดีให้บริการอย่างมืออาชีพ ดูรายละเอียดเพิ่มเติมได้ที่:
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link 
              href="/service/moving" 
              className="px-5 py-2.5 rounded-lg bg-navy-primary border border-white/10 hover:border-orange-lava hover:text-orange-lava transition-all text-sm font-semibold"
            >
              บริการรถรับจ้างย้ายบ้าน/คอนโด
            </Link>
            <Link 
              href="/service/moto" 
              className="px-5 py-2.5 rounded-lg bg-navy-primary border border-white/10 hover:border-orange-lava hover:text-orange-lava transition-all text-sm font-semibold"
            >
              บริการขนส่งมอเตอร์ไซค์
            </Link>
          </div>
        </div>

        {/* CTA section */}
        <footer className="bg-gradient-to-br from-[#0f1c38] to-navy-dark border border-orange-lava/30 p-6 md:p-8 rounded-2xl text-center shadow-lg relative overflow-hidden">
          <p className="text-white text-[1.1rem] mb-2">จองบริการรถรับจ้างขนของล่วงหน้า ได้ราคาพิเศษ!</p>
          <p className="text-[#ccc] text-sm mb-6">บริษัท เอ็นแอนด์เอ็ม 18 ทรานสปอร์ต จำกัด ยินดีประเมินราคาให้ฟรี ไม่มีค่าใช้จ่ายแฝง</p>
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
              <FaLine aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0" /> แชทประเมินราคาผ่าน LINE
            </a>
          </div>
        </footer>
      </article>
    </main>
  );
}
