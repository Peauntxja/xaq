"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, ShoppingCart, UserRound, ChevronDown } from "lucide-react";
import { siteNav } from "@/lib/data";
import { Container } from "@/components/ui";
import { useStore } from "@/components/store-provider";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const { cartCount } = useStore();

  const infoLinks = [
    { label: "ABOUT", href: "/about-us" },
    { label: "FAQ", href: "/faq" },
    { label: "CONTACT", href: "/pages/contact" },
    { label: "POLICIES", href: "/policies/privacy-policy" }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="border-b border-stone-200 bg-stone-50">
        <Container className="flex items-center justify-between py-2">
          <p className="text-[11px] font-medium tracking-[0.24em] text-stone-500">WELCOME TO OUR STORE</p>
          <p className="hidden text-[11px] text-stone-500 sm:block">Free shipping above $499</p>
        </Container>
      </div>
      <Container className="flex items-center gap-4 py-3 lg:py-4">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="https://hptausa.com/cdn/shop/files/HPTA.jpg?v=1779331648&width=500"
            alt="Hyper Professional Tattoo Assortment"
            className="h-9 w-auto object-contain"
          />
          <span className="sr-only">Hyper Professional Tattoo Assortment</span>
        </Link>
        <nav className="ml-auto hidden items-center gap-1 xl:flex">
          {siteNav.map((item) => (
            item.label === "COMPANY" ? (
              <details key={item.href} className="relative">
                <summary
                  className={cn(
                    "flex list-none items-center gap-1 rounded-[12px] px-3 py-2 text-[13px] font-medium tracking-[0.08em] text-stone-700 transition hover:bg-stone-100 hover:text-ink-950",
                    pathname === item.href && "bg-stone-100 text-ink-950"
                  )}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </summary>
                <div className="absolute left-0 mt-2 w-48 rounded-[14px] border border-stone-200 bg-white p-2 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                  <div className="grid gap-1">
                    {infoLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="rounded-[10px] px-3 py-2 text-sm text-stone-700 transition hover:bg-stone-100 hover:text-ink-950"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </details>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-[12px] px-3 py-2 text-[13px] font-medium tracking-[0.08em] text-stone-700 transition hover:bg-stone-100 hover:text-ink-950",
                  pathname === item.href && "bg-stone-100 text-ink-950"
                )}
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>
        <div className="ml-auto hidden items-center gap-2 xl:flex">
          <Link
            href="/search"
            aria-label="Search"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[12px] border border-stone-200 text-stone-700 transition hover:bg-stone-100 hover:text-ink-950"
          >
            <Search className="h-4 w-4" />
          </Link>
          <Link
            href="/account"
            aria-label="Account"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[12px] border border-stone-200 text-stone-700 transition hover:bg-stone-100 hover:text-ink-950"
          >
            <UserRound className="h-4 w-4" />
          </Link>
          <Link
            href="/shopping-cart"
            aria-label="Cart"
            className="inline-flex h-10 items-center gap-2 rounded-[12px] bg-amber-400 px-4 text-sm font-medium text-ink-950 transition hover:bg-amber-300"
          >
            <ShoppingCart className="h-4 w-4" />
            Cart {cartCount}
          </Link>
        </div>
        <div className="ml-auto flex items-center gap-2 xl:hidden">
          <Link
            href="/search"
            aria-label="Search"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[12px] border border-stone-200 text-stone-700 transition hover:bg-stone-100 hover:text-ink-950"
          >
            <Search className="h-4 w-4" />
          </Link>
          <Link
            href="/shopping-cart"
            aria-label="Cart"
            className="inline-flex h-10 items-center gap-2 rounded-[12px] bg-amber-400 px-4 text-sm font-medium text-ink-950 transition hover:bg-amber-300"
          >
            <ShoppingCart className="h-4 w-4" />
            {cartCount}
          </Link>
          <details className="relative">
            <summary className="list-none inline-flex h-10 w-10 items-center justify-center rounded-[12px] border border-stone-200 text-stone-700 transition hover:bg-stone-100 hover:text-ink-950">
              <Menu className="h-4 w-4" />
            </summary>
            <div className="absolute right-0 mt-2 w-72 rounded-[14px] border border-stone-200 bg-white p-2 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <div className="grid gap-1">
                {siteNav.map((item) => (
                  <Link key={item.href} href={item.href} className="rounded-[10px] px-3 py-2 text-sm text-stone-700 hover:bg-stone-100 hover:text-ink-950">
                    {item.label}
                  </Link>
                ))}
                <div className="my-1 h-px bg-stone-200" />
                {infoLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="rounded-[10px] px-3 py-2 text-sm text-stone-700 hover:bg-stone-100 hover:text-ink-950">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </details>
        </div>
      </Container>
    </header>
  );
}
