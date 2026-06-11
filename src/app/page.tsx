import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { HeroSection } from '../components/sections/HeroSection';
import { CTASection } from '../components/sections/CTASection';
import { ContactSection } from '../components/sections/ContactSection';
import { ServiceCard } from '../components/cards/ServiceCard';
import { AreaCard } from '../components/cards/AreaCard';
import { PortfolioCard } from '../components/cards/PortfolioCard';
import { Container } from '../components/ui/Container';
import { Counter } from '../components/ui/Counter';
import { ReviewsSlider } from '../components/sections/ReviewsSlider';
import { IndexFAQ } from './IndexFAQ';

export const metadata: Metadata = {
  title: "N&M18 TRANSPORT - รถรับจ้างขนของ ย้ายคอนโด ย้ายหอพัก กรุงเทพ-ปริมณฑล เริ่ม 1,000.-",
  description: "N&M18 TRANSPORT บริการรถรับจ้างขนของ รถกระบะตู้ทึบ รถ 4 ล้อใหญ่ ย้ายหอพัก ย้ายคอนโด ย้ายบ้าน กรุงเทพ-ปริมณฑลและทั่วไทย เริ่มต้น 1,000 บาท โทร 095-801-0958",
};

export default function Home() {
  return (
    <main>
      {/* 1. Hero Section & Hero Badges */}
      <HeroSection />

      {/* 2. Why Choose Us (Feature Grid) */}
      <section className="relative z-10 pb-12 -mt-10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-gradient-to-br from-[#0f1c38]/90 to-[#050a14]/95 border border-orange-lava/20 p-6 rounded-2xl flex items-start gap-4 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:border-orange-lava hover:shadow-[0_0_20px_rgba(255,69,0,0.2)]">
              <div className="min-w-[60px] h-[60px] bg-orange-lava/10 rounded-xl flex items-center justify-center text-[1.8rem] text-orange-lava border border-orange-lava/30">
                <i className="fa-solid fa-money-bill-wave"></i>
              </div>
              <div>
                <h4 className="text-white text-[1.1rem] font-bold mb-[5px]">ราคาจริงใจ ไม่มีบวกเพิ่ม</h4>
                <p className="text-text-gray text-[0.9rem] leading-[1.5]">ตกลงราคาก่อนเริ่มงาน จบที่เท่าไหร่จ่ายเท่านั้น ไม่มีการเรียกเก็บค่าใช้จ่ายแฝงหน้างาน สบายใจได้</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#0f1c38]/90 to-[#050a14]/95 border border-orange-lava/20 p-6 rounded-2xl flex items-start gap-4 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:border-orange-lava hover:shadow-[0_0_20px_rgba(255,69,0,0.2)]">
              <div className="min-w-[60px] h-[60px] bg-orange-lava/10 rounded-xl flex items-center justify-center text-[1.8rem] text-orange-lava border border-orange-lava/30">
                <i className="fa-solid fa-map-location-dot"></i>
              </div>
              <div>
                <h4 className="text-white text-[1.1rem] font-bold mb-[5px]">ติดตามสถานะได้ตลอด</h4>
                <p className="text-text-gray text-[0.9rem] leading-[1.5]">รู้ความเคลื่อนไหวตลอดการขนส่ง แจ้งพิกัดชัดเจน สินค้าถึงมือผู้รับตรงเวลา ไม่ต้องกังวล</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#0f1c38]/90 to-[#050a14]/95 border border-orange-lava/20 p-6 rounded-2xl flex items-start gap-4 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:border-orange-lava hover:shadow-[0_0_20px_rgba(255,69,0,0.2)]">
              <div className="min-w-[60px] h-[60px] bg-orange-lava/10 rounded-xl flex items-center justify-center text-[1.8rem] text-orange-lava border border-orange-lava/30">
                <i className="fa-solid fa-user-shield"></i>
              </div>
              <div>
                <h4 className="text-white text-[1.1rem] font-bold mb-[5px]">ทีมงานมืออาชีพ</h4>
                <p className="text-text-gray text-[0.9rem] leading-[1.5]">พนักงานสุภาพ ผ่านการอบรมการแพ็คและยกของ ช่วยดูแลสินค้าของคุณเหมือนเป็นของตัวเอง</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* WORKS & GALLERY */}
      <section className="py-[80px] bg-[#0f1c38]/30" id="gallery">
        <Container>
          <div className="text-center mb-[60px] -mt-[20px]">
            <h2 className="text-[2.5rem] font-bold text-white mb-5 relative inline-block after:content-[''] after:block after:w-[80px] after:h-[5px] after:bg-orange-lava after:my-[15px] after:mx-auto after:shadow-neon-orange after:rounded-[5px]">ผลงานการขนส่ง</h2>
            <p className="text-text-gray">ตัวอย่างงานจริง มั่นใจได้ทุกการขนส่ง</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-[15px]">
            <div className="aspect-[4/3] rounded-[15px] overflow-hidden relative border border-white/10 transition-all duration-300 bg-navy-primary hover:border-orange-lava hover:shadow-[0_0_20px_rgba(255,69,0,0.3)] hover:-translate-y-1 group">
              <Image src="/images/portfolio/S__2531437.jpg" alt="รถรับจ้างตู้ทึบ N&M18" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="aspect-[4/3] rounded-[15px] overflow-hidden relative border border-white/10 transition-all duration-300 bg-navy-primary hover:border-orange-lava hover:shadow-[0_0_20px_rgba(255,69,0,0.3)] hover:-translate-y-1 group">
              <Image src="/images/portfolio/S__17556285.png" alt="ขนย้ายหอพัก ราคาถูก" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="aspect-[4/3] rounded-[15px] overflow-hidden relative border border-white/10 transition-all duration-300 bg-navy-primary hover:border-orange-lava hover:shadow-[0_0_20px_rgba(255,69,0,0.3)] hover:-translate-y-1 group">
              <Image src="/images/portfolio/S__2531426.jpg" alt="รถ 6 ล้อรับจ้าง ขนของเยอะ" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="aspect-[4/3] rounded-[15px] overflow-hidden relative border border-white/10 transition-all duration-300 bg-navy-primary hover:border-orange-lava hover:shadow-[0_0_20px_rgba(255,69,0,0.3)] hover:-translate-y-1 group">
              <Image src="/images/portfolio/S__17556168.jpg" alt="ขนส่ง Big Bike มอเตอร์ไซค์" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="aspect-[4/3] rounded-[15px] overflow-hidden relative border border-white/10 transition-all duration-300 bg-navy-primary hover:border-orange-lava hover:shadow-[0_0_20px_rgba(255,69,0,0.3)] hover:-translate-y-1 group">
              <Image src="/images/portfolio/S__2531424.jpg" alt="แพ็คของขนย้าย ป้องกันกระแทก" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="aspect-[4/3] rounded-[15px] overflow-hidden relative border border-white/10 transition-all duration-300 bg-navy-primary hover:border-orange-lava hover:shadow-[0_0_20px_rgba(255,69,0,0.3)] hover:-translate-y-1 group">
              <Image src="/images/portfolio/S__2531422.jpg" alt="ขนส่งทั่วไป รถกระบะรับจ้าง" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
          </div>
            
          <div className="text-center mt-10 flex gap-[15px] justify-center flex-wrap">
            <Link href="/works" className="inline-flex items-center justify-center gap-2.5 px-[35px] py-[12px] rounded-full font-semibold border-2 border-orange-lava bg-orange-lava text-white shadow-neon-orange transition-all duration-300 hover:bg-orange-glow hover:shadow-[0_0_35px_rgba(255,69,0,1)] hover:-translate-y-[3px] hover:scale-105 z-10 overflow-hidden">
              <i className="fa-solid fa-images"></i> ดูผลงานทั้งหมด
            </Link>
            <a href="https://www.facebook.com/profile.php?id=100085299521050" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 px-[35px] py-[12px] rounded-full font-semibold border-2 border-[#1877F2] bg-[#1877F2] text-white shadow-[0_0_15px_rgba(24,119,242,0.6)] transition-all duration-300 hover:bg-[#1464c4] hover:shadow-[0_0_25px_rgba(24,119,242,0.8)] hover:-translate-y-[3px] z-10 overflow-hidden">
              <i className="fa-brands fa-facebook"></i> ดูรีวิวเพิ่มเติม (คลิก)
            </a>
          </div>
        </Container>
      </section>

      {/* 3. Comparison Table */}
      <section className="py-[60px] bg-[#0f1c38]/40 mb-[40px]">
        <Container>
          <div className="text-center mb-[60px] -mt-[20px]">
            <h2 className="text-[2.5rem] font-bold text-white mb-5 relative inline-block after:content-[''] after:block after:w-[80px] after:h-[5px] after:bg-orange-lava after:my-[15px] after:mx-auto after:shadow-neon-orange after:rounded-[5px]">ทำไมต้องเลือก N&M18 TRANSPORT?</h2>
            <p className="text-text-gray">เปรียบเทียบให้เห็นชัดๆ ว่าเราแตกต่างและคุ้มค่ากว่าอย่างไร</p>
          </div>
          
          <div className="bg-navy-primary rounded-[20px] border border-white/5 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.3)] max-w-[900px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-[1.2fr_1.2fr_1fr] p-5 bg-black/30 border-b border-white/5 text-center font-bold text-white text-[0.9rem] md:text-base">
              <div>หัวข้อเปรียบเทียบ</div>
              <div className="text-orange-lava">N&M18 TRANSPORT</div>
              <div className="hidden md:block text-[#94a3b8]">รถรับจ้างทั่วไป</div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-[1.2fr_1.2fr_1fr] p-5 border-b border-white/5 items-center transition-all duration-200 hover:bg-white/5 text-[0.9rem] md:text-base">
              <div className="text-text-gray font-medium flex items-center gap-2.5"><i className="fa-solid fa-tag text-orange-lava"></i> ราคาค่าบริการ</div>
              <div className="text-orange-lava font-bold text-center md:text-[1.1rem] drop-shadow-[0_0_10px_rgba(255,69,0,0.3)]"><i className="fa-solid fa-check text-line-green mr-1.5 text-[1.2rem]"></i> ชัดเจน จบที่ตกลง</div>
              <div className="hidden md:block text-[#64748b] text-center line-through opacity-70"><i className="fa-solid fa-xmark text-[#ef4444] text-[1.2rem]"></i> อาจมีบวกเพิ่มหน้างาน</div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-[1.2fr_1.2fr_1fr] p-5 border-b border-white/5 items-center transition-all duration-200 hover:bg-white/5 text-[0.9rem] md:text-base">
              <div className="text-text-gray font-medium flex items-center gap-2.5"><i className="fa-solid fa-shield-cat text-orange-lava"></i> การรับประกัน</div>
              <div className="text-orange-lava font-bold text-center md:text-[1.1rem] drop-shadow-[0_0_10px_rgba(255,69,0,0.3)]"><i className="fa-solid fa-check text-line-green mr-1.5 text-[1.2rem]"></i> รับผิดชอบ 100%</div>
              <div className="hidden md:block text-[#64748b] text-center line-through opacity-70"><i className="fa-solid fa-question text-[#f59e0b] text-[1.2rem]"></i> ไม่แน่นอน</div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-[1.2fr_1.2fr_1fr] p-5 border-b border-white/5 items-center transition-all duration-200 hover:bg-white/5 text-[0.9rem] md:text-base">
              <div className="text-text-gray font-medium flex items-center gap-2.5"><i className="fa-solid fa-truck-ramp-box text-orange-lava"></i> บริการยกของ</div>
              <div className="text-orange-lava font-bold text-center md:text-[1.1rem] drop-shadow-[0_0_10px_rgba(255,69,0,0.3)]"><i className="fa-solid fa-check text-line-green mr-1.5 text-[1.2rem]"></i> ทีมงานมืออาชีพ</div>
              <div className="hidden md:block text-[#64748b] text-center line-through opacity-70"><i className="fa-solid fa-xmark text-[#ef4444] text-[1.2rem]"></i> คนขับคนเดียว/ไม่ช่วยยก</div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-[1.2fr_1.2fr_1fr] p-5 border-b border-white/5 items-center transition-all duration-200 hover:bg-white/5 text-[0.9rem] md:text-base">
              <div className="text-text-gray font-medium flex items-center gap-2.5"><i className="fa-solid fa-umbrella text-orange-lava"></i> สภาพรถ</div>
              <div className="text-orange-lava font-bold text-center md:text-[1.1rem] drop-shadow-[0_0_10px_rgba(255,69,0,0.3)]"><i className="fa-solid fa-check text-line-green mr-1.5 text-[1.2rem]"></i> ตู้ทึบกันฝน ใหม่สะอาด</div>
              <div className="hidden md:block text-[#64748b] text-center line-through opacity-70"><i className="fa-solid fa-xmark text-[#ef4444] text-[1.2rem]"></i> รถเก่า/ผ้าใบรั่วซึม</div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-[1.2fr_1.2fr_1fr] p-5 items-center transition-all duration-200 hover:bg-white/5 text-[0.9rem] md:text-base">
              <div className="text-text-gray font-medium flex items-center gap-2.5"><i className="fa-solid fa-headset text-orange-lava"></i> การติดต่อ</div>
              <div className="text-orange-lava font-bold text-center md:text-[1.1rem] drop-shadow-[0_0_10px_rgba(255,69,0,0.3)]"><i className="fa-solid fa-check text-line-green mr-1.5 text-[1.2rem]"></i> แอดมินดูแล 24 ชม.</div>
              <div className="hidden md:block text-[#64748b] text-center line-through opacity-70"><i className="fa-solid fa-xmark text-[#ef4444] text-[1.2rem]"></i> ติดต่อยาก/ทิ้งงาน</div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Trust Badge & Licensing section */}
      <section className="container mx-auto px-5">
        <div className="text-center mb-[60px] bg-gradient-to-br from-white/5 to-[#0f1c38]/90 py-[40px] px-[30px] rounded-[20px] border-2 border-transparent relative shadow-[0_0_30px_rgba(0,0,0,0.5)] bg-clip-padding before:content-[''] before:absolute before:inset-0 before:-z-10 before:-m-[2px] before:rounded-[22px] before:bg-gradient-to-r before:from-orange-lava before:via-gold before:to-orange-lava before:opacity-60">
          <h3 className="text-white mb-[15px] text-[1.3rem] font-bold inline-block">
            <span className="block text-[1.6rem] bg-gradient-to-r from-white to-[#ffb700] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] mb-[10px] font-bold">
              <i className="fa-solid fa-certificate text-gold"></i> มั่นใจได้!
            </span>
            เราจดทะเบียนขนส่งถูกต้องตามกฎหมาย
          </h3>
          <p className="mb-5 text-[#ccc] text-[1.1rem]">บริษัท เอ็นแอนด์เอ็ม 18 ทรานสปอร์ต จำกัด (N&M 18 TRANSPORT)</p>
          
          <div className="max-w-[500px] mx-auto mt-5 overflow-hidden rounded-[10px] border-[4px] border-navy-primary shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-[1.02] hover:border-gold relative aspect-[1.4/1]">
            <Image src="/images/portfolio/S__17556166.jpg" alt="ใบอนุญาตประกอบการขนส่ง N&M 18 TRANSPORT" fill className="object-contain" />
          </div>
        </div>
      </section>

      {/* 5. Reviews Slider */}
      <section className="py-[80px] bg-gradient-to-b from-[#0f1c38]/30 to-[#050a14]/95 relative">
        <Container>
          <div className="text-center mb-[60px] -mt-[20px]">
            <h2 className="text-[2.5rem] font-bold text-white mb-5 relative inline-block after:content-[''] after:block after:w-[80px] after:h-[5px] after:bg-orange-lava after:my-[15px] after:mx-auto after:shadow-neon-orange after:rounded-[5px]">รีวิวจากผู้ใช้งานจริง</h2>
            <p className="text-text-gray">ความประทับใจจากลูกค้าที่ไว้วางใจ N&M18 TRANSPORT</p>
          </div>
          
          <ReviewsSlider />
        </Container>
      </section>

      {/* 6. Stats Section */}
      <section className="py-[60px] bg-gradient-to-r from-[#0f1c38]/60 to-[#050a14]/90 border-y border-white/5 my-[40px]">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[15px] md:gap-[30px] text-center">
            <div className="p-5 border-none md:border-r border-b md:border-b-0 border-white/10">
              <div className="text-[1.5rem] md:text-[2.5rem] text-neon-blue mb-[10px] drop-shadow-[0_0_10px_#00f2ff]"><i className="fa-solid fa-truck-fast"></i></div>
              <Counter end={1500} className="text-[2rem] md:text-[3.5rem] font-extrabold text-white leading-none mb-[5px] font-prompt" />
              <p className="text-text-gray text-[1.1rem]">เที่ยวขนส่งสำเร็จ</p>
            </div>
            <div className="p-5 border-none md:border-r border-b md:border-b-0 border-white/10">
              <div className="text-[1.5rem] md:text-[2.5rem] text-neon-blue mb-[10px] drop-shadow-[0_0_10px_#00f2ff]"><i className="fa-solid fa-face-smile"></i></div>
              <Counter end={100} className="text-[2rem] md:text-[3.5rem] font-extrabold text-orange-lava leading-none mb-[5px] font-prompt drop-shadow-[0_0_15px_rgba(255,69,0,0.6)]" />
              <p className="text-text-gray text-[1.1rem]">% ลูกค้าพึงพอใจ</p>
            </div>
            <div className="p-5 border-none md:border-r border-white/10">
              <div className="text-[1.5rem] md:text-[2.5rem] text-neon-blue mb-[10px] drop-shadow-[0_0_10px_#00f2ff]"><i className="fa-solid fa-map-location-dot"></i></div>
              <Counter end={77} className="text-[2rem] md:text-[3.5rem] font-extrabold text-white leading-none mb-[5px] font-prompt" />
              <p className="text-text-gray text-[1.1rem]">จังหวัดให้บริการ</p>
            </div>
            <div className="p-5">
              <div className="text-[1.5rem] md:text-[2.5rem] text-neon-blue mb-[10px] drop-shadow-[0_0_10px_#00f2ff]"><i className="fa-solid fa-clock"></i></div>
              <Counter end={24} className="text-[2rem] md:text-[3.5rem] font-extrabold text-white leading-none mb-[5px] font-prompt" />
              <p className="text-text-gray text-[1.1rem]">ชั่วโมงพร้อมลุย</p>
            </div>
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="py-[80px]" id="services">
        <Container>
          <div className="text-center mb-[60px] -mt-[20px]">
            <h2 className="text-[2.5rem] font-bold text-white mb-5 relative inline-block after:content-[''] after:block after:w-[80px] after:h-[5px] after:bg-orange-lava after:my-[15px] after:mx-auto after:shadow-neon-orange after:rounded-[5px]">บริการของเรา</h2>
            <p className="text-text-gray max-w-2xl mx-auto">ตอบโจทย์ทุกการขนย้าย ด้วยรถกระบะตู้ทึบมาตรฐาน</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
            <ServiceCard 
              title="รับส่งมอเตอร์ไซค์" 
              description="มีอุปกรณ์ล็อคล้อ เชือกมัดแน่นหนา ยกขึ้น-ลงให้ ไม่ต้องเหนื่อยเอง ส่งถึงหน้าบ้าน"
              icon="fa-solid fa-motorcycle"
              href="/service/moto"
            />
            <ServiceCard 
              title="ย้ายบ้าน / ย้ายหอ" 
              description="ขนย้ายเฟอร์นิเจอร์ ตู้เย็น เครื่องซักผ้า รถตู้ทึบกันฝน 100% ของเยอะแค่ไหนก็จัดให้คุ้ม"
              icon="fa-solid fa-box-open"
              href="/service/moving"
            />
            <ServiceCard 
              title="ฝากส่งสินค้า/เหมาคัน" 
              description="รับฝากส่งสินค้าชิ้นใหญ่ ชิ้นเล็ก ไปต่างจังหวัด วิ่งงานด่วน งานเหมา ทั่วราชอาณาจักร"
              icon="fa-solid fa-truck-pickup"
              href="/contact"
            />
          </div>
        </Container>
      </section>

      {/* 7. Pricing Banner */}
      <section className="container mx-auto px-5">
        <div className="bg-gradient-to-br from-navy-primary to-navy-dark text-center py-[30px] md:py-[60px] px-[15px] md:px-[30px] rounded-[25px] my-[20px] md:my-[40px] max-w-[1000px] mx-auto border-2 border-orange-lava/30 shadow-[0_0_30px_rgba(255,69,0,0.1)] relative overflow-hidden before:content-['SPECIAL'] before:absolute before:top-[10px] before:-right-[30px] before:bg-orange-lava before:text-white before:py-[5px] before:px-[40px] before:rotate-45 before:font-bold before:text-[0.8rem] before:shadow-[0_0_10px_rgba(0,0,0,0.5)]">
          <p className="text-white text-[1.1rem] mb-[5px]">โปรโมชั่นพิเศษ! จองล่วงหน้ามีราคาพิเศษ</p>
          <h3 className="text-white font-bold text-2xl mt-4">ค่าบริการเริ่มต้นเพียง</h3>
          <div className="text-[3.5rem] md:text-[5rem] font-bold text-orange-lava leading-none my-[10px] md:my-[15px] animate-[neonPulse_3s_infinite_alternate]">1,000.-</div>
          <p className="text-text-gray">ราคาขึ้นอยู่กับระยะทางและประเภทงาน (โทรสอบถามได้เลยครับ)</p>
          <br/>
          <div className="flex gap-[15px] justify-center flex-wrap mt-2">
            <Link href="tel:0958010958" className="inline-flex items-center justify-center gap-2.5 px-[35px] py-[12px] rounded-full font-semibold border-2 border-orange-lava bg-orange-lava text-white shadow-neon-orange transition-all duration-300 hover:bg-orange-glow hover:shadow-[0_0_35px_rgba(255,69,0,1)] hover:-translate-y-[3px] hover:scale-105 z-10 overflow-hidden">
              <i className="fa-solid fa-calculator"></i> เช็คราคาผ่านโทรศัพท์
            </Link>
            <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=952yyanc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 px-[35px] py-[12px] rounded-full font-semibold border-2 border-[#06C755] bg-[#06C755] text-white shadow-[0_0_15px_rgba(6,199,85,0.6)] transition-all duration-300 hover:bg-[#05a84a] hover:shadow-[0_0_25px_rgba(6,199,85,0.8)] hover:-translate-y-[3px] z-10 overflow-hidden">
              <i className="fa-brands fa-line"></i> เช็คราคาผ่าน LINE
            </a>
          </div>
        </div>
      </section>

      {/* 8. How it Works */}
      <section className="py-[80px] bg-[#0f1c38]/50" id="how-it-works">
        <Container>
          <div className="text-center mb-[60px] -mt-[20px]">
            <h2 className="text-[2.5rem] font-bold text-white mb-5 relative inline-block after:content-[''] after:block after:w-[80px] after:h-[5px] after:bg-orange-lava after:my-[15px] after:mx-auto after:shadow-neon-orange after:rounded-[5px]">4 ขั้นตอนง่ายๆ ในการใช้บริการ</h2>
            <p className="text-text-gray">สะดวก รวดเร็ว ไม่ยุ่งยาก</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[15px] md:gap-[40px] text-center mt-[20px] md:mt-[50px]">
            <div className="relative p-2.5 transition-all duration-300 group">
              <div className="absolute top-[-5px] right-1/2 translate-x-[20px] md:translate-x-[45px] w-[25px] h-[25px] md:w-[38px] md:h-[38px] bg-gradient-to-br from-orange-lava to-[#ff2a00] text-white border-[3px] border-navy-dark rounded-full flex items-center justify-center font-extrabold text-[0.9rem] md:text-[1.1rem] shadow-[0_5px_15px_rgba(0,0,0,0.3)] z-10 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-neon-blue group-hover:to-[#0099ff] group-hover:rotate-[360deg]">1</div>
              <div className="w-[60px] h-[60px] md:w-[110px] md:h-[110px] mx-auto mb-[10px] md:mb-[25px] rounded-full flex items-center justify-center text-[1.4rem] md:text-[2.5rem] text-white relative z-0 bg-[#0f1c38]/40 backdrop-blur-[5px] shadow-[0_10px_30px_rgba(0,0,0,0.3)] border-2 border-transparent bg-clip-padding transition-all duration-400 group-hover:-translate-y-[10px] group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(0,242,255,0.4)] group-hover:border-transparent before:content-[''] before:absolute before:inset-0 before:-z-10 before:-m-[2px] before:rounded-full before:bg-gradient-to-br before:from-neon-blue before:to-orange-lava group-hover:before:from-orange-lava group-hover:before:to-neon-blue">
                <i className="fa-solid fa-phone-volume group-hover:animate-[pulse-icon_1.5s_infinite] group-hover:drop-shadow-[0_0_15px_white]"></i>
              </div>
              <h4 className="text-white font-bold text-[0.95rem] md:text-[1.2rem] mb-2">โทร/ไลน์ จองคิว</h4>
              <p className="hidden md:block text-text-gray text-[0.9rem]">แจ้งต้นทาง-ปลายทาง และรายละเอียดของ</p>
              <div className="hidden lg:block absolute top-[55px] -right-1/2 w-full h-[2px] bg-gradient-to-r from-neon-blue to-transparent opacity-30 -z-10"></div>
            </div>

            <div className="relative p-2.5 transition-all duration-300 group">
              <div className="absolute top-[-5px] right-1/2 translate-x-[20px] md:translate-x-[45px] w-[25px] h-[25px] md:w-[38px] md:h-[38px] bg-gradient-to-br from-orange-lava to-[#ff2a00] text-white border-[3px] border-navy-dark rounded-full flex items-center justify-center font-extrabold text-[0.9rem] md:text-[1.1rem] shadow-[0_5px_15px_rgba(0,0,0,0.3)] z-10 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-neon-blue group-hover:to-[#0099ff] group-hover:rotate-[360deg]">2</div>
              <div className="w-[60px] h-[60px] md:w-[110px] md:h-[110px] mx-auto mb-[10px] md:mb-[25px] rounded-full flex items-center justify-center text-[1.4rem] md:text-[2.5rem] text-white relative z-0 bg-[#0f1c38]/40 backdrop-blur-[5px] shadow-[0_10px_30px_rgba(0,0,0,0.3)] border-2 border-transparent bg-clip-padding transition-all duration-400 group-hover:-translate-y-[10px] group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(0,242,255,0.4)] group-hover:border-transparent before:content-[''] before:absolute before:inset-0 before:-z-10 before:-m-[2px] before:rounded-full before:bg-gradient-to-br before:from-neon-blue before:to-orange-lava group-hover:before:from-orange-lava group-hover:before:to-neon-blue">
                <i className="fa-solid fa-truck-ramp-box group-hover:animate-[pulse-icon_1.5s_infinite] group-hover:drop-shadow-[0_0_15px_white]"></i>
              </div>
              <h4 className="text-white font-bold text-[0.95rem] md:text-[1.2rem] mb-2">รถเข้ารับสินค้า</h4>
              <p className="hidden md:block text-text-gray text-[0.9rem]">ทีมงานเข้ายกของ และแพ็คป้องกันตามนัดหมาย</p>
              <div className="hidden lg:block absolute top-[55px] -right-1/2 w-full h-[2px] bg-gradient-to-r from-neon-blue to-transparent opacity-30 -z-10"></div>
            </div>

            <div className="relative p-2.5 transition-all duration-300 group">
              <div className="absolute top-[-5px] right-1/2 translate-x-[20px] md:translate-x-[45px] w-[25px] h-[25px] md:w-[38px] md:h-[38px] bg-gradient-to-br from-orange-lava to-[#ff2a00] text-white border-[3px] border-navy-dark rounded-full flex items-center justify-center font-extrabold text-[0.9rem] md:text-[1.1rem] shadow-[0_5px_15px_rgba(0,0,0,0.3)] z-10 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-neon-blue group-hover:to-[#0099ff] group-hover:rotate-[360deg]">3</div>
              <div className="w-[60px] h-[60px] md:w-[110px] md:h-[110px] mx-auto mb-[10px] md:mb-[25px] rounded-full flex items-center justify-center text-[1.4rem] md:text-[2.5rem] text-white relative z-0 bg-[#0f1c38]/40 backdrop-blur-[5px] shadow-[0_10px_30px_rgba(0,0,0,0.3)] border-2 border-transparent bg-clip-padding transition-all duration-400 group-hover:-translate-y-[10px] group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(0,242,255,0.4)] group-hover:border-transparent before:content-[''] before:absolute before:inset-0 before:-z-10 before:-m-[2px] before:rounded-full before:bg-gradient-to-br before:from-neon-blue before:to-orange-lava group-hover:before:from-orange-lava group-hover:before:to-neon-blue">
                <i className="fa-solid fa-route group-hover:animate-[pulse-icon_1.5s_infinite] group-hover:drop-shadow-[0_0_15px_white]"></i>
              </div>
              <h4 className="text-white font-bold text-[0.95rem] md:text-[1.2rem] mb-2">ขนส่งปลอดภัย</h4>
              <p className="hidden md:block text-text-gray text-[0.9rem]">ขับขี่อย่างระมัดระวัง ตรวจสอบสถานะได้</p>
              <div className="hidden lg:block absolute top-[55px] -right-1/2 w-full h-[2px] bg-gradient-to-r from-neon-blue to-transparent opacity-30 -z-10"></div>
            </div>

            <div className="relative p-2.5 transition-all duration-300 group">
              <div className="absolute top-[-5px] right-1/2 translate-x-[20px] md:translate-x-[45px] w-[25px] h-[25px] md:w-[38px] md:h-[38px] bg-gradient-to-br from-orange-lava to-[#ff2a00] text-white border-[3px] border-navy-dark rounded-full flex items-center justify-center font-extrabold text-[0.9rem] md:text-[1.1rem] shadow-[0_5px_15px_rgba(0,0,0,0.3)] z-10 transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-neon-blue group-hover:to-[#0099ff] group-hover:rotate-[360deg]">4</div>
              <div className="w-[60px] h-[60px] md:w-[110px] md:h-[110px] mx-auto mb-[10px] md:mb-[25px] rounded-full flex items-center justify-center text-[1.4rem] md:text-[2.5rem] text-white relative z-0 bg-[#0f1c38]/40 backdrop-blur-[5px] shadow-[0_10px_30px_rgba(0,0,0,0.3)] border-2 border-transparent bg-clip-padding transition-all duration-400 group-hover:-translate-y-[10px] group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(0,242,255,0.4)] group-hover:border-transparent before:content-[''] before:absolute before:inset-0 before:-z-10 before:-m-[2px] before:rounded-full before:bg-gradient-to-br before:from-neon-blue before:to-orange-lava group-hover:before:from-orange-lava group-hover:before:to-neon-blue">
                <i className="fa-solid fa-house-circle-check group-hover:animate-[pulse-icon_1.5s_infinite] group-hover:drop-shadow-[0_0_15px_white]"></i>
              </div>
              <h4 className="text-white font-bold text-[0.95rem] md:text-[1.2rem] mb-2">ส่งถึงที่หมาย</h4>
              <p className="hidden md:block text-text-gray text-[0.9rem]">ส่งมอบสินค้าถึงมือผู้รับปลายทางอย่างปลอดภัย</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 9. FAQ Section */}
      <section className="py-[80px]" id="faq">
        <Container>
          <div className="text-center mb-[60px] -mt-[20px]">
            <h2 className="text-[2.5rem] font-bold text-white mb-5 relative inline-block after:content-[''] after:block after:w-[80px] after:h-[5px] after:bg-orange-lava after:my-[15px] after:mx-auto after:shadow-neon-orange after:rounded-[5px]">คำถามที่พบบ่อย</h2>
            <p className="text-text-gray">คลายข้อสงสัย เพื่อความมั่นใจก่อนจ้างงาน</p>
          </div>
          
          <IndexFAQ />
        </Container>
      </section>

      <section className="container mx-auto mt-[40px] mb-[40px] p-[30px] bg-[#0f1c38]/60 rounded-[15px] border border-white/5">
        <h3 className="text-white text-center mb-[25px] text-[1.5rem] font-bold">
            <i className="fa-solid fa-map-location-dot text-orange-lava mr-2"></i> พื้นที่ให้บริการยอดนิยมในกรุงเทพฯ
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[20px] text-left text-[#d0d7e1]">
            <div>
                <h4 className="text-neon-blue text-[1.1rem] font-bold mb-[10px]">โซนกรุงเทพเหนือ</h4>
                <ul className="list-none text-[0.9rem] leading-[1.8]">
                    <li><i className="fa-solid fa-check text-line-green mr-[5px]"></i> ลาดพร้าว / จตุจักร</li>
                    <li><i className="fa-solid fa-check text-line-green mr-[5px]"></i> ดอนเมือง / หลักสี่</li>
                    <li><i className="fa-solid fa-check text-line-green mr-[5px]"></i> บางเขน / รามอินทรา</li>
                    <li><i className="fa-solid fa-check text-line-green mr-[5px]"></i> สายไหม / รังสิต</li>
                </ul>
            </div>
            <div>
                <h4 className="text-neon-blue text-[1.1rem] font-bold mb-[10px]">โซนบางนา-สมุทรปราการ</h4>
                <ul className="list-none text-[0.9rem] leading-[1.8]">
                    <li><i className="fa-solid fa-check text-line-green mr-[5px]"></i> บางนา / อุดมสุข</li>
                    <li><i className="fa-solid fa-check text-line-green mr-[5px]"></i> อ่อนนุช / ลาดกระบัง</li>
                    <li><i className="fa-solid fa-check text-line-green mr-[5px]"></i> กิ่งแก้ว / สุวรรณภูมิ</li>
                    <li><i className="fa-solid fa-check text-line-green mr-[5px]"></i> สมุทรปราการ / ปากน้ำ</li>
                </ul>
            </div>
            <div>
                <h4 className="text-neon-blue text-[1.1rem] font-bold mb-[10px]">โซนฝั่งธนบุรี</h4>
                <ul className="list-none text-[0.9rem] leading-[1.8]">
                    <li><i className="fa-solid fa-check text-line-green mr-[5px]"></i> บางแค / เพชรเกษม</li>
                    <li><i className="fa-solid fa-check text-line-green mr-[5px]"></i> พระราม 2 / ท่าข้าม</li>
                    <li><i className="fa-solid fa-check text-line-green mr-[5px]"></i> ปิ่นเกล้า / ตลิ่งชัน</li>
                    <li><i className="fa-solid fa-check text-line-green mr-[5px]"></i> บางบอน / เอกชัย</li>
                </ul>
            </div>
            <div>
                <h4 className="text-neon-blue text-[1.1rem] font-bold mb-[10px]">โซนใจกลางเมือง</h4>
                <ul className="list-none text-[0.9rem] leading-[1.8]">
                    <li><i className="fa-solid fa-check text-line-green mr-[5px]"></i> สุขุมวิท / เอกมัย</li>
                    <li><i className="fa-solid fa-check text-line-green mr-[5px]"></i> พระราม 9 / รัชดา</li>
                    <li><i className="fa-solid fa-check text-line-green mr-[5px]"></i> สาทร / สีลม</li>
                    <li><i className="fa-solid fa-check text-line-green mr-[5px]"></i> อนุสาวรีย์ชัยฯ / ดินแดง</li>
                </ul>
            </div>
        </div>
        <p className="text-center mt-[20px] text-[#aaa] text-[0.9rem]">
            *ให้บริการครอบคลุมทุกพื้นที่ในกรุงเทพและปริมณฑล (นนทบุรี, ปทุมธานี, สมุทรปราการ) ไม่เกี่ยงงาน ขึ้นตึกสูง คอนโด ซอยแคบ เราไปได้หมด
        </p>
      </section>

      {/* CTA SECTION */}
      <CTASection />

    </main>
  );
}
