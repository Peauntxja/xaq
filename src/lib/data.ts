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
    headline: "J7, L9 & P8.",
    copy: "Three compact battery pen models with an outrunner brushless motor and distinct finish options.",
    href: "/collections/machines#short-pen",
    image: "/products/P82-1224b423-0749-42ad-8db4-83e7bdfd320f.jpg"
  },
  {
    id: "stroke-pen",
    series: "Battery Stroke Pen",
    headline: "RS.",
    copy: "A battery stroke pen with an iron-core motor and three finish options.",
    href: "/collections/machines#stroke-pen",
    image: "/products/RS1-f5cad8a3-9cb9-442c-b926-3eedc96d4597.jpg"
  }
];

export const companyStrengths = [
  {
    title: "Verified lineup",
    text: "The catalog presents four supplied HPTA machine models with confirmed motor, finish, and in-box details."
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

export const machineProducts: MachineProduct[] = [
  {
    slug: "j7",
    name: "J7",
    series: "Battery Short Pen",
    type: "Battery Tattoo Pen",
    status: "Available for inquiry",
    accent: "Coffee + Silver / Purple + Black / Green + Black",
    summary: "Compact battery tattoo pen with an outrunner brushless motor.",
    longSummary: "J7 is a battery short pen offered in three supplied finishes. It is presented with confirmed motor and in-box details only.",
    features: ["Outrunner brushless motor", "Battery-powered", "Three finish options", "Battery, cable, and packaging included"],
    specs: {
      Model: "J7",
      Type: "Battery short pen",
      Motor: "Outrunner brushless motor",
      Finishes: "Coffee + Silver / Purple + Black / Green + Black",
      "In the box": "1 battery · 1 charging cable · 1 set packaging"
    },
    colors: ["Coffee + Silver", "Purple + Black", "Green + Black"],
    images: [
      "/products/L93-5ad2b6ab-0367-4a27-9e98-d0a0ec1512fe.jpg",
      "/products/L92-7a8da9d6-4ebb-431c-af64-41c6dd458684.jpg",
      "/products/Box_J7-c7347a9a-5561-4b6b-9e12-53ceca40ac5e.jpg"
    ],
    compareTag: "J7",
    category: "machines"
  },
  {
    slug: "l9",
    name: "L9",
    series: "Battery Short Pen",
    type: "Battery Tattoo Pen",
    status: "Available for inquiry",
    accent: "Green + Black / Blue + Silver / Black + Red",
    summary: "Compact battery tattoo pen with an outrunner brushless motor.",
    longSummary: "L9 is a battery short pen supplied with three finish options and the standard battery, charging cable, and packaging set.",
    features: ["Outrunner brushless motor", "Battery-powered", "Three finish options", "Battery, cable, and packaging included"],
    specs: {
      Model: "L9",
      Type: "Battery short pen",
      Motor: "Outrunner brushless motor",
      Finishes: "Green + Black / Blue + Silver / Black + Red",
      "In the box": "1 battery · 1 charging cable · 1 set packaging"
    },
    colors: ["Green + Black", "Blue + Silver", "Black + Red"],
    images: [
      "/products/J75-f0da7519-2227-4cd0-8366-6d8a94911b70.jpg",
      "/products/Box_L9-2943a1c7-b382-48d7-a673-5b91136bb3e5.jpg"
    ],
    compareTag: "L9",
    category: "machines"
  },
  {
    slug: "p8",
    name: "P8",
    series: "Battery Short Pen",
    type: "Battery Tattoo Pen",
    status: "Available for inquiry",
    accent: "Silver White / Gold / Gunmetal",
    summary: "Compact battery tattoo pen with an outrunner brushless motor.",
    longSummary: "P8 is a battery short pen with three supplied finishes. Product imagery includes the silver white, gold, gunmetal, and boxed presentation.",
    features: ["Outrunner brushless motor", "Battery-powered", "Three finish options", "Battery, cable, and packaging included"],
    specs: {
      Model: "P8",
      Type: "Battery short pen",
      Motor: "Outrunner brushless motor",
      Finishes: "Silver White / Gold / Gunmetal",
      "In the box": "1 battery · 1 charging cable · 1 set packaging"
    },
    colors: ["Silver White", "Gold", "Gunmetal"],
    images: [
      "/products/P82-1224b423-0749-42ad-8db4-83e7bdfd320f.jpg",
      "/products/J76-0853f9e6-0507-4c6a-a706-05430de8673f.jpg",
      "/products/P81-198e31ce-499d-4c56-93cc-ae59eba63e2b.jpg",
      "/products/Box_P8-5054b293-aa7b-4056-8f00-5d45b24f748f.jpg"
    ],
    compareTag: "P8",
    category: "machines"
  },
  {
    slug: "rs",
    name: "RS",
    series: "Battery Stroke Pen",
    type: "Battery Stroke Pen",
    status: "Available for inquiry",
    accent: "Silver + Black / Black + Red / Red + Black",
    summary: "Battery stroke pen with an iron-core motor.",
    longSummary: "RS is a battery stroke pen supplied with an iron-core motor, three finish options, and the standard in-box set.",
    features: ["Iron-core motor", "Battery-powered", "Three finish options", "Battery, cable, and packaging included"],
    specs: {
      Model: "RS",
      Type: "Battery stroke pen",
      Motor: "Iron-core motor",
      Finishes: "Silver + Black / Black + Red / Red + Black",
      "In the box": "1 battery · 1 charging cable · 1 set packaging"
    },
    colors: ["Silver + Black", "Black + Red", "Red + Black"],
    images: [
      "/products/RS1-f5cad8a3-9cb9-442c-b926-3eedc96d4597.jpg",
      "/products/RS2-d61de6d8-6c02-4edc-9561-b0f03f8e5024.jpg",
      "/products/RS3-cda07f63-ddfa-48aa-8437-f325ac088956.jpg",
      "/products/Box_RS-70735146-7e98-4764-b3d8-c8a5e7af8e57.jpg"
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
        a: "The current lineup includes J7, L9, P8 battery short pens and the RS battery stroke pen."
      },
      {
        q: "What information is shown on each product page?",
        a: "Each page lists only confirmed model, motor, finish, and in-box details from the supplied product sheet."
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
