import { CheckoutSuccess } from "@/components/checkout-success";

export default async function CheckoutSuccessPage({
  searchParams
}: {
  searchParams?: Promise<{ order?: string | string[] }>;
}) {
  const resolved = searchParams ? await searchParams : undefined;
  const orderId = Array.isArray(resolved?.order) ? resolved.order[0] : resolved?.order;
  return <CheckoutSuccess orderId={orderId ?? null} />;
}
