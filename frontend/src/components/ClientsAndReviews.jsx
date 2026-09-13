import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { initialClients, initialTestimonials } from '../data/initialData';
import { ArrowRight, Star, Quote, ChevronLeft, ChevronRight, Building, Factory, ShoppingBag, Home, Sparkles, MapPin } from 'lucide-react';

export default function ClientsAndReviews() {
  const { clients, testimonials } = useApp();
  const [activeReview, setActiveReview] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const clientList = clients && clients.length > 0 ? clients : initialClients;
  const reviewList = testimonials && testimonials.length > 0 ? testimonials : initialTestimonials;

  const categories = [
    'All',
    'Corporate / Commercial',
    'Builders & Developers',
    'Industrial',
    'Retail',
    'Turnkey Interiors',
    'Residential'
  ];

  const filteredClients = selectedCategory === 'All'
    ? clientList
    : clientList.filter(c => {
        const cat = (c.category || '').toLowerCase();
        const sel = selectedCategory.toLowerCase();
        if (sel.includes('corporate') && cat.includes('corporate')) return true;
        if (sel.includes('builder') && cat.includes('builder')) return true;
        if (sel.includes('industrial') && cat.includes('industrial')) return true;
        if (sel.includes('retail') && cat.includes('retail')) return true;
        if (sel.includes('interior') && cat.includes('interior')) return true;
        if (sel.includes('residential') && cat.includes('residential')) return true;
        return cat.includes(sel) || sel.includes(cat);
      });

  const currentReview = reviewList[activeReview];

  const nextReview = () => {
    setActiveReview((prev) => (prev + 1) % reviewList.length);
  };

  const prevReview = () => {
    setActiveReview((prev) => (prev === 0 ? reviewList.length - 1 : prev - 1));
  };

  const getCategoryIcon = (category = '') => {
    const cat = category.toLowerCase();
    if (cat.includes('corporate') || cat.includes('commercial')) return <Building className="w-3.5 h-3.5 text-[#C5A880]" />;
    if (cat.includes('industrial')) return <Factory className="w-3.5 h-3.5 text-amber-400" />;
    if (cat.includes('retail')) return <ShoppingBag className="w-3.5 h-3.5 text-rose-400" />;
    if (cat.includes('interior')) return <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />;
    return <Home className="w-3.5 h-3.5 text-sky-400" />;
  };

  return (
    <section id="clients" className="relative py-28 px-6 sm:px-12 lg:pl-36 lg:pr-16 bg-[#111215] overflow-hidden border-b border-white/5">
      {/* Background Watermark */}
      <div className="absolute top-8 left-1/4 watermark-text text-8xl md:text-[14rem] select-none opacity-20 pointer-events-none">
        clients
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Heading matching go.arch aesthetic */}
        <div className="flex flex-col items-center justify-center text-center mb-6">
          <span className="text-xs uppercase tracking-[0.35em] text-white font-mono-num font-semibold mb-2">
            OUR <span className="text-[#C5A880]">CLIENTS & PARTNERS</span>
          </span>
          <span className="w-12 h-[2px] bg-[#C5A880] mb-4"></span>
          
          {/* Master Alliance Subtitle */}
          <p className="text-xs md:text-sm text-neutral-400 max-w-2xl font-light leading-relaxed">
            Combined Master Portfolio of <span className="text-[#C5A880] font-medium">Genrev Architronics Enterprises</span>, <span className="text-white font-medium">Genrev INTERIO Pvt. Ltd.</span>, and <span className="text-[#DFC49F] font-medium">Ar. Abhishek Singh</span>
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-[11px] font-mono-num uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#C5A880] text-[#111215] font-semibold shadow-lg shadow-[#C5A880]/20'
                  : 'bg-white/[0.03] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Client Grid - 19 Structured Entries */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto mb-16">
          {filteredClients.map((client, idx) => (
            <div
              key={client.name + idx}
              className="p-5 rounded-xl bg-[#16171C]/80 hover:bg-[#1C1D24] border border-white/5 hover:border-[#C5A880]/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                {/* Header: Geometric Emblem + Category Icon */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5 opacity-70 group-hover:opacity-100 transition-opacity">
                    <span className="w-2.5 h-2.5 rounded-full border border-[#C5A880] group-hover:bg-[#C5A880] transition-colors"></span>
                    <span className="w-2 h-2 rotate-45 border border-white/40"></span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono-num uppercase tracking-wider bg-white/5 text-neutral-400 border border-white/5 flex items-center gap-1">
                    {getCategoryIcon(client.category)}
                    <span>{client.category || 'Architecture'}</span>
                  </span>
                </div>

                {/* Client / Project Name */}
                <h4 className="text-sm font-bold tracking-wide uppercase text-white group-hover:text-[#DFC49F] transition-colors font-sans">
                  {client.name}
                </h4>

                {/* Scope / Subtitle */}
                {client.subtitle && (
                  <p className="text-xs text-neutral-400 font-light mt-1 line-clamp-2">
                    {client.subtitle}
                  </p>
                )}
              </div>

              {/* Bottom Details: Location & Entity */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono-num text-neutral-500">
                <span className="flex items-center gap-1 text-neutral-400">
                  <MapPin className="w-3 h-3 text-[#C5A880]" />
                  <span>{client.location || 'India'}</span>
                </span>
                {client.entity && (
                  <span className="text-[9px] text-[#C5A880]/80 tracking-tight truncate max-w-[130px]" title={client.entity}>
                    {client.entity.split(' ')[0]}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Client Disclaimer matching user copy */}
        <div className="text-center -mt-8 mb-16">
          <p className="text-[11px] font-mono-num text-neutral-500 italic">
            * Selected clients/projects shown subject to applicable client and brand-usage permissions.
          </p>
        </div>

        {/* Center Pill Button matching "WORK TOGETHER ->" */}
        <div className="flex justify-center mb-20">
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full bg-[#C5A880] hover:bg-[#DFC49F] text-[#111215] font-semibold text-xs tracking-widest uppercase transition-all duration-300 flex items-center gap-3 shadow-xl shadow-[#C5A880]/20 group"
          >
            <span>WORK TOGETHER</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Client Testimonial Showcase */}
        {currentReview && (
          <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-[#18191E] to-[#121316] border border-white/10 relative shadow-2xl">
            <Quote className="absolute top-6 right-8 w-12 h-12 text-[#C5A880]/15" />
            
            <div className="flex items-center gap-1 text-amber-400 mb-6">
              {[...Array(currentReview.rating || 5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs font-mono-num text-neutral-400 ml-2">
                5.0 / Verified Client Experience
              </span>
            </div>

            <p className="text-base sm:text-xl md:text-2xl font-editorial text-white leading-relaxed font-light mb-8 italic">
              "{currentReview.quote}"
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10 pt-6">
              <div>
                <h4 className="text-sm font-bold text-white tracking-wide">
                  {currentReview.clientName}
                </h4>
                <p className="text-xs text-neutral-400 font-mono-num mt-0.5">
                  {currentReview.role} {currentReview.company ? `• ${currentReview.company}` : ''}
                </p>
                <span className="text-[10px] text-[#C5A880] uppercase tracking-widest mt-1 block">
                  {currentReview.projectType || 'Private Residence'}
                </span>
              </div>

              {/* Review Slider Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevReview}
                  className="w-10 h-10 rounded-full border border-white/10 hover:border-[#C5A880] hover:text-[#C5A880] text-neutral-400 flex items-center justify-center transition cursor-pointer"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextReview}
                  className="w-10 h-10 rounded-full border border-white/10 hover:border-[#C5A880] hover:text-[#C5A880] text-neutral-400 flex items-center justify-center transition cursor-pointer"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
