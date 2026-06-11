import React from 'react';
import Image from 'next/image';

type PortfolioCardProps = {
  imageUrl: string;
  alt?: string;
};

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ imageUrl, alt = "ผลงานของเรา" }) => {
  return (
    <div className="aspect-[4/3] rounded-xl overflow-hidden relative border border-white/10 transition-all duration-300 bg-navy-primary group hover:border-orange-lava hover:shadow-[0_0_20px_rgba(255,69,0,0.3)] hover:-translate-y-1">
      <Image 
        src={imageUrl} 
        alt={alt} 
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 768px) 50vw, 25vw"
      />
    </div>
  );
};
