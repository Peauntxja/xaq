import { SplitHero, CatalogSection, SearchPanel } from "@/components/page-blocks";

export default function SearchPage() {
  return (
    <>
      <SplitHero
        eyebrow="Search"
        title="Search across the demo catalog."
        description="This page gives the store a usable search flow for products, accessories, and support content."
        ctas={[{ label: "All products", href: "/collections/all", primary: true }, { label: "FAQ", href: "/faq" }]}
        image="/brochure/factory.png"
      />
      <CatalogSection title="Search results">
        <SearchPanel />
      </CatalogSection>
    </>
  );
}
