import Link from "next/link";
import { Container, Badge } from "@/components/ui";
import { siteNav } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-900">
      <Container className="grid gap-8 py-12 md:grid-cols-4">
        <div className="space-y-3 md:col-span-2">
          <p className="text-lg font-semibold text-white">Hyper Professional Tattoo Assortment</p>
          <p className="max-w-xl text-sm leading-6 text-stone-300">
            A premium tattoo equipment demo store rebuilt as a B2B-ready, Vercel-deployable experience.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge>Official profile</Badge>
            <Badge>Wholesale ready</Badge>
            <Badge>Static deploy</Badge>
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-stone-400">Main Links</p>
          <div className="grid gap-2">
            {siteNav.slice(0, 6).map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-stone-300 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-stone-400">Customer Service</p>
          <div className="grid gap-2 text-sm text-stone-300">
            <Link href="/faq" className="hover:text-white">
              FAQ
            </Link>
            <Link href="/pages/contact" className="hover:text-white">
              Contact
            </Link>
            <Link href="/policies/privacy-policy" className="hover:text-white">
              Privacy policy
            </Link>
            <Link href="/policies/refund-policy" className="hover:text-white">
              Refund policy
            </Link>
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-4 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Hyper Professional Tattoo Assortment</p>
          <p>Powered by Next.js and Vercel</p>
        </Container>
      </div>
    </footer>
  );
}
