import { FaPhone, FaLine, FaFacebookF } from 'react-icons/fa6';
import React from 'react';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-glass-gradient-light backdrop-blur-md border-t border-orange-lava/30 flex p-2.5 gap-2.5 z-[2000] md:hidden">
      <a href="tel:0958010958" aria-label="โทรติดต่อ N&M18 TRANSPORT เพื่อจองคิวรถรับจ้าง" className="flex-1 flex items-center justify-center gap-2 h-[50px] rounded-full font-bold text-white text-lg transition-all bg-orange-lava shadow-neon-orange">
        <FaPhone aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0" /> โทรเลย
      </a>
      <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=952yyanc" target="_blank" rel="noopener noreferrer" aria-label="แอดไลน์ N&M18 TRANSPORT เพื่อประเมินราคาค่าขนย้ายฟรี" className="flex-1 flex items-center justify-center gap-2 h-[50px] rounded-full font-bold text-white text-lg transition-all bg-line-green shadow-neon-green">
        <FaLine aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0 text-xl" /> Line
      </a>
      <a href="https://www.facebook.com/profile.php?id=100085299521050" target="_blank" rel="noopener noreferrer" aria-label="ส่งข้อความผ่าน Facebook N&M18 TRANSPORT" className="flex-1 flex items-center justify-center gap-2 h-[50px] rounded-full font-bold text-white text-lg transition-all bg-[#1877F2]">
        <FaFacebookF aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0 -messenger" /> ทักแชท
      </a>
    </div>
  );
};
