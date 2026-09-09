import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ArrowRight, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ClientsAndReviews() {
  const { clients, testimonials } = useApp();
  const [activeReview, setActiveReview] = useState(0);

  // Fallback client logos if empty
  const clientList = clients && clients.length > 0 ? clients : [
    { name: "GAUR SONS", category: "Luxury Residences" },
    { name: "JAYPEE GREENS", category: "Golf Living Estates" },
    { name: "DLF ATELIER", category: "Commercial Workspaces" },
    { name: "MAHAGUN", category: "Modern Penthouses" },
    { name: "GULSHAN DYNASTY", category: "High-End Interiors" },
    { name: "ACE GROUP", category: "Turnkey Architecture" }
  ];

  const reviewList = testimonials && testimonials.length > 0 ? testimonials : [
    {
      clientName: "Rajiv & Ananya Sharma",
      role: "Homeowners",
      company: "Gaur City Sky Villa",
      quote: "The turnkey execution by Genrev Interio gave us complete peace of mind. As promised on their social page, whenever any challenge came up on site, their team stepped in, solved it, and kept the project moving. The Vastu layout and modular kitchen detailing are astonishing.",
      projectType: "Turnkey Penthouse",
      rating: 5
    },
    {
      clientName: "Sunil Agarwal",
      role: "Managing Director",
      company: "Apex Innovations",
      quote: "Genrev Interio transformed our corporate workspace in Delhi NCR. From 3D space planning to turnkey execution of acoustic baffles and executive boardrooms, the craftsmanship is truly world-class.",
      projectType: "Corporate Atelier",
      rating: 5
    },
    {
      clientName: "Meenakshi & Pradeep Verma",
      role: "Estate Owners",
      company: "Jaypee Greens Imperial",
      quote: "From initial 3D visualization to the final brass handle, Genrev Interio's team truly lives up to 'We create your legacy'. Italian marble joints, cove lighting warmth, and punctuality were phenomenal.",
      projectType: "Luxury Villa",
      rating: 5
    }
  ];

  const currentReview = reviewList[activeReview];

  const nextReview = () => {
    setActiveReview((prev) => (prev + 1) % reviewList.length);
  };

  const prevReview = () => {
    setActiveReview((prev) => (prev === 0 ? reviewList.length - 1 : prev - 1));
  };

  return (
    <section id="clients" className="relative py-28 px-6 sm:px-12 lg:pl-36 lg:pr-16 bg-[#111215] overflow-hidden border-b border-white/5">
      {/* Background Watermark matching go.arch screenshot */}
      <div className="absolute top-8 left-1/4 watermark-text text-8xl md:text-[14rem] select-none opacity-20">
        clients
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Heading matching "OUR CLIENTS" */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <span className="text-xs uppercase tracking-[0.35em] text-white font-mono-num font-semibold mb-2">
            OUR <span className="text-[#C5A880]">CLIENTS</span>
          </span>
          <span className="w-12 h-[2px] bg-[#C5A880]"></span>
        </div>

        {/* Client Logos Grid - matching the minimalist logo presentation in the screenshot */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 max-w-5xl mx-auto mb-16">
          {clientList.map((client, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-[#C5A880]/30 transition-all duration-300 flex flex-col items-center justify-center text-center group"
            >
              {/* Geometric Minimalist Emblem */}
              <div className="flex items-center gap-1.5 mb-2 opacity-60 group-hover:opacity-100 transition-opacity">
                <span className="w-3 h-3 rounded-full border border-[#C5A880] group-hover:bg-[#C5A880] transition-colors"></span>
                <span className="w-2 h-2 rotate-45 border border-white/40"></span>
              </div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-400 group-hover:text-white transition-colors font-sans">
                {client.name}
              </span>
              <span className="text-[9px] font-mono-num text-neutral-600 tracking-wider mt-1">
                {client.category || 'Architecture'}
              </span>
            </div>
          ))}
        </div>

        {/* Center Pill Button matching "WORK TOGETHER ->" in the screenshot */}
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
                  className="w-10 h-10 rounded-full border border-white/10 hover:border-[#C5A880] hover:text-[#C5A880] text-neutral-400 flex items-center justify-center transition"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextReview}
                  className="w-10 h-10 rounded-full border border-white/10 hover:border-[#C5A880] hover:text-[#C5A880] text-neutral-400 flex items-center justify-center transition"
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
