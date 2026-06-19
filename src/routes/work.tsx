import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Portfolio } from "@/components/site/Portfolio";
import { CaseStudies } from "@/components/site/CaseStudies";
import { Clients } from "@/components/site/Clients";
import { Testimonials } from "@/components/site/Testimonials";
import { GlobalClients } from "@/components/site/GlobalClients";
import { CTABanner } from "@/components/site/CTABanner";

export default function Work() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-8">
        <Portfolio />
        <CaseStudies />
        <Clients />
        <Testimonials />
        <GlobalClients />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
