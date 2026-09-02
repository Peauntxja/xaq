import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Panel, PageTitle, Section, Badge } from "@/components/ui";
import {
  ProductCard,
  AccessoryCard,
  FAQAccordion,
  ArticleGrid,
  TeamGrid,
  EventsList,
  StoreSummary,
  CompareTable,
  ProductGallery,
  ProductActions,
  CompareView,
  SearchPanel,
  CartView,
  WishlistView
} from "@/components/catalog";
import { type MachineProduct, type Article, type FAQSection, type TeamMember, type EventItem } from "@/lib/data";

export function SplitHero({
  eyebrow,
  title,
  description,
  ctas,
  image,
  imageAlt
}: {
  eyebrow?: string;
  title: string;
  description: string;
  ctas?: Array<{ label: string; href: string; primary?: boolean }>;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <Section className="border-b border-white/10">
      <Container className="grid gap-8 py-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-12">
        <div className="space-y-5">
          {eyebrow ? <Badge>{eyebrow}</Badge> : null}
          <PageTitle title={title} description={description} />
          <div className="flex flex-wrap gap-3">
            {ctas?.map((cta) => (
              <Link
                key={cta.href}
                href={cta.href}
                className={
                  cta.primary
                    ? "inline-flex items-center gap-2 rounded-lg bg-amber-400 px-4 py-2 text-sm font-medium text-stone-950"
                    : "inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white"
                }
              >
                {cta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
        {image ? (
          <Panel className="overflow-hidden">
            <div className="aspect-[4/3] bg-ink-900">
              <img src={image} alt={imageAlt ?? title} className="h-full w-full object-cover" />
            </div>
          </Panel>
        ) : null}
      </Container>
    </Section>
  );
}

export function CatalogSection({
  title,
  description,
  children
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <Section>
      <Container className="space-y-6">
        <PageTitle eyebrow="Catalog" title={title} description={description} />
        {children}
      </Container>
    </Section>
  );
}

export function SupportSection({
  title,
  description,
  children
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <Section>
      <Container className="space-y-6">
        <PageTitle eyebrow="Support" title={title} description={description} />
        {children}
      </Container>
    </Section>
  );
}

export function RichTextPage({
  eyebrow,
  title,
  description,
  children
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <Section className="border-b border-white/10">
      <Container className="space-y-6 py-8">
        <PageTitle eyebrow={eyebrow} title={title} description={description} />
        {children}
      </Container>
    </Section>
  );
}

export {
  ProductCard,
  AccessoryCard,
  FAQAccordion,
  ArticleGrid,
  TeamGrid,
  EventsList,
  StoreSummary,
  CompareTable,
  ProductGallery,
  ProductActions,
  CompareView,
  SearchPanel,
  CartView,
  WishlistView
};
