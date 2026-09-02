import { accessories } from "@/lib/data";
import { CatalogSection, SplitHero, AccessoryCard } from "@/components/page-blocks";
import { CollectionToolbar } from "@/components/catalog";

export default function AccessoriesPage() {
  return (
    <>
      <SplitHero
        eyebrow="Accessories"
        title="Accessories that make the store feel real."
        description="The reference site treats grips, cables, and footswitches as their own category. This demo does the same so the page is not empty."
        ctas={[
          { label: "Shop all", href: "/collections/all", primary: true },
          { label: "Support", href: "/faq" }
        ]}
        image={accessories[0].images[0]}
      />
      <CatalogSection title="Accessory catalog" description="Starter accessories, ready to replace an empty shelf.">
        <CollectionToolbar title="Accessories" subtitle="Curated demo accessories." count={accessories.length} />
        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {accessories.map((item) => (
            <AccessoryCard key={item.slug} {...item} />
          ))}
        </div>
      </CatalogSection>
    </>
  );
}
