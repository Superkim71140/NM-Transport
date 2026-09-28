import React from 'react';
import { FaPhoneVolume, FaTruckArrowRight, FaBoxOpen } from 'react-icons/fa6';
import { Container } from '../ui/Container';

export default function ServiceWorkflow() {
  return (
    <section className="py-16 md:py-24 bg-[#02040a]">
      <Container className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-orange-400 bg-orange-500/10 border border-orange-500/20 mb-4">
            <FaTruckArrowRight className="text-xs shrink-0" />
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            ขั้นตอนการใช้บริการที่ <span className="text-orange-400">ง่ายและรวดเร็ว</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            เพียง 3 ขั้นตอนง่ายๆ คุณก็สามารถใช้บริการรถกระบะตู้ทึบของเราได้อย่างมั่นใจ รวดเร็ว ปลอดภัย และตรงต่อเวลา
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-12 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-orange-500/10 via-orange-500/50 to-orange-500/10 z-0" />

          {/* Step 1 */}
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-24 h-24 bg-[#0a0f1a] border-2 border-orange-500/30 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,100,0,0.1)] group-hover:border-orange-500 transition-colors duration-300 rotate-3 group-hover:rotate-0">
              <FaPhoneVolume className="text-4xl text-orange-400" />
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">1</div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">ทักแชท / โทรประเมินราคา</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              ติดต่อเราเพื่อแจ้งรายละเอียดต้นทาง-ปลายทาง และรายการของที่ต้องการขนย้าย เพื่อรับราคาเหมาจ่ายที่คุ้มค่าที่สุด ฟรี!
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 flex flex-col items-center text-center group mt-4 md:mt-0">
            <div className="w-24 h-24 bg-[#0a0f1a] border-2 border-orange-500/30 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,100,0,0.1)] group-hover:border-orange-500 transition-colors duration-300 -rotate-3 group-hover:rotate-0">
              <FaBoxOpen className="text-4xl text-orange-400" />
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">2</div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">เข้ารับของตามนัดหมาย</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              ทีมงานนำรถกระบะตู้ทึบเข้าตรงเวลา พร้อมอุปกรณ์แพ็คกิ้ง ช่วยยกและจัดเรียงสัมภาระอย่างระมัดระวัง
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 flex flex-col items-center text-center group mt-4 md:mt-0">
            <div className="w-24 h-24 bg-[#0a0f1a] border-2 border-orange-500/30 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,100,0,0.1)] group-hover:border-orange-500 transition-colors duration-300 rotate-3 group-hover:rotate-0">
              <FaTruckArrowRight className="text-4xl text-orange-400" />
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">3</div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">จัดส่งถึงปลายทางปลอดภัย</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              เดินทางด้วยความปลอดภัยสูงสุด ส่งถึงที่หมายพร้อมช่วยยกของจัดวางเข้าที่เรียบร้อยตามที่คุณต้องการ
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
