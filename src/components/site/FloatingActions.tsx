import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function FloatingActions() {
  return (
    <>
      <a
        href={site.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message us on WhatsApp"
        className="group fixed right-4 bottom-24 z-40 flex items-center gap-0 overflow-hidden rounded-full bg-whatsapp p-3.5 text-forest-foreground shadow-lift transition-all duration-300 hover:gap-2 hover:pr-5 sm:bottom-6"
      >
        <MessageCircle className="size-6 shrink-0" aria-hidden="true" />
        <span className="max-w-0 overflow-hidden text-sm font-semibold whitespace-nowrap opacity-0 transition-all duration-300 group-hover:max-w-32 group-hover:opacity-100">
          Message us
        </span>
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-leaf-dark/30 bg-background/95 p-3 backdrop-blur-md sm:hidden">
        <a
          href={site.phoneHref}
          className="flex h-12 items-center justify-center gap-2 rounded-lg bg-leaf text-base font-semibold text-leaf-foreground shadow-soft active:bg-leaf-dark"
        >
          <Phone className="size-5" aria-hidden="true" />
          Call for a Free Quote
        </a>
      </div>
    </>
  );
}
