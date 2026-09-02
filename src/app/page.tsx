import Link from "next/link";
import { ArrowRight, BookOpen, Cable, CheckCircle2, Cpu, Package, ShieldCheck, Star, Truck } from "lucide-react";
import { Container, Section, Panel, Badge, PageTitle } from "@/components/ui";
import { machineProducts, accessories, articles, teamMembers, eventItems } from "@/lib/data";
import { ProductCard, AccessoryCard, ArticleGrid, TeamGrid, EventsList, ProductLines } from "@/components/catalog";

export default function HomePage() {
  const featured = machineProducts.slice(0, 4);

  return (
    <>
      <Section className="border-b border-white/10">
        <Container className="grid gap-10 py-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:py-12">
          <div className="space-y-6">
            <Badge>Hyper Professional Tattoo Assortment</Badge>
            <PageTitle
              title="Professional tattoo machines, organized like a working studio."
              description="A full mock ecommerce build with the same navigational depth, product pages, and support flows the reference site uses, but powered entirely by static demo data."
            />
            <div className="flex flex-wrap gap-3">
              <Link href="/collections/all" className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-4 py-2 text-sm font-medium text-stone-950">
                Shop all <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/products/rs" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white">
                View flagship
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { icon: Cpu, title: "Machine families", text: "Hybrid, rotary, coil, and pen-style mockups." },
                { icon: ShieldCheck, title: "Support pages", text: "Policies, FAQ, manuals, and contact flows." },
                { icon: Truck, title: "Vercel ready", text: "Built to ship without a backend." }
              ].map((item) => (
                <Panel key={item.title} className="p-4">
                  <item.icon className="h-5 w-5 text-amber-300" />
                  <p className="mt-3 font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-sm leading-6 text-stone-300">{item.text}</p>
                </Panel>
              ))}
            </div>
          </div>
          <Panel className="overflow-hidden">
            <div className="grid gap-3 p-4">
              <div className="aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-ink-900">
                <img src={machineProducts[3].images[0]} alt={machineProducts[3].name} className="h-full w-full object-cover" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Featured product</p>
                <p className="text-2xl font-semibold text-white">{machineProducts[3].name}</p>
                <p className="mt-2 text-sm text-stone-300">{machineProducts[3].longSummary}</p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm text-stone-300">
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Price</p>
                  <p className="mt-1 text-white">$399</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Status</p>
                  <p className="mt-1 text-white">In stock</p>
                </div>
              </div>
            </div>
          </Panel>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-6">
          <PageTitle
            eyebrow="Collections"
            title="Built to mirror a real store structure."
            description="The reference layout separates the store into category pages, product pages, support pages, and editorial content. This demo follows the same flow."
          />
          <ProductLines />
        </Container>
      </Section>

      <Section className="border-t border-white/10">
        <Container className="space-y-6">
          <PageTitle eyebrow="Featured machines" title="A compact catalog with the right store controls." />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-white/10">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <PageTitle eyebrow="Accessories" title="The empty shelf problem is fixed." />
            <p className="max-w-xl text-sm leading-6 text-stone-300">
              The reference site uses accessories as a real category. This build gives you a starter accessory catalog
              so the page feels alive on day one.
            </p>
            <Link href="/collections/accessories" className="inline-flex items-center gap-2 text-sm text-amber-300">
              Browse accessories <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {accessories.map((item) => (
              <AccessoryCard key={item.slug} {...item} />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-white/10">
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-6">
            <PageTitle eyebrow="Support" title="Policies, docs, FAQ, and contact are all present." />
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { icon: BookOpen, title: "Manuals", text: "Each product links to a manual placeholder or PDF." },
                { icon: Cable, title: "Shipping", text: "Shipping, return, and terms pages are prebuilt." },
                { icon: ShieldCheck, title: "Warranty", text: "Support content is ready for a later backend swap." },
                { icon: CheckCircle2, title: "FAQ", text: "Ordering, delivery, and product info are covered." }
              ].map((item) => (
                <Panel key={item.title} className="p-4">
                  <item.icon className="h-5 w-5 text-teal-300" />
                  <p className="mt-3 font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-sm leading-6 text-stone-300">{item.text}</p>
                </Panel>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <PageTitle eyebrow="Studio proof" title="Where the social proof and event content goes." />
            <TeamGrid members={teamMembers} />
            <EventsList items={eventItems} />
          </div>
        </Container>
      </Section>

      <Section className="border-t border-white/10">
        <Container className="space-y-6">
          <PageTitle eyebrow="Reading" title="A lightweight blog and education layer." />
          <ArticleGrid articles={articles} />
        </Container>
      </Section>
    </>
  );
}
