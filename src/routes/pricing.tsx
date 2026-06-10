import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PricingTiers } from "@/components/site/PricingTiers";
import { Pricing } from "@/components/site/Pricing";
import { TrustBadges } from "@/components/site/TrustBadges";
import { CTABanner } from "@/components/site/CTABanner";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Auxmet" },
      {
        name: "description",
        content:
          "Transparent project-based pricing — see how AI-powered development compares to traditional agencies. Plans start at $299.",
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
        <PricingTiers />
        <TrustBadges />
        <Pricing />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
