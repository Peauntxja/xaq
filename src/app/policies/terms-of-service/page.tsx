import { RichTextPage } from "@/components/page-blocks";
import { policyCopy } from "@/lib/data";
import { Panel } from "@/components/ui";

export default function TermsPage() {
  return (
    <RichTextPage eyebrow="Policies" title="Terms of service" description="Informational terms for the HPTA catalog site.">
      <Panel className="space-y-4 p-6 text-sm leading-6 text-stone-300">
        <p>{policyCopy.terms}</p>
      </Panel>
    </RichTextPage>
  );
}
