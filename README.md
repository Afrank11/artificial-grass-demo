# Artificial Grass Demo — Artificial Grass Clean & Revive

A Vite, React and TypeScript marketing site for an artificial grass cleaning, revival and pressure washing business.

## Commands

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm install`     | Install dependencies                 |
| `npm run dev`     | Start the development server         |
| `npm run build`   | Create a production build            |
| `npm run preview` | Preview the production build locally |

## Content

Business details, services, reviews, FAQs and gallery captions are maintained in `src/lib/site.ts`. Page-specific copy and metadata live in `src/routes`.

The Open Graph and Twitter card origin is set to `https://artificial-grass-demo.vercel.app` in `src/lib/site.ts`. Update it if the production deployment URL changes.

`public/og-image.jpg` is the image used by social cards.

## Deployment

`vercel.json` remains configured for Vercel builds. The Vite configuration emits Vercel Build Output when deployed and supports client-side routes.
