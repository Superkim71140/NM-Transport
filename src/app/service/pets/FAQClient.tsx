"use client";

import React, { useState } from 'react';

export default function FAQClient() {
  const faqs = [
    {
      question: "เจ้าของนั่งรถไปด้วยได้ไหม?",
      answer: "<strong>ได้ครับ!</strong> เนื่องจากเราใช้รถเก๋ง/SUV ส่วนตัว ลูกค้าสามารถนั่งไปกับน้องได้เลย (1 ท่าน) ช่วยให้ประหยัดค่าเดินทางและได้ดูแลน้องอย่างใกล้ชิดครับ",
      icon: "fa-solid fa-user-plus"
    },
    {
      question: "ไม่มีกรง น้องขึ้นรถได้ไหม?",
      answer: "แนะนำให้ใส่กรงหรือ Box เดินทางเพื่อความปลอดภัยสูงสุดครับ แต่ถ้าน้องเชื่องมากและลูกค้าเตรียมผ้ารองกันเปื้อนมาเอง สามารถสอบถามเป็นกรณีไปได้ครับ",
      icon: "fa-solid fa-box"
    },
    {
      question: "ต้องจองล่วงหน้ากี่วัน?",
      answer: "แนะนำให้จองล่วงหน้า <strong>1-3 วัน</strong> ครับ โดยเฉพาะช่วงเสาร์-อาทิตย์ หรือวันหยุดยาว คิวจะเต็มเร็วมาก แต่ถ้าเคสด่วนลองโทรเช็คคิวได้ตลอด 24 ชม. ครับ",
      icon: "fa-solid fa-clock"
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="mb-[60px] max-w-[800px] mx-auto">
      <div className="text-center mb-[20px]">
        <h2 className="text-[1.5rem] md:text-[2rem] text-white font-bold">คำถามที่พบบ่อย (FAQ)</h2>
      </div>
      
      <div className="px-[15px] md:px-0">
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index;
          return (
            <div 
              key={index} 
              className={`mb-[15px] border border-[rgba(255,255,255,0.1)] rounded-[12px] bg-[rgba(15,28,56,0.6)] overflow-hidden transition-all duration-300 hover:border-[#FFD700] hover:shadow-[0_0_15px_rgba(255,215,0,0.2)] ${isActive ? 'bg-[#0f1c38] border-[#FFD700]' : ''}`}
            >
              <button 
                className="w-full p-[20px] bg-none border-none text-white text-[1.1rem] font-medium text-left flex justify-between items-center cursor-pointer outline-none font-sans"
                onClick={() => toggleFAQ(index)}
              >
                <span>
                  <i className={`${faq.icon} mr-[10px]`} style={{ color: '#FFD700' }}></i> 
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
