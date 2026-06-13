"use client";

import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import { homeFaqs } from '../data/home-faq';

export const IndexFAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-[800px] mx-auto">
      {homeFaqs.map((faq, index) => {
        const isActive = activeIndex === index;
        const FAQIcon = faq.icon;
        return (
          <div 
            key={index} 
            className={`
              mb-[15px] border border-white/10 rounded-xl overflow-hidden transition-all duration-300
              ${isActive ? 'bg-navy-primary border-orange-lava shadow-[0_0_15px_rgba(255,69,0,0.2)]' : 'bg-[#0f1c38]/60 hover:border-orange-lava hover:shadow-[0_0_15px_rgba(255,69,0,0.2)]'}
            `}
          >
            <button 
              id={`faq-button-${index}`}
              aria-expanded={isActive}
              aria-controls={`faq-panel-${index}`}
              className="w-full p-5 bg-transparent border-none text-white text-[1.1rem] font-medium text-left flex justify-between items-center cursor-pointer font-prompt outline-none focus-visible:ring-2 focus-visible:ring-orange-lava focus-visible:ring-offset-2 focus-visible:ring-offset-navy-primary rounded-xl"
              onClick={() => toggleFAQ(index)}
            >
              <span className="flex items-center">
                <FAQIcon
                  aria-hidden="true"
                  focusable="false"
                  className="mr-2 h-[1em] w-[1em] shrink-0 text-orange-lava"
                />
                {faq.question}
              </span>
              <FaChevronDown
                aria-hidden="true"
                focusable="false"
                className={`h-[1em] w-[1em] shrink-0 transition-transform duration-300 ${
                  isActive ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div 
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-button-${index}`}
              className={`
                overflow-hidden transition-[max-height] duration-300 ease-out bg-black/20
                ${isActive ? 'max-h-[200px]' : 'max-h-0'}
              `}
            >
              <p className="p-5 text-[#ccc] leading-relaxed border-t border-white/5" dangerouslySetInnerHTML={{ __html: faq.answer.replace(/1-2 วัน/, '<strong>1-2 วัน</strong>') }} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
