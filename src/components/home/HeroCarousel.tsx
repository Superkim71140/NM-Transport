"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

const slideImages = [
  "/n18back.webp",
  "/n18back1.webp"
];

export const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slideImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slideImages.length) % slideImages.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 pt-2 sm:pt-4">
      <div 
        className="relative w-full aspect-[16/9] min-h-[380px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[660px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        aria-label="N&M18 TRANSPORT แบนเนอร์บริการรถกระบะรับจ้าง"
      >
        {/* Slides */}
        {slideImages.map((src, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out z-0 bg-slate-900 ${
                isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <Image
                src={src}
                alt="N&M18 TRANSPORT บริการรถรับจ้างตู้ทึบ ขนของ ย้ายบ้าน"
                fill
                priority={index === 0}
                loading={index === 0 ? undefined : "lazy"}
                fetchPriority={index === 0 ? "high" : "low"}
                className="object-cover object-top sm:object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1920px"
              />
            </div>
          );
        })}

        {/* Manual Arrow Controls */}
        <button
          onClick={prevSlide}
          aria-label="สไลด์ก่อนหน้า"
          className="hidden md:flex items-center justify-center absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 border border-white/10 text-white/80 hover:text-white transition-all z-20"
        >
          <FaChevronLeft className="text-xs" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="สไลด์ถัดไป"
          className="hidden md:flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 border border-white/10 text-white/80 hover:text-white transition-all z-20"
        >
          <FaChevronRight className="text-xs" />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {slideImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`ไปยังสไลด์ที่ ${index + 1}`}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index 
                  ? 'w-7 sm:w-8 h-2 bg-[#F59E0B] shadow-[0_0_10px_rgba(245,158,11,0.8)]' 
                  : 'w-2 h-2 bg-white/40 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
