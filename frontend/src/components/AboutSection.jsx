import React from 'react';
import { Target, Compass, Heart, Eye, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import LazyImage from './LazyImage';

export default function AboutSection() {
  const philosophies = [
    {
      title: 'Design with Purpose.',
      desc: 'We believe great architecture is not only about how a space looks. It is about how it works, feels and performs over time.',
      icon: Target,
      tag: 'FUNCTION & FORM'
    },
    {
      title: 'Build with Precision.',
      desc: 'From foundation civil works to intricate joinery, technical excellence and coordinated execution turn design intent into enduring reality.',
      icon: Compass,
      tag: 'TECHNICAL RIGOR'
    },
    {
      title: 'Create with Emotion.',
      desc: 'Spaces designed around people—crafting atmospheric environments that evoke comfort, character, and distinctive brand identity.',
      icon: Heart,
      tag: 'HUMAN-CENTRIC'
    }
  ];

  return (
    <section id="about" className="relative py-28 px-6 sm:px-12 lg:pl-36 lg:pr-16 bg-[#111215] overflow-hidden border-b border-white/5">
      {/* Background Watermark */}
      <div className="absolute top-12 left-20 watermark-text text-8xl md:text-[14rem] select-none opacity-20 pointer-events-none">
        About
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-16">
          <span className="text-xs uppercase tracking-[0.35em] text-white font-mono-num font-semibold">
            ABOUT <span className="text-[#C5A880]">GENREV INTERIO</span>
          </span>
          <span className="w-16 h-[1px] bg-white/10"></span>
        </div>

        {/* Top Editorial Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          {/* Left Column: Vision & Philosophy Lead */}
          <div className="lg:col-span-6 pr-0 lg:pr-6">
            <span className="text-xs font-mono-num uppercase tracking-[0.25em] text-gold mb-3 block font-medium">
              MULTIDISCIPLINARY PRACTICE
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-bold text-white leading-[1.08] tracking-tight mb-8">
              We Create Spaces That <br />
              <span className="text-gold">Make a Difference.</span>
            </h2>

            <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-6 font-light">
              <strong className="text-white font-medium">Genrev INTERIO Pvt. Ltd.</strong> is a multidisciplinary architecture, interior design, construction and planning company committed to creating distinctive spaces with purpose, character and lasting value.
            </p>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
              We bring together creative design, technical expertise and execution capability to transform ideas into meaningful built environments.
            </p>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-8 font-light">
              From residences and luxury villas to corporate offices, commercial developments, retail spaces, industrial facilities and institutional projects, our approach combines design thinking with practical execution.
            </p>

            {/* Principal Architect Callout Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#181920] to-[#121316] border border-[#C5A880]/30 shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#C5A880]"></span>
                <span className="text-[10px] font-mono-num uppercase tracking-[0.2em] text-[#C5A880] font-semibold">
                  PRACTICE LEADERSHIP
                </span>
              </div>
              <p className="text-xs md:text-sm text-neutral-200 leading-relaxed">
                Led by <strong className="text-white font-semibold">Ar. Abhishek Singh Chauhan</strong> — Architect & Urban and Regional Planner, Genrev brings together architectural understanding, spatial planning and project execution to deliver solutions that respond to the client, context and purpose of every project.
              </p>
              <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between">
                <a 
                  href="#founder" 
                  className="text-[11px] font-mono-num uppercase tracking-wider text-[#C5A880] hover:text-white transition flex items-center gap-1.5"
                >
                  <span>Explore Founder Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Imagery & Philosophy Cards */}
          <div className="lg:col-span-6 space-y-6">
            
            <LazyImage
              src="/projects/townhouse_living.jpg"
              alt="Genrev Interio Luxury Architecture & Interior"
              aspectRatio="16/10"
              containerClassName="rounded-2xl border border-white/10 shadow-2xl w-full group"
              className="group-hover:scale-105 transition-transform duration-700"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-black/30 pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono-num text-white pointer-events-none z-10">
                <div>
                  <p className="font-semibold uppercase tracking-wider">Purposeful • Refined • Enduring</p>
                  <p className="text-[10px] text-neutral-400">Delhi NCR • Greater Noida • Kanpur</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] text-gold">
                  Turnkey Practice
                </span>
              </div>
            </LazyImage>

            {/* Vision & Mission Split Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#C5A880]/30 transition">
                <span className="text-[10px] font-mono-num uppercase tracking-[0.25em] text-[#C5A880] block mb-2 font-semibold">
                  OUR VISION
                </span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                  To Shape Better Spaces. To Create Lasting Value.
                </h4>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  Creating environments that are innovative, human-centred, sustainable and relevant to the future.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#C5A880]/30 transition">
                <span className="text-[10px] font-mono-num uppercase tracking-[0.25em] text-[#C5A880] block mb-2 font-semibold">
                  OUR MISSION
                </span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                  Meaningful Spaces Built with Passion.
                </h4>
                <ul className="text-xs text-neutral-400 font-light space-y-1">
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-[#C5A880]" /> Thoughtful Design</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-[#C5A880]" /> Technical Excellence</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-[#C5A880]" /> Responsible Execution</li>
                </ul>
              </div>
            </div>

          </div>

        </div>

        {/* Our Philosophy: 3 Core Pillars */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[10px] font-mono-num uppercase tracking-[0.3em] text-[#C5A880] font-semibold block mb-2">
              FOUNDATIONAL VALUES
            </span>
            <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-white uppercase tracking-wider">
              OUR PHILOSOPHY
            </h3>
            <span className="w-12 h-[2px] bg-[#C5A880] mx-auto block mt-3"></span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {philosophies.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-[#15161C]/90 border border-white/5 hover:border-[#C5A880]/40 transition-all duration-300 group hover:-translate-y-1 shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.04] group-hover:bg-[#C5A880]/15 flex items-center justify-center text-[#C5A880] transition">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono-num text-neutral-500 tracking-widest uppercase">
                        0{idx + 1}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono-num text-[#C5A880] uppercase tracking-widest block mb-2 font-medium">
                      {item.tag}
                    </span>

                    <h4 className="text-xl font-editorial font-bold text-white mb-3 group-hover:text-[#DFC49F] transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5">
                    <span className="text-[10px] font-mono-num text-neutral-500 uppercase tracking-wider">
                      Genrev Core Standard
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
