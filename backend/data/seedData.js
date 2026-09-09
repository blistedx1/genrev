const seedProjects = [
  {
    title: "Urban Lumina Townhouse",
    subtitle: "Contemporary Architecture & Turnkey Interiors",
    category: "Turnkey Interiors",
    description: "A 3-story luxury townhouse with vertical timber louvers, 3D CNC acoustic stone wall, ambient cove lighting, and open-plan Italian interiors.",
    detailedText: "Complete turnkey execution from foundation civil works to bespoke joinery. Features a double-height living lounge wrapped in book-matched Italian marble, custom floating master suite, and an ultra-modern modular kitchen with a Calacatta quartz waterfall island.",
    images: [
      "/projects/townhouse_night.jpg",
      "/projects/townhouse_living.jpg",
      "/projects/townhouse_bedroom.jpg",
      "/projects/luxury_kitchen.jpg",
      "/projects/townhouse_day.jpg"
    ],
    location: "Greater Noida West, Delhi NCR",
    year: 2026,
    area: "5,400 sq.ft",
    featured: true,
    stats: {
      duration: "11 Months",
      style: "Warm Modernism & Vastu",
      clientType: "Tech Founder Family"
    }
  },
  {
    title: "Royal Romanesque Villa",
    subtitle: "Classical European Estate & Grounds",
    category: "Architecture",
    description: "Palatial 2-story classical villa featuring grand fluted Roman columns, balustrades, terracotta roof trims, and manicured green lawns.",
    detailedText: "Bespoke architectural masterwork. The grand drawing hall features double-height classical crown moldings, crystal chandeliers, beige marble inlay flooring, and French arched windows seamlessly framing the serene water courtyard and front lawns.",
    images: [
      "/projects/villa_facade.jpg",
      "/projects/villa_porch.jpg",
      "/projects/villa_living.jpg"
    ],
    location: "Noida Expressway",
    year: 2025,
    area: "7,200 sq.ft",
    featured: true,
    stats: {
      duration: "14 Months",
      style: "Classical Elegance",
      clientType: "Industrialist Estate"
    }
  },
  {
    title: "Neo-Classical Grand Palais",
    subtitle: "Symmetrical Luxury Residence",
    category: "Residential",
    description: "Three-story architectural mansion with grand Corinthian columns, pediment centerpiece, carriage entrance, and warm facade uplighting.",
    detailedText: "An exquisite fusion of timeless architectural proportion and modern luxury. Featuring customized acoustic insulated glazing, European salon dining, and turnkey interior fit-outs.",
    images: [
      "/projects/mansion_neoclassical.jpg",
      "/projects/luxury_kitchen.jpg",
      "/projects/townhouse_living.jpg"
    ],
    location: "Greater Noida",
    year: 2025,
    area: "8,500 sq.ft",
    featured: true,
    stats: {
      duration: "15 Months",
      style: "Neo-Classical Monumental",
      clientType: "Private Executive Family"
    }
  },
  {
    title: "Bespoke Chef's Modular Kitchen",
    subtitle: "Turnkey Culinary Architecture",
    category: "Turnkey Interiors",
    description: "Handleless charcoal matte cabinetry, warm fluted walnut accents, and a Calacatta quartz waterfall island with built-in German appliances.",
    detailedText: "Precision engineering by Genrev Interio's millwork facility. Integrated concealed LED profile troughs, Blum soft-close runners, and anti-fingerprint Italian laminates.",
    images: [
      "/projects/luxury_kitchen.jpg",
      "/projects/townhouse_living.jpg",
      "/projects/townhouse_bedroom.jpg"
    ],
    location: "Sector 78, Noida",
    year: 2026,
    area: "650 sq.ft",
    featured: true,
    stats: {
      duration: "6 Weeks",
      style: "Contemporary Minimalist",
      clientType: "Culinary Enthusiast"
    }
  },
  {
    title: "Floating Master Suite & Balcony",
    subtitle: "Acoustic Luxury Living",
    category: "Residential",
    description: "Floating king-size platform bed with warm underglow, acoustic fluted timber headboard, and seamless sliding glass doors to a garden balcony.",
    detailedText: "Engineered for deep acoustic tranquility. Includes smart circadian lighting controls, custom walk-in dressing pavilion, and private balcony seating.",
    images: [
      "/projects/townhouse_bedroom.jpg",
      "/projects/townhouse_day.jpg",
      "/projects/townhouse_night.jpg"
    ],
    location: "Gaur City, Greater Noida West",
    year: 2026,
    area: "1,200 sq.ft",
    featured: false,
    stats: {
      duration: "2 Months",
      style: "Warm Scandinavian & Vastu",
      clientType: "Private Residence"
    }
  },
  {
    title: "Grand Drawing Hall & Lounge",
    subtitle: "Double-Height Classical Luxury",
    category: "Turnkey Interiors",
    description: "Monumental crystal chandeliers, polished Italian marble with border inlays, and classical architectural wall moldings.",
    detailedText: "Complete turnkey execution with artisanal craftsmanship. Civil alterations, HVAC concealment, and bespoke classical furniture procurement.",
    images: [
      "/projects/villa_living.jpg",
      "/projects/villa_porch.jpg",
      "/projects/villa_facade.jpg"
    ],
    location: "Sector 150, Noida",
    year: 2025,
    area: "2,400 sq.ft",
    featured: false,
    stats: {
      duration: "4 Months",
      style: "Palatial Classical",
      clientType: "Heritage Family"
    }
  }
];

const seedTestimonials = [
  {
    clientName: "Rajiv & Ananya Sharma",
    role: "Homeowners",
    company: "Urban Lumina Townhouse",
    quote: "The turnkey execution by Genrev Interio gave us complete peace of mind. As promised on their social page, whenever any challenge came up on site, their team stepped in, solved it, and kept the project moving. The Vastu layout, marble TV wall, and modular kitchen are breathtaking.",
    projectType: "Turnkey Townhouse",
    rating: 5,
    isActive: true
  },
  {
    clientName: "Vikram & Sunita Singhal",
    role: "Estate Owners",
    company: "Royal Romanesque Villa",
    quote: "Genrev Interio delivered far beyond our highest expectations for our villa. From the carriage porch colonnade to the double-height drawing hall with crystal chandelier, the craftsmanship is genuinely world-class.",
    projectType: "Classical Villa",
    rating: 5,
    isActive: true
  },
  {
    clientName: "Sunil Agarwal",
    role: "Managing Director",
    company: "Apex Innovations",
    quote: "From initial 3D visualization to the final brass handle, Genrev Interio's team truly lives up to 'We create your legacy'. Italian marble joints, cove lighting warmth, and punctuality were phenomenal.",
    projectType: "Corporate Atelier",
    rating: 5,
    isActive: true
  }
];

const seedClients = [
  { name: "GAUR SONS", category: "Luxury Residences" },
  { name: "JAYPEE GREENS", category: "Golf Living Estates" },
  { name: "DLF ATELIER", category: "Commercial Workspaces" },
  { name: "MAHAGUN", category: "Modern Penthouses" },
  { name: "GULSHAN DYNASTY", category: "High-End Interiors" },
  { name: "ACE GROUP", category: "Turnkey Architecture" }
];

module.exports = {
  seedProjects,
  seedTestimonials,
  seedClients
};
