import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'ABOUT', href: '#about' },
    { label: 'STUDIO', href: '#3d-studio' },
    { label: 'INSTAGRAM', href: '#instagram' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0D0E12]/95 backdrop-blur-md py-4 border-b border-white/[0.06] shadow-2xl' 
          : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="w-full max-w-[1500px] mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between gap-4">
        
        {/* Left: Brand Logo */}
        <div className="flex-shrink-0">
          <a href="#home" className="flex items-center group">
            <BrandLogo size="sm" theme="dark" />
          </a>
        </div>

        {/* Center: Desktop Navigation Links (Evenly Spaced & Centered) */}
        <nav className="hidden lg:flex items-center justify-center gap-7 xl:gap-9 text-[11px] font-mono-num font-medium tracking-[0.25em] flex-1 text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative transition-colors duration-200 py-1 uppercase tracking-[0.25em] hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Distinct Action Cluster with Separator */}
        <div className="hidden sm:flex items-center gap-3 xl:gap-4 flex-shrink-0 pl-6 border-l border-white/10">
          
          {/* Phone Action Button */}
          <a
            href="tel:+919958323002"
            className="flex items-center gap-2 text-xs font-mono-num transition tracking-wider px-3.5 py-1.5 rounded-full border bg-white/[0.04] text-neutral-300 border-white/10 hover:border-white/30 hover:bg-white/10 hover:text-white"
          >
            <Phone className="w-3.5 h-3.5 text-[#E52E2D]" />
            <span>+91 99583 23002</span>
          </a>

          {/* Inquire Action Button */}
          <a
            href="#contact"
            className="px-4 py-1.5 rounded-full text-[11px] font-mono-num font-semibold tracking-widest uppercase transition duration-300 flex items-center gap-1.5 shadow-sm border border-white/25 hover:border-white bg-white/10 hover:bg-white text-white hover:text-black"
          >
            <span>INQUIRE</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile / Hamburger Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 transition cursor-pointer text-neutral-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D0E12]/98 backdrop-blur-2xl border-b border-white/10 px-8 py-8 transition-all animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-5 text-xs font-mono-num tracking-[0.25em] font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-white py-1 border-b border-white/5 uppercase"
              >
                {link.label}
              </a>
            ))}
            
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="tel:+919958323002"
                className="flex items-center gap-2 text-xs font-mono-num text-neutral-300 py-2"
              >
                <Phone className="w-4 h-4 text-[#E52E2D]" />
                <span>+91 99583 23002</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-center rounded-full text-xs font-mono-num font-semibold tracking-widest uppercase bg-white text-black hover:bg-neutral-200 transition"
              >
                INQUIRE NOW
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
