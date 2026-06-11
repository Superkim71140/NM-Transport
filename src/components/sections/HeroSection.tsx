import React from 'react';
import Image from 'next/image';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden text-center text-white py-[90px] md:py-[130px]">
      {/* Next.js optimized background image */}
      <Image 
        src="/images/portfolio/S__2531437.jpg" 
        alt="N&M18 TRANSPORT Hero Background"
        fill
        priority
        className="object-cover object-center absolute inset-0 -z-20"
      />
      
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050a14]/85 to-[#0f1c38]/90 -z-10"></div>
      
      {/* Shine effect overlay */}
      <div className="absolute top-0 -left-1/2 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-[25deg] animate-[shine_5s_infinite] -z-10"></div>

      <Container className="relative z-10">
        <h1 className="text-[1.8rem] md:text-5xl font-extrabold leading-tight mb-5 tracking-tight drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
          N&M18 TRANSPORT รถรับจ้าง<br/>
          <span className="block text-[2.2rem] md:text-[5rem] text-orange-lava mt-1 drop-shadow-[0_0_20px_rgba(255,69,0,0.4)]">
            ถึงไว ปลอดภัย 100%
          </span>
        </h1>
        
        <p className="text-base md:text-xl mb-8 text-[#d0d7e1] max-w-2xl mx-auto px-2.5 md:px-0">
          บริการรถกระบะรับจ้าง รถตู้ทึบ ขนย้ายบ้าน ขนย้ายมอเตอร์ไซค์<br/>
          นครสวรรค์และทั่วประเทศ <span className="text-orange-lava font-medium">ประเมินราคาฟรี บริการด้วยใจ</span>
        </p>
        
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-center mb-8 w-full md:w-auto px-5 md:px-0">
          <Button href="tel:0958010958" className="w-full md:w-auto py-3 md:py-4 px-6 md:px-9 text-base md:text-xl">
            <i className="fa-solid fa-phone-volume"></i> โทรจองรถเลย!
          </Button>
          <Button variant="line" href="https://liff.line.me/1645278921-kWRPP32q/?accountId=952yyanc" target="_blank" className="w-full md:w-auto py-3 md:py-4 px-6 md:px-9 text-base md:text-xl">
            <i className="fa-brands fa-line text-2xl"></i> ทักไลน์จองคิว
          </Button>
        </div>

        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          <div className="bg-white/5 border border-white/15 px-5 py-2 rounded-full text-[0.95rem] backdrop-blur-[5px] transition-all duration-300 hover:bg-white/10 hover:border-neon-blue hover:shadow-neon-blue hover:-translate-y-0.5">
            <i className="fa-solid fa-shield-halved text-neon-blue mr-1.5"></i> รับประกันสินค้า
          </div>
          <div className="bg-white/5 border border-white/15 px-5 py-2 rounded-full text-[0.95rem] backdrop-blur-[5px] transition-all duration-300 hover:bg-white/10 hover:border-neon-blue hover:shadow-neon-blue hover:-translate-y-0.5">
            <i className="fa-solid fa-clock text-neon-blue mr-1.5"></i> บริการ 24 ชม.
          </div>
          <div className="bg-white/5 border border-white/15 px-5 py-2 rounded-full text-[0.95rem] backdrop-blur-[5px] transition-all duration-300 hover:bg-white/10 hover:border-neon-blue hover:shadow-neon-blue hover:-translate-y-0.5">
            <i className="fa-solid fa-thumbs-up text-neon-blue mr-1.5"></i> ราคาเป็นกันเอง
          </div>
        </div>
      </Container>
    </section>
  );
};
