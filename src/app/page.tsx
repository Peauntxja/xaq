import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { machineProducts, seriesChapters } from "@/lib/data";
import { Container } from "@/components/ui";

const heroImage = "/products/P82-1224b423-0749-42ad-8db4-83e7bdfd320f.jpg";

export default function HomePage() {
  const featured = machineProducts;

  return (
    <div className="bg-ink-950 text-stone-100">
      <section className="relative min-h-[92vh] overflow-hidden bg-ink-950">
        <img
          src={heroImage}
          alt="HPTA P8 battery tattoo pen"
          className="absolute inset-0 h-full w-full object-cover object-[70%_center] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/80 via-ink-950/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950/70 to-transparent" />
        <Container className="relative flex min-h-[92vh] flex-col justify-end pb-16 pt-24 sm:pb-24">
          <p className="font-display text-6xl font-semibold tracking-[0.14em] text-white sm:text-8xl lg:text-9xl">
            HPTA
          </p>
          <p className="mt-3 text-[11px] uppercase tracking-[0.32em] text-white/80">
            Hyper Professional Tattoo Assortment
          </p>
          <p className="mt-6 max-w-md text-base leading-7 text-white/90 sm:text-lg">
            J7, L9, P8, and RS battery tattoo machines.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/collections/machines"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-medium text-ink-950 transition hover:bg-steel-200"
            >
              View machines
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pages/contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/40 bg-black/25 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black/40"
            >
              Inquire
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10">
        {seriesChapters.map((chapter, index) => (
          <Link
            key={chapter.id}
            href={chapter.href}
            className="group relative block min-h-[56vh] overflow-hidden border-b border-white/10 sm:min-h-[64vh]"
          >
            <img
              src={chapter.image}
              alt={chapter.series}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
            />
            <div
              className={`absolute inset-0 ${
                index % 2 === 0
                  ? "bg-gradient-to-r from-ink-950/85 via-ink-950/45 to-transparent"
                  : "bg-gradient-to-l from-ink-950/85 via-ink-950/45 to-transparent"
              }`}
            />
            <Container
              className={`relative flex min-h-[56vh] items-end py-12 sm:min-h-[64vh] sm:py-16 ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className={`max-w-md ${index % 2 === 0 ? "text-left" : "text-right"}`}>
                <p className="font-display text-[11px] uppercase tracking-[0.28em] text-steel-300">
                  {chapter.series}
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-5xl">
                  {chapter.headline}
                </h2>
                <p className="mt-4 text-sm leading-6 text-white/75">{chapter.copy}</p>
                <p className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-white">
                  Enter series
                  <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                </p>
              </div>
            </Container>
          </Link>
        ))}
      </section>

      <section className="border-b border-white/10">
        <Container className="py-16 sm:py-20">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-display text-[11px] uppercase tracking-[0.28em] text-steel-300">Featured</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">Selected machines</h2>
            </div>
            <Link href="/collections/machines" className="text-sm text-stone-400 hover:text-white">
              Full lineup →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {featured.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group relative block overflow-hidden rounded-lg border border-white/10 bg-ink-900"
              >
                <div className="aspect-[5/4] overflow-hidden sm:aspect-[4/3]">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950 via-ink-950/80 to-transparent p-6 pt-24">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-steel-300">{product.series}</p>
                  <p className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">{product.name}</p>
                  <p className="mt-2 max-w-md text-sm leading-6 text-white/70 line-clamp-2">{product.summary}</p>
                  <p className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white">
                    View machine
                    <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16 sm:py-20">
          <div className="flex flex-col gap-8 border border-white/10 bg-ink-900/50 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-12">
            <div className="max-w-xl">
              <p className="font-display text-4xl font-semibold tracking-[0.12em] text-white sm:text-5xl">HPTA</p>
              <p className="mt-3 text-sm leading-6 text-stone-400 sm:text-base">
                J7, L9, P8, and RS — the current HPTA battery tattoo machine lineup.
              </p>
              <Link href="/about-us" className="mt-4 inline-flex text-sm text-steel-300 hover:text-white">
                About the brand →
              </Link>
            </div>
            <Link
              href="/pages/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-medium text-ink-950 hover:bg-steel-200"
            >
              Inquire now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
