import { SplitHero, CatalogSection, ArticleGrid } from "@/components/page-blocks";
import { articles } from "@/lib/data";

export default function BlogPage() {
  return (
    <>
      <SplitHero
        eyebrow="Blog"
        title="Editorial pages for education and SEO."
        description="The reference site uses article pages and support articles to reinforce product confidence. This demo includes a simple blog structure too."
        ctas={[{ label: "Machines", href: "/collections/machines", primary: true }, { label: "About", href: "/about-us" }]}
        image="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80"
      />
      <CatalogSection title="Latest posts" description="Short educational entries that can later become a real content hub.">
        <ArticleGrid articles={articles} />
      </CatalogSection>
    </>
  );
}
