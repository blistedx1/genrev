import React from 'react';
import { ArrowUp } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { InstagramIcon, FacebookIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark-bg border-t border-white/5 py-12 px-6 sm:px-12 lg:pl-36 lg:pr-16 text-neutral-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand with Official Tri-Color Emblem */}
        <div>
          <BrandLogo size="sm" showTagline={true} />
        </div>

        {/* Center Notice with Social Links */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center text-xs font-mono-num text-neutral-400">
          <span>Registered Office: C-587, Panki, Kanpur Nagar, UP 208020</span>
          <span className="hidden sm:inline text-neutral-700">•</span>
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/genrev.interio.pvt.ltd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-white flex items-center gap-1 transition"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>@genrev.interio.pvt.ltd</span>
            </a>
            <span className="text-neutral-700">•</span>
            <a
              href="https://www.facebook.com/profile.php?id=61550528653657"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1877F2] hover:text-white flex items-center gap-1 transition"
            >
              <FacebookIcon className="w-3.5 h-3.5" />
              <span>Facebook</span>
            </a>
          </div>
        </div>

        {/* Right Info & Back to Top */}
        <div className="flex items-center gap-6">
          <div className="text-right text-xs font-mono-num">
            <span className="text-neutral-400 block font-medium">
              © 2026 Genrev INTERIO Pvt. Ltd. All Rights Reserved.
            </span>
            <span className="text-[10px] text-neutral-500 uppercase tracking-widest block">
              Generating Revolution
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-gold hover:text-black text-neutral-400 flex items-center justify-center transition border border-white/10 cursor-pointer"
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
