import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { QuoteForm } from "@/components/site/QuoteForm";
import { SectionHeading } from "@/components/site/Bits";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Free Quotes | Greenline Landscapes, Leeds" },
      {
        name: "description",
        content:
          "Call 0113 496 0123, WhatsApp or send us your project details for a free no-obligation landscaping, paving or fencing quote in Leeds and West Yorkshire.",
      },
      {
        property: "og:title",
        content: "Contact & Free Quotes | Greenline Landscapes, Leeds",
      },
      {
        property: "og:description",
        content:
          "Get a free, no-obligation quote for landscaping, driveways, fencing or garden maintenance in Leeds.",
      },
    ],
  }),
  component: ContactPage,
});

const options = [
  {
    icon: Phone,
    label: "Call us",
    value: site.phoneDisplay,
    href: site.phoneHref,
    note: "Quickest way to get booked in",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: site.whatsappDisplay,
    href: site.whatsappHref,
    note: "Send photos of your garden",
  },
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "We reply within one working day",
  },
];

function ContactPage() {
  return (
    <>
      <section className="border-b border-border bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <Reveal className="max-w-3xl">
            <span className="text-xs font-semibold tracking-[0.2em] text-leaf-dark uppercase">
              Get in touch
            </span>
            <h1 className="mt-4 text-4xl leading-tight text-forest sm:text-5xl">
              Let's talk about your outdoor space
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Tell us what you'd like doing and we'll arrange a convenient time to come
              out, look at the space and talk through the options. Every quote is free,
              itemised and completely no-obligation — and if there's a simpler or cheaper
              way to get the result you want, we'll say so.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <ul className="grid gap-6 md:grid-cols-3">
          {options.map((o, i) => (
            <Reveal as="li" key={o.label} delay={i * 80} className="h-full">
              <a
                href={o.href}
                target={o.href.startsWith("http") ? "_blank" : undefined}
                rel={o.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="card-lift block h-full rounded-2xl border border-border bg-card p-7 shadow-soft"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-leaf/12">
                  <o.icon className="size-6 text-leaf-dark" aria-hidden="true" />
                </span>
                <h2 className="mt-6 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                  {o.label}
                </h2>
                <p className="mt-2 font-display text-xl break-words text-forest">
                  {o.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{o.note}</p>
              </a>
            </Reveal>
          ))}
        </ul>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Reveal as="div">
            <div className="h-full rounded-2xl bg-sand p-7">
              <span className="grid size-12 place-items-center rounded-xl bg-card">
                <MapPin className="size-6 text-leaf-dark" aria-hidden="true" />
              </span>
              <h2 className="mt-6 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                Areas covered
              </h2>
              <p className="mt-2 leading-relaxed text-forest">{site.areas}</p>
            </div>
          </Reveal>
          <Reveal as="div" delay={80}>
            <div className="h-full rounded-2xl bg-sand p-7">
              <span className="grid size-12 place-items-center rounded-xl bg-card">
                <Clock className="size-6 text-leaf-dark" aria-hidden="true" />
              </span>
              <h2 className="mt-6 text-sm font-semibold tracking-wide text-muted-foreground uppercase">
                Opening hours
              </h2>
              <p className="mt-2 leading-relaxed text-forest">{site.hours}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Based in {site.base}. Fully insured on every job.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="quote"
        className="border-t border-border bg-sand/50 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Free quote"
              title="Request your free quote"
              description="Fill in a few details and we'll be in touch shortly to arrange your free site visit."
            />
          </Reveal>
          <Reveal delay={100} className="mt-14">
            <QuoteForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
