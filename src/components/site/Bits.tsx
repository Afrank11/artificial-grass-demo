import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Stars({ className }: { className?: string }) {
  return (
    <div className={cn("flex gap-0.5", className)} aria-label="Rated 5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-star text-star" aria-hidden="true" />
      ))}
    </div>
  );
}

export function ReviewCard({
  quote,
  name,
  area,
}: {
  quote: string;
  name: string;
  area: string;
}) {
  return (
    <figure className="card-lift flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft">
      <Stars />
      <blockquote className="mt-5 grow font-display text-lg leading-relaxed text-forest">
        “{quote}”
      </blockquote>
      <figcaption className="mt-6 border-t border-border pt-5 text-sm">
        <span className="font-semibold text-foreground">{name}</span>
        <span className="block text-muted-foreground">{area}, Leeds</span>
      </figcaption>
    </figure>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <span className="text-xs font-semibold tracking-[0.2em] text-leaf uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-3xl leading-tight text-forest sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
