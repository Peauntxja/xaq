import { RichTextPage } from "@/components/page-blocks";
import { policyCopy } from "@/lib/data";
import { Panel } from "@/components/ui";

export default function ShippingPolicyPage() {
  return (
    <RichTextPage eyebrow="Policies" title="Shipping policy" description="Delivery expectations confirmed on inquire.">
      <Panel className="space-y-4 p-6 text-sm leading-6 text-stone-300">
        <p>{policyCopy.shipping}</p>
      </Panel>
    </RichTextPage>
  );
}
