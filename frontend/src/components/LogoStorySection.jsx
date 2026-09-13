import React from 'react';
import { Wind, Zap, Users, Sparkles, HeartHandshake, ShieldCheck, ArrowRight, Compass } from 'lucide-react';

export default function LogoStorySection() {
  const colorPillars = [
    {
      color: "#E52E2D",
      name: "Pure Red",
      blade: "Top Blade",
      meaning: "Energy & Revolutionary Impact",
      detail: "Represents passion, transformative creative energy, and uncompromised architectural vision."
    },
    {
      color: "#F3A712",
      name: "Pure Yellow / Amber",
      blade: "Left Blade",
      meaning: "Authenticity & Human Warmth",
      detail: "Reflects sincerity, emotional resonance, bespoke craftsmanship, and luminous spaces."
    },
    {
      color: "#1E56B7",
      name: "Pure Blue",
      blade: "Right Blade",
      meaning: "Integrity & Technical Precision",
      detail: "Embodies structural rigor, engineering excellence, planning discipline, and enduring legacy."
    }
  ];

  return (
    <section id="brand-story" className="relative py-28 px-6 sm:px-12 lg:pl-36 lg:pr-16 bg-dark-bg overflow-hidden border-b border-white/5">
      {/* Background Watermark */}
      <div className="absolute top-10 right-10 watermark-text text-8xl md:text-[14rem] select-none opacity-15 pointer-events-none">
        Genrev
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <span className="text-xs uppercase tracking-[0.35em] text-gold font-mono-num font-semibold mb-2">
            BRAND ORIGIN & PHILOSOPHY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-bold text-white uppercase tracking-wider mb-3">
            THE STORY BEHIND GENREV
          </h2>
          <p className="text-sm md:text-base font-mono-num uppercase tracking-[0.2em] text-gold font-medium">
            Generating Revolution
          </p>
          <span className="w-12 h-[2px] bg-gold mt-4"></span>
        </div>

        {/* Lead Narrative & Glowing Insignia */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left: Narrative Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-editorial font-bold text-white leading-tight">
              Transforming Energy into <br />
              <span className="text-[#C5A880]">Meaningful Progress.</span>
            </h3>

            <p className="text-neutral-200 text-sm md:text-base font-light leading-relaxed">
              At <strong className="text-white font-medium">GENREV</strong>, our identity is rooted in a simple yet powerful idea — to transform energy into meaningful progress.
            </p>

            <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed">
              Our logo is inspired by the form and movement of <strong className="text-white font-medium">three wind-turbine blades</strong>. Each form represents energy in motion, while the three pure colours — <span className="text-[#E52E2D] font-medium">Red</span>, <span className="text-[#F3A712] font-medium">Yellow</span> and <span className="text-[#1E56B7] font-medium">Blue</span> — reflect our belief in purity, authenticity and uncompromised values.
            </p>

            <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed">
              A wind turbine transforms the invisible force of wind into usable electrical energy — creating power that serves society. Inspired by this very principle of transformation, <strong className="text-white font-medium">GENREV</strong> was born.
            </p>

            {/* GEN + REV Breakout Box */}
            <div className="p-6 rounded-2xl bg-[#14151B] border border-[#C5A880]/30 shadow-xl space-y-3">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded text-xs font-mono-num font-bold bg-[#C5A880] text-[#111215]">
                  GEN + REV
                </span>
                <span className="text-xs font-mono-num uppercase tracking-wider text-neutral-400">
                  The Core Equation
                </span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-xs font-mono-num text-[#C5A880] font-bold block">GEN</span>
                  <span className="text-sm font-bold text-white font-sans">Generating</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-xs font-mono-num text-[#C5A880] font-bold block">REV</span>
                  <span className="text-sm font-bold text-white font-sans">Revolution</span>
                </div>
              </div>

              <p className="text-xs text-neutral-300 font-light leading-relaxed pt-1">
                Together, <strong className="text-white font-medium">GENREV — Generating Revolution</strong> represents our commitment to transforming ideas, opportunities and challenges into meaningful, lasting outcomes.
              </p>
            </div>
          </div>

          {/* Right: Emblem Sculpture Display */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-[#14151B] to-[#0E0F12] border border-white/10 shadow-2xl relative">
            <div className="absolute inset-0 bg-[#C5A880]/5 rounded-2xl blur-3xl pointer-events-none" />

            {/* Glowing Logo Graphic - Official Emblem Artwork */}
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 mb-8 group p-4 rounded-2xl bg-white/[0.03] border border-white/5">
              <img
                src="/genrev-logo.png"
                alt="GENREV Official Emblem"
                className="w-full h-full object-contain filter drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = '/genrev-logo.jpg';
                }}
              />
            </div>

            <div className="text-center space-y-1">
              <h4 className="font-architectural text-3xl font-bold tracking-widest text-white">
                GENREV
              </h4>
              <p className="text-[11px] font-mono-num text-[#C5A880] uppercase tracking-[0.25em]">
                Energy in Motion
              </p>
              <p className="text-[10px] text-neutral-500 font-mono-num uppercase tracking-wider pt-2">
                Balance • Movement • Generation • Transformation
              </p>
            </div>
          </div>

        </div>

        {/* Responsibility, Values & Our Promise */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Client Responsibility */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#14151B] border border-white/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="w-5 h-5 text-[#C5A880]" />
                <span className="text-[10px] font-mono-num uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
                  A SACRED RESPONSIBILITY
                </span>
              </div>

              <h4 className="text-xl font-editorial font-bold text-white mb-4">
                Not Merely an Assignment. A Responsibility.
              </h4>

              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-4">
                When a client entrusts us with a project, we don’t see it simply as an assignment. We see it as a responsibility.
              </p>

              <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                We bring together our knowledge, creativity, technology, experience and dedication to add value at every stage — with integrity, sincerity and a commitment to quality, without compromise.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5">
              <span className="text-[11px] font-mono-num text-[#C5A880] uppercase tracking-wider">
                Integrity • Sincerity • Uncompromised Quality
              </span>
            </div>
          </div>

          {/* Our Promise Triad */}
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-[#181920] to-[#121316] border border-[#C5A880]/30 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A880]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-2 mb-4">
                <HeartHandshake className="w-5 h-5 text-[#C5A880]" />
                <span className="text-[10px] font-mono-num uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
                  OUR PROMISE
                </span>
              </div>

              <div className="space-y-4 my-6">
                <div className="flex items-start gap-3">
                  <span className="text-xs font-mono-num text-[#C5A880] font-bold mt-0.5">01</span>
                  <p className="text-base sm:text-lg font-editorial text-white font-medium">
                    You give us your vision.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-mono-num text-[#C5A880] font-bold mt-0.5">02</span>
                  <p className="text-base sm:text-lg font-editorial text-white font-medium">
                    We give it our dedication.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xs font-mono-num text-[#C5A880] font-bold mt-0.5">03</span>
                  <p className="text-base sm:text-lg font-editorial text-[#DFC49F] font-bold">
                    Together, we create its revolution.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <span className="text-[11px] font-mono-num text-neutral-400 uppercase tracking-widest">
                The Genrev Commitment
              </span>
            </div>
          </div>

        </div>

        {/* The 3 Pure Colours & Legacy Manifesto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {colorPillars.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#131419] border border-white/5 hover:border-white/20 transition group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-3.5 h-3.5 rounded-full"
                  style={{ backgroundColor: item.color, boxShadow: `0 0 10px ${item.color}80` }}
                />
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  {item.name}
                </h4>
              </div>

              <p className="text-xs font-mono-num text-[#C5A880] mb-2 font-medium">
                {item.meaning}
              </p>

              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Grand Manifesto Banner */}
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#171820] via-[#121317] to-[#171820] border border-[#C5A880]/40 text-center shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono-num uppercase tracking-[0.3em] text-[#C5A880] font-semibold">
              BUILDING FOR GENERATIONS
            </span>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-editorial font-bold text-white uppercase tracking-wide leading-snug">
              "For us, true success is not limited to what we create today. It is about creating work that continues to create value tomorrow — and remains meaningful for generations to come."
            </h3>

            <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-xl mx-auto leading-relaxed">
              Because a truly successful project should not only serve its present users; it should become a legacy for the future.
            </p>

            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-mono-num">
              <span className="text-white font-bold tracking-wider">
                GENREV
              </span>
              <span className="hidden sm:inline text-neutral-600">•</span>
              <span className="text-[#DFC49F]">
                Pure in Intent. True in Commitment. Revolutionary in Impact.
              </span>
            </div>

            <p className="text-[11px] font-mono-num uppercase tracking-[0.2em] text-[#C5A880] pt-2">
              Generating Revolution — Creating Today. Empowering Tomorrow. Building for Generations.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
