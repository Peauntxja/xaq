import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";
import { machineProducts, companyProfile, companyStrengths, brochureAssets, factoryMetrics } from "@/lib/data";
import { Container } from "@/components/ui";
import { formatPrice } from "@/lib/utils";

const heroImage =
  "https://hptausa.com/cdn/shop/files/c41e435b6de6e85625463bfe9f77a9f3.png?v=1779331287&width=3840";

export default function HomePage() {
  const featured = machineProducts.slice(0, 4);

  return (
    <div className="bg-[#f7f4ee] text-ink-950">
      <section className="border-b border-stone-300">
        <Container className="py-6 sm:py-8">
          <div className="relative overflow-hidden rounded-[20px] border border-stone-300 bg-white">
            <img src={heroImage} alt="Hyper Professional Tattoo Assortment hero" className="h-[520px] w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-black/60" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
              <div className="max-w-2xl text-white">
                <p className="inline-flex rounded-full border border-white/20 bg-black/25 px-3 py-1 text-[11px] font-medium tracking-[0.22em]">
                  HYPER PROFESSIONAL TATTOO ASSORTMENT
                </p>
                <h1 className="mt-4 max-w-xl text-4xl font-semibold leading-[1.02] sm:text-5xl lg:text-6xl">
                  Wholesale tattoo machines, presented for B2B buyers.
                </h1>
                <p className="mt-4 max-w-lg text-sm leading-6 text-white/80 sm:text-base">
                  Built for distributors, studios, and regional resellers. The demo combines catalog depth, a Hong
                  Kong company profile, and an inquiry flow that feels ready for trade conversations.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/pages/contact"
                    className="inline-flex items-center gap-2 rounded-[12px] bg-amber-400 px-4 py-2.5 text-sm font-medium text-ink-950 transition hover:bg-amber-300"
                  >
                    Wholesale inquiry
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/company-profile.pdf"
                    className="inline-flex items-center gap-2 rounded-[12px] border border-white/30 bg-white/10 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/15"
                  >
                    Download profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-stone-300 bg-white">
        <Container className="py-10 sm:py-12">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-[14px] border border-stone-200 bg-[#fcfbf8] p-5">
              <p className="text-[11px] font-medium tracking-[0.22em] text-stone-500">LEGAL ENTITY</p>
              <p className="mt-3 text-lg font-semibold text-ink-950">{companyProfile.legalName}</p>
              <p className="mt-1 text-sm text-stone-600">{companyProfile.registryName}</p>
            </div>
            <div className="rounded-[14px] border border-stone-200 bg-[#fcfbf8] p-5">
              <p className="text-[11px] font-medium tracking-[0.22em] text-stone-500">BUSINESS RECORD</p>
              <p className="mt-3 text-lg font-semibold text-ink-950">{companyProfile.businessRegistrationNo}</p>
              <p className="mt-1 text-sm text-stone-600">Issued on {companyProfile.issuedOn}</p>
            </div>
            <div className="rounded-[14px] border border-stone-200 bg-[#fcfbf8] p-5">
              <p className="text-[11px] font-medium tracking-[0.22em] text-stone-500">B2B POSITIONING</p>
              <p className="mt-3 text-lg font-semibold text-ink-950">Wholesale-first catalog and inquiry flow.</p>
              <p className="mt-1 text-sm text-stone-600">Built for distributors, studios, and resellers who need a tidy, credible first look.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-stone-300 bg-[#f7f4ee]">
        <Container className="py-12 sm:py-14">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-medium tracking-[0.24em] text-stone-500">COMPANY STRENGTH</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
                A clean way to show the business, not just the products.
              </h2>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                This is where the site can prove it is real enough for wholesale review: official registration details,
                an address, and a catalog that already behaves like a working sales tool.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {companyStrengths.map((item) => (
              <div key={item.title} className="rounded-[14px] border border-stone-200 bg-white p-5 shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
                <p className="text-lg font-semibold text-ink-950">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-stone-600">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-stone-300 bg-white">
        <Container className="grid gap-8 py-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="space-y-5">
            <p className="text-[11px] font-medium tracking-[0.24em] text-stone-500">BROCHURE</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Proof of scale, in a format buyers can scan fast.
            </h2>
            <p className="text-sm leading-6 text-stone-600">
              This brochure gives the site a stronger B2B signal: cover, office, factory floor, workshop, and QC
              visuals all in one place.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {factoryMetrics.map((item) => (
                <div key={item.label} className="rounded-[14px] border border-stone-200 bg-[#fcfbf8] p-4">
                  <p className="text-2xl font-semibold text-ink-950">{item.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-stone-500">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/about-us#brochure"
                className="inline-flex items-center gap-2 rounded-full bg-ink-950 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-ink-800"
              >
                Open brochure section
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/company-profile.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-4 py-2.5 text-sm font-medium text-ink-950 transition hover:bg-stone-50"
              >
                Download company PDF
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="overflow-hidden rounded-[18px] border border-stone-200 bg-[#fcfbf8] shadow-[0_18px_40px_rgba(15,23,42,0.05)] sm:row-span-2">
              <img src={brochureAssets[0].image} alt={brochureAssets[0].title} className="h-full w-full object-cover" />
            </article>
            <article className="overflow-hidden rounded-[18px] border border-stone-200 bg-[#fcfbf8] shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
              <img src={brochureAssets[1].image} alt={brochureAssets[1].title} className="h-full w-full object-cover" />
            </article>
            <article className="overflow-hidden rounded-[18px] border border-stone-200 bg-[#fcfbf8] shadow-[0_18px_40px_rgba(15,23,42,0.05)]">
              <img src={brochureAssets[2].image} alt={brochureAssets[2].title} className="h-full w-full object-cover" />
            </article>
          </div>
        </Container>
      </section>

      <section className="border-b border-stone-300 bg-white">
        <Container className="py-12 sm:py-14">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-medium tracking-[0.24em] text-stone-500">TATTOO MACHINES</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
                Built to feel like a shop, not a brochure.
              </h2>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                The first row follows the reference store&apos;s clean product grid and uses the Excel machines as demo
                inventory.
              </p>
            </div>
            <Link href="/collections/machines" className="text-sm font-medium text-ink-950 underline underline-offset-4">
              View all
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {featured.map((product) => (
              <article
                key={product.slug}
                className="group overflow-hidden rounded-[14px] border border-stone-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-stone-300 hover:shadow-[0_28px_60px_rgba(15,23,42,0.12)]"
              >
                <div className="relative">
                  <Link href={`/products/${product.slug}`} className="group/image block aspect-[4/3] overflow-hidden bg-stone-100">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-700 ease-out group-hover/image:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 transition duration-300 group-hover/image:opacity-100" />
                  </Link>
                  <div className="absolute left-3 top-3 z-10 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-950 shadow-sm backdrop-blur"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      Quickview
                    </Link>
                  </div>
                </div>
                <div className="space-y-3 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-medium tracking-[0.22em] text-stone-500">{product.series}</p>
                      <Link href={`/products/${product.slug}`} className="mt-1 block text-lg font-semibold text-ink-950 transition hover:text-stone-600">
                        {product.name}
                      </Link>
                    </div>
                    <span className="text-sm text-stone-500">{product.status}</span>
                  </div>
                  <p className="text-sm leading-6 text-stone-600">{product.summary}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-stone-500">
                    <span className="rounded-full border border-stone-200 px-2.5 py-1">{product.type}</span>
                    <span className="rounded-full border border-stone-200 px-2.5 py-1">{product.compareTag}</span>
                  </div>
                  <div className="flex items-center justify-between gap-3 pt-2">
                    <p className="text-lg font-semibold text-ink-950">{formatPrice(product.price)}</p>
                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-stone-200 px-3 py-2 text-sm font-medium text-ink-950 transition hover:border-stone-400 hover:bg-stone-50"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f7f4ee]">
        <Container className="py-12 sm:py-14">
          <div className="grid gap-6 rounded-[18px] border border-stone-300 bg-white p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-[11px] font-medium tracking-[0.24em] text-stone-500">JOIN OUR EMAIL LIST</p>
              <h2 className="mt-3 text-2xl font-semibold text-ink-950">Get launch notes and product updates.</h2>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                No backend yet. Just the same signup shape the reference store uses.
              </p>
            </div>
            <form className="flex flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Email address"
                className="h-12 flex-1 rounded-[12px] border border-stone-300 px-4 text-sm text-ink-950 outline-none placeholder:text-stone-400"
              />
              <button className="h-12 rounded-[12px] bg-ink-950 px-5 text-sm font-medium text-white transition hover:bg-ink-800">
                Sign up
              </button>
            </form>
          </div>
        </Container>
      </section>
    </div>
  );
}
