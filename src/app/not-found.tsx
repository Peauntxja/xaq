import Link from "next/link";
import { Container, Panel, PageTitle } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-16">
      <Panel className="p-8">
        <PageTitle title="Page not found" description="The link may be incorrect, or the page may not have been built yet in this demo." />
        <Link href="/" className="mt-6 inline-flex rounded-lg bg-amber-400 px-4 py-2 text-sm font-medium text-stone-950">
          Back home
        </Link>
      </Panel>
    </Container>
  );
}
