import { SplitHero, CatalogSection, TeamGrid } from "@/components/page-blocks";
import { Panel } from "@/components/ui";
import { teamMembers } from "@/lib/data";

export default function AboutPage() {
  return (
    <>
      <SplitHero
        eyebrow="About"
        title="A brand page with history, not just a logo."
        description="The reference store includes a proper about section. This demo adds brand framing, a timeline, and a team block so the site feels complete."
        ctas={[{ label: "FAQ", href: "/faq", primary: true }, { label: "Contact", href: "/pages/contact" }]}
        image="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80"
      />
      <CatalogSection title="Company story" description="A short timeline to support product trust.">
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            ["Built for artists", "The store is designed around how tattoo artists shop: by task, feel, and machine family."],
            ["Mock-first launch", "Everything here runs on static data so you can review the structure before wiring a backend."],
            ["Ready for scale", "The routes already support product pages, support pages, and editorial content."]
          ].map(([title, text]) => (
            <Panel key={title} className="p-5">
              <p className="text-lg font-semibold text-white">{title}</p>
              <p className="mt-2 text-sm leading-6 text-stone-300">{text}</p>
            </Panel>
          ))}
        </div>
      </CatalogSection>
      <CatalogSection title="Team" description="The people behind the demo store.">
        <TeamGrid members={teamMembers} />
      </CatalogSection>
    </>
  );
}
