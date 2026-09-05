import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticleBySlug, articles } from "@/lib/data";
import { Container, Panel, PageTitle, Section } from "@/components/ui";

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

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
        <Panel className="space-y-4 p-6 text-sm leading-7 text-stone-300">
          <p>
            {article.excerpt} This page is a static editorial layout for brand education — swap in full CMS content when you are ready.
          </p>
          <p>
            Use the machine series pages to match technique to hardware, then inquire with the models that fit your bench.
          </p>
        </Panel>
        <div className="flex flex-wrap gap-3">
          <Link href="/blog" className="rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10">
            Back to blog
          </Link>
          <Link href="/collections/machines" className="rounded-md bg-white px-4 py-2 text-sm font-medium text-ink-950 hover:bg-steel-200">
            View machines
          </Link>
        </div>
      </Container>
    </Section>
  );
}
