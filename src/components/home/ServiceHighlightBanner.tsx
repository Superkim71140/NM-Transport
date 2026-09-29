import React from 'react';
import Image from 'next/image';
import { FaCheck, FaPhoneVolume, FaLine } from 'react-icons/fa6';

export const ServiceHighlightBanner: React.FC = () => {
  const checklistItems = [
    "รถกระบะ 4 ล้อตู้ทึบหลังคาสูง กันแดด กันฝน ปลอดภัย 100%",
    "ทีมงานมืออาชีพพร้อมยกของ ดูแลสินค้าทุกชิ้นอย่างระมัดระวัง",
    "พิกัดหลัก บางแค เพชรเกษม ฝั่งธนบุรี และพื้นที่ใกล้เคียง บริการวิ่งทั่วไทย 24 ชม.",
    "ประเมินราคาฟรีตามจริง แจ้งราคาก่อนเริ่มงาน ไม่มีบวกเพิ่ม"
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-[#0A1B38] via-[#071326] to-[#050A14] pt-12 md:pt-16 pb-16 md:pb-20 mt-12 md:mt-16 overflow-hidden">
      {/* 1. Convex Upward SVG Wave Divider on Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-[98%] pointer-events-none">
        <svg 
          className="relative block w-full h-[60px] md:h-[100px] text-[#0A1B38] fill-current" 
          viewBox="0 0 1440 100" 
          preserveAspectRatio="none"
        >
          <path d="M0,100 C480,10 960,10 1440,100 L1440,100 L0,100 Z"></path>
        </svg>
      </div>

      {/* 2. Ambient Glow Effects */}
      <div 
        className="absolute -top-24 left-1/4 w-72 sm:w-96 h-72 sm:h-96 max-w-[80vw] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 right-1/4 w-64 sm:w-80 h-64 sm:h-80 max-w-[70vw] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      {/* 3. Elevated Content Card */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-[#0B1528] rounded-[28px] sm:rounded-[36px] overflow-hidden border border-slate-800/80 shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-end">
            
            {/* Left Column — Worker Visual (lg:col-span-5) */}
            <div className="lg:col-span-5 relative w-full flex items-end justify-center self-end pt-8 lg:pt-12 px-4 sm:px-6 -mb-1">
              <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-none aspect-[4/5] sm:aspect-[3/4]">
                <Image 
                  alt="เจ้าหน้าที่ขนส่ง N&M18 TRANSPORT" 
                  className="object-contain object-bottom" 
                  fill 
                  loading="lazy" 
                  sizes="(max-width: 1024px) 100vw, 40vw" 
                  src="/nm18box.webp"
                />
              </div>
            </div>

            {/* Right Column — Content (lg:col-span-7) */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 lg:pl-4 self-center">
              {/* Main Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-white leading-tight mb-7">
                สัมผัสบริการขนย้ายที่เหนือกว่า <span className="text-orange-lava">ดูแลทุกชิ้นถึงปลายทาง</span>
              </h2>

              {/* Clean Checklist */}
              <div className="space-y-4 mb-8">
                {checklistItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#05B84E] text-white flex items-center justify-center shrink-0 shadow-sm text-xs">
                      <FaCheck />
                    </div>
                    <span className="text-slate-100 text-sm sm:text-base font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
                {/* Button 1 (LINE) */}
                <a
                  href="https://liff.line.me/1645278921-kWRPP32q/?accountId=952yyanc"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="แอดไลน์ขอประเมินราคาขนส่งฟรี"
                  className="w-full sm:w-auto justify-center bg-[#F59E0B] hover:bg-[#d97706] text-black font-bold px-5 sm:px-7 py-3.5 rounded-full text-sm sm:text-base inline-flex items-center gap-2.5 transition-all shadow-md hover:scale-105"
                >
                  <FaLine className="text-xl" />
                  <span>ขอประเมินราคาฟรี</span>
                </a>

                {/* Button 2 (Call) */}
                <a
                  href="tel:0958010958"
                  aria-label="โทรติดต่อ N&M18 TRANSPORT เบอร์ 095-801-0958"
                  className="w-full sm:w-auto justify-center bg-[#132238] hover:bg-[#1a2d48] text-white border border-slate-700/80 font-bold px-5 sm:px-7 py-3.5 rounded-full text-sm sm:text-base inline-flex items-center gap-2.5 transition-all hover:scale-105"
                >
                  <FaPhoneVolume className="text-sm text-[#F59E0B]" />
                  <span>โทรเลย 095-801-0958</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

