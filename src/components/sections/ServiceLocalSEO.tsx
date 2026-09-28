import React from 'react';
import Link from 'next/link';
import { FaMapLocationDot, FaLocationDot } from 'react-icons/fa6';
import { Container } from '../ui/Container';

export default function ServiceLocalSEO() {
  const topLocations = [
    { name: 'บางแค', slug: 'bang-khae' },
    { name: 'หนองแขม', slug: 'nong-khaem' },
    { name: 'ทวีวัฒนา', slug: 'thawi-watthana' },
    { name: 'ตลิ่งชัน', slug: 'taling-chan' },
    { name: 'ภาษีเจริญ', slug: 'phasi-charoen' },
    { name: 'ศาลายา', slug: 'salaya' },
    { name: 'พุทธมณฑล', slug: 'phutthamonthon' },
    { name: 'สามพราน', slug: 'sam-phran' },
    { name: 'นครปฐม', slug: 'nakhon-pathom' },
    { name: 'กระทุ่มแบน', slug: 'krathum-baen' },
    { name: 'มหาชัย', slug: 'mahachai' },
    { name: 'สมุทรสาคร', slug: 'samut-sakhon' },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#02040a] border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-orange-500/5 to-transparent pointer-events-none" />
      
      <Container className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 gap-6 text-center md:text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 mb-4">
              <FaMapLocationDot className="text-sm shrink-0" />
              <span>SERVICE AREAS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
              พื้นที่ให้บริการ<span className="text-orange-400">ยอดนิยม</span>
            </h2>
            <p className="text-slate-400">ครอบคลุมกรุงเทพฯ ปริมณฑล และพร้อมวิ่งงานส่งทั่วประเทศ</p>
          </div>
          
          <Link href="/area" className="inline-flex items-center justify-center px-6 py-2.5 rounded-full font-bold text-sm text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors shrink-0">
            ดูพื้นที่ให้บริการทั้งหมด
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {topLocations.map((loc, index) => (
            <Link 
              key={index} 
              href={`/location/${loc.slug}`}
              className="group bg-[#0a0f1a] hover:bg-orange-500 hover:shadow-[0_0_15px_rgba(255,100,0,0.5)] border border-white/5 hover:border-orange-400 rounded-xl p-4 flex items-center gap-3 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-white/20 flex items-center justify-center text-slate-400 group-hover:text-white transition-colors">
                <FaLocationDot className="text-sm" />
              </div>
              <span className="text-slate-300 group-hover:text-white font-medium text-sm sm:text-base transition-colors">
                {loc.name}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
