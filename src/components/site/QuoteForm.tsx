import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Phone, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { site, serviceOptions, propertyTypes, timescales } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20, "Please enter a valid phone number")
    .regex(/^[0-9+()\s-]+$/, "Please enter a valid phone number"),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  service: z.string().min(1, "Please choose a service"),
  property: z.string().min(1, "Please choose a property type"),
  size: z.string().trim().max(120).optional(),
  timescale: z.string().trim().max(60).optional(),
  details: z.string().trim().min(10, "Please tell us a little about the job").max(1500),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const empty = {
  name: "",
  phone: "",
  email: "",
  service: "",
  property: "",
  size: "",
  timescale: "",
  details: "",
};

export function QuoteForm() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [key, setKey] = useState(0);

  const set = (field: keyof typeof empty, v: string) => {
    setValues((prev) => ({ ...prev, [field]: v }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(values);
    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof Errors;
        if (!next[field]) next[field] = issue.message;
      }
      setErrors(next);
      toast.error("Please check the highlighted fields and try again.");
      return;
    }
    toast.success("Thanks! We'll be in touch shortly with your free quote.");
    setValues(empty);
    setErrors({});
    setKey((k) => k + 1);
  };

  const err = (field: keyof Errors) =>
    errors[field] ? (
      <p id={`${field}-error`} className="mt-1.5 text-xs text-destructive">
        {errors[field]}
      </p>
    ) : null;

  return (
    <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
      <form
        onSubmit={onSubmit}
        noValidate
        className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={values.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder="Jane Smith"
              autoComplete="name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className="mt-1.5"
            />
            {err("name")}
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              value={values.phone}
              onChange={(e) => set("phone", e.target.value)}
              placeholder="07700 900123"
              autoComplete="tel"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className="mt-1.5"
            />
            {err("phone")}
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={values.email}
              onChange={(e) => set("email", e.target.value)}
              placeholder="jane@example.co.uk"
              autoComplete="email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className="mt-1.5"
            />
            {err("email")}
          </div>

          <div>
            <Label htmlFor="service">Service needed</Label>
            <Select
              key={`service-${key}`}
              value={values.service}
              onValueChange={(v) => set("service", v)}
            >
              <SelectTrigger id="service" className="mt-1.5 w-full">
                <SelectValue placeholder="Choose a service" />
              </SelectTrigger>
              <SelectContent>
                {serviceOptions.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {err("service")}
          </div>

          <div>
            <Label htmlFor="property">Property type</Label>
            <Select
              key={`property-${key}`}
              value={values.property}
              onValueChange={(v) => set("property", v)}
            >
              <SelectTrigger id="property" className="mt-1.5 w-full">
                <SelectValue placeholder="Choose property type" />
              </SelectTrigger>
              <SelectContent>
                {propertyTypes.map((p) => (
                  <SelectItem key={p} value={p}>
                    {p}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {err("property")}
          </div>

          <div>
            <Label htmlFor="size">
              Approx garden size or area{" "}
              <span className="font-normal text-muted-foreground">(optional)</span>
            </Label>
            <Input
              id="size"
              value={values.size}
              onChange={(e) => set("size", e.target.value)}
              placeholder="e.g. 60 sq m"
              className="mt-1.5"
            />
          </div>

          <div>
            <Label htmlFor="timescale">
              Preferred timescale{" "}
              <span className="font-normal text-muted-foreground">(optional)</span>
            </Label>
            <Select
              key={`timescale-${key}`}
              value={values.timescale}
              onValueChange={(v) => set("timescale", v)}
            >
              <SelectTrigger id="timescale" className="mt-1.5 w-full">
                <SelectValue placeholder="Choose a timescale" />
              </SelectTrigger>
              <SelectContent>
                {timescales.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="sm:col-span-2">
            <Label htmlFor="details">Project details</Label>
            <Textarea
              id="details"
              value={values.details}
              onChange={(e) => set("details", e.target.value)}
              rows={5}
              placeholder="Tell us what you'd like doing — artificial grass cleaning, pressure washing, patio, fencing…"
              aria-invalid={!!errors.details}
              aria-describedby={errors.details ? "details-error" : undefined}
              className="mt-1.5"
            />
            {err("details")}
          </div>
        </div>

        <Button type="submit" size="lg" className="mt-7 h-13 w-full text-base shadow-soft">
          <Send className="size-4" aria-hidden="true" />
          Get My Free Quote
        </Button>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Free, no-obligation quotes. We'll never share your details.
        </p>
      </form>

      <aside className="rounded-2xl bg-sand p-6 sm:p-8">
        <h3 className="font-display text-2xl text-forest">Prefer to talk?</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Call or WhatsApp us and we'll talk through the job, give honest advice and book a free
          site visit at a time that suits you.
        </p>
        <div className="mt-6 grid gap-3">
          <Button asChild size="lg" className="h-13 justify-start text-base">
            <a href={site.phoneHref}>
              <Phone className="size-5" aria-hidden="true" />
              {site.phoneDisplay}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-13 justify-start border-forest/25 bg-card text-base text-forest"
          >
            <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-5" aria-hidden="true" />
              WhatsApp {site.whatsappDisplay}
            </a>
          </Button>
        </div>
        <dl className="mt-8 space-y-4 border-t border-forest/10 pt-6 text-sm">
          <div>
            <dt className="font-semibold text-forest">Opening hours</dt>
            <dd className="text-muted-foreground">{site.hours}</dd>
          </div>
          <div>
            <dt className="font-semibold text-forest">Areas covered</dt>
            <dd className="text-muted-foreground">{site.areas}</dd>
          </div>
          <div>
            <dt className="font-semibold text-forest">Email</dt>
            <dd className="break-all text-muted-foreground">{site.email}</dd>
          </div>
        </dl>
      </aside>
    </div>
  );
}
