import { SplitHero, CatalogSection, StoreSummary } from "@/components/page-blocks";
import { Panel, FieldLabel, Button } from "@/components/ui";

export default function ContactPage() {
  return (
    <>
      <SplitHero
        eyebrow="Contact"
        title="A support page that looks ready to receive real requests."
        description="This page mirrors the reference site's contact form and can later connect to email or CRM handling."
        ctas={[{ label: "FAQ", href: "/faq", primary: true }, { label: "Policies", href: "/policies/privacy-policy" }]}
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
            <StoreSummary />
            <Panel className="p-5 text-sm leading-6 text-stone-300">
              Use this space for support hours, returns email, and wholesale contact details once the live backend is
              connected.
            </Panel>
          </div>
        </div>
      </CatalogSection>
    </>
  );
}
