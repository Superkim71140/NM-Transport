import React from 'react';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-glass-gradient-light backdrop-blur-md border-t border-orange-lava/30 flex p-2.5 gap-2.5 z-[2000] md:hidden">
      <a href="tel:0958010958" className="flex-1 flex items-center justify-center gap-2 h-[50px] rounded-full font-bold text-white text-lg transition-all bg-orange-lava shadow-neon-orange">
        <i className="fa-solid fa-phone"></i> โทรเลย
      </a>
      <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=952yyanc" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 h-[50px] rounded-full font-bold text-white text-lg transition-all bg-line-green shadow-neon-green">
        <i className="fa-brands fa-line text-xl"></i> Line
      </a>
      <a href="https://www.facebook.com/profile.php?id=100085299521050" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 h-[50px] rounded-full font-bold text-white text-lg transition-all bg-[#1877F2]">
        <i className="fa-brands fa-facebook-messenger"></i> ทักแชท
      </a>
    </div>
  );
};
