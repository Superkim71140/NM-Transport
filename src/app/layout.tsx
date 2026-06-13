import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import { TopBar } from "../components/layout/TopBar";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { MobileStickyBar } from "../components/layout/MobileStickyBar";

const prompt = Prompt({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['thai', 'latin'],
  display: 'swap',
  variable: '--font-prompt',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nm18transport.com"),
  title: {
    default: "N&M18 TRANSPORT - รถรับจ้างขนของ ย้ายคอนโด ย้ายหอพัก กรุงเทพ-ปริมณฑล เริ่ม 1,000.-",
    template: "%s | N&M18 TRANSPORT"
  },
  description: "N&M18 TRANSPORT บริการรถรับจ้างขนของ รถกระบะตู้ทึบ รถ 4 ล้อใหญ่ ย้ายหอพัก ย้ายคอนโด ย้ายบ้าน กรุงเทพ-ปริมณฑลและทั่วไทย เริ่มต้น 1,000 บาท โทร 095-801-0958",
  keywords: [
    "รถรับจ้าง",
    "รถขนของ",
    "ย้ายบ้าน",
    "ย้ายคอนโด",
    "ย้ายหอพัก",
    "รถกระบะตู้ทึบ",
    "N&M18 Transport",
    "รถรับจ้างราคาถูก",
    "บริการรถรับจ้าง",
    "รถกระบะรับจ้าง",
    "รถรับจ้างขนของ",
    "บริการขนย้าย",
    "ขนย้ายบ้าน",
    "ขนย้ายคอนโด",
    "ขนย้ายหอพัก",
    "รถรับจ้างกรุงเทพ",
    "รถรับจ้างปริมณฑล",
    "รถรับจ้างทั่วประเทศ",
    "รถ 4 ล้อใหญ่รับจ้าง",
    "รถ 6 ล้อรับจ้าง",
    "ขนส่งมอเตอร์ไซค์",
    "ขนส่ง Big Bike",
    "ทีมงานยกของ",
    "รถตู้ทึบกันฝน",
    "N&M18 TRANSPORT",
    "เอ็นแอนด์เอ็ม 18 ทรานสปอร์ต"
  ],
  openGraph: {
    title: "N&M18 TRANSPORT - รถรับจ้างขนของ ย้ายคอนโด ย้ายหอพัก กรุงเทพ-ปริมณฑล เริ่ม 1,000.-",
    description: "N&M18 TRANSPORT บริการรถรับจ้างขนของ รถกระบะตู้ทึบ รถ 4 ล้อใหญ่ ย้ายหอพัก ย้ายคอนโด ย้ายบ้าน กรุงเทพ-ปริมณฑลและทั่วไทย เริ่มต้น 1,000 บาท โทร 095-801-0958",
    url: "https://www.nm18transport.com",
    siteName: "N&M18 TRANSPORT",
    images: [
      {
        url: "/images/logos/logo-nm18.png",
        width: 800,
        height: 600,
        alt: "N&M18 TRANSPORT Logo",
      }
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "N&M18 TRANSPORT - รถรับจ้างขนของ ย้ายคอนโด ย้ายหอพัก กรุงเทพ-ปริมณฑล เริ่ม 1,000.-",
    description: "N&M18 TRANSPORT บริการรถรับจ้างขนของ รถกระบะตู้ทึบ รถ 4 ล้อใหญ่ ย้ายหอพัก ย้ายคอนโด ย้ายบ้าน กรุงเทพ-ปริมณฑลและทั่วไทย เริ่มต้น 1,000 บาท โทร 095-801-0958",
    images: ["/images/logos/logo-nm18.png"],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

const schemaObject = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MovingCompany",
      "@id": "https://www.nm18transport.com/#organization",
      "name": "N&M18 TRANSPORT",
      "image": "https://www.nm18transport.com/images/logos/logo-nm18.png",
      "description": "N&M18 TRANSPORT บริการรถรับจ้างขนของ รถกระบะตู้ทึบ รถ 4 ล้อใหญ่ ย้ายหอพัก ย้ายคอนโด ย้ายบ้าน กรุงเทพ-ปริมณฑลและทั่วไทย",
      "telephone": "+66958010958",
      "priceRange": "฿1,000 - ฿5,000",
      "url": "https://www.nm18transport.com",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "TH"
      },
      "areaServed": [
        "กรุงเทพมหานคร",
        "นนทบุรี",
        "ปทุมธานี",
        "สมุทรปราการ",
        "สมุทรสาคร",
        "สมุทรสงคราม",
        "เชียงใหม่",
        "เชียงราย"
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.nm18transport.com/#website",
      "url": "https://www.nm18transport.com",
      "name": "N&M18 TRANSPORT",
      "inLanguage": "th-TH",
      "publisher": {
        "@id": "https://www.nm18transport.com/#organization"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${prompt.variable}`}>
      <head>
        <link rel="preload" as="image" href="/images/portfolio/S__2531437.webp" fetchPriority="high" type="image/webp" />
      </head>
      <body>
        <script
          id="moving-company-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObject).replace(/</g, '\\u003c') }}
        />
        <TopBar />
        <Header />
        {children}
        <Footer />
        <MobileStickyBar />
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js" 
          strategy="afterInteractive" 
          id="fontawesome-js" 
        />
      </body>
    </html>
  );
}
