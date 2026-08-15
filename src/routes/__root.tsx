import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import { siteUrl, ogImage } from "@/lib/site";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-forest">404</h1>
        <h2 className="mt-4 text-xl text-forest">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg bg-leaf px-5 py-2.5 text-sm font-semibold text-leaf-foreground shadow-soft transition-colors hover:bg-leaf-dark"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl text-forest">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-lg bg-leaf px-5 py-2.5 text-sm font-semibold text-leaf-foreground transition-colors hover:bg-leaf-dark"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Artificial Grass Clean & Revive | Glasgow" },
      {
        name: "description",
        content:
          "Artificial grass cleaning and revival, pressure washing and garden care across Glasgow, Lanarkshire, Dumbartonshire, Renfrewshire and Clydebank.",
      },
      { name: "author", content: "Artificial Grass Clean & Revive" },

      // Open Graph — WhatsApp, Facebook, LinkedIn. Individual routes override
      // og:title / og:description; everything below applies site-wide.
      // og:url and og:image must be ABSOLUTE, hence `siteUrl` from src/lib/site.ts —
      // update that constant once the real deploy domain is known.
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Artificial Grass Clean & Revive" },
      { property: "og:locale", content: "en_GB" },
      { property: "og:url", content: siteUrl },
      {
        property: "og:title",
        content: "Artificial Grass Clean & Revive | Glasgow",
      },
      {
        property: "og:description",
        content:
          "Artificial grass cleaning and revival, pressure washing and garden care across Glasgow and the surrounding areas.",
      },
      { property: "og:image", content: `${siteUrl}${ogImage}` },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Artificial grass clean and revive service in Glasgow",
      },

      // Twitter / X
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Artificial Grass Clean & Revive | Glasgow",
      },
      {
        name: "twitter:description",
        content:
          "Artificial grass cleaning and revival, pressure washing and garden care across Glasgow and the surrounding areas.",
      },
      { name: "twitter:image", content: `${siteUrl}${ogImage}` },
      {
        name: "twitter:image:alt",
        content: "Artificial grass clean and revive service in Glasgow",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap",
      },
      // Favicon files live in /public and can be replaced when a branded mark is available.
      // for the client's real logo when you have it.
      { rel: "icon", href: "/favicon.ico", sizes: "48x48" },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "canonical", href: siteUrl },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="grow pb-20 sm:pb-0">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <Footer />
      </div>
      <FloatingActions />
      <Toaster position="top-center" richColors />
    </QueryClientProvider>
  );
}
