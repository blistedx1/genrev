import React from 'react';
import { ArrowUp } from 'lucide-react';
import { InstagramIcon, TwitterIcon, LinkedInIcon, BehanceIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0B0C0E] border-t border-white/5 py-12 px-6 sm:px-12 lg:pl-36 lg:pr-16 text-neutral-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand - matching go.arch typography */}
        <div className="flex items-center gap-1">
          <span className="text-xl font-bold tracking-tight text-white font-sans">
            genrev<span className="text-[#C5A880]">.</span>interio
          </span>
          <span className="text-xs text-neutral-600 font-mono-num ml-3 pl-3 border-l border-white/10 hidden sm:inline">
            PVT LTD
          </span>
        </div>

        {/* Center Notice */}
        <div className="text-center text-xs font-mono-num text-neutral-500">
          Where Vision Meets Craftsmanship • Architectural & Bespoke Interiors
        </div>

        {/* Right Info & Back to Top */}
        <div className="flex items-center gap-6">
          <span className="text-xs font-mono-num text-neutral-500">
            © genrev 2026. All rights reserved.
          </span>

          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#C5A880] hover:text-black text-neutral-400 flex items-center justify-center transition border border-white/10 cursor-pointer"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
