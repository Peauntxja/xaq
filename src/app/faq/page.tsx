import { SplitHero, CatalogSection, FAQAccordion } from "@/components/page-blocks";
import { faqSections } from "@/lib/data";

export default function FAQPage() {
  return (
    <>
      <SplitHero
        eyebrow="FAQ"
        title="Answers before you inquire."
        description="Product lineup, inquiry process, and support expectations for HPTA partners and studios."
        ctas={[
          { label: "Contact", href: "/pages/contact", primary: true },
          { label: "About", href: "/about-us" }
        ]}
        image="/brochure/workshop-qc.png"
      />
      <CatalogSection title="Frequently asked questions" description="Structured support for the brand catalog.">
        <FAQAccordion sections={faqSections} />
      </CatalogSection>
    </>
  );
}
