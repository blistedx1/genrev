import React from 'react';
import { GraduationCap, Award, Compass, Building, CheckCircle2, ArrowRight, Mail, Phone } from 'lucide-react';

export default function FounderSection() {
  const education = [
    {
      degree: "Master’s in Urban & Regional Planning (MURP)",
      institution: "Gautam Buddha University",
      period: "2015 – 2017",
      highlight: "Advanced Spatial Planning & Urban Development"
    },
    {
      degree: "Bachelor of Architecture (B.Arch.)",
      institution: "Apeejay School of Architecture & Planning, UPTU",
      period: "2008 – 2013",
      highlight: "Comprehensive Architectural Design & Structural Systems"
    },
    {
      degree: "Diploma in Micro Electronics",
      institution: "Government Polytechnic, Fatehpur, Uttar Pradesh",
      period: "2005 – 2008",
      highlight: "Technical Precision & Systems Engineering"
    }
  ];

  const focusAreas = [
    "Architecture",
    "Interior Design",
    "Urban & Regional Planning",
    "Construction",
    "Project Consultancy",
    "Development Planning"
  ];

  return (
    <section id="founder" className="relative py-28 px-6 sm:px-12 lg:pl-36 lg:pr-16 bg-dark-bg overflow-hidden border-b border-white/5">
      {/* Background Watermark */}
      <div className="absolute top-12 right-10 watermark-text text-8xl md:text-[14rem] select-none opacity-20 pointer-events-none">
        Architect
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-16">
          <span className="text-xs uppercase tracking-[0.35em] text-gold font-mono-num font-semibold">
            PRACTICE LEADERSHIP
          </span>
          <span className="w-16 h-[1px] bg-white/10"></span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Portrait Monogram & Credentials Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-card-bg to-dark-surface border border-gold/30 p-8 sm:p-10 shadow-2xl">
              
              {/* Gold Framing Ribbon */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 rounded-full blur-2xl pointer-events-none" />

              {/* Architectural Seal / Monogram */}
              <div className="w-20 h-20 rounded-2xl bg-black/60 border border-[#C5A880]/50 flex items-center justify-center mb-6 shadow-inner">
                <span className="font-editorial text-3xl font-bold text-[#C5A880] tracking-wider">
                  ASC
                </span>
              </div>

              <div className="space-y-1 mb-6">
                <span className="text-[10px] font-mono-num uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
                  PRINCIPAL ARCHITECT & PLANNER
                </span>
                <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-white tracking-wide">
                  Ar. Abhishek Singh Chauhan
                </h3>
                <p className="text-xs font-mono-num text-neutral-400">
                  Architect • Urban & Regional Planner
                </p>
              </div>

              <div className="h-[1px] bg-white/10 mb-6" />

              {/* Quick Philosophy Statement */}
              <blockquote className="text-xs sm:text-sm text-neutral-300 font-light italic leading-relaxed border-l-2 border-[#C5A880] pl-4 mb-6">
                "Great architecture is not merely about how a space looks. It is about how it works, feels, and performs over time."
              </blockquote>

              <div className="space-y-3 pt-4 border-t border-white/5 text-xs font-mono-num text-neutral-400">
                <div className="flex items-center justify-between">
                  <span>Professional Registration</span>
                  <span className="text-white font-medium">Council of Architecture (CoA)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Practice Footprint</span>
                  <span className="text-[#C5A880]">Delhi NCR • Greater Noida • UP</span>
                </div>
              </div>
            </div>

            {/* Quick Action Contact Card */}
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
              <div>
                <p className="text-xs font-mono-num uppercase text-white font-medium">Schedule Consultation</p>
                <p className="text-[11px] text-neutral-400 font-light">Discuss your villa, corporate, or planning project</p>
              </div>
              <a
                href="#contact"
                className="px-5 py-2 rounded-full bg-[#C5A880] hover:bg-[#DFC49F] text-[#111215] font-semibold text-[11px] uppercase tracking-wider transition"
              >
                Inquire
              </a>
            </div>
          </div>

          {/* Right Column: Bio, Education Credentials & Professional Focus */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Leadership Overview */}
            <div>
              <span className="text-xs font-mono-num uppercase tracking-[0.2em] text-[#C5A880] block mb-2 font-semibold">
                FOUNDER'S VISION
              </span>
              <h2 className="text-3xl sm:text-4xl font-editorial font-bold text-white mb-6 leading-tight">
                Architectural Understanding, Spatial Planning & <br />
                <span className="text-[#C5A880]">Technical Execution.</span>
              </h2>

              <p className="text-neutral-300 text-sm md:text-base font-light leading-relaxed mb-4">
                <strong className="text-white font-medium">Ar. Abhishek Singh Chauhan</strong> is an Architect and Urban & Regional Planner with multidisciplinary experience across architecture, interiors, construction, planning and project consultancy.
              </p>

              <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
                His professional approach combines design thinking, spatial planning, technical understanding and execution-oriented decision making. Under his direction, Genrev transforms complex programmatic requirements into cohesive, human-centered architectural solutions.
              </p>
            </div>

            {/* Academic Credentials */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="w-5 h-5 text-[#C5A880]" />
                <h4 className="text-sm font-mono-num uppercase tracking-[0.2em] text-white font-bold">
                  EDUCATION & QUALIFICATIONS
                </h4>
              </div>

              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div 
                    key={idx}
                    className="p-5 rounded-xl bg-[#14151B] border border-white/5 hover:border-[#C5A880]/30 transition group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                      <h5 className="text-sm font-bold text-white group-hover:text-[#DFC49F] transition-colors">
                        {edu.degree}
                      </h5>
                      <span className="text-[11px] font-mono-num text-[#C5A880] px-2.5 py-0.5 rounded bg-white/5 border border-white/5 self-start sm:self-auto">
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-xs text-neutral-300 font-medium">
                      {edu.institution}
                    </p>

                    <p className="text-[11px] text-neutral-500 font-light mt-1">
                      {edu.highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Focus Areas */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Compass className="w-5 h-5 text-[#C5A880]" />
                <h4 className="text-sm font-mono-num uppercase tracking-[0.2em] text-white font-bold">
                  PROFESSIONAL FOCUS
                </h4>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {focusAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-xs font-mono-num text-neutral-300 hover:text-white transition"
                  >
                    • {area}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
