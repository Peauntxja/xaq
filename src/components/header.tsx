"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Menu, Search, ShoppingCart, Scale } from "lucide-react";
import { siteNav } from "@/lib/data";
import { Container, Badge, Button } from "@/components/ui";
import { useStore } from "@/components/store-provider";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const { cartCount, wishlist, compare } = useStore();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/92 backdrop-blur">
      <div className="border-b border-white/5 bg-ink-900/80">
        <Container className="flex items-center justify-between py-2">
          <p className="text-xs uppercase tracking-[0.24em] text-stone-300">Welcome to our store</p>
          <div className="hidden gap-3 text-xs text-stone-400 sm:flex">
            <span>Free shipping above $499</span>
            <span>•</span>
            <span>Demo data only</span>
          </div>
        </Container>
      </div>
      <Container className="flex items-center gap-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm font-semibold text-amber-300">
            H
          </div>
          <div>
            <p className="text-sm font-semibold tracking-wide text-white">Hyper Professional Tattoo Assortment</p>
            <p className="text-xs text-stone-400">Machines, accessories, and support</p>
          </div>
        </Link>
        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          {siteNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm text-stone-300 transition hover:bg-white/8 hover:text-white",
                pathname === item.href && "bg-white/8 text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <Link href="/search">
            <Button variant="ghost" aria-label="Search">
              <Search className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/wishlist">
            <Button variant="ghost" aria-label="Wishlist">
              <Heart className="h-4 w-4" />
              <Badge className="border-white/15 bg-white/5 px-2 py-0 text-[10px] normal-case tracking-normal text-stone-200">
                {wishlist.length}
              </Badge>
            </Button>
          </Link>
          <Link href="/compare-products">
            <Button variant="ghost" aria-label="Compare">
              <Scale className="h-4 w-4" />
              <Badge className="border-white/15 bg-white/5 px-2 py-0 text-[10px] normal-case tracking-normal text-stone-200">
                {compare.length}
              </Badge>
            </Button>
          </Link>
          <Link href="/shopping-cart">
            <Button variant="primary" aria-label="Cart">
              <ShoppingCart className="h-4 w-4" />
              Cart {cartCount}
            </Button>
          </Link>
          <details className="relative lg:hidden">
            <summary className="list-none">
              <Button variant="ghost" aria-label="Menu">
                <Menu className="h-4 w-4" />
              </Button>
            </summary>
            <div className="absolute right-0 mt-2 w-64 rounded-xl border border-white/10 bg-ink-900 p-2 shadow-glow">
              <div className="flex flex-col">
                {siteNav.map((item) => (
                  <Link key={item.href} href={item.href} className="rounded-lg px-3 py-2 text-sm text-stone-200 hover:bg-white/8">
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
