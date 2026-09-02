import { SplitHero, CatalogSection, TeamGrid } from "@/components/page-blocks";
import { teamMembers } from "@/lib/data";
import { Panel } from "@/components/ui";

export default function ProTeamPage() {
  return (
    <>
      <SplitHero
        eyebrow="ProTeam"
        title="Artist faces, ambassadors, and proof."
        description="Reference stores often use team pages to deepen trust. This version gives the demo a polished place for artist cards and testimonials."
        ctas={[{ label: "Events", href: "/conventions", primary: true }, { label: "About", href: "/about-us" }]}
        image="https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=80"
      />
      <CatalogSection title="Team members" description="A simple structure for pro artists and ambassadors.">
        <TeamGrid members={teamMembers} />
      </CatalogSection>
      <CatalogSection title="Testimonials" description="Mock quotes for the launch build.">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "The product pages finally make sense at a glance.",
            "Compare and wishlist support is exactly what we needed.",
            "The whole store now feels like a finished launch rather than a draft."
          ].map((text) => (
            <Panel key={text} className="p-5">
              <p className="text-sm leading-6 text-stone-300">{text}</p>
            </Panel>
          ))}
        </div>
      </CatalogSection>
    </>
  );
}
