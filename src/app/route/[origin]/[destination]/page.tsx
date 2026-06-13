import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import routes from '@/data/long-haul-routes.json';

interface RouteGeo {
  latitude: number;
  longitude: number;
}

interface LocalizedFaq {
  question: string;
  answer: string;
}

interface LongHaulRoute {
  originSlug: string;
  destinationSlug: string;
  originThai: string;
  destinationThai: string;
  searchTheme: string;
  estimatedDistance: number;
  originEnglish: string;
  destinationEnglish: string;
  destinationProvinceThai: string;
  destinationProvinceEnglish: string;
  originGeo: RouteGeo;
  destinationGeo: RouteGeo;
  serviceRadiusMeters: number;
  priority: number;
  isTopRoute: boolean;
  routeCategory: string;
  routeHighlights: string[];
  recommendedVehicles: string[];
  nearbyAreas: string[];
  keywords: string[];
  localizedFaqs: LocalizedFaq[];
}

type Props = {
  params: {
    origin: string;
    destination: string;
  };
};

// Next.js static parameters pre-generation
export async function generateStaticParams() {
  return routes.map((r) => ({
    origin: r.originSlug,
    destination: r.destinationSlug,
  }));
}

// Guarantee static build only for existing dataset routes
export const dynamicParams = false;

// Dynamic SEO Metadata Generation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const route = (routes as LongHaulRoute[]).find(
    (r) => r.originSlug === params.origin && r.destinationSlug === params.destination
  );

  if (!route) return {};

  const title = `รถรับจ้างย้ายบ้าน ${route.originThai} ไป ${route.destinationThai} ราคาถูก | N&M18`;
  const description = `บริการรถรับจ้างย้ายบ้านและขนของจาก${route.originThai} ไป${route.destinationThai} ระยะทางประมาณ ${route.estimatedDistance} กม. มีรถกระบะ รถ 6 ล้อ และรถขนย้ายหลายขนาด ติดต่อ N&M18 เพื่อสอบถามคิวรถและประเมินราคา`;
  
  const canonicalPath = `/route/${route.originSlug}/${route.destinationSlug}`;

  return {
    title,
    description,
    keywords: route.keywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: `https://www.nm18transport.com${canonicalPath}`,
      images: [{ url: 'https://www.nm18transport.com/images/logos/logo-nm18.png' }],
      type: 'website',
      locale: 'th_TH',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://www.nm18transport.com/images/logos/logo-nm18.png'],
    },
  };
}

export default function LongHaulRoutePage({ params }: Props) {
  const route = (routes as LongHaulRoute[]).find(
    (r) => r.originSlug === params.origin && r.destinationSlug === params.destination
  );

  if (!route) {
    notFound();
  }

  const siteUrl = 'https://www.nm18transport.com';
  const canonicalUrl = `${siteUrl}/route/${route.originSlug}/${route.destinationSlug}`;

  // 1. Moving Company Node
  const movingCompanyNode = {
    "@type": "MovingCompany",
    "@id": `${siteUrl}/#moving-company`,
    "name": "N&M18 TRANSPORT",
    "url": siteUrl,
    "logo": {
      "@type": "ImageObject",
      "@id": `${siteUrl}/#logo`,
      "url": `${siteUrl}/images/logos/logo-nm18.png`,
      "caption": "N&M18 TRANSPORT Logo"
    },
    "image": `${siteUrl}/images/logos/logo-nm18.png`,
    "telephone": "095-801-0958",
    "priceRange": "฿1,000 - ฿5,000",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TH"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=100085299521050"
    ]
  };

  // 2. Service & GeoCircles Nodes
  const originGeoCircle = {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": route.originGeo.latitude,
      "longitude": route.originGeo.longitude
    },
    "geoRadius": route.serviceRadiusMeters
  };

  const destinationGeoCircle = {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": route.destinationGeo.latitude,
      "longitude": route.destinationGeo.longitude
    },
    "geoRadius": route.serviceRadiusMeters
  };

  const serviceNode = {
    "@type": "Service",
    "@id": `${canonicalUrl}#service`,
    "name": `Moving services from ${route.originEnglish} to ${route.destinationEnglish}`,
    "serviceType": `รถรับจ้างย้ายบ้านและขนของ ${route.originThai} ไป ${route.destinationThai}`,
    "provider": {
      "@id": `${siteUrl}/#moving-company`
    },
    "areaServed": [originGeoCircle, destinationGeoCircle]
  };

  // 3. Offer Node
  const offerNode = {
    "@type": "Offer",
    "@id": `${canonicalUrl}#offer`,
    "url": canonicalUrl,
    "name": `Moving services from ${route.originEnglish} to ${route.destinationEnglish}`,
    "priceCurrency": "THB",
    "itemOffered": {
      "@id": `${canonicalUrl}#service`
    }
  };

  // 4. BreadcrumbList Node
  const breadcrumbNode = {
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "หน้าแรก",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "เส้นทางขนส่งต่างจังหวัด",
        "item": `${siteUrl}/route`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `${route.originThai} ไป ${route.destinationThai}`,
        "item": canonicalUrl
      }
    ]
  };

  // 5. FAQPage Node
  const faqNode = {
    "@type": "FAQPage",
    "@id": `${canonicalUrl}#faq`,
    "mainEntity": route.localizedFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Synthesis Schema Graph
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      movingCompanyNode,
      serviceNode,
      offerNode,
      breadcrumbNode,
      faqNode
    ]
  };

  // Pick 3 related long-haul routes
  const relatedRoutes = (routes as LongHaulRoute[])
    .filter((r) => r.destinationSlug !== route.destinationSlug)
    .slice(0, 3);

  return (
    <main className="bg-[#02040a] min-h-screen text-[#e2e8f0] pb-[80px]" style={{ backgroundImage: "radial-gradient(circle at 50% 0%, #1a2c4e 0%, #02040a 70%)", backgroundAttachment: "fixed" }}>
      <script
        type="application/ld+json"
        id={`route-${route.originSlug}-${route.destinationSlug}-jsonld`}
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaGraph).replace(/</g, '\\u003c'),
        }}
      />

      <Container className="pt-10 max-w-[900px] mx-auto px-5">
        {/* Breadcrumb Navigation UI */}
        <nav className="text-sm text-text-gray mb-6 flex items-center gap-2" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-orange-lava transition-colors">หน้าแรก</Link>
          <span className="text-white/20">/</span>
          <span className="text-text-gray">เส้นทางขนส่งต่างจังหวัด</span>
          <span className="text-white/20">/</span>
          <span className="text-white/80 font-medium">{route.originThai} ไป {route.destinationThai}</span>
        </nav>

        <article>
          <header className="mb-8 border-b border-white/10 pb-6">
            <span className="bg-orange-lava/10 text-orange-lava px-3 py-1 rounded-full font-semibold text-sm">
              สาย: {route.routeCategory} (ขนส่งต่างจังหวัด)
            </span>
            <h1 className="text-[2rem] md:text-[2.8rem] font-extrabold text-white leading-tight mt-3 mb-4">
              รถรับจ้างย้ายบ้าน {route.originThai} ไป {route.destinationThai}
            </h1>
            <p className="text-text-gray text-base leading-relaxed">
              บริการรถรับจ้างขนของจากต้นทาง {route.originThai} มุ่งหน้าสู่ปลายทาง {route.destinationThai} (รวมถึงจังหวัด {route.destinationProvinceThai}) ระยะทางวิ่งถนนโดยประมาณ {route.estimatedDistance} กิโลเมตร สะดวก รวดเร็ว ด้วยทีมงานขับรถขนย้ายมืออาชีพที่มีความคุ้นเคยกับเส้นทางขนส่งทางไกลเป็นอย่างดี
            </p>
          </header>

          {/* Service Summary Section */}
          <section className="mb-8 bg-white/5 border border-white/10 p-6 rounded-2xl">
            <h2 className="text-[1.5rem] font-bold text-white mb-4">ข้อมูลการเดินทางและบริการขนย้าย</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#ccc]">
              <div>
                <p className="mb-2"><strong>📍 ต้นทาง:</strong> {route.originThai} (ครอบคลุมกรุงเทพฯ และปริมณฑล)</p>
                <p className="mb-2"><strong>🏁 ปลายทาง:</strong> {route.destinationThai} (เขตพื้นที่ให้บริการครอบคลุมจังหวัด {route.destinationProvinceThai})</p>
              </div>
              <div>
                <p className="mb-2"><strong>🛣️ ระยะทางประมาณ:</strong> {route.estimatedDistance} กิโลเมตร</p>
                <p className="mb-2"><strong>⏱️ ระยะเวลาจัดส่งขนส่ง:</strong> รวดเร็วทันใจ ได้รับของภายในวันเดียวกันหรือตามเวลาตกลง</p>
              </div>
            </div>
          </section>

          {/* Recommended Vehicles Section */}
          <section className="mb-8">
            <h2 className="text-[1.5rem] font-bold text-white mb-4">ประเภทรถรับจ้างแนะนำสำหรับเส้นทางนี้</h2>
            <p className="text-[#ccc] mb-4">เราแนะนำขนาดรถขนส่งที่เหมาะสมสำหรับการขนย้ายระยะไกลจาก {route.originThai} ไปยัง {route.destinationThai} ดังนี้:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {route.recommendedVehicles.map((vehicle, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-xl">
                  <h3 className="text-orange-lava font-bold mb-1">
                    <i className="fa-solid fa-truck-moving mr-2"></i> {vehicle}
                  </h3>
                  <p className="text-sm text-text-gray">
                    บริการขนย้ายบ้าน คอนโด ยานพาหนะ หรือขนส่งกระจายสินค้าเหมาคันข้ามจังหวัด พร้อมตู้อะลูมิเนียมมิดชิด ปลอดภัยจากน้ำฝนและฝุ่น 100%
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Route Highlights Section */}
          <section className="mb-8">
            <h2 className="text-[1.5rem] font-bold text-white mb-4">จุดเด่นบริการขนส่งเส้นทาง {route.originThai} - {route.destinationThai}</h2>
            <ul className="list-none space-y-3">
              {route.routeHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[#ccc]">
                  <i className="fa-solid fa-circle-check text-line-green text-lg mt-1 shrink-0"></i>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Nearby Areas Section */}
          {route.nearbyAreas.length > 0 && (
            <section className="mb-8">
              <h2 className="text-[1.5rem] font-bold text-white mb-4">พื้นที่ใกล้เคียงที่ให้บริการในจังหวัดปลายทาง</h2>
              <p className="text-[#ccc] mb-3">นอกเหนือจากเขตอำเภอเมืองแล้ว เรายังมีบริการรถรับจ้างวิ่งครอบคลุมอำเภอและพื้นที่ใกล้เคียง ดังนี้:</p>
              <div className="flex gap-2 flex-wrap">
                {route.nearbyAreas.map((area, idx) => (
                  <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-[#ccc]">
                    {area}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Visible FAQs Section */}
          <section className="mb-10 border-t border-white/10 pt-8">
            <h2 className="text-[1.5rem] font-bold text-white mb-6">คำถามที่พบบ่อย (FAQs) เส้นทาง {route.destinationThai}</h2>
            <div className="space-y-6">
              {route.localizedFaqs.map((faq, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                  <h3 className="text-white text-lg font-bold mb-2 flex items-start gap-2.5">
                    <span className="text-orange-lava font-extrabold">Q:</span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-[#ccc] leading-relaxed flex items-start gap-2.5 pl-6">
                    <span className="text-line-green font-extrabold">A:</span>
                    <span>{faq.answer}</span>
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Footer Panel */}
          <footer className="bg-gradient-to-br from-[#0f1c38] to-navy-dark border border-orange-lava/30 p-6 md:p-8 rounded-2xl text-center shadow-lg relative overflow-hidden mb-12">
            <p className="text-white text-[1.1rem] mb-2">เช็คคิวรถรับจ้างย้ายบ้านเส้นทาง {route.originThai} ไป {route.destinationThai} วันนี้!</p>
            <p className="text-[#ccc] text-sm mb-6">บริษัท เอ็นแอนด์เอ็ม 18 ทรานสปอร์ต จำกัด ยินดีประเมินราคาตามรายละเอียดงาน ไม่มีค่าใช้จ่ายแฝง</p>
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

          {/* Related Long-Haul Routes & Backlink Matrix */}
          <div className="border-t border-white/10 pt-8">
            <h4 className="text-white font-bold text-lg mb-4">เส้นทางขนส่งต่างจังหวัดอื่นๆ ที่น่าสนใจ:</h4>
            <div className="flex gap-4 flex-wrap">
              {relatedRoutes.map((r, idx) => (
                <Link 
                  key={idx}
                  href={`/route/${r.originSlug}/${r.destinationSlug}`}
                  className="px-5 py-2.5 rounded-lg bg-navy-primary border border-white/10 hover:border-orange-lava hover:text-orange-lava transition-all text-sm font-semibold"
                >
                  รถรับจ้าง กรุงเทพฯ ไป {r.destinationThai}
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/" className="inline-flex items-center gap-2 text-orange-lava hover:underline text-sm font-semibold">
                <i className="fa-solid fa-house"></i> กลับสู่หน้าแรก N&M18 TRANSPORT
              </Link>
            </div>
          </div>
        </article>
      </Container>
    </main>
  );
}
