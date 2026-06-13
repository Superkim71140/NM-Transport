"use client";

import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa6';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Review {
  text: string;
  author: string;
  img: string;
  link: string;
  rating: number;
}

const LOCAL_FALLBACK_REVIEWS: Review[] = [
  {
    text: '"บริการดี ราคาเป็นกันเองแนะนำครับ จากผู้ใช้บริการจริงมาแล้ว"',
    author: 'ลูกค้าผู้ใช้บริการจริง',
    img: '/images/reviews/ลูกค้ารีวิว 1.jpg',
    link: 'https://www.facebook.com/share/p/1GAruLkniU/',
    rating: 5,
  },
  {
    text: '"บริการดี บริการเด่น เน้นบริการ เอาเป็นว่าถูกใจครับ"',
    author: 'ลูกค้าผู้ใช้บริการจริง',
    img: '/images/reviews/ลูกค้ารีวิว 2.jpg',
    link: 'https://www.facebook.com/share/p/1BzQhAJer8/',
    rating: 5,
  },
  {
    text: '"บริการดี ปลอดภัย รวดเร็ว ราคาไม่แพง แนะนำเลยค่ะ วันนี้ส่งชุดโต๊ะทานข้าวหินอ่อน จากขอนแก่น ไป อ.บ้านผือ จ.อุดรธานี จัดแพ็คห่อกันกระแทก กันรอยดีมาก เข้ามารับสินค้า 10 โมง แพ็คเสร็จเกือบเที่ยง ส่งสินค้าเสร็จเรียบร้อยบ่ายสามโมง คือแนะนำเลยค่าา"',
    author: 'ลูกค้าผู้ใช้บริการจริง',
    img: '/images/reviews/ลูกค้ารีวิว 3.jpg',
    link: 'https://www.facebook.com/share/p/1CnXgdzM2d/',
    rating: 5,
  },
  {
    text: '"บริการดีส่งใวค่ะ..สินค้าเรียบร้อยดีค่ะใว้ใช้บริการใหม่นะค่ะ"',
    author: 'ลูกค้าผู้ใช้บริการจริง',
    img: '/images/reviews/ลูกค้ารีวิว 4.jpg',
    link: 'https://www.facebook.com/share/p/1DJNwEFe4m/',
    rating: 5,
  }
];

export const ReviewsSlider: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<Review[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadReviews() {
      try {
        const response = await fetch('/api/reviews');
        if (response.ok) {
          const data = await response.json();
          if (data.reviews && data.reviews.length > 0) {
            setReviewsList(data.reviews);
            setLoading(false);
            return;
          }
        }
      } catch (err) {
        console.error('[REVIEWS_SLIDER] Error fetching dynamic reviews:', err);
      }
      // Fail-safe fallback state
      setReviewsList(LOCAL_FALLBACK_REVIEWS);
      setLoading(false);
    }
    loadReviews();
  }, []);

  // Auto slide every 5 seconds
  useEffect(() => {
    if (reviewsList.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviewsList.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviewsList]);

  const nextSlide = () => setActiveIndex((current) => (current + 1) % reviewsList.length);
  const prevSlide = () => setActiveIndex((current) => (current - 1 + reviewsList.length) % reviewsList.length);

  if (loading || reviewsList.length === 0) {
    return (
      <div className="relative max-w-[900px] mx-auto px-0 md:px-[50px] animate-pulse">
        <div className="bg-gradient-to-br from-[#0f1c38]/90 to-white/5 border border-orange-lava/20 rounded-[20px] p-8 md:p-10 flex flex-col items-center text-center min-h-[380px] justify-center">
          <div className="w-[100px] h-[100px] rounded-full bg-white/5 border-4 border-orange-lava/20 mb-5"></div>
          <div className="h-4 bg-white/10 rounded w-1/4 mb-4"></div>
          <div className="h-3 bg-white/5 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-white/5 rounded w-1/2 mb-6"></div>
          <div className="h-4 bg-white/10 rounded w-1/6"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative max-w-[900px] mx-auto px-0 md:px-[50px]">
      <button 
        onClick={prevSlide}
        className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 w-[45px] h-[45px] rounded-full bg-white/5 border border-white/10 text-white items-center justify-center cursor-pointer transition-all duration-300 z-10 hover:bg-orange-lava hover:border-orange-lava hover:shadow-neon-orange"
      >
        <FaChevronLeft aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-0 w-[45px] h-[45px] rounded-full bg-white/5 border border-white/10 text-white items-center justify-center cursor-pointer transition-all duration-300 z-10 hover:bg-orange-lava hover:border-orange-lava hover:shadow-neon-orange"
      >
        <FaChevronRight aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0" />
      </button>

      <div className="relative w-full overflow-hidden">
        {reviewsList.map((review, idx) => (
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
            <FaQuoteLeft aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0 text-5xl text-orange-lava/20 absolute top-5 left-8" />
            
            <div className="w-[100px] h-[100px] rounded-full border-4 border-orange-lava p-1 mb-5 shadow-neon-orange relative shrink-0">
              <Image 
                src={review.img} 
                alt={`รีวิวลูกค้า ${idx + 1}`} 
                fill
                className="rounded-full object-cover"
              />
            </div>
            
            <div className="text-gold text-xl mb-4 drop-shadow-[0_0_10px_rgba(255,215,0,0.4)] space-x-1">
              {Array.from({ length: 5 }).map((_, starIdx) => (
                <i 
                  key={starIdx}
                  className={`fa-star ${starIdx < review.rating ? 'fa-solid' : 'fa-regular'}`}
                ></i>
              ))}
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
