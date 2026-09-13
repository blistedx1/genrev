import React from 'react';
import { Search, Compass, Palette, Wrench, Truck, Sparkles, CheckCircle2, Layers, Lightbulb, ShieldCheck } from 'lucide-react';

export default function ApproachSection() {
  const steps = [
    {
      num: '01',
      title: 'DISCOVER',
      desc: 'We understand your requirements, aspirations, site context, and project objectives.',
      icon: Search
    },
    {
      num: '02',
      title: 'DEFINE',
      desc: 'We develop the design direction, spatial strategy, budget approach and project roadmap.',
      icon: Compass
    },
    {
      num: '03',
      title: 'DESIGN',
      desc: 'Ideas evolve into architectural concepts, plans, interiors, 3D visualizations and detailed design.',
      icon: Palette
    },
    {
      num: '04',
      title: 'DEVELOP',
      desc: 'Design decisions are refined through technical coordination, material selection and documentation.',
      icon: Wrench
    },
    {
      num: '05',
      title: 'DELIVER',
      desc: 'We coordinate execution to translate the approved design into a finished space.',
      icon: Truck
    },
    {
      num: '06',
      title: 'EXPERIENCE',
      desc: 'The final outcome is a space designed not just to be seen—but to be lived, used and experienced.',
      icon: Sparkles
    }
  ];

  const advantages = [
    {
      title: 'Integrated Expertise',
      desc: 'Architecture, interiors, planning and execution brought together under one professional approach.'
    },
    {
      title: 'Design + Execution',
      desc: 'We understand both the creative vision and the practical, on-site reality of execution.'
    },
    {
      title: 'Context-Driven Thinking',
      desc: 'Every project is developed around its site, purpose, occupants, and long-term aspirations.'
    },
    {
      title: 'Attention to Detail',
      desc: 'From spatial orientation and MEP to material selection and millimeter joinery, details matter.'
    },
    {
      title: 'Client-Centric Process',
      desc: 'We believe successful projects are built through constant communication, collaboration, and trust.'
    },
    {
      title: 'Professional Approach',
      desc: 'Structured design processes, technical coordination, and responsible project management.'
    }
  ];

  return (
    <section id="approach" className="relative py-28 px-6 sm:px-12 lg:pl-36 lg:pr-16 bg-[#111215] overflow-hidden border-b border-white/5">
      {/* Background Watermark */}
      <div className="absolute top-10 left-10 watermark-text text-8xl md:text-[14rem] select-none opacity-20 pointer-events-none">
        Process
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-20">
          <span className="text-xs uppercase tracking-[0.35em] text-gold font-mono-num font-semibold mb-2">
            METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-bold text-white uppercase tracking-tight sm:tracking-normal mb-4 leading-[1.08]">
            OUR APPROACH
          </h2>
          <p className="text-sm md:text-base text-neutral-400 max-w-xl font-light">
            From Vision to Reality. Every project begins with understanding.
          </p>
          <span className="w-12 h-[2px] bg-gold mt-4"></span>
        </div>

        {/* 6-Step Interactive Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="p-8 rounded-2xl bg-card-bg border border-white/5 hover:border-gold/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-mono-num font-bold text-gold/80 group-hover:text-gold transition-colors">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] group-hover:bg-gold/20 flex items-center justify-center text-gold transition">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-editorial font-bold text-white uppercase tracking-wider mb-3 group-hover:text-gold-light transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono-num text-neutral-500 uppercase tracking-wider">
                  <span>Phase {step.num}</span>
                  <span className="text-[#C5A880] opacity-0 group-hover:opacity-100 transition-opacity">Ready to Execute</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* WHY GENREV? & DESIGN LANGUAGE SPLIT SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Why Genrev: 6 Core Advantages */}
          <div className="lg:col-span-7 p-8 sm:p-12 rounded-2xl bg-[#14151B] border border-white/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#C5A880]" />
                <span className="text-[10px] font-mono-num uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
                  THE GENREV DIFFERENCE
                </span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-white uppercase tracking-wide mb-2">
                WHY GENREV?
              </h3>
              <p className="text-xs font-mono-num uppercase text-neutral-400 tracking-wider mb-8">
                One Vision. Multiple Disciplines.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {advantages.map((adv, idx) => (
                  <div key={idx} className="group">
                    <h4 className="text-sm font-bold text-white mb-1.5 flex items-center gap-2 group-hover:text-[#C5A880] transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A880] flex-shrink-0" />
                      <span>{adv.title}</span>
                    </h4>
                    <p className="text-xs text-neutral-400 font-light leading-relaxed pl-6">
                      {adv.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Our Design Language */}
          <div className="lg:col-span-5 p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-[#181920] to-[#121316] border border-[#C5A880]/20 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A880]/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              <span className="text-[10px] font-mono-num uppercase tracking-[0.25em] text-[#C5A880] font-semibold block mb-3">
                AESTHETIC PHILOSOPHY
              </span>

              <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-white uppercase tracking-wider mb-2">
                OUR DESIGN LANGUAGE
              </h3>

              <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono-num text-[#C5A880] uppercase tracking-widest mb-6">
                Contemporary • Contextual • Timeless
              </div>

              <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed mb-6">
                We are inspired by the relationship between people, space, material, light and context.
              </p>

              <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed mb-6">
                Our design language is not restricted to a single rigid style. Each project develops its own identity—whether it is a warm residence, a sophisticated corporate office, a high-performance industrial environment or a premium commercial space.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono-num text-neutral-400">
                Tailored for every site & purpose
              </span>
              <span className="text-xs font-mono-num font-semibold text-[#C5A880]">
                Ar. Abhishek Singh Chauhan
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
