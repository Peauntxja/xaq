import Link from "next/link";
import { SplitHero, CatalogSection, TeamGrid } from "@/components/page-blocks";
import { Panel } from "@/components/ui";
import { BrochureGallery } from "@/components/brochure-gallery";
import { companyProfile, companyStrengths, brochureAssets, factoryMetrics, teamMembers } from "@/lib/data";

export default function AboutPage() {
  return (
    <>
      <SplitHero
        eyebrow="About HPTA"
        title="Hyper Professional Tattoo Assortment."
        description="HPTA presents professional tattoo machines across Avenger, Ultron, and Coil. Brand first — company credentials available for partners who need them."
        ctas={[
          { label: "Inquire", href: "/pages/contact", primary: true },
          { label: "View machines", href: "/collections/machines" }
        ]}
        image="/brochure/cover.png"
      />
      <CatalogSection title="What we stand for" description="Brand focus for artists and studios.">
        <div className="grid gap-4 md:grid-cols-3">
          {companyStrengths.map((item) => (
            <Panel key={item.title} className="p-5">
              <p className="font-display text-lg font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-sm leading-6 text-stone-400">{item.text}</p>
            </Panel>
          ))}
        </div>
      </CatalogSection>
      <CatalogSection title="Legal entity" description="SEISHIN CO., LIMITED — Hong Kong company record behind the HPTA brand.">
        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <Panel className="space-y-4 p-5">
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Legal entity", companyProfile.legalName],
                ["Registered name", companyProfile.registryName],
                ["Business record", companyProfile.businessRegistrationNo],
                ["Status", companyProfile.status],
                ["Commenced", companyProfile.commencedOn],
                ["Issued on", companyProfile.issuedOn]
              ].map(([label, value]) => (
                <div key={label} className="rounded-md border border-white/10 bg-ink-900/70 p-4">
                  <p className="text-[11px] font-medium tracking-[0.2em] text-stone-500">{label}</p>
                  <p className="mt-2 text-sm font-medium text-white">{value}</p>
                </div>
              ))}
            </div>
            <div className="rounded-md border border-white/10 bg-ink-900/70 p-4">
              <p className="text-[11px] font-medium tracking-[0.2em] text-stone-500">Business address</p>
              <p className="mt-2 text-sm leading-6 text-stone-400">{companyProfile.address}</p>
            </div>
          </Panel>
          <Panel className="flex flex-col justify-between gap-4 p-5">
            <div>
              <p className="font-display text-lg font-semibold text-white">Company profile</p>
              <p className="mt-2 text-sm leading-6 text-stone-400">
                Download the company snapshot for distributors and regional partners reviewing HPTA.
              </p>
            </div>
            <Link
              href="/company-profile.pdf"
              className="inline-flex w-fit items-center rounded-md bg-white px-4 py-2.5 text-sm font-medium text-ink-950 hover:bg-steel-200"
            >
              Download PDF
            </Link>
          </Panel>
        </div>
      </CatalogSection>
      <CatalogSection title="Facility" description="Factory and QC context for the brand story.">
        <div id="brochure" className="space-y-6">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {factoryMetrics.map((item) => (
              <Panel key={item.label} className="p-4">
                <p className="font-display text-xl font-semibold text-white">{item.value}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-stone-500">{item.label}</p>
              </Panel>
            ))}
          </div>
          <BrochureGallery assets={brochureAssets} />
        </div>
      </CatalogSection>
      <CatalogSection title="Team" description="Commercial and product contacts.">
        <TeamGrid members={teamMembers} />
      </CatalogSection>
    </>
  );
}
