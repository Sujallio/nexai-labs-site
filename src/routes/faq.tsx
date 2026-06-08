import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FAQ } from "@/components/site/FAQ";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Auxmet" },
      {
        name: "description",
        content:
          "Answers to common questions about Auxmet — process, pricing, AI, timelines, and quality.",
      },
      { property: "og:title", content: "FAQ — Auxmet" },
      {
        property: "og:description",
        content: "Common questions about working with Auxmet.",
      },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-8">
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
