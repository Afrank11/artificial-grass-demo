import landscapingImg from "@/assets/service-landscaping.jpg";
import drivewayImg from "@/assets/service-driveway.jpg";
import fencingImg from "@/assets/service-fencing.jpg";
import deckingImg from "@/assets/service-decking.jpg";
import wallsImg from "@/assets/service-walls.jpg";
import maintenanceImg from "@/assets/service-maintenance.jpg";
import patioImg from "@/assets/gallery-patio.jpg";
import afterImg from "@/assets/after-garden.jpg";
import beforeImg from "@/assets/before-garden.jpg";

// ---------------------------------------------------------------------------
// Canonical public origin used for Open Graph and Twitter card URLs.
// Update this value if the final Vercel or custom-domain URL changes.
export const siteUrl = "https://artificial-grass-demo.vercel.app";

// Social share card. Lives in /public, so it is served at `${siteUrl}${ogImage}`.
export const ogImage = "/og-image.jpg";

export const site = {
  name: "Artificial Grass Clean & Revive",
  tagline: "Bringing your garden back to life.",
  phoneDisplay: "07700 900123",
  phoneHref: "tel:07700900123",
  whatsappDisplay: "07700 900123",
  whatsappHref: "https://wa.me/447700900123?text=Hi%2C%20I%27d%20like%20a%20free%20quote",
  email: "hello@artificialgrasscleanrevive.co.uk",
  base: "Glasgow",
  hours: "Mon–Fri 8am–6pm, Sat by arrangement",
  areas: "Glasgow, Lanarkshire, Dumbartonshire, Renfrewshire and Clydebank.",
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
};

export type ServiceKey =
  | "artificial-grass"
  | "pressure-washing"
  | "maintenance"
  | "repointing"
  | "landscaping"
  | "driveways"
  | "fencing"
  | "decking"
  | "walls";

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
    key: "artificial-grass",
    icon: "Sparkles",
    title: "Artificial Grass Cleaning & Revival",
    short: "Deep cleaning, weed and debris removal, and powerbrushing to restore the fibres.",
    long: "Bring a tired artificial lawn back to life. We remove moss, weeds and built-up debris, then deep clean and powerbrush the surface to lift the fibres and leave it looking fresh, clean and ready to enjoy.",
    includes: [
      "Moss, weed and debris removal",
      "Deep clean for the artificial grass surface",
      "Powerbrushing to lift and restore fibres",
      "Freshen-up treatment using quality products",
      "Child and pet-friendly care options",
    ],
    image: beforeImg,
    alt: "Artificial grass ready for a professional clean and revival",
  },
  {
    key: "pressure-washing",
    icon: "Waves",
    title: "Pressure Washing",
    short: "Driveways, patios and decking jet washed back to looking new.",
    long: "Our professional pressure washing service clears away grime, moss and surface build-up from driveways, patios and decking, bringing tired hard surfaces back to a clean, well-kept finish.",
    includes: [
      "Driveway and patio jet washing",
      "Decking and paved-area cleaning",
      "Moss, algae and grime removal",
      "Careful cleaning around garden features",
      "Tidy clear-up on completion",
    ],
    image: drivewayImg,
    alt: "Driveway surface ready for professional pressure washing",
  },
  {
    key: "maintenance",
    icon: "Scissors",
    title: "Garden Maintenance",
    short: "Regular upkeep to keep outdoor spaces looking their best.",
    long: "Keep your outdoor space looking cared for with regular maintenance or a one-off tidy-up. We handle mowing, edging, hedge cutting, weeding, pruning and seasonal clearance, with green waste taken away.",
    includes: [
      "Regular mowing, edging and strimming",
      "Hedge cutting and shaping",
      "Border weeding and pruning",
      "Seasonal clear-ups and leaf clearance",
      "Green waste removal included",
    ],
    image: maintenanceImg,
    alt: "Neatly maintained garden with trimmed hedges and lawn",
  },
  {
    key: "repointing",
    icon: "Blocks",
    title: "Repointing",
    short: "Restoring patios and paved areas with clean, durable joints.",
    long: "Loose or damaged joints can make patios and paved areas look tired and allow weeds to take hold. We remove failed pointing and restore the surface with clean, durable joints that help it look smart again.",
    includes: [
      "Patio and paved-area repointing",
      "Removal of loose or failed jointing",
      "Weed and debris clearance",
      "Careful matching for a neat finish",
      "Tidy clean-up after the job",
    ],
    image: patioImg,
    alt: "Stone patio ready for professional repointing",
  },
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
];

export const serviceOptions = [
  "Artificial Grass Cleaning & Revival",
  "Pressure Washing",
  "Garden Maintenance",
  "Repointing",
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
      "Brought our artificial lawn back to life, removed all the moss and debris, looks brand new. Brilliant job.",
    name: "Sarah H.",
    area: "Cambuslang",
  },
  {
    quote:
      "Pressure washed our decking and revived the artificial grass in one visit, garden looks fresh again.",
    name: "James M.",
    area: "Alexandria",
  },
  {
    quote: "Fast, tidy and the results speak for themselves. Highly recommend.",
    name: "Priya K.",
    area: "Renfrew",
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
    q: "How often should artificial grass be cleaned?",
    a: "We'd recommend a clean and revive once or twice a year to keep it looking its best and extend its lifespan.",
  },
  {
    q: "Do you keep the site tidy?",
    a: "Always — we clear up as we go and leave your space spotless.",
  },
  {
    q: "What areas do you cover?",
    a: "Glasgow, Lanarkshire, Dumbartonshire, Renfrewshire and Clydebank.",
  },
  {
    q: "How do I get started?",
    a: "Get in touch for a free quote and we'll take it from there.",
  },
];

export const gallery = [
  {
    image: landscapingImg,
    caption: "Garden landscaping and planting for a refreshed outdoor space",
    area: "Glasgow",
  },
  {
    image: drivewayImg,
    caption: "Driveway pressure washing and surface restoration",
    area: "Lanarkshire",
  },
  {
    image: fencingImg,
    caption: "New closeboard fencing with matching side gate",
    area: "Dumbartonshire",
  },
  {
    image: deckingImg,
    caption: "Composite deck and glass balustrade with fresh turf",
    area: "Renfrewshire",
  },
  {
    image: wallsImg,
    caption: "Oak sleeper retaining beds and gravel path",
    area: "Clydebank",
  },
  {
    image: maintenanceImg,
    caption: "Seasonal maintenance — striped lawn and shaped hedging",
    area: "Glasgow",
  },
  {
    image: patioImg,
    caption: "Patio repointing and pressure washing detail",
    area: "Lanarkshire",
  },
  {
    image: afterImg,
    caption: "Artificial grass clean and revive transformation",
    area: "Renfrewshire",
  },
];
