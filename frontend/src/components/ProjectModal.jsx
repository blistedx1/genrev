import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { X, MapPin, Calendar, Layers, Clock, Award, ArrowRight, ChevronLeft, ChevronRight, Eye, Image as ImageIcon } from 'lucide-react';
import LazyImage from './LazyImage';

export default function ProjectModal() {
  const { selectedProject, setSelectedProject } = useApp();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);

  // Lock body scroll when project modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  if (!selectedProject) return null;

  // Curated fallback architectural image set to ensure no empty/broken picture ever displays
  const fallbackImages = [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85'
  ];

  const rawImages = selectedProject.images && selectedProject.images.length > 0
    ? selectedProject.images
    : (selectedProject.image ? [selectedProject.image, ...fallbackImages.slice(1)] : fallbackImages);

  const images = rawImages.filter(img => Boolean(img));

  const currentMainImage = images[activeImageIndex] || images[0] || fallbackImages[0];

  const handleNextImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div 
      onClick={() => setSelectedProject(null)}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-xl animate-fade-in overflow-y-auto"
    >
      <div 
        className="relative w-full max-w-5xl my-auto bg-dark-surface border border-white/10 rounded-2xl overflow-hidden shadow-2xl text-white max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-dark-bg/90 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono-num uppercase tracking-widest bg-gold text-black font-bold">
              {selectedProject.category}
            </span>
            <h2 className="text-sm sm:text-base font-editorial font-bold text-white truncate max-w-md">
              {selectedProject.title}
            </h2>
          </div>

          <button
            onClick={() => setSelectedProject(null)}
            className="w-9 h-9 sm:w-8 sm:h-8 rounded-full bg-white/5 hover:bg-gold hover:text-black text-white flex items-center justify-center transition border border-white/10 cursor-pointer active:scale-95"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-8 space-y-8">
          {/* Main Showcase Hero Picture with Interactive Prev/Next Controls */}
          <div className="relative h-80 sm:h-[420px] md:h-[480px] w-full rounded-xl overflow-hidden bg-black group border border-white/10 shadow-xl">
            <LazyImage
              src={currentMainImage}
              alt={selectedProject.title}
              containerClassName="w-full h-full"
              className="w-full h-full object-cover transition-all duration-700 ease-out"
              fallbackSrc={fallbackImages[0]}
              priority={true}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-black/30 pointer-events-none" />

            {/* Navigation Arrows on Main Picture */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-gold hover:text-black text-white flex items-center justify-center transition border border-white/20 cursor-pointer z-10"
                  title="Previous Photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-gold hover:text-black text-white flex items-center justify-center transition border border-white/20 cursor-pointer z-10"
                  title="Next Photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Bottom Caption & Image Counter */}
            <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between pointer-events-none z-10">
              <div>
                <span className="text-xs font-mono-num text-gold tracking-wider uppercase block">
                  {selectedProject.location} • {selectedProject.year || 2026}
                </span>
                <p className="text-sm font-editorial text-white font-medium drop-shadow-md">
                  {selectedProject.subtitle || selectedProject.title}
                </p>
              </div>

              {images.length > 1 && (
                <div className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono-num text-white">
                  Photo {activeImageIndex + 1} / {images.length}
                </div>
              )}
            </div>
          </div>

          {/* Expanded Full-Size Picture Gallery Section (No tiny thumbnails only!) */}
          <div>
            <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-[#C5A880]" />
                <h3 className="text-xs uppercase tracking-widest font-mono-num text-white font-bold">
                  PROJECT PHOTO GALLERY ({images.length} PHOTOGRAPHS)
                </h3>
              </div>
              <span className="text-[11px] text-neutral-400 font-mono-num">
                Click any photograph to view high resolution
              </span>
            </div>

            {/* Rich 2 or 3-Column Large Photos Display */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`group relative rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-300 shadow-lg ${
                    idx === activeImageIndex 
                      ? 'border-gold ring-2 ring-gold/30 scale-[1.02]' 
                      : 'border-white/10 hover:border-white/40'
                  }`}
                >
                  <LazyImage
                    src={img}
                    alt={`${selectedProject.title} - View ${idx + 1}`}
                    aspectRatio="16/10"
                    containerClassName="w-full h-full"
                    className="group-hover:scale-105 transition-transform duration-500"
                    fallbackSrc={fallbackImages[idx % fallbackImages.length]}
                  >
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-colors pointer-events-none" />
                    <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm text-[10px] font-mono-num text-white border border-white/10 pointer-events-none z-10">
                      Plate 0{idx + 1}
                    </div>
                  </LazyImage>
                </div>
              ))}
            </div>
          </div>

          {/* Narrative & Case Study Architectural Specifications */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4 border-t border-white/10">
            {/* Left: Design Concept Overview */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C5A880]" />
                <h3 className="text-xs uppercase tracking-widest font-mono-num text-[#C5A880] font-semibold">
                  DESIGN CONCEPT & SPATIAL EXECUTION
                </h3>
              </div>
              
              <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-light">
                {selectedProject.detailedText || selectedProject.description}
              </p>

              {selectedProject.description && selectedProject.detailedText && (
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-neutral-400 italic leading-relaxed">
                  "{selectedProject.description}"
                </div>
              )}

              <div className="p-4 rounded-xl bg-[#181920] border border-white/5 text-xs text-neutral-300 font-light flex items-center justify-between">
                <span>Multidisciplinary practice standard: Concept to completion with turnkey site precision.</span>
                <span className="text-[#C5A880] font-mono-num text-[11px] uppercase">Ar. Abhishek Singh Chauhan</span>
              </div>
            </div>

            {/* Right: Technical Case-Study Specs Card */}
            <div className="p-6 rounded-xl bg-[#181920] border border-[#C5A880]/20 space-y-3.5 shadow-xl">
              <h4 className="text-xs uppercase tracking-widest font-mono-num text-white font-bold border-b border-white/10 pb-2.5 flex items-center justify-between">
                <span>CASE STUDY ATTRIBUTES</span>
                <span className="text-[10px] text-[#C5A880] font-normal">Verified Spec</span>
              </h4>

              <div className="flex items-center justify-between text-xs py-1.5 border-b border-white/5">
                <span className="text-neutral-400">Project:</span>
                <span className="font-medium text-white text-right max-w-[170px] truncate">{selectedProject.title}</span>
              </div>

              <div className="flex items-center justify-between text-xs py-1.5 border-b border-white/5">
                <span className="text-neutral-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A880]" /> Location:
                </span>
                <span className="font-mono-num text-white">{selectedProject.location || 'Delhi NCR'}</span>
              </div>

              <div className="flex items-center justify-between text-xs py-1.5 border-b border-white/5">
                <span className="text-neutral-400 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#C5A880]" /> Scope / Sector:
                </span>
                <span className="font-mono-num text-[#C5A880]">{selectedProject.category}</span>
              </div>

              <div className="flex items-center justify-between text-xs py-1.5 border-b border-white/5">
                <span className="text-neutral-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#C5A880]" /> Covered Area:
                </span>
                <span className="font-mono-num text-white">{selectedProject.area || 'Bespoke Scale'}</span>
              </div>

              {selectedProject.stats && (
                <>
                  <div className="flex items-center justify-between text-xs py-1.5 border-b border-white/5">
                    <span className="text-neutral-400 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#C5A880]" /> Timeline:
                    </span>
                    <span className="font-mono-num text-white">{selectedProject.stats.duration || 'Turnkey Execution'}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1.5 border-b border-white/5">
                    <span className="text-neutral-400 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-[#C5A880]" /> Style & Vibe:
                    </span>
                    <span className="font-mono-num text-white">{selectedProject.stats.style || 'Contemporary & Contextual'}</span>
                  </div>
                </>
              )}

              <div className="pt-4">
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="w-full py-3 rounded-xl bg-[#C5A880] hover:bg-[#DFC49F] text-black font-semibold text-xs tracking-wider uppercase transition flex items-center justify-center gap-2"
                >
                  <span>INQUIRE ABOUT THIS DESIGN</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
