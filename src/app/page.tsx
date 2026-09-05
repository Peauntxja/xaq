import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  machineProducts,
  seriesChapters,
  articles,
  companyStrengths
} from "@/lib/data";
import { Container, Panel } from "@/components/ui";
import { ProductCard, ArticleGrid } from "@/components/catalog";

const heroImage =
  "https://hptausa.com/cdn/shop/files/c41e435b6de6e85625463bfe9f77a9f3.png?v=1779331287&width=3840";

export default function HomePage() {
  const featured = machineProducts.slice(0, 4);

  return (
    <div className="bg-ink-950 text-stone-100">
      <section className="relative min-h-[88vh] overflow-hidden border-b border-white/10">
        <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/50" />
        <Container className="relative flex min-h-[88vh] flex-col justify-end pb-16 pt-28 sm:pb-20">
          <p className="font-display text-5xl font-semibold tracking-[0.12em] text-white sm:text-7xl lg:text-8xl">
            HPTA
          </p>
          <p className="mt-3 max-w-xl text-[11px] uppercase tracking-[0.28em] text-steel-300">
            Hyper Professional Tattoo Assortment
          </p>
          <h1 className="mt-6 max-w-2xl font-display text-2xl font-medium leading-tight text-white sm:text-4xl">
            Machines built for the bench — not the brochure shelf.
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-6 text-stone-300 sm:text-base">
            Avenger, Ultron, and Coil series for artists who need control, endurance, and a clear path to inquire.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/pages/contact"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-medium text-ink-950 hover:bg-steel-200"
            >
              Inquire
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/collections/machines"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10"
            >
              View machines
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="py-16 sm:py-20">
          <p className="font-display text-[11px] uppercase tracking-[0.28em] text-steel-300">Series</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">Three chapters. One brand.</h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {seriesChapters.map((chapter) => (
              <Link key={chapter.id} href={chapter.href} className="group">
                <Panel className="h-full p-6 transition group-hover:border-white/30">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-stone-500">{chapter.series}</p>
                  <p className="mt-4 font-display text-xl font-semibold text-white">{chapter.headline}</p>
                  <p className="mt-3 text-sm leading-6 text-stone-400">{chapter.copy}</p>
                  <p className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-steel-300 group-hover:text-white">
                    Enter series <ArrowRight className="h-3.5 w-3.5" />
                  </p>
                </Panel>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-ink-900/40">
        <Container className="py-16 sm:py-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-display text-[11px] uppercase tracking-[0.28em] text-steel-300">Featured</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-white">Selected machines</h2>
            </div>
            <Link href="/collections/machines" className="text-sm text-stone-400 hover:text-white">
              Full lineup →
            </Link>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10">
        <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="font-display text-[11px] uppercase tracking-[0.28em] text-steel-300">Brand</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
              Precision for professionals.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-stone-400">
              HPTA presents a focused assortment of tattoo machines — hybrid, pen, and coil — with catalog clarity and a direct inquiry path.
            </p>
            <Link
              href="/about-us"
              className="mt-6 inline-flex items-center gap-2 text-sm text-white underline-offset-4 hover:underline"
            >
              About HPTA <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-3">
            {companyStrengths.map((item) => (
              <Panel key={item.title} className="p-5">
                <p className="font-medium text-white">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-stone-400">{item.text}</p>
              </Panel>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-white/10 bg-ink-900/40">
        <Container className="py-16 sm:py-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-display text-[11px] uppercase tracking-[0.28em] text-steel-300">Journal</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-white">From the bench</h2>
            </div>
            <Link href="/blog" className="text-sm text-stone-400 hover:text-white">
              All articles →
            </Link>
          </div>
          <div className="mt-10">
            <ArticleGrid articles={articles.slice(0, 4)} />
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16 sm:py-20">
          <Panel className="flex flex-col items-start gap-6 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div>
              <p className="font-display text-[11px] uppercase tracking-[0.28em] text-steel-300">Contact</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
                Ready to specify a machine?
              </h2>
              <p className="mt-2 max-w-md text-sm text-stone-400">
                Tell us your studio, region, and preferred series. We respond with availability and next steps.
              </p>
            </div>
            <Link
              href="/pages/contact"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-medium text-ink-950 hover:bg-steel-200"
            >
              Inquire now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Panel>
        </Container>
      </section>
    </div>
  );
}
