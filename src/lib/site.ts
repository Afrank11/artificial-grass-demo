import landscapingImg from "@/assets/service-landscaping.jpg";
import drivewayImg from "@/assets/service-driveway.jpg";
import fencingImg from "@/assets/service-fencing.jpg";
import deckingImg from "@/assets/service-decking.jpg";
import wallsImg from "@/assets/service-walls.jpg";
import maintenanceImg from "@/assets/service-maintenance.jpg";
import patioImg from "@/assets/gallery-patio.jpg";
import afterImg from "@/assets/after-garden.jpg";

// ---------------------------------------------------------------------------
// !! UPDATE THIS AFTER YOUR FIRST DEPLOY !!
// The canonical, absolute origin of the live site — no trailing slash.
// Open Graph / Twitter cards require absolute URLs, so og:url and og:image are
// built from this value in src/routes/__root.tsx. Until it matches the real
// domain, link previews on WhatsApp/Facebook/LinkedIn will point at the wrong
// host and the preview image will not load.
// Replace with your Vercel URL (e.g. "https://landscaping-demo.vercel.app") or
// your custom domain (e.g. "https://www.greenlinelandscapes.co.uk").
// ---------------------------------------------------------------------------
export const siteUrl = "https://landscaping-demo-opal.vercel.app";

// Social share card. Lives in /public, so it is served at `${siteUrl}${ogImage}`.
export const ogImage = "/og-image.jpg";

export const site = {
  name: "Greenline Landscapes",
  tagline: "Gardens, driveways and fencing, done beautifully.",
  phoneDisplay: "0113 496 0123",
  phoneHref: "tel:01134960123",
  whatsappDisplay: "07700 900123",
  whatsappHref:
    "https://wa.me/447700900123?text=Hi%2C%20I%27d%20like%20a%20landscaping%20quote",
  email: "hello@greenlinelandscapes.co.uk",
  base: "Leeds, West Yorkshire",
  hours: "Mon–Fri 8am–6pm, Sat by arrangement",
  areas:
    "Leeds and West Yorkshire — Headingley, Roundhay, Horsforth, Chapel Allerton, Pudsey, Morley and surrounding areas.",
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
};

export type ServiceKey =
  | "landscaping"
  | "driveways"
  | "fencing"
  | "decking"
  | "walls"
  | "maintenance";

export const services: {
  key: ServiceKey;
  icon: string;
  title: string;
  short: string;
  long: string;
  includes: string[];
  image: string;
  alt: string;
}[] = [
  {
    key: "landscaping",
    icon: "Sprout",
    title: "Garden Landscaping",
    short: "Full garden design, makeovers and planting.",
    long: "From a tired lawn to a garden you'll actually want to spend time in. We design and build complete garden makeovers — levels, patios, lawns, borders and planting — all finished to a standard you'd be happy to show off.",
    includes: [
      "Full garden design and layout planning",
      "Ground works, levelling and drainage",
      "Patios, paths and edging",
      "Border preparation and planting schemes",
      "Lighting, pergolas and feature areas",
    ],
    image: landscapingImg,
    alt: "Landscaped garden with curved sandstone patio, circular lawn and pergola",
  },
  {
    key: "driveways",
    icon: "Layers",
    title: "Driveways & Paving",
    short: "Block paving, patios and hard landscaping built to last.",
    long: "A driveway is the first thing anyone sees. We prepare properly — correct excavation, sub-base and drainage — then lay block paving, porcelain or natural stone with crisp lines and clean edge courses.",
    includes: [
      "Block paved and permeable driveways",
      "Porcelain, sandstone and natural stone patios",
      "Correct sub-base preparation and drainage",
      "Kerbs, edging and channel drains",
      "Old surface removal and full clear-away",
    ],
    image: drivewayImg,
    alt: "Newly laid charcoal block paved driveway in front of a brick house",
  },
  {
    key: "fencing",
    icon: "Fence",
    title: "Fencing & Gates",
    short: "Supply and installation of fences, gates and screening.",
    long: "Straight, solid fencing that stands up to a Yorkshire winter. We supply and install closeboard, slatted and panel fencing with concrete or timber posts, plus matching gates and decorative screening.",
    includes: [
      "Closeboard, feather edge and panel fencing",
      "Contemporary slatted fencing and screening",
      "Concrete or timber posts, properly set",
      "Side gates and double driveway gates",
      "Removal and disposal of old fencing",
    ],
    image: fencingImg,
    alt: "New timber garden fence with matching wooden gate and concrete posts",
  },
  {
    key: "decking",
    icon: "TreePine",
    title: "Decking & Turfing",
    short: "Timber and composite decking, plus fresh lawns and artificial turf.",
    long: "Usable outdoor living space, whatever the weather. We build timber and low-maintenance composite decks, and lay fresh cultivated turf or premium artificial grass on a properly prepared base.",
    includes: [
      "Timber and composite decking",
      "Raised decks, steps and balustrades",
      "Cultivated turf laying and soil preparation",
      "Premium artificial grass installation",
      "Lawn levelling and edging",
    ],
    image: deckingImg,
    alt: "Modern composite decking area with garden furniture beside a green lawn",
  },
  {
    key: "walls",
    icon: "Blocks",
    title: "Garden Walls & Sleepers",
    short: "Retaining walls, raised beds and sleeper features.",
    long: "Sloping garden? We build retaining structures that hold and look the part — brick and block walls, oak and softwood sleeper beds, steps and terracing that turn awkward levels into usable space.",
    includes: [
      "Brick, block and stone retaining walls",
      "Railway sleeper raised beds and terracing",
      "Garden steps and split-level design",
      "Rendered and capped wall finishes",
      "Structural foundations and drainage",
    ],
    image: wallsImg,
    alt: "Oak sleeper retaining wall and raised beds with ornamental planting",
  },
  {
    key: "maintenance",
    icon: "Scissors",
    title: "Garden Maintenance",
    short: "Regular upkeep, tidy-ups and seasonal care.",
    long: "Keep it looking as good as the day we finished. Regular visits or one-off blitzes — mowing, edging, hedge cutting, pruning, weeding and seasonal clearance, with all green waste taken away.",
    includes: [
      "Regular mowing, edging and strimming",
      "Hedge cutting and shaping",
      "Border weeding and pruning",
      "Seasonal clear-ups and leaf clearance",
      "Green waste removal included",
    ],
    image: maintenanceImg,
    alt: "Immaculately maintained garden with striped mown lawn and trimmed hedges",
  },
];

export const serviceOptions = [
  "Garden Landscaping",
  "Driveways & Paving",
  "Fencing & Gates",
  "Decking & Turfing",
  "Garden Walls",
  "Garden Maintenance",
  "Other",
];

export const propertyTypes = ["House", "Flat", "Commercial", "Other"];

export const timescales = [
  "As soon as possible",
  "Within 1 month",
  "1–3 months",
  "3+ months",
  "Just researching",
];

export const reviews = [
  {
    quote:
      "Completely transformed our garden — new patio, turf and fencing. Absolutely delighted with the finish.",
    name: "Sarah H.",
    area: "Roundhay",
  },
  {
    quote:
      "Block-paved driveway looks fantastic and was done on time with no mess. Proper professionals.",
    name: "James M.",
    area: "Horsforth",
  },
  {
    quote:
      "New fencing and decking, brilliant job, tidy every day and great value. Highly recommend.",
    name: "Priya K.",
    area: "Pudsey",
  },
  {
    quote:
      "They designed the whole garden around how we actually use it. Sleeper beds and porcelain patio are superb.",
    name: "David & Anne T.",
    area: "Headingley",
  },
  {
    quote:
      "Quoted clearly, started when they said, finished when they said. Rare these days — and the work is lovely.",
    name: "Michael O.",
    area: "Chapel Allerton",
  },
  {
    quote:
      "Regular maintenance since last spring. The garden has never looked better and they're always tidy.",
    name: "Helen W.",
    area: "Morley",
  },
];

export const faqs = [
  {
    q: "Are you insured?",
    a: "Yes, we're fully insured for every job.",
  },
  {
    q: "Do you offer free quotes?",
    a: "Yes, all quotes are free and no-obligation.",
  },
  {
    q: "Do you do both gardens and driveways?",
    a: "Yes, from landscaping and planting to paving, fencing and decking.",
  },
  {
    q: "Do you keep the site tidy?",
    a: "Always — we clear up as we go and leave your space spotless.",
  },
  {
    q: "What areas do you cover?",
    a: "Leeds and the surrounding West Yorkshire area.",
  },
  {
    q: "How do I get started?",
    a: "Get in touch for a free quote and we'll take it from there.",
  },
];

export const gallery = [
  {
    image: landscapingImg,
    caption: "Full garden makeover — sandstone patio, circular lawn and pergola",
    area: "Roundhay",
  },
  {
    image: drivewayImg,
    caption: "Charcoal block paved driveway with contrasting edge course",
    area: "Horsforth",
  },
  {
    image: fencingImg,
    caption: "New closeboard fencing with matching side gate",
    area: "Pudsey",
  },
  {
    image: deckingImg,
    caption: "Composite deck and glass balustrade with fresh turf",
    area: "Headingley",
  },
  {
    image: wallsImg,
    caption: "Oak sleeper retaining beds and gravel path",
    area: "Chapel Allerton",
  },
  {
    image: maintenanceImg,
    caption: "Seasonal maintenance — striped lawn and shaped hedging",
    area: "Morley",
  },
  {
    image: patioImg,
    caption: "Aged stone dining patio in a walled garden",
    area: "Leeds city centre",
  },
  {
    image: afterImg,
    caption: "Porcelain patio and artificial lawn for a low-maintenance garden",
    area: "Morley",
  },
];
