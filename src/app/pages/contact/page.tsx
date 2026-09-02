import { SplitHero, CatalogSection } from "@/components/page-blocks";
import { Panel, FieldLabel, Button } from "@/components/ui";
import { companyProfile } from "@/lib/data";

export default function ContactPage() {
  return (
    <>
      <SplitHero
        eyebrow="Wholesale contact"
        title="A B2B contact page that feels ready for real inquiries."
        description="Use this page for distributor questions, price requests, account setup, and regional partnership conversations."
        ctas={[{ label: "Download profile", href: "/company-profile.pdf", primary: true }, { label: "FAQ", href: "/faq" }]}
        image="https://images.unsplash.com/photo-1516321310768-61cffe94f6e9?auto=format&fit=crop&w=1200&q=80"
      />
      <CatalogSection title="Contact form" description="Static form controls for launch review.">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr]">
          <Panel className="space-y-4 p-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <FieldLabel>Name</FieldLabel>
                <input className="w-full rounded-lg border border-white/10 bg-ink-900 px-3 py-2 text-sm text-white outline-none" />
              </div>
              <div className="space-y-2">
                <FieldLabel>Email</FieldLabel>
                <input className="w-full rounded-lg border border-white/10 bg-ink-900 px-3 py-2 text-sm text-white outline-none" />
              </div>
            </div>
            <div className="space-y-2">
              <FieldLabel>Subject</FieldLabel>
              <input className="w-full rounded-lg border border-white/10 bg-ink-900 px-3 py-2 text-sm text-white outline-none" />
            </div>
            <div className="space-y-2">
              <FieldLabel>Message</FieldLabel>
              <textarea rows={6} className="w-full rounded-lg border border-white/10 bg-ink-900 px-3 py-2 text-sm text-white outline-none" />
            </div>
            <Button>Submit</Button>
          </Panel>
          <div className="space-y-4">
            <Panel className="space-y-4 p-5">
              <div>
                <p className="text-[11px] font-medium tracking-[0.22em] text-stone-500">Business details</p>
                <p className="mt-2 text-lg font-semibold text-ink-950">{companyProfile.legalName}</p>
                <p className="mt-1 text-sm text-stone-600">{companyProfile.registryName}</p>
              </div>
              <div className="grid gap-3 text-sm">
                <div className="rounded-[12px] border border-stone-200 bg-[#fcfbf8] p-4">
                  <p className="text-[11px] font-medium tracking-[0.2em] text-stone-500">Registration</p>
                  <p className="mt-2 text-stone-700">{companyProfile.businessRegistrationNo}</p>
                </div>
                <div className="rounded-[12px] border border-stone-200 bg-[#fcfbf8] p-4">
                  <p className="text-[11px] font-medium tracking-[0.2em] text-stone-500">Address</p>
                  <p className="mt-2 leading-6 text-stone-700">{companyProfile.address}</p>
                </div>
              </div>
              <p className="text-sm leading-6 text-stone-600">
                For trade enquiries, include your company name, region, expected volume, and the product family you want to review first.
              </p>
            </Panel>
          </div>
        </div>
      </CatalogSection>
    </>
  );
}
