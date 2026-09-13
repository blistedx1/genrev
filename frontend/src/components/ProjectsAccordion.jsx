import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

const defaultPanels = [
  {
    id: 'p1',
    title: 'RESOLÜT PARTNERS HQ',
    category: 'FEATURED CORPORATE INTERIOR',
    location: 'Corporate Law Firm, Delhi NCR',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
    desc: 'A contemporary corporate interior designed around professionalism, sophistication, functionality and modern legal practice.'
  },
  {
    id: 'p2',
    title: 'ROYAL ROMANESQUE VILLA',
    category: 'CLASSICAL VILLA ARCHITECTURE',
    location: 'Noida Expressway',
    image: '/projects/villa_facade.jpg',
    desc: 'Palatial 2-story classical villa featuring grand fluted Roman porticos, balustrades, and expansive manicured front lawn.'
  },
  {
    id: 'p3',
    title: 'URBAN LUMINA TOWNHOUSE',
    category: 'TURNKEY ARCHITECTURE',
    location: 'Greater Noida West, Delhi NCR',
    image: '/projects/townhouse_night.jpg',
    desc: 'Bespoke 3-story luxury residence featuring vertical wooden louvers, 3D CNC stone facade, and ambient cove lighting.'
  },
  {
    id: 'p4',
    title: 'ELDECO GRAND TOWNSHIP',
    category: 'DEVELOPER MASTER PLANNING',
    location: 'Greater Noida',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85',
    desc: 'Grand residential planning, contemporary facade rhythms, pedestrian green belts, and community club architecture.'
  }
];

export default function ProjectsAccordion() {
  const { setSelectedProject, projects } = useApp();
  const [activePanel, setActivePanel] = useState(1); // Concert Hall active by default

  const handlePrev = () => {
    setActivePanel(prev => (prev === 0 ? defaultPanels.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActivePanel(prev => (prev === defaultPanels.length - 1 ? 0 : prev + 1));
  };

  const handleSelect = (panel) => {
    const matched = projects.find(p => p.title.toLowerCase().includes(panel.title.toLowerCase().split(' ')[0])) || panel;
    setSelectedProject(matched);
  };

  return (
    <div className="w-full">
      {/* 4-Column Responsive Accordion matching the go.arch screenshot */}
      <div className="relative w-full h-[520px] md:h-[620px] flex flex-col md:flex-row overflow-hidden border-t border-b border-white/10 bg-[#0D0E11]">
        {defaultPanels.map((panel, idx) => {
          const isActive = idx === activePanel;
          return (
            <div
              key={panel.id}
              onClick={() => setActivePanel(idx)}
              className={`relative overflow-hidden cursor-pointer border-b md:border-b-0 md:border-r border-white/10 transition-all duration-700 ease-out group ${
                isActive ? 'flex-[2.5] md:flex-[2.5]' : 'flex-[1] md:flex-[1]'
              }`}
            >
              {/* Background Image with Fallback */}
              <img
                src={panel.image}
                alt={panel.title}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                  isActive ? 'scale-100 opacity-80 filter-none' : 'scale-110 opacity-40 group-hover:opacity-60 grayscale'
                }`}
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85';
                }}
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111215] via-[#111215]/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />

              {/* Content Overlay */}
              <div className="relative z-10 h-full p-6 md:p-8 flex flex-col justify-between">
                {/* Top: Title */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono-num text-[#C5A880] tracking-widest uppercase">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-base md:text-xl font-editorial font-bold uppercase tracking-wider text-white drop-shadow-md">
                    {panel.title}
                  </h3>
                </div>

                {/* Center / Navigation Indicators if active */}
                {isActive && (
                  <div className="my-auto hidden md:block animate-fade-in">
                    <p className="text-xs text-neutral-300 max-w-xs line-clamp-3 font-light leading-relaxed mb-4">
                      {panel.desc}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelect(panel);
                      }}
                      className="px-4 py-2 rounded-full bg-white/10 hover:bg-[#C5A880] hover:text-black text-white text-xs font-semibold tracking-wider transition flex items-center gap-2 backdrop-blur-sm border border-white/20 cursor-pointer"
                    >
                      <span>VIEW FULL CASE STUDY</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                {/* Bottom: Vertical Category Label & Prev/Next triggers matching screenshot */}
                <div className="flex items-end justify-between">
                  <span className="writing-vertical rotate-180 text-[10px] uppercase tracking-[0.35em] text-neutral-400 select-none">
                    {panel.category}
                  </span>

                  {/* Left / Right arrow on first and last cards as seen in screenshot */}
                  {idx === 0 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrev();
                      }}
                      className="p-2 rounded-full bg-black/60 hover:bg-[#C5A880] hover:text-black text-white transition text-xs border border-white/10 flex items-center gap-1 cursor-pointer"
                      title="Previous"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span className="text-[10px] font-mono-num uppercase pr-1">PREV</span>
                    </button>
                  )}

                  {idx === defaultPanels.length - 1 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNext();
                      }}
                      className="p-2 rounded-full bg-black/60 hover:bg-[#C5A880] hover:text-black text-white transition text-xs border border-white/10 flex items-center gap-1 cursor-pointer"
                      title="Next"
                    >
                      <span className="text-[10px] font-mono-num uppercase pl-1">NEXT</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
