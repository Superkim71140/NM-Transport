"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Container } from '../ui/Container';
import { DropdownMenu } from '../navigation/DropdownMenu';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  const getLinkClasses = (path: string) => {
    const active = isActive(path);
    return `font-medium relative transition-colors duration-300 py-1 hover:text-white ${
      active ? 'text-white font-bold border-b-2 border-orange-lava drop-shadow-[0_0_10px_rgba(255,69,0,0.8)]' : 'text-text-gray'
    }`;
  };

  const getMobileLinkClasses = (path: string) => {
    const active = isActive(path);
    return `block w-full text-center py-4 text-xl border-b border-white/5 transition-colors ${
      active ? 'text-orange-lava font-bold bg-white/5' : 'text-text-gray hover:text-white'
    }`;
  };

  const serviceItems = [
    { label: 'ขนย้ายของ / ย้ายบ้าน', href: '/service/moving', icon: 'fa-solid fa-box-open' },
    { label: 'รับส่งสัตว์เลี้ยง', href: '/service/pets', icon: 'fa-solid fa-paw' },
    { label: 'ขนส่งมอเตอร์ไซค์', href: '/service/moto', icon: 'fa-solid fa-motorcycle' },
  ];

  const areaItems = [
    { label: 'โซนฝั่งธน (Thonburi)', href: '/area/thonburi', icon: 'fa-solid fa-location-dot' },
    { label: 'โซนกรุงเทพชั้นใน', href: '/area/bangkok-inner', icon: 'fa-solid fa-location-dot' },
    { label: 'โซนปริมณฑล', href: '/area/perimeter', icon: 'fa-solid fa-location-dot' },
    { label: 'โซนเชียงใหม่', href: '/area/chiangmai', icon: 'fa-solid fa-map-location-dot' },
    { label: 'โซนเชียงราย', href: '/area/chiangrai', icon: 'fa-solid fa-map-location-dot' },
  ];

  return (
    <header className="glass-header sticky top-0 z-[1000] py-2.5 border-b border-orange-lava/20 transition-all duration-300">
      <Container className="flex justify-between items-center px-2.5 md:px-5">
        <Link href="/" className="flex items-center justify-center p-0 relative h-[50px] md:h-[85px] w-[150px] md:w-[250px]" onClick={closeMobileMenu}>
          <Image src="/images/logos/logo-nm18.png" alt="N&M18 TRANSPORT" fill priority className="object-contain contrast-110 transition-transform duration-300 hover:scale-105" />
        </Link>
        
        {/* Mobile Menu Toggle Button */}
        <button 
          className="block md:hidden text-2xl text-white cursor-pointer mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className={getLinkClasses('/')}>
            หน้าแรก
          </Link>
          
          <DropdownMenu label="บริการ" items={serviceItems} />
          <DropdownMenu label="พื้นที่ให้บริการ" items={areaItems} />

          <Link href="/works" className={getLinkClasses('/works')}>
            ผลงาน
          </Link>
          
          <Link href="/contact" className={`px-6 py-2 rounded-full border-2 border-orange-lava transition-all hover:shadow-neon-orange ml-2 font-semibold ${isActive('/contact') ? 'bg-orange-lava text-white' : 'text-orange-lava hover:bg-orange-lava hover:text-white'}`}>
            ติดต่อเรา
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div 
          id="mobile-menu"
          className={`
            md:hidden absolute top-full left-0 w-full bg-[#050a14]/98 flex flex-col pt-2 pb-6
            border-b-2 border-orange-lava shadow-[0_10px_20px_rgba(0,0,0,0.8)] z-[1100]
            transition-all duration-300 origin-top overflow-y-auto max-h-[calc(100vh-70px)]
            ${isMobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}
          `}
        >
          <Link href="/" className={getMobileLinkClasses('/')} onClick={closeMobileMenu}>
            หน้าแรก
          </Link>
          
          <DropdownMenu label="บริการ" items={serviceItems} onLinkClick={closeMobileMenu} />
          <DropdownMenu label="พื้นที่ให้บริการ" items={areaItems} onLinkClick={closeMobileMenu} />
          
          <Link href="/works" className={getMobileLinkClasses('/works')} onClick={closeMobileMenu}>
            ผลงาน
          </Link>
          <div className="mt-6 w-[80%] mx-auto text-center">
            <Button variant="outline-contact" href="/contact" className={`w-full ${isActive('/contact') ? 'bg-orange-lava text-white shadow-neon-orange' : ''}`} onClick={closeMobileMenu}>
              ติดต่อเรา
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
