import Link from "next/link";
import { CatalogSection, SplitHero } from "@/components/page-blocks";
import { Panel, Badge } from "@/components/ui";
import { machineProducts, accessories } from "@/lib/data";

export default function MachinePacksPage() {
  const packs = [
    {
      name: "Starter pack",
      items: [machineProducts[0], accessories[0]],
      note: "Launch-ready bundle for first-time buyers."
    },
    {
      name: "Studio pack",
      items: [machineProducts[3], accessories[1]],
      note: "A stronger bundle for day-to-day work."
    },
    {
      name: "Premium pack",
      items: [machineProducts[4], accessories[2]],
      note: "Higher-end machine plus supporting accessories."
    }
  ];

  return (
    <>
      <SplitHero
        eyebrow="Machine packs"
        title="Bundle pages that match the reference site's sales structure."
        description="This route is where curated kits and launch bundles live. It gives the store another conversion layer without needing backend logic."
        ctas={[
          { label: "Machines", href: "/collections/machines", primary: true },
          { label: "About", href: "/about-us" }
        ]}
        image={machineProducts[3].images[0]}
      />
      <CatalogSection title="Curated bundles" description="Use packs to combine machines and accessories.">
        <div className="grid gap-4 lg:grid-cols-3">
          {packs.map((pack) => (
            <Panel key={pack.name} className="p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-lg font-semibold text-white">{pack.name}</p>
                <Badge>{pack.items.length} items</Badge>
              </div>
              <p className="mt-2 text-sm leading-6 text-stone-300">{pack.note}</p>
              <ul className="mt-4 space-y-2 text-sm text-stone-300">
                {pack.items.map((item) => (
                  <li key={item.slug} className="flex items-center justify-between rounded-lg border border-white/10 bg-ink-900/70 px-3 py-2">
                    <span>{item.name}</span>
                    <span>${"price" in item ? item.price : 0}</span>
                  </li>
                ))}
              </ul>
              <Link href="/shopping-cart" className="mt-4 inline-flex text-sm text-amber-300">
                Add bundle to cart
              </Link>
            </Panel>
          ))}
        </div>
      </CatalogSection>
    </>
  );
}
