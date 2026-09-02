import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { machineProducts } from "@/lib/data";
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
                  Professional tattoo machines.
                </h1>
                <p className="mt-4 max-w-lg text-sm leading-6 text-white/80 sm:text-base">
                  Static demo inventory shaped from your Excel list and the Vlad Blad reference site.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/collections/all"
                    className="inline-flex items-center gap-2 rounded-[12px] bg-amber-400 px-4 py-2.5 text-sm font-medium text-ink-950 transition hover:bg-amber-300"
                  >
                    Shop all
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/collections/machines"
                    className="inline-flex items-center gap-2 rounded-[12px] border border-white/30 bg-white/10 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/15"
                  >
                    View machines
                  </Link>
                </div>
              </div>
            </div>
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
              <article key={product.slug} className="overflow-hidden rounded-[14px] border border-stone-200 bg-white">
                <Link href={`/products/${product.slug}`} className="block aspect-[4/3] bg-stone-100">
                  <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover" />
                </Link>
                <div className="space-y-3 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-medium tracking-[0.22em] text-stone-500">{product.series}</p>
                      <Link href={`/products/${product.slug}`} className="mt-1 block text-lg font-semibold text-ink-950 hover:text-stone-700">
                        {product.name}
                      </Link>
                    </div>
                    <span className="text-sm text-stone-500">{product.status}</span>
                  </div>
                  <p className="text-sm leading-6 text-stone-600">{product.summary}</p>
                  <div className="flex items-center justify-between gap-3 pt-2">
                    <p className="text-lg font-semibold text-ink-950">{formatPrice(product.price)}</p>
                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center gap-2 rounded-[12px] border border-stone-200 px-3 py-2 text-sm font-medium text-ink-950 transition hover:border-amber-400"
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
