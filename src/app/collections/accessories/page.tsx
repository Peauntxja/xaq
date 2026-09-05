import { accessories } from "@/lib/data";
import { CatalogSection, SplitHero, AccessoryCard } from "@/components/page-blocks";

export default function AccessoriesPage() {
  return (
    <>
      <SplitHero
        eyebrow="Accessories"
        title="Grips, switches, and cables."
        description="Supporting pieces for Ultron and wired setups — inquire for availability alongside your machine order."
        ctas={[
          { label: "Inquire", href: "/pages/contact", primary: true },
          { label: "Machines", href: "/collections/machines" }
        ]}
        image={accessories[0].images[0]}
      />
      <CatalogSection title="Accessory lineup" description="Starter accessories for a complete bench.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {accessories.map((item) => (
            <AccessoryCard key={item.slug} {...item} />
          ))}
        </div>
      </CatalogSection>
    </>
  );
}
