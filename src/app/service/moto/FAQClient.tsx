"use client";

import React, { useState } from 'react';
import { 
  FaGasPump, 
  FaFileContract, 
  FaTruckFast, 
  FaChevronDown, 
  FaCircleQuestion 
} from 'react-icons/fa6';

export default function FAQClient() {
  const faqs = [
    {
      question: "ต้องถ่ายน้ำมันออกไหมครับ?",
      answer: "<strong>ไม่จำเป็นต้องถ่ายออกหมดครับ</strong> แต่แนะนำให้เหลือไว้พอสตาร์ทรถได้ เพื่อความปลอดภัยระหว่างขนส่ง ทั้งนี้ทางเรามีอุปกรณ์ล็อคล้อ Wheel Chock และสายรัด Soft Strap มัดแน่นหนา ไม่ล้มและน้ำมันไม่หกแน่นอนครับ",
      icon: FaGasPump
    },
    {
      question: "ใช้เอกสารอะไรบ้างในการขนส่ง?",
      answer: "เพื่อความถูกต้องตามกฎหมายและความปลอดภัย เราขอรบกวนลูกค้าเตรียม <strong>1. สำเนาบัตรประชาชนผู้ส่ง/ผู้รับ</strong> และ <strong>2. สำเนาทะเบียนรถ (หรือสัญญาซื้อขาย/เอกสารโอน)</strong> เพื่อยืนยันความเป็นเจ้าของรถครับ",
      icon: FaFileContract
    },
    {
      question: "ขนส่งด้วยรถกระบะตู้ทึบ มีข้อดีอย่างไร?",
      answer: "<strong>รถกระบะตู้ทึบ:</strong> ปลอดภัยจากฝน ฝุ่น และเศษหินดีด 100% ตัวรถไม่เปียก ไม่เปื้อน มีทางลาดขึ้น-ลงอลูมิเนียมยาวพิเศษ ขึ้นได้ง่ายแม้เป็นรถโหลดเตี้ยหรือบิ๊กไบค์ทรงสปอร์ตครับ",
      icon: FaTruckFast
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="mb-16 md:mb-24 max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold text-neon-blue bg-neon-blue/10 border border-neon-blue/20 mb-3">
          <FaCircleQuestion className="text-neon-blue text-xs shrink-0" />
          <span>FREQUENTLY ASKED QUESTIONS</span>
        </div>
        <h2 className="text-2xl sm:text-3xl text-white font-bold tracking-tight">
          คำถามที่พบบ่อย (FAQ)
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm mt-2">
          ข้อสงสัยยอดนิยมเกี่ยวกับการบริการขนส่งมอเตอร์ไซค์และบิ๊กไบค์
        </p>
      </div>
      
      <div className="space-y-3.5 px-2 sm:px-0">
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index;
          const Icon = faq.icon;
          return (
            <div 
              key={index} 
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                isActive 
                  ? 'bg-navy-primary border-neon-blue shadow-[0_0_20px_rgba(0,242,255,0.2)]' 
                  : 'bg-[#0f1c38]/60 backdrop-blur-md border-white/10 hover:border-neon-blue/50 hover:bg-[#0f1c38]/80'
              }`}
            >
              <button 
                type="button"
                className="w-full p-5 sm:p-6 text-left flex justify-between items-center cursor-pointer outline-none transition-colors"
                onClick={() => toggleFAQ(index)}
                aria-expanded={isActive}
              >
                <span className="flex items-center gap-3.5 text-white font-medium text-sm sm:text-base pr-4">
                  <span className="w-9 h-9 rounded-xl bg-neon-blue/10 border border-neon-blue/30 text-neon-blue flex items-center justify-center shrink-0">
                    <Icon className="text-base" />
                  </span>
                  <span>{faq.question}</span>
                </span>
                <span className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 transition-transform duration-300 shrink-0 ${isActive ? 'rotate-180 text-neon-blue bg-neon-blue/10' : ''}`}>
                  <FaChevronDown className="text-xs" />
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div 
                  className="p-5 sm:p-6 pt-0 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/5"
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
