"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { siteNav } from "@/lib/data";
import { Container } from "@/components/ui";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/90 backdrop-blur-md">
      <Container className="flex items-center gap-4 py-3 lg:py-4">
        <Link href="/" className="flex shrink-0 items-center">
          <img
            src="/brand/hpta-logo.png"
            alt="HPTA — Hyper Professional Tattoo Assortment"
            className="h-11 w-auto object-contain invert sm:h-12"
          />
        </Link>
        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {siteNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-[12px] font-medium tracking-[0.14em] text-stone-400 transition hover:bg-white/5 hover:text-white",
                pathname === item.href && "bg-white/5 text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <details className="relative ml-auto lg:hidden">
          <summary className="list-none inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-stone-300">
            <Menu className="h-4 w-4" />
          </summary>
          <div className="absolute right-0 mt-2 w-56 rounded-lg border border-white/10 bg-ink-900 p-2 shadow-glow">
            {siteNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-md px-3 py-2 text-sm text-stone-300 hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </details>
      </Container>
    </header>
  );
}
