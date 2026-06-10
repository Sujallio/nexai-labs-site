import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Portfolio } from "@/components/site/Portfolio";
import { CaseStudies } from "@/components/site/CaseStudies";
import { Clients } from "@/components/site/Clients";
import { Testimonials } from "@/components/site/Testimonials";
import { GlobalClients } from "@/components/site/GlobalClients";
import { CTABanner } from "@/components/site/CTABanner";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work & Case Studies — Auxmet" },
      {
        name: "description",
        content:
          "Selected case studies and client testimonials from Auxmet — AI products, SaaS, web, and mobile delivered for international clients.",
      },
      { property: "og:title", content: "Our Work — Auxmet" },
      {
        property: "og:description",
        content: "AI-driven projects we've shipped for startups and enterprises worldwide.",
      },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});

function WorkPage() {
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
