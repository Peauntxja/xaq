import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getProductBySlug, machineProducts } from "@/lib/data";
import { Container, Panel, PageTitle, Section, Badge } from "@/components/ui";
import { ProductGallery, SpecTable, ProductCard } from "@/components/catalog";

export async function generateStaticParams() {
  return machineProducts.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = machineProducts.filter((item) => item.series === product.series && item.slug !== product.slug).slice(0, 3);

  return (
    <>
      <Section className="border-b border-white/10">
        <Container className="space-y-6 py-8">
          <Link href="/collections/machines" className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            Back to machines
          </Link>
          <PageTitle eyebrow={product.series} title={product.name} description={product.longSummary} />
          <div className="flex flex-wrap gap-2">
            <Badge>{product.type}</Badge>
            <Badge>{product.status}</Badge>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <ProductGallery images={product.images} name={product.name} />
          <div className="space-y-4">
            <Panel className="space-y-5 p-5">
              <p className="text-sm leading-6 text-stone-300">{product.summary}</p>
              <div className="flex flex-wrap gap-2">
                {product.features.map((feature) => (
                  <span key={feature} className="rounded-md border border-white/10 bg-ink-900 px-3 py-1.5 text-xs text-stone-300">
                    {feature}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href={`/pages/contact?product=${product.slug}`}
                  className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-medium text-ink-950 hover:bg-steel-200"
                >
                  Inquire
                </Link>
                <a
                  href={product.manualUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-2.5 text-sm text-white hover:bg-white/5"
                >
                  Manual <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              {product.colors.length ? (
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-stone-500">Finishes</p>
                  <p className="mt-2 text-sm text-stone-300">{product.colors.join(" · ")}</p>
                </div>
              ) : null}
            </Panel>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-white/10">
        <Container>
          <SpecTable specs={product.specs} />
        </Container>
      </Section>

      {related.length ? (
        <Section className="border-t border-white/10">
          <Container className="space-y-6">
            <PageTitle eyebrow="Same series" title="Related machines" />
            <div className="grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <ProductCard key={item.slug} product={item} />
              ))}
            </div>
          </Container>
        </Section>
      ) : null}
    </>
  );
}
