import { machineProducts, accessories } from "@/lib/data";
import { CatalogSection, SplitHero, ProductCard, AccessoryCard } from "@/components/page-blocks";
import { Panel } from "@/components/ui";

export default function SalePage() {
  const saleMachines = [machineProducts[0], machineProducts[2]];

  return (
    <>
      <SplitHero
        eyebrow="Sale"
        title="A real sale page instead of a dead link."
        description="The reference store surfaces discounted products, special editions, and limited offers. This demo now has a dedicated sale route with promotional framing."
        ctas={[
          { label: "Machines", href: "/collections/machines", primary: true },
          { label: "Cart", href: "/shopping-cart" }
        ]}
        image={machineProducts[3].images[0]}
      />
      <CatalogSection title="Featured offers" description="Mock discounts and showcase bundles for the launch demo.">
        <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
          <Panel className="p-5">
            <p className="text-xs uppercase tracking-[0.22em] text-teal-300">Promotion</p>
            <p className="mt-2 text-2xl font-semibold text-white">Free shipping above $499</p>
            <p className="mt-3 text-sm leading-6 text-stone-300">
              Use this area later for timed promotions, limited colorways, and launch bundles.
            </p>
          </Panel>
          <div className="grid gap-4 md:grid-cols-2">
            {saleMachines.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </CatalogSection>
      <CatalogSection title="Accessory deals" description="Accessory cards can be marked as sale items too.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {accessories.slice(0, 2).map((item) => (
            <AccessoryCard key={item.slug} {...item} />
          ))}
        </div>
      </CatalogSection>
    </>
  );
}
