import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ArrowRight, ChevronLeft, ChevronRight, Eye, Phone } from 'lucide-react';

export default function HeroSlider() {
  const { setSelectedProject } = useApp();
  const [currentSlide, setCurrentSlide] = useState(0);

  // User's real uploaded house projects
  const slides = [
    {
      id: "01",
      tag: "ARCHITECTURE & INTERIOR STUDIO",
      headlineLine1: "SPACES",
      headlineLine2: "THAT SPEAK.",
      subtitle: "Architecture shaped by light, form & purpose. Turnkey luxury residences crafted by Genrev Interio across Delhi NCR.",
      projectName: "Urban Lumina Townhouse",
      location: "Greater Noida West, Delhi NCR",
      year: "2026",
      category: "Private Residence",
      image: "/projects/townhouse_night_hd.jpg",
      description: "Bespoke 3-story modern architectural residence featuring vertical wooden louvers, 3D CNC acoustic stone wall, ambient cove lighting, and private master terraces.",
      gallery: [
        "/projects/townhouse_night_hd.jpg",
        "/projects/townhouse_living.jpg",
        "/projects/townhouse_bedroom.jpg",
        "/projects/luxury_kitchen.jpg"
      ]
    },
    {
      id: "02",
      tag: "HERITAGE ARCHITECTURE",
      headlineLine1: "TIMELESS",
      headlineLine2: "GRANDEUR.",
      subtitle: "Fluted Roman porticos, hand-carved balustrades, and expansive manicured estates engineered for generations.",
      projectName: "Royal Romanesque Villa",
      location: "Noida Expressway",
      year: "2025",
      category: "Heritage Villa",
      image: "/projects/villa_facade.jpg",
      description: "Palatial 2-story classical villa with fluted Roman colonnades, marble balustrades, double-height drawing hall with crystal chandeliers.",
      gallery: [
        "/projects/villa_facade.jpg",
        "/projects/villa_porch.jpg",
        "/projects/villa_living.jpg"
      ]
    },
    {
      id: "03",
      tag: "NEOCLASSICAL LUXURY",
      headlineLine1: "SYMMETRY",
      headlineLine2: "& PROMINENCE.",
      subtitle: "Monumental Corinthian columns, arched floor-to-ceiling French glazing, and contemporary bespoke interiors.",
      projectName: "Neo-Classical Grand Palais",
      location: "Greater Noida",
      year: "2026",
      category: "Neoclassical Estate",
      image: "/projects/mansion_neoclassical.jpg",
      description: "Symmetrical three-story architectural mansion featuring grand Corinthian columns, French windows, and bespoke Italian modular kitchen.",
      gallery: [
        "/projects/mansion_neoclassical.jpg",
        "/projects/luxury_kitchen.jpg",
        "/projects/townhouse_living.jpg"
      ]
    }
  ];

  const current = slides[currentSlide];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleOpenProject = (slide) => {
    setSelectedProject({
      title: slide.projectName,
      subtitle: slide.category,
      category: "Turnkey Architecture & Interiors",
      description: slide.description,
      location: slide.location,
      images: slide.gallery,
      year: slide.year,
      area: "6,500 sq.ft",
      stats: {
        duration: "10 Months",
        style: "Bespoke Luxury & Vastu",
        clientType: "Private Executive Family"
      }
    });
  };

  return (
    <section id="home" className="relative bg-[#0C0D10] text-[#E5E5E2] overflow-hidden select-none">
      
      {/* Top Hero Section */}
      <div className="relative min-h-[92vh] sm:min-h-screen w-full flex items-center pt-28 pb-16 px-6 sm:px-12 lg:px-16">
        
        {/* Full-bleed Architectural House Background with High Sharpness */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            key={current.image}
            src={current.image}
            alt={current.projectName}
            className="w-full h-full object-cover object-center lg:object-right transition-opacity duration-700 ease-in-out opacity-100"
          />

          {/* Dark Vignette Gradients for Pure Architectural Look & Headline Clarity */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C0D10] via-[#0C0D10]/80 sm:via-[#0C0D10]/60 to-transparent w-full lg:w-3/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D10] via-transparent to-[#0C0D10]/50" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col justify-between h-full min-h-[75vh]">
          
          {/* Main Left-Aligned Architectural Headline */}
          <div className="max-w-2xl space-y-6 my-auto pt-6">
            
            {/* Tagline / Category */}
            <div className="inline-flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#E52E2D] animate-pulse"></span>
              <span className="text-[11px] font-mono-num font-semibold uppercase tracking-[0.3em] text-neutral-400">
                {current.tag}
              </span>
            </div>

            {/* Huge Tall Condensed Architectural Headline */}
            <div className="space-y-0">
              <h1 className="font-architectural text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-bold text-white uppercase tracking-tight leading-[0.88] drop-shadow-sm">
                {current.headlineLine1} <br />
                <span className="text-[#F0EFEB]">{current.headlineLine2}</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-sm sm:text-base font-light font-sans max-w-lg leading-relaxed pt-2 text-neutral-300">
              {current.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleOpenProject(current)}
                className="px-8 py-3.5 border border-white/40 hover:border-white bg-black/40 hover:bg-white text-white hover:text-black font-mono-num text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-3 group backdrop-blur-sm cursor-pointer"
              >
                <span>EXPLORE PROJECTS</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#contact"
                className="px-6 py-3.5 border border-transparent hover:border-white/20 text-neutral-400 hover:text-white font-mono-num text-xs tracking-wider transition cursor-pointer"
              >
                START A PROJECT
              </a>
            </div>
          </div>

          {/* Bottom Bar of Hero: Slide Navigation & Counter */}
          <div className="pt-10 flex items-end justify-between border-b border-white/10 pb-6">
            
            {/* Project Quick Meta */}
            <div className="hidden sm:flex flex-col text-xs font-mono-num text-neutral-400">
              <span className="font-medium uppercase tracking-wider text-white">
                {current.projectName}
              </span>
              <span className="text-[11px] text-neutral-500">
                {current.location} • {current.year}
              </span>
            </div>

            {/* Slide Index & Switcher Buttons */}
            <div className="flex items-center gap-6 ml-auto">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-9 h-9 rounded-full border border-white/20 hover:border-white hover:bg-white/10 text-white flex items-center justify-center transition cursor-pointer"
                  title="Previous Project"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-9 h-9 rounded-full border border-white/20 hover:border-white hover:bg-white/10 text-white flex items-center justify-center transition cursor-pointer"
                  title="Next Project"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Counter 01 / 03 */}
              <div className="font-mono-num text-sm tracking-widest border-l border-white/15 pl-6 flex items-center gap-2 text-neutral-400">
                <span className="font-bold text-base text-white">
                  {current.id}
                </span>
                <span className="text-neutral-600">/</span>
                <span className="text-neutral-500">03</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Selected Work Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pt-12 pb-20">
        
        {/* Selected Work Header with Line */}
        <div className="flex items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-6 flex-1">
            <h3 className="text-xs font-mono-num uppercase tracking-[0.25em] text-neutral-400 whitespace-nowrap">
              SELECTED WORK
            </h3>
            <div className="h-[1px] bg-white/15 flex-1" />
          </div>

          <a
            href="#projects"
            className="text-xs font-mono-num uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition flex items-center gap-2 group whitespace-nowrap"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 3 Real Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {slides.map((slide, index) => {
            const isSelected = currentSlide === index;
            return (
              <div
                key={slide.id}
                onClick={() => {
                  setCurrentSlide(index);
                  handleOpenProject(slide);
                }}
                className={`group cursor-pointer flex flex-col justify-between transition-all duration-300 ${
                  isSelected ? 'opacity-100' : 'opacity-80 hover:opacity-100'
                }`}
              >
                {/* Project Image Box */}
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden mb-5 border border-white/10 bg-neutral-900 group-hover:border-white/30 transition-colors">
                  <img
                    src={slide.image}
                    alt={slide.projectName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />

                  {/* Active Indicator Pin */}
                  {isSelected && (
                    <div className="absolute top-3 right-3 px-2 py-1 rounded bg-[#E52E2D] text-white text-[9px] font-mono-num tracking-widest uppercase font-bold shadow">
                      ACTIVE
                    </div>
                  )}
                </div>

                {/* Project Metadata */}
                <div className="space-y-2">
                  <span className="text-xs font-mono-num text-neutral-500">
                    {slide.id}
                  </span>
                  
                  <h4 className="font-architectural text-xl sm:text-2xl font-bold uppercase tracking-tight leading-tight text-white group-hover:text-[#F0EFEB] transition">
                    {slide.category}
                  </h4>

                  <p className="text-[11px] font-mono-num text-neutral-400 uppercase tracking-wider">
                    {slide.year} / {slide.location}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-xs font-mono-num text-neutral-400 group-hover:text-white transition">
                    <span className="uppercase tracking-widest text-[10px]">VIEW PROJECT</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Bottom Architectural Callout Banner */}
      <div className="relative border-t border-white/10 bg-[#090A0D]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[10px] font-mono-num uppercase tracking-[0.3em] text-neutral-500">
              READY TO CREATE?
            </span>
            <h2 className="font-architectural text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight leading-[0.9] text-white">
              LET'S BUILD <br />
              <span className="text-neutral-400">
                SOMETHING TIMELESS.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center items-start lg:items-end">
            <a
              href="#contact"
              className="px-8 py-4 border border-white/40 hover:border-white bg-white text-black hover:bg-neutral-200 font-mono-num text-xs font-semibold uppercase tracking-[0.2em] transition-all flex items-center gap-3 group"
            >
              <span>START A PROJECT</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="tel:+919958323002"
              className="flex items-center gap-2 text-xs font-mono-num text-neutral-400 hover:text-white transition tracking-wider pt-1"
            >
              <Phone className="w-3.5 h-3.5 text-[#E52E2D]" />
              <span>DIRECT: +91 99583 23002</span>
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}
