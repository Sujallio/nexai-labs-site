import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Auxmet — AI-Powered Software Development Agency" },
      {
        name: "description",
        content:
          "Building smart digital products faster with AI. Custom software, websites, mobile apps, AI agents & RAG, and digital marketing for startups and enterprises.",
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
        <Stats />
      </main>
      <Footer />
    </div>
  );
}
