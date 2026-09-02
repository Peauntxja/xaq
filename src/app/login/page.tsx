import { SplitHero, CatalogSection } from "@/components/page-blocks";
import { Panel, Button, FieldLabel } from "@/components/ui";

export default function LoginPage() {
  return (
    <>
      <SplitHero
        eyebrow="Account"
        title="Login and account pages are in place."
        description="The reference store exposes account, login, and order history areas. Here they are mocked, but ready for a future auth layer."
        ctas={[{ label: "Create account", href: "/account", primary: true }, { label: "Cart", href: "/shopping-cart" }]}
        image="/brochure/cover.png"
      />
      <CatalogSection title="Sign in" description="Mock sign-in form for the demo storefront.">
        <Panel className="mx-auto max-w-xl space-y-4 p-5">
          <div className="space-y-2">
            <FieldLabel>Email</FieldLabel>
            <input className="w-full rounded-lg border border-white/10 bg-ink-900 px-3 py-2 text-sm text-white outline-none" />
          </div>
          <div className="space-y-2">
            <FieldLabel>Password</FieldLabel>
            <input type="password" className="w-full rounded-lg border border-white/10 bg-ink-900 px-3 py-2 text-sm text-white outline-none" />
          </div>
          <Button>Log in</Button>
        </Panel>
      </CatalogSection>
    </>
  );
}
