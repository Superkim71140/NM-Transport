import React from 'react';
import { Container } from '../ui/Container';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-black/40 text-white/80 py-2 text-sm border-b border-white/5">
      <Container className="flex justify-between items-center">
        <div className="hidden md:block">
          <i className="fa-solid fa-bolt-lightning text-neon-blue"></i> บริการด่วน 24 ชม. <span className="text-orange-lava font-semibold">ส่งไว ปลอดภัย 100%</span>
        </div>
        <div className="flex gap-5 w-full md:w-auto justify-center md:justify-end">
          <a href="tel:0958010958" className="text-text-gray flex items-center gap-2 hover:text-orange-lava transition-colors">
            <i className="fa-solid fa-phone"></i> 095-801-0958
          </a>
          <a href="https://www.facebook.com/profile.php?id=100085299521050" target="_blank" rel="noopener noreferrer" className="text-text-gray flex items-center gap-2 hover:text-orange-lava transition-colors">
            <i className="fa-brands fa-facebook"></i> Facebook
          </a>
        </div>
      </Container>
    </div>
  );
};
