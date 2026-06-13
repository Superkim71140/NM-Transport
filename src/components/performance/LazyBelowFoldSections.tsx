"use client";

import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

const LazyReviewsSlider = dynamic(
  () => import('../sections/ReviewsSlider').then((mod) => mod.ReviewsSlider),
  {
    ssr: false,
    loading: () => <ReviewsSliderPlaceholder />,
  }
);

function ReviewsSliderPlaceholder() {
  return (
    <div 
      className="relative max-w-[900px] mx-auto px-0 md:px-[50px] animate-pulse"
      aria-hidden="true"
    >
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

export function LazyReviewsSection() {
  const [shouldRender, setShouldRender] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full min-h-[380px]">
      {shouldRender ? <LazyReviewsSlider /> : <ReviewsSliderPlaceholder />}
    </div>
  );
}
