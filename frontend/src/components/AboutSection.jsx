import React from 'react';
import { Building2, Armchair, Compass, ArrowRight, ShieldCheck, Award } from 'lucide-react';

export default function AboutSection() {
  const specializations = [
    {
      title: 'ARCHITECTURE',
      desc: 'Bespoke structural masterworks, climatic facades, and sustainable planning.',
      icon: Building2,
      number: '01'
    },
    {
      title: 'INTERIORS',
      desc: 'Bespoke residential sanctuaries, luxury hospitality salons, and corporate headquarters.',
      icon: Armchair,
      number: '02'
    },
    {
      title: 'PLANNING & TURNKEY',
      desc: 'Comprehensive end-to-end execution, civil engineering, and artisanal millwork.',
      icon: Compass,
      number: '03'
    }
  ];

  return (
    <section id="about" className="relative py-28 px-6 sm:px-12 lg:pl-36 lg:pr-16 bg-[#111215] overflow-hidden border-b border-white/5">
      {/* Background Watermark matching go.arch screenshot */}
      <div className="absolute top-12 left-20 watermark-text text-8xl md:text-[14rem] select-none opacity-20">
        About
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Tagline matching "ABOUT GO.ARCH" */}
        <div className="flex items-center gap-3 mb-16">
          <span className="text-xs uppercase tracking-[0.35em] text-white font-mono-num font-semibold">
            ABOUT <span className="text-[#C5A880]">GENREV.INTERIO</span>
          </span>
          <span className="w-16 h-[1px] bg-white/10"></span>
        </div>

        {/* 3-Column Editorial Grid matching the screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Vision & Philosophy */}
          <div className="lg:col-span-4 pr-0 lg:pr-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-editorial font-bold text-white leading-tight mb-6">
              we turn ideas into <br />
              <span className="text-[#C5A880]">works of art.</span>
            </h3>
            
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
              For each project we establish relationships with partners who we know will help us create added value for your project. As well as bringing together the public and private sectors, we make sector-overarching links to gather knowledge and to learn from each other.
            </p>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-8 font-light">
              The way we undertake projects is based on permanently applying values that reinforce each other: socio-cultural value, experiential value, building-technical value and economical value.
            </p>

            <div className="pt-4 border-t border-white/10 flex items-center gap-6 text-xs text-neutral-400 font-mono-num">
              <div>
                <span className="text-[#C5A880] font-bold block text-sm">100%</span>
                Bespoke Tailoring
              </div>
              <div className="w-[1px] h-8 bg-white/10"></div>
              <div>
                <span className="text-[#C5A880] font-bold block text-sm">ISO 9001</span>
                Quality Standard
              </div>
            </div>
          </div>

          {/* Middle Column: Our Specialization */}
          <div className="lg:col-span-4 lg:px-4 border-t lg:border-t-0 lg:border-l lg:border-r border-white/10 pt-8 lg:pt-0">
            <div className="mb-6">
              <span className="text-xs uppercase tracking-[0.25em] text-white font-semibold block mb-1">
                our specialization:
              </span>
              <span className="w-8 h-[2px] bg-[#C5A880] block"></span>
            </div>

            <div className="space-y-6">
              {specializations.map((spec) => {
                const Icon = spec.icon;
                return (
                  <div 
                    key={spec.title}
                    className="p-5 rounded-xl bg-[#16171D] hover:bg-[#1C1D24] border border-white/5 hover:border-[#C5A880]/40 transition duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-lg bg-white/5 group-hover:bg-[#C5A880]/20 text-[#C5A880] transition">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white group-hover:text-[#C5A880] transition">
                            {spec.title}
                          </h4>
                          <span className="text-[10px] font-mono-num text-neutral-600">
                            {spec.number}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                          {spec.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Staggered Dual-Photo Architectural Showcase */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative group overflow-hidden rounded-xl border border-white/10 shadow-xl h-56">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                  alt="Modern Architectural Villa"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[9px] uppercase font-mono-num tracking-widest text-[#C5A880]">
                    STRUCTURE
                  </span>
                  <p className="text-[11px] text-white font-medium truncate">Spatial Mastery</p>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-xl border border-white/10 shadow-xl h-56 mt-6">
                <img
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
                  alt="Bespoke Luxury Interior"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[9px] uppercase font-mono-num tracking-widest text-[#C5A880]">
                    INTERIORS
                  </span>
                  <p className="text-[11px] text-white font-medium truncate">Artisanal Finishes</p>
                </div>
              </div>
            </div>

            {/* Manifesto Card */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-[#18191E] to-[#121316] border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-white font-semibold block">
                  Have a space in mind?
                </span>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Schedule an in-person atelier consultation
                </p>
              </div>
              <a
                href="#contact"
                className="w-10 h-10 rounded-full bg-[#C5A880] text-black flex items-center justify-center hover:bg-[#DFC49F] transition flex-shrink-0 cursor-pointer shadow-lg shadow-[#C5A880]/20"
                aria-label="Book Consultation"
              >
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
