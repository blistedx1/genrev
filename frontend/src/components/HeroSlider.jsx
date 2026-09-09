import React, { useEffect } from 'react';
import { useApp } from '../context/AppContext';
import ThreeHeroScene from './ThreeHeroScene';
import { ArrowRight, Sparkles, Box } from 'lucide-react';

const heroSlides = [
  {
    number: '01',
    category: 'ARCHITECTURE & ACOUSTICS',
    title: 'CONCERT HALL IN MUMBAI',
    subtitle: 'Where Vision Meets Craftsmanship',
    description: 'Concert Hall is the architecture of a new generation, a building that exists not only in the dimension of space, but also in the dimension of time and communication.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=85',
    location: 'Bandra Kurla Complex, Mumbai',
    specs: '34,000 sq.ft • Parametric Acoustic Facade'
  },
  {
    number: '02',
    category: 'RESIDENTIAL VILLA',
    title: 'THE GLASS PAVILION',
    subtitle: 'Cantilevered Oceanfront Retreat',
    description: 'A seamless synthesis of poured architectural concrete, floor-to-ceiling acoustic glass, and warm teak wood cantilevered over a serene water courtyard.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85',
    location: 'Alibaug Coastline',
    specs: '8,500 sq.ft • Warm Minimalist Living'
  },
  {
    number: '03',
    category: 'LUXURY HOSPITALITY',
    title: 'AURELIA BOUTIQUE HOTEL',
    subtitle: 'Curated European Salon Luxury',
    description: 'An urban sanctuary combining bespoke millwork, bronze patinas, and velvet textures to evoke timeless mid-century European salon luxury.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=85',
    location: 'Mayfair District',
    specs: '22,000 sq.ft • 48 Curated Suites'
  },
  {
    number: '04',
    category: 'PENTHOUSE INTERIORS',
    title: 'SKYLINE DUPLEX PENTHOUSE',
    subtitle: 'Monolithic High-Rise Residence',
    description: 'A serene aerie overlooking the city skyline, wrapped in Statuario marble, fluted walnut walls, and minimalist monolithic islands.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85',
    location: 'Worli Sea Face, Mumbai',
    specs: '6,200 sq.ft • Smart Environmental Living'
  }
];

export default function HeroSlider() {
  const { activeSlide, setActiveSlide, setSelectedProject, projects } = useApp();

  // Automatic slide advance every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, [setActiveSlide]);

  const currentSlide = heroSlides[activeSlide];

  const handleOpenCurrentProject = () => {
    // Find matching project in DB or supply fallback
    const match = projects.find(p => p.title.toLowerCase().includes(currentSlide.title.toLowerCase().split(' ')[0])) || projects[activeSlide] || currentSlide;
    setSelectedProject(match);
  };

  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-[#111215]">
      {/* Background Architectural Images with Cross-Fade */}
      {heroSlides.map((slide, idx) => (
        <div
          key={slide.title}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 transform ${
            idx === activeSlide ? 'opacity-40 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      {/* Luxury Vignette & Dark Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#111215] via-[#111215]/80 to-[#111215]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111215] via-transparent to-[#111215]/60" />

      {/* Interactive Three.js 3D Pavilion Background */}
      <ThreeHeroScene slideIndex={activeSlide} />

      {/* Hero Content Overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:pl-36 lg:pr-16 flex flex-col justify-center min-h-[60vh]">
        {/* Top Category Badge */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-10 h-[1px] bg-[#C5A880]"></span>
          <span className="text-xs uppercase tracking-[0.3em] font-mono-num text-[#C5A880] font-semibold">
            {currentSlide.category}
          </span>
          <span className="text-xs text-neutral-500 font-mono-num hidden sm:inline">
            • {currentSlide.location}
          </span>
        </div>

        {/* Big Editorial Headline - matching go.arch typography */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-editorial font-bold tracking-tight text-white leading-[1.05] max-w-4xl drop-shadow-lg">
          {currentSlide.title}
        </h1>

        {/* Subtitle / Description */}
        <p className="mt-6 text-sm sm:text-base md:text-lg text-neutral-300 max-w-2xl font-light leading-relaxed">
          {currentSlide.description}
        </p>

        {/* Call to Actions */}
        <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
          {/* LOOK MORE -> matching go.arch screenshot pill */}
          <button
            onClick={handleOpenCurrentProject}
            className="px-8 py-3.5 rounded-full bg-[#C5A880] hover:bg-[#DFC49F] text-[#111215] font-semibold text-xs tracking-widest uppercase transition-all duration-300 flex items-center gap-3 shadow-xl shadow-[#C5A880]/20 hover:gap-4 group"
          >
            <span>LOOK MORE</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* 3D Studio Trigger */}
          <a
            href="#3d-studio"
            className="px-7 py-3.5 rounded-full border border-white/20 hover:border-[#C5A880] text-neutral-200 hover:text-white font-medium text-xs tracking-widest uppercase transition-all duration-300 flex items-center gap-2.5 backdrop-blur-sm bg-black/20 hover:bg-white/5"
          >
            <Box className="w-4 h-4 text-[#C5A880]" />
            <span>EXPLORE IN 3D</span>
          </a>
        </div>

        {/* Slide Indicator Dots at Bottom-Right */}
        <div className="absolute bottom-12 right-8 sm:right-16 hidden sm:flex items-center gap-3">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`transition-all duration-300 ${
                idx === activeSlide
                  ? 'w-10 h-1.5 bg-[#C5A880] rounded-full'
                  : 'w-2 h-1.5 bg-white/20 hover:bg-white/40 rounded-full'
              }`}
              title={`Jump to slide 0${idx + 1}`}
              aria-label={`Slide 0${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
