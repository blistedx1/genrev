import React from 'react';

/**
 * Official BrandLogo component for GENREV INTERIO PVT. LTD.
 * Features the signature 3-petal pinwheel emblem (Red, Amber, Cobalt Blue)
 * with refined architectural typography.
 */
export default function BrandLogo({ size = 'md', showTagline = false, theme = 'dark', className = '' }) {
  // Size presets
  const sizeMap = {
    sm: {
      emblem: 'w-7 h-7',
      title: 'text-sm tracking-tight',
      sub: 'text-[8px] tracking-[0.2em]',
      tagline: 'text-[9px]'
    },
    md: {
      emblem: 'w-9 h-9',
      title: 'text-base md:text-lg tracking-tight',
      sub: 'text-[9px] tracking-[0.22em]',
      tagline: 'text-[11px]'
    },
    lg: {
      emblem: 'w-12 h-12',
      title: 'text-xl md:text-2xl tracking-tight',
      sub: 'text-[10px] tracking-[0.25em]',
      tagline: 'text-xs'
    }
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* 3-blade Pinwheel Logo Emblem */}
      <div className={`relative ${currentSize.emblem} flex-shrink-0 flex items-center justify-center`}>
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
          {/* Top Petal - Vivid Crimson Red */}
          <path
            d="M50 8 C58 20, 68 28, 76 36 C66 40, 56 42, 46 44 C42 32, 44 20, 50 8 Z"
            fill="#E52E2D"
            filter="drop-shadow(0 2px 4px rgba(229,46,45,0.4))"
          />
          {/* Bottom-Left Petal - Warm Golden Amber */}
          <path
            d="M24 74 C26 60, 32 50, 42 42 C44 54, 48 64, 52 74 C40 76, 30 80, 24 74 Z"
            fill="#F3A712"
            filter="drop-shadow(0 2px 4px rgba(243,167,18,0.4))"
          />
          {/* Bottom-Right Petal - Royal Cobalt Blue */}
          <path
            d="M78 68 C66 70, 56 68, 48 60 C58 54, 68 48, 76 44 C82 52, 82 62, 78 68 Z"
            fill="#1E56B7"
            filter="drop-shadow(0 2px 4px rgba(30,86,183,0.4))"
          />
          {/* Subtle center golden core glow */}
          <circle cx="50" cy="52" r="3" fill="#FFEAA7" opacity="0.8" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline gap-1.5">
          <span className={`font-bold font-sans ${currentSize.title} uppercase tracking-wider text-white`}>
            GENREV <span className="text-[#C5A880]">INTERIO</span>
          </span>
          <span className="text-[10px] font-semibold font-mono-num uppercase tracking-wider text-neutral-400">
            Pvt Ltd
          </span>
        </div>

        <span className={`font-mono-num uppercase font-medium mt-1 ${currentSize.sub} text-neutral-400`}>
          Architecture • Interior • Construction
        </span>

        {showTagline && (
          <span className={`italic font-serif mt-1 ${currentSize.tagline} text-[#C5A880]`}>
            "we create your legacy"
          </span>
        )}
      </div>
    </div>
  );
}
