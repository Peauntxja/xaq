import { machineProducts } from "@/lib/data";
import { CatalogSection, SplitHero, ProductCard } from "@/components/page-blocks";
import { CollectionToolbar } from "@/components/catalog";

export default function MachinesPage() {
  return (
    <>
      <SplitHero
        eyebrow="Tattoo machines"
        title="Professional machines for artists who want more than a basic catalog."
        description="This page mirrors the reference site's category-first shopping flow, but the content is purpose-built as a static demo."
        ctas={[
          { label: "All products", href: "/collections/all", primary: true },
          { label: "Compare machines", href: "/compare-products" }
        ]}
        image={machineProducts[1].images[0]}
      />
      <CatalogSection
        title="Machine lineup"
        description="The collection supports the same browse-and-compare rhythm as the reference store."
      >
        <CollectionToolbar
          title="Tattoo Machines"
          subtitle="Shop our selection of professional tattoo machines."
          count={machineProducts.length}
        />
        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {machineProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </CatalogSection>
    </>
  );
}
