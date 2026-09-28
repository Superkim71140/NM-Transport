"use client";

import React, { useState } from 'react';
import { 
  FaCalculator, 
  FaBoxOpen, 
  FaUsers, 
  FaChevronDown, 
  FaCircleQuestion 
} from 'react-icons/fa6';

export default function FAQClient() {
  const faqs = [
    {
      question: "คิดราคาค่าขนย้ายยังไงครับ?",
      answer: "ราคาขึ้นอยู่กับ 3 ปัจจัยหลักครับ: <strong>1. ระยะทาง (ต้นทาง-ปลายทาง)</strong> <strong>2. ประเภทรถที่ใช้ (กระบะตู้ทึบ/4 ล้อใหญ่)</strong> และ <strong>3. จำนวนคนช่วยยกของ</strong> แนะนำให้ทักแชทแจ้งรายการของและสถานที่เพื่อรับราคาเหมาจ่ายที่คุ้มค่าที่สุดได้ฟรีครับ",
      icon: FaCalculator
    },
    {
      question: "ต้องเก็บของลงกล่องเองไหม?",
      answer: "สำหรับของใช้ส่วนตัว เสื้อผ้า หนังสือ แนะนำให้ลูกค้าใส่กล่องหรือถุงไว้ล่วงหน้าเพื่อความรวดเร็วครับ ส่วน <strong>เฟอร์นิเจอร์ชิ้นใหญ่</strong> เช่น ตู้ เตียง ฟูกที่นอน ทีวี ตู้เย็น ทางทีมงานจะช่วยห่อฟิล์มกันกระแทกและยกขนย้ายให้อย่างปลอดภัยครับ",
      icon: FaBoxOpen
    },
    {
      question: "ไปช่วยขนด้วยได้ไหม นั่งไปกับรถได้ไหม?",
      answer: "ได้ครับ! ลูกค้าสามารถนั่งติดรถไปกับคนขับได้ 1 ท่าน (สำหรับรถกระบะ) และหากลูกค้ามีคนช่วยยกอยู่แล้ว สามารถจ้างเฉพาะรถพร้อมคนขับได้ ราคาจะประหยัดลงครับ",
      icon: FaUsers
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="mb-16 md:mb-24 max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold text-orange-lava bg-orange-lava/10 border border-orange-lava/20 mb-3">
          <FaCircleQuestion className="text-orange-lava text-xs shrink-0" />
          <span>FREQUENTLY ASKED QUESTIONS</span>
        </div>
        <h2 className="text-2xl sm:text-3xl text-white font-bold tracking-tight">
          คำถามที่พบบ่อย (FAQ)
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm mt-2">
          ข้อสงสัยยอดนิยมเกี่ยวกับการบริการขนย้ายบ้านและหอพัก
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
                  ? 'bg-navy-primary border-orange-lava shadow-[0_0_20px_rgba(255,69,0,0.15)]' 
                  : 'bg-[#0f1c38]/60 backdrop-blur-md border-white/10 hover:border-orange-lava/50 hover:bg-[#0f1c38]/80'
              }`}
            >
              <button 
                type="button"
                className="w-full p-5 sm:p-6 text-left flex justify-between items-center cursor-pointer outline-none transition-colors"
                onClick={() => toggleFAQ(index)}
                aria-expanded={isActive}
              >
                <span className="flex items-center gap-3.5 text-white font-medium text-sm sm:text-base pr-4">
                  <span className="w-9 h-9 rounded-xl bg-orange-lava/10 border border-orange-lava/30 text-orange-lava flex items-center justify-center shrink-0">
                    <Icon className="text-base" />
                  </span>
                  <span>{faq.question}</span>
                </span>
                <span className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 transition-transform duration-300 shrink-0 ${isActive ? 'rotate-180 text-orange-lava bg-orange-lava/10' : ''}`}>
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
