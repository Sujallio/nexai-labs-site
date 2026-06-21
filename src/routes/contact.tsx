import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Contact as ContactSection } from "@/components/site/Contact";
import { InquiryForm } from "@/components/site/InquiryForm";
import { TrustBadges } from "@/components/site/TrustBadges";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-8">
        <InquiryForm />
        <TrustBadges />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
