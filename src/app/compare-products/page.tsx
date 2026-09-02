import { SplitHero, CatalogSection, CompareView } from "@/components/page-blocks";

export default function CompareProductsPage() {
  return (
    <>
      <SplitHero
        eyebrow="Compare"
        title="Compare machines side by side."
        description="This mirrors the reference store's comparison behavior and keeps product evaluation on one screen."
        ctas={[{ label: "Machines", href: "/collections/machines", primary: true }, { label: "Wishlist", href: "/wishlist" }]}
        image="https://images.unsplash.com/photo-1516321310768-61cffe94f6e9?auto=format&fit=crop&w=1200&q=80"
      />
      <CatalogSection title="Comparison table">
        <CompareView />
      </CatalogSection>
    </>
  );
}
