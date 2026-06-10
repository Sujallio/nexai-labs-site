import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Contact } from "@/components/site/Contact";
import { InquiryForm } from "@/components/site/InquiryForm";
import { Booking } from "@/components/site/Booking";
import { TrustBadges } from "@/components/site/TrustBadges";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Auxmet" },
      {
        name: "description",
        content:
          "Tell us about your project — get a free consultation and an AI-assisted estimate within 24 hours.",
      },
      { property: "og:title", content: "Contact — Auxmet" },
      {
        property: "og:description",
        content: "Start your project with Auxmet.",
      },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-8">
        <InquiryForm />
        <TrustBadges />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
