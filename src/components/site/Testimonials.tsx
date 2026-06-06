import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const items = [
  {
    quote:
      "We replaced an entire dev shop with NexaAI. The delivery velocity is genuinely unmatched.",
    name: "Sara Lindqvist",
    role: "CTO, fintech startup",
  },
  {
    quote:
      "Their AI-assisted estimates were accurate to the day. That alone earned my trust.",
    name: "Marcus Bell",
    role: "Founder, SaaS platform",
  },
  {
    quote:
      "Clean architecture, fast iteration, no theatrics. Exactly what a small team needs.",
    name: "Priya Anand",
    role: "Head of Product, healthtech",
  },
  {
    quote:
      "We saw a real ROI within the first month of launching the AI agent they built.",
    name: "James O'Connor",
    role: "Operations Director, hospitality",
  },
  {
    quote:
      "Senior engineering at agency price. They feel like an extension of our team.",
    name: "Elena Ruiz",
    role: "VP Engineering, marketplace",
  },
];

export function Testimonials() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Testimonials"
          title="What clients say"
        />
        <div className="columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-2xl border border-border bg-surface/60 p-6"
            >
              <blockquote className="text-base leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <div className="flex size-8 items-center justify-center rounded-full bg-brand/20 font-mono text-xs text-brand">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    {t.role}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
