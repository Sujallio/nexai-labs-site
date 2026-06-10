import { motion } from "framer-motion";
import { Rocket, Globe2, Zap, Sparkles, Headphones, Wallet } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  { icon: Rocket, value: "3+", label: "Projects Delivered" },
  { icon: Globe2, value: "2", label: "International Clients" },
  { icon: Zap, value: "4–8 wk", label: "Average Delivery" },
  { icon: Sparkles, value: "AI", label: "Powered Workflows" },
  { icon: Headphones, value: "24/7", label: "Dedicated Support" },
  { icon: Wallet, value: "30%", label: "Lower Cost vs Agencies" },
];

export function TrustStats() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          center
          eyebrow="Why us"
          title="Why Businesses Trust Us"
          description="Senior engineering, AI-assisted delivery, and a transparent process — built for teams that need to ship."
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {items.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-border bg-surface/40 p-5 text-center"
            >
              <div className="mx-auto flex size-10 items-center justify-center rounded-lg bg-brand/15 text-brand">
                <s.icon className="size-5" />
              </div>
              <div className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
