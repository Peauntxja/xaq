import { machineProducts, accessories } from "@/lib/data";
import { CatalogSection, SplitHero, ProductCard, AccessoryCard } from "@/components/page-blocks";
import { Container } from "@/components/ui";

export default function AllProductsPage() {
  return (
    <>
      <SplitHero
        eyebrow="All products"
        title="Everything in one catalog."
        description="The reference site separates machines, accessories, packs, and sale items. This page gathers the current demo inventory into one browsable view."
        ctas={[
          { label: "Machines", href: "/collections/machines", primary: true },
          { label: "Accessories", href: "/collections/accessories" }
        ]}
        image={machineProducts[0].images[0]}
      />
      <CatalogSection
        title="Tattoo machines"
        description="Static demo products with live add-to-cart, wishlist, and compare actions."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {machineProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </CatalogSection>
      <CatalogSection title="Accessories" description="Starter accessory catalog for the demo build.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {accessories.map((item) => (
            <AccessoryCard key={item.slug} {...item} />
          ))}
        </div>
      </CatalogSection>
    </>
  );
}
