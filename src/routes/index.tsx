import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Services } from "@/components/site/Services";
import { AIAdvantage } from "@/components/site/AIAdvantage";
import { Process } from "@/components/site/Process";
import { InquiryForm } from "@/components/site/InquiryForm";
import { Portfolio } from "@/components/site/Portfolio";
import { Clients } from "@/components/site/Clients";
import { Pricing } from "@/components/site/Pricing";
import { Testimonials } from "@/components/site/Testimonials";
import { TechStack } from "@/components/site/TechStack";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NexaAI Labs — AI-Powered Software Development Agency" },
      {
        name: "description",
        content:
          "Building smart digital products faster with AI. Custom software, websites, mobile apps, AI agents & RAG, and digital marketing for startups and enterprises.",
      },
      { property: "og:title", content: "NexaAI Labs — AI-Powered Software Development" },
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
        <Stats />
        <Services />
        <AIAdvantage />
        <Process />
        <InquiryForm />
        <Portfolio />
        <Clients />
        <Pricing />
        <Testimonials />
        <TechStack />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
