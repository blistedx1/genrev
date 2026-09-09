import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT US', href: '#about' },
    { label: 'PROJECTS', href: '#projects' },
    { label: '3D STUDIO', href: '#3d-studio' },
    { label: 'CLIENTS', href: '#clients' },
    { label: 'CONTACTS', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#111215]/90 backdrop-blur-md py-4 border-b border-white/5 shadow-xl' : 'bg-transparent py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo - matching go.arch typography */}
        <a href="#home" className="flex items-center gap-1 group">
          <span className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-[#C5A880] transition-colors font-sans">
            genrev<span className="text-[#C5A880]">.</span>interio
          </span>
        </a>

        {/* Direct Phone Number - matching screenshot top-left */}
        <div className="hidden lg:flex items-center gap-2 text-xs tracking-widest text-neutral-400 font-mono-num pl-8 border-l border-white/10">
          <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
          <a href="tel:+12124567890" className="hover:text-white transition">
            +1 (212) 456-78-90
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] font-semibold tracking-[0.2em] text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative hover:text-[#C5A880] transition py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A880] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action: Consultation Pill */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider bg-[#C5A880] text-[#111215] hover:bg-[#DFC49F] transition flex items-center gap-1.5 shadow-lg shadow-[#C5A880]/20"
          >
            <span>INQUIRE</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-200 hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111215]/98 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition">
          <nav className="flex flex-col gap-4 text-xs tracking-widest font-semibold text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#C5A880] py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-center rounded-full text-xs font-semibold tracking-wider bg-[#C5A880] text-[#111215]"
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
