import { SplitHero, CatalogSection, WishlistView } from "@/components/page-blocks";

export default function WishlistPage() {
  return (
    <>
      <SplitHero
        eyebrow="Wishlist"
        title="Saved products live here."
        description="The reference store exposes a wishlist control, so the demo does too. This page is driven entirely by local state."
        ctas={[{ label: "Collections", href: "/collections/all", primary: true }, { label: "Compare", href: "/compare-products" }]}
        image="/brochure/cover.png"
      />
      <CatalogSection title="Saved items">
        <WishlistView />
      </CatalogSection>
    </>
  );
}
