export type MachineProduct = {
  slug: string;
  name: string;
  series: string;
  type: string;
  status: string;
  accent: string;
  summary: string;
  longSummary: string;
  features: string[];
  specs: Record<string, string>;
  colors: string[];
  images: string[];
  compareTag: string;
  category: "machines";
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

export type BrochureAsset = {
  title: string;
  caption: string;
  image: string;
};

export type EventItem = {
  city: string;
  venue: string;
  date: string;
};

export const siteNav = [
  { label: "HOME", href: "/" },
  { label: "MACHINES", href: "/collections/machines" },
  { label: "BLOG", href: "/blog" },
  { label: "ABOUT", href: "/about-us" },
  { label: "FAQ", href: "/faq" },
  { label: "CONTACT", href: "/pages/contact" }
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

export const seriesChapters = [
  {
    id: "short-pen",
    series: "Battery Short Pen",
    headline: "J-7, L-9 & P-8.",
    copy: "Three compact battery pens with a brushless motor, 4.0 mm stroke, and distinct finish options.",
    href: "/collections/machines#short-pen",
    image: "/products/P82.png"
  },
  {
    id: "stroke-pen",
    series: "Battery Stroke Pen",
    headline: "RS.",
    copy: "A battery stroke pen with adjustable stroke length, OLED display, and three finish options.",
    href: "/collections/machines#stroke-pen",
    image: "/products/RS1.png"
  }
];

export const companyStrengths = [
  {
    title: "Verified lineup",
    text: "The catalog presents J-7, L-9, P-8, and RS with finishes and specs aligned to the HPTA USA store."
  },
  {
    title: "Local product visuals",
    text: "Product and packaging photography is supplied locally for a consistent, reliable presentation."
  },
  {
    title: "Credible company record",
    text: "HPTA is presented under SEISHIN CO., LIMITED with Hong Kong registration details available on request."
  }
];

export const brochureAssets: BrochureAsset[] = [
  {
    title: "Cover + headquarters",
    caption: "A brochure cover that immediately shows factory scale and brand presence.",
    image: "/brochure/cover.png"
  },
  {
    title: "Office + factory footprint",
    caption: "A combined view of office space and the 7500m² factory floor.",
    image: "/brochure/factory.png"
  },
  {
    title: "Workshop + QC",
    caption: "Assembly lines, inspection stations, and the quality-control process.",
    image: "/brochure/workshop-qc.png"
  }
];

export const factoryMetrics = [
  { value: "7500m²", label: "Factory space" },
  { value: "100+", label: "Employees" },
  { value: "2000", label: "Origin in tattoo culture" },
  { value: "QC", label: "Dedicated inspection" }
];

const shortPenSpecs = {
  Material: "Aluminum",
  Stroke: "4.0 mm",
  Motor: "Brushless motor 8V 6500RPM",
  Battery: "1500 mAh",
  "Charge time": "Approx. 2.5 hours",
  "Run time": "Approx. 4.5 hours at 8V",
  "Operating voltage": "4–12 V",
  Charging: "USB-C"
};

export const machineProducts: MachineProduct[] = [
  {
    slug: "j7",
    name: "J-7",
    series: "Battery Short Pen",
    type: "Battery Tattoo Pen",
    status: "Available for inquiry",
    accent: "Black / Blue / Green",
    summary: "Compact battery tattoo pen with a brushless motor and 4.0 mm stroke.",
    longSummary: "J-7 is a battery short pen in Black, Blue, and Green. Specs match the HPTA USA catalog.",
    features: ["Brushless motor 8V 6500RPM", "4.0 mm stroke", "1500 mAh battery", "USB-C charging", "Three finish options"],
    specs: {
      Model: "J-7",
      Type: "Battery short pen",
      Finishes: "Black / Blue / Green",
      ...shortPenSpecs
    },
    colors: ["Black", "Blue", "Green"],
    images: [
      "/products/J74.png",
      "/products/J76.png",
      "/products/J72.png",
      "/products/J73.png",
      "/products/J75.png",
      "/products/J71.png",
      "/products/Box_J7a.png",
      "/products/Box_J7.png"
    ],
    compareTag: "J-7",
    category: "machines"
  },
  {
    slug: "l9",
    name: "L-9",
    series: "Battery Short Pen",
    type: "Battery Tattoo Pen",
    status: "Available for inquiry",
    accent: "Brown / Black / Purple",
    summary: "Compact battery tattoo pen with a brushless motor and 4.0 mm stroke.",
    longSummary: "L-9 is a battery short pen in Brown, Black, and Purple. Specs match the HPTA USA catalog.",
    features: ["Brushless motor 8V 6500RPM", "4.0 mm stroke", "1500 mAh battery", "USB-C charging", "Three finish options"],
    specs: {
      Model: "L-9",
      Type: "Battery short pen",
      Finishes: "Brown / Black / Purple",
      ...shortPenSpecs
    },
    colors: ["Brown", "Black", "Purple"],
    images: [
      "/products/L93.png",
      "/products/L91.png",
      "/products/L92.png",
      "/products/Box_L9.png"
    ],
    compareTag: "L-9",
    category: "machines"
  },
  {
    slug: "p8",
    name: "P-8",
    series: "Battery Short Pen",
    type: "Battery Tattoo Pen",
    status: "Available for inquiry",
    accent: "Silver / Gold / Brown",
    summary: "Compact battery tattoo pen with a brushless motor and 4.0 mm stroke.",
    longSummary: "P-8 is a battery short pen in Silver, Gold, and Brown. Specs match the HPTA USA catalog.",
    features: ["Brushless motor 8V 6500RPM", "4.0 mm stroke", "1500 mAh battery", "USB-C charging", "Three finish options"],
    specs: {
      Model: "P-8",
      Type: "Battery short pen",
      Finishes: "Silver / Gold / Brown",
      ...shortPenSpecs
    },
    colors: ["Silver", "Gold", "Brown"],
    images: [
      "/products/P82.png",
      "/products/P81.png",
      "/products/P83.png",
      "/products/Box_P8.png"
    ],
    compareTag: "P-8",
    category: "machines"
  },
  {
    slug: "rs",
    name: "RS",
    series: "Battery Stroke Pen",
    type: "Battery Stroke Pen",
    status: "Available for inquiry",
    accent: "Red / Silver / Black",
    summary: "Battery stroke pen with adjustable stroke length and an OLED display.",
    longSummary: "RS is a battery stroke pen in Red, Silver, and Black. Specs match the HPTA USA catalog.",
    features: ["Adjustable stroke 2.4–4.2 mm", "Motor 8V 6500RPM", "OLED color screen", "1800 mAh battery", "USB-C charging"],
    specs: {
      Model: "RS",
      Type: "Battery stroke pen",
      Material: "Aluminum",
      "Stroke length": "2.4 / 2.7 / 3.0 / 3.3 / 3.6 / 3.9 / 4.2 mm",
      Motor: "8V, 6500RPM",
      Display: "OLED high-definition color screen",
      "Output voltage": "4–12 V",
      "Input voltage": "DC 5V / 1–2 A",
      "Charging port": "USB-C",
      "Battery capacity": "1800 mAh",
      "Charge time": "Approx. 2.5 hours",
      "Average run time": "Approx. 8 hours",
      "Net weight": "275 g",
      Size: "φ37 × 141 mm",
      Finishes: "Red / Silver / Black"
    },
    colors: ["Red", "Silver", "Black"],
    images: [
      "/products/RS3.png",
      "/products/RS1.png",
      "/products/RS2.png",
      "/products/Box_RS.png"
    ],
    compareTag: "RS",
    category: "machines"
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
    title: "Products and lineup",
    items: [
      {
        q: "Which models are currently available?",
        a: "The current lineup includes J-7, L-9, P-8 battery short pens and the RS battery stroke pen."
      },
      {
        q: "What information is shown on each product page?",
        a: "Each page lists model, motor, stroke, battery, finish, and related specs aligned with the HPTA USA catalog. Pricing is shared on inquiry."
      }
    ]
  },
  {
    title: "Inquiry and support",
    items: [
      {
        q: "How do I request pricing or availability?",
        a: "Use the Inquire button on any machine or open the Contact page. Include your studio or distributor details and the models you need."
      },
      {
        q: "Who is the legal entity behind HPTA?",
        a: "HPTA is presented by SEISHIN CO., LIMITED. Company registration details are listed on the About page."
      }
    ]
  },
  {
    title: "Shipping and warranty",
    items: [
      {
        q: "Do you ship internationally?",
        a: "Shipping options and timelines are confirmed during inquiry based on region and order volume."
      },
      {
        q: "What if a machine arrives damaged?",
        a: "Contact us with photos and order details. Warranty and return handling is arranged case by case."
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
    "HPTA collects inquiry details only to respond to product and partnership requests. Do not submit sensitive personal data through the static contact form.",
  refund:
    "Returns and warranty handling are arranged after inquiry confirmation. Contact us with order details and photos for damaged goods.",
  shipping:
    "Shipping options and timelines are confirmed during inquiry based on region and volume.",
  terms:
    "Site content describes the HPTA product assortment for informational purposes. Replace policy text with your official terms before commercial launch."
};

export function getProductBySlug(slug: string) {
  return machineProducts.find((product) => product.slug === slug);
}

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export const featuredMachines = machineProducts.slice(0, 4);
