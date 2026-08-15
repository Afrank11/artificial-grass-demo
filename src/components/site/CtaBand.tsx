import { Link } from "@tanstack/react-router";
import { Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

export function CtaBand({
  title = "Ready to transform your outdoor space?",
  subtitle = "Get your free quote today.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-forest text-forest-foreground">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-sand px-4 py-1.5 text-xs font-semibold tracking-wide text-sand-foreground uppercase">
            <Star className="size-3.5 fill-current" aria-hidden="true" />
            Rated 5 stars by Leeds homeowners
          </span>
          <h2 className="mt-6 text-3xl leading-tight sm:text-4xl md:text-5xl">
            {title}
            <span className="mt-2 block text-leaf">{subtitle}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-forest-foreground/70">
            Tell us what you have in mind and we'll come out, measure up and give you a
            clear, no-obligation price.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-13 px-8 text-base shadow-lift">
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-13 border-sand/40 bg-transparent px-8 text-base text-forest-foreground hover:bg-sand hover:text-sand-foreground"
            >
              <a href={site.phoneHref}>
                <Phone className="size-5" aria-hidden="true" />
                Call Now
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
