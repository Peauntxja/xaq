import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticleBySlug, articles } from "@/lib/data";
import { Container, Panel, PageTitle, Section } from "@/components/ui";

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <Section className="border-b border-white/10">
      <Container className="space-y-6 py-8">
        <PageTitle eyebrow={article.category} title={article.title} description={article.excerpt} />
        <Panel className="prose prose-invert max-w-none bg-white/5 p-6">
          <p>
            This is a static editorial page. It can be swapped later for CMS-driven content, but it already gives the
            store a usable article layout and a place for product education.
          </p>
          <p>
            The reference site uses its blog for support, conventions, and brand story. The same idea can live here
            without any backend work.
          </p>
          <p>
            Returned article slug: <strong>{slug}</strong>
          </p>
        </Panel>
        <div className="flex flex-wrap gap-3">
          <Link href="/blog" className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">
            Back to blog
          </Link>
          <Link href="/collections/all" className="rounded-lg bg-amber-400 px-4 py-2 text-sm font-medium text-stone-950">
            Shop products
          </Link>
        </div>
      </Container>
    </Section>
  );
}
