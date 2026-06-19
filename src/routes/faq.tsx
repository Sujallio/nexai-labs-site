import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FAQ } from "@/components/site/FAQ";

export default function FAQPage() {
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
