"use client";

import React, { useState } from 'react';
import { FaChevronDown, FaCircleQuestion } from 'react-icons/fa6';
import { Container } from '../ui/Container';

export interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faqs: FAQItem[];
}

export default function ServiceFAQ({ faqs }: ServiceFAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Generate JSON-LD Structured Data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-16 bg-[#040812]">
      {/* Inject JSON-LD Schema to <head> automatically */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <Container className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold text-orange-400 bg-orange-500/10 border border-orange-500/20 mb-3">
            <FaCircleQuestion className="text-orange-400 text-xs shrink-0" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
            คำถามที่พบบ่อย (FAQ)
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            ข้อสงสัยยอดนิยมเกี่ยวกับการใช้บริการของเรา
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isActive 
                    ? 'bg-[#0a0f1a] border-orange-500 shadow-[0_0_20px_rgba(255,100,0,0.15)]' 
                    : 'bg-[#0a0f1a]/60 backdrop-blur-md border-white/10 hover:border-orange-500/50 hover:bg-[#0a0f1a]'
                }`}
              >
                <button 
                  type="button"
                  className="w-full p-5 sm:p-6 text-left flex justify-between items-center cursor-pointer outline-none transition-colors"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isActive}
                >
                  <span className="flex items-center gap-3.5 text-white font-bold text-sm sm:text-base pr-4">
                    <span className="w-8 h-8 rounded-full bg-orange-500/10 text-orange-400 flex items-center justify-center shrink-0 font-extrabold text-xs border border-orange-500/20">
                      Q
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <span className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 transition-transform duration-300 shrink-0 ${isActive ? 'rotate-180 text-orange-400 bg-orange-500/10' : ''}`}>
                    <FaChevronDown className="text-xs" />
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-5 sm:p-6 pt-0 text-slate-300 text-sm leading-relaxed border-t border-white/5 flex gap-3.5 items-start">
                    <span className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 font-extrabold text-xs mt-0.5 border border-blue-500/20">
                      A
                    </span>
                    <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
