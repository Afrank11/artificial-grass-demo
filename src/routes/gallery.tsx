import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { CtaBand } from "@/components/site/CtaBand";
import { SectionHeading } from "@/components/site/Bits";
import { gallery } from "@/lib/site";
import beforeImg from "@/assets/before-garden.jpg";
import afterImg from "@/assets/after-garden.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Artificial Grass Clean & Revive" },
      {
        name: "description",
        content:
          "See artificial grass revival, pressure washing, landscaping and garden-care work across Glasgow and the surrounding areas.",
      },
      {
        property: "og:title",
        content: "Gallery | Artificial Grass Clean & Revive",
      },
      {
        property: "og:description",
        content:
          "Browse artificial grass revival, pressure washing and garden-care transformations across Glasgow.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <section className="border-b border-border bg-sand">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <Reveal className="max-w-3xl">
            <span className="text-xs font-semibold tracking-[0.2em] text-leaf-dark uppercase">
              Our work
            </span>
            <h1 className="mt-4 text-4xl leading-tight text-forest sm:text-5xl">
              Finished projects across Glasgow &amp; surrounding areas
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Every photo below shows the kind of care we bring to artificial grass, pressure
              washing, gardens, patios, fencing and decking. The detail is in the preparation, the
              finish and the tidy-up.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Transformation"
            title="A tired artificial lawn, revived"
            description="Drag the slider to see the difference a professional artificial grass clean and revival can make."
          />
        </Reveal>
        <Reveal delay={100} className="mx-auto mt-12 max-w-4xl">
          <BeforeAfter
            beforeImage={beforeImg}
            afterImage={afterImg}
            beforeAlt="Artificial grass before cleaning and revival"
            afterAlt="Artificial grass after cleaning and powerbrushing"
          />
        </Reveal>
      </section>

      <section className="bg-sand/50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Gallery" title="Recent finished work" />
          </Reveal>
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item, i) => (
              <Reveal as="li" key={item.caption} delay={(i % 3) * 70}>
                <figure className="card-lift group h-full overflow-hidden rounded-2xl bg-card shadow-soft">
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
        </div>
      </section>

      <CtaBand title="Like what you see?" subtitle="Let's bring your garden back to life." />
    </>
  );
}
