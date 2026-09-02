"use client";

import { Badge } from "@/components/ui";
import { useStore } from "@/components/store-provider";
import { formatPrice } from "@/lib/utils";

export function AccountOrders() {
  const { orders } = useStore();

  if (!orders.length) {
    return (
      <div className="rounded-lg border border-white/10 bg-ink-900/70 px-3 py-4 text-sm text-stone-300">
        No orders yet. Complete a demo checkout to populate this section.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {orders
        .slice()
        .reverse()
        .map((order) => (
          <div key={order.id} className="rounded-lg border border-white/10 bg-ink-900/70 px-3 py-3 text-sm text-stone-300">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-medium text-white">{order.id}</p>
              <Badge>{order.status}</Badge>
            </div>
            <p className="mt-2 text-stone-400">
              {order.shippingAddress.firstName} {order.shippingAddress.lastName}
            </p>
            <p className="mt-1 text-stone-400">{order.shippingMethod}</p>
            <p className="mt-1 text-white">{formatPrice(order.total)}</p>
          </div>
        ))}
    </div>
  );
}
