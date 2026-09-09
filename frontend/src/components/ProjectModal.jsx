import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, MapPin, Calendar, Layers, Clock, Award, ArrowRight, ChevronLeft, ChevronRight, Eye, Image as ImageIcon } from 'lucide-react';

export default function ProjectModal() {
  const { selectedProject, setSelectedProject } = useApp();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-xl animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-5xl my-auto bg-[#141519] border border-white/10 rounded-2xl overflow-hidden shadow-2xl text-white max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#111215]/90 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono-num uppercase tracking-widest bg-[#C5A880] text-black font-bold">
              {selectedProject.category}
            </span>
            <h2 className="text-sm sm:text-base font-editorial font-bold text-white truncate max-w-md">
              {selectedProject.title}
            </h2>
          </div>

          <button
            onClick={() => setSelectedProject(null)}
            className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#C5A880] hover:text-black text-white flex items-center justify-center transition border border-white/10 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-8 space-y-8">
          {/* Main Showcase Hero Picture with Interactive Prev/Next Controls */}
          <div className="relative h-80 sm:h-[420px] md:h-[480px] w-full rounded-xl overflow-hidden bg-black group border border-white/10 shadow-xl">
            <img
              src={currentMainImage}
              alt={selectedProject.title}
              className="w-full h-full object-cover transition-all duration-700 ease-out"
              onError={(e) => {
                e.currentTarget.src = fallbackImages[0];
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111215] via-transparent to-black/30 pointer-events-none" />

            {/* Navigation Arrows on Main Picture */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#C5A880] hover:text-black text-white flex items-center justify-center transition border border-white/20 cursor-pointer"
                  title="Previous Photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#C5A880] hover:text-black text-white flex items-center justify-center transition border border-white/20 cursor-pointer"
                  title="Next Photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Bottom Caption & Image Counter */}
            <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between pointer-events-none">
              <div>
                <span className="text-xs font-mono-num text-[#C5A880] tracking-wider uppercase block">
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
                  className={`group relative h-48 sm:h-52 rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-300 shadow-lg ${
                    idx === activeImageIndex 
                      ? 'border-[#C5A880] ring-2 ring-[#C5A880]/30 scale-[1.02]' 
                      : 'border-white/10 hover:border-white/40'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${selectedProject.title} - View ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = fallbackImages[idx % fallbackImages.length];
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />

                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm text-[10px] font-mono-num text-white border border-white/10">
                    Plate 0{idx + 1}
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="p-2 rounded-full bg-[#C5A880] text-black shadow-xl">
                      <Eye className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Narrative & Architectural Specifications */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4 border-t border-white/10">
            {/* Left: Narrative Overview */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-xs uppercase tracking-widest font-mono-num text-[#C5A880]">
                DESIGN INTENT & MATERIAL REALIZATION
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
                {selectedProject.detailedText || selectedProject.description}
              </p>

              {selectedProject.description && selectedProject.detailedText && (
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-neutral-400 italic leading-relaxed">
                  "{selectedProject.description}"
                </div>
              )}
            </div>

            {/* Right: Technical Specs Card */}
            <div className="p-6 rounded-xl bg-[#181920] border border-white/5 space-y-3.5">
              <h4 className="text-xs uppercase tracking-widest font-mono-num text-white font-bold border-b border-white/10 pb-2.5">
                TECHNICAL ATTRIBUTES
              </h4>

              <div className="flex items-center justify-between text-xs py-1.5 border-b border-white/5">
                <span className="text-neutral-400 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A880]" /> Location:
                </span>
                <span className="font-mono-num text-white">{selectedProject.location || 'Pan-India'}</span>
              </div>

              <div className="flex items-center justify-between text-xs py-1.5 border-b border-white/5">
                <span className="text-neutral-400 flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#C5A880]" /> Completed:
                </span>
                <span className="font-mono-num text-white">{selectedProject.year || 2025}</span>
              </div>

              <div className="flex items-center justify-between text-xs py-1.5 border-b border-white/5">
                <span className="text-neutral-400 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-[#C5A880]" /> Covered Area:
                </span>
                <span className="font-mono-num text-white">{selectedProject.area || '6,500 sq.ft'}</span>
              </div>

              {selectedProject.stats && (
                <>
                  <div className="flex items-center justify-between text-xs py-1.5 border-b border-white/5">
                    <span className="text-neutral-400 flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#C5A880]" /> Duration:
                    </span>
                    <span className="font-mono-num text-white">{selectedProject.stats.duration || '14 Months'}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-1.5 border-b border-white/5">
                    <span className="text-neutral-400 flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-[#C5A880]" /> Style:
                    </span>
                    <span className="font-mono-num text-white">{selectedProject.stats.style || 'Warm Modernism'}</span>
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
