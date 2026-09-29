import { 
  FaMoneyBillWave, 
  FaMapLocationDot, 
  FaUserShield, 
  FaImages, 
  FaFacebookF, 
  FaTag, 
  FaCheck, 
  FaXmark, 
  FaShieldCat, 
  FaQuestion, 
  FaTruckRampBox, 
  FaUmbrella, 
  FaHeadset, 
  FaCertificate, 
  FaCalculator, 
  FaLine, 
  FaPhoneVolume, 
  FaRoute, 
  FaHouseCircleCheck, 
  FaMotorcycle, 
  FaBoxOpen, 
  FaPaw 
} from 'react-icons/fa6';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { HeroCarousel } from '../components/home/HeroCarousel';
import { ServiceHighlightBanner } from '../components/home/ServiceHighlightBanner';
import { CTASection } from '../components/sections/CTASection';
import { ServiceCard } from '../components/cards/ServiceCard';
import { Container } from '../components/ui/Container';
import { FleetAuthoritySection } from '../components/home/FleetAuthoritySection';
import { LazyReviewsSection } from '../components/performance/LazyBelowFoldSections';
import dynamic from 'next/dynamic';
import { ProgrammaticHub } from '../components/seo/ProgrammaticHub';

const IndexFAQ = dynamic(() => import('./IndexFAQ').then(m => m.IndexFAQ), { ssr: true });

export const metadata: Metadata = {
  title: "N&M18 TRANSPORT - รถกระบะตู้ทึบ/รถ 4 ล้อใหญ่รับจ้างขนของ ย้ายบ้าน เริ่ม 1,000.-",
  description: "N&M18 TRANSPORT บริการรถกระบะตู้ทึบรับจ้าง รถ 4 ล้อใหญ่ย้ายบ้าน ย้ายหอพัก คอนโด กรุงเทพ-ปริมณฑลและทั่วไทย ราคาถูก ปลอดภัย เริ่มต้น 1,000 บาท โทร 095-801-0958",
  alternates: {
    canonical: "https://www.nm18transport.com/",
  },
  openGraph: {
    title: "N&M18 TRANSPORT - รถกระบะตู้ทึบ/รถ 4 ล้อใหญ่รับจ้างขนของ ย้ายบ้าน",
    description: "บริการรถกระบะตู้ทึบรับจ้าง รถ 4 ล้อใหญ่ย้ายบ้าน ย้ายหอพัก คอนโด กรุงเทพ-ปริมณฑลและทั่วไทย โทร 095-801-0958",
    url: "https://www.nm18transport.com/",
    siteName: "N&M18 TRANSPORT",
    locale: "th_TH",
    type: "website",
    images: [
      {
        url: "https://www.nm18transport.com/images/logos/logo-nm18.png",
        width: 1200,
        height: 630,
        alt: "N&M18 TRANSPORT บริการรถกระบะรับจ้างขนของ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "N&M18 TRANSPORT - รถกระบะตู้ทึบ/รถ 4 ล้อใหญ่รับจ้างขนของ ย้ายบ้าน",
    description: "บริการรถกระบะตู้ทึบรับจ้าง รถ 4 ล้อใหญ่ย้ายบ้าน ย้ายหอพัก คอนโด กรุงเทพ-ปริมณฑลและทั่วไทย โทร 095-801-0958",
    images: ["https://www.nm18transport.com/images/logos/logo-nm18.png"],
  },
};

export default function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "หน้าแรก",
          "item": "https://www.nm18transport.com"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "คิดค่าบริการขนส่งอย่างไร?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ราคาขึ้นอยู่กับ ระยะทาง + ประเภทรถ + จำนวนคนยกของ ครับ แนะนำให้ทักแชทหรือโทรแจ้งต้นทาง-ปลายทาง เพื่อให้เราประเมินราคาเหมาจ่ายที่คุ้มที่สุดให้ฟรีครับ"
          }
        },
        {
          "@type": "Question",
          "name": "สินค้าจะปลอดภัยไหม มีประกันหรือเปล่า?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ปลอดภัยแน่นอนครับ รถทุกคันเป็นตู้ทึบอลูมิเนียมกันน้ำฝน 100% มีอุปกรณ์เซฟตี้รัดของแน่นหนา และมีประกันความเสียหายกรณีเกิดอุบัติเหตุตามเงื่อนไขที่ตกลงกันครับ"
          }
        },
        {
          "@type": "Question",
          "name": "มีบริการช่วยยกของด้วยไหม?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "มีครับ! เรามีทีมงานมืออาชีพพร้อมช่วยยกของ จัดเรียง และดูแลสินค้าของท่านอย่างระมัดระวังตลอดการขนย้ายครับ"
          }
        },
        {
          "@type": "Question",
          "name": "ต้องจองคิวล่วงหน้ากี่วัน?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "จองล่วงหน้า 1-3 วันเพื่อให้ได้เวลาที่ต้องการที่สุด หรือกรณีงานด่วนสามารถติดต่อสอบถามคิวรถว่างในแต่ละวันได้ทันทีตลอด 24 ชม. ครับ"
          }
        },
        {
          "@type": "Question",
          "name": "รถกระบะตู้ทึบ บรรทุกของได้เยอะแค่ไหน?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ตู้ทึบสูง 2.10 เมตร สามารถบรรทุกตู้เย็นขนาดใหญ่ ที่นอน 6 ฟุต เครื่องซักผ้า และกล่องพัสดุได้เป็นจำนวนมาก เหมาะมากสำหรับการย้ายห้องพัก หอพัก และคอนโดครับ"
          }
        }
      ]
    }
  ];

  return (
    <main className="w-full bg-[#050a14] min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        id="homepage-jsonld"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      
      {/* 1. Auto-Sliding Hero Carousel */}
      <HeroCarousel />

      {/* 2. Value Props / Feature Highlights Grid */}
      <section className="relative z-10 pb-12 -mt-10 sm:-mt-12 w-full overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            <div className="glass-card glass-card-hover p-6 rounded-2xl flex items-start gap-4">
              <div className="w-14 h-14 bg-orange-lava/10 rounded-2xl flex items-center justify-center text-2xl text-orange-lava border border-orange-lava/30 shrink-0">
                <FaMoneyBillWave aria-hidden="true" focusable="false" className="shrink-0" />
              </div>
              <div>
                <h2 className="text-white text-lg font-bold mb-1.5">ราคาจริงใจ ไม่มีบวกเพิ่ม</h2>
                <p className="text-text-gray text-sm leading-relaxed">ตกลงราคาก่อนเริ่มงาน จบที่เท่าไหร่จ่ายเท่านั้น ไม่มีการเรียกเก็บค่าใช้จ่ายแฝงหน้างาน สบายใจ 100%</p>
              </div>
            </div>
            
            <div className="glass-card glass-card-hover p-6 rounded-2xl flex items-start gap-4">
              <div className="w-14 h-14 bg-orange-lava/10 rounded-2xl flex items-center justify-center text-2xl text-orange-lava border border-orange-lava/30 shrink-0">
                <FaMapLocationDot aria-hidden="true" focusable="false" className="shrink-0" />
              </div>
              <div>
                <h2 className="text-white text-lg font-bold mb-1.5">ติดตามสถานะได้ตลอด</h2>
                <p className="text-text-gray text-sm leading-relaxed">รู้ความเคลื่อนไหวตลอดเส้นทาง แจ้งพิกัดชัดเจน สินค้าถึงมือผู้รับตรงเวลา ปลอดภัย ไร้กังวล</p>
              </div>
            </div>
            
            <div className="glass-card glass-card-hover p-6 rounded-2xl flex items-start gap-4">
              <div className="w-14 h-14 bg-orange-lava/10 rounded-2xl flex items-center justify-center text-2xl text-orange-lava border border-orange-lava/30 shrink-0">
                <FaUserShield aria-hidden="true" focusable="false" className="shrink-0" />
              </div>
              <div>
                <h2 className="text-white text-lg font-bold mb-1.5">ทีมงานมืออาชีพ</h2>
                <p className="text-text-gray text-sm leading-relaxed">พนักงานสุภาพ ผ่านการฝึกอบรมการแพ็คและยกของ ดูแลสินค้าของคุณอย่างทะนุถนอมเหมือนของตัวเอง</p>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 2.5 Service Highlight Banner */}
      <ServiceHighlightBanner />

      {/* 3. Core Services Section */}
      <section className="relative py-24 bg-[#050A14] overflow-hidden w-full" id="services">
        {/* Ambient Color Lighting (Depth & Brand Glow) */}
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] max-w-[800px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none z-0" 
          aria-hidden="true" 
        />
        <div 
          className="absolute bottom-10 right-0 w-[85vw] max-w-[600px] h-[300px] bg-[#FF4500]/10 rounded-full blur-[130px] pointer-events-none z-0" 
          aria-hidden="true" 
        />

        {/* Background Decorative Graphic */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
          <div className="relative w-full max-w-[1400px] h-full min-h-[550px] opacity-25 lg:opacity-30">
            <Image
              src="/nm18backg.png"
              alt="แผนที่เส้นทางโลจิสติกส์ N&M18 TRANSPORT ขนส่งทั่วไทย"
              fill
              loading="lazy"
              sizes="(max-width: 1280px) 100vw, 1400px"
              className="object-contain object-center scale-100 lg:scale-105"
            />
          </div>
        </div>

        <Container className="relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
              บริการรถกระบะรับจ้าง <span className="bg-gradient-to-r from-orange-lava via-orange-glow to-amber-400 bg-clip-text text-transparent">ยอดนิยม</span>
            </h2>
            <p className="text-text-gray max-w-2xl mx-auto text-base md:text-lg">
              ตอบโจทย์ทุกการขนย้าย ด้วยรถกระบะตู้ทึบมาตรฐานสูง กันน้ำ 100% พร้อมบริการทั่วไทย
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            
            <ServiceCard
              title="ขนย้ายบ้าน / ย้ายหอพัก"
              description="ขนย้ายเฟอร์นิเจอร์ ตู้เย็น เครื่องซักผ้า รถตู้ทึบกันฝน 100% มีทีมงานช่วยยกของ จัดเรียงเข้าที่เรียบร้อย"
              icon={FaBoxOpen}
              href="/service/moving"
              imageSrc="/NM18-house-condo-moving-service.webp"
              imageAlt="บริการย้ายบ้าน ย้ายหอ และย้ายคอนโดด้วยรถกระบะตู้ทึบ N&M18 TRANSPORT"
              priceBadge="เริ่มต้น 1,000.-"
            />

            <ServiceCard
              title="รับส่งมอเตอร์ไซค์ / บิ๊กไบค์"
              description="มีทางลาดขึ้น-ลง อุปกรณ์ล็อคล้อ Wheel Chock สายรัด Soft Strap มัดแน่นหนา ไม่ล้ม ไม่เป็นรอย ส่งถึงหน้าบ้าน"
              icon={FaMotorcycle}
              href="/service/moto"
              imageSrc="/NM18-motorcycle-bigbike-transport.webp"
              imageAlt="บริการรับส่งมอเตอร์ไซค์และบิ๊กไบค์ด้วยรถกระบะตู้ทึบ N&M18 TRANSPORT"
              priceBadge="ดูแลพิเศษ 100%"
            />

            <ServiceCard
              title="รับส่งสัตว์เลี้ยง Pet Transport"
              description="เดินทางปลอดภัยด้วยรถกระบะตู้ทึบดูแลอุณหภูมิ ถ่ายรูปและคลิปวิดีโออัปเดตตลอดทาง ดูแลอย่างทะนุถนอม"
              icon={FaPaw}
              href="/service/pets"
              imageSrc="/NM18-freight-cargo-chartered-truck.webp"
              imageAlt="บริการรับส่งสัตว์เลี้ยงและสินค้าเหมาคัน N&M18 TRANSPORT"
              priceBadge="VIP Service"
            />

          </div>
        </Container>
      </section>

      {/* 4. Portfolio Works Showcase */}
      <section className="py-20 bg-[#0f1c38]/30 border-y border-white/5 w-full overflow-hidden" id="gallery">
        <Container>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              ภาพผลงาน <span className="text-orange-lava underline decoration-orange-lava/40 decoration-4 underline-offset-8">การขนส่งจริง</span>
            </h2>
            <p className="text-text-gray max-w-xl mx-auto">ตัวอย่างงานจริงกว่า 1,500+ เที่ยว มั่นใจได้ทุกการขนส่ง</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative border border-white/10 bg-slate-900 group hover:border-orange-lava hover:shadow-[0_0_20px_rgba(255,69,0,0.3)] transition-all duration-300">
              <Image src="/images/portfolio/S__2531437.webp" alt="บริการรถกระบะรับจ้างตู้ทึบ ขนของ ย้ายบ้าน กรุงเทพ ปริมณฑล ราคาถูก N&M18 TRANSPORT" fill loading="lazy" sizes="(max-width: 768px) 50vw, 33vw" quality={75} className="object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>

            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative border border-white/10 bg-slate-900 group hover:border-orange-lava hover:shadow-[0_0_20px_rgba(255,69,0,0.3)] transition-all duration-300">
              <Image src="/images/portfolio/S__17556285.webp" alt="บริการขนย้ายหอพัก ย้ายคอนโด พร้อมทีมงานยกของ กรุงเทพ ปริมณฑล N&M18 TRANSPORT" fill loading="lazy" sizes="(max-width: 768px) 50vw, 33vw" quality={75} className="object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>

            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative border border-white/10 bg-slate-900 group hover:border-orange-lava hover:shadow-[0_0_20px_rgba(255,69,0,0.3)] transition-all duration-300">
              <Image src="/images/portfolio/S__2531426.webp" alt="บริการรถ 6 ล้อรับจ้าง ขนของจำนวนมาก ย้ายบ้าน ย้ายสำนักงาน ทั่วประเทศ N&M18 TRANSPORT" fill loading="lazy" sizes="(max-width: 768px) 50vw, 33vw" quality={75} className="object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>

            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative border border-white/10 bg-slate-900 group hover:border-orange-lava hover:shadow-[0_0_20px_rgba(255,69,0,0.3)] transition-all duration-300">
              <Image src="/images/portfolio/S__17556168.webp" alt="บริการขนส่งมอเตอร์ไซค์ Big Bike ด้วยรถรับจ้างตู้ทึบ ปลอดภัย ทั่วประเทศ N&M18 TRANSPORT" fill loading="lazy" sizes="(max-width: 768px) 50vw, 33vw" quality={75} className="object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>

            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative border border-white/10 bg-slate-900 group hover:border-orange-lava hover:shadow-[0_0_20px_rgba(255,69,0,0.3)] transition-all duration-300">
              <Image src="/images/portfolio/S__2531424.webp" alt="บริการแพ็คของกันกระแทก พร้อมทีมงานขนย้ายบ้าน ย้ายหอพัก อย่างปลอดภัย N&M18 TRANSPORT" fill loading="lazy" sizes="(max-width: 768px) 50vw, 33vw" quality={75} className="object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>

            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative border border-white/10 bg-slate-900 group hover:border-orange-lava hover:shadow-[0_0_20px_rgba(255,69,0,0.3)] transition-all duration-300">
              <Image src="/images/portfolio/S__2531422.webp" alt="บริการรถกระบะรับจ้างขนของทั่วไป รถตู้ทึบกันฝน กรุงเทพ ปริมณฑล และทั่วประเทศ N&M18 TRANSPORT" fill loading="lazy" sizes="(max-width: 768px) 50vw, 33vw" quality={75} className="object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>

          </div>
            
          <div className="text-center mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link 
              href="/works" 
              aria-label="ดูผลงานทั้งหมดของ N&M18 TRANSPORT" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full font-bold text-sm sm:text-base border-2 border-orange-lava bg-orange-lava text-white shadow-neon-orange transition-all duration-300 hover:bg-orange-glow hover:shadow-[0_0_30px_rgba(255,69,0,0.9)] hover:-translate-y-0.5"
            >
              <FaImages className="shrink-0" />
              <span>ดูผลงานทั้งหมด</span>
            </Link>
            <a 
              href="https://www.facebook.com/profile.php?id=100085299521050" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="ดูรีวิวเพิ่มเติมของ N&M18 TRANSPORT บน Facebook" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full font-bold text-sm sm:text-base border-2 border-[#1877F2] bg-[#1877F2] text-white shadow-[0_0_15px_rgba(24,119,242,0.6)] transition-all duration-300 hover:bg-[#1464c4] hover:shadow-[0_0_25px_rgba(24,119,242,0.8)] hover:-translate-y-0.5"
            >
              <FaFacebookF className="shrink-0" />
              <span>ดูรีวิวบน Facebook</span>
            </a>
          </div>
        </Container>
      </section>

      {/* 4.5 Fleet & Authority Section */}
      <FleetAuthoritySection />

      {/* 5. Feature Comparison Table */}
      <section className="relative py-24 bg-[#050A14] overflow-hidden w-full">
        {/* Ambient Color Lighting (Depth & Glow) */}
        <div 
          className="absolute top-1/6 left-10 w-[85vw] max-w-[450px] h-[350px] bg-[#FF4500]/10 rounded-full blur-[140px] pointer-events-none z-0" 
          aria-hidden="true" 
        />
        <div 
          className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[85vw] max-w-[650px] h-[400px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none z-0" 
          aria-hidden="true" 
        />

        {/* Background Decorative Graphic */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
          <div className="relative w-full max-w-[1400px] h-full min-h-[600px] opacity-25 lg:opacity-30">
            <Image
              src="/nm18backg1.png"
              alt="จุดเด่นและข้อได้เปรียบของบริการขนส่ง N&M18 TRANSPORT"
              fill
              loading="lazy"
              sizes="(max-width: 1280px) 100vw, 1400px"
              className="object-contain object-center scale-100 lg:scale-110"
            />
          </div>
        </div>

        <Container className="relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              ทำไมต้องเลือก <span className="text-orange-lava drop-shadow-[0_0_12px_rgba(255,69,0,0.4)]">N&M18 TRANSPORT?</span>
            </h2>
            <p className="text-text-gray max-w-xl mx-auto">เปรียบเทียบความแตกต่างเพื่อความคุ้มค่าและปลอดภัยสูงสุดของคุณ</p>
          </div>
          
          <div className="bg-navy-primary rounded-3xl border border-white/10 overflow-hidden shadow-2xl max-w-4xl mx-auto w-full">
            
            <div className="grid grid-cols-2 md:grid-cols-[1.2fr_1.2fr_1fr] p-3.5 sm:p-5 md:p-6 bg-black/40 border-b border-white/10 text-center font-bold text-white text-xs sm:text-sm md:text-base">
              <div className="text-left">หัวข้อบริการ</div>
              <div className="text-orange-lava drop-shadow-[0_0_8px_rgba(255,69,0,0.4)]">N&M18 TRANSPORT</div>
              <div className="hidden md:block text-slate-400">รถรับจ้างทั่วไป</div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-[1.2fr_1.2fr_1fr] p-3.5 sm:p-5 md:p-6 border-b border-white/5 items-center transition-colors hover:bg-white/5 text-xs sm:text-sm md:text-base">
              <div className="text-text-gray font-medium flex items-center gap-2 sm:gap-2.5">
                <FaTag className="text-orange-lava shrink-0 text-sm sm:text-base" />
                <span>ราคาค่าบริการ</span>
              </div>
              <div className="text-orange-lava font-bold text-center flex items-center justify-center gap-1.5 sm:gap-2">
                <FaCheck className="text-line-green shrink-0 text-base sm:text-lg" />
                <span>ราคาชัดเจน จบที่ตกลง</span>
              </div>
              <div className="hidden md:flex items-center justify-center gap-2 text-slate-500 line-through opacity-70">
                <FaXmark className="text-red-500 shrink-0 text-lg" />
                <span>มักมีบวกเพิ่มหน้างาน</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-[1.2fr_1.2fr_1fr] p-3.5 sm:p-5 md:p-6 border-b border-white/5 items-center transition-colors hover:bg-white/5 text-xs sm:text-sm md:text-base">
              <div className="text-text-gray font-medium flex items-center gap-2 sm:gap-2.5">
                <FaShieldCat className="text-orange-lava shrink-0 text-sm sm:text-base" />
                <span>การรับประกันสินค้า</span>
              </div>
              <div className="text-orange-lava font-bold text-center flex items-center justify-center gap-1.5 sm:gap-2">
                <FaCheck className="text-line-green shrink-0 text-base sm:text-lg" />
                <span>รับผิดชอบ 100% ตามจริง</span>
              </div>
              <div className="hidden md:flex items-center justify-center gap-2 text-slate-500 line-through opacity-70">
                <FaQuestion className="text-amber-500 shrink-0 text-lg" />
                <span>ไม่มีรับประกัน</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-[1.2fr_1.2fr_1fr] p-3.5 sm:p-5 md:p-6 border-b border-white/5 items-center transition-colors hover:bg-white/5 text-xs sm:text-sm md:text-base">
              <div className="text-text-gray font-medium flex items-center gap-2 sm:gap-2.5">
                <FaTruckRampBox className="text-orange-lava shrink-0 text-sm sm:text-base" />
                <span>บริการช่วยยกของ</span>
              </div>
              <div className="text-orange-lava font-bold text-center flex items-center justify-center gap-1.5 sm:gap-2">
                <FaCheck className="text-line-green shrink-0 text-base sm:text-lg" />
                <span>ทีมงานมืออาชีพช่วยยก</span>
              </div>
              <div className="hidden md:flex items-center justify-center gap-2 text-slate-500 line-through opacity-70">
                <FaXmark className="text-red-500 shrink-0 text-lg" />
                <span>คนขับไม่ช่วย / ทำเอง</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-[1.2fr_1.2fr_1fr] p-3.5 sm:p-5 md:p-6 border-b border-white/5 items-center transition-colors hover:bg-white/5 text-xs sm:text-sm md:text-base">
              <div className="text-text-gray font-medium flex items-center gap-2 sm:gap-2.5">
                <FaUmbrella className="text-orange-lava shrink-0 text-sm sm:text-base" />
                <span>สภาพตู้และตัวรถ</span>
              </div>
              <div className="text-orange-lava font-bold text-center flex items-center justify-center gap-1.5 sm:gap-2">
                <FaCheck className="text-line-green shrink-0 text-base sm:text-lg" />
                <span>ตู้ทึบกันฝน 100% สะอาด</span>
              </div>
              <div className="hidden md:flex items-center justify-center gap-2 text-slate-500 line-through opacity-70">
                <FaXmark className="text-red-500 shrink-0 text-lg" />
                <span>ผ้าใบคลุมเสี่ยงรั่วซึม</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-[1.2fr_1.2fr_1fr] p-3.5 sm:p-5 md:p-6 items-center transition-colors hover:bg-white/5 text-xs sm:text-sm md:text-base">
              <div className="text-text-gray font-medium flex items-center gap-2 sm:gap-2.5">
                <FaHeadset className="text-orange-lava shrink-0 text-sm sm:text-base" />
                <span>การประสานงาน</span>
              </div>
              <div className="text-orange-lava font-bold text-center flex items-center justify-center gap-1.5 sm:gap-2">
                <FaCheck className="text-line-green shrink-0 text-base sm:text-lg" />
                <span>แอดมินดูแล 24 ชั่วโมง</span>
              </div>
              <div className="hidden md:flex items-center justify-center gap-2 text-slate-500 line-through opacity-70">
                <FaXmark className="text-red-500 shrink-0 text-lg" />
                <span>ติดต่อยาก เสี่ยงทิ้งงาน</span>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 6. Legal Registration & Trust Badge */}
      <section className="py-12 w-full overflow-hidden">
        <Container>
          <div className="glass-card p-5 sm:p-8 md:p-12 rounded-3xl border-2 border-orange-lava/30 text-center max-w-4xl mx-auto relative overflow-hidden shadow-2xl w-full">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-gold bg-gold/10 border border-gold/30 mb-4">
              <FaCertificate className="text-gold text-sm shrink-0" />
              <span>จดทะเบียนถูกต้องตามกฎหมาย</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
              บริษัท เอ็นแอนด์เอ็ม 18 ทรานสปอร์ต จำกัด
            </h2>
            <p className="text-slate-300 text-sm md:text-base mb-6 max-w-xl mx-auto">
              มั่นใจได้ในความปลอดภัยและการบริการที่ได้มาตรฐาน มีตัวตนชัดเจน ตรวจสอบได้
            </p>
            
            <div className="max-w-md w-full mx-auto rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl relative aspect-[1.4/1] bg-slate-900">
              <Image 
                src="/images/portfolio/S__17556166.webp" 
                alt="ใบอนุญาตประกอบการขนส่ง N&M 18 TRANSPORT" 
                fill 
                loading="lazy" 
                sizes="(max-width: 768px) 100vw, 450px" 
                className="object-contain bg-navy-dark" 
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 7. Real Customer Reviews */}
      <section className="py-20 bg-gradient-to-b from-[#050a14] via-[#0f1c38]/40 to-[#050a14] w-full overflow-hidden">
        <Container>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              รีวิวจากลูกค้าที่ไว้วางใจ
            </h2>
            <p className="text-text-gray max-w-xl mx-auto">ความประทับใจจากการบริการขนย้ายของ N&M18 TRANSPORT</p>
          </div>
          
          <LazyReviewsSection />
        </Container>
      </section>

      {/* 9. Special Pricing Promotion Banner */}
      <section className="py-16 w-full overflow-hidden">
        <Container>
          <div className="glass-card text-center py-10 md:py-16 px-4 sm:px-6 md:px-12 rounded-3xl max-w-4xl mx-auto border-2 border-orange-lava/40 shadow-2xl relative overflow-hidden w-full">
            <div className="absolute top-4 -right-10 bg-orange-lava text-white text-xs font-black py-1.5 px-12 rotate-45 shadow-lg">
              PROMOTION
            </div>
            
            <p className="text-orange-200 text-sm md:text-base font-semibold mb-2">โปรโมชั่นพิเศษ จองคิวล่วงหน้าราคาพิเศษสุดคุ้ม</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">ค่าบริการรถกระบะรับจ้างเริ่มต้นเพียง</h2>
            
            <div className="text-5xl md:text-7xl font-black text-orange-lava my-4 animate-[neonPulse_3s_infinite_alternate]">
              1,000.-
            </div>
            
            <p className="text-slate-300 text-sm md:text-base mb-8">ราคาประเมินตามระยะทางจริงและประเภทของ ปรึกษาและเช็คราคาฟรี</p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <a 
                href="tel:0958010958" 
                aria-label="โทรเช็คราคากับเจ้าหน้าที่ 095-801-0958" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full font-bold text-sm sm:text-base text-white bg-gradient-to-r from-orange-lava to-orange-glow shadow-neon-orange transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,69,0,0.9)]"
              >
                <FaCalculator className="shrink-0" />
                <span>โทรเช็คราคาด่วน</span>
              </a>

              <a 
                href="https://liff.line.me/1645278921-kWRPP32q/?accountId=952yyanc" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="เช็คราคาผ่าน LINE ตลอด 24 ชม." 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full font-bold text-sm sm:text-base text-white bg-line-green shadow-neon-green transition-all duration-300 hover:scale-105 hover:bg-[#05b84e]"
              >
                <FaLine className="text-xl shrink-0" />
                <span>เช็คราคาผ่าน LINE (24 ชม.)</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* 10. 4-Step Easy Booking Workflow */}
      <section className="py-20 bg-[#0f1c38]/40 border-t border-white/5 w-full overflow-hidden" id="how-it-works">
        <Container>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              4 ขั้นตอนง่ายๆ <span className="text-orange-glow">ในการใช้บริการ</span>
            </h2>
            <p className="text-text-gray max-w-xl mx-auto">สะดวก รวดเร็ว พร้อมให้บริการตลอด 24 ชั่วโมง</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="glass-card p-6 rounded-2xl text-center relative group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-lava to-orange-glow text-white font-extrabold flex items-center justify-center absolute -top-4 left-1/2 -translate-x-1/2 shadow-neon-orange">
                1
              </div>
              <div className="w-16 h-16 rounded-2xl bg-orange-lava/10 border border-orange-lava/30 text-orange-lava text-2xl flex items-center justify-center mx-auto my-4 transition-transform group-hover:scale-110">
                <FaPhoneVolume />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">โทร / ไลน์จองคิว</h3>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed">แจ้งต้นทาง-ปลายทาง และรายการของเพื่อประเมินราคาฟรี</p>
            </div>

            <div className="glass-card p-6 rounded-2xl text-center relative group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-lava to-orange-glow text-white font-extrabold flex items-center justify-center absolute -top-4 left-1/2 -translate-x-1/2 shadow-neon-orange">
                2
              </div>
              <div className="w-16 h-16 rounded-2xl bg-orange-lava/10 border border-orange-lava/30 text-orange-lava text-2xl flex items-center justify-center mx-auto my-4 transition-transform group-hover:scale-110">
                <FaTruckRampBox />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">รถเข้ารับของตรงเวลา</h3>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed">ทีมงานเข้าช่วยยกของ และแพ็คกันกระแทกอย่างดีตามนัดหมาย</p>
            </div>

            <div className="glass-card p-6 rounded-2xl text-center relative group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-lava to-orange-glow text-white font-extrabold flex items-center justify-center absolute -top-4 left-1/2 -translate-x-1/2 shadow-neon-orange">
                3
              </div>
              <div className="w-16 h-16 rounded-2xl bg-orange-lava/10 border border-orange-lava/30 text-orange-lava text-2xl flex items-center justify-center mx-auto my-4 transition-transform group-hover:scale-110">
                <FaRoute />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">ขนส่งปลอดภัย</h3>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed">ตู้ทึบกันฝน 100% ล็อคแน่นหนา ขับขี่ระมัดระวัง เช็คสถานะได้</p>
            </div>

            <div className="glass-card p-6 rounded-2xl text-center relative group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-lava to-orange-glow text-white font-extrabold flex items-center justify-center absolute -top-4 left-1/2 -translate-x-1/2 shadow-neon-orange">
                4
              </div>
              <div className="w-16 h-16 rounded-2xl bg-orange-lava/10 border border-orange-lava/30 text-orange-lava text-2xl flex items-center justify-center mx-auto my-4 transition-transform group-hover:scale-110">
                <FaHouseCircleCheck />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">ส่งมอบถึงที่หมาย</h3>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed">ส่งมอบและยกของจัดวางเข้าที่เรียบร้อย ปลอดภัย 100%</p>
            </div>

          </div>
        </Container>
      </section>

      {/* 11. FAQ Section */}
      <section className="py-20 w-full overflow-hidden" id="faq">
        <Container>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              คำถามที่พบบ่อย <span className="text-orange-lava">(FAQ)</span>
            </h2>
            <p className="text-text-gray max-w-xl mx-auto">ข้อสงสัยยอดนิยมเกี่ยวกับการใช้บริการรถกระบะรับจ้าง</p>
          </div>
          
          <IndexFAQ />
        </Container>
      </section>

      {/* 12. Programmatic Hub */}
      <ProgrammaticHub />

      {/* 13. High-Conversion Bottom CTA Section */}
      <CTASection />

    </main>
  );
}
