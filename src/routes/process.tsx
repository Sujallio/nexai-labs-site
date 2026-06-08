import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Process } from "@/components/site/Process";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process — NexaAI Labs" },
      {
        name: "description",
        content:
          "A transparent, AI-augmented delivery process — from discovery to launch and beyond.",
      },
      { property: "og:title", content: "Our Process — NexaAI Labs" },
      {
        property: "og:description",
        content: "How we plan, build, and ship modern software with AI.",
      },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-8">
        <Process />
      </main>
      <Footer />
    </div>
  );
}
