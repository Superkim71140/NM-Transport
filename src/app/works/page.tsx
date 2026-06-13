import { FaPhoneVolume } from 'react-icons/fa6';
import Image from "next/image";
import { Metadata } from "next";
import { portfolioItems } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "ผลงานของเรา - N&M18 TRANSPORT | รถกระบะรับจ้าง 4 ล้อ ตู้ทึบ",
  description: "ผลงานของเรา - N&M18 TRANSPORT | รถกระบะรับจ้าง 4 ล้อ ตู้ทึบ",
  alternates: {
    canonical: "/works",
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
  return (
    <>
      <div className="relative text-white pt-[120px] px-5 pb-[80px] text-center border-b border-[rgba(255,69,0,0.2)] overflow-hidden">
        <Image src="/images/portfolio/S__2531426.webp" alt="Background" fill priority fetchPriority="high" className="object-cover absolute inset-0 -z-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,10,20,0.7)] to-[rgba(5,10,20,1)] -z-10"></div>
        <h1 className="relative z-10 text-[1.8rem] md:text-[3rem] font-bold mb-[15px] leading-[1.3] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FF4500]" style={{ textShadow: "0 0 20px rgba(0,0,0,0.8)" }}>
          ผลงานที่ผ่านมา
        </h1>
        <p className="relative z-10 text-[1.2rem] opacity-90 text-[#B0B8C4]">ภาพจริงจากหน้างาน ลูกค้าจริง การันตีความใส่ใจทุกเที่ยววิ่ง</p>
      </div>

      <section className="py-[60px]">
        <div className="max-w-[1200px] mx-auto px-5">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
            {portfolioItems.map((item, idx) => (
              <figure 
                key={item.id} 
                className="group m-0 bg-[rgba(15,28,56,0.7)] border border-[rgba(255,255,255,0.08)] rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:-translate-y-[10px] hover:shadow-[0_15px_40px_rgba(255,69,0,0.2)] hover:border-[#FF4500] transition-all duration-300 flex flex-col relative"
              >
                <div className="h-[220px] md:h-[240px] overflow-hidden relative">
                  <Image 
                    src={item.imgSrc} 
                    alt={item.imgAlt}
                    title={item.imgTitle}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={idx < 3}
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[#0f1c38] to-transparent opacity-80 z-10 pointer-events-none"></div>
                </div>
                <figcaption className="p-5 md:p-[25px] relative z-20 -mt-[30px] flex flex-col flex-grow">
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
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-[60px] p-6 md:p-10 bg-[rgba(15,28,56,0.4)] border border-[rgba(255,255,255,0.05)] rounded-[20px]">
            <h2 className="text-[1.5rem] md:text-[2rem] font-bold text-white mb-4">
              ผลงานรถรับจ้างคุณภาพจาก N&M18 TRANSPORT
            </h2>
            <div className="text-[#B0B8C4] space-y-4 text-[1rem] leading-[1.8]">
              <p>
                รวมภาพผลงานจริงจากบริการของเรา ไม่ว่าจะเป็น <strong>รถกระบะรับจ้าง 4 ล้อ</strong> <strong>ย้ายบ้าน ย้ายหอพัก</strong> หรือ <strong>ขนส่งมอเตอร์ไซค์</strong> ข้ามจังหวัด เราใส่ใจทุกขั้นตอนตั้งแต่การแพ็คสินค้า การยกขึ้นรถ และการจัดเรียงภายในตู้ทึบอย่างเป็นระเบียบ เพื่อป้องกันความเสียหายระหว่างการเดินทาง
              </p>
              <p>
                ด้วยประสบการณ์และทีมงานมืออาชีพ เราเลือกใช้รถสภาพใหม่ สะอาด พร้อมอุปกรณ์ช่วยยกที่ได้มาตรฐาน ทำให้ลูกค้าไว้วางใจใช้บริการขนส่งกับเราอย่างต่อเนื่อง หากคุณกำลังมองหา <em>รถรับจ้างราคาถูก</em> แต่คุณภาพระดับพรีเมียม ให้ภาพผลงานของเราเป็นเครื่องยืนยัน
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[rgba(15,28,56,0.9)] to-[rgba(5,10,20,0.95)] border border-[rgba(255,255,255,0.1)] rounded-[15px] md:rounded-[25px] p-[40px_20px] md:p-[50px] mt-[40px] md:mt-[60px] flex flex-col md:flex-row items-center text-center md:text-left gap-[20px] md:gap-[50px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
            <div className="absolute -top-[50%] -right-[10%] w-[300px] h-[300px] bg-[#FF4500] blur-[150px] opacity-20 pointer-events-none"></div>
            
            <div className="relative w-[140px] h-[140px] md:w-[180px] md:h-[180px] flex-shrink-0 mx-auto md:mx-0 shadow-[0_0_30px_rgba(255,69,0,0.4)] rounded-full border-[4px] border-[#0f1c38] outline outline-[3px] outline-[#FF4500]">
              <Image 
                src="/images/portfolio/S__17556285.webp" 
                alt="ทีมงาน N&M18 TRANSPORT" 
                title="ทีมงานคุณภาพ N&M18 TRANSPORT"
                fill
                sizes="180px"
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
                  <FaPhoneVolume aria-hidden="true" focusable="false" className="h-[1em] w-[1em] shrink-0" /> โทรปรึกษาฟรี
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
            "url": "https://www.nm18transport.com/works",
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
            },
            "hasPart": portfolioItems.map((item) => ({
              "@type": "ImageObject",
              "url": `https://www.nm18transport.com${item.imgSrc}`,
              "contentUrl": `https://www.nm18transport.com${item.imgSrc}`,
              "caption": item.imgAlt,
              "name": item.title,
              "description": item.desc,
              "thumbnailUrl": `https://www.nm18transport.com${item.imgSrc}`
            }))
          })
        }}
      />
    </>
  );
}
