"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const reviews = [
  {
    text: '"บริการดี ราคาเป็นกันเองแนะนำครับ จากผู้ใช้บริการจริงมาแล้ว"',
    author: 'ลูกค้าผู้ใช้บริการจริง',
    img: '/images/reviews/ลูกค้ารีวิว 1.jpg',
    link: 'https://www.facebook.com/share/p/1GAruLkniU/',
  },
  {
    text: '"บริการดี บริการเด่น เน้นบริการ เอาเป็นว่าถูกใจครับ"',
    author: 'ลูกค้าผู้ใช้บริการจริง',
    img: '/images/reviews/ลูกค้ารีวิว 2.jpg',
    link: 'https://www.facebook.com/share/p/1BzQhAJer8/',
  },
  {
    text: '"บริการดี ปลอดภัย รวดเร็ว ราคาไม่แพง แนะนำเลยค่ะ วันนี้ส่งชุดโต๊ะทานข้าวหินอ่อน จากขอนแก่น ไป อ.บ้านผือ จ.อุดรธานี จัดแพ็คห่อกันกระแทก กันรอยดีมาก เข้ามารับสินค้า 10 โมง แพ็คเสร็จเกือบเที่ยง ส่งสินค้าเสร็จเรียบร้อยบ่ายสามโมง คือแนะนำเลยค่าา"',
    author: 'ลูกค้าผู้ใช้บริการจริง',
    img: '/images/reviews/ลูกค้ารีวิว 3.jpg',
    link: 'https://www.facebook.com/share/p/1CnXgdzM2d/',
  },
  {
    text: '"บริการดีส่งใวค่ะ..สินค้าเรียบร้อยดีค่ะใว้ใช้บริการใหม่นะค่ะ"',
    author: 'ลูกค้าผู้ใช้บริการจริง',
    img: '/images/reviews/ลูกค้ารีวิว 4.jpg',
    link: 'https://www.facebook.com/share/p/1DJNwEFe4m/',
  }
];

export const ReviewsSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setActiveIndex((current) => (current + 1) % reviews.length);
  const prevSlide = () => setActiveIndex((current) => (current - 1 + reviews.length) % reviews.length);

  return (
    <div className="relative max-w-[900px] mx-auto px-0 md:px-[50px]">
      <button 
        onClick={prevSlide}
        className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 w-[45px] h-[45px] rounded-full bg-white/5 border border-white/10 text-white items-center justify-center cursor-pointer transition-all duration-300 z-10 hover:bg-orange-lava hover:border-orange-lava hover:shadow-neon-orange"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      
      <button 
        onClick={nextSlide}
        className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-0 w-[45px] h-[45px] rounded-full bg-white/5 border border-white/10 text-white items-center justify-center cursor-pointer transition-all duration-300 z-10 hover:bg-orange-lava hover:border-orange-lava hover:shadow-neon-orange"
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      <div className="relative w-full overflow-hidden">
        {reviews.map((review, idx) => (
          <a 
            key={idx}
            href={review.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`
              bg-gradient-to-br from-[#0f1c38]/95 to-white/5 border border-orange-lava/20 rounded-[20px] p-8 md:p-10
              flex-col items-center text-center shadow-[0_15px_40px_rgba(0,0,0,0.4)]
              ${idx === activeIndex ? 'flex animate-[fadeIn_0.6s_ease]' : 'hidden'}
            `}
          >
            <i className="fa-solid fa-quote-left text-5xl text-orange-lava/20 absolute top-5 left-8"></i>
            
            <div className="w-[100px] h-[100px] rounded-full border-4 border-orange-lava p-1 mb-5 shadow-neon-orange relative shrink-0">
              <Image 
                src={review.img} 
                alt={`รีวิวลูกค้า ${idx + 1}`} 
                fill
                className="rounded-full object-cover"
              />
            </div>
            
            <div className="text-gold text-xl mb-4 drop-shadow-[0_0_10px_rgba(255,215,0,0.4)] space-x-1">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            
            <p className="text-[1.15rem] italic mb-6 text-[#e2e8f0] leading-[1.8] relative z-10">
              {review.text}
            </p>
            
            <div className="mt-auto">
              <h4 className="text-white text-[1.2rem] mb-1 font-bold">{review.author}</h4>
              <div className="text-[0.8rem] text-[#1877F2] mt-1.5">(คลิกเพื่อดูโพสต์จริง)</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
