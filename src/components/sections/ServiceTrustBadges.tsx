import React from 'react';
import { FaShieldHalved, FaTruckFront, FaDropletSlash, FaLock } from 'react-icons/fa6';

export default function ServiceTrustBadges() {
  return (
    <section className="py-12 md:py-16 bg-[#040812] border-y border-white/5 relative overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-orange-500/10 blur-[100px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
          มั่นใจด้วย <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">รถกระบะตู้ทึบ 100%</span>
        </h2>
        <p className="text-red-400 font-semibold mb-10 text-sm sm:text-base">
          (ทางเราไม่มีบริการรถเก๋งหรือรถ SUV ทั่วไป เพื่อความปลอดภัยสูงสุดของสัมภาระ)
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group bg-[#0a0f1a] p-6 rounded-2xl border border-white/10 flex flex-col items-center shadow-lg hover:border-orange-500/50 hover:bg-[#0a0f1a]/80 hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <FaTruckFront className="text-3xl text-orange-400" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">ตู้ทึบมาตรฐาน</h3>
            <p className="text-slate-400 text-xs text-center">ใช้รถกระบะตู้ทึบแข็งแรงเท่านั้น ไม่ใช้รถเก๋งเพื่อขนส่ง</p>
          </div>

          <div className="group bg-[#0a0f1a] p-6 rounded-2xl border border-white/10 flex flex-col items-center shadow-lg hover:border-blue-500/50 hover:bg-[#0a0f1a]/80 hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <FaDropletSlash className="text-3xl text-blue-400" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">กันน้ำ กันฝน 100%</h3>
            <p className="text-slate-400 text-xs text-center">ปิดมิดชิด ป้องกันฝน แดด และฝุ่นละอองระหว่างทางได้อย่างสมบูรณ์</p>
          </div>

          <div className="group bg-[#0a0f1a] p-6 rounded-2xl border border-white/10 flex flex-col items-center shadow-lg hover:border-emerald-500/50 hover:bg-[#0a0f1a]/80 hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <FaLock className="text-3xl text-emerald-400" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">ล็อคแน่นหนา</h3>
            <p className="text-slate-400 text-xs text-center">ระบบล็อคตู้ทึบปลอดภัย ของไม่หล่นหายระหว่างการเดินทาง</p>
          </div>

          <div className="group bg-[#0a0f1a] p-6 rounded-2xl border border-white/10 flex flex-col items-center shadow-lg hover:border-purple-500/50 hover:bg-[#0a0f1a]/80 hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <FaShieldHalved className="text-3xl text-purple-400" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">ปลอดภัยสูงสุด</h3>
            <p className="text-slate-400 text-xs text-center">พนักงานขับรถชำนาญทาง รับประกันความปลอดภัยตลอดเส้นทาง</p>
          </div>
        </div>
      </div>
    </section>
  );
}
