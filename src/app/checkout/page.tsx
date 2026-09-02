"use client";

import Link from "next/link";
import { useMemo, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, CheckCircle2, CreditCard, Truck } from "lucide-react";
import { machineProducts } from "@/lib/data";
import { Container, Panel, FieldLabel, Button, Badge } from "@/components/ui";
import { formatPrice } from "@/lib/utils";
import { useStore } from "@/components/store-provider";

const shippingOptions = [
  { id: "standard", label: "Standard shipping", detail: "5-7 business days", costNote: "Free over $499" },
  { id: "express", label: "Express shipping", detail: "2-3 business days", costNote: "$34 flat rate" }
];

const paymentOptions = ["Card ending 4242", "Apple Pay", "PayPal"];

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, placeOrder } = useStore();
  const [shippingMethod, setShippingMethod] = useState(shippingOptions[0].label);
  const [paymentMethod, setPaymentMethod] = useState(paymentOptions[0]);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: "United States"
  });

  const items = useMemo(
    () =>
      cart
        .map((line) => {
          const product = machineProducts.find((entry) => entry.slug === line.slug);
          if (!product) return null;
          return { ...line, product };
        })
        .filter(Boolean) as Array<{ slug: string; quantity: number; color: string; product: (typeof machineProducts)[number] }>,
    [cart]
  );

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = shippingMethod === "Express shipping" ? 34 : subtotal >= 499 ? 0 : 18;
  const tax = Math.round(subtotal * 0.085);
  const total = subtotal + shipping + tax;

  const updateField = (key: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const canSubmit =
    items.length > 0 &&
    form.firstName &&
    form.lastName &&
    form.email &&
    form.address1 &&
    form.city &&
    form.state &&
    form.zip;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit || submitting) return;

    setSubmitting(true);
    const order = placeOrder({
      shippingAddress: form,
      shippingMethod,
      paymentMethod
    });

    if (order) {
      router.push(`/checkout/success?order=${order.id}`);
      return;
    }

    setSubmitting(false);
  };

  if (!items.length) {
    return (
      <Container className="py-14">
        <Panel className="mx-auto max-w-2xl p-6">
          <p className="text-lg font-semibold text-white">Your cart is empty.</p>
          <p className="mt-2 text-sm text-stone-300">Add a machine from the catalog before trying the demo checkout.</p>
          <Link href="/collections/all" className="mt-4 inline-flex items-center gap-2 text-sm text-amber-300">
            Continue shopping
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
          <div className="max-w-3xl">
            <Badge className="border-stone-300 text-stone-600">Checkout</Badge>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Demo checkout</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-stone-600">
              This is a fake backend flow for local demo use. It captures shipping details, records a local order, and
              moves to a success page.
            </p>
          </div>
        </Container>
      </section>

      <Container className="grid gap-6 py-8 lg:grid-cols-[1.1fr_0.9fr]">
        <form onSubmit={handleSubmit} className="space-y-6">
          <Panel className="space-y-5 bg-white p-6 shadow-none">
            <div className="flex items-center gap-2 text-ink-950">
              <Truck className="h-4 w-4 text-amber-500" />
              <p className="font-semibold">Shipping address</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["firstName", "First name"],
                ["lastName", "Last name"],
                ["email", "Email"],
                ["phone", "Phone"]
              ].map(([key, label]) => (
                <div key={key} className="space-y-2">
                  <FieldLabel>{label}</FieldLabel>
                  <input
                    value={form[key as keyof typeof form]}
                    onChange={(event) => updateField(key as keyof typeof form, event.target.value)}
                    type={key === "email" ? "email" : "text"}
                    className="h-11 w-full rounded-[12px] border border-stone-300 px-3 text-sm outline-none"
                  />
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <FieldLabel>Address</FieldLabel>
              <input
                value={form.address1}
                onChange={(event) => updateField("address1", event.target.value)}
                className="h-11 w-full rounded-[12px] border border-stone-300 px-3 text-sm outline-none"
              />
            </div>
            <div className="space-y-2">
              <FieldLabel>Address line 2</FieldLabel>
              <input
                value={form.address2}
                onChange={(event) => updateField("address2", event.target.value)}
                className="h-11 w-full rounded-[12px] border border-stone-300 px-3 text-sm outline-none"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["city", "City"],
                ["state", "State"],
                ["zip", "ZIP"]
              ].map(([key, label]) => (
                <div key={key} className="space-y-2">
                  <FieldLabel>{label}</FieldLabel>
                  <input
                    value={form[key as keyof typeof form]}
                    onChange={(event) => updateField(key as keyof typeof form, event.target.value)}
                    className="h-11 w-full rounded-[12px] border border-stone-300 px-3 text-sm outline-none"
                  />
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <FieldLabel>Country</FieldLabel>
              <input
                value={form.country}
                onChange={(event) => updateField("country", event.target.value)}
                className="h-11 w-full rounded-[12px] border border-stone-300 px-3 text-sm outline-none"
              />
            </div>
          </Panel>

          <Panel className="space-y-4 bg-white p-6 shadow-none">
            <div className="flex items-center gap-2 text-ink-950">
              <Truck className="h-4 w-4 text-amber-500" />
              <p className="font-semibold">Shipping method</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {shippingOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setShippingMethod(option.label)}
                  className={`rounded-[12px] border p-4 text-left transition ${
                    shippingMethod === option.label ? "border-amber-400 bg-amber-50" : "border-stone-300 bg-white"
                  }`}
                >
                  <p className="font-medium text-ink-950">{option.label}</p>
                  <p className="mt-1 text-sm text-stone-600">{option.detail}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-stone-500">{option.costNote}</p>
                </button>
              ))}
            </div>
          </Panel>

          <Panel className="space-y-4 bg-white p-6 shadow-none">
            <div className="flex items-center gap-2 text-ink-950">
              <CreditCard className="h-4 w-4 text-amber-500" />
              <p className="font-semibold">Payment method</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {paymentOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setPaymentMethod(option)}
                  className={`rounded-[12px] border px-4 py-3 text-left text-sm transition ${
                    paymentMethod === option ? "border-amber-400 bg-amber-50" : "border-stone-300 bg-white"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </Panel>

          <Button type="submit" className="w-full py-3 text-base" disabled={!canSubmit || submitting}>
            {submitting ? "Placing order..." : "Place demo order"}
          </Button>
        </form>

        <div className="space-y-6">
          <Panel className="space-y-4 bg-white p-6 shadow-none">
            <p className="text-lg font-semibold text-ink-950">Order summary</p>
            <div className="space-y-3">
              {items.map((item) => (
                <div key={`${item.slug}-${item.color}`} className="flex items-start justify-between gap-4 border-b border-stone-200 pb-3 last:border-0 last:pb-0">
                  <div>
                    <p className="font-medium text-ink-950">{item.product.name}</p>
                    <p className="text-sm text-stone-600">
                      {item.color} · Qty {item.quantity}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-ink-950">{formatPrice(item.product.price * item.quantity)}</p>
                </div>
              ))}
            </div>
            <div className="space-y-2 border-t border-stone-200 pt-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-stone-600">Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-600">Shipping</span>
                <span>{formatPrice(shipping)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-600">Tax</span>
                <span>{formatPrice(tax)}</span>
              </div>
              <div className="flex items-center justify-between border-t border-stone-200 pt-2 text-base font-semibold">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
          </Panel>

          <Panel className="space-y-3 bg-white p-6 shadow-none">
            <p className="text-lg font-semibold text-ink-950">Demo flow</p>
            {[
              "Cart items are stored locally.",
              "Checkout writes a mock order into localStorage.",
              "Success page and account page read the same order history."
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-stone-600">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                <span>{item}</span>
              </div>
            ))}
          </Panel>
        </div>
      </Container>
    </div>
  );
}
