"use client";

import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Container } from '../ui/Container';
import { 
  FaBoxOpen, 
  FaPaw, 
  FaMotorcycle, 
  FaPhoneVolume, 
  FaLine, 
  FaBars, 
  FaXmark,
  FaImages,
  FaHouse,
  FaMapLocationDot,
  FaChevronDown
} from 'react-icons/fa6';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAreaMenuOpen, setIsAreaMenuOpen] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      // Focus close button on open
      setTimeout(() => {
        closeBtnRef.current?.focus();
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsMobileMenuOpen(false);
          triggerRef.current?.focus();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow || 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    triggerRef.current?.focus();
  };

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  const navLinks = [
    { label: 'หน้าแรก', href: '/', icon: FaHouse },
    { label: 'ย้ายบ้าน/หอพัก', href: '/service/moving', icon: FaBoxOpen },
    { label: 'รับส่งสัตว์เลี้ยง', href: '/service/pets', icon: FaPaw },
    { label: 'ขนส่งมอเตอร์ไซค์', href: '/service/moto', icon: FaMotorcycle },
    { label: 'ผลงาน', href: '/works', icon: FaImages },
  ];

  const areaLinks = [
    { label: 'ฝั่งธนบุรี (จุดจอดหลัก)', href: '/area/thonburi' },
    { label: 'กรุงเทพฯ ชั้นใน', href: '/area/bangkok-inner' },
    { label: 'ปริมณฑล', href: '/area/perimeter' },
    { label: 'เชียงใหม่', href: '/area/chiangmai' },
    { label: 'เชียงราย', href: '/area/chiangrai' },
  ];

  return (
    <header className="glass-header sticky top-0 z-[1000] border-b border-orange-lava/20 transition-all duration-300">
      <Container className="flex justify-between items-center py-2.5 px-3 sm:px-5">
        
        {/* Brand Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2 relative h-[48px] md:h-[62px] w-[140px] md:w-[180px] transition-transform duration-300 hover:scale-105" 
          onClick={closeMobileMenu}
          aria-label="NM-Transport หน้าแรก"
        >
          <Image 
            src="/images/logos/logo-nm18.webp" 
            alt="N&M18 TRANSPORT รถกระบะตู้ทึบรับจ้าง" 
            fill 
            className="object-contain" 
            sizes="(max-width: 768px) 140px, 180px"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-200 py-1 relative hover:text-white ${
                  active
                    ? 'text-orange-lava font-semibold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-orange-lava after:rounded-full after:shadow-[0_0_8px_rgba(255,69,0,0.8)]'
                    : 'text-text-gray hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          
          {/* Area Navigation Dropdown */}
          <div className="relative group">
            <button 
              type="button"
              className={`flex items-center gap-1.5 text-sm font-medium transition-all py-1 relative hover:text-white ${pathname.startsWith('/area') ? 'text-orange-lava font-semibold' : 'text-text-gray'}`}
            >
              พื้นที่ให้บริการ
              <FaChevronDown className="text-xs transition-transform group-hover:rotate-180" aria-hidden="true" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
              <div className="bg-[#0A162C] border border-white/10 rounded-xl shadow-2xl p-2 w-[220px] flex flex-col gap-1">
                {areaLinks.map((area) => (
                  <Link 
                    key={area.href} 
                    href={area.href} 
                    className={`px-4 py-2 rounded-lg text-sm transition-colors ${pathname === area.href ? 'bg-orange-lava/20 text-orange-lava font-medium' : 'text-gray-300 hover:bg-white/5 hover:text-white'}`}
                  >
                    {area.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* CTA Action Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://liff.line.me/1645278921-kWRPP32q/?accountId=952yyanc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="แอดไลน์สอบถามราคา N&M18 TRANSPORT"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-line-green/10 text-line-green border border-line-green/30 transition-all duration-300 hover:bg-line-green hover:text-white hover:shadow-neon-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-line-green"
          >
            <FaLine className="text-sm shrink-0" aria-hidden="true" />
            <span>เช็คราคา Line</span>
          </a>

          <a
            href="tel:0958010958"
            aria-label="โทรติดต่อ N&M18 TRANSPORT 095-801-0958"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-bold bg-gradient-to-r from-orange-lava to-orange-glow text-white shadow-neon-orange transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,69,0,0.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-lava"
          >
            <FaPhoneVolume className="text-sm shrink-0 animate-[pulseIcon_1.5s_infinite]" aria-hidden="true" />
            <span>095-801-0958</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="tel:0958010958"
            aria-label="โทรด่วน 095-801-0958"
            className="inline-flex items-center justify-center min-h-11 min-w-11 w-11 h-11 rounded-full bg-orange-lava text-white shadow-neon-orange transition-transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <FaPhoneVolume className="text-base" aria-hidden="true" />
          </a>
          
          <button
            ref={triggerRef}
            type="button"
            className="flex items-center justify-center min-h-11 min-w-11 w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-white text-lg transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-lava"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "ปิดเมนูนำทาง" : "เปิดเมนูนำทาง"}
          >
            {isMobileMenuOpen ? <FaXmark aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer via Portal: breaks out of backdrop-filter stacking context */}
      {isMounted && isMobileMenuOpen && createPortal(
        <div
          id="mobile-drawer-root"
          className="fixed inset-0 z-[99999] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="เมนูนำทางหลัก"
        >
          {/* Viewport-covering backdrop */}
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />

          {/* Opaque drawer surface covering viewport */}
          <div
            id="mobile-menu"
            className="fixed inset-y-0 right-0 w-full max-w-[380px] bg-[#050A14] border-l border-orange-lava/30 shadow-2xl flex flex-col h-full max-h-[100dvh] overflow-hidden"
          >
            {/* Top Bar inside Drawer */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#070E1E] shrink-0">
              <Link 
                href="/" 
                onClick={closeMobileMenu}
                className="flex items-center gap-2 relative h-[38px] w-[130px]"
                aria-label="NM-Transport หน้าแรก"
              >
                <Image 
                  src="/images/logos/logo-nm18.webp" 
                  alt="N&M18 TRANSPORT รถกระบะตู้ทึบรับจ้าง" 
                  fill 
                  loading="lazy"
                  className="object-contain" 
                  sizes="130px"
                />
              </Link>
              <button
                ref={closeBtnRef}
                type="button"
                onClick={closeMobileMenu}
                className="flex items-center justify-center min-h-11 min-w-11 w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-white text-lg hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-lava"
                aria-label="ปิดเมนูนำทาง"
              >
                <FaXmark aria-hidden="true" />
              </button>
            </div>

            {/* Scrollable Navigation Body */}
            <nav 
              className="flex-1 overflow-y-auto overscroll-contain px-4 py-4 space-y-2 pb-32"
              aria-label="Mobile Navigation"
            >
              {navLinks.map((link) => {
                const active = isActive(link.href);
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={`flex items-center gap-3.5 px-4 min-h-11 py-2.5 rounded-xl text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-lava ${
                      active
                        ? 'bg-orange-lava/15 text-orange-lava font-bold border border-orange-lava/30 shadow-[0_0_15px_rgba(255,69,0,0.15)]'
                        : 'text-text-gray hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm shrink-0 ${active ? 'bg-orange-lava text-white' : 'bg-white/5 text-text-gray'}`}>
                      <Icon aria-hidden="true" />
                    </div>
                    <span>{link.label}</span>
                  </Link>
                );
              })}

              {/* Area Navigation Section */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsAreaMenuOpen(!isAreaMenuOpen)}
                  className={`w-full flex items-center justify-between px-4 min-h-11 py-2.5 rounded-xl text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-lava ${
                    pathname.startsWith('/area')
                      ? 'bg-orange-lava/15 text-orange-lava font-bold border border-orange-lava/30'
                      : 'text-text-gray hover:bg-white/5 hover:text-white'
                  }`}
                  aria-expanded={isAreaMenuOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm shrink-0 ${pathname.startsWith('/area') ? 'bg-orange-lava text-white' : 'bg-white/5 text-text-gray'}`}>
                      <FaMapLocationDot aria-hidden="true" />
                    </div>
                    <span>พื้นที่ให้บริการ</span>
                  </div>
                  <FaChevronDown className={`text-xs transition-transform duration-300 ${isAreaMenuOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                
                {/* 5 Zone Links - explicitly padded & touch friendly */}
                {isAreaMenuOpen && (
                  <div className="mt-1 ml-4 pl-3 border-l-2 border-orange-lava/30 flex flex-col gap-1">
                    <Link
                      href="/area"
                      onClick={closeMobileMenu}
                      className={`flex items-center min-h-11 px-3 py-2 rounded-lg text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-lava ${
                        pathname === '/area' ? 'text-orange-lava bg-white/5' : 'text-slate-200 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      ดูทุกพื้นที่ให้บริการ (ภาพรวม)
                    </Link>
                    {areaLinks.map((area) => (
                      <Link
                        key={area.href}
                        href={area.href}
                        onClick={closeMobileMenu}
                        className={`flex items-center min-h-11 px-3 py-2 rounded-lg text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-lava ${
                          pathname === area.href 
                            ? 'text-orange-lava font-bold bg-orange-lava/10 border border-orange-lava/20' 
                            : 'text-slate-300 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        • {area.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact Link */}
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className={`flex items-center gap-3.5 px-4 min-h-11 py-2.5 rounded-xl text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-lava ${
                  isActive('/contact')
                    ? 'bg-orange-lava/15 text-orange-lava font-bold border border-orange-lava/30'
                    : 'text-text-gray hover:bg-white/5 hover:text-white'
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-sm text-text-gray shrink-0">
                  <FaPhoneVolume aria-hidden="true" />
                </div>
                <span>ติดต่อเรา</span>
              </Link>

              {/* Contact Actions within drawer */}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider px-1">
                  ติดต่อสอบถามประเมินราคา
                </p>
                <a
                  href="https://liff.line.me/1645278921-kWRPP32q/?accountId=952yyanc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full min-h-11 py-3 rounded-xl font-bold bg-line-green text-white shadow-neon-green transition-transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-line-green"
                >
                  <FaLine className="text-xl" aria-hidden="true" />
                  <span>แอดไลน์ประเมินราคาฟรี</span>
                </a>

                <a
                  href="tel:0958010958"
                  className="flex items-center justify-center gap-2.5 w-full min-h-11 py-3 rounded-xl font-bold bg-gradient-to-r from-orange-lava to-orange-glow text-white shadow-neon-orange transition-transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-lava"
                >
                  <FaPhoneVolume aria-hidden="true" />
                  <span>โทรจองรถ: 095-801-0958</span>
                </a>
              </div>
            </nav>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
};
