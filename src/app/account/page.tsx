import { SplitHero, CatalogSection, StoreSummary } from "@/components/page-blocks";
import { Panel } from "@/components/ui";

export default function AccountPage() {
  return (
    <>
      <SplitHero
        eyebrow="My account"
        title="A dashboard shell for future authentication."
        description="The live site can later plug into customer login, order history, and saved addresses. For now it behaves as a polished mock account page."
        ctas={[{ label: "Login", href: "/login", primary: true }, { label: "Orders", href: "/shopping-cart" }]}
        image="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80"
      />
      <CatalogSection title="Account overview">
        <div className="grid gap-4 lg:grid-cols-[0.7fr_1.3fr]">
          <StoreSummary />
          <Panel className="space-y-3 p-5">
            <p className="text-lg font-semibold text-white">Recent orders</p>
            {["Order #10021 - Delivered", "Order #10022 - In transit", "Order #10023 - Processing"].map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-ink-900/70 px-3 py-2 text-sm text-stone-300">
                {item}
              </div>
            ))}
          </Panel>
        </div>
      </CatalogSection>
    </>
  );
}
