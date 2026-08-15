import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";
import { services } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Landscaping, Paving & Fencing Services | Greenline Landscapes" },
      {
        name: "description",
        content:
          "Garden landscaping, block paving driveways, fencing and gates, decking and turfing, garden walls and maintenance across Leeds and West Yorkshire.",
      },
      {
        property: "og:title",
        content: "Landscaping, Paving & Fencing Services | Greenline Landscapes",
      },
      {
        property: "og:description",
        content:
          "Six core services covering everything outdoors — design, paving, fencing, decking, walls and upkeep.",
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
              Everything outdoors, built properly
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Whether you want a complete garden redesign, a new block paved driveway or
              simply a garden kept looking sharp all year, we handle the lot — with the
              same standard of preparation, materials and finish on every job.
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
                <p className="mt-5 leading-relaxed text-muted-foreground">
                  {service.long}
                </p>
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
