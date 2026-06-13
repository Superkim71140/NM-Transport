import React from 'react';
import Image from 'next/image';
import { Container } from '../ui/Container';

type ServiceAreaHeroProps = {
  title: string;
  subtitle?: string;
  backgroundImageUrl?: string;
};

export const ServiceAreaHero: React.FC<ServiceAreaHeroProps> = ({ 
  title, 
  subtitle, 
  backgroundImageUrl = '/images/portfolio/S__2531437.webp' 
}) => {
  return (
    <section 
      className="relative overflow-hidden text-center text-white py-20"
    >
      <Image 
        src={backgroundImageUrl} 
        alt={title} 
        fill 
        priority 
        fetchPriority="high"
        className="object-cover absolute inset-0 -z-20"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#050a14]/85 to-[#0f1c38]/90 -z-10"></div>
      <Container className="relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-orange-lava drop-shadow-[0_0_20px_rgba(255,69,0,0.4)]">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-[#d0d7e1] max-w-2xl mx-auto">{subtitle}</p>
        )}
      </Container>
    </section>
  );
};
