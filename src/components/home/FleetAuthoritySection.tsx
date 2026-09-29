import React from 'react';
import Image from 'next/image';
import { FaCheck, FaLine } from 'react-icons/fa6';

interface FleetCardData {
  id: string;
  name: string;
  pill: string;
  pillClass: string;
  image: string;
  specs: [string, string, string, string];
  cta: string;
}

const fleetData: FleetCardData[] = [
  {
    id: 'standard-box',
    name: 'รถกระบะตู้ทึบมาตรฐาน',
    pill: '🏷️ ราคาประหยัดยอดนิยม',
    pillClass: 'bg-red-500/10 text-red-400 border border-red-500/20',
    image: '/images/portfolio/S__2531422.webp',
    specs: [
      'ความจุ 4.5 ลบ.ม.',
      'รองรับน้ำหนักบรรทุก 1.5 ตัน',
      'ตู้ทึบกันฝน 100% ล็อคแน่นหนา',
      'เหมาะสำหรับ ย้ายหอพัก กล่องพัสดุ'
    ],
    cta: 'ประเมินราคา (เริ่มต้น 1,000.-)'
  },
  {
    id: 'high-roof-box',
    name: 'รถกระบะตู้ทึบหลังคาสูง 2.1 ม.',
    pill: '🔥 ยอดนิยม ย้ายคอนโด',
    pillClass: 'bg-orange-500/10 text-orange-400 border border-orange-500/20',
    image: '/images/portfolio/S__2531424.webp',
    specs: [
      'ความจุ 6.5 ลบ.ม. (สูง 2.10 ม.)',
      'รองรับน้ำหนักบรรทุก 1.8 ตัน',
      'ตู้ทึบกันฝน 100% ฟูก 6 ฟุตยืนตรงได้',
      'เหมาะสำหรับ ย้ายคอนโด ห้องพัก'
    ],
    cta: 'ประเมินราคา (ปรึกษาฟรี)'
  },
  {
    id: 'jumbo-4-wheeler',
    name: 'รถ 4 ล้อใหญ่ตู้ทึบจัมโบ้',
    pill: '⚡ ขนของเยอะ ไม่ติดเวลา',
    pillClass: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
    image: '/images/portfolio/S__2531437.webp',
    specs: [
      'ความจุ 12–14 ลบ.ม. (จุเท่ากระบะ 2 คัน)',
      'รองรับน้ำหนักบรรทุก 2.5–3.0 ตัน',
      'ตู้ทึบกันฝน 100% ไม่ติดเวลา 24 ชม.',
      'เหมาะสำหรับ ย้ายบ้านทาวน์โฮม'
    ],
    cta: 'ประเมินราคา (สุดคุ้ม)'
  },
  {
    id: '6-wheeler',
    name: 'รถ 6 ล้อรับจ้างตู้ทึบ',
    pill: '👑 แนะนำ ย้ายบ้านเดี่ยว',
    pillClass: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    image: '/images/portfolio/S__2531426.webp',
    specs: [
      'ความจุ 25–30 ลบ.ม. จุเต็มพิกัด',
      'รองรับน้ำหนักบรรทุก 5.0 ตัน',
      'ตู้ทึบกันฝน 100% มีลิฟท์ท้ายไฮดรอลิก',
      'เหมาะสำหรับ ย้ายบ้านเดี่ยว ขนส่งโรงงาน'
    ],
    cta: 'ประเมินราคา (เหมาคัน)'
  }
];

export const FleetAuthoritySection: React.FC = () => {
  return (
    <section id="fleet" className="relative w-full bg-[#050A14] flex flex-col pt-16 sm:pt-20 overflow-hidden">
      
      {/* 1. UPPER SECTION: Dark Top Canvas & 4 Fleet Cards */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 pb-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            ประเภทยานพาหนะตู้ทึบ <span className="text-[#FF4500] inline-block">ที่เหมาะสมกับของของคุณ</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            บริการรถรับจ้างตู้ทึบคุณภาพสูง สำหรับย้ายหอ ย้ายบ้าน และขนส่งสินค้าทั่วไทย กันแดดกันฝน 100%
          </p>
        </div>

        {/* 4 Fleet Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleetData.map((card) => (
            <article
              key={card.id}
              className="bg-[#0B1528] rounded-3xl p-5 border border-slate-800 shadow-2xl flex flex-col justify-between hover:border-[#FF4500]/50 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                {/* Top Pill Tag */}
                <div className="mb-2">
                  <span className={`inline-block ${card.pillClass} text-[11px] font-bold px-2.5 py-0.5 rounded-full`}>
                    {card.pill}
                  </span>
                </div>

                {/* Vehicle Image Frame */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden my-3 bg-slate-900 flex items-center justify-center border border-white/5">
                  <Image
                    src={card.image}
                    alt={card.name}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Vehicle Title */}
                <h3 className="text-lg font-bold text-white mb-3 text-center sm:text-left group-hover:text-[#FF5A00] transition-colors">
                  {card.name}
                </h3>

                {/* Spec List with Check Icons */}
                <ul className="space-y-2 mb-6 text-xs sm:text-sm text-slate-300 font-normal">
                  {card.specs.map((spec, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <FaCheck className="text-[#FF4500] shrink-0 mt-0.5 text-xs" />
                      <span className="leading-snug">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Full-width Rounded CTA Button */}
              <a
                href="https://liff.line.me/1645278921-kWRPP32q/?accountId=952yyanc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full font-bold text-sm text-white bg-gradient-to-r from-[#FF4500] to-[#FF6B35] shadow-md hover:shadow-orange-500/40 hover:scale-[1.02] transition-all text-center flex items-center justify-center gap-2"
                aria-label={`ประเมินราคาสำหรับ ${card.name}`}
              >
                <FaLine className="text-base shrink-0" />
                <span>{card.cta}</span>
              </a>
            </article>
          ))}
        </div>
      </div>

      {/* 2. THE SWEEPING ARCH & CARD OVERLAP (Pulled upwards behind the cards) */}
      <div className="relative w-full bg-gradient-to-b from-[#0B254E] to-[#071731] -mt-40 md:-mt-52 lg:-mt-60 pt-48 md:pt-60 lg:pt-72 pb-24 md:pb-28 overflow-hidden">
        
        {/* Convex SVG Wave Header */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-[98%] pointer-events-none">
          <svg 
            className="relative block w-full h-[80px] md:h-[140px] lg:h-[180px] text-[#0B254E] fill-current" 
            viewBox="0 0 1440 180" 
            preserveAspectRatio="none"
          >
            <path d="M0,180 C480,0 960,0 1440,180 L1440,180 L0,180 Z"></path>
          </svg>
        </div>

        {/* 3. MID-SECTION CONTENT (Inside the Blue Curved Canvas) */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column (lg:col-span-7) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">
              เราคือผู้นำ <br />
              <span className="text-[#FF5A00]">ด้านบริการรถกระบะตู้ทึบ</span>
              <br />
              ย้ายของทั่วไทย
            </h3>
            <p className="text-slate-200 text-sm sm:text-base font-normal max-w-lg leading-relaxed mx-auto lg:mx-0">
              ด้วยประสบการณ์หน้างานจริง มั่นใจได้ในความปลอดภัย ของไม่เปียก ไม่บุบ มีประกันดูแล 100% พร้อมทีมงานช่วยยกของมืออาชีพ
            </p>
          </div>

          {/* Right Column (lg:col-span-5 flex justify-center lg:justify-end) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            {/* Subtle radial warm backlight */}
            <div 
              className="w-56 sm:w-72 h-56 sm:h-72 max-w-full bg-[#FF5A00]/25 blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full" 
              aria-hidden="true"
            />
            <Image
              src="/nm18box.webp"
              alt="ทีมงาน N&M18 TRANSPORT บริการรถกระบะตู้ทึบมืออาชีพ"
              width={380}
              height={380}
              loading="lazy"
              className="max-w-[260px] sm:max-w-[380px] w-full h-auto object-contain drop-shadow-2xl relative z-10"
            />
          </div>
        </div>
      </div>

      {/* 4. THE FLOATING WHITE STAT BOX (Overlapping the bottom edge) */}
      <div className="relative z-30 max-w-4xl mx-auto px-4 -mt-16 md:-mt-20 mb-8 md:mb-12 w-full">
        <div className="bg-white rounded-3xl sm:rounded-[32px] p-4 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-slate-100">
          
          {/* Top Row: 4 Statistics Columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 md:gap-y-0 text-center md:divide-x divide-slate-200">
            <div className="flex flex-col items-center justify-center p-2 border-r border-slate-200 md:border-r-0">
              <span className="text-[#0B254E] font-extrabold text-3xl sm:text-4xl tracking-tight">10+</span>
              <span className="text-slate-500 text-xs sm:text-sm mt-1 font-medium">ปีประสบการณ์ที่ผ่านมา</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2">
              <span className="text-[#FF4500] font-extrabold text-3xl sm:text-4xl tracking-tight">1,500+</span>
              <span className="text-slate-500 text-xs sm:text-sm mt-1 font-medium">ให้บริการลูกค้า มากกว่า (เที่ยว)</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 pt-4 md:pt-2 border-t border-r border-slate-200 md:border-t-0 md:border-r-0">
              <span className="text-[#0B254E] font-extrabold text-3xl sm:text-4xl tracking-tight">77</span>
              <span className="text-slate-500 text-xs sm:text-sm mt-1 font-medium">จังหวัดให้บริการทั่วไทย</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 pt-4 md:pt-2 border-t border-slate-200 md:border-t-0">
              <span className="text-[#05B84E] font-extrabold text-3xl sm:text-4xl tracking-tight">100%</span>
              <span className="text-slate-500 text-xs sm:text-sm mt-1 font-medium">ตู้ทึบปลอดภัยไม่เปียกฝน</span>
            </div>
          </div>

          {/* Bottom Row: Clean Separated Sub-bar */}
          <div className="border-t border-slate-100 mt-6 pt-4 text-center">
            <p className="text-slate-800 font-bold text-sm sm:text-base flex items-center justify-center flex-wrap gap-2">
              <span>พร้อมให้บริการช่วยเหลือ ลูกค้า 24 ชั่วโมง</span>
              <a 
                href="tel:0958010958" 
                className="text-[#FF4500] hover:underline inline-flex items-center gap-1 transition-colors"
                aria-label="โทรสอบถาม 095-801-0958"
              >
                <span>โทร 095-801-0958</span>
              </a>
            </p>
          </div>

        </div>
      </div>

    </section>
  );
};

