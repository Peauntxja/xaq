import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, FileText, PlayCircle, ShieldCheck, Truck } from "lucide-react";
import { getProductBySlug, machineProducts } from "@/lib/data";
import { Container, Panel, PageTitle, Section, Badge, Button } from "@/components/ui";
import { ProductGallery, ProductActions, CompareTable } from "@/components/page-blocks";

export async function generateStaticParams() {
  return machineProducts.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = machineProducts.filter((item) => item.slug !== product.slug).slice(0, 3);

  return (
    <>
      <Section className="border-b border-white/10">
        <Container className="space-y-6 py-8">
          <Link href="/collections/machines" className="inline-flex items-center gap-2 text-sm text-stone-400 hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to machines
          </Link>
          <PageTitle eyebrow={product.series} title={product.name} description={product.longSummary} />
          <div className="flex flex-wrap items-center gap-2">
            <Badge>{product.status}</Badge>
            <Badge>{product.accent}</Badge>
            <Badge>{product.type}</Badge>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <ProductGallery images={product.images} name={product.name} />
          <div className="space-y-4">
            <Panel className="space-y-4 p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Price</p>
                  <p className="text-3xl font-semibold text-white">${product.price}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Manual</p>
                  <a href={product.manualUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-amber-300">
                    View manual <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <ProductActions product={product} />
            </Panel>
            <Panel className="p-5">
              <p className="text-lg font-semibold text-white">What this machine covers</p>
              <ul className="mt-3 grid gap-2 text-sm text-stone-300 sm:grid-cols-2">
                {product.features.map((feature) => (
                  <li key={feature} className="rounded-lg border border-white/10 bg-ink-900/70 px-3 py-2">
                    {feature}
                  </li>
                ))}
              </ul>
            </Panel>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-white/10">
        <Container className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <Panel className="overflow-hidden">
            <div className="border-b border-white/10 bg-white/5 px-5 py-4">
              <p className="text-lg font-semibold text-white">Specifications</p>
            </div>
            <div className="divide-y divide-white/10">
              {Object.entries(product.specs).map(([label, value]) => (
                <div key={label} className="grid gap-2 px-5 py-4 sm:grid-cols-[0.5fr_1fr]">
                  <p className="text-xs uppercase tracking-[0.18em] text-stone-500">{label}</p>
                  <p className="text-sm text-stone-200">{value}</p>
                </div>
              ))}
            </div>
          </Panel>
          <div className="grid gap-4">
            <Panel className="p-5">
              <div className="flex items-center gap-2 text-white">
                <Truck className="h-4 w-4 text-teal-300" />
                <p className="font-semibold">Shipping</p>
              </div>
              <p className="mt-2 text-sm leading-6 text-stone-300">
                Free shipping above $499, otherwise a standard shipping threshold can be shown here.
              </p>
            </Panel>
            <Panel className="p-5">
              <div className="flex items-center gap-2 text-white">
                <ShieldCheck className="h-4 w-4 text-amber-300" />
                <p className="font-semibold">Warranty</p>
              </div>
              <p className="mt-2 text-sm leading-6 text-stone-300">
                The demo reserves a dedicated area for warranty, return handling, and support contact routing.
              </p>
            </Panel>
            <Panel className="p-5">
              <div className="flex items-center gap-2 text-white">
                <PlayCircle className="h-4 w-4 text-teal-300" />
                <p className="font-semibold">Videos</p>
              </div>
              <p className="mt-2 text-sm leading-6 text-stone-300">
                This block can later host setup clips, stroke demos, and artist sessions.
              </p>
            </Panel>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-white/10">
        <Container className="space-y-6">
          <PageTitle eyebrow="More" title="Comparisons and related products." />
          <CompareTable products={[product, ...related.slice(0, 2)]} />
          <div className="grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <Panel key={item.slug} className="p-4">
                <p className="text-lg font-semibold text-white">{item.name}</p>
                <p className="text-sm text-stone-300">{item.summary}</p>
                <Link href={`/products/${item.slug}`} className="mt-3 inline-flex items-center gap-2 text-sm text-amber-300">
                  View product <FileText className="h-4 w-4" />
                </Link>
              </Panel>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
