import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ผลงานของเรา - N&M18 TRANSPORT | รถกระบะรับจ้าง 4 ล้อ ตู้ทึบ",
  description: "ผลงานของเรา - N&M18 TRANSPORT | รถกระบะรับจ้าง 4 ล้อ ตู้ทึบ",
  alternates: {
    canonical: "https://www.nm18transport.com/works",
  },
  openGraph: {
    title: "ผลงานของเรา - N&M18 TRANSPORT | รถกระบะรับจ้าง 4 ล้อ ตู้ทึบ",
    description: "ผลงานของเรา - N&M18 TRANSPORT | รถกระบะรับจ้าง 4 ล้อ ตู้ทึบ",
    url: "https://www.nm18transport.com/works",
    images: [{ url: "/images/portfolio/works.jpg" }],
    type: "article",
  },
};

export default function WorksPage() {
  const portfolioItems = [
    {
      imgSrc: "/images/portfolio/S__17556168.jpg",
      imgAlt: "ขนส่งมอเตอร์ไซค์ Big Bike 4 ล้อ",
      tagIcon: "fa-solid fa-motorcycle",
      tagText: "ขนส่งมอเตอร์ไซค์",
      title: "Big Bike ส่งถึงที่ ปลอดภัย 100%",
      desc: "รถใหญ่ touring เราก็รับจบ มีสะพานขึ้นลงมาตรฐาน ห่อหุ้มกันรอยรอบคัน มัดยึดแน่นหนาไม่ไหวติง",
    },
    {
      imgSrc: "/images/portfolio/S__2531424.jpg",
      imgAlt: "ย้ายหอของเยอะ รถกระบะตู้ทึบ",
      tagIcon: "fa-solid fa-box-open",
      tagText: "ย้ายหอพัก",
      title: "ของเยอะแค่ไหน ก็จัดเรียงให้คุ้ม",
      desc: "ทีมงานมืออาชีพ ช่วยจัดเรียงของขึ้นรถให้เต็มพื้นที่ คุ้มค่าจ้างที่สุด ไม่ต้องกลัวของตกหล่น",
    },
    {
      imgSrc: "/images/portfolio/S__2531426.jpg",
      imgAlt: "รถกระบะตู้ทึบหลังคาสูง รับงานเหมา",
      tagIcon: "fa-solid fa-truck-pickup",
      tagText: "รถตู้ทึบหลังคาสูง",
      title: "กระบะตู้ทึบ จุของได้เยอะ",
      desc: "สำหรับงานย้ายสำนักงาน หรือย้ายบ้านทั้งหลัง เรามีรถตู้ทึบหลังคาสูง 2.10 เมตร ใส่ของได้จุใจ พร้อมทีมงานขนยก",
    },
    {
      imgSrc: "/images/portfolio/S__2531422.jpg",
      imgAlt: "แพ็คเฟอร์นิเจอร์ป้องกันรอย",
      tagIcon: "fa-solid fa-couch",
      tagText: "ถนอมสินค้า",
      title: "ห่อกันกระแทกทุกชิ้นใหญ่",
      desc: "เฟอร์นิเจอร์ ตู้ เตียง เรามีบริการแรปพลาสติกและบับเบิ้ลกันกระแทกอย่างดี ป้องกันรอยขีดข่วน",
    },
    {
      imgSrc: "/images/portfolio/S__17556173.jpg",
      imgAlt: "ส่งของด่วน 24 ชม รถ 4 ล้อ",
      tagIcon: "fa-solid fa-clock",
      tagText: "บริการ 24 ชม.",
      title: "ส่งด่วนได้ทุกเวลา",
      desc: "ไม่ว่าจะเช้า หรือดึกแค่ไหน นัดเวลารับรถได้เลย เราพร้อมวิ่งงานทั่วประเทศ",
    },
    {
      imgSrc: "/images/portfolio/S__17556170.jpg",
      imgAlt: "ห่อรถมอเตอร์ไซค์กันรอย",
      tagIcon: "fa-solid fa-shield-cat",
      tagText: "ใส่ใจทุกรายละเอียด",
      title: "แรปกันรอยรอบคัน",
      desc: "ดูแลรถของคุณเหมือนรถของเรา ห่อหุ้มกันรอยขีดข่วนก่อนขึ้นรถทุกคัน สบายใจหายห่วง",
    },
    {
      imgSrc: "/images/portfolio/S__2531423.jpg",
      imgAlt: "ขนย้ายสัตว์เลี้ยงรถส่วนตัว",
      tagIcon: "fa-solid fa-paw",
      tagText: "สัตว์เลี้ยง",
      title: "รับส่งน้องหมา น้องแมว",
      desc: "อุปกรณ์สัตว์เลี้ยง กรงขนาดใหญ่ เราจัดวางให้อย่างดี มีพื้นที่เพียงพอ ไม่ทับเสียหาย",
    },
    {
      imgSrc: "/images/portfolio/S__2531439.jpg",
      imgAlt: "ย้ายหอพร้อมมอเตอร์ไซค์",
      tagIcon: "fa-solid fa-truck-pickup",
      tagText: "เหมาเที่ยวเดียวจบ",
      title: "ย้ายห้อง + รถมอเตอร์ไซค์",
      desc: "ไปพร้อมกันได้เลย ทั้งของใช้ในห้องและรถคู่ใจ ประหยัดกว่าแยกส่ง สะดวกเที่ยวเดียวจบ",
    },
    {
      imgSrc: "/images/portfolio/S__17556176.jpg",
      imgAlt: "ขนส่งมอเตอร์ไซค์หลายคัน",
      tagIcon: "fa-solid fa-layer-group",
      tagText: "เหมาหลายคัน",
      title: "ขนส่งมอเตอร์ไซค์ ยกแก๊ง",
      desc: "จะขนย้ายรถสะสม หรือออกทริปเป็นกลุ่ม เราจัดให้ได้ในเที่ยวเดียว ห่อหุ้มหนาพิเศษ แยกคันชัดเจน ปลอดภัย 100%",
    },
  ];

  return (
    <>
      <div 
        className="relative bg-cover bg-center text-white pt-[120px] px-5 pb-[80px] text-center border-b border-[rgba(255,69,0,0.2)]"
        style={{ backgroundImage: "linear-gradient(to bottom, rgba(5, 10, 20, 0.7), rgba(5, 10, 20, 1)), url('/images/portfolio/S__2531426.jpg')" }}
      >
        <h1 className="text-[1.8rem] md:text-[3rem] font-bold mb-[15px] leading-[1.3] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FF4500]" style={{ textShadow: "0 0 20px rgba(0,0,0,0.8)" }}>
          ผลงานที่ผ่านมา
        </h1>
        <p className="text-[1.2rem] opacity-90 text-[#B0B8C4]">ภาพจริงจากหน้างาน ลูกค้าจริง การันตีความใส่ใจทุกเที่ยววิ่ง</p>
      </div>

      <section className="py-[60px]">
        <div className="max-w-[1200px] mx-auto px-5">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {portfolioItems.map((item, idx) => (
              <div 
                key={idx} 
                className="group bg-[rgba(15,28,56,0.7)] border border-[rgba(255,255,255,0.08)] rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:-translate-y-[10px] hover:shadow-[0_15px_40px_rgba(255,69,0,0.2)] hover:border-[#FF4500] transition-all duration-300 flex flex-col relative"
              >
                <div className="h-[220px] md:h-[240px] overflow-hidden relative">
                  <Image 
                    src={item.imgSrc} 
                    alt={item.imgAlt} 
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[#0f1c38] to-transparent opacity-80 z-10 pointer-events-none"></div>
                </div>
                <div className="p-5 md:p-[25px] relative z-20 -mt-[30px] flex flex-col flex-grow">
                  <div className="mb-[15px]">
                    <span className="inline-block bg-[rgba(0,0,0,0.6)] text-[#FF4500] py-[5px] px-[15px] rounded-[50px] text-[0.85rem] font-semibold border border-[#FF4500] shadow-[0_0_10px_rgba(255,69,0,0.2)] backdrop-blur-[5px]">
                      <i className={`${item.tagIcon} mr-1`}></i> {item.tagText}
                    </span>
                  </div>
                  <h3 className="text-[1.3rem] md:text-[1.4rem] font-bold text-white mb-[10px] leading-[1.3]">
                    {item.title}
                  </h3>
                  <p className="text-[0.95rem] text-[#ccc] leading-[1.6]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[rgba(15,28,56,0.9)] to-[rgba(5,10,20,0.95)] border border-[rgba(255,255,255,0.1)] rounded-[15px] md:rounded-[25px] p-[40px_20px] md:p-[50px] mt-[40px] md:mt-[80px] flex flex-col md:flex-row items-center text-center md:text-left gap-[20px] md:gap-[50px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
            <div className="absolute -top-[50%] -right-[10%] w-[300px] h-[300px] bg-[#FF4500] blur-[150px] opacity-20 pointer-events-none"></div>
            
            <div className="relative w-[140px] h-[140px] md:w-[180px] md:h-[180px] flex-shrink-0 mx-auto md:mx-0 shadow-[0_0_30px_rgba(255,69,0,0.4)] rounded-full border-[4px] border-[#0f1c38] outline outline-[3px] outline-[#FF4500]">
              <Image 
                src="/images/portfolio/S__17556285.png" 
                alt="ทีมงาน N&M18 TRANSPORT" 
                fill
                className="object-cover rounded-full"
              />
            </div>
            
            <div className="relative z-10 flex-grow">
              <h3 className="text-white text-[1.5rem] md:text-[2rem] mb-[15px] drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] font-bold">
                บริการด้วยรอยยิ้ม เป็นกันเอง
              </h3>
              <p className="text-[#B0B8C4] text-[1.1rem] mb-[25px]">
                N&M18 TRANSPORT เราเน้นบริการที่สุภาพ จริงใจ และราคาเป็นมิตร คุยง่าย ต่อรองได้ เราดูแลสินค้าของท่านเหมือนเป็นของคนในครอบครัว
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-[15px]">
                <a 
                  href="tel:0958010958" 
                  className="bg-[#FF4500] text-white py-[12px] px-[30px] rounded-[50px] text-[1.1rem] font-semibold hover:shadow-[0_0_15px_rgba(255,69,0,0.6)] transition-all flex items-center justify-center gap-2"
                >
                  <i className="fa-solid fa-phone-volume"></i> โทรปรึกษาฟรี
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "ผลงาน N&M18 TRANSPORT",
            "description": "รวมภาพผลงานจริง บริการรถรับจ้าง 4 ล้อ ย้ายบ้าน ขนส่งมอเตอร์ไซค์",
            "provider": {
              "@type": "TransportationService",
              "name": "N&M18 TRANSPORT",
              "telephone": "095-801-0958",
              "image": "https://www.nm18transport.com/logo-nm18.png",
              "url": "https://www.nm18transport.com/works",
              "priceRange": "฿500 - ฿10,000",
              "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Bang Khae",
                  "addressRegion": "Bangkok",
                  "addressCountry": "TH"
              }
            }
          })
        }}
      />
    </>
  );
}
