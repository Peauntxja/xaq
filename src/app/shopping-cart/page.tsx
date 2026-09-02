import { SplitHero, CatalogSection, CartView } from "@/components/page-blocks";

export default function CartPage() {
  return (
    <>
      <SplitHero
        eyebrow="Cart"
        title="A working cart shell with local demo state."
        description="Users can add products, change quantities, and review their selected items without a backend."
        ctas={[{ label: "Checkout plan", href: "/pages/contact", primary: true }, { label: "Continue shopping", href: "/collections/all" }]}
        image="https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=80"
      />
      <CatalogSection title="Your cart">
        <CartView />
      </CatalogSection>
    </>
  );
}
