import React from 'react';
import { Award, Building, Users, Trophy } from 'lucide-react';

export default function StatsSection() {
  const statItems = [
    { number: '5+', label: 'YEARS IN BUSINESS', sub: 'Turnkey interior executors in Delhi NCR' },
    { number: '150+', label: 'PROJECTS DELIVERED', sub: 'Spanning luxury residences & commercial' },
    { number: '4.9★', label: 'CLIENT SATISFACTION', sub: '160+ verified Google & directory reviews' },
    { number: '129+', label: 'PORTFOLIO SHOWCASES', sub: 'On official Instagram @genrev.interio.pvt.ltd' }
  ];

  return (
    <section className="relative py-24 px-6 sm:px-12 lg:pl-36 lg:pr-16 bg-dark-surface border-t border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Giant textured metallic number matching the iconic go.arch design */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12 mb-16 pb-16 border-b border-white/10">
          <div className="flex flex-col sm:flex-row items-baseline gap-6 text-center sm:text-left">
            {/* Textured Gold Typography */}
            <span 
              className="text-8xl sm:text-9xl md:text-[11rem] font-bold font-editorial tracking-tighter leading-none select-none"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80")',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                filter: 'contrast(1.4) brightness(1.2)'
              }}
            >
              5+
            </span>

            <div className="max-w-xs">
              <h3 className="text-xl sm:text-2xl font-editorial font-bold text-white uppercase tracking-wider leading-snug">
                YEARS OF TURNKEY EXCELLENCE <br />
                <span className="text-gold">IN DELHI NCR & NOIDA</span>
              </h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Transforming residential and commercial spaces into living art with Vastu precision, master craftsmanship, and transparent turnkey execution.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 w-full lg:w-auto">
            <div className="p-6 rounded-xl bg-white/5 border border-white/5">
              <span className="text-3xl font-bold font-mono-num text-gold">150+</span>
              <p className="text-[11px] uppercase tracking-wider text-neutral-400 mt-1">Delivered Projects</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/5">
              <span className="text-3xl font-bold font-mono-num text-emerald-400">4.9 ★</span>
              <p className="text-[11px] uppercase tracking-wider text-neutral-400 mt-1">160+ Reviews</p>
            </div>
          </div>
        </div>

        {/* 4-Column Stat Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {statItems.map((stat, idx) => (
            <div key={idx} className="group">
              <p className="text-3xl sm:text-4xl font-bold font-mono-num text-white group-hover:text-[#C5A880] transition-colors">
                {stat.number}
              </p>
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-neutral-300 mt-2">
                {stat.label}
              </p>
              <p className="text-[11px] text-neutral-500 mt-1">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
