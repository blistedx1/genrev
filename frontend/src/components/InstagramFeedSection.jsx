import React from 'react';
import { Heart, MessageCircle, ExternalLink, ShieldCheck, Sparkles, Phone, ArrowUpRight } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './SocialIcons';

export default function InstagramFeedSection() {
  const posts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
      caption: "Site problem? We've got it covered. 🛠️ From design to execution, if any challenge comes up on site, our team steps in, solves it, and keeps the project moving. You focus on the vision. We handle the execution.",
      tags: "#GenrevInterio #SiteExecution #Architecture #InteriorDesign #Turnkey",
      likes: '142',
      comments: '18',
      date: 'Aug 24, 2026',
      badge: 'Site Execution'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      caption: "People are looking for Genrev Interio. Because great interiors aren't just about beautiful spaces — they're about design, functionality, detailing & execution. Residential • Commercial • Luxury • Turnkey.",
      tags: "#DelhiNCR #GreaterNoida #InteriorExecutors #LivingSpaces",
      likes: '198',
      comments: '24',
      date: 'Aug 21, 2026',
      badge: 'Design Philosophy'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      caption: "✨ Your Space. Our Passion. At GENREV INTERIO, we transform your vision into thoughtfully designed spaces—where aesthetics, functionality, and comfort come together.",
      tags: "#WeCreateYourLegacy #BespokeInteriors #ModernLiving",
      likes: '167',
      comments: '19',
      date: 'Aug 20, 2026',
      badge: 'Luxury Living'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80',
      caption: "Scientific Vastu harmonization meets European modernism. Every entry angle, kitchen placement, and master zone balanced for serenity and prosperity.",
      tags: "#VastuExpert #HarmoniousHomes #SpatialPlanning",
      likes: '215',
      comments: '31',
      date: 'Aug 14, 2026',
      badge: 'Vastu Harmony'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
      caption: "Turnkey Modular Kitchen Execution: Concealed ambient profiles, scratch-proof acrylic finishes, quartz waterfall island, and Blum soft-close fittings.",
      tags: "#ModularKitchen #GaurCity #NoidaHomes #CustomMillwork",
      likes: '184',
      comments: '22',
      date: 'Aug 08, 2026',
      badge: 'Modular Kitchen'
    },
    {
      id: 6,
      image: '/projects/resolut_aerial.jpg',
      caption: "Corporate Headquarters Turnkey Execution: Acoustic fluted timber partitions, seamless glass boardrooms, and biophilic open collaboration spaces.",
      tags: "#CommercialInteriors #OfficeDesign #DelhiNCRWorkspaces",
      likes: '156',
      comments: '15',
      date: 'Aug 01, 2026',
      badge: 'Corporate Atelier'
    }
  ];

  return (
    <section id="instagram" className="relative py-28 px-6 sm:px-12 lg:pl-36 lg:pr-16 bg-dark-surface border-b border-white/5 overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-10 right-10 watermark-text text-8xl md:text-[14rem] select-none opacity-15">
        Social
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs uppercase tracking-[0.35em] text-[#C5A880] font-mono-num font-semibold flex items-center gap-2">
                <InstagramIcon className="w-4 h-4" /> LIVE FROM OUR SOCIAL FEED
              </span>
              <span className="w-12 h-[1px] bg-white/10"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-bold text-white tracking-tight">
              Real Projects. Real Craftsmanship.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/genrev.interio.pvt.ltd"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-white font-semibold text-xs tracking-wider flex items-center gap-2 shadow-lg shadow-rose-900/20 hover:opacity-95 transition"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>@genrev.interio.pvt.ltd</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61550528653657"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full bg-[#1877F2]/20 hover:bg-[#1877F2]/30 border border-[#1877F2]/40 text-[#1877F2] hover:text-white font-semibold text-xs tracking-wider flex items-center gap-2 transition"
              title="Facebook Page"
            >
              <FacebookIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Facebook</span>
            </a>
          </div>
        </div>

        {/* Profile Card Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#16171D] border border-white/10 mb-14 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-radial from-[#C5A880]/10 via-transparent to-transparent pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            {/* Left: Avatar & Bio */}
            <div className="flex items-start sm:items-center gap-5">
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-tr from-[#FFB703] via-[#E52E2D] to-[#833AB4] shadow-xl">
                  <img
                    src="/genrev-logo.jpg"
                    alt="Genrev Interio Official Avatar"
                    className="w-full h-full object-cover rounded-full bg-white"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=200&q=80';
                    }}
                  />
                </div>
                <div className="absolute bottom-0 right-0 bg-[#1877F2] text-white p-1 rounded-full shadow-md" title="Verified Brand">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-lg sm:text-xl font-bold text-white font-sans">
                    GENREV INTERIO PVT. LTD.
                  </h3>
                  <span className="text-xs text-neutral-400 font-mono-num">
                    @genrev.interio.pvt.ltd
                  </span>
                </div>

                <p className="text-xs text-neutral-300 font-light mt-1 max-w-xl">
                  Home Decorator | Turnkey Interior Executors - Delhi NCR & Greater Noida • Architect • Interior Designer • Vastu Expert
                </p>

                <p className="text-xs italic text-[#C5A880] font-serif mt-1">
                  "we create your legacy"
                </p>
              </div>
            </div>

            {/* Right: Live Community Stats */}
            <div className="flex items-center gap-6 sm:gap-8 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/10">
              <div className="text-center">
                <span className="text-xl sm:text-2xl font-bold font-mono-num text-white">129+</span>
                <p className="text-[10px] uppercase tracking-wider text-neutral-400 mt-0.5">Posts</p>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <div className="text-center">
                <span className="text-xl sm:text-2xl font-bold font-mono-num text-[#C5A880]">180+</span>
                <p className="text-[10px] uppercase tracking-wider text-neutral-400 mt-0.5">Followers</p>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <div className="text-center">
                <span className="text-xl sm:text-2xl font-bold font-mono-num text-emerald-400">4.9 ★</span>
                <p className="text-[10px] uppercase tracking-wider text-neutral-400 mt-0.5">Rating</p>
              </div>
            </div>
          </div>
        </div>

        {/* 6-Card Instagram Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="group rounded-2xl bg-[#16171D] border border-white/10 hover:border-[#C5A880]/50 overflow-hidden transition-all duration-500 shadow-xl flex flex-col"
            >
              {/* Photo Viewport */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.badge}
                  className="w-full h-full object-cover group-hover:scale-108 transition-all duration-700"
                />
                
                {/* Category Pill */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-wider font-mono-num text-white font-medium">
                    {post.badge}
                  </span>
                </div>

                {/* Instagram Quick Link on Hover */}
                <a
                  href="https://www.instagram.com/genrev.interio.pvt.ltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-4 text-center cursor-pointer"
                >
                  <InstagramIcon className="w-8 h-8 text-[#C5A880]" />
                  <span className="text-xs font-semibold text-white tracking-wider uppercase">
                    View on Instagram
                  </span>
                  <div className="flex items-center gap-6 text-xs text-neutral-300 font-mono-num mt-2">
                    <span className="flex items-center gap-1.5"><Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> {post.likes}</span>
                    <span className="flex items-center gap-1.5"><MessageCircle className="w-4 h-4 text-white" /> {post.comments}</span>
                  </div>
                </a>
              </div>

              {/* Caption & Post Metadata */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-neutral-300 leading-relaxed font-light line-clamp-3">
                  {post.caption}
                </p>

                <div>
                  <p className="text-[11px] text-[#C5A880] font-mono-num">
                    {post.tags}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[10px] text-neutral-500 font-mono-num mt-3">
                    <span>{post.date}</span>
                    <a
                      href="https://www.instagram.com/genrev.interio.pvt.ltd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white flex items-center gap-1 transition"
                    >
                      <span>@genrev.interio.pvt.ltd</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-14 p-6 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full bg-[#C5A880]/10 text-[#C5A880]">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white uppercase tracking-wider">
                Planning a project in Delhi NCR or Greater Noida?
              </p>
              <p className="text-[11px] text-neutral-400 mt-0.5">
                Visit our experience centre in Gaur City Mall or call our senior team directly.
              </p>
            </div>
          </div>

          <a
            href="tel:+919958323002"
            className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-[#C5A880] text-white hover:text-black font-semibold text-xs tracking-wider transition font-mono-num flex items-center gap-2"
          >
            <span>CALL +91 99583 23002</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
