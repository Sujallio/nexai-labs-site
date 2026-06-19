import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Services } from "@/components/site/Services";
import { TechStack } from "@/components/site/TechStack";

export default function Services() {
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
