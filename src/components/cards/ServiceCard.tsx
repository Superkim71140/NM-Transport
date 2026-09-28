import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { IconType } from 'react-icons';

export type ServiceCardProps = {
  title: string;
  description: string;
  icon: IconType;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
  priceBadge?: string;
  ctaLabel?: string;
};

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  href,
  imageSrc,
  imageAlt = title,
  priceBadge,
  ctaLabel = "ดูรายละเอียด / จองคิว →",
}) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0f1c38]/90 shadow-[0_14px_35px_rgba(0,0,0,0.28)] backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-orange-lava hover:shadow-[0_18px_45px_rgba(255,69,0,0.25)]">
      
      {/* Banner Media Inset Frame */}
      {imageSrc && (
        <div className="relative w-full overflow-hidden bg-[#0b1730] p-1.5 sm:p-2">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1672}
            height={941}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="block h-auto w-full rounded-xl object-contain transition-transform duration-500 group-hover:scale-[1.02]"
          />
          {priceBadge && (
            <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-lava to-orange-glow text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-neon-orange">
              {priceBadge}
            </div>
          )}
        </div>
      )}

      {/* Card Content Body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-orange-lava/30 bg-orange-lava/10 text-2xl text-orange-lava transition-transform duration-300 group-hover:scale-110 group-hover:bg-orange-lava group-hover:text-white">
          <Icon aria-hidden="true" focusable="false" className="shrink-0" />
        </div>

        <h3 className="mb-3 text-xl font-bold leading-tight text-white transition-colors group-hover:text-orange-200">
          {title}
        </h3>

        <p className="mb-6 flex-1 text-sm md:text-base leading-relaxed text-slate-300">
          {description}
        </p>

        <Link
          href={href}
          aria-label={`${ctaLabel}: ${title}`}
          className="inline-flex w-fit items-center font-semibold text-sm md:text-base text-orange-lava transition-all duration-200 group-hover:translate-x-1 group-hover:text-orange-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-lava focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1c38]"
        >
          {ctaLabel}
        </Link>
      </div>
    </article>
  );
};
