import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  FileText,
  BadgeCheck,
  Sparkles,
  Sprout,
  Layers,
  Fence,
  TreePine,
  Blocks,
  Scissors,
  ArrowRight,
  Ruler,
  Hammer,
  ClipboardList,
  HandHeart,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { QuoteForm } from "@/components/site/QuoteForm";
import { CtaBand } from "@/components/site/CtaBand";
import { ReviewCard, SectionHeading } from "@/components/site/Bits";
import { services, reviews, faqs, gallery, site } from "@/lib/site";
import heroImg from "@/assets/hero-garden.jpg";
import beforeImg from "@/assets/before-garden.jpg";
import afterImg from "@/assets/after-garden.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Greenline Landscapes | Gardens, Driveways & Fencing in Leeds" },
      {
        name: "description",
        content:
          "Quality landscaping, block paving, fencing, decking and garden maintenance for homes across Leeds and West Yorkshire. Fully insured. Free quotes.",
      },
      {
        property: "og:title",
        content: "Greenline Landscapes | Gardens, Driveways & Fencing in Leeds",
      },
      {
        property: "og:description",
        content:
          "Gardens, driveways and fencing, done beautifully. Fully insured landscapers serving Leeds and West Yorkshire.",
      },
    ],
  }),
  component: Home,
});

const serviceIcons = {
  landscaping: Sprout,
  driveways: Layers,
  fencing: Fence,
  decking: TreePine,
  walls: Blocks,
  maintenance: Scissors,
} as const;

const trustBar = [
  { icon: ShieldCheck, label: "Fully Insured" },
  { icon: FileText, label: "Free No-Obligation Quotes" },
  { icon: BadgeCheck, label: "Workmanship Guaranteed" },
  { icon: Sparkles, label: "Tidy & Reliable" },
];

const whyUs = [
  {
    icon: Hammer,
    title: "Quality workmanship",
    body: "Proper preparation, quality materials and a finish we're happy to put our name to.",
  },
  {
    icon: ShieldCheck,
    title: "Fully insured & reliable",
    body: "Fully insured on every job, and we turn up when we say we will.",
  },
  {
    icon: ClipboardList,
    title: "Clear quotes, honest advice",
    body: "Itemised, no-obligation quotes with no surprises once we start.",
  },
  {
    icon: Sparkles,
    title: "Clean, tidy sites",
    body: "We tidy as we go, protect your property and leave the place spotless.",
  },
];

const steps = [
  {
    icon: Phone,
    title: "Get your free quote",
    body: "Call, WhatsApp or fill in the form. We'll visit, measure up and price it properly — free and with no obligation.",
  },
  {
    icon: Ruler,
    title: "We design and agree the work",
    body: "We'll talk through materials, layout and levels, then confirm the plan, price and start date in writing.",
  },
  {
    icon: HandHeart,
    title: "We build your dream outdoor space",
    body: "Our team builds it to spec, keeps the site tidy day to day and walks you round the finished job.",
  },
];

function Home() {
  return (
    <>
      {/* a) Hero */}
      <section className="relative isolate overflow-hidden bg-forest">
        <img
          src={heroImg}
          alt="Beautifully landscaped garden with sandstone patio, striped lawn and new slatted fencing at golden hour"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-forest/92 via-forest/75 to-forest/30"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-2xl text-forest-foreground">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-sand/30 bg-forest/40 px-4 py-1.5 text-xs font-semibold tracking-[0.16em] uppercase backdrop-blur-sm">
                Leeds & West Yorkshire
              </span>
              <h1 className="mt-6 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
                Gardens, Driveways &amp; Fencing,{" "}
                <span className="text-leaf">Done Beautifully</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-forest-foreground/80">
                Quality landscaping, paving and fencing for homes across Leeds and West
                Yorkshire.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-13 px-8 text-base shadow-lift">
                  <Link to="/contact">Get a Free Quote</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-13 border-sand/45 bg-transparent px-8 text-base text-forest-foreground hover:bg-sand hover:text-sand-foreground"
                >
                  <Link to="/gallery">See Our Work</Link>
                </Button>
              </div>
              <p className="mt-8 text-sm font-medium text-forest-foreground/70">
                Fully insured • Free quotes • Workmanship guaranteed
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* b) Trust bar */}
      <section className="border-y border-border bg-sand">
        <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-5 px-4 py-6 sm:px-6 lg:grid-cols-4 lg:px-8">
          {trustBar.map((item) => (
            <li key={item.label} className="flex items-center gap-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-leaf/12">
                <item.icon className="size-5 text-leaf-dark" aria-hidden="true" />
              </span>
              <span className="min-w-0 text-sm font-semibold text-forest">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* c) Services grid */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title="Complete outdoor transformations"
            description="From full garden makeovers to driveways, fencing and regular upkeep — one trusted team for the whole of your outdoor space."
          />
        </Reveal>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = serviceIcons[service.key];
            return (
              <Reveal as="li" key={service.key} delay={i * 70} className="h-full">
                <div className="card-lift flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft">
                  <span className="grid size-12 place-items-center rounded-xl bg-leaf/12">
                    <Icon className="size-6 text-leaf-dark" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-xl text-forest">{service.title}</h3>
                  <p className="mt-3 grow leading-relaxed text-muted-foreground">
                    {service.short}
                  </p>
                  <Link
                    to="/services"
                    hash={service.key}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-leaf-dark transition-colors hover:text-forest"
                  >
                    Learn more
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </section>

      {/* d) Before & After */}
      <section className="bg-sand py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Before & after"
                title="See the difference proper work makes"
                description="Drag the slider to reveal a tired Leeds back garden turned into a low-maintenance space the family actually use. Same footprint, completely different life — porcelain patio, fresh lawn, sleeper beds and new slatted fencing, all built on properly prepared ground."
              />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-13 px-7 text-base">
                  <Link to="/gallery">See more transformations</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-13 border-forest/25 bg-card px-7 text-base text-forest"
                >
                  <Link to="/contact">Get a Free Quote</Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <BeforeAfter
                beforeImage={beforeImg}
                afterImage={afterImg}
                beforeAlt="Tired back garden before landscaping with patchy lawn and old fence panels"
                afterAlt="The same garden after landscaping with porcelain patio, fresh lawn and new slatted fencing"
              />
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Drag to reveal the transformation
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* e) Why choose us */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Why choose us"
            title="A landscaper you can actually rely on"
          />
        </Reveal>
        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 70}>
              <span className="grid size-12 place-items-center rounded-xl bg-forest">
                <item.icon className="size-6 text-leaf" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg text-forest">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* f) How it works */}
      <section className="bg-forest py-20 text-forest-foreground sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold tracking-[0.2em] text-leaf uppercase">
              How it works
            </span>
            <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
              Three simple steps to a better garden
            </h2>
          </Reveal>
          <ol className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-forest-foreground/12 bg-forest-foreground/6 p-7">
                  <div className="flex items-center gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-leaf text-leaf-foreground">
                      <step.icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="font-display text-4xl text-forest-foreground/25">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-forest-foreground/70">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* g) Gallery preview */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our work"
            title="Recently finished across Leeds"
            description="A snapshot of gardens, driveways, fencing and decking we've completed for local homeowners."
          />
        </Reveal>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.slice(0, 6).map((item, i) => (
            <Reveal as="li" key={item.caption} delay={i * 60}>
              <figure className="card-lift group overflow-hidden rounded-2xl bg-card shadow-soft">
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.caption}
                    loading="lazy"
                    width={1280}
                    height={864}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-5">
                  <p className="text-sm font-semibold text-forest">{item.caption}</p>
                  <p className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">
                    {item.area}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-12 text-center">
          <Button asChild size="lg" variant="outline" className="h-13 px-8 text-base">
            <Link to="/gallery">
              View the full gallery
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </Reveal>
      </section>

      {/* h) Reviews */}
      <section className="bg-sand py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Reviews"
              title="What Leeds homeowners say"
              description="Every quote we give is backed by work local families are happy to recommend."
            />
          </Reveal>
          <ul className="mt-14 grid gap-6 md:grid-cols-3">
            {reviews.slice(0, 3).map((r, i) => (
              <Reveal as="li" key={r.name} delay={i * 80} className="h-full">
                <ReviewCard {...r} />
              </Reveal>
            ))}
          </ul>
          <Reveal className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="h-13 bg-card px-8">
              <Link to="/reviews">Read all reviews</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* i) CTA band */}
      <CtaBand />

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="FAQs" title="Questions homeowners ask us" />
          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((faq) => (
              <AccordionItem key={faq.q} value={faq.q}>
                <AccordionTrigger className="text-left font-display text-lg text-forest hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </section>

      {/* j) Quote form */}
      <section id="quote" className="border-t border-border bg-sand/50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Free quote"
              title="Tell us about your project"
              description={`Fill in the form and we'll be in touch to arrange a free site visit. Prefer to talk? Call ${site.phoneDisplay}.`}
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
