import { FaBoltLightning, FaPhone, FaFacebookF } from 'react-icons/fa6';
import React from 'react';
import { Container } from '../ui/Container';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#020610] text-gray-300 py-2 sm:py-2.5 text-[13px] sm:text-sm border-b border-white/10 relative z-50">
      <Container className="flex flex-col sm:flex-row justify-between items-center gap-2.5 sm:gap-0">
        <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start">
          <div className="flex items-center gap-1.5 bg-[#FF4500]/10 text-[#FF4500] px-3 py-1 rounded-full border border-[#FF4500]/20 font-semibold tracking-wide">
            <FaBoltLightning aria-hidden="true" focusable="false" className="animate-pulse" />
            <span>บริการด่วน 24 ชม.</span>
          </div>
          <span className="hidden md:inline text-gray-500">|</span>
          <span className="hidden md:inline font-medium text-gray-200">ส่งไว ปลอดภัย 100%</span>
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-end font-medium">
          <a href="tel:0958010958" aria-label="โทรติดต่อ N&M18 TRANSPORT" className="flex items-center gap-2 text-white hover:text-[#FF4500] transition-colors bg-white/5 hover:bg-white/10 px-4 py-1.5 rounded-full border border-white/10">
            <FaPhone aria-hidden="true" focusable="false" className="text-[#FF4500]" /> 
            <span>095-801-0958</span>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100085299521050" target="_blank" rel="noopener noreferrer" aria-label="เยี่ยมชมเพจ Facebook ของ N&M18 TRANSPORT" className="flex items-center gap-2 text-white hover:text-[#1877F2] transition-colors bg-white/5 hover:bg-white/10 px-4 py-1.5 rounded-full border border-white/10">
            <FaFacebookF aria-hidden="true" focusable="false" className="text-[#1877F2]" /> 
            <span className="hidden sm:inline">Facebook</span>
          </a>
        </div>
      </Container>
    </div>
  );
};
