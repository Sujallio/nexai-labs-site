import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Process } from "@/components/site/Process";

export default function ProcessPage() {
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
