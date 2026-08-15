import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { ReviewCard, Stars } from "@/components/site/Bits";
import { reviews } from "@/lib/site";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews | Greenline Landscapes, Leeds" },
      {
        name: "description",
        content:
          "Rated 5 stars by homeowners across Leeds and West Yorkshire. Read reviews of our landscaping, driveway, fencing and decking work.",
      },
      { property: "og:title", content: "Customer Reviews | Greenline Landscapes, Leeds" },
      {
        property: "og:description",
        content:
          "5-star reviews from homeowners in Roundhay, Horsforth, Pudsey, Headingley and beyond.",
      },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <section className="border-b border-border bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold tracking-[0.2em] text-leaf-dark uppercase">
              Reviews
            </span>
            <h1 className="mt-4 text-4xl leading-tight text-forest sm:text-5xl">
              Rated 5 stars by homeowners across Leeds
            </h1>
            <div className="mt-8 inline-flex flex-col items-center gap-3 rounded-2xl bg-card px-8 py-6 shadow-soft sm:flex-row sm:gap-6">
              <span className="font-display text-5xl text-forest">5.0</span>
              <span className="text-left">
                <Stars />
                <span className="mt-1 block text-sm text-muted-foreground">
                  Based on {reviews.length}+ verified homeowner reviews
                </span>
              </span>
            </div>
            <p className="mx-auto mt-8 max-w-xl leading-relaxed text-muted-foreground">
              We've built this business on word of mouth around Leeds. Here's what local
              homeowners say about the work, the price and the tidy-up.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal as="li" key={r.name} delay={(i % 3) * 80} className="h-full">
              <ReviewCard {...r} />
            </Reveal>
          ))}
        </ul>
      </section>

      <CtaBand
        title="Want work you'd happily review?"
        subtitle="Start with a free quote."
      />
    </>
  );
}
