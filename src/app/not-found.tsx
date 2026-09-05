import Link from "next/link";
import { Container, Panel, PageTitle } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-16">
      <Panel className="p-8">
        <PageTitle title="Page not found" description="This route is not part of the HPTA brand catalog." />
        <Link href="/" className="mt-6 inline-flex rounded-md bg-white px-4 py-2.5 text-sm font-medium text-ink-950 hover:bg-steel-200">
          Back home
        </Link>
      </Panel>
    </Container>
  );
}
