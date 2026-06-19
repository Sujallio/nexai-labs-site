import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PricingTiers } from "@/components/site/PricingTiers";
import { Pricing as PricingSection } from "@/components/site/Pricing";
import { TrustBadges } from "@/components/site/TrustBadges";
import { CTABanner } from "@/components/site/CTABanner";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-8">
        <PricingTiers />
        <TrustBadges />
        <PricingSection />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
