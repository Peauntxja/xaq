import { SplitHero, CatalogSection, SearchPanel } from "@/components/page-blocks";

export default function SearchPage() {
  return (
    <>
      <SplitHero
        eyebrow="Search"
        title="Search across the demo catalog."
        description="This page gives the store a usable search flow for products, accessories, and support content."
        ctas={[{ label: "All products", href: "/collections/all", primary: true }, { label: "FAQ", href: "/faq" }]}
        image="https://images.unsplash.com/photo-1516321310768-61cffe94f6e9?auto=format&fit=crop&w=1200&q=80"
      />
      <CatalogSection title="Search results">
        <SearchPanel />
      </CatalogSection>
    </>
  );
}
