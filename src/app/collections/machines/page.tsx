import Link from "next/link";
import { machineProducts, seriesChapters } from "@/lib/data";
import { Container, PageTitle, Section } from "@/components/ui";
import { ProductCard } from "@/components/catalog";
import { SplitHero } from "@/components/page-blocks";

export default function MachinesPage() {
  return (
    <>
      <SplitHero
        eyebrow="Tattoo machines"
        title="Professional machines, presented by series."
        description="Browse Avenger, Ultron, and Coil like a brand catalog — chapter intros, clear specs on each product, and an inquire path."
        ctas={[
          { label: "Inquire", href: "/pages/contact", primary: true },
          { label: "Accessories", href: "/collections/accessories" }
        ]}
        image={machineProducts[1].images[0]}
      />
      {seriesChapters.map((chapter) => {
        const items = machineProducts.filter((p) => p.series === chapter.series);
        return (
          <Section key={chapter.id} id={chapter.id} className="border-b border-white/10 scroll-mt-24">
            <Container className="space-y-8">
              <PageTitle eyebrow={chapter.series} title={chapter.headline} description={chapter.copy} />
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {items.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
              <Link href="/pages/contact" className="inline-flex text-sm text-steel-300 hover:text-white">
                Inquire about {chapter.series} →
              </Link>
            </Container>
          </Section>
        );
      })}
    </>
  );
}
