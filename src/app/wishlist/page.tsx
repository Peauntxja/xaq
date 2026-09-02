import { SplitHero, CatalogSection, WishlistView } from "@/components/page-blocks";

export default function WishlistPage() {
  return (
    <>
      <SplitHero
        eyebrow="Wishlist"
        title="Saved products live here."
        description="The reference store exposes a wishlist control, so the demo does too. This page is driven entirely by local state."
        ctas={[{ label: "Collections", href: "/collections/all", primary: true }, { label: "Compare", href: "/compare-products" }]}
        image="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80"
      />
      <CatalogSection title="Saved items">
        <WishlistView />
      </CatalogSection>
    </>
  );
}
