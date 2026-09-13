import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ArrowUpRight, MapPin, Calendar, Layers, Image as ImageIcon } from 'lucide-react';

const fallbackCatalog = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85'
];

export default function ProjectGrid() {
  const { projects, setSelectedProject } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Residential', 'Villas', 'Corporate', 'Commercial', 'Retail', 'Industrial', 'Institutional', 'Interiors'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => {
        const cat = (p.category || '').toLowerCase();
        const title = (p.title || '').toLowerCase();
        const sub = (p.subtitle || '').toLowerCase();
        const sel = selectedCategory.toLowerCase();

        if (sel === 'villas') return title.includes('villa') || cat.includes('villa') || sub.includes('villa');
        if (sel === 'interiors') return cat.includes('interior') || title.includes('interior') || sub.includes('interior') || title.includes('kitchen') || title.includes('suite');
        if (sel === 'residential') return cat.includes('residential') || title.includes('residence') || title.includes('flat') || title.includes('townhouse') || title.includes('house');
        if (sel === 'corporate') return cat.includes('corporate') || title.includes('partner') || title.includes('expedite') || title.includes('office');
        if (sel === 'commercial') return cat.includes('commercial') || cat.includes('corporate') || sub.includes('commercial');
        if (sel === 'industrial') return cat.includes('industrial') || title.includes('plant') || title.includes('industrial');
        if (sel === 'institutional') return cat.includes('institutional') || title.includes('trust') || sub.includes('institutional');
        if (sel === 'retail') return cat.includes('retail') || title.includes('donear') || sub.includes('retail');

        return cat.includes(sel) || title.includes(sel);
      });

  return (
    <div className="mt-20">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full text-xs font-mono-num uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              selectedCategory === cat
                ? 'bg-[#C5A880] text-black font-semibold shadow-lg shadow-[#C5A880]/20'
                : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/5'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => {
          const mainImage = (project.images && project.images.length > 0 && project.images[0])
            ? project.images[0]
            : (project.image || fallbackCatalog[idx % fallbackCatalog.length]);

          const photoCount = (project.images && project.images.length) || 1;

          return (
            <div
              key={project._id || project.id || project.title}
              onClick={() => setSelectedProject(project)}
              className="group relative overflow-hidden rounded-xl bg-[#18191E] border border-white/5 hover:border-[#C5A880]/40 transition-all duration-500 cursor-pointer shadow-xl flex flex-col"
            >
              {/* Project Image Container */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-black">
                <img
                  src={mainImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = fallbackCatalog[idx % fallbackCatalog.length];
                  }}
                />

                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#18191E] via-transparent to-black/40 opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono-num uppercase tracking-widest bg-[#111215]/80 backdrop-blur-md text-[#C5A880] border border-white/10">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono-num text-neutral-300">
                    <ImageIcon className="w-3 h-3 text-[#C5A880]" />
                    <span>{photoCount} Photos</span>
                  </div>
                </div>

                {/* Hover CTA Button (Pops up from center) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <span className="px-6 py-2.5 rounded-full bg-[#C5A880] text-[#111215] text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <span>VIEW FULL GALLERY</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Card Information */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono-num mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span className="truncate">{project.location || 'Pan-India'}</span>
                    {project.year && (
                      <>
                        <span>•</span>
                        <span>{project.year}</span>
                      </>
                    )}
                    {project.area && (
                      <>
                        <span>•</span>
                        <span>{project.area}</span>
                      </>
                    )}
                  </div>

                  <h3 className="text-xl font-editorial font-bold text-white group-hover:text-[#C5A880] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs text-neutral-400 mt-2 line-clamp-2 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono-num text-neutral-500">
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A880]" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
