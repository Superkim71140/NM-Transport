import React from 'react';
import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import Link from 'next/link';
import { Container } from '../../../components/ui/Container';
import locations from '../../../data/bangkok-locations.json';

type Props = {
  params: {
    district: string;
  };
};

// 1. generateStaticParams() for static pre-rendering
export async function generateStaticParams() {
  return locations.map((loc) => ({
    district: loc.slug,
  }));
}

// 2. Dynamic Metadata Generation for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const location = locations.find((loc) => loc.slug === params.district);
  if (!location) return {};

  const isAlias = location.status === "alias" && 'canonicalSlug' in location;
  const isDraft = location.status === "pending_verification";

  const title = `รถรับจ้างขนของ ${location.thaiName} ย้ายบ้าน ย้ายหอพัก คอนโด เริ่ม 1,000.- | N&M18 TRANSPORT`;
  const description = `บริการรถรับจ้างขนของในพื้นที่ ${location.thaiName} รถกระบะตู้ทึบ รถ 4 ล้อใหญ่ ขนส่งย้ายบ้าน คอนโด หอพัก ทั่วกรุงเทพ-ปริมณฑล พร้อมคนช่วยยกของ ราคาเป็นกันเอง ตกลงราคาชัดเจน โทร 095-801-0958`;

  const canonicalPath = isAlias ? `/location/${(location as any).canonicalSlug}` : `/location/${location.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    robots: (isAlias || isDraft) ? {
      index: false,
      follow: true,
    } : undefined,
    openGraph: {
      title,
      description,
      url: `https://www.nm18transport.com${canonicalPath}`,
      images: [{ url: "https://www.nm18transport.com/images/logos/logo-nm18.png" }],
      type: 'website',
    },
  };
}

export default function LocationPage({ params }: Props) {
  const location = locations.find((loc) => loc.slug === params.district);
  if (!location) {
    notFound();
  }

  // Alias handling redirect gate
  if (location.status === "alias" && 'canonicalSlug' in location) {
    redirect(`/location/${location.canonicalSlug}`);
  }

  // Schema.org Service JSON-LD connected to Organization & Website graphs
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://www.nm18transport.com/location/${location.slug}#service`,
    "name": `บริการรถรับจ้างขนของ ${location.thaiName} - N&M18 TRANSPORT`,
    "serviceType": "Moving Service",
    "provider": {
      "@id": "https://www.nm18transport.com/#organization"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": location.thaiName
    },
    "offers": {
      "@type": "Offer",
      "price": location.startingPrice,
      "priceCurrency": "THB",
      "url": `https://www.nm18transport.com/location/${location.slug}`
    }
  };

  return (
    <main className="bg-[#02040a] min-h-screen text-[#e2e8f0] pb-[80px]" style={{ backgroundImage: "radial-gradient(circle at 50% 0%, #1a2c4e 0%, #02040a 70%)", backgroundAttachment: "fixed" }}>
      <script
        type="application/ld+json"
        id={`location-${location.slug}-jsonld`}
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, '\\u003c'),
        }}
      />

      <Container className="pt-20 max-w-[850px] mx-auto px-5">
        <article>
          <header className="mb-8 border-b border-white/10 pb-6 text-center md:text-left">
            <span className="bg-orange-lava/10 text-orange-lava px-3 py-1 rounded-full font-semibold text-sm">
              พื้นที่บริการหลัก: {location.zone}
            </span>
            <h1 className="text-[2rem] md:text-[2.8rem] font-extrabold text-white leading-tight mt-3 mb-4">
              รถรับจ้างขนของ {location.thaiName} บริการตลอด 24 ชั่วโมง
            </h1>
            <p className="text-text-gray text-base leading-relaxed">
              บริการย้ายบ้าน ย้ายคอนโด ย้ายหอพัก ขนย้ายเฟอร์นิเจอร์ หรือขนส่งสินค้าในเขต {location.thaiName} และพื้นที่ใกล้เคียง สะดวก รวดเร็ว ด้วยทีมงานมืออาชีพและรถกระบะรับจ้างตู้ทึบกันฝน 100% ประเมินราคาจริงใจเริ่มต้นเพียง {location.startingPrice} บาท
            </p>
          </header>

          <section className="mb-8">
            <h2 className="text-[1.5rem] font-bold text-white mb-4">
              ทำไมต้องเลือกใช้บริการรถขนของในพื้นที่ {location.thaiName} กับ N&M18 TRANSPORT?
            </h2>
            <p className="text-[#ccc] leading-relaxed mb-4">
              ที่เขต {location.thaiName} เรามีรถวิ่งสแตนด์บายคอยรับบริการอยู่ตลอดเวลา ทำให้สามารถเข้าจัดส่งหรือขนย้ายได้อย่างรวดเร็วทันใจ พร้อมพนักงานช่วยยกของที่มีประสบการณ์สูง สุภาพ และทำงานอย่างประณีต
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#ccc]">
              {location.keywords.map((kw, idx) => (
                <li key={idx}><strong>{kw}</strong> บริการโดยทีมงานมืออาชีพ ปลอดภัย ของไม่เสียหาย</li>
              ))}
            </ul>
          </section>

          <section className="mb-10">
            <h3 className="text-white text-lg font-bold mb-3">ประเภทรถรับจ้างที่ให้บริการในพื้นที่ {location.thaiName}:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                <h4 className="text-orange-lava font-bold mb-1"><i className="fa-solid fa-truck-pickup"></i> รถกระบะรับจ้างตู้ทึบ</h4>
                <p className="text-sm text-text-gray">เหมาะสำหรับการย้ายหอพัก ย้ายคอนโด 1 ห้องพัก ขนของทั่วไป ของแห้ง เครื่องใช้ไฟฟ้า</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                <h4 className="text-orange-lava font-bold mb-1"><i className="fa-solid fa-truck-front"></i> รถ 4 ล้อใหญ่ตู้ทึบ</h4>
                <p className="text-sm text-text-gray">เหมาะสำหรับการย้ายบ้านทาวน์โฮม ย้ายสำนักงาน ขนของขนาดใหญ่ สัมภาระเยอะพิเศษ</p>
              </div>
            </div>
          </section>

          <div className="border-t border-white/10 pt-8 mt-12 mb-10">
            <h4 className="text-white font-bold text-lg mb-3">บริการขนย้ายที่เกี่ยวข้องของเรา:</h4>
            <div className="flex gap-4 flex-wrap">
              <Link 
                href="/service/moving" 
                className="px-5 py-2.5 rounded-lg bg-navy-primary border border-white/10 hover:border-orange-lava hover:text-orange-lava transition-all text-sm font-semibold"
              >
                บริการรถรับจ้างย้ายบ้าน/คอนโด
              </Link>
              <Link 
                href="/service/moto" 
                className="px-5 py-2.5 rounded-lg bg-navy-primary border border-white/10 hover:border-orange-lava hover:text-orange-lava transition-all text-sm font-semibold"
              >
                บริการขนส่งมอเตอร์ไซค์
              </Link>
            </div>
          </div>

          <footer className="bg-gradient-to-br from-[#0f1c38] to-navy-dark border border-orange-lava/30 p-6 md:p-8 rounded-2xl text-center shadow-lg relative overflow-hidden">
            <p className="text-white text-[1.1rem] mb-2">จองบริการรถรับจ้างขนของเขต {location.thaiName} ล่วงหน้า ได้ราคาพิเศษ!</p>
            <p className="text-[#ccc] text-sm mb-6">บริษัท เอ็นแอนด์เอ็ม 18 ทรานสปอร์ต จำกัด ยินดีประเมินราคาให้ฟรี ไม่มีค่าใช้จ่ายแฝงหน้างาน</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link 
                href="tel:0958010958" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold bg-orange-lava text-white hover:bg-orange-glow transition-all shadow-neon-orange"
              >
                <i className="fa-solid fa-phone"></i> โทร 095-801-0958
              </Link>
              <a 
                href="https://liff.line.me/1645278921-kWRPP32q/?accountId=952yyanc" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold bg-[#06C755] text-white hover:bg-[#05a84a] transition-all"
              >
                <i className="fa-brands fa-line"></i> แชท LINE ประเมินราคาฟรี
              </a>
            </div>
          </footer>
        </article>
      </Container>
    </main>
  );
}
