import { FaAngleRight, FaLocationDot, FaPhone, FaLine, FaFacebookF } from 'react-icons/fa6';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '../ui/Container';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#02060d] pt-15 pb-8 text-[#B0B8C4] border-t border-white/5 mt-15">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10 text-center md:text-left">
          <div className="footer-col">
            <Image src="/images/logos/logo-nm18.webp" alt="N&M18 TRANSPORT" width={200} height={80} className="h-[80px] w-auto mx-auto md:mx-0 mb-5 drop-shadow-[0_0_1px_white]" />
            <p className="mb-4">
              บริการรถกระบะรับจ้าง รถตู้ทึบ รถคอก ขนของ ย้ายบ้าน ย้ายคอนโด หอพัก ทั่วประเทศไทย บริการดี ยกของให้ ราคาคุ้มค่า
            </p>
          </div>

          <div className="footer-col relative pb-2.5">
            <h4 className="text-white text-lg mb-5 relative pb-2.5 after:content-[''] after:absolute after:bottom-0 after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0 after:w-10 after:h-[3px] after:bg-orange-lava after:rounded-[3px]">
              บริการของเรา
            </h4>
            <ul className="list-none space-y-3">
              <li><Link href="/service/moving" className="text-[#B0B8C4] hover:text-orange-lava transition-all duration-300 flex items-center justify-center md:justify-start gap-2 hover:translate-x-1"><FaAngleRight aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0" /> ขนย้ายของ / ย้ายบ้าน</Link></li>
              <li><Link href="/service/pets" className="text-[#B0B8C4] hover:text-orange-lava transition-all duration-300 flex items-center justify-center md:justify-start gap-2 hover:translate-x-1"><FaAngleRight aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0" /> รับส่งสัตว์เลี้ยง</Link></li>
              <li><Link href="/service/moto" className="text-[#B0B8C4] hover:text-orange-lava transition-all duration-300 flex items-center justify-center md:justify-start gap-2 hover:translate-x-1"><FaAngleRight aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0" /> ขนส่งมอเตอร์ไซค์</Link></li>
            </ul>
          </div>

          <div className="footer-col relative pb-2.5">
            <h4 className="text-white text-lg mb-5 relative pb-2.5 after:content-[''] after:absolute after:bottom-0 after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0 after:w-10 after:h-[3px] after:bg-orange-lava after:rounded-[3px]">
              เมนูหลัก
            </h4>
            <ul className="list-none space-y-3">
              <li><Link href="/" className="text-[#B0B8C4] hover:text-orange-lava transition-all duration-300 flex items-center justify-center md:justify-start gap-2 hover:translate-x-1"><FaAngleRight aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0" /> หน้าแรก</Link></li>
              <li><Link href="/works" className="text-[#B0B8C4] hover:text-orange-lava transition-all duration-300 flex items-center justify-center md:justify-start gap-2 hover:translate-x-1"><FaAngleRight aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0" /> ผลงานขนส่ง</Link></li>
              <li><Link href="/contact" className="text-[#B0B8C4] hover:text-orange-lava transition-all duration-300 flex items-center justify-center md:justify-start gap-2 hover:translate-x-1"><FaAngleRight aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0" /> ติดต่อเรา</Link></li>
            </ul>
          </div>

          <div className="footer-col relative pb-2.5">
            <h4 className="text-white text-lg mb-5 relative pb-2.5 after:content-[''] after:absolute after:bottom-0 after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0 after:w-10 after:h-[3px] after:bg-orange-lava after:rounded-[3px]">
              ติดต่อเรา
            </h4>
            <div className="flex justify-center md:justify-start items-start gap-4 mb-4">
              <FaLocationDot aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0 text-orange-lava mt-1" />
              <span>ให้บริการหลัก: นครสวรรค์, กำแพงเพชร, พิจิตร, อุทัยธานี และวิ่งทั่วไทย</span>
            </div>
            <div className="flex justify-center md:justify-start items-start gap-4 mb-4">
              <FaPhone aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0 text-orange-lava mt-1" />
              <span>095-801-0958 (คุณนิว)<br />บริการ 24 ชั่วโมง</span>
            </div>
            <div className="flex justify-center md:justify-start items-start gap-4 mb-4">
              <FaLine aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0 text-orange-lava mt-1" />
              <span>Line ID: @952yyanc</span>
            </div>
            <div className="flex justify-center md:justify-start items-start gap-4 mb-4">
              <FaFacebookF aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0 text-orange-lava mt-1" />
              <a href="https://www.facebook.com/profile.php?id=100085299521050" target="_blank" rel="noopener noreferrer" aria-label="เยี่ยมชมเพจ Facebook ของ N&M18 TRANSPORT" className="hover:text-orange-lava transition-colors">N&m บริการ รถรับจ้าง กระบะตู้ทึบ ขนส่ง ทั่วไทย</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            © 2026 N&M18 TRANSPORT. All Rights Reserved.
          </div>
          <div className="dev-credit">
            Developed by <a href="https://kimx-wed.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-neon-blue font-semibold hover:text-white hover:shadow-neon-blue transition-all">kimx-wed</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
