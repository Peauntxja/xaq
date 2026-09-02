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

export type EventItem = {
  city: string;
  venue: string;
  date: string;
};

export const siteNav = [
  { label: "HOME", href: "/" },
  { label: "STORE", href: "/collections/all" },
  { label: "MACHINES", href: "/collections/machines" },
  { label: "ACCESSORIES", href: "/collections/accessories" },
  { label: "SALE", href: "/sale" },
  { label: "ABOUT", href: "/about-us" },
  { label: "BLOG", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "CONTACT", href: "/pages/contact" }
];

export const machineProducts: MachineProduct[] = [
  {
    slug: "j-7",
    name: "J-7",
    series: "J Series",
    type: "Wireless rotary pen",
    price: 399,
    status: "In stock",
    accent: "Black / Blue / Green",
    summary: "Compact wireless machine for clean lining, shading, and everyday studio use.",
    longSummary:
      "J-7 is the launch-ready all-rounder in the HPTA lineup. It keeps the body light, the stroke stable, and the battery straightforward so artists can move between lining and shading without a lot of setup noise.",
    features: [
      "Aluminum body",
      "4.0 mm stroke",
      "Brushless 8V motor",
      "USB-C charging",
      "Color variant options"
    ],
    specs: {
      Material: "Aluminum",
      Stroke: "4.0 mm",
      Motor: "Brushless motor 8V 6500RPM",
      Battery: "1500 mAh",
      Charge: "Approx. 2.5 hours",
      Runtime: "Approx. 4.5 hours at 8V",
      Voltage: "4-12V",
      Charging: "USB-C"
    },
    colors: ["Black", "Blue", "Green"],
    images: [
      "https://hptausa.com/cdn/shop/files/J74.png?v=1783313487&width=1600",
      "https://hptausa.com/cdn/shop/files/J73.png?v=1783313487&width=1600",
      "https://hptausa.com/cdn/shop/files/J75.png?v=1783313487&width=1600",
      "https://hptausa.com/cdn/shop/files/J71.png?v=1783313486&width=1600"
    ],
    manualUrl: "https://cdn.shopify.com/s/files/1/0980/8628/9712/files/Instruction_Manual.pdf?v=1783400220",
    compareTag: "Wireless entry machine",
    category: "machines"
  },
  {
    slug: "l-9",
    name: "L-9",
    series: "L Series",
    type: "Rotary pen",
    price: 399,
    status: "In stock",
    accent: "Brown / Black / Purple",
    summary: "Balanced pen machine with a slightly more assertive feel for line-heavy work.",
    longSummary:
      "L-9 keeps the same clean product language as J-7 but leans a little more into linework confidence. It is meant for artists who want a simple daily driver with a visibly different colorway story.",
    features: ["Aluminum frame", "4.0 mm stroke", "Brushless motor", "Color variants", "Manual included"],
    specs: {
      Material: "Aluminum",
      Stroke: "4.0 mm",
      Motor: "Brushless motor 8V 6500RPM",
      Battery: "1500 mAh",
      Charge: "Approx. 2.5 hours",
      Runtime: "Approx. 4.5 hours at 8V",
      Voltage: "4-12V",
      Charging: "USB-C"
    },
    colors: ["Brown", "Black", "Purple"],
    images: [
      "https://hptausa.com/cdn/shop/files/L93.png?v=1783313488&width=1600",
      "https://hptausa.com/cdn/shop/files/Box_L9.png?v=1783475149&width=1600"
    ],
    manualUrl: "https://cdn.shopify.com/s/files/1/0980/8628/9712/files/Instruction_Manual.pdf?v=1783400220",
    compareTag: "Balanced daily driver",
    category: "machines"
  },
  {
    slug: "p-8",
    name: "P-8",
    series: "P Series",
    type: "Rotary pen",
    price: 399,
    status: "In stock",
    accent: "Silver / Gold / Brown",
    summary: "More premium-looking chassis with a versatile feel for shading and packing.",
    longSummary:
      "P-8 sits in the same launch family but reads as the more premium visual option. The colors and packaging are tuned for artists who want something a little more showroom-ready.",
    features: ["Aluminum body", "USB-C charging", "Reliable motor", "Premium finish", "Manual included"],
    specs: {
      Material: "Aluminum",
      Stroke: "4.0 mm",
      Motor: "Brushless motor 8V 6500RPM",
      Battery: "1500 mAh",
      Charge: "Approx. 2.5 hours",
      Runtime: "Approx. 4.5 hours at 8V",
      Voltage: "4-12V",
      Charging: "USB-C"
    },
    colors: ["Silver", "Gold", "Brown"],
    images: [
      "https://hptausa.com/cdn/shop/files/P82.png?v=1783313488&width=1600",
      "https://hptausa.com/cdn/shop/files/P81.png?v=1783313490&width=1600",
      "https://hptausa.com/cdn/shop/files/P83.png?v=1783313487&width=1600",
      "https://hptausa.com/cdn/shop/files/Box_P8.png?v=1783475150&width=1600"
    ],
    manualUrl: "https://cdn.shopify.com/s/files/1/0980/8628/9712/files/Instruction_Manual.pdf?v=1783400220",
    compareTag: "Premium finish rotary",
    category: "machines"
  },
  {
    slug: "rs",
    name: "RS",
    series: "RS Series",
    type: "Wireless rotary with OLED display",
    price: 399,
    status: "In stock",
    accent: "Red / Silver / Black",
    summary: "Most feature-rich mock machine in the current HPTA lineup with OLED readout and longer stroke range.",
    longSummary:
      "RS is the page that carries the richest spec stack. It provides the clearest demo of how the shop can present a more technical flagship machine with richer documentation and long-form product copy.",
    features: [
      "7 stroke positions",
      "OLED high-definition color screen",
      "1800 mAh battery",
      "Approx. 8 hour runtime",
      "USB-C charging"
    ],
    specs: {
      Material: "Aluminum",
      "Stroke Length": "2.4 / 2.7 / 3.0 / 3.3 / 3.6 / 3.9 / 4.2 mm",
      Motor: "8V, 6500RPM",
      Display: "OLED High-Definition Color Screen",
      Voltage: "4-12V",
      "Input Voltage": "DC 5V / 1-2 A",
      Charging: "USB-C",
      "Battery Capacity": "1800 mAh",
      "Charge Time": "Approx. 2.5 hours",
      "Average Run Time": "Approx. 8 hours",
      "Net Weight": "275 g",
      Size: "φ37 × 141 mm"
    },
    colors: ["Red", "Silver", "Black"],
    images: [
      "https://hptausa.com/cdn/shop/files/J74.png?v=1783313487&width=1600",
      "https://hptausa.com/cdn/shop/files/J73.png?v=1783313487&width=1600",
      "https://hptausa.com/cdn/shop/files/J75.png?v=1783313487&width=1600"
    ],
    manualUrl: "https://cdn.shopify.com/s/files/1/0980/8628/9712/files/Instruction_Manual.pdf?v=1783400220",
    compareTag: "Flagship mockup",
    category: "machines"
  },
  {
    slug: "avenger-4-pro",
    name: "Avenger 4 Pro",
    series: "Avenger",
    type: "Wireless hybrid / rotary",
    price: 1347,
    status: "Pre-order",
    accent: "Money Maker / Space / Firestarter / Cosmic Magic",
    summary: "Reference-style flagship with stroke switching and adaptive hit control.",
    longSummary:
      "Avenger 4 Pro is presented as the top-end reference machine: stroke switching, adaptive hit behavior, and a premium build story. It anchors the more advanced part of the catalog.",
    features: ["6 stroke modes", "Adaptive hit control", "USB-C removable battery", "Premium materials", "Artist finishes"],
    specs: {
      Stroke: "3.2 / 3.5 / 3.8 / 4.2 / 4.7 / 5.5 mm",
      Battery: "2400 / 4000 mAh Li-ion",
      Runtime: "Up to 13 / 22 hours",
      Motor: "M3Pro 12.6 W",
      Weight: "119 g without battery cap",
      Size: "119 mm long body",
      Control: "3 physical buttons, Start-Stop mode"
    },
    colors: ["Money Maker", "Space", "Firestarter", "Cosmic Magic"],
    images: ["https://hptausa.com/cdn/shop/files/J74.png?v=1783313487&width=1600"],
    manualUrl: "https://vladblad.com",
    compareTag: "Reference flagship",
    category: "machines"
  },
  {
    slug: "ultron-4-pro",
    name: "Ultron 4 Pro",
    series: "Ultron",
    type: "Wireless rotary pen",
    price: 1427,
    status: "In stock",
    accent: "Morning Champagne / Blackout / Firestarter",
    summary: "All-in-one pen with multi-stroke control and a strong premium positioning.",
    longSummary:
      "Ultron 4 Pro is the product page that best carries the rich technical narrative. It is meant for artists who expect a premium pen, long battery life, and detailed performance breakdowns.",
    features: ["MultiStroke system", "SmartHit adaptive response", "DirectPower motor", "4000 mAh battery", "22 hour runtime"],
    specs: {
      "Stroke Range": "3.2 / 3.5 / 3.8 / 4.2 / 4.7 / 5.5 mm",
      "SmartHit Modes": "Stable, Soft 1-3, Sharp 1-3",
      Motor: "M3Ultra with DirectPower",
      Battery: "4000 mAh",
      Runtime: "Up to 22 hours",
      Weight: "272 g",
      Size: "118 × 36-40 mm"
    },
    colors: ["Morning Champagne", "Blackout", "Firestarter"],
    images: ["https://hptausa.com/cdn/shop/files/P82.png?v=1783313488&width=1600"],
    manualUrl: "https://vladblad.com",
    compareTag: "Long-runtime premium pen",
    category: "machines"
  },
  {
    slug: "fine-liner-pro",
    name: "Fine Liner Pro",
    series: "Coil",
    type: "Coil machine",
    price: 549,
    status: "In stock",
    accent: "Blood Money / Old Petroleum / Bubble Gum",
    summary: "Fine line specialist with clear, crisp line control.",
    longSummary:
      "Fine Liner Pro is the coil-side answer for artists who still value the feel of a tuned liner. It is clean, technical, and intentionally tuned toward crisp linework.",
    features: ["Steel frame", "SuperJaws vise", "Needle stabilizer", "Longlife monospring", "Factory tuned"],
    specs: {
      Weight: "198 g",
      Frame: "Premium steel",
      Lines: "3-9RL",
      Connector: "Built-in RCA",
      Feedback: "Non-traumatic controlled hit"
    },
    colors: ["Blood Money", "Old Petroleum", "Bubble Gum"],
    images: ["https://hptausa.com/cdn/shop/files/L93.png?v=1783313488&width=1600"],
    manualUrl: "https://vladblad.com",
    compareTag: "Fine line coil",
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
  { name: "Mika", role: "Founder / Lead Artist", note: "Focuses on setup consistency and product selection." },
  { name: "Ava", role: "Ops + Logistics", note: "Handles shipping, availability, and launch stock." },
  { name: "Jay", role: "Tech Support", note: "Keeps manuals, specs, and support flows readable." }
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
