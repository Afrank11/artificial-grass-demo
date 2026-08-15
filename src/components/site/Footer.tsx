import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  BadgeCheck,
  FileText,
} from "lucide-react";
import { site } from "@/lib/site";

const badges = [
  { icon: ShieldCheck, label: "Fully Insured" },
  { icon: FileText, label: "Free Quotes" },
  { icon: BadgeCheck, label: "Guaranteed Workmanship" },
];

export function Footer() {
  return (
    <footer className="mt-24 bg-forest text-forest-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid size-9 place-items-center rounded-xl bg-forest-foreground/10">
                <Leaf className="size-5 text-leaf" aria-hidden="true" />
              </span>
              <span className="font-display text-xl">{site.name}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-forest-foreground/70">
              {site.tagline} Landscaping, paving, fencing and maintenance for homes
              across Leeds and West Yorkshire.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.facebook}
                aria-label="Facebook"
                className="grid size-10 place-items-center rounded-lg bg-forest-foreground/10 transition-colors hover:bg-leaf"
              >
                <Facebook className="size-5" aria-hidden="true" />
              </a>
              <a
                href={site.instagram}
                aria-label="Instagram"
                className="grid size-10 place-items-center rounded-lg bg-forest-foreground/10 transition-colors hover:bg-leaf"
              >
                <Instagram className="size-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-base">Quick links</h3>
            <ul className="mt-4 space-y-3 text-sm text-forest-foreground/75">
              {[
                { label: "Home", to: "/" },
                { label: "Services", to: "/services" },
                { label: "Gallery", to: "/gallery" },
                { label: "Reviews", to: "/reviews" },
                { label: "Contact", to: "/contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-leaf">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-forest-foreground/75">
              <li>
                <a
                  href={site.phoneHref}
                  className="flex items-start gap-2 transition-colors hover:text-leaf"
                >
                  <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsappHref}
                  className="flex items-start gap-2 transition-colors hover:text-leaf"
                >
                  <MessageCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  WhatsApp {site.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-2 break-all transition-colors hover:text-leaf"
                >
                  <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {site.areas}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-base">Why homeowners choose us</h3>
            <ul className="mt-4 space-y-3">
              {badges.map((b) => (
                <li
                  key={b.label}
                  className="flex items-center gap-3 rounded-xl bg-forest-foreground/8 px-3 py-2.5 text-sm"
                >
                  <b.icon className="size-5 shrink-0 text-leaf" aria-hidden="true" />
                  {b.label}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-forest-foreground/60">{site.hours}</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-forest-foreground/15 pt-6 text-xs text-forest-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Based in {site.base}. Fully insured. Free no-obligation quotes.</p>
        </div>
      </div>
    </footer>
  );
}
