"use client";

import React, { useState } from 'react';

export default function FAQClient() {
  const faqs = [
    {
      question: "คิดราคาค่าขนย้ายยังไงครับ?",
      answer: "ราคาขึ้นอยู่กับ 3 ปัจจัยหลักครับ: <strong>1. ระยะทาง (ต้นทาง-ปลายทาง)</strong> <strong>2. ประเภทรถที่ใช้ (กระบะ/6ล้อ)</strong> และ <strong>3. จำนวนคนยกของ</strong> แนะนำให้ทักแชทแจ้งรายละเอียดเพื่อรับราคาเหมาที่คุ้มค่าที่สุดครับ",
      icon: "fa-solid fa-calculator"
    },
    {
      question: "ต้องเก็บของลงกล่องเองไหม?",
      answer: "สำหรับของจุกจิก เสื้อผ้า หนังสือ แนะนำให้ลูกค้าใส่กล่องหรือถุงไว้เพื่อความรวดเร็วครับ ส่วน <strong>เฟอร์นิเจอร์ชิ้นใหญ่</strong> (ตู้, เตียง, ทีวี) ทางทีมงานจะช่วยห่อกันกระแทกและยกให้ครับ",
      icon: "fa-solid fa-box"
    },
    {
      question: "ไปช่วยขนด้วยได้ไหม นั่งไปกับรถได้ไหม?",
      answer: "ได้ครับ! ลูกค้าสามารถติดรถไปกับคนขับได้ 1 ท่าน (สำหรับรถกระบะ) และถ้าลูกค้ามีคนช่วยยกอยู่แล้ว สามารถจ้างเฉพาะรถอย่างเดียวได้ ราคาจะถูกลงครับ",
      icon: "fa-solid fa-users"
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="mb-[60px]">
      <div className="text-center mb-[30px]">
        <h2 className="text-[2rem] text-white mb-[10px] font-bold">คำถามที่พบบ่อย (FAQ)</h2>
        <p className="text-[#aaa]">ข้อสงสัยเกี่ยวกับการขนย้ายบ้าน/หอพัก</p>
      </div>
      
      <div className="max-w-[800px] mx-auto px-5 md:px-0">
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index;
          return (
            <div 
              key={index} 
              className={`mb-[15px] border border-[rgba(255,255,255,0.1)] rounded-[12px] bg-[rgba(15,28,56,0.6)] overflow-hidden transition-all duration-300 hover:border-[#FF4500] hover:shadow-[0_0_15px_rgba(255,69,0,0.2)] ${isActive ? 'bg-[#0f1c38] border-[#FF4500]' : ''}`}
            >
              <button 
                className="w-full p-[20px] bg-none border-none text-white text-[1.1rem] font-medium text-left flex justify-between items-center cursor-pointer outline-none font-sans"
                onClick={() => toggleFAQ(index)}
              >
                <span>
                  <i className={`${faq.icon} mr-[10px]`} style={{ color: '#FF4500' }}></i> 
                  {faq.question}
                </span>
                <i className={`fa-solid fa-chevron-down transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}></i>
              </button>
              <div 
                className={`overflow-hidden transition-[max-height] duration-300 ease-out bg-[rgba(0,0,0,0.2)]`}
                style={{ maxHeight: isActive ? '200px' : '0' }}
              >
                <p 
                  className="p-[20px] text-[#ccc] leading-[1.6] border-t border-[rgba(255,255,255,0.05)]"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                ></p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
