"use client";

import Link from "next/link";
import { useState } from "react";
import { type MachineProduct, type Article, type FAQSection } from "@/lib/data";
import { Panel, Badge } from "@/components/ui";

export function ProductCard({ product }: { product: MachineProduct }) {
  return (
    <Panel className="group flex h-full flex-col overflow-hidden transition duration-300 hover:border-white/25">
      <Link href={`/products/${product.slug}`} className="block aspect-[4/3] overflow-hidden bg-ink-900">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <p className="text-[11px] uppercase tracking-[0.22em] text-stone-500">{product.series}</p>
        <Link href={`/products/${product.slug}`} className="font-display text-lg font-semibold text-white hover:text-steel-200">
          {product.name}
        </Link>
        <p className="text-sm leading-6 text-stone-400">{product.summary}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-2">
          <Badge>{product.type}</Badge>
          <Link
            href={`/pages/contact?product=${product.slug}`}
            className="text-[11px] font-medium uppercase tracking-[0.18em] text-white underline-offset-4 hover:underline"
          >
            Inquire
          </Link>
        </div>
      </div>
    </Panel>
  );
}

export function AccessoryCard({
  name,
  summary,
  images,
  slug
}: {
  name: string;
  summary: string;
  images: string[];
  slug: string;
}) {
  return (
    <Panel className="group flex h-full flex-col overflow-hidden transition hover:border-white/25">
      <div className="aspect-[4/3] overflow-hidden bg-ink-900">
        <img src={images[0]} alt={name} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <p className="text-[11px] uppercase tracking-[0.22em] text-stone-500">Accessory</p>
        <p className="font-display text-lg font-semibold text-white">{name}</p>
        <p className="text-sm leading-6 text-stone-400">{summary}</p>
        <Link
          href={`/pages/contact?product=${slug}`}
          className="mt-auto text-[11px] font-medium uppercase tracking-[0.18em] text-white underline-offset-4 hover:underline"
        >
          Inquire
        </Link>
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
            type="button"
            onClick={() => setActive(index)}
            className={`overflow-hidden rounded-md border ${active === index ? "border-white" : "border-white/10"}`}
          >
            <img src={image} alt={`${name} ${index + 1}`} className="aspect-square w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

export function SpecTable({ specs }: { specs: Record<string, string> }) {
  return (
    <Panel className="overflow-hidden">
      <div className="border-b border-white/10 bg-white/5 px-5 py-4">
        <p className="font-display text-lg font-semibold text-white">Specifications</p>
      </div>
      <table className="w-full text-left text-sm">
        <tbody>
          {Object.entries(specs).map(([label, value]) => (
            <tr key={label} className="border-t border-white/10">
              <th className="w-[40%] px-5 py-3.5 text-[11px] font-medium uppercase tracking-[0.18em] text-stone-500">
                {label}
              </th>
              <td className="px-5 py-3.5 text-stone-200">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Panel>
  );
}

export function FAQAccordion({ sections }: { sections: FAQSection[] }) {
  return (
    <div className="grid gap-4">
      {sections.map((section) => (
        <Panel key={section.title} className="p-4">
          <p className="mb-3 font-display text-lg font-semibold text-white">{section.title}</p>
          <div className="grid gap-3">
            {section.items.map((item) => (
              <details key={item.q} className="rounded-md border border-white/10 bg-ink-900/60 p-3">
                <summary className="cursor-pointer list-none text-sm font-medium text-white">{item.q}</summary>
                <p className="mt-2 text-sm leading-6 text-stone-400">{item.a}</p>
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
        <Panel key={article.slug} className="flex h-full flex-col gap-3 p-4 transition hover:border-white/25">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-stone-500">
            <span>{article.category}</span>
            <span>{article.date}</span>
          </div>
          <p className="font-display text-lg font-semibold text-white">{article.title}</p>
          <p className="text-sm leading-6 text-stone-400">{article.excerpt}</p>
          <Link href={`/blog/${article.slug}`} className="mt-auto text-sm text-steel-300 hover:text-white">
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
          <p className="font-display text-lg font-semibold text-white">{member.name}</p>
          <p className="text-[11px] uppercase tracking-[0.2em] text-steel-300">{member.role}</p>
          <p className="mt-3 text-sm leading-6 text-stone-400">{member.note}</p>
        </Panel>
      ))}
    </div>
  );
}
