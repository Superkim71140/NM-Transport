import React from 'react';
import Link from 'next/link';
import type { IconType } from 'react-icons';

type ServiceCardProps = {
  title: string;
  description: string;
  icon: IconType;
  href?: string;
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, href }) => {
  const CardContent = (
    <div className="bg-navy-primary border border-white/5 rounded-2xl p-10 text-center transition-all duration-400 shadow-[0_10px_30px_rgba(0,0,0,0.2)] relative overflow-hidden group hover:border-orange-lava hover:-translate-y-2.5 hover:shadow-[0_15px_40px_rgba(255,69,0,0.15)] h-full">
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,69,0,0.1)_0%,transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
      
      <div className="w-20 h-20 bg-orange-lava/10 text-orange-lava rounded-full flex items-center justify-center text-3xl mx-auto mb-6 border-2 border-orange-lava/30 relative z-10 group-hover:scale-110 transition-transform duration-300">
        <Icon aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0" />
      </div>
      
      <h3 className="text-[1.4rem] font-bold mb-4 relative z-10 text-white">{title}</h3>
      <p className="relative z-10 text-text-gray">{description}</p>
    </div>
  );

  if (href) {
    return <Link href={href} className="block h-full">{CardContent}</Link>;
  }

  return CardContent;
};
