import { FaPhone, FaLine } from 'react-icons/fa6';
import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const CTASection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 my-10 bg-gradient-to-br from-[#0f1c38] to-[#050a14] text-center rounded-[25px] border-2 border-orange-lava/30 shadow-[0_0_30px_rgba(255,69,0,0.1)] relative overflow-hidden w-[calc(100%-2rem)] max-w-[1000px] mx-auto px-4 sm:px-6">
      <div className="absolute top-2.5 -right-[30px] bg-orange-lava text-white px-10 py-1.5 rotate-45 font-bold text-xs shadow-lg">
        SPECIAL
      </div>
      
      <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-5">ประเมินราคา <span className="text-orange-lava">ฟรี!</span> ไม่มีค่าใช้จ่ายแอบแฝง</h2>
      <p className="text-text-gray mb-6 text-base sm:text-lg">เริ่มต้นเพียง</p>
      
      <div className="text-5xl md:text-7xl font-bold text-orange-lava leading-none my-6 drop-shadow-[0_0_20px_rgba(255,69,0,0.6)] animate-[neonPulse_3s_infinite_alternate]">
        1,000.-
      </div>
      
      <p className="text-text-gray mb-8 sm:mb-10 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
        พร้อมบริการคนช่วยยกของ แพ็คของให้ฟรี ตลอด 24 ชม. ราคาเป็นกันเอง ตกลงราคาก่อนเริ่มงาน
      </p>
      
      <div className="flex flex-col md:flex-row gap-3 sm:gap-4 justify-center items-center">
        <Button href="tel:0958010958" aria-label="โทรติดต่อ N&M18 TRANSPORT เพื่อจองคิวรถรับจ้าง" className="w-full md:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg">
          <FaPhone aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0" /> โทรสอบถามราคา
        </Button>
        <Button variant="line" href="https://liff.line.me/1645278921-kWRPP32q/?accountId=952yyanc" target="_blank" aria-label="แอดไลน์ N&M18 TRANSPORT เพื่อประเมินราคาค่าขนย้ายฟรี" className="w-full md:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg">
          <FaLine aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0 text-2xl" /> ทักไลน์ ประเมินราคา
        </Button>
      </div>
    </section>
  );
};
