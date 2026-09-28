import React from 'react';
import Image from 'next/image';
import { Container } from '../ui/Container';
import { FaCheck, FaTruckFast, FaLine, FaShieldCat, FaPhoneVolume } from 'react-icons/fa6';

const fleetData = [
  {
    id: 'standard-box',
    name: 'รถกระบะตู้ทึบมาตรฐาน',
    badge: 'ราคาประหยัดยอดนิยม',
    image: '/images/portfolio/S__2531422.webp',
    specs: [
      'ความจุ 4.5 ลบ.ม.',
      'รองรับน้ำหนัก 1.5 ตัน',
      'รถตู้ทึบกันฝน 100%',
      'เหมาะสำหรับย้ายหอและกล่องของ'
    ],
    cta: 'ประเมินราคา (เริ่มต้น 1,000.-)'
  },
  {
    id: 'high-roof-box',
    name: 'รถกระบะตู้ทึบหลังคาสูง 2.1 ม.',
    badge: 'ยอดนิยม ย้ายคอนโด',
    image: '/images/portfolio/S__2531424.webp',
    specs: [
      'ความจุ 6.5 ลบ.ม.',
      'ตู้สูง 2.10 เมตร',
      'ตู้เย็น/ฟูก 6 ฟุตยืนตรงได้',
      'มีสายรัดกันกระแทก'
    ],
    cta: 'ประเมินราคา (ปรึกษาฟรี)'
  },
  {
    id: 'jumbo-4-wheeler',
    name: 'รถ 4 ล้อใหญ่ตู้ทึบจัมโบ้',
    badge: 'ขนของเยอะ ไม่ติดเวลา',
    image: '/images/portfolio/S__2531437.webp',
    specs: [
      'ความจุ 12–14 ลบ.ม.',
      'ไม่ติดเวลาวิ่งกรุงเทพฯ',
      'จุเทียบเท่ากระบะ 2 คัน',
      'เหมาะสำหรับย้ายบ้านทาวน์โฮม'
    ],
    cta: 'ประเมินราคา (สุดคุ้ม)'
  },
  {
    id: '6-wheeler',
    name: 'รถ 6 ล้อรับจ้างตู้ทึบ',
    badge: 'แนะนำ ย้ายบ้านเดี่ยว',
    image: '/images/portfolio/S__2531426.webp',
    specs: [
      'ความจุ 25–30 ลบ.ม.',
      'รองรับน้ำหนัก 5 ตัน',
      'มีลิฟท์ท้ายไฮดรอลิก',
      'ขนย้ายสำนักงาน/โรงงาน'
    ],
    cta: 'ประเมินราคา (เหมาคัน)'
  }
];

export const FleetSelectionSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#050a14] relative z-10" id="fleet">
      <Container>
        {/* 1. Section heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 relative z-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#FF4500] bg-[#FF4500]/10 border border-[#FF4500]/20 mb-4">
            <FaTruckFast />
            <span>ประเภทรถขนส่ง</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
            ประเภทยานพาหนะตู้ทึบ ที่เหมาะสมกับของของคุณ
          </h2>
          <p className="text-slate-300 text-base md:text-lg">
            บริการรถรับจ้างตู้ทึบคุณภาพสูง สำหรับย้ายหอ ย้ายบ้าน และขนส่งสินค้าทั่วไป กันแดดกันฝน 100%
          </p>
        </div>

        {/* 2. Four fleet cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {fleetData.map((card) => (
            <article 
              key={card.id} 
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0f1c38]/90 shadow-[0_14px_35px_rgba(0,0,0,0.28)] backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-[#FF4500] hover:shadow-[0_18px_45px_rgba(255,69,0,0.25)] h-full"
            >
              <div className="relative w-full aspect-[4/3] bg-slate-900 p-2 overflow-hidden flex-shrink-0">
                <Image 
                  src={card.image} 
                  alt={card.name} 
                  fill 
                  loading="lazy"
                  className="object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.02]" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute top-3 right-3 bg-gradient-to-r from-[#EA580C] to-[#FF4500] text-white text-[11px] sm:text-xs font-extrabold px-3 py-1 rounded-full shadow-[0_0_10px_rgba(255,69,0,0.6)] z-10 whitespace-nowrap">
                  {card.badge}
                </div>
              </div>
              
              <div className="flex flex-col flex-1 p-5 sm:p-6">
                <h3 className="mb-4 text-lg md:text-xl font-bold leading-tight text-white transition-colors group-hover:text-[#FF4500]">
                  {card.name}
                </h3>
                
                <ul className="flex-1 space-y-3 mb-6">
                  {card.specs.map((spec, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <FaCheck className="text-[#FF4500] mt-0.5 shrink-0 text-sm" />
                      <span className="leading-snug">{spec}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="https://liff.line.me/1645278921-kWRPP32q/?accountId=952yyanc" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`จอง${card.name}`} 
                  className="mt-auto w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#EA580C] to-[#FF4500] text-white font-bold py-3 px-4 rounded-xl text-center shadow-[0_0_15px_rgba(255,69,0,0.4)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(255,69,0,0.8)] focus:ring-4 focus:ring-orange-500/50 focus:outline-none"
                >
                  <FaLine className="text-lg shrink-0" />
                  <span>{card.cta}</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* 3. Trust area panel */}
        <div className="bg-gradient-to-br from-[#0f1c38] to-[#0b1528] rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative">
          {/* Orange accent line top */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#EA580C] to-[#FF4500]"></div>
          
          <div className="p-8 md:p-12 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14 relative z-10">
            <div className="flex-1 lg:max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#F59E0B] bg-[#F59E0B]/10 border border-[#F59E0B]/20 mb-5">
                <FaShieldCat />
                <span>มั่นใจ 100% ทุกเที่ยวการขนส่ง</span>
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white mb-6">
                เราคือผู้นำ <br className="hidden lg:block"/>
                <span className="text-[#FF4500]">ด้านบริการรถกระบะตู้ทึบ</span><br className="hidden lg:block"/>
                ย้ายของทั่วไทย
              </h3>
              <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0">
                ด้วยประสบการณ์หน้างานจริง มั่นใจได้ในความปลอดภัย ของไม่เปียก ไม่บุบ มีประกันดูแล 100%
              </p>
            </div>
            
            <div className="flex-1 w-full max-w-md mx-auto lg:mx-0 flex justify-center lg:justify-end">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900">
                 <Image 
                   src="/nm18box.webp" 
                   alt="ทีมงาน N&M18 TRANSPORT พร้อมให้บริการขนย้ายของ" 
                   fill 
                   loading="lazy"
                   className="object-cover object-center hover:scale-105 transition-transform duration-700" 
                   sizes="(max-width: 1024px) 100vw, 500px" 
                 />
              </div>
            </div>
          </div>

          {/* 4. Statistics and contact (Integrated sub-panel) */}
          <div className="bg-[#050a14]/80 border-t border-white/10 px-8 py-10 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="px-2 py-2 md:py-0 border-none">
                <div className="text-4xl md:text-5xl font-black text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">10+</div>
                <div className="text-xs md:text-sm font-medium text-slate-400">ปีประสบการณ์ขนส่ง</div>
              </div>
              <div className="px-2 py-2 md:py-0 border-none md:border-l md:border-white/10">
                <div className="text-4xl md:text-5xl font-black text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">1,500+</div>
                <div className="text-xs md:text-sm font-medium text-slate-400">เที่ยวงานสำเร็จ</div>
              </div>
              <div className="px-2 py-8 md:py-0 border-t border-white/10 md:border-t-0 md:border-l">
                <div className="text-4xl md:text-5xl font-black text-white mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">77</div>
                <div className="text-xs md:text-sm font-medium text-slate-400">จังหวัดวิ่งทั่วไทย</div>
              </div>
              <div className="px-2 py-8 md:py-0 border-t border-white/10 md:border-t-0 md:border-l">
                <div className="text-4xl md:text-5xl font-black text-[#FF4500] mb-2 drop-shadow-[0_0_15px_rgba(255,69,0,0.4)]">100%</div>
                <div className="text-xs md:text-sm font-medium text-slate-400">ตู้ทึบปลอดภัยไม่เปียกฝน</div>
              </div>
            </div>
            
            <div className="text-center pt-6 border-t border-white/5">
              <p className="text-sm md:text-base text-slate-300 font-medium flex flex-col sm:flex-row items-center justify-center gap-2">
                พร้อมให้บริการและให้คำปรึกษาตลอด 24 ชั่วโมง
                <a href="tel:0958010958" className="inline-flex items-center gap-2 text-[#FF4500] font-bold hover:text-[#EA580C] transition-colors mt-2 sm:mt-0">
                  <FaPhoneVolume className="shrink-0" />
                  โทร 095-801-0958
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
