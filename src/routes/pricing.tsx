import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Pricing } from "@/components/site/Pricing";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Auxmet" },
      {
        name: "description",
        content:
          "Transparent, project-based pricing — see how AI-powered development compares to traditional agencies.",
      },
      { property: "og:title", content: "Pricing — Auxmet" },
      {
        property: "og:description",
        content: "Startup-friendly pricing with enterprise-grade quality.",
      },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-8">
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
