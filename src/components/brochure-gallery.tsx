"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import type { BrochureAsset } from "@/lib/data";

export function BrochureGallery({
  assets,
  className
}: {
  assets: BrochureAsset[];
  className?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeAsset = useMemo(() => assets[activeIndex] ?? assets[0], [assets, activeIndex]);

  if (!assets.length) return null;

  return (
    <div className={cn("grid gap-4 xl:grid-cols-[1fr_1.25fr]", className)}>
      <div className="space-y-4">
        <div className="max-w-xl space-y-4">
          <p className="text-[11px] font-medium tracking-[0.24em] text-stone-500">BROCHURE</p>
          <h2 className="text-3xl font-semibold tracking-tight text-ink-950 sm:text-5xl">
            Proof of scale, in a format buyers can scan fast.
          </h2>
          <p className="text-sm leading-6 text-stone-600 sm:text-base">
            Hover any brochure page to enlarge it. The preview updates immediately so the company story feels
            closer to a real printed deck.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {assets.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              className={cn(
                "group rounded-[16px] border bg-[#fcfbf8] p-4 text-left transition",
                index === activeIndex
                  ? "border-stone-300 shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
                  : "border-stone-200 hover:border-stone-300 hover:shadow-[0_18px_40px_rgba(15,23,42,0.06)]"
              )}
            >
              <p className="text-[11px] font-medium tracking-[0.22em] text-stone-500">0{index + 1}</p>
              <p className="mt-2 text-sm font-semibold text-ink-950">{item.title}</p>
              <p className="mt-1 text-sm leading-6 text-stone-600">{item.caption}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="group relative overflow-hidden rounded-[22px] border border-stone-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.06)]">
          <div className="aspect-[3/4] overflow-hidden bg-stone-100">
            <img
              src={activeAsset.image}
              alt={activeAsset.title}
              className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
            />
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent p-5 text-white">
            <p className="text-[11px] font-medium tracking-[0.24em] text-white/70">ACTIVE PREVIEW</p>
            <p className="mt-2 text-lg font-semibold">{activeAsset.title}</p>
            <p className="mt-1 text-sm leading-6 text-white/80">{activeAsset.caption}</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
          {assets.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              className={cn(
                "overflow-hidden rounded-[18px] border text-left transition",
                index === activeIndex
                  ? "border-stone-300 shadow-[0_18px_40px_rgba(15,23,42,0.1)]"
                  : "border-stone-200 hover:border-stone-300 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
              )}
            >
              <div className="aspect-[16/10] overflow-hidden bg-stone-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className={cn(
                    "h-full w-full object-cover transition duration-700 ease-out",
                    index === activeIndex ? "scale-[1.04]" : "group-hover:scale-[1.05]"
                  )}
                />
              </div>
              <div className="border-t border-stone-200 bg-white p-4">
                <p className="text-sm font-semibold text-ink-950">{item.title}</p>
                <p className="mt-1 text-sm leading-6 text-stone-600">{item.caption}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
