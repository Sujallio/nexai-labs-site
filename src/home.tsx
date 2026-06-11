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
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

export function HomePage() {
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
      <WhatsAppButton />
    </div>
  );
}
