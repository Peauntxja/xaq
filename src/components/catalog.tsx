"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Heart, Scale, ShoppingCart, ArrowUpDown, Search, ArrowRight } from "lucide-react";
import { machineProducts, accessories, type MachineProduct, type Article, type FAQSection } from "@/lib/data";
import { Button, Panel, Badge, FieldLabel } from "@/components/ui";
import { formatPrice } from "@/lib/utils";
import { useStore } from "@/components/store-provider";

export function ProductCard({ product }: { product: MachineProduct }) {
  const { addToCart, toggleWishlist, toggleCompare, wishlist, compare } = useStore();
  const [color, setColor] = useState(product.colors[0] ?? "Default");
  const isWishlisted = wishlist.includes(product.slug);
  const isCompared = compare.includes(product.slug);

  return (
    <Panel className="flex h-full flex-col overflow-hidden">
      <Link href={`/products/${product.slug}`} className="group block">
        <div className="aspect-[4/3] overflow-hidden border-b border-white/10 bg-ink-900">
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <Badge>{product.series}</Badge>
            <span className="text-sm text-stone-400">{product.status}</span>
          </div>
          <Link href={`/products/${product.slug}`} className="block text-lg font-semibold text-white hover:text-amber-300">
            {product.name}
          </Link>
          <p className="text-sm leading-6 text-stone-300">{product.summary}</p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-stone-400">
          {product.features.slice(0, 3).map((feature) => (
            <span key={feature} className="rounded-full border border-white/10 px-2.5 py-1">
              {feature}
            </span>
          ))}
        </div>
        <div className="space-y-2">
          <FieldLabel>Color</FieldLabel>
          <select
            value={color}
            onChange={(event) => setColor(event.target.value)}
            className="w-full rounded-lg border border-white/10 bg-ink-900 px-3 py-2 text-sm text-white outline-none"
          >
            {product.colors.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className="mt-auto flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-stone-500">From</p>
            <p className="text-xl font-semibold text-white">{formatPrice(product.price)}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" onClick={() => toggleWishlist(product.slug)} aria-label="Wishlist">
              <Heart className={isWishlisted ? "h-4 w-4 fill-current text-amber-300" : "h-4 w-4"} />
            </Button>
            <Button variant="ghost" onClick={() => toggleCompare(product.slug)} aria-label="Compare">
              <Scale className={isCompared ? "h-4 w-4 text-teal-300" : "h-4 w-4"} />
            </Button>
            <Button onClick={() => addToCart(product.slug, color)}>Add</Button>
          </div>
        </div>
      </div>
    </Panel>
  );
}

export function AccessoryCard({ name, price, summary, images }: { name: string; price: number; summary: string; images: string[] }) {
  return (
    <Panel className="flex h-full flex-col overflow-hidden">
      <div className="aspect-[4/3] border-b border-white/10 bg-ink-900">
        <img src={images[0]} alt={name} className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <p className="text-lg font-semibold text-white">{name}</p>
        <p className="text-sm leading-6 text-stone-300">{summary}</p>
        <div className="mt-auto flex items-center justify-between">
          <p className="text-xl font-semibold text-white">{formatPrice(price)}</p>
          <Button variant="secondary">
            <ShoppingCart className="h-4 w-4" />
            Add
          </Button>
        </div>
      </div>
    </Panel>
  );
}

export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  return (
    <div className="grid gap-3">
      <Panel className="overflow-hidden">
        <div className="aspect-[4/3] bg-ink-900">
          <img src={current} alt={name} className="h-full w-full object-cover" />
        </div>
      </Panel>
      <div className="grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <button
            key={image}
            onClick={() => setActive(index)}
            className={`overflow-hidden rounded-lg border ${active === index ? "border-amber-400" : "border-white/10"}`}
          >
            <img src={image} alt={`${name} ${index + 1}`} className="aspect-square w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

export function ProductActions({ product }: { product: MachineProduct }) {
  const { addToCart, toggleWishlist, toggleCompare, wishlist, compare } = useStore();
  const [color, setColor] = useState(product.colors[0] ?? "Default");
  const [quantity, setQuantity] = useState(1);
  const isWishlisted = wishlist.includes(product.slug);
  const isCompared = compare.includes(product.slug);

  return (
    <Panel className="space-y-4 p-4">
      <div className="space-y-2">
        <FieldLabel>Color</FieldLabel>
        <select
          value={color}
          onChange={(event) => setColor(event.target.value)}
          className="w-full rounded-lg border border-white/10 bg-ink-900 px-3 py-2 text-sm text-white outline-none"
        >
          {product.colors.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
      <div className="space-y-2">
        <FieldLabel>Quantity</FieldLabel>
        <div className="flex items-center gap-2">
          <Button variant="secondary" onClick={() => setQuantity((value) => Math.max(1, value - 1))}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="min-w-12 rounded-lg border border-white/10 bg-ink-900 px-3 py-2 text-center text-sm text-white">
            {quantity}
          </div>
          <Button variant="secondary" onClick={() => setQuantity((value) => value + 1)}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        <Button onClick={() => addToCart(product.slug, color, quantity)}>
          <ShoppingCart className="h-4 w-4" />
          Add to cart
        </Button>
        <Button variant="secondary" onClick={() => toggleWishlist(product.slug)}>
          <Heart className={isWishlisted ? "h-4 w-4 fill-current text-amber-300" : "h-4 w-4"} />
          {isWishlisted ? "Saved" : "Wishlist"}
        </Button>
      </div>
      <Button variant="ghost" className="w-full justify-start" onClick={() => toggleCompare(product.slug)}>
        <Scale className={isCompared ? "h-4 w-4 text-teal-300" : "h-4 w-4"} />
        {isCompared ? "Remove from compare" : "Add to compare"}
      </Button>
      <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-stone-300">
        <p className="font-medium text-white">{formatPrice(product.price)}</p>
        <p className="mt-1">Manual, support, shipping, and warranty are shown below in the product page accordions.</p>
      </div>
    </Panel>
  );
}

export function CollectionToolbar({
  title,
  subtitle,
  count
}: {
  title: string;
  subtitle: string;
  count: number;
}) {
  return (
    <Panel className="flex flex-col gap-4 p-4 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-lg font-semibold text-white">{title}</p>
        <p className="text-sm text-stone-300">{subtitle}</p>
      </div>
      <div className="flex flex-wrap items-center gap-2 text-sm text-stone-400">
        <Badge>{count} items</Badge>
        <Badge>Availability</Badge>
        <Badge>Price</Badge>
        <Badge>Sort</Badge>
      </div>
    </Panel>
  );
}

export function SearchPanel() {
  const [query, setQuery] = useState("");
  const results = useMemo(
    () =>
      machineProducts.filter((item) =>
        `${item.name} ${item.summary} ${item.series} ${item.type}`.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  return (
    <div className="grid gap-4">
      <Panel className="p-4">
        <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-ink-900 px-3 py-2">
          <Search className="h-4 w-4 text-stone-400" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search machines, accessories, articles..."
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-stone-500"
          />
        </div>
      </Panel>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {results.map((product) => (
          <Link key={product.slug} href={`/products/${product.slug}`}>
            <Panel className="p-4 transition hover:border-amber-400/50">
              <p className="text-sm text-stone-400">{product.series}</p>
              <p className="text-lg font-semibold text-white">{product.name}</p>
              <p className="mt-1 text-sm text-stone-300">{product.summary}</p>
            </Panel>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function CompareTable({ products }: { products: MachineProduct[] }) {
  return (
    <Panel className="overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-left text-sm">
          <thead className="bg-white/5 text-stone-200">
            <tr>
              <th className="px-4 py-3">Metric</th>
              {products.map((product) => (
                <th key={product.slug} className="px-4 py-3">
                  {product.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["Series", ...products.map((product) => product.series)],
              ["Type", ...products.map((product) => product.type)],
              ["Price", ...products.map((product) => formatPrice(product.price))],
              ["Status", ...products.map((product) => product.status)],
              ["Compare tag", ...products.map((product) => product.compareTag)],
              ["Colors", ...products.map((product) => product.colors.join(", "))],
              ["Highlight", ...products.map((product) => product.features[0] ?? "")]
            ].map((row) => (
              <tr key={row[0]} className="border-t border-white/10">
                <th className="px-4 py-3 font-medium text-stone-200">{row[0]}</th>
                {row.slice(1).map((value, index) => (
                  <td key={`${row[0]}-${index}`} className="px-4 py-3 text-stone-300">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Panel>
  );
}

export function FAQAccordion({ sections }: { sections: FAQSection[] }) {
  return (
    <div className="grid gap-4">
      {sections.map((section) => (
        <Panel key={section.title} className="p-4">
          <p className="mb-3 text-lg font-semibold text-white">{section.title}</p>
          <div className="grid gap-3">
            {section.items.map((item) => (
              <details key={item.q} className="rounded-lg border border-white/10 bg-ink-900/60 p-3">
                <summary className="cursor-pointer list-none text-sm font-medium text-white">{item.q}</summary>
                <p className="mt-2 text-sm leading-6 text-stone-300">{item.a}</p>
              </details>
            ))}
          </div>
        </Panel>
      ))}
    </div>
  );
}

export function ArticleGrid({ articles }: { articles: Article[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {articles.map((article) => (
        <Panel key={article.slug} className="flex h-full flex-col gap-3 p-4">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-stone-500">
            <span>{article.category}</span>
            <span>{article.date}</span>
          </div>
          <p className="text-lg font-semibold text-white">{article.title}</p>
          <p className="text-sm leading-6 text-stone-300">{article.excerpt}</p>
          <Link href={`/blog/${article.slug}`} className="mt-auto text-sm text-amber-300 hover:text-amber-200">
            Read more
          </Link>
        </Panel>
      ))}
    </div>
  );
}

export function TeamGrid({ members }: { members: Array<{ name: string; role: string; note: string }> }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {members.map((member) => (
        <Panel key={member.name} className="p-4">
          <p className="text-lg font-semibold text-white">{member.name}</p>
          <p className="text-sm uppercase tracking-[0.2em] text-teal-300">{member.role}</p>
          <p className="mt-3 text-sm leading-6 text-stone-300">{member.note}</p>
        </Panel>
      ))}
    </div>
  );
}

export function EventsList({ items }: { items: Array<{ city: string; venue: string; date: string }> }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <Panel key={`${item.city}-${item.date}`} className="p-4">
          <p className="text-lg font-semibold text-white">{item.city}</p>
          <p className="text-sm text-stone-300">{item.venue}</p>
          <p className="mt-3 text-sm uppercase tracking-[0.2em] text-amber-300">{item.date}</p>
        </Panel>
      ))}
    </div>
  );
}

export function StoreSummary() {
  const { cart, wishlist, compare, orders } = useStore();
  return (
    <Panel className="grid gap-4 p-4 sm:grid-cols-4">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Cart</p>
        <p className="text-2xl font-semibold text-white">{cart.length}</p>
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Wishlist</p>
        <p className="text-2xl font-semibold text-white">{wishlist.length}</p>
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Compare</p>
        <p className="text-2xl font-semibold text-white">{compare.length}</p>
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Orders</p>
        <p className="text-2xl font-semibold text-white">{orders.length}</p>
      </div>
    </Panel>
  );
}

export function ProductLines() {
  const groups = [
    { label: "Hybrid / Rotary", items: machineProducts.filter((p) => /rotary|hybrid/i.test(p.type)) },
    { label: "Coil", items: machineProducts.filter((p) => /coil/i.test(p.type)) },
    { label: "Accessories", items: accessories }
  ];

  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {groups.map((group) => (
        <Panel key={group.label} className="p-5">
          <p className="text-lg font-semibold text-white">{group.label}</p>
          <div className="mt-4 grid gap-3">
            {group.items.map((item) => (
              <div key={item.slug} className="rounded-lg border border-white/10 bg-ink-900/70 p-3">
                <p className="font-medium text-white">{item.name}</p>
                <p className="text-sm text-stone-400">{item.summary}</p>
              </div>
            ))}
          </div>
        </Panel>
      ))}
    </div>
  );
}

export function WishlistView() {
  const { wishlist } = useStore();
  const items = machineProducts.filter((product) => wishlist.includes(product.slug));

  if (!items.length) {
    return <Panel className="p-6 text-sm text-stone-300">Your wishlist is empty for now.</Panel>;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((product) => (
        <Panel key={product.slug} className="p-4">
          <p className="text-lg font-semibold text-white">{product.name}</p>
          <p className="text-sm text-stone-300">{product.summary}</p>
          <Link href={`/products/${product.slug}`} className="mt-3 inline-flex text-sm text-amber-300">
            View product
          </Link>
        </Panel>
      ))}
    </div>
  );
}

export function CompareView() {
  const { compare, clearCompare } = useStore();
  const items = machineProducts.filter((product) => compare.includes(product.slug));

  return (
    <div className="grid gap-4">
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="secondary" onClick={clearCompare}>
          Clear compare
        </Button>
        <Badge>{items.length} selected</Badge>
      </div>
      {items.length ? <CompareTable products={items} /> : <Panel className="p-6 text-sm text-stone-300">Add items to compare to see a side-by-side table.</Panel>}
    </div>
  );
}

export function CartView() {
  const { cart, setQuantity, removeFromCart, clearCart } = useStore();
  const items = cart
    .map((line) => {
      const product = machineProducts.find((entry) => entry.slug === line.slug);
      if (!product) return null;
      return { ...line, product };
    })
    .filter(Boolean) as Array<{ slug: string; quantity: number; color: string; product: MachineProduct }>;

  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  if (!items.length) {
    return (
      <Panel className="space-y-4 p-6 text-sm text-stone-300">
        <p>Your cart is empty.</p>
        <Link href="/collections/all" className="inline-flex items-center gap-2 text-amber-300">
          Continue shopping
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Panel>
    );
  }

  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <Panel key={`${item.slug}-${item.color}`} className="grid gap-4 p-4 md:grid-cols-[0.8fr_1.2fr]">
          <div className="aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-ink-900">
            <img src={item.product.images[0]} alt={item.product.name} className="h-full w-full object-cover" />
          </div>
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-lg font-semibold text-white">{item.product.name}</p>
                <p className="text-sm text-stone-400">{item.color}</p>
              </div>
              <button className="text-sm text-amber-300" onClick={() => removeFromCart(item.slug, item.color)}>
                Remove
              </button>
            </div>
            <p className="text-sm text-stone-300">{item.product.summary}</p>
            <div className="flex items-center gap-2">
              <Button variant="secondary" onClick={() => setQuantity(item.slug, item.color, item.quantity - 1)}>
                -
              </Button>
              <div className="min-w-10 text-center text-sm text-white">{item.quantity}</div>
              <Button variant="secondary" onClick={() => setQuantity(item.slug, item.color, item.quantity + 1)}>
                +
              </Button>
              <p className="ml-auto text-lg font-semibold text-white">{formatPrice(item.product.price * item.quantity)}</p>
            </div>
          </div>
        </Panel>
      ))}
      <Panel className="flex flex-wrap items-center justify-between gap-3 p-4">
        <p className="text-sm text-stone-300">Total</p>
        <div className="flex items-center gap-3">
          <p className="text-xl font-semibold text-white">{formatPrice(total)}</p>
          <Link
            href="/checkout"
            className="inline-flex items-center justify-center rounded-lg bg-amber-400 px-4 py-2 text-sm font-medium text-stone-950 transition hover:bg-amber-300"
          >
            Checkout
          </Link>
          <Button variant="secondary" onClick={clearCart}>
            Clear cart
          </Button>
        </div>
      </Panel>
    </div>
  );
}
