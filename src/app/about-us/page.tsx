import Link from "next/link";
import { SplitHero, CatalogSection, TeamGrid } from "@/components/page-blocks";
import { Panel } from "@/components/ui";
import { companyProfile, companyStrengths, teamMembers } from "@/lib/data";

export default function AboutPage() {
  return (
    <>
      <SplitHero
        eyebrow="Company profile"
        title="Built to show a real business, not just a catalog."
        description="This version lifts the company credentials out of the PDF and places them where a B2B buyer expects to see them: on the about page, in the hero, and in the contact flow."
        ctas={[
          { label: "Download profile", href: "/company-profile.pdf", primary: true },
          { label: "Wholesale contact", href: "/pages/contact" }
        ]}
        image="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80"
      />
      <CatalogSection title="Official record" description="The PDF details that help the site feel like a real company page.">
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
                <div key={label} className="rounded-[12px] border border-stone-200 bg-[#fcfbf8] p-4">
                  <p className="text-[11px] font-medium tracking-[0.2em] text-stone-500">{label}</p>
                  <p className="mt-2 text-sm font-medium text-ink-950">{value}</p>
                </div>
              ))}
            </div>
            <div className="rounded-[12px] border border-stone-200 bg-[#fcfbf8] p-4">
              <p className="text-[11px] font-medium tracking-[0.2em] text-stone-500">Business address</p>
              <p className="mt-2 text-sm leading-6 text-stone-600">{companyProfile.address}</p>
            </div>
          </Panel>
          <div className="grid gap-4">
            {companyStrengths.map((item) => (
              <Panel key={item.title} className="p-5">
                <p className="text-lg font-semibold text-ink-950">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-stone-600">{item.text}</p>
              </Panel>
            ))}
            <Panel className="p-5">
              <p className="text-lg font-semibold text-ink-950">Company profile</p>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                The PDF is now available as a direct download for buyers, agents, and distributors who want to review the company snapshot before reaching out.
              </p>
              <Link
                href="/company-profile.pdf"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-ink-800"
              >
                Download PDF
              </Link>
            </Panel>
          </div>
        </div>
      </CatalogSection>
      <CatalogSection title="Commercial team" description="The people behind the demo store and wholesale flow.">
        <TeamGrid members={teamMembers} />
      </CatalogSection>
    </>
  );
}
