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
      { title: "Gallery of Finished Gardens & Driveways | Greenline Landscapes" },
      {
        name: "description",
        content:
          "Photos of completed landscaping, block paving, fencing and decking projects across Leeds and West Yorkshire, plus a before and after transformation.",
      },
      {
        property: "og:title",
        content: "Gallery of Finished Gardens & Driveways | Greenline Landscapes",
      },
      {
        property: "og:description",
        content:
          "Browse finished gardens, driveways, fencing and decking built for homeowners across Leeds.",
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
              Finished projects across Leeds &amp; West Yorkshire
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Every photo below is a real job finished by our team — gardens, driveways,
              patios, fencing and decking. The detail is in the preparation, the edges and
              the tidy-up.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Transformation"
            title="A tired garden, completely rebuilt"
            description="Drag the slider to see the same garden before and after — new patio, lawn, sleeper beds and slatted fencing."
          />
        </Reveal>
        <Reveal delay={100} className="mx-auto mt-12 max-w-4xl">
          <BeforeAfter
            beforeImage={beforeImg}
            afterImage={afterImg}
            beforeAlt="Back garden before landscaping with patchy lawn, cracked slabs and old fencing"
            afterAlt="The same garden after landscaping with porcelain patio, fresh lawn and slatted fencing"
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

      <CtaBand
        title="Like what you see?"
        subtitle="Let's design yours next."
      />
    </>
  );
}
