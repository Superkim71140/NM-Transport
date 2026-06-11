"use client";

import React, { useState } from 'react';

export default function FAQClient() {
  const faqs = [
    {
      question: "ต้องถ่ายน้ำมันออกไหมครับ?",
      answer: "<strong>ไม่จำเป็นต้องถ่ายออกหมดครับ</strong> แต่แนะนำให้เหลือไว้พอสตาร์ทรถได้ เพื่อความปลอดภัยระหว่างขนส่ง ทั้งนี้ทางเรามีการล็อครถอย่างแน่นหนา น้ำมันไม่หกแน่นอนครับ",
      icon: "fa-solid fa-gas-pump"
    },
    {
      question: "ใช้เอกสารอะไรบ้างในการขนส่ง?",
      answer: "เพื่อความถูกต้องและปลอดภัย เราขอรบกวนลูกค้าเตรียม <strong>1. สำเนาบัตรประชาชนผู้ส่ง/ผู้รับ</strong> และ <strong>2. สำเนาทะเบียนรถ</strong> (หรือเอกสารซื้อขาย) เพื่อยืนยันความเป็นเจ้าของรถครับ",
      icon: "fa-solid fa-file-contract"
    },
    {
      question: "รถสไลด์ กับ รถตู้ทึบ ต่างกันยังไง?",
      answer: "<strong>รถตู้ทึบ:</strong> ปลอดภัยจากฝน 100% ราคาประหยัด เหมาะสำหรับรถทั่วไปและบิ๊กไบค์ <br><strong>รถสไลด์:</strong> สะดวกในการขึ้น-ลง เหมาะสำหรับรถโหลดเตี้ยมาก หรือรถที่มีราคาแพงพิเศษที่ต้องการโชว์ความสวยงามครับ",
      icon: "fa-solid fa-truck-pickup"
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="mb-[60px] max-w-[800px] mx-auto">
      <div className="text-center mb-[30px]">
        <h2 className="text-[1.5rem] md:text-[2rem] text-white mb-[10px] font-bold">คำถามที่พบบ่อย (FAQ)</h2>
        <p className="text-[#aaa] text-[0.95rem]">เรื่องขนส่งรถมอเตอร์ไซค์ ไว้ใจให้เราดูแล</p>
      </div>
      
      <div className="px-[15px] md:px-0">
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index;
          return (
            <div 
              key={index} 
              className={`mb-[15px] border border-[rgba(255,255,255,0.1)] rounded-[12px] bg-[rgba(15,28,56,0.6)] overflow-hidden transition-all duration-300 hover:border-[#00f2ff] hover:shadow-[0_0_15px_rgba(0,242,255,0.2)] ${isActive ? 'bg-[#0a1120] border-[#00f2ff]' : ''}`}
            >
              <button 
                className="w-full p-[20px] bg-none border-none text-white text-[1.1rem] font-medium text-left flex justify-between items-center cursor-pointer outline-none font-sans"
                onClick={() => toggleFAQ(index)}
              >
                <span>
                  <i className={`${faq.icon} mr-[10px]`} style={{ color: '#00f2ff' }}></i> 
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
