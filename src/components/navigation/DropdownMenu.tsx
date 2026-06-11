"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type DropdownItem = {
  label: string;
  href: string;
  icon?: string;
};

type DropdownMenuProps = {
  label: string;
  items: DropdownItem[];
  icon?: string;
  onLinkClick?: () => void;
};

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ label, items, icon, onLinkClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
    if (onLinkClick) {
      onLinkClick();
    }
  };

  const isMenuDropdownActive = items.some(item => pathname.startsWith(item.href));

  return (
    <div 
      className="relative group dropdown w-full md:w-auto" 
      ref={dropdownRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        type="button"
        className={`w-full md:w-auto font-medium relative transition-colors hover:text-white flex items-center justify-center md:justify-start gap-1 py-4 md:py-0 border-b border-white/5 md:border-none ${isOpen || isMenuDropdownActive ? 'text-white' : 'text-text-gray'} ${isMenuDropdownActive && !isOpen ? 'text-white font-bold border-b-2 border-orange-lava drop-shadow-[0_0_10px_rgba(255,69,0,0.8)]' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {icon && <i className={`${icon} w-5`}></i>} {label} 
        <i className={`fa-solid fa-chevron-down text-xs transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>
      
      <div 
        className={`
          static md:absolute top-full left-0 md:bg-[#050a14]/95 md:min-w-[220px] 
          md:shadow-2xl md:border-t-2 md:border-orange-lava flex flex-col md:py-2.5 md:rounded-b-lg z-[1100]
          transition-all duration-300 overflow-hidden
          ${isOpen ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 md:max-h-none md:opacity-0 md:invisible opacity-0 invisible'}
        `}
      >
        {items.map((item, index) => {
          const isItemActive = pathname.startsWith(item.href);
          return (
            <Link 
              key={index} 
              href={item.href} 
              className={`px-5 py-3 text-sm block text-center md:text-left border-b border-white/5 hover:bg-orange-lava/10 hover:text-orange-lava transition-all last:border-b-0 bg-white/5 md:bg-transparent ${isItemActive ? 'text-orange-lava bg-orange-lava/10' : 'text-text-gray'}`}
              onClick={handleLinkClick}
            >
              {item.icon && <i className={`${item.icon} w-5 inline-block text-left`}></i>} {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
