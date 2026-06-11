import React from 'react';
import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'line' | 'blue' | 'outline-contact';
  href?: string;
  className?: string;
  onClick?: () => void;
  target?: string;
};

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  href, 
  className = '', 
  onClick,
  target
}) => {
  const baseStyle = "inline-flex items-center justify-center gap-2.5 py-3 px-8 rounded-full font-semibold border-none cursor-pointer relative overflow-hidden transition-all duration-300 tracking-wide z-10";
  
  let variantStyle = "";
  switch (variant) {
    case 'primary':
      variantStyle = "bg-orange-lava text-white shadow-neon-orange border-2 border-orange-lava hover:bg-orange-glow hover:shadow-neon-orange-strong hover:-translate-y-1 hover:scale-105";
      break;
    case 'line':
      variantStyle = "bg-line-green text-white shadow-neon-green border-2 border-line-green hover:bg-[#05a84a] hover:shadow-[0_0_25px_rgba(6,199,85,0.8)] hover:-translate-y-1";
      break;
    case 'blue':
      variantStyle = "bg-fb-blue text-white shadow-[0_0_15px_rgba(24,119,242,0.6)] border-2 border-fb-blue hover:bg-[#1464c4] hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(24,119,242,0.8)]";
      break;
    case 'outline-contact':
      variantStyle = "border-2 border-orange-lava text-orange-lava bg-transparent hover:bg-orange-lava hover:text-white hover:shadow-neon-orange";
      break;
  }

  const combinedClassName = `${baseStyle} ${variantStyle} ${className}`;

  if (href) {
    // Determine if it is an external link
    const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:');
    if (isExternal) {
      return (
        <a href={href} className={combinedClassName} onClick={onClick} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClassName} onClick={onClick} target={target}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} onClick={onClick}>
      {children}
    </button>
  );
};
