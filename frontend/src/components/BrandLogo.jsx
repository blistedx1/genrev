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
      {/* Official GENREV 3-blade Pinwheel Logo Emblem */}
      <div className={`relative ${currentSize.emblem} flex-shrink-0 flex items-center justify-center`}>
        <img
          src="/genrev-logo.png"
          alt="GENREV Logo"
          className="w-full h-full object-contain filter drop-shadow-md"
          onError={(e) => {
            e.currentTarget.src = '/genrev-logo.jpg';
          }}
        />
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
          Architecture • Interiors • Construction • Planning
        </span>

        {showTagline && (
          <span className={`italic font-serif mt-1 ${currentSize.tagline} text-[#C5A880]`}>
            "Generating Revolution in Spaces"
          </span>
        )}
      </div>
    </div>
  );
}
