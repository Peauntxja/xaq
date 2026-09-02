import { SplitHero, CatalogSection, StoreSummary } from "@/components/page-blocks";
import { AccountOrders } from "@/components/account-orders";

export default function AccountPage() {
  return (
    <>
      <SplitHero
        eyebrow="My account"
        title="A dashboard shell for local demo orders."
        description="The fake checkout flow writes order history here so the demo feels complete without a backend."
        ctas={[{ label: "Login", href: "/login", primary: true }, { label: "Orders", href: "/shopping-cart" }]}
        image="/brochure/factory.png"
      />
      <CatalogSection title="Account overview">
        <div className="grid gap-4 lg:grid-cols-[0.7fr_1.3fr]">
          <StoreSummary />
          <AccountOrders />
        </div>
      </CatalogSection>
    </>
  );
}
