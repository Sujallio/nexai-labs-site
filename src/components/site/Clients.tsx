import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const clients = [
  {
    flag: "🇺🇸",
    country: "United States",
    name: "Founder, Y-Combinator-backed startup",
    industry: "Fintech / Identity",
    type: "AI Document Verification Platform",
    quote:
      "NexaAI shipped our MVP in six weeks — what our previous agency quoted six months for. Engineering quality is genuinely senior.",
  },
  {
    flag: "🇬🇧",
    country: "United Kingdom",
    name: "Operations Director, hospitality group",
    industry: "Hospitality / SaaS",
    type: "QR Ordering & Payments Platform",
    quote:
      "They acted like a product team, not a vendor. The AI workflows they used internally were obvious in delivery speed.",
  },
];

export function Clients() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="International clients"
          title="Trusted across borders"
          description="We work with founders and operators in the US and UK — fully remote, async-first."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {clients.map((c, i) => (
            <motion.div
              key={c.country}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-surface/60 p-8"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{c.flag}</span>
                <div>
                  <div className="font-semibold">{c.country}</div>
                  <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    {c.industry}
                  </div>
                </div>
              </div>
              <div className="mt-6 text-xs text-brand">{c.type}</div>
              <blockquote className="mt-3 text-lg leading-snug text-foreground">
                "{c.quote}"
              </blockquote>
              <div className="mt-4 text-sm text-muted-foreground">— {c.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
