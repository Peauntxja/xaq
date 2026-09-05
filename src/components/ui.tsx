import { cn } from "@/lib/utils";

export function Container({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("mx-auto w-full max-w-[100rem] px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}

export function Section({
  children,
  className,
  id
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-12 sm:py-16", className)}>
      {children}
    </section>
  );
}

export function Panel({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-lg border border-white/10 bg-ink-850/80 shadow-glow backdrop-blur", className)}>
      {children}
    </div>
  );
}

export function Badge({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-steel-300",
        className
      )}
    >
      {children}
    </span>
  );
}

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
}) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition",
        variant === "primary" && "bg-white text-ink-950 hover:bg-steel-200",
        variant === "secondary" && "border border-white/15 bg-white/5 text-white hover:bg-white/10",
        variant === "ghost" && "text-stone-300 hover:bg-white/5 hover:text-white",
        className
      )}
    >
      {children}
    </button>
  );
}

export function PageTitle({
  eyebrow,
  title,
  description
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl space-y-3">
      {eyebrow ? (
        <p className="font-display text-[11px] uppercase tracking-[0.28em] text-steel-300">{eyebrow}</p>
      ) : null}
      <h1 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h1>
      {description ? <p className="max-w-2xl text-sm leading-6 text-stone-400 sm:text-base">{description}</p> : null}
    </div>
  );
}

export function FieldLabel({ children }: { children: React.ReactNode }) {
  return <label className="block text-[11px] uppercase tracking-[0.2em] text-stone-500">{children}</label>;
}
