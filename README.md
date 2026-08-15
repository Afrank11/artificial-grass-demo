# Landscaping Demo — Greenline Landscapes

A premium marketing website template for a UK landscaping and garden services
business, built with **React + TypeScript + Vite**, **Tailwind CSS**,
**shadcn/ui** and **TanStack Router / Start**.

## Getting started

You need Node.js 20+ and npm.

```sh
npm install
npm run dev
```

The dev server runs on [http://localhost:8080](http://localhost:8080).

## Scripts

| Command             | What it does                                          |
| ------------------- | ----------------------------------------------------- |
| `npm run dev`       | Start the Vite dev server on port 8080                |
| `npm run build`     | Production build (client + SSR server bundle)         |
| `npm run preview`   | Preview the production build locally                  |
| `npm run lint`      | Run ESLint over the project                           |
| `npm run format`    | Format the project with Prettier                      |

## Project structure

```
public/            Static assets served at the site root (favicon, og-image, robots.txt)
src/assets/        Photography imported and hashed by Vite
src/components/ui/ shadcn/ui primitives
src/components/site/ Site-specific components (header, footer, quote form, …)
src/lib/site.ts    All editable site content: contact details, services, reviews, FAQs
src/routes/        File-based routes; __root.tsx holds the shared <head> metadata
src/styles.css     Tailwind v4 theme tokens (colours, radii, fonts)
```

## Deploying

The build is rendered server-side and bundled by Nitro, which picks its target
from the environment — a Node server locally, and Vercel's Build Output API when
deployed to Vercel. `vercel.json` pins the framework to "Other" so Vercel serves
that output instead of looking for a static `dist/` directory.

**Before your first deploy**, set `siteUrl` in
[`src/lib/site.ts`](src/lib/site.ts) to the real domain. Open Graph and Twitter
card tags need absolute URLs, so link previews (WhatsApp, Facebook, LinkedIn, X)
will not resolve their image until that constant matches the live host.

---

## Original design brief

The rest of this file is the brief the site was built from, kept for reference
when adapting the template for a new client.

Build a modern, premium, fully responsive marketing website for a UK landscaping and garden services business. This is a high-end template I'll deploy for real clients and reuse across gardeners, landscapers, paving/driveway specialists and fencing contractors. It must feel professional, trustworthy and premium — the kind of site that makes a skilled outdoor trade look established and worth their price. All content below is placeholder content and imagery I'll swap per client.

=== TECH STACK ===
- React + TypeScript + Vite
- Tailwind CSS for all styling
- shadcn/ui for components (buttons, cards, accordion, inputs, dialog, select)
- lucide-react for icons
- Subtle, tasteful scroll/hover animations (fade/slide up on scroll, gentle lift on cards)
- Clean, standard, portable code. Avoid unnecessary dependencies. Mobile-first and fully responsive.

=== BRAND & DESIGN SYSTEM ===
Company: "Greenline Landscapes" (placeholder text logo; I'll add the real logo later)
Tagline: "Gardens, driveways and fencing, done beautifully."
Feel: fresh, natural, premium and dependable. Clean and outdoorsy without being cheap or clip-arty. Should feel like a quality landscaper you'd trust with your whole garden.

Colours:
- Deep forest green: #1F3D2B (headings, dark sections)
- Fresh leaf green accent: #4C9A5A (primary accent, CTAs)
- Warm sand/stone: #EDE7DB (soft section backgrounds — paving/natural feel)
- Off-white: #FBFAF7 (main background)
- Charcoal: #232A25 (body text on light)
- Muted grey-green: #6B7A6E (secondary text)
Buttons: leaf green with white text, rounded-lg, soft shadow, darker green on hover. Secondary: forest green or white outline.

Typography (Google Fonts):
- Display/headings: "Fraunces" or "Bitter" (a warm, characterful serif — premium and natural).
- Body & UI: "Inter" (clean, modern, readable).
Pair a warm serif for headings with a clean sans body for a premium, grounded feel.

Style details: generous whitespace, rounded-2xl cards, soft shadows, large high-quality outdoor photography (landscaped gardens, block-paved driveways, new fencing, decking, turf). Natural, fresh, spacious feel. Prominent but tasteful "Get a Free Quote" button and phone number in the header, repeated through the page.

=== GLOBAL ELEMENTS (every page) ===
1. Sticky header: logo left; nav (Home, Services, Gallery, Reviews, Contact); phone "0113 496 0123" and a leaf-green "Get a Free Quote" button on the right. Clean mobile hamburger menu.
2. Floating WhatsApp button: fixed bottom-right, WhatsApp green, links to https://wa.me/447700900123?text=Hi%2C%20I%27d%20like%20a%20landscaping%20quote . "Message us" label on hover.
3. Sticky mobile bar: fixed bottom bar on mobile with a green "Call for a Free Quote" button (tel:01134960123).
4. Footer: company name + short blurb, quick links, contact (phone, WhatsApp, email, areas), trust badges (Fully Insured, Free Quotes, Guaranteed Workmanship), social icons (Facebook, Instagram), copyright.

=== PAGES ===

PAGE 1 - HOME (build sections in order):
a) Hero (fresh, image-led): headline "Gardens, Driveways & Fencing, Done Beautifully" with subline "Quality landscaping, paving and fencing for homes across Leeds and West Yorkshire." Two buttons: "Get a Free Quote" (green) and "See Our Work" (outline, links to gallery). Trust line: "Fully insured • Free quotes • Workmanship guaranteed." Large hero image of a beautifully landscaped garden or fresh block-paved driveway.
b) Trust bar: slim strip with 4 items + icons — Fully Insured, Free No-Obligation Quotes, Workmanship Guaranteed, Tidy & Reliable.
c) Services grid: cards (icon, title, one-line description, "Learn more"), gentle lift on hover:
   - Garden Landscaping — full garden design, makeovers and planting.
   - Driveways & Paving — block paving, patios and hard landscaping built to last.
   - Fencing & Gates — supply and installation of fences, gates and screening.
   - Decking & Turfing — timber and composite decking, plus fresh lawns and artificial turf.
   - Garden Walls & Sleepers — retaining walls, raised beds and sleeper features.
   - Garden Maintenance — regular upkeep, tidy-ups and seasonal care.
d) Before & After: an interactive before/after image slider (drag to reveal) showing a garden or driveway transformation, with a short line about the quality of the work. Make this prominent — transformations sell this trade.
e) Why Choose Us: 4 columns with icons — Quality workmanship, Fully insured & reliable, Clear quotes and honest advice, Clean, tidy sites.
f) How It Works: 3 steps — 1) Get your free quote, 2) We design and agree the work, 3) We build your dream outdoor space. Natural icons.
g) Gallery preview: a grid of finished-work photos (gardens, driveways, fencing, decking) with short captions, linking to the full Gallery page.
h) Reviews: 3 featured 5-star testimonial cards (stars, quote, name, area).
i) Big CTA band (forest green background, sand accents): "Ready to transform your outdoor space? Get your free quote today." with "Get a Free Quote" and "Call Now" buttons.
j) Quote form section (see FORM spec).

PAGE 2 - SERVICES: intro heading, then a detailed section per service (image, description, what's included as bullets, "Get a Quote" button). Reuse content above.

PAGE 3 - GALLERY: a premium grid of finished-work photography with captions (ideally a before/after or two), plus a CTA at the bottom. Showcase quality.

PAGE 4 - REVIEWS: overall rating summary at top ("Rated 5 stars by homeowners across Leeds"), a grid of 5-star testimonial cards, CTA at bottom.

PAGE 5 - CONTACT: contact options (Call, WhatsApp, Email, Areas, Hours), the quote form, and a warm, professional intro.

=== QUOTE FORM (Home + Contact) ===
Fields: Name, Phone, Email, Service needed (dropdown: Garden Landscaping / Driveways & Paving / Fencing & Gates / Decking & Turfing / Garden Walls / Garden Maintenance / Other), Property type (House / Flat / Commercial / Other), Approx garden size or area (optional), Preferred timescale (optional), Project details (textarea). Prominent green "Get My Free Quote" button. On submit, show a friendly success toast ("Thanks! We'll be in touch shortly with your free quote.") and clear the form. No backend — just validate and show success. Beside it: "Prefer to talk? Call or WhatsApp us."

=== SAMPLE / CLIENT CONTENT (UK) ===
Company: Greenline Landscapes
Tagline: Gardens, driveways and fencing, done beautifully.
Phone / WhatsApp: 0113 496 0123 / 07700 900123
Email: hello@greenlinelandscapes.co.uk (placeholder)
Based: Leeds, West Yorkshire
Hours: Mon-Fri 8am-6pm, Sat by arrangement
Areas covered: Leeds and West Yorkshire — Headingley, Roundhay, Horsforth, Chapel Allerton, Pudsey, Morley and surrounding areas.
USPs: Quality workmanship, fully insured, free quotes, tidy and reliable, from full garden makeovers to driveways, fencing and maintenance.

Reviews (placeholder — 5 stars each, I'll swap for real):
- "Completely transformed our garden — new patio, turf and fencing. Absolutely delighted with the finish." - Sarah H., Roundhay
- "Block-paved driveway looks fantastic and was done on time with no mess. Proper professionals." - James M., Horsforth
- "New fencing and decking, brilliant job, tidy every day and great value. Highly recommend." - Priya K., Pudsey

FAQ (accordion):
- Are you insured? Yes, we're fully insured for every job.
- Do you offer free quotes? Yes, all quotes are free and no-obligation.
- Do you do both gardens and driveways? Yes, from landscaping and planting to paving, fencing and decking.
- Do you keep the site tidy? Always — we clear up as we go and leave your space spotless.
- What areas do you cover? Leeds and the surrounding West Yorkshire area.
- How do I get started? Get in touch for a free quote and we'll take it from there.

=== POLISH REQUIREMENTS ===
- Fully responsive, beautiful on mobile, easy tap targets, sticky call button on mobile.
- Premium, fresh, natural, clean, fast loading, accessible (alt text, good contrast, labelled fields).
- Generous whitespace and quality photography — the design itself should feel premium.
- Consistent spacing, a natural, trustworthy, upmarket feel throughout.
Build it section by section as described.
