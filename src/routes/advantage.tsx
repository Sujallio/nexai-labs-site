import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { AIAdvantage } from "@/components/site/AIAdvantage";
import { Stats } from "@/components/site/Stats";

export default function Advantage() {
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
