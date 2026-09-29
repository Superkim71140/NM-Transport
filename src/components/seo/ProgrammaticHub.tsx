import React from 'react';
import Link from 'next/link';

export function ProgrammaticHub() {
  const districts = [
    { id: 'ladprao', name: 'ลาดพร้าว' },
    { id: 'chatuchak', name: 'จตุจักร' },
    { id: 'donmueang', name: 'ดอนเมือง' },
    { id: 'lak-si', name: 'หลักสี่' },
    { id: 'bang-khen', name: 'บางเขน' },
    { id: 'sai-mai', name: 'สายไหม' },
    { id: 'rangsit', name: 'รังสิต' },
    { id: 'bangna', name: 'บางนา' },
    { id: 'udomsuk', name: 'อุดมสุข' },
    { id: 'on-nut', name: 'อ่อนนุช' },
    { id: 'lat-krabang', name: 'ลาดกระบัง' },
    { id: 'suvarnabhumi', name: 'สุวรรณภูมิ' },
    { id: 'mueang-samut-prakan', name: 'สมุทรปราการ' },
    { id: 'pak-nam', name: 'ปากน้ำ' },
    { id: 'bang-khae', name: 'บางแค' },
    { id: 'phetkasem', name: 'เพชรเกษม' },
    { id: 'rama-2', name: 'พระราม 2' },
    { id: 'tha-kham', name: 'ท่าข้าม' },
    { id: 'pinklao', name: 'ปิ่นเกล้า' },
    { id: 'taling-chan', name: 'ตลิ่งชัน' },
    { id: 'bang-bon', name: 'บางบอน' },
    { id: 'ekkachai', name: 'เอกชัย' },
    { id: 'sukhumvit', name: 'สุขุมวิท' },
    { id: 'ekkamai', name: 'เอกมัย' },
    { id: 'rama-9', name: 'พระราม 9' },
    { id: 'ratchada', name: 'รัชดา' },
  ];

  const routes = [
    { origin: 'bangkok', destination: 'chiang-mai', name: 'กรุงเทพ-เชียงใหม่' },
    { origin: 'bangkok', destination: 'nakhon-ratchasima', name: 'กรุงเทพ-โคราช' },
    { origin: 'bangkok', destination: 'chonburi', name: 'กรุงเทพ-ชลบุรี' },
    { origin: 'bangkok', destination: 'phuket', name: 'กรุงเทพ-ภูเก็ต' },
    { origin: 'bangkok', destination: 'khon-kaen', name: 'กรุงเทพ-ขอนแก่น' },
    { origin: 'bangkok', destination: 'songkhla', name: 'กรุงเทพ-สงขลา' },
    { origin: 'bangkok', destination: 'surat-thani', name: 'กรุงเทพ-สุราษฎร์ธานี' },
    { origin: 'bangkok', destination: 'ubon-ratchathani', name: 'กรุงเทพ-อุบลราชธานี' }
  ];

  return (
    <section className="w-[calc(100%-2rem)] max-w-[1200px] mx-auto mt-10 mb-10 p-4 sm:p-8 bg-[#0f1c38]/60 rounded-2xl border border-white/5 overflow-hidden">
      <h2 className="text-white text-center mb-6 text-xl sm:text-2xl font-bold">
        บริการรถกระบะตู้ทึบ/รถ 4 ล้อใหญ่รับจ้างขนของ แยกตามพื้นที่และเส้นทาง
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left text-[#d0d7e1]">
        <div>
          <h3 className="text-neon-blue text-base sm:text-lg font-bold mb-4">พื้นที่ให้บริการยอดนิยม (กรุงเทพฯ และปริมณฑล)</h3>
          <div className="flex flex-wrap gap-2">
            {districts.map(district => (
              <Link 
                key={district.id} 
                href={`/location/${district.id}`}
                className="text-xs sm:text-[0.85rem] bg-black/20 px-3 py-1.5 rounded-full hover:bg-orange-lava hover:text-white transition-colors border border-white/5 whitespace-nowrap"
                title={`รถรับจ้าง${district.name}`}
              >
                รถรับจ้าง{district.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-neon-blue text-base sm:text-lg font-bold mb-4">เส้นทางขนส่งต่างจังหวัดยอดนิยม</h3>
          <div className="flex flex-wrap gap-2">
            {routes.map(route => (
              <Link 
                key={`${route.origin}-${route.destination}`} 
                href={`/route/${route.origin}/${route.destination}`}
                className="text-xs sm:text-[0.85rem] bg-black/20 px-3 py-1.5 rounded-full hover:bg-orange-lava hover:text-white transition-colors border border-white/5 whitespace-nowrap"
                title={`รถรับจ้าง${route.name}`}
              >
                รถรับจ้าง{route.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
