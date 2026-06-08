import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Services } from "@/components/site/Services";
import { TechStack } from "@/components/site/TechStack";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — NexaAI Labs" },
      {
        name: "description",
        content:
          "Custom software, web & mobile apps, AI solutions, and digital marketing — delivered faster with AI-powered engineering workflows.",
      },
      { property: "og:title", content: "Services — NexaAI Labs" },
      {
        property: "og:description",
        content:
          "End-to-end product teams combining senior engineers with proprietary AI workflows.",
      },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-8">
        <Services />
        <TechStack />
      </main>
      <Footer />
    </div>
  );
}
