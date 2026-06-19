import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Booking } from "@/components/site/Booking";
import { CTABanner } from "@/components/site/CTABanner";

export default function Book() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main className="pt-8">
        <Booking />
        <CTABanner
          title="Prefer to share details first?"
          description="Send us your project brief and we'll respond within 24 hours with a preliminary estimate."
        />
      </main>
      <Footer />
    </div>
  );
}
