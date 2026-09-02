import { SplitHero, CatalogSection, CartView } from "@/components/page-blocks";

export default function CartPage() {
  return (
    <>
      <SplitHero
        eyebrow="Cart"
        title="A working cart shell with local demo state."
        description="Users can add products, change quantities, and review their selected items without a backend."
        ctas={[{ label: "Checkout", href: "/checkout", primary: true }, { label: "Continue shopping", href: "/collections/all" }]}
        image="/brochure/factory.png"
      />
      <CatalogSection title="Your cart">
        <CartView />
      </CatalogSection>
    </>
  );
}
