"use client";

import React, { useState } from 'react';
import { FaWind, FaBoxOpen, FaClock, FaChevronDown, FaCircleQuestion } from 'react-icons/fa6';

export default function FAQClient() {
  const faqs = [
    {
      question: "เดินทางด้วยรถปรับอากาศ น้องจะร้อนหรืออึดอัดไหม?",
      answer: "<strong>เย็นสบายและปลอดภัยแน่นอนครับ!</strong> ทางเราให้บริการด้วยรถห้องโดยสารปรับอากาศ 100% เปิดแอร์เย็นฉ่ำตลอดการเดินทาง ไม่อบอ้าว ไม่นำน้องไปตากแดดหรือขังหลังกระบะ น้องหายใจสะดวก ผ่อนคลาย และปลอดภัยเหมือนนั่งรถครอบครัวครับ",
      icon: FaWind
    },
    {
      question: "หากไม่มีกรงหรือ Box เดินทาง น้องขึ้นรถได้ไหม?",
      answer: "เพื่อความปลอดภัยสูงสุดของน้อง แนะนำให้ใส่กรงหรือ Box เดินทางที่แข็งแรงครับ แต่กรณีที่น้องตัวใหญ่หรือมีความคุ้นชินกับการนั่งรถ ลูกค้าสามารถเตรียมผ้ารองกันเปื้อนและสายรัดนิรภัยสำหรับสัตว์เลี้ยงมาเองได้ สามารถสอบถามและประเมินเป็นรายกรณีได้ตลอด 24 ชม. ครับ",
      icon: FaBoxOpen
    },
    {
      question: "ต้องจองคิวรถล่วงหน้ากี่วัน?",
      answer: "แนะนำให้จองล่วงหน้า <strong>1 - 3 วัน</strong> ครับ โดยเฉพาะช่วงวันหยุดสุดสัปดาห์หรือเทศกาลวันหยุดยาว คิวจะเต็มค่อนข้างเร็ว แต่หากเป็นเคสเร่งด่วนสามารถโทรเช็คคิวรถกับเจ้าหน้าที่ได้ตลอด 24 ชั่วโมงครับ",
      icon: FaClock
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="mb-16 md:mb-24 max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 mb-3">
          <FaCircleQuestion className="text-amber-400 text-xs shrink-0" />
          <span>FREQUENTLY ASKED QUESTIONS</span>
        </div>
        <h2 className="text-2xl sm:text-3xl text-white font-bold tracking-tight">
          คำถามที่พบบ่อย (FAQ)
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm mt-2">
          ข้อสงสัยยอดนิยมเกี่ยวกับการใช้บริการรับส่งสัตว์เลี้ยง Pet Taxi
        </p>
      </div>
      
      <div className="space-y-3.5 px-2 sm:px-0">
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index;
          const IconComponent = faq.icon;
          return (
            <div 
              key={index} 
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                isActive 
                  ? 'bg-slate-900/80 border-amber-400/40 shadow-lg shadow-amber-500/5' 
                  : 'bg-slate-900/40 backdrop-blur-md border-white/[0.08] hover:border-amber-400/25 hover:bg-slate-900/60'
              }`}
            >
              <button 
                type="button"
                className="w-full p-5 sm:p-6 text-left flex justify-between items-center cursor-pointer outline-none transition-colors"
                onClick={() => toggleFAQ(index)}
                aria-expanded={isActive}
              >
                <span className="flex items-center gap-3 text-slate-100 font-medium text-sm sm:text-base pr-4">
                  <span className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <IconComponent className="text-sm" />
                  </span>
                  <span>{faq.question}</span>
                </span>
                <span className={`w-7 h-7 rounded-full bg-white/[0.04] flex items-center justify-center text-slate-400 transition-transform duration-300 shrink-0 ${isActive ? 'rotate-180 text-amber-400 bg-amber-500/10' : ''}`}>
                  <FaChevronDown className="text-xs" />
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div 
                  className="p-5 sm:p-6 pt-0 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/[0.05]"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
