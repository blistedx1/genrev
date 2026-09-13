import React, { useState } from 'react';
import { Building2, Armchair, Hammer, Map, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ExpertiseSection() {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      id: 'architecture',
      title: 'Architecture',
      tagline: 'Creating architecture that balances identity, functionality, context and timeless design.',
      icon: Building2,
      number: '01',
      items: [
        'Residential Architecture',
        'Luxury Villas',
        'Commercial Architecture',
        'Corporate Architecture',
        'Institutional Architecture',
        'Industrial Architecture',
        'Master Planning',
        'Architectural Consultancy'
      ],
      image: '/projects/villa_facade.jpg'
    },
    {
      id: 'interiors',
      title: 'Interior Design',
      tagline: 'Interiors crafted around lifestyle, functionality, brand identity and experience.',
      icon: Armchair,
      number: '02',
      items: [
        'Residential Interiors',
        'Luxury Interiors',
        'Corporate & Office Interiors',
        'Commercial Interiors',
        'Retail Interiors',
        'Hospitality Interiors',
        'Interior Architecture',
        'Renovation & Refurbishment'
      ],
      image: '/projects/townhouse_living.jpg'
    },
    {
      id: 'construction',
      title: 'Construction & Execution',
      tagline: 'Turning design intent into built reality through coordinated execution and attention to detail.',
      icon: Hammer,
      number: '03',
      items: [
        'Turnkey Solutions',
        'Construction Management',
        'Project Management',
        'Interior Execution',
        'Renovation',
        'Site Coordination',
        'Quality & Execution Management'
      ],
      image: '/projects/townhouse_night_hd.jpg'
    },
    {
      id: 'planning',
      title: 'Planning & Consultancy',
      tagline: 'Strategic spatial thinking beyond individual buildings.',
      icon: Map,
      number: '04',
      items: [
        'Urban & Regional Planning',
        'Site Planning',
        'Space Planning',
        'Development Planning',
        'Feasibility & Design Consultancy',
        'Project Consultancy'
      ],
      image: '/projects/mansion_neoclassical.jpg'
    }
  ];

  return (
    <section id="expertise" className="relative py-28 lg:py-32 px-6 sm:px-12 lg:pl-36 lg:pr-16 bg-dark-surface overflow-hidden border-b border-white/5">
      {/* Background Watermark */}
      <div className="absolute top-10 right-8 sm:right-16 watermark-text text-7xl sm:text-9xl md:text-[13rem] select-none pointer-events-none">
        Pillars
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <span className="text-xs uppercase tracking-[0.35em] text-gold font-mono-num font-semibold block mb-2">
              DISCIPLINARY EXCELLENCE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-bold text-white uppercase tracking-wide">
              OUR EXPERTISE
            </h2>
          </div>
          <p className="text-xs md:text-sm text-neutral-400 max-w-md font-light">
            Integrated capabilities spanning architectural conception, luxury interior detailing, rigorous construction, and urban spatial planning.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isHovered = activeTab === idx;
            return (
              <div
                key={pillar.id}
                onMouseEnter={() => setActiveTab(idx)}
                className={`p-6 sm:p-8 rounded-2xl transition-all duration-500 flex flex-col justify-between border cursor-pointer group ${
                  isHovered
                    ? 'bg-dark-elevated border-gold/50 shadow-2xl -translate-y-1'
                    : 'bg-card-bg border-white/5 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl transition-colors duration-300 ${
                      isHovered ? 'bg-gold text-black' : 'bg-white/5 text-gold'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono-num text-neutral-500 tracking-widest font-semibold">
                      {pillar.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-editorial font-bold text-white mb-2 group-hover:text-[#C5A880] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-neutral-400 font-light leading-relaxed mb-6">
                    {pillar.tagline}
                  </p>

                  <div className="h-[1px] bg-white/10 mb-6" />

                  {/* Bullet Points */}
                  <ul className="space-y-2.5 mb-6">
                    {pillar.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center gap-2.5 text-xs text-neutral-300 font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono-num text-[#C5A880]">
                  <span className="uppercase tracking-wider">Turnkey Practice</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Visual Banner */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#181920] to-[#121316] border border-white/10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-[10px] font-mono-num uppercase tracking-[0.25em] text-[#C5A880] font-semibold block mb-2">
              SEAMLESS COORDINATION
            </span>
            <h4 className="text-xl md:text-2xl font-editorial font-bold text-white mb-3">
              One Unified Team From Blueprint to Handover.
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
              No fragmentation between design and build. Our integrated architecture, interior, and construction teams eliminate miscommunication, cost overruns, and site delays.
            </p>
          </div>

          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full bg-[#C5A880] hover:bg-[#DFC49F] text-[#111215] font-semibold text-xs tracking-widest uppercase transition-all duration-300 flex items-center gap-3 shadow-xl shadow-[#C5A880]/20 flex-shrink-0 group"
          >
            <span>DISCUSS YOUR PROJECT</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
