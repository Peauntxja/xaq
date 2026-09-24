import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { machineProducts, seriesChapters } from "@/lib/data";
import { Container } from "@/components/ui";
import { HomeSnap } from "@/components/home-snap";

const heroImage = "/brand/hpta-hero.png";

export default function HomePage() {
  const featured = machineProducts;

  return (
    <div className="bg-ink-950 text-stone-100">
      <HomeSnap />

      <section className="home-panel relative h-dvh overflow-hidden bg-ink-950">
        <img
          src={heroImage}
          alt="HPTA tattoo machines"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/70 via-ink-950/25 to-ink-950/10" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950/70 to-transparent" />
        <Container className="relative flex h-full flex-col justify-end pb-16 pt-28 sm:pb-20">
          <p className="font-display text-6xl font-semibold tracking-[0.14em] text-white sm:text-8xl lg:text-9xl">
            HPTA
          </p>
          <p className="mt-3 text-[11px] uppercase tracking-[0.32em] text-white/80">
            Hyper Professional Tattoo Assortment
          </p>
          <p className="mt-5 max-w-md text-base leading-7 text-white/88 sm:text-lg">
            J-7, L-9, P-8, and RS battery tattoo machines.
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
              className="inline-flex items-center gap-2 rounded-md border border-white/35 bg-black/20 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black/35"
            >
              Inquire
            </Link>
          </div>
        </Container>
      </section>

      <section>
        {seriesChapters.map((chapter, index) => (
          <Link
            key={chapter.id}
            href={chapter.href}
            className="home-panel group relative block h-dvh overflow-hidden bg-ink-950"
          >
            <img
              src={chapter.image}
              alt={chapter.series}
              className={`absolute inset-0 h-full w-full object-cover ${
                index % 2 === 0 ? "object-[70%_42%]" : "object-[36%_48%]"
              }`}
            />
            <div className="absolute inset-0 bg-ink-950/35" />
            <div
              className={`absolute inset-0 ${
                index % 2 === 0
                  ? "bg-gradient-to-r from-ink-950/90 via-ink-950/55 to-ink-950/15"
                  : "bg-gradient-to-l from-ink-950/90 via-ink-950/55 to-ink-950/15"
              }`}
            />
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-ink-950/75 to-transparent" />
            <Container
              className={`relative flex h-full items-end py-16 sm:py-20 ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className={`max-w-lg ${index % 2 === 0 ? "text-left" : "text-right"}`}>
                <p className="font-display text-[11px] uppercase tracking-[0.28em] text-steel-300">
                  {chapter.series}
                </p>
                <h2 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
                  {chapter.headline}
                </h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-white/78 sm:text-base">
                  {chapter.copy}
                </p>
                <p className="mt-7 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white">
                  Enter series
                  <ArrowRight className="h-3.5 w-3.5 transition duration-300 group-hover:translate-x-1" />
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
                J-7, L-9, P-8, and RS — the current HPTA battery tattoo machine lineup.
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
