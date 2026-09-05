import { SplitHero, CatalogSection } from "@/components/page-blocks";
import { Panel, FieldLabel, Button } from "@/components/ui";
import { companyProfile } from "@/lib/data";

export default async function ContactPage({
  searchParams
}: {
  searchParams: Promise<{ product?: string }>;
}) {
  const { product } = await searchParams;
  const subjectDefault = product ? `Inquiry: ${product}` : "";

  return (
    <>
      <SplitHero
        eyebrow="Contact"
        title="Inquire about HPTA machines."
        description="Tell us your studio or distributor details, region, and the series or model you need. We respond with availability and next steps."
        ctas={[
          { label: "View machines", href: "/collections/machines", primary: true },
          { label: "FAQ", href: "/faq" }
        ]}
        image="/brochure/workshop-qc.png"
      />
      <CatalogSection title="Inquiry form" description="Static form for launch review — no backend yet.">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr]">
          <Panel className="space-y-4 p-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <FieldLabel>Name</FieldLabel>
                <input className="w-full rounded-md border border-white/10 bg-ink-900 px-3 py-2 text-sm text-white outline-none focus:border-white/30" />
              </div>
              <div className="space-y-2">
                <FieldLabel>Email</FieldLabel>
                <input
                  type="email"
                  className="w-full rounded-md border border-white/10 bg-ink-900 px-3 py-2 text-sm text-white outline-none focus:border-white/30"
                />
              </div>
            </div>
            <div className="space-y-2">
              <FieldLabel>Subject</FieldLabel>
              <input
                defaultValue={subjectDefault}
                className="w-full rounded-md border border-white/10 bg-ink-900 px-3 py-2 text-sm text-white outline-none focus:border-white/30"
              />
            </div>
            <div className="space-y-2">
              <FieldLabel>Message</FieldLabel>
              <textarea
                rows={6}
                placeholder="Company, region, volume, preferred series…"
                className="w-full rounded-md border border-white/10 bg-ink-900 px-3 py-2 text-sm text-white outline-none focus:border-white/30"
              />
            </div>
            <Button type="button">Submit inquiry</Button>
          </Panel>
          <div className="space-y-4">
            <Panel className="space-y-4 p-5">
              <div>
                <p className="text-[11px] font-medium tracking-[0.22em] text-stone-500">Brand</p>
                <p className="mt-2 font-display text-lg font-semibold text-white">HPTA</p>
                <p className="mt-1 text-sm text-stone-400">Hyper Professional Tattoo Assortment</p>
              </div>
              <div>
                <p className="text-[11px] font-medium tracking-[0.22em] text-stone-500">Legal entity</p>
                <p className="mt-2 text-sm font-medium text-white">{companyProfile.legalName}</p>
                <p className="mt-1 text-sm text-stone-400">{companyProfile.registryName}</p>
              </div>
              <div className="rounded-md border border-white/10 bg-ink-900/70 p-4 text-sm text-stone-400">
                <p className="text-[11px] font-medium tracking-[0.2em] text-stone-500">Address</p>
                <p className="mt-2 leading-6">{companyProfile.address}</p>
              </div>
            </Panel>
          </div>
        </div>
      </CatalogSection>
    </>
  );
}
