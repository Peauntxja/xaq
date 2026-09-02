import { RichTextPage } from "@/components/page-blocks";
import { policyCopy } from "@/lib/data";
import { Panel } from "@/components/ui";

export default function PrivacyPolicyPage() {
  return (
    <RichTextPage eyebrow="Policies" title="Privacy policy" description="Static policy page for the demo storefront.">
      <Panel className="space-y-4 p-6 text-sm leading-6 text-stone-300">
        <p>{policyCopy.privacy}</p>
        <p>Last updated: August 22, 2026</p>
      </Panel>
    </RichTextPage>
  );
}
