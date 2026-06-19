import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SectionHeader } from "./SectionHeader";

const tiers = [
  {
    name: "Starter Website",
    price: "$299",
    tag: "For new founders",
    features: [
      "Responsive Website",
      "Contact Forms",
      "SEO Setup",
      "Basic Analytics",
    ],
  },
  {
    name: "Business Website",
    price: "$599",
    tag: "Most popular",
    highlight: true,
    features: [
      "Custom Design",
      "CMS Integration",
      "Advanced SEO",
      "Lead Generation Setup",
    ],
  },
  {
    name: "Web Application",
    price: "$1,499",
    tag: "Product MVP",
    features: [
      "Authentication",
      "Dashboard",
      "Database Integration",
      "API Development",
    ],
  },
  {
    name: "AI Solution",
    price: "$1,999",
    tag: "AI-native",
    features: [
      "AI Chatbot",
      "AI Automation",
      "RAG System",
      "Custom AI Workflows",
    ],
  },
];

export function PricingTiers() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          center
          eyebrow="Pricing plans"
          title="Affordable Pricing Without Compromising Quality"
          description="We leverage AI-assisted development to deliver projects faster and more cost-effectively than traditional agencies."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`relative flex flex-col rounded-2xl border p-6 backdrop-blur ${
                t.highlight
                  ? "border-brand/50 bg-gradient-to-b from-brand/10 to-surface/60 shadow-lg shadow-brand/10"
                  : "border-border bg-surface/40"
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-background">
                  <Sparkles className="mr-1 inline size-3" /> Popular
                </div>
              )}
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {t.tag}
              </div>
              <div className="mt-2 text-lg font-semibold">{t.name}</div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-xs text-muted-foreground">Starting at</span>
              </div>
              <div className="text-3xl font-semibold tracking-tight text-foreground">
                {t.price}
              </div>
              <ul className="mt-6 space-y-2.5 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-7 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold transition-colors ${
                  t.highlight
                    ? "bg-brand text-background hover:bg-brand/90"
                    : "border border-border bg-background text-foreground hover:bg-surface"
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Final pricing depends on project complexity and requirements.
        </p>
      </div>
    </section>
  );
}
