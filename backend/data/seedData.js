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
      clientType: "Tech Founder Family",
      entity: "Genrev INTERIO Pvt. Ltd."
    }
  },
  {
    title: "Resolüt Partners Headquarters",
    subtitle: "Corporate Law Firm, India Office",
    category: "Corporate",
    description: "State-of-the-art legal atelier featuring acoustic wall paneling, fluted timber partitions, executive partner chambers, and bespoke conference suites.",
    detailedText: "Bespoke corporate architecture executed under the combined leadership of Genrev Architronics Enterprises and Ar. Abhishek Singh. Includes high-performance acoustic glass partitions, brass detailing, circadian lighting, and custom monolithic Italian reception desk.",
    images: [
      "/projects/resolut_facade.jpg",
      "/projects/resolut_terrace_night.jpg",
      "/projects/resolut_aerial.jpg"
    ],
    location: "Delhi NCR",
    year: 2026,
    area: "12,500 sq.ft",
    featured: true,
    stats: {
      duration: "6 Months",
      style: "Corporate Sophistication",
      clientType: "Resolüt Partners",
      entity: "Genrev Architronics Enterprises"
    }
  },
  {
    title: "Expedite IT Corporate Office",
    subtitle: "High-Tech Corporate Workspace & Innovation Hub",
    category: "Corporate",
    description: "Modern agile tech workspace designed with collaborative pods, acoustic ceiling baffles, smart conference rooms, and ergonomic breakout zones.",
    detailedText: "Turnkey corporate fit-out for Expedite IT. Delivered with precision MEP, integrated network backbones, biometric access control, and warm minimalist lounge spaces.",
    images: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=85"
    ],
    location: "Corporate Tech Park, Noida",
    year: 2025,
    area: "18,000 sq.ft",
    featured: true,
    stats: {
      duration: "7 Months",
      style: "Modern Industrial Tech",
      clientType: "Expedite IT",
      entity: "Genrev INTERIO Pvt. Ltd."
    }
  },
  {
    title: "Eldeco Grand Residential Township",
    subtitle: "Large-Scale Architecture & Master Planning",
    category: "Builders & Developers",
    description: "Grand gateway archways, contemporary residential facades, manicured landscape boulevards, and premium community club pavilions.",
    detailedText: "Master planning and architectural consultancy in association with Eldeco. Focuses on seamless vehicular circulation, pedestrian green belts, and iconic contemporary facades.",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
    ],
    location: "Greater Noida",
    year: 2025,
    area: "45,000 sq.ft",
    featured: true,
    stats: {
      duration: "18 Months",
      style: "Contemporary Urban Township",
      clientType: "Eldeco Group",
      entity: "Ar. Abhishek Singh"
    }
  },
  {
    title: "Diviniti Homes Enclave",
    subtitle: "Integrated Residential & Architectural Development",
    category: "Builders & Developers",
    description: "Exclusive residential development with symmetrical facades, landscaped gardens, private driveways, and sustainable rainwater harvesting.",
    detailedText: "Architectural design and structural engineering executed for Diviniti Homes in Kanpur, delivering high aesthetic value, structural resilience, and efficient floor plans.",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
    ],
    location: "Kanpur, UP",
    year: 2026,
    area: "32,000 sq.ft",
    featured: true,
    stats: {
      duration: "14 Months",
      style: "Modern Suburban Architecture",
      clientType: "Diviniti Homes",
      entity: "Ar. Abhishek Singh"
    }
  },
  {
    title: "JK Tyre Lakshar Plant Campus",
    subtitle: "Industrial Complex & Executive Facility",
    category: "Industrial",
    description: "Heavy-duty industrial infrastructure paired with a modern administrative wing, climate-resilient facade louvers, and sustainable campus zoning.",
    detailedText: "Comprehensive industrial design for JK Tyre's Lakshar Plant facility. Included master spatial routing for logistics, executive briefing suites, and robust industrial civil works.",
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85"
    ],
    location: "Lakshar Plant",
    year: 2024,
    area: "55,000 sq.ft",
    featured: true,
    stats: {
      duration: "16 Months",
      style: "Heavy Industrial & Institutional",
      clientType: "JK Tyre",
      entity: "Genrev Architronics Enterprises"
    }
  },
  {
    title: "Paharpur 3P Industrial Facility",
    subtitle: "Industrial Complex & Production Architecture",
    category: "Industrial",
    description: "Specialized high-capacity industrial plant layout featuring wide-span steel portals, cleanroom environments, and executive offices.",
    detailedText: "Turnkey industrial engineering and architectural planning for Paharpur 3P, optimizing machine footprint, fire safety compliance, and energy-efficient lighting.",
    images: [
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=85"
    ],
    location: "Industrial Corridor",
    year: 2025,
    area: "60,000 sq.ft",
    featured: false,
    stats: {
      duration: "15 Months",
      style: "Engineered Industrial",
      clientType: "Paharpur 3P",
      entity: "Genrev Architronics Enterprises"
    }
  },
  {
    title: "D’Cott by Donear Flagship Store",
    subtitle: "Luxury Apparel Retail Showroom",
    category: "Retail",
    description: "Chic luxury retail environment with brass hanging rails, custom warm accent lighting, Italian terrazzo display islands, and VIP trial lounges.",
    detailedText: "Complete retail turnkey fit-out for D'Cott by Donear. Engineered for maximum merchandise visual appeal, intuitive customer flow, and high footfall durability.",
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85"
    ],
    location: "Prime Retail Mall, Delhi NCR",
    year: 2026,
    area: "3,800 sq.ft",
    featured: true,
    stats: {
      duration: "8 Weeks",
      style: "Luxury Commercial Retail",
      clientType: "Donear Group",
      entity: "Genrev INTERIO Pvt. Ltd."
    }
  },
  {
    title: "IFS Diplomatic Villa",
    subtitle: "Diplomatic Private Estate & Grounds",
    category: "Residential",
    description: "Stately 3-story private diplomatic villa featuring security-integrated landscaped perimeter, double-height foyer, and handcrafted Italian marble floors.",
    detailedText: "Architectural and interior masterwork designed by Ar. Abhishek Singh. Combines neoclassical grandeur with modern smart-home automation and acoustic serenity.",
    images: [
      "/projects/villa_facade.jpg",
      "/projects/villa_living.jpg",
      "/projects/villa_porch.jpg"
    ],
    location: "Diplomatic Enclave, Delhi NCR",
    year: 2025,
    area: "9,200 sq.ft",
    featured: true,
    stats: {
      duration: "14 Months",
      style: "Diplomatic Grandeur",
      clientType: "IFS Officer Residence",
      entity: "Ar. Abhishek Singh"
    }
  },
  {
    title: "Verma Sir – 4 BHK Luxury Interior",
    subtitle: "Turnkey High-End Residential Fit-Out",
    category: "Turnkey Interiors",
    description: "Grand 4 BHK residence with bespoke fluted veneer TV paneling, Italian Statuario marble floors, imported chandeliers, and German modular kitchen.",
    detailedText: "Comprehensive turnkey interior transformation by Genrev Interio. From complete civil realignment, false ceiling acoustic troughs, to customized luxury furniture.",
    images: [
      "/projects/villa_living.jpg",
      "/projects/luxury_kitchen.jpg",
      "/projects/townhouse_bedroom.jpg"
    ],
    location: "Sector 150, Noida",
    year: 2026,
    area: "2,850 sq.ft",
    featured: true,
    stats: {
      duration: "3.5 Months",
      style: "Contemporary Luxury & Vastu",
      clientType: "Verma Sir",
      entity: "Genrev INTERIO Pvt. Ltd."
    }
  },
  {
    title: "Ritika – 2 BHK Modern Flat",
    subtitle: "Turnkey Space-Optimized Urban Interior",
    category: "Turnkey Interiors",
    description: "Cleverly planned 2 BHK flat maximizing natural sunlight with fluted glass partitions, concealed storage beds, and warm neutral tones.",
    detailedText: "Full turnkey interior execution delivered on time and within budget. Includes custom modular kitchen, designer vanity bathrooms, and accent cove lighting.",
    images: [
      "/projects/townhouse_living.jpg",
      "/projects/townhouse_bedroom.jpg",
      "/projects/luxury_kitchen.jpg"
    ],
    location: "Greater Noida West",
    year: 2026,
    area: "1,150 sq.ft",
    featured: false,
    stats: {
      duration: "7 Weeks",
      style: "Warm Scandinavian Modern",
      clientType: "Ritika",
      entity: "Genrev INTERIO Pvt. Ltd."
    }
  },
  {
    title: "Alok Sir – Private Architectural House",
    subtitle: "Custom Multi-Storey Residence & Terrace Garden",
    category: "Residential",
    description: "Geometric contemporary private residence with cantilevered balconies, vertical wooden louvers, and private rooftop entertainment deck.",
    detailedText: "End-to-end architectural planning and structural supervision by Ar. Abhishek Singh, featuring energy-efficient insulated facades and Vastu-compliant layout.",
    images: [
      "/projects/townhouse_day.jpg",
      "/projects/townhouse_night.jpg",
      "/projects/townhouse_bedroom.jpg"
    ],
    location: "Delhi NCR",
    year: 2025,
    area: "4,200 sq.ft",
    featured: false,
    stats: {
      duration: "10 Months",
      style: "Contemporary Minimalist",
      clientType: "Alok Sir",
      entity: "Ar. Abhishek Singh"
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
      clientType: "Industrialist Estate",
      entity: "Ar. Abhishek Singh"
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
      clientType: "Private Executive Family",
      entity: "Ar. Abhishek Singh"
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
    clientName: "Resolüt Partners Team",
    role: "Managing Partners",
    company: "Resolüt Partners",
    quote: "Working with Genrev Architronics and Ar. Abhishek Singh for our India law firm office was an outstanding experience. Acoustic isolation, partner chambers, and refined aesthetics are top tier.",
    projectType: "Corporate Atelier",
    rating: 5,
    isActive: true
  },
  {
    clientName: "Verma Sir",
    role: "Homeowner",
    company: "4 BHK Flat, Delhi NCR",
    quote: "Genrev Interio took complete turnkey ownership of our 4 BHK. The Italian marble finishing, concealed warm profile lights, and master bedroom woodwork reflect sheer craftsmanship.",
    projectType: "Turnkey Interior",
    rating: 5,
    isActive: true
  }
];

const seedClients = [
  // 🏢 Corporate / Commercial
  {
    name: "Resolüt Partners",
    subtitle: "Law Firm, India Office",
    category: "Corporate / Commercial",
    location: "Delhi NCR",
    entity: "Genrev Architronics Enterprises"
  },
  {
    name: "Expedite",
    subtitle: "IT Corporate Office",
    category: "Corporate / Commercial",
    location: "Corporate Tech Park",
    entity: "Genrev INTERIO Pvt. Ltd."
  },
  {
    name: "Anup Sir",
    subtitle: "Corporate Office",
    category: "Corporate / Commercial",
    location: "Commercial Hub",
    entity: "Ar. Abhishek Singh"
  },
  {
    name: "Varun Bhai",
    subtitle: "Corporate Office",
    category: "Corporate / Commercial",
    location: "Executive Tower",
    entity: "Genrev Architronics Enterprises"
  },

  // 🏗️ Builders & Developers
  {
    name: "Diviniti Homes",
    subtitle: "Integrated Township",
    category: "Builders & Developers",
    location: "Kanpur",
    entity: "Ar. Abhishek Singh"
  },
  {
    name: "Grace Land Developers",
    subtitle: "Modern Housing Projects",
    category: "Builders & Developers",
    location: "Kanpur",
    entity: "Genrev Architronics Enterprises"
  },
  {
    name: "PD Gooba Garden",
    subtitle: "Residential Community",
    category: "Builders & Developers",
    location: "Kanpur",
    entity: "Ar. Abhishek Singh"
  },
  {
    name: "Eldeco",
    subtitle: "High-Rise & Townships",
    category: "Builders & Developers",
    location: "Greater Noida",
    entity: "Genrev INTERIO Pvt. Ltd."
  },
  {
    name: "Dasnac",
    subtitle: "Luxury Architecture & Developments",
    category: "Builders & Developers",
    location: "Delhi NCR",
    entity: "Genrev Architronics Enterprises"
  },
  {
    name: "Ritu Housing",
    subtitle: "Urban Residential Township",
    category: "Builders & Developers",
    location: "Delhi NCR",
    entity: "Ar. Abhishek Singh"
  },

  // 🏭 Industrial
  {
    name: "JK Tyre",
    subtitle: "Lakshar Plant Facility",
    category: "Industrial",
    location: "Lakshar",
    entity: "Genrev Architronics Enterprises"
  },
  {
    name: "Paharpur 3P",
    subtitle: "Industrial Complex & Engineering",
    category: "Industrial",
    location: "Industrial Corridor",
    entity: "Genrev Architronics Enterprises"
  },
  {
    name: "Foundation Charitable Trust",
    subtitle: "Institutional Campus & Welfare",
    category: "Industrial",
    location: "Institutional Zone",
    entity: "Ar. Abhishek Singh"
  },

  // 🛍️ Retail
  {
    name: "D’Cott by Donear",
    subtitle: "Retail Brand Flagship Store",
    category: "Retail",
    location: "Prime Retail Mall",
    entity: "Genrev INTERIO Pvt. Ltd."
  },

  // 🛋️ Interior Projects
  {
    name: "Ritika",
    subtitle: "2 BHK Flat Turnkey Interior",
    category: "Turnkey Interiors",
    location: "Delhi NCR",
    entity: "Genrev INTERIO Pvt. Ltd."
  },
  {
    name: "Verma Sir",
    subtitle: "4 BHK Flat Luxury Interior",
    category: "Turnkey Interiors",
    location: "Delhi NCR",
    entity: "Genrev INTERIO Pvt. Ltd."
  },

  // 🏠 Residential / Villas
  {
    name: "Alok Sir",
    subtitle: "House / Bespoke Residence",
    category: "Residential",
    location: "Delhi NCR",
    entity: "Ar. Abhishek Singh"
  },
  {
    name: "IFS Villa",
    subtitle: "Diplomatic Luxury Villa",
    category: "Residential",
    location: "Diplomatic Enclave",
    entity: "Ar. Abhishek Singh"
  },
  {
    name: "Genrev Architronics Studio",
    subtitle: "Architecture & Interio Atelier",
    category: "Corporate / Commercial",
    location: "Greater Noida & Kanpur",
    entity: "Combined Master Studio"
  }
];

module.exports = {
  seedProjects,
  seedTestimonials,
  seedClients
};
