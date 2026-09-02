import { RichTextPage } from "@/components/page-blocks";
import { policyCopy } from "@/lib/data";
import { Panel } from "@/components/ui";

export default function RefundPolicyPage() {
  return (
    <RichTextPage eyebrow="Policies" title="Refund policy" description="Standard demo copy for returns and exchanges.">
      <Panel className="space-y-4 p-6 text-sm leading-6 text-stone-300">
        <p>{policyCopy.refund}</p>
      </Panel>
    </RichTextPage>
  );
}
