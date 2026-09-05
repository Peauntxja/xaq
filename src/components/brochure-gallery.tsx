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
          <p className="font-display text-[11px] tracking-[0.24em] text-stone-500">BROCHURE</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Facility context you can scan fast.
          </h2>
          <p className="text-sm leading-6 text-stone-400">
            Hover a page to enlarge. Factory and QC imagery that supports the HPTA brand story.
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
                "rounded-md border p-4 text-left transition",
                index === activeIndex ? "border-white/30 bg-white/5" : "border-white/10 hover:border-white/20"
              )}
            >
              <p className="text-[11px] tracking-[0.22em] text-stone-500">0{index + 1}</p>
              <p className="mt-2 text-sm font-semibold text-white">{item.title}</p>
              <p className="mt-1 text-sm leading-6 text-stone-400">{item.caption}</p>
            </button>
          ))}
        </div>
      </div>
      <div className="overflow-hidden rounded-lg border border-white/10 bg-ink-900">
        <div className="aspect-[3/4] overflow-hidden">
          <img src={activeAsset.image} alt={activeAsset.title} className="h-full w-full object-cover" />
        </div>
        <div className="border-t border-white/10 p-5">
          <p className="font-display text-lg font-semibold text-white">{activeAsset.title}</p>
          <p className="mt-1 text-sm text-stone-400">{activeAsset.caption}</p>
        </div>
      </div>
    </div>
  );
}
