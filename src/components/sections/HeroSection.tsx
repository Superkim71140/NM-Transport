import React from 'react';
import Image from 'next/image';
import { 
  FaPhoneVolume, 
  FaLine, 
  FaShieldHalved, 
  FaClock, 
  FaTruckFast,
  FaPeopleCarryBox,
  FaLocationDot
} from 'react-icons/fa6';
import { Container } from '../ui/Container';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden text-center text-white pt-20 pb-24 md:pt-28 md:pb-36 border-b border-orange-lava/10 bg-slate-900">
      {/* Background Image Layer */}
      <Image 
        src="/images/portfolio/S__2531437.webp" 
        alt="N&M18 TRANSPORT รถกระบะตู้ทึบรับจ้างขนของ ขนย้ายบ้าน ทั่วประเทศ"
        fill
        priority={true}
        fetchPriority="high"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1920px"
        className="object-cover object-center absolute inset-0 -z-20 scale-105 filter brightness-75"
      />
      
      {/* Background Dark Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050a14]/90 via-[#0a162e]/85 to-[#050a14] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,69,0,0.12)_0%,transparent_70%)] -z-10 pointer-events-none" />
      
      {/* Shimmer Ambient Sweep */}
      <div className="absolute top-0 -left-1/2 w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-[25deg] animate-[shine_7s_infinite] -z-10 pointer-events-none" />

      <Container className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Top Feature Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-gradient-to-r from-orange-lava/20 to-orange-500/10 text-orange-lava border border-orange-lava/30 backdrop-blur-md shadow-[0_0_15px_rgba(255,69,0,0.25)] mb-6 animate-[pulseIcon_3s_infinite]">
          <FaShieldHalved className="text-orange-lava text-xs shrink-0" />
          <span>รถกระบะตู้ทึบมาตรฐาน 100% กันฝน กันฝุ่น ปลอดภัยทั่วไทย</span>
        </div>

        {/* Main H1 Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.2] mb-6 tracking-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
          บริการรถกระบะตู้ทึบรับจ้าง<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-200 to-orange-lava">
            ย้ายบ้าน ย้ายหอ มอเตอร์ไซค์ ทั่วไทย 24 ชม.
          </span>
        </h1>
        
        {/* Sub-headline */}
        <p className="text-base sm:text-lg md:text-xl mb-10 text-slate-300 max-w-3xl mx-auto leading-relaxed drop-shadow">
          ขนย้ายของด่วน ย้ายหอพัก คอนโด สินค้า และบิ๊กไบค์ ตู้ทึบปิดมิดชิด 100%<br className="hidden sm:inline" />
          <span className="text-white font-medium">พร้อมทีมงานมืออาชีพช่วยยกของ</span> ประเมินราคาจริงใจ ไม่มีบวกเพิ่มหน้างาน
        </p>
        
        {/* Dual High-Conversion CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 w-full max-w-lg mx-auto">
          
          <a 
            href="tel:0958010958" 
            aria-label="โทรติดต่อ N&M18 TRANSPORT จองรถรับจ้างทันที" 
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 py-3.5 px-8 rounded-full font-bold text-base md:text-lg text-white bg-gradient-to-r from-orange-lava to-orange-glow shadow-neon-orange transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,69,0,0.9)] active:scale-95"
          >
            <FaPhoneVolume className="text-lg shrink-0 animate-[pulseIcon_1.5s_infinite]" /> 
            <span>โทรจองรถเลย</span>
          </a>

          <a 
            href="https://liff.line.me/1645278921-kWRPP32q/?accountId=952yyanc" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="แอดไลน์ N&M18 TRANSPORT ประเมินราคาฟรี 24 ชม." 
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 py-3.5 px-8 rounded-full font-bold text-base md:text-lg text-white bg-line-green shadow-neon-green transition-all duration-300 hover:scale-105 hover:bg-[#05b84e] hover:shadow-[0_0_25px_rgba(6,199,85,0.8)] active:scale-95"
          >
            <FaLine className="text-2xl shrink-0" /> 
            <span>เช็คราคาผ่าน LINE</span>
          </a>

        </div>

        {/* Value Prop / Trust Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
          
          <div className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-2xl text-xs sm:text-sm backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-neon-blue hover:shadow-neon-blue hover:-translate-y-0.5">
            <FaShieldHalved className="text-neon-blue text-base shrink-0" />
            <span className="font-medium text-slate-200">รับประกันสินค้า 100%</span>
          </div>

          <div className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-2xl text-xs sm:text-sm backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-neon-blue hover:shadow-neon-blue hover:-translate-y-0.5">
            <FaClock className="text-neon-blue text-base shrink-0" />
            <span className="font-medium text-slate-200">บริการด่วน 24 ชั่วโมง</span>
          </div>

          <div className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-2xl text-xs sm:text-sm backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-neon-blue hover:shadow-neon-blue hover:-translate-y-0.5">
            <FaPeopleCarryBox className="text-neon-blue text-base shrink-0" />
            <span className="font-medium text-slate-200">มีทีมงานช่วยยกของ</span>
          </div>

          <div className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-2xl text-xs sm:text-sm backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-neon-blue hover:shadow-neon-blue hover:-translate-y-0.5">
            <FaLocationDot className="text-neon-blue text-base shrink-0" />
            <span className="font-medium text-slate-200">ครอบคลุม 77 จังหวัด</span>
          </div>

        </div>

      </Container>
    </section>
  );
};
