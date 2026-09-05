import Link from "next/link";
import { Container } from "@/components/ui";
import { companyProfile, siteNav } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-900">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <img src="/brand/hpta-logo.png" alt="HPTA" className="h-14 w-auto object-contain invert" />
          <p className="font-display text-sm tracking-[0.2em] text-white">HPTA</p>
          <p className="max-w-md text-sm leading-6 text-stone-400">
            Hyper Professional Tattoo Assortment — machines engineered for artists who demand precision, endurance, and a clean bench.
          </p>
          <p className="text-xs leading-5 text-stone-500">
            Legal entity: {companyProfile.legalName} ({companyProfile.registryName})
          </p>
        </div>
        <div>
          <p className="mb-4 text-[11px] font-medium tracking-[0.22em] text-stone-500">NAVIGATION</p>
          <div className="grid gap-2">
            {siteNav.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-stone-300 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 text-[11px] font-medium tracking-[0.22em] text-stone-500">INQUIRE</p>
          <div className="grid gap-2 text-sm text-stone-300">
            <Link href="/pages/contact" className="hover:text-white">
              Contact
            </Link>
            <Link href="/faq" className="hover:text-white">
              FAQ
            </Link>
            <Link href="/policies/privacy-policy" className="hover:text-white">
              Privacy policy
            </Link>
            <Link href="/company-profile.pdf" className="hover:text-white">
              Company profile
            </Link>
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-4 text-xs text-stone-500 sm:flex-row sm:justify-between">
          <p>© 2026 HPTA — Hyper Professional Tattoo Assortment</p>
          <p>{companyProfile.legalName}</p>
        </Container>
      </div>
    </footer>
  );
}
