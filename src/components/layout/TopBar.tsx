import { FaBoltLightning, FaPhone, FaFacebookF } from 'react-icons/fa6';
import React from 'react';
import { Container } from '../ui/Container';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-black/40 text-white/80 py-2 text-sm border-b border-white/5">
      <Container className="flex justify-between items-center">
        <div className="hidden md:block">
          <FaBoltLightning aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0 text-neon-blue" /> บริการด่วน 24 ชม. <span className="text-orange-lava font-semibold">ส่งไว ปลอดภัย 100%</span>
        </div>
        <div className="flex gap-5 w-full md:w-auto justify-center md:justify-end">
          <a href="tel:0958010958" aria-label="โทรติดต่อ N&M18 TRANSPORT" className="text-text-gray flex items-center gap-2 hover:text-orange-lava transition-colors">
            <FaPhone aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0" /> 095-801-0958
          </a>
          <a href="https://www.facebook.com/profile.php?id=100085299521050" target="_blank" rel="noopener noreferrer" aria-label="เยี่ยมชมเพจ Facebook ของ N&M18 TRANSPORT" className="text-text-gray flex items-center gap-2 hover:text-orange-lava transition-colors">
            <FaFacebookF aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0" /> Facebook
          </a>
        </div>
      </Container>
    </div>
  );
};
