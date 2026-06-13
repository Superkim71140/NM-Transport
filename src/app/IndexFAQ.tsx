"use client";

import React, { useState } from 'react';

const faqs = [
  {
    icon: 'fa-solid fa-calculator',
    question: 'คิดค่าบริการขนส่งอย่างไร?',
    answer: 'ราคาขึ้นอยู่กับ ระยะทาง + ประเภทรถ + จำนวนคนยกของ ครับ แนะนำให้ทักแชทหรือโทรแจ้งต้นทาง-ปลายทาง เพื่อให้เราประเมินราคาเหมาจ่ายที่คุ้มที่สุดให้ฟรีครับ',
  },
  {
    icon: 'fa-solid fa-shield-halved',
    question: 'สินค้าจะปลอดภัยไหม มีประกันหรือเปล่า?',
    answer: 'มั่นใจได้ 100% ครับ เรามีทีมงานมืออาชีพช่วยแพ็คกันกระแทก และมีการรัดตึงสินค้าไม่ให้ขยับระหว่างขนส่ง หากเกิดความเสียหายจากการขนส่ง เรารับผิดชอบตามตกลงครับ',
  },
  {
    icon: 'fa-solid fa-users',
    question: 'มีคนช่วยยกของให้ด้วยไหม?',
    answer: 'มีครับ! ท่านสามารถแจ้งได้เลยว่าต้องการคนช่วยยกกี่คน ทางเรามีทีมงานพร้อมบริการยกของขึ้น-ลงรถ และจัดเรียงเข้าบ้านให้เรียบร้อย ท่านไม่ต้องเหนื่อยเองครับ',
  },
  {
    icon: 'fa-solid fa-clock',
    question: 'ควรจองคิวรถล่วงหน้ากี่วัน?',
    answer: 'แนะนำให้จองล่วงหน้า 1-2 วัน เพื่อล็อคคิวรถและเวลาที่แน่นอนครับ แต่ถ้าเป็นงานด่วน เรามีบริการรถสแตนด์บายตลอด 24 ชม. โทรเช็คคิวได้ทันทีครับ',
  }
];

export const IndexFAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        id="faq-page-jsonld"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c'),
        }}
      />
      <div className="max-w-[800px] mx-auto">
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index;
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
                <span><i className={`${faq.icon} text-orange-lava mr-2`} aria-hidden="true"></i> {faq.question}</span>
                <i className={`fa-solid fa-chevron-down transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} aria-hidden="true"></i>
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
    </>
  );
};
