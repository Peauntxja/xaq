export type MachineProduct = {
  slug: string;
  name: string;
  series: string;
  type: string;
  price: number;
  status: string;
  accent: string;
  summary: string;
  longSummary: string;
  features: string[];
  specs: Record<string, string>;
  colors: string[];
  images: string[];
  manualUrl: string;
  compareTag: string;
  category: "machines" | "accessories" | "kits" | "sale";
};

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
};

export type FAQSection = {
  title: string;
  items: Array<{ q: string; a: string }>;
};

export type TeamMember = {
  name: string;
  role: string;
  note: string;
};

export type CompanyProfile = {
  legalName: string;
  registryName: string;
  businessRegistrationNo: string;
  status: string;
  commencedOn: string;
  issuedOn: string;
  address: string;
};

export type EventItem = {
  city: string;
  venue: string;
  date: string;
};

export const siteNav = [
  { label: "HOME", href: "/" },
  { label: "TATTOO MACHINES", href: "/collections/machines" },
  { label: "ACCESSORIES", href: "/collections/accessories" },
  { label: "COMPANY", href: "/about-us" }
];

export const companyProfile: CompanyProfile = {
  legalName: "SEISHIN CO., LIMITED",
  registryName: "星辰新國際有限公司",
  businessRegistrationNo: "77254747-000-10-24-4",
  status: "Body corporate",
  commencedOn: "30/10/2024",
  issuedOn: "9 May 2025",
  address: "FLAT/RM 602, 6/F, KAI YUE COMMERCIAL BUILDING, No.2C ARGYLE STREET, MONGKOK, KL"
};

export const companyStrengths = [
  {
    title: "Official company record",
    text: "Hong Kong registration details and business address are ready to surface in a buyer-facing profile."
  },
  {
    title: "Wholesale-first structure",
    text: "The catalog, inquiry flow, and support pages are arranged for distributors, studios, and resellers."
  },
  {
    title: "Clear product depth",
    text: "Product families, compare tools, and manuals make the site feel like a proper B2B catalog."
  }
];

export const machineProducts: MachineProduct[] = [
  {
    slug: "avenger-2-pro",
    name: "Avenger 2 Pro",
    series: "Avenger Series",
    type: "Hybrid / Rotary",
    price: 1347,
    status: "In stock",
    accent: "Money Maker / Space / Firestarter",
    summary:
      "MultiStroke hybrid with six stroke lengths, SkinResponse feedback, and a balanced wired setup for disciplined line and shade work.",
    longSummary:
      "Avenger 2 Pro is the wired entry in the Avenger family. It keeps the MultiStroke system, the SkinResponse feel, and the recycled aluminum body while staying direct, compact, and easy to explain on a product page.",
    features: [
      "6 stroke lengths",
      "SkinResponse feel",
      "10.5W M2 motor",
      "Low vibration body",
      "Classic needle compatible"
    ],
    specs: {
      Stroke: "3.2 / 3.5 / 3.8 / 4.2 / 4.7 / 5.5 mm",
      Motor: "10.5W M2",
      Weight: "135 g",
      Compatibility: "Classic needles and cartridges",
      Material: "Recycled aluminum parts"
    },
    colors: ["Money Maker", "Space", "Firestarter", "Cosmic Magic"],
    images: [
      "https://hptausa.com/cdn/shop/files/J74.png?v=1783313487&width=1600",
      "https://hptausa.com/cdn/shop/files/J73.png?v=1783313487&width=1600",
      "https://hptausa.com/cdn/shop/files/J75.png?v=1783313487&width=1600"
    ],
    manualUrl: "https://cdn.shopify.com/s/files/1/0980/8628/9712/files/Instruction_Manual.pdf?v=1783400220",
    compareTag: "Wired hybrid starter",
    category: "machines"
  },
  {
    slug: "avenger-3-pro",
    name: "Avenger 3 Pro",
    series: "Avenger Series",
    type: "Wireless Hybrid / Rotary",
    price: 1477,
    status: "Pre-order",
    accent: "Money Maker / Nickel / Old Petroleum",
    summary:
      "Wireless Avenger with MultiStroke control, improved ergonomics, and a premium finish story for limited editions.",
    longSummary:
      "Avenger 3 Pro moves the Avenger language into a wireless body. It keeps the six stroke modes and the SkinResponse idea, then layers in the visual language of the limited editions and colorway-heavy variants.",
    features: [
      "Wireless runtime",
      "6 stroke modes",
      "M3Pro motor",
      "Ergonomic grip",
      "Limited editions"
    ],
    specs: {
      Stroke: "3.2 / 3.5 / 3.8 / 4.2 / 4.7 / 5.5 mm",
      Motor: "M3Pro",
      Runtime: "5-8+ hours",
      Weight: "Varies by model",
      Finish: "Multiple colorways"
    },
    colors: ["Money Maker", "Nickel", "Old Petroleum", "Space", "Cosmic Magic"],
    images: [
      "https://hptausa.com/cdn/shop/files/J73.png?v=1783313487&width=1600",
      "https://hptausa.com/cdn/shop/files/J75.png?v=1783313487&width=1600",
      "https://hptausa.com/cdn/shop/files/J74.png?v=1783313487&width=1600"
    ],
    manualUrl: "https://cdn.shopify.com/s/files/1/0980/8628/9712/files/Instruction_Manual.pdf?v=1783400220",
    compareTag: "Wireless premium",
    category: "machines"
  },
  {
    slug: "avenger-4-pro",
    name: "Avenger 4 Pro",
    series: "Avenger Series",
    type: "Wireless Hybrid / Rotary",
    price: 1597,
    status: "In stock",
    accent: "Morning Champagne / Blackout / Firestarter",
    summary:
      "Newest Avenger flagship with six stroke modes, Antigravity balance, and the cleanest long-session story in the range.",
    longSummary:
      "Avenger 4 Pro is the pinnacle machine in the Avenger family. It keeps the fast stroke switching, adds the Anti-Gravity system, and presents the most polished story for the range.",
    features: [
      "6 stroke modes",
      "Anti-Gravity system",
      "M3Pro brushless motor",
      "Universal cartridge compatibility",
      "Lightweight balance"
    ],
    specs: {
      Stroke: "3.2 / 3.5 / 3.8 / 4.2 / 4.7 / 5.5 mm",
      Motor: "M3Pro brushless",
      Control: "3 physical buttons",
      Weight: "Lightweight balanced design",
      Finish: "Multiple colorways"
    },
    colors: ["Morning Champagne", "Blackout", "Firestarter", "Space"],
    images: [
      "https://hptausa.com/cdn/shop/files/J71.png?v=1783313486&width=1600",
      "https://hptausa.com/cdn/shop/files/J74.png?v=1783313487&width=1600",
      "https://hptausa.com/cdn/shop/files/J75.png?v=1783313487&width=1600"
    ],
    manualUrl: "https://cdn.shopify.com/s/files/1/0980/8628/9712/files/Instruction_Manual.pdf?v=1783400220",
    compareTag: "Flagship hybrid",
    category: "machines"
  },
  {
    slug: "ultron-2",
    name: "Ultron 2",
    series: "Ultron Series",
    type: "Rotary Pen",
    price: 499,
    status: "In stock",
    accent: "Classic Light / Big Light / Premium Heavy Grip",
    summary:
      "Lightweight reliable pen for lining, solid black, and daily use with a clear grip story.",
    longSummary:
      "Ultron 2 is the classic pen-style machine in the lineup. It keeps the form factor familiar, adds grip choices, and stays approachable as the long-term daily driver for the catalog.",
    features: ["Lightweight body", "3 grip options", "Reliable lining", "Dotwork friendly", "Wired setup"],
    specs: {
      Material: "Aluminum",
      Weight: "Varies by grip",
      Use: "Lining and black work",
      Mount: "Classic pen format"
    },
    colors: ["Classic Light", "Big Light", "Premium Heavy Grip"],
    images: [
      "https://hptausa.com/cdn/shop/files/L93.png?v=1783313488&width=1600",
      "https://hptausa.com/cdn/shop/files/Box_L9.png?v=1783475149&width=1600"
    ],
    manualUrl: "https://cdn.shopify.com/s/files/1/0980/8628/9712/files/Instruction_Manual.pdf?v=1783400220",
    compareTag: "Classic pen driver",
    category: "machines"
  },
  {
    slug: "ultron-3",
    name: "Ultron 3",
    series: "Ultron Series",
    type: "Wireless Rotary Pen",
    price: 699,
    status: "In stock",
    accent: "Money Maker / Nickel / Space / Firestarter",
    summary:
      "Compact wireless pen with low vibration, Hall effect sensors, and a balanced center of gravity near the grip.",
    longSummary:
      "Ultron 3 is the wireless leap in the Ultron family. It is compact, low vibration, and tuned to read like the everyday premium pen that still feels technical without becoming heavy.",
    features: [
      "Wireless operation",
      "12.6W brushless motor",
      "Hall effect sensors",
      "5-8+ hour battery",
      "Fast charging"
    ],
    specs: {
      Motor: "Brushless 12.6W",
      Battery: "5-8+ hours",
      Weight: "~190-200 g typical",
      Balance: "Center of gravity near grip",
      Finish: "Multiple artist editions"
    },
    colors: ["Money Maker", "Nickel", "Space", "Firestarter", "Camo"],
    images: [
      "https://hptausa.com/cdn/shop/files/P82.png?v=1783313488&width=1600",
      "https://hptausa.com/cdn/shop/files/P81.png?v=1783313490&width=1600",
      "https://hptausa.com/cdn/shop/files/P83.png?v=1783313487&width=1600"
    ],
    manualUrl: "https://cdn.shopify.com/s/files/1/0980/8628/9712/files/Instruction_Manual.pdf?v=1783400220",
    compareTag: "Wireless daily driver",
    category: "machines"
  },
  {
    slug: "ultron-4-pro",
    name: "Ultron 4 Pro",
    series: "Ultron Series",
    type: "Wireless Rotary Pen",
    price: 899,
    status: "In stock",
    accent: "Morning Champagne / Blackout / Firestarter",
    summary:
      "Flagship all-in-one pen with MultiStroke, SmartHit response, and the biggest technical stack in the range.",
    longSummary:
      "Ultron 4 Pro is the most complete pen in the current range. It combines MultiStroke, SmartHit, DirectPower, and a 4000 mAh battery into one polished demo machine.",
    features: [
      "MultiStroke system",
      "SmartHit adaptive modes",
      "DirectPower motor",
      "4000 mAh battery",
      "Up to 22 hours runtime"
    ],
    specs: {
      Stroke: "3.2 / 3.5 / 3.8 / 4.2 / 4.7 / 5.5 mm",
      Motor: "M3Ultra with DirectPower",
      Battery: "4000 mAh",
      Runtime: "Up to 22 hours",
      Weight: "272 g"
    },
    colors: ["Morning Champagne", "Blackout", "Firestarter"],
    images: [
      "https://hptausa.com/cdn/shop/files/J74.png?v=1783313487&width=1600",
      "https://hptausa.com/cdn/shop/files/J73.png?v=1783313487&width=1600",
      "https://hptausa.com/cdn/shop/files/J75.png?v=1783313487&width=1600"
    ],
    manualUrl: "https://cdn.shopify.com/s/files/1/0980/8628/9712/files/Instruction_Manual.pdf?v=1783400220",
    compareTag: "Flagship pen",
    category: "machines"
  },
  {
    slug: "fine-liner-pro",
    name: "Fine Liner Pro",
    series: "Coil Series",
    type: "Coil",
    price: 399,
    status: "In stock",
    accent: "Blood Money / Old Petroleum / Bubble Gum",
    summary:
      "Premium coil liner tuned for sharp, controlled one-pass lines and a precise skin feel.",
    longSummary:
      "Fine Liner Pro keeps the coil feel in the catalog. It is tuned for fine to medium linework, makes the frame story visible, and stays purpose-built instead of trying to do everything at once.",
    features: ["Steel frame", "SuperJaws vise", "Needle stabilizer", "Longlife Monospring", "Factory tuned"],
    specs: {
      Weight: "198-199 g",
      Frame: "Premium steel",
      Lines: "3-9RL",
      Connector: "Built-in RCA",
      Feedback: "Controlled hit"
    },
    colors: ["Blood Money", "Old Petroleum", "Bubble Gum"],
    images: ["https://hptausa.com/cdn/shop/files/L93.png?v=1783313488&width=1600"],
    manualUrl: "https://cdn.shopify.com/s/files/1/0980/8628/9712/files/Instruction_Manual.pdf?v=1783400220",
    compareTag: "Fine line coil",
    category: "machines"
  },
  {
    slug: "infinite-liner-pro",
    name: "Infinite Liner Pro",
    series: "Coil Series",
    type: "Coil",
    price: 429,
    status: "Best seller",
    accent: "Vamp / Money Maker / Blood Money",
    summary:
      "Legendary medium-to-big grouping liner with a powerful controlled hit and stable frame geometry.",
    longSummary:
      "Infinite Liner Pro is the stronger coil liner in the range. It is built for bigger groupings, carries the same Pro-series hardware story, and makes the lineup feel broader than a single pen family.",
    features: ["7-18+RL", "Balanced frame geometry", "SuperJaws vise", "Precision armature bar", "Factory pre-tuned"],
    specs: {
      Weight: "199 g",
      Frame: "Premium steel",
      Use: "Medium to big line groupings",
      Connector: "Built-in RCA",
      Feedback: "Sharp and controlled"
    },
    colors: ["Vamp", "Money Maker", "Blood Money", "Old Petroleum"],
    images: ["https://hptausa.com/cdn/shop/files/J72.png?v=1783313488&width=1600"],
    manualUrl: "https://cdn.shopify.com/s/files/1/0980/8628/9712/files/Instruction_Manual.pdf?v=1783400220",
    compareTag: "Legendary liner",
    category: "machines"
  },
  {
    slug: "blacker-packer-pro",
    name: "Blacker Packer Pro",
    series: "Coil Series",
    type: "Coil",
    price: 449,
    status: "In stock",
    accent: "Blood Money / Old Petroleum / Bubble Gum",
    summary:
      "A packing-focused coil built for fast solid black and color work with larger needle groupings.",
    longSummary:
      "Blacker Packer Pro is the dedicated packing coil in the series. It gives the catalog a heavier black-and-fill posture and keeps the pages from feeling like every machine does the same job.",
    features: ["7-25+M needles", "Packing-focused", "SuperJaws vise", "Needle stabilizer", "Non-traumatic hit"],
    specs: {
      Weight: "~212 g",
      Frame: "Premium steel",
      Use: "Color packing and solid black",
      Connector: "Built-in RCA",
      Feedback: "Fast controlled hit"
    },
    colors: ["Blood Money", "Old Petroleum", "Bubble Gum"],
    images: ["https://hptausa.com/cdn/shop/files/P82.png?v=1783313488&width=1600"],
    manualUrl: "https://cdn.shopify.com/s/files/1/0980/8628/9712/files/Instruction_Manual.pdf?v=1783400220",
    compareTag: "Packing specialist",
    category: "machines"
  },
  {
    slug: "ultron-pen",
    name: "Ultron Pen",
    series: "Ultron Series",
    type: "Rotary Pen",
    price: 349,
    status: "Low stock",
    accent: "Black / Silver / Grey",
    summary:
      "Compact classic pen for thin lines, dense color packing, whip shading, and a broad needle range.",
    longSummary:
      "Ultron Pen gives the catalog a compact, classic option. It is the lightest page in the family, useful for smaller hand feel and for artists who want a simple pen without extra ceremony.",
    features: ["Compact body", "Thin to large needles", "Whip shading", "Autoclavable grips", "Simple daily use"],
    specs: {
      Body: "23.5 mm diameter",
      Weight: "~78.5 g without grip",
      Grip: "~104 g with thin grip",
      Use: "3-18RL and packing"
    },
    colors: ["Black", "Silver", "Grey"],
    images: ["https://hptausa.com/cdn/shop/files/J71.png?v=1783313486&width=1600"],
    manualUrl: "https://cdn.shopify.com/s/files/1/0980/8628/9712/files/Instruction_Manual.pdf?v=1783400220",
    compareTag: "Compact classic pen",
    category: "machines"
  }
];

export const accessories = [
  {
    slug: "standard-black-grip",
    name: "Standard Black Grip",
    price: 97,
    summary: "Simple grip upgrade for the Ultron 4 Pro family.",
    images: ["https://vladblad.com/image/cache/catalog/Accessories/grip-black-800x800.jpg"]
  },
  {
    slug: "borneo-footswitch-large",
    name: "Borneo Footswitch Large",
    price: 93,
    summary: "Ergonomic footswitch for long sessions and reliable triggering.",
    images: ["https://vladblad.com/image/cache/catalog/Accessories/footswitch-large-800x800.jpg"]
  },
  {
    slug: "slim-grip-pack",
    name: "Slim Grip Pack",
    price: 117,
    summary: "Pack for users who want a thinner hand feel across multiple machines.",
    images: ["https://vladblad.com/image/cache/catalog/Accessories/grip-pack-800x800.jpg"]
  },
  {
    slug: "rca-cable",
    name: "RCA Cable",
    price: 29,
    summary: "Stable low-profile cable for wired setups.",
    images: ["https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"]
  }
];

export const articles: Article[] = [
  {
    slug: "how-to-choose-the-right-machine",
    title: "How to choose the right machine",
    category: "Guide",
    excerpt: "A quick decision tree for linework, shading, color packing, and portability.",
    date: "2026-08-22"
  },
  {
    slug: "coil-vs-rotary",
    title: "Coil vs rotary",
    category: "Learn",
    excerpt: "Where the feel changes and why some artists still keep both on the bench.",
    date: "2026-08-18"
  },
  {
    slug: "battery-and-voltage-basics",
    title: "Battery and voltage basics",
    category: "Learn",
    excerpt: "What battery life really means once the machine is in motion.",
    date: "2026-08-14"
  },
  {
    slug: "maintaining-your-workhorse",
    title: "Maintaining your workhorse",
    category: "Care",
    excerpt: "A short checklist for keeping your setup consistent from session to session.",
    date: "2026-08-08"
  }
];

export const faqSections: FAQSection[] = [
  {
    title: "Ordering and payment",
    items: [
      {
        q: "What payment methods do you accept?",
        a: "This demo accepts credit card, Apple Pay, and PayPal placeholders. On the live site these would map to your actual checkout provider."
      },
      {
        q: "Can I cancel or change my order after it's placed?",
        a: "For the demo we show a standard cancellation policy window before fulfillment starts."
      },
      {
        q: "How long will it take to receive my order?",
        a: "Orders display the estimated shipping window directly on the product page."
      }
    ]
  },
  {
    title: "Shipping and delivery",
    items: [
      {
        q: "What are the shipping options and costs?",
        a: "The demo shows free shipping thresholds, domestic options, and an international fallback."
      },
      {
        q: "Can I track my order?",
        a: "Yes. The account page shows a mock shipment tracker and parcel status chips."
      }
    ]
  },
  {
    title: "Returns and exchanges",
    items: [
      {
        q: "What is your return policy?",
        a: "The demo uses a standard 14-day return window for unopened items and service-warranty handling for devices."
      },
      {
        q: "What should I do if I receive a damaged item?",
        a: "Use the contact form or the support card on the product page to start a return case."
      }
    ]
  }
];

export const teamMembers: TeamMember[] = [
  { name: "Mika", role: "Commercial Sales", note: "Supports distributor pricing, account setup, and line planning." },
  { name: "Ava", role: "Operations", note: "Coordinates stock visibility, packing, and shipment timing." },
  { name: "Jay", role: "Product Support", note: "Keeps manuals, specs, and technical questions organized." }
];

export const eventItems: EventItem[] = [
  { city: "Los Angeles", venue: "Convention Center", date: "2026-10-09" },
  { city: "Chicago", venue: "Tattoo Expo Hall", date: "2026-11-14" },
  { city: "New York", venue: "Artists Union", date: "2026-12-05" }
];

export const policyCopy = {
  privacy:
    "This demo site explains how a tattoo equipment store can present privacy, order, shipping, and warranty information without backend complexity.",
  refund:
    "Open the support contact form for returns, damaged items, or warranty questions. The live store can swap this mock text for your actual terms.",
  shipping:
    "Orders show shipping expectations, free-shipping thresholds, and manual handling notes. The delivery page can later connect to your real fulfillment flow.",
  terms:
    "All content is mock data for demo and review purposes only. Replace this with your official terms before launch."
};

export function getProductBySlug(slug: string) {
  return machineProducts.find((product) => product.slug === slug);
}

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getAccessoryBySlug(slug: string) {
  return accessories.find((item) => item.slug === slug);
}

export const featuredMachines = machineProducts.slice(0, 4);
