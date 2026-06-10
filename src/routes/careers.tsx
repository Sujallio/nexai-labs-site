import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Briefcase } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Auxmet" },
      {
        name: "description",
        content:
          "Join Auxmet — explore open roles at our AI-powered software development team.",
      },
      { property: "og:title", content: "Careers — Auxmet" },
      {
        property: "og:description",
        content: "Open roles at Auxmet.",
      },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="px-6 pt-8">
        <section className="mx-auto flex max-w-3xl flex-col items-center py-24 text-center md:py-32">
          <div className="flex size-14 items-center justify-center rounded-2xl border border-border bg-surface">
            <Briefcase className="size-6 text-brand" />
          </div>
          <div className="mt-6 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Careers
          </div>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            No open roles right now
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Thank you for your interest in joining Auxmet. We don't have any open positions
            at the moment, but we appreciate you taking the time to visit. Check back soon —
            we're growing fast.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-brand/90"
            >
              Get in touch
            </Link>
            <Link
              to="/"
              className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface"
            >
              Back to home
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
