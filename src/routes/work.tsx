import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Portfolio } from "@/components/site/Portfolio";
import { Clients } from "@/components/site/Clients";
import { Testimonials } from "@/components/site/Testimonials";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — NexaAI Labs" },
      {
        name: "description",
        content:
          "Selected case studies and client testimonials from NexaAI Labs — AI products, SaaS, web, and mobile.",
      },
      { property: "og:title", content: "Our Work — NexaAI Labs" },
      {
        property: "og:description",
        content: "AI-driven projects we've shipped for startups and enterprises.",
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
        <Clients />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
