import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { TrustBadges } from "@/components/site/TrustBadges";
import { TrustStats } from "@/components/site/TrustStats";
import { Portfolio } from "@/components/site/Portfolio";
import { Testimonials } from "@/components/site/Testimonials";
import { GlobalClients } from "@/components/site/GlobalClients";
import { PricingTiers } from "@/components/site/PricingTiers";
import { CTABanner } from "@/components/site/CTABanner";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Auxmet — AI-Powered Software Development Agency" },
      {
        name: "description",
        content:
          "Auxmet helps US, UK, Canadian, Australian, and European founders ship AI-powered websites, applications, and AI solutions faster and more affordably than traditional agencies.",
      },
      { property: "og:title", content: "Auxmet — AI-Powered Software Development" },
      {
        property: "og:description",
        content:
          "We combine AI workflows with senior engineering to ship products 40% faster, at 30% lower cost.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <TrustBadges />
        <TrustStats />
        <Portfolio />
        <PricingTiers />
        <Testimonials />
        <GlobalClients />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
