import React from 'react';
import Link from 'next/link';

type AreaCardProps = {
  title: string;
  description: string;
  icon?: string;
  href?: string;
};

export const AreaCard: React.FC<AreaCardProps> = ({ title, description, icon = "fa-solid fa-location-dot", href }) => {
  const CardContent = (
    <div className="bg-gradient-to-br from-[#0f1c38]/90 to-[#050a14]/95 border border-orange-lava/20 p-6 rounded-xl flex items-start gap-4 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:border-orange-lava hover:shadow-[0_0_20px_rgba(255,69,0,0.2)]">
      <div className="min-w-[60px] h-[60px] bg-orange-lava/10 rounded-xl flex items-center justify-center text-3xl text-orange-lava border border-orange-lava/30">
        <i className={icon}></i>
      </div>
      <div>
        <h4 className="text-white text-[1.1rem] font-bold mb-1.5">{title}</h4>
        <p className="text-text-gray text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href} className="block h-full">{CardContent}</Link>;
  }

  return CardContent;
};
