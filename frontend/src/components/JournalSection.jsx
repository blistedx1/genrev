import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, User, Tag, Sparkles, X, ChevronRight, Share2 } from 'lucide-react';

export const journalArticles = [
  {
    id: "noida-urban-landscape",
    title: "Noida’s Changing Urban Landscape: An Architect & Urban Planner’s Perspective",
    category: "Urban Planning",
    author: "Ar. Abhishek Singh Chauhan (MURP, B.Arch)",
    date: "12 Sept 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    excerpt: "With the Noida-Greater Noida Expressway, upcoming Jewar Airport, and high-density commercial corridors, how spatial master planning and transit-oriented development are redefining the region.",
    content: `
### The Evolution of NCR's Most Planned Urban Node
Noida and Greater Noida represent one of the most ambitious master-planned urban expansions in modern India. Unlike organically grown cities that struggle retrofitting basic services, this corridor was conceived with wide arterial grids, defined sectoral zoning, and expansive green buffers.

However, rapid urbanization, rising vehicle densities, and the economic catalyst of the Jewar International Airport demand an evolution from standard suburban expansion to **Transit-Oriented Development (TOD)**.

### 1. The Shift from Automobile-First to Pedestrian-Centric Sectors
Historically, sectors were designed around high-speed vehicular mobility. Today, progressive planning focuses on 15-minute neighborhood models:
* Integrating commercial high-streets within walking radiuses of residential clusters.
* Creating continuous shaded micro-climate pedestrian walkways to counter North India’s extreme summers.
* Developing multi-tier green infrastructure that doubles as urban stormwater catchment zones.

### 2. Mixed-Use Zoning vs Rigid Enclaves
The future of Greater Noida West and the Expressway lies in mixed-use typologies. Rigid separation between where people work, live, and recreate causes massive peak-hour transit friction. Modern integrated master planning allows commercial ateliers, co-working pavilions, and boutique retail to coexist organically with residential complexes.

### 3. The Responsibility of the Architect-Planner
When designing individual buildings—whether luxury villas or corporate headquarters—we must consider the building's edge condition. How does the facade interact with the public street? Does the boundary wall contribute to street surveillance or create a dead corridor?

At Genrev, our dual background in Architecture and Regional Planning ensures that every project responds thoughtfully to its immediate site, regional infrastructure, and the urban horizon of tomorrow.
    `,
    takeaways: [
      "Transit-oriented development is vital for Noida's long-term liveability.",
      "Mixed-use integration reduces vehicular congestion and elevates local community life.",
      "Individual architectural projects must respect their wider urban edge conditions."
    ]
  },
  {
    id: "modern-office-productivity",
    title: "What Makes a Modern Office Interior Truly Productive? (Lessons from Resolüt Partners HQ)",
    category: "Interior Design",
    author: "Genrev Corporate Atelier",
    date: "10 Sept 2026",
    readTime: "5 min read",
    image: "/projects/resolut_terrace_night.jpg",
    excerpt: "Moving beyond the sterile debate of open-plan vs cubicles: acoustic isolation, circadian rhythm lighting, and the subtle psychology of corporate partner chambers.",
    content: `
### Beyond the Desk: Designing for Cognitive Flow
For years, corporate interior design swung wildly between two extremes: isolating gray cubicles and noisy, distracting open-plan benches. Modern knowledge work—especially in demanding fields like corporate law, finance, and tech innovation—requires spaces calibrated for **cognitive switching**.

During our turnkey execution for **Resolüt Partners — Law Firm India Office**, several foundational spatial principles emerged:

### 1. Acoustic Privacy as an Executive Necessity
Deep focus and client confidentiality cannot occur in an echo chamber:
* **Micro-Perforated Acoustic Wall Paneling**: Concealed within warm fluted timber profiles to absorb high-frequency chatter without resembling a studio sound booth.
* **Double-Glazed Demising Partitions**: Achieving STC (Sound Transmission Class) 45+ between executive chambers and boardroom suites.

### 2. Circadian Rhythm & Cove Lighting
Harsh direct overhead 6500K fluorescent tubes trigger ocular fatigue and elevated stress. By layering indirect warm LED profile troughs (3000K–4000K tunable) recessed into architectural ceiling coves, the eye perceives spatial expansion and natural daylight transitions throughout long working hours.

### 3. The Balance of Prestige and Ergonomics
In corporate offices, executive chambers must communicate authoritative gravitas while maintaining seamless technology integration. Hidden wire raceways, monolithic stone reception counters, and touch-to-open flush storage maintain pristine aesthetic clarity.
    `,
    takeaways: [
      "Acoustic isolation is the single most critical factor in legal & corporate productivity.",
      "Tunable circadian lighting prevents cognitive exhaustion during long work sessions.",
      "Seamless concealment of cables and MEP infrastructure preserves executive prestige."
    ]
  },
  {
    id: "luxury-villa-mistakes",
    title: "5 Critical Mistakes to Avoid While Designing a Luxury Villa",
    category: "Architecture",
    author: "Ar. Abhishek Singh Chauhan",
    date: "11 Sept 2026",
    readTime: "7 min read",
    image: "/projects/villa_facade.jpg",
    excerpt: "Solar orientation blunders, oversized structural spans without thermal breaks, and neglecting Vastu airflow: essential lessons before commissioning high-end residential architecture.",
    content: `
### The Illusion of Mere Aesthetics
When commissioning a bespoke residence or luxury villa, it is tempting to focus purely on Instagrammable finishes: Italian marble slabs, double-height chandeliers, and floor-to-ceiling glass. 

However, true luxury lies in **climate performance, structural longevity, and spatial tranquility**. Here are five frequent oversights:

### 1. Ignoring Solar Path & Glazing Exposure
Unprotected west-facing floor-to-ceiling glass turns a magnificent living room into an unlivable greenhouse between 2 PM and 6 PM in North India. Luxury architecture uses engineered deep overhangs, vertical timber louvers, and Low-E double glazing to capture panoramic daylight without radiant thermal heat.

### 2. Disconnecting Interior Joinery from Civil Blueprints
The most expensive mistakes occur when civil structural contractors and interior designers work in silos. Beams running through wardrobe recesses, air-conditioning ducts clashing with chandeliers, and plumbing points missing bathroom vanity centerlines can all be avoided by engaging a single multidisciplinary practice.

### 3. Neglecting Acoustic Isolation Between Floors
Heavy Italian marble floors transmit footfall impacts directly to lower suites. Incorporating acoustic underlayment beneath screeds and resilient isolation channels behind master headboard walls ensures sanctuary-level quiet.

### 4. Over-complicating Spatial Circulation
A luxury villa should feel expansive, intuitive, and calm. Excessive corridors and meandering pathways waste precious square footage. Open axial sightlines that frame central courtyards or manicured water lawns create effortless spatial grace.

### 5. Treating Vastu as an Afterthought
Scientific Vastu Shastra is fundamentally about alignment with the cardinal solar path, prevailing wind currents, and natural energy zones. Addressing this at the concept sketch stage guarantees perfect harmony without cumbersome post-construction alterations.
    `,
    takeaways: [
      "Solar orientation dictates where and how large glass fenestrations should be placed.",
      "Multidisciplinary design eliminates civil and interior clashes before on-site casting.",
      "Vastu alignment is easiest and most powerful when integrated into initial concept sketches."
    ]
  },
  {
    id: "architecture-vs-interior-design",
    title: "Architecture vs Interior Design: Where Does One End and the Other Begin?",
    category: "Architecture",
    author: "Ar. Abhishek Singh Chauhan",
    date: "13 Sept 2026",
    readTime: "4 min read",
    image: "/projects/townhouse_living.jpg",
    excerpt: "Why the traditional artificial divide between the exterior building envelope and the interior lived environment compromises quality—and how unified multidisciplinary practice bridges it.",
    content: `
### The Artificial Divide
In conventional real estate, a client hires an architect to build the shell and later brings in an interior decorator to 'furnish' it. This fragmentation almost invariably results in compromises: interior designers fighting awkward structural column placements, false ceilings dropping too low to hide poorly planned beams, and facade windows positioned awkwardly relative to bed walls.

### Unified Spatial Architecture
At Genrev, we believe **architecture and interior design are two expressions of the exact same discipline**.
* The thickness of an exterior wall should anticipate the depth of an interior recessed niche.
* The rhythm of exterior facade louvers should orchestrate the play of light across the drawing room floor.
* Structural load-bearing members should harmonize with bespoke cabinetry lines.

When designed by a single team from the first conceptual sketch, the building performs as a coherent organism—inside and out.
    `,
    takeaways: [
      "Separating architecture from interior design creates costly on-site compromises.",
      "Unified spatial design ensures exterior facades and interior joinery match down to the millimeter.",
      "Turnkey delivery under one roof protects the client from contractor finger-pointing."
    ]
  },
  {
    id: "natural-light-experience",
    title: "How Natural Light & Spatial Volume Transform the Built Experience",
    category: "Interior Design",
    author: "Genrev Design Research",
    date: "14 Sept 2026",
    readTime: "5 min read",
    image: "/projects/townhouse_night_hd.jpg",
    excerpt: "The emotional physics of double-height drawing rooms, fenestration placement, and how sculpted natural shadows elevate Italian marble, fluted veneers, and brass detailing.",
    content: `
### Light as a Primary Building Material
Light is not simply an illumination tool; it is a physical material that defines texture, color depth, and the emotional resonance of a room.

### 1. The Power of Double-Height Volumes
A double-height living lounge changes our psychological state the moment we step inside. Verticality draws the gaze upward, slowing the heart rate and creating a sense of liberation from compact urban ceilings.

### 2. Sculpted Light & Material Contrast
Direct glare flattens stone and veneer. Grazing light—introduced through clerestory windows, vertical louvers, or recessed cove channels—reveals the natural three-dimensional veining of Calacatta marble and the warm tactile ridges of fluted walnut joinery.

### 3. Transitional Shadow Play
By intentionally planning shadow zones adjacent to brightly lit courtyards, spaces acquire rhythm and discovery. You experience the architecture as a living, breathing retreat as sunlight journeys from dawn to dusk.
    `,
    takeaways: [
      "Natural light acts as a living material that alters the perception of luxury surfaces.",
      "Double-height spaces trigger psychological decompression and spatial awe.",
      "Controlled shadow gradients create depth, warmth, and intimate domestic retreats."
    ]
  }
];

export default function JournalSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeArticle, setActiveArticle] = useState(null);

  const categories = [
    'All',
    'Architecture',
    'Interior Design',
    'Construction',
    'Urban Planning',
    'Real Estate',
    'Genrev Projects'
  ];

  const filteredArticles = selectedCategory === 'All'
    ? journalArticles
    : journalArticles.filter(a => a.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section id="journal" className="relative py-28 px-6 sm:px-12 lg:pl-36 lg:pr-16 bg-[#0E0F13] overflow-hidden border-b border-white/5">
      {/* Background Watermark */}
      <div className="absolute top-10 left-16 watermark-text text-8xl md:text-[14rem] select-none opacity-20 pointer-events-none">
        Journal
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Section Header matching go.arch editorial aesthetic */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#E52E2D]" />
              <span className="text-xs uppercase tracking-[0.35em] text-gold font-mono-num font-semibold">
                THE GENREV JOURNAL
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-bold text-white uppercase tracking-tight sm:tracking-normal leading-[1.08]">
              GENREV INSIGHTS
            </h2>
            <p className="text-xs font-mono-num uppercase text-neutral-400 tracking-widest mt-1">
              Perspectives on Architecture, Design & the Built Environment
            </p>
          </div>

          <div className="max-w-md text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
            A curated knowledge hub sharing architectural thinking, urban planning analysis, construction methodologies, and material research from our active project sites.
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-[11px] font-mono-num uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gold text-dark-bg font-semibold shadow-lg shadow-gold/20'
                  : 'bg-white/[0.03] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => setActiveArticle(article)}
              className="p-6 rounded-2xl bg-card-bg border border-white/5 hover:border-gold/40 transition-all duration-500 cursor-pointer group shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail Image with Zoom */}
                <div className="relative h-52 sm:h-56 w-full rounded-xl overflow-hidden mb-6 bg-black">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-transparent to-black/30" />
                  
                  {/* Category Tag Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono-num uppercase tracking-widest bg-black/80 backdrop-blur-md text-gold border border-white/10 font-medium">
                      {article.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono-num text-neutral-300 border border-white/10">
                    {article.readTime}
                  </div>
                </div>

                {/* Meta Line: Date & Author */}
                <div className="flex items-center gap-3 text-[11px] font-mono-num text-neutral-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-gold" />
                    <span>{article.date}</span>
                  </span>
                  <span>•</span>
                  <span className="truncate">{article.author.split(' ')[0]}</span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-editorial font-bold text-white group-hover:text-gold-light transition-colors leading-[1.25] tracking-tight mb-3 line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-neutral-400 font-light leading-relaxed line-clamp-3 mb-4">
                  {article.excerpt}
                </p>
              </div>

              {/* Bottom CTA */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono-num text-gold">
                <span className="uppercase tracking-wider font-medium group-hover:underline">READ PERSPECTIVE</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </article>
          ))}
        </div>

        {/* Knowledge Hub Footer Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#181920] to-[#121316] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[10px] font-mono-num uppercase tracking-[0.25em] text-[#C5A880] font-semibold block mb-1">
              CONTINUOUS RESEARCH
            </span>
            <h4 className="text-lg md:text-xl font-editorial font-bold text-white">
              Original Architectural Perspectives. Not Generic AI Articles.
            </h4>
            <p className="text-xs text-neutral-400 font-light mt-1">
              Our insights draw directly from ongoing project coordination, RERA urban considerations, and turnkey execution across Delhi NCR.
            </p>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-black text-xs font-mono-num font-semibold uppercase tracking-wider transition border border-white/20 whitespace-nowrap"
          >
            Consult With Our Architects
          </a>
        </div>

      </div>

      {/* Full Article Reading Modal */}
      {activeArticle && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-black/90 backdrop-blur-xl animate-fade-in overflow-y-auto"
          onClick={() => setActiveArticle(null)}
        >
          <div 
            className="relative w-full max-w-4xl my-auto bg-[#14151A] border border-[#C5A880]/30 rounded-2xl overflow-hidden shadow-2xl text-white max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#101115]">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono-num uppercase tracking-widest bg-[#C5A880] text-black font-bold">
                  {activeArticle.category}
                </span>
                <span className="text-xs font-mono-num text-neutral-400 hidden sm:inline">
                  {activeArticle.date} • {activeArticle.readTime}
                </span>
              </div>

              <button
                onClick={() => setActiveArticle(null)}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#C5A880] hover:text-black text-white flex items-center justify-center transition border border-white/10 cursor-pointer"
                aria-label="Close article"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto flex-1 p-6 sm:p-10 space-y-8">
              
              {/* Header Info */}
              <div>
                <span className="text-xs font-mono-num uppercase tracking-[0.25em] text-[#C5A880] font-semibold block mb-2">
                  PERSPECTIVES ON THE BUILT ENVIRONMENT
                </span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-editorial font-bold text-white leading-snug mb-4">
                  {activeArticle.title}
                </h1>
                
                <div className="flex items-center gap-3 text-xs font-mono-num text-neutral-400 pt-2 border-t border-white/10">
                  <span className="text-white font-medium">{activeArticle.author}</span>
                  <span>•</span>
                  <span>{activeArticle.date}</span>
                  <span>•</span>
                  <span className="text-[#C5A880]">{activeArticle.category}</span>
                </div>
              </div>

              {/* Lead Image */}
              <div className="relative h-72 sm:h-96 w-full rounded-xl overflow-hidden border border-white/10">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Key Takeaways Callout Box */}
              {activeArticle.takeaways && (
                <div className="p-6 rounded-xl bg-white/[0.02] border border-[#C5A880]/30 shadow-lg">
                  <h4 className="text-xs uppercase tracking-widest font-mono-num text-[#C5A880] font-bold mb-3 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>KEY TAKEAWAYS & PRACTICE INSIGHTS</span>
                  </h4>
                  <ul className="space-y-2">
                    {activeArticle.takeaways.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] mt-1.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Formatted Article Body */}
              <div className="space-y-4 text-xs sm:text-sm md:text-base text-neutral-300 font-light leading-relaxed whitespace-pre-line">
                {activeArticle.content}
              </div>

              {/* Author Byline Card */}
              <div className="p-6 rounded-xl bg-[#181920] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h5 className="text-sm font-bold text-white font-editorial">{activeArticle.author}</h5>
                  <p className="text-xs text-neutral-400 font-mono-num mt-0.5">Genrev INTERIO Pvt. Ltd. Practice Leadership</p>
                </div>

                <a
                  href="#contact"
                  onClick={() => setActiveArticle(null)}
                  className="px-6 py-2.5 rounded-full bg-[#C5A880] text-black font-semibold text-xs uppercase tracking-wider transition hover:bg-[#DFC49F]"
                >
                  Discuss With Our Team
                </a>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
