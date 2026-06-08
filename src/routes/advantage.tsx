import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { AIAdvantage } from "@/components/site/AIAdvantage";
import { Stats } from "@/components/site/Stats";

export const Route = createFileRoute("/advantage")({
  head: () => ({
    meta: [
      { title: "The AI Advantage — Auxmet" },
      {
        name: "description",
        content:
          "How AI-powered development helps Auxmet ship 40% faster at 30% lower cost without sacrificing quality.",
      },
      { property: "og:title", content: "The AI Advantage — Auxmet" },
      {
        property: "og:description",
        content: "AI-augmented engineering for faster, leaner delivery.",
      },
    ],
    links: [{ rel: "canonical", href: "/advantage" }],
  }),
  component: AdvantagePage,
});

function AdvantagePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-8">
        <AIAdvantage />
        <Stats />
      </main>
      <Footer />
    </div>
  );
}
