import React from 'react';
import { useApp } from '../context/AppContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { InstagramIcon, TwitterIcon, FacebookIcon, LinkedInIcon, BehanceIcon } from './SocialIcons';

export default function LeftRail({ totalSlides = 4 }) {
  const { activeSlide, setActiveSlide } = useApp();

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-24 z-40 flex-col justify-between items-center py-12 border-r border-white/5 bg-[#111215]/40 backdrop-blur-sm pointer-events-auto">
      {/* Slide Counter - matching screenshot "01 / 03" */}
      <div className="flex flex-col items-center pt-16">
        <span className="text-3xl font-light font-mono-num text-white tracking-wider">
          0{activeSlide + 1}
        </span>
        <span className="text-[10px] font-mono-num text-neutral-500 tracking-widest mt-1">
          / 0{totalSlides}
        </span>
      </div>

      {/* Vertical Rail Title & Navigation Arrows */}
      <div className="flex flex-col items-center gap-8">
        {/* Prev / Next controls */}
        <div className="flex flex-col gap-3">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-white/10 hover:border-gold hover:text-gold text-neutral-400 flex items-center justify-center transition group cursor-pointer active:scale-95"
            title="Previous Slide"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-white/10 hover:border-gold hover:text-gold text-neutral-400 flex items-center justify-center transition group cursor-pointer active:scale-95"
            title="Next Slide"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Vertical Rail Text */}
        <div className="writing-vertical rotate-180 text-[10px] uppercase tracking-[0.35em] text-neutral-400 select-none py-4">
          GENREV INTERIO • 2026
        </div>
      </div>

      {/* Social Links Rail */}
      <div className="flex flex-col items-center gap-4 text-neutral-400 pb-4">
        <a 
          href="https://www.instagram.com/genrev.interio.pvt.ltd" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-[#C5A880] transition transform hover:scale-110 text-neutral-300"
          aria-label="Instagram @genrev.interio.pvt.ltd"
          title="Instagram @genrev.interio.pvt.ltd"
        >
          <InstagramIcon className="w-4 h-4" />
        </a>
        <a 
          href="https://www.facebook.com/profile.php?id=61550528653657" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-[#C5A880] transition transform hover:scale-110 text-neutral-300"
          aria-label="Facebook Genrev Interio pvt.ltd"
          title="Facebook Genrev Interio pvt.ltd"
        >
          <FacebookIcon className="w-4 h-4" />
        </a>
      </div>
    </aside>
  );
}
