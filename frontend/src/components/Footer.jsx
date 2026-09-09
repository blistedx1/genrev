import React from 'react';
import { ArrowUp } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { InstagramIcon, FacebookIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0B0C0E] border-t border-white/5 py-12 px-6 sm:px-12 lg:pl-36 lg:pr-16 text-neutral-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand with Official Tri-Color Emblem */}
        <div>
          <BrandLogo size="sm" showTagline={true} />
        </div>

        {/* Center Notice with Social Links */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center text-xs font-mono-num text-neutral-400">
          <span>Gaur City Mall, Greater Noida West & Panki, Kanpur</span>
          <span className="hidden sm:inline text-neutral-700">•</span>
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/genrev.interio.pvt.ltd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C5A880] hover:text-white flex items-center gap-1 transition"
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
          <span className="text-xs font-mono-num text-neutral-500">
            © 2026 GENREV INTERIO PVT. LTD.
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
