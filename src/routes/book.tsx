import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Booking } from "@/components/site/Booking";
import { CTABanner } from "@/components/site/CTABanner";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Free Strategy Call — Auxmet" },
      {
        name: "description",
        content:
          "Schedule a free 30-minute consultation with Auxmet to discuss your project requirements, timeline, budget, and implementation strategy.",
      },
      { property: "og:title", content: "Book a Free Strategy Call — Auxmet" },
      {
        property: "og:description",
        content: "Free 30-minute consultation. No obligation. Response within 24 hours.",
      },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
  component: BookPage,
});

function BookPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-8">
        <Booking />
        <CTABanner
          title="Prefer to share details first?"
          description="Send us your project brief and we'll respond within 24 hours with a preliminary estimate."
        />
      </main>
      <Footer />
    </div>
  );
}
