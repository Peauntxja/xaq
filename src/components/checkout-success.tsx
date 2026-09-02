"use client";

import Link from "next/link";
import { useMemo } from "react";
import { ArrowRight, BadgeCheck, Package, ReceiptText } from "lucide-react";
import { Container, Panel, Badge } from "@/components/ui";
import { formatPrice } from "@/lib/utils";
import { useStore } from "@/components/store-provider";

export function CheckoutSuccess({ orderId }: { orderId?: string | null }) {
  const { orders } = useStore();

  const order = useMemo(() => {
    if (orderId) {
      return orders.find((item) => item.id === orderId) ?? null;
    }
    return orders[orders.length - 1] ?? null;
  }, [orderId, orders]);

  if (!order) {
    return (
      <Container className="py-14">
        <Panel className="mx-auto max-w-2xl space-y-4 bg-white p-6 shadow-none">
          <p className="text-2xl font-semibold text-ink-950">No recent order found.</p>
          <p className="text-sm text-stone-600">Place a demo order from checkout to see the confirmation flow.</p>
          <Link href="/checkout" className="inline-flex items-center gap-2 text-sm text-ink-950 underline underline-offset-4">
            Go to checkout
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Panel>
      </Container>
    );
  }

  return (
    <div className="bg-[#f7f4ee] text-ink-950">
      <section className="border-b border-stone-300 bg-white">
        <Container className="py-10">
          <Badge className="border-stone-300 text-stone-600">Order complete</Badge>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Thanks. Your demo order is in.</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-stone-600">
            This closes the fake backend loop for local demos. The order is stored in the browser and shows up in account.
          </p>
        </Container>
      </section>

      <Container className="grid gap-6 py-8 lg:grid-cols-[1.05fr_0.95fr]">
        <Panel className="space-y-5 bg-white p-6 shadow-none">
          <div className="flex items-center gap-2">
            <BadgeCheck className="h-5 w-5 text-emerald-600" />
            <div>
              <p className="text-lg font-semibold text-ink-950">Order {order.id}</p>
              <p className="text-sm text-stone-600">Status: {order.status}</p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-[12px] border border-stone-200 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Subtotal</p>
              <p className="mt-1 text-lg font-semibold text-ink-950">{formatPrice(order.subtotal)}</p>
            </div>
            <div className="rounded-[12px] border border-stone-200 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Shipping</p>
              <p className="mt-1 text-lg font-semibold text-ink-950">{formatPrice(order.shipping)}</p>
            </div>
            <div className="rounded-[12px] border border-stone-200 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Total</p>
              <p className="mt-1 text-lg font-semibold text-ink-950">{formatPrice(order.total)}</p>
            </div>
          </div>

          <div className="space-y-3 border-t border-stone-200 pt-4">
            <div className="flex items-center gap-2 text-ink-950">
              <Package className="h-4 w-4 text-amber-500" />
              <p className="font-semibold">What happened</p>
            </div>
            <div className="grid gap-2 text-sm text-stone-600">
              <p>The cart was cleared.</p>
              <p>The order was saved in localStorage.</p>
              <p>Account and success views read the same order history.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/collections/all" className="inline-flex items-center justify-center rounded-lg bg-amber-400 px-4 py-2 text-sm font-medium text-stone-950 transition hover:bg-amber-300">
              Continue shopping
            </Link>
            <Link href="/account" className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-ink-950 ring-1 ring-stone-300 transition hover:bg-stone-50">
              View account
            </Link>
          </div>
        </Panel>

        <div className="space-y-6">
          <Panel className="space-y-4 bg-white p-6 shadow-none">
            <div className="flex items-center gap-2 text-ink-950">
              <ReceiptText className="h-4 w-4 text-amber-500" />
              <p className="font-semibold">Delivery details</p>
            </div>
            <div className="space-y-2 text-sm text-stone-600">
              <p>
                {order.shippingAddress.firstName} {order.shippingAddress.lastName}
              </p>
              <p>{order.shippingAddress.address1}</p>
              {order.shippingAddress.address2 ? <p>{order.shippingAddress.address2}</p> : null}
              <p>
                {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}
              </p>
              <p>{order.shippingAddress.country}</p>
              <p>{order.shippingAddress.email}</p>
              <p>{order.shippingMethod}</p>
              <p>{order.paymentMethod}</p>
            </div>
          </Panel>

          <Panel className="space-y-3 bg-white p-6 shadow-none">
            <p className="text-lg font-semibold text-ink-950">Items</p>
            <div className="space-y-3">
              {order.items.map((item) => (
                <div key={`${item.slug}-${item.color}`} className="flex items-start gap-3 border-b border-stone-200 pb-3 last:border-0 last:pb-0">
                  <img src={item.image} alt={item.name} className="h-16 w-16 rounded-[12px] border border-stone-200 object-cover" />
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-ink-950">{item.name}</p>
                    <p className="text-sm text-stone-600">{item.color}</p>
                    <p className="text-sm text-stone-500">
                      Qty {item.quantity} · {formatPrice(item.price)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </Container>
    </div>
  );
}
