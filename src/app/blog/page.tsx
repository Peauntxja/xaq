import { SplitHero, CatalogSection, ArticleGrid } from "@/components/page-blocks";
import { articles } from "@/lib/data";

export default function BlogPage() {
  return (
    <>
      <SplitHero
        eyebrow="Blog"
        title="From the bench."
        description="Guides and notes for choosing stroke, voltage, and machine families — brand education for working artists."
        ctas={[
          { label: "Machines", href: "/collections/machines", primary: true },
          { label: "Inquire", href: "/pages/contact" }
        ]}
        image="/brochure/cover.png"
      />
      <CatalogSection title="Latest posts" description="Short entries that keep the catalog grounded in practice.">
        <ArticleGrid articles={articles} />
      </CatalogSection>
    </>
  );
}
