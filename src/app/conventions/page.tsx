import { SplitHero, CatalogSection, EventsList } from "@/components/page-blocks";
import { eventItems } from "@/lib/data";

export default function ConventionsPage() {
  return (
    <>
      <SplitHero
        eyebrow="Conventions"
        title="Event pages for shows, booths, and launches."
        description="The reference store highlights conventions and live events. This demo includes a matching page so the navigation feels complete."
        ctas={[{ label: "ProTeam", href: "/proteam", primary: true }, { label: "Contact", href: "/pages/contact" }]}
        image="/brochure/factory.png"
      />
      <CatalogSection title="Upcoming events" description="Use this to publish expo dates, booth numbers, and sign-up info.">
        <EventsList items={eventItems} />
      </CatalogSection>
    </>
  );
}
