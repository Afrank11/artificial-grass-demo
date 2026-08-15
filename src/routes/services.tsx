import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { services } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Artificial Grass Revival & Garden Services | Artificial Grass Clean & Revive" },
      {
        name: "description",
        content:
          "Artificial grass cleaning and revival, pressure washing, garden maintenance, repointing, landscaping and paving across Glasgow and the surrounding areas.",
      },
      {
        property: "og:title",
        content: "Artificial Grass Revival & Garden Services | Artificial Grass Clean & Revive",
      },
      {
        property: "og:description",
        content:
          "Artificial grass revival, pressure washing and a complete range of outdoor services for your garden.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="border-b border-border bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <Reveal className="max-w-3xl">
            <span className="text-xs font-semibold tracking-[0.2em] text-leaf-dark uppercase">
              Our services
            </span>
            <h1 className="mt-4 text-4xl leading-tight text-forest sm:text-5xl">
              Garden services that bring your space back to life
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              From artificial grass cleaning and revival to pressure washing, repointing,
              landscaping and regular maintenance, we handle the work with care, quality equipment
              and a tidy finish on every job.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {services.map((service, i) => (
          <section
            key={service.key}
            id={service.key}
            className="scroll-mt-24 border-b border-border py-16 last:border-0 sm:py-24"
          >
            <div
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
              }`}
            >
              <Reveal as="article">
                <span className="text-xs font-semibold tracking-[0.2em] text-leaf-dark uppercase">
                  0{i + 1}
                </span>
                <h2 className="mt-3 text-3xl leading-tight text-forest sm:text-4xl">
                  {service.title}
                </h2>
                <p className="mt-5 leading-relaxed text-muted-foreground">{service.long}</p>
                <h3 className="mt-8 text-base text-forest">What's included</h3>
                <ul className="mt-4 space-y-3">
                  {service.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-leaf/15">
                        <Check className="size-3 text-leaf-dark" aria-hidden="true" />
                      </span>
                      <span className="text-foreground/85">{inc}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" className="mt-9 h-13 px-8 text-base shadow-soft">
                  <Link to="/contact">Get a Quote</Link>
                </Button>
              </Reveal>

              <Reveal as="div" delay={100}>
                <figure className="overflow-hidden rounded-2xl shadow-lift">
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    width={1280}
                    height={864}
                    className="aspect-4/3 w-full object-cover"
                  />
                </figure>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      <CtaBand title="Not sure which service you need?" subtitle="Ask us — it's free." />
    </>
  );
}
