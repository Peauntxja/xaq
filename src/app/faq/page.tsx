import { SplitHero, CatalogSection, FAQAccordion } from "@/components/page-blocks";
import { faqSections } from "@/lib/data";

export default function FAQPage() {
  return (
    <>
      <SplitHero
        eyebrow="FAQ"
        title="Questions and answers, already in place."
        description="This mirrors the structure of the reference store's FAQ and helps the user find payment, shipping, and return information quickly."
        ctas={[{ label: "Contact support", href: "/pages/contact", primary: true }, { label: "Policies", href: "/policies/privacy-policy" }]}
        image="/brochure/workshop-qc.png"
      />
      <CatalogSection title="Frequently asked questions" description="Structured support content for launch review.">
        <FAQAccordion sections={faqSections} />
      </CatalogSection>
    </>
  );
}
