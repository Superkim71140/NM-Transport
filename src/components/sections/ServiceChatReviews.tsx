"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { FaLine, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { Container } from '../ui/Container';

export default function ServiceChatReviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  const mockReviews = [
    {
      id: 1,
      name: "คุณวิภาวรรณ",
      date: "2 วันที่แล้ว",
      text: "บริการดีมากค่ะ รถตู้ทึบใหม่ สะอาด ของไม่มีเปียกฝนเลย แนะนำเลยค่ะ",
      img: "/images/portfolio/S__2531423.webp" // placeholder
    },
    {
      id: 2,
      name: "K' เอกราช",
      date: "1 สัปดาห์ที่แล้ว",
      text: "ประทับใจมากครับ แชทคุยในไลน์ตอบไว พี่คนขับสุภาพ ช่วยยกของเต็มที่",
      img: "/images/portfolio/S__2531424.webp" // placeholder
    },
    {
      id: 3,
      name: "น้องมายด์",
      date: "2 สัปดาห์ที่แล้ว",
      text: "ย้ายหอพักด่วน พี่ๆ มาตรงเวลามากค่ะ ตู้ทึบล็อคแน่นหนา ปลอดภัย สบายใจสุดๆ",
      img: "/images/portfolio/S__2531437.webp" // placeholder
    },
    {
      id: 4,
      name: "คุณสมพงษ์",
      date: "1 เดือนที่แล้ว",
      text: "ใช้บริการรอบที่ 3 แล้วครับ บริการดีคงเส้นคงวา ราคาเป็นกันเองสุดๆ",
      img: "/images/portfolio/S__2531423.webp" // placeholder
    }
  ];

  return (
    <section className="py-16 bg-[#02040a] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#06C755]/10 blur-[120px] rounded-full pointer-events-none" />
      
      <Container className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#06C755] bg-[#06C755]/10 border border-[#06C755]/20 mb-4">
              <FaLine className="text-sm shrink-0" />
              <span>REAL CUSTOMER REVIEWS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
              รีวิวจาก<span className="text-[#06C755]">ลูกค้าตัวจริง</span>
            </h2>
            <p className="text-slate-400">เสียงตอบรับจากลูกค้าที่ใช้บริการรถกระบะตู้ทึบของเราผ่าน LINE</p>
          </div>
          
          <div className="flex gap-3 hidden sm:flex">
            <button onClick={scrollLeft} className="w-12 h-12 rounded-full bg-white/5 hover:bg-[#06C755] border border-white/10 text-white flex items-center justify-center transition-all">
              <FaChevronLeft />
            </button>
            <button onClick={scrollRight} className="w-12 h-12 rounded-full bg-white/5 hover:bg-[#06C755] border border-white/10 text-white flex items-center justify-center transition-all">
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {mockReviews.map((review) => (
            <div key={review.id} className="min-w-[320px] max-w-[350px] w-full shrink-0 snap-start bg-[#0a0f1a] rounded-3xl p-6 border border-white/10 relative group">
              {/* Fake LINE Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#06C755] flex items-center justify-center text-white text-xl">
                    <FaLine />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">{review.name}</h4>
                    <span className="text-slate-500 text-xs">{review.date}</span>
                  </div>
                </div>
                <div className="flex text-yellow-400 text-xs gap-1">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
              </div>
              
              {/* Chat Text */}
              <div className="bg-[#06C755]/20 text-white text-sm p-4 rounded-2xl rounded-tl-none mb-4 inline-block max-w-[90%] border border-[#06C755]/30">
                {review.text}
              </div>

              {/* Chat Image (Screenshot Placeholder) */}
              <div className="relative w-full h-40 rounded-xl overflow-hidden border border-white/10 mt-2 bg-slate-900">
                <Image 
                  src={review.img} 
                  alt="Line Chat Review" 
                  fill 
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
