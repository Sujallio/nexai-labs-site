import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  {
    quote:
      "Auxmet replaced an entire dev shop for us. Delivery velocity is genuinely unmatched and the AI-assisted estimates were accurate to the day.",
    name: "Sarah Mitchell",
    role: "Founder & CEO",
    company: "Lumen Capital",
    country: "🇺🇸 United States",
    rating: 5,
  },
  {
    quote:
      "Working across time zones felt effortless. They shipped our MVP in 6 weeks and our investors were impressed by the quality.",
    name: "James O'Connor",
    role: "Operations Director",
    company: "Brackton Hospitality",
    country: "🇬🇧 United Kingdom",
    rating: 5,
  },
  {
    quote:
      "We rebuilt our entire e-commerce stack with Auxmet. Conversion is up 34% and our team can finally move fast without engineering bottlenecks.",
    name: "Priya Anand",
    role: "Head of Growth",
    company: "Northwave Apparel",
    country: "🇨🇦 Canada",
    rating: 5,
  },
  {
    quote:
      "Their QR ordering rollout doubled our average ticket size. The kitchen display alone paid for the entire engagement in the first month.",
    name: "Marcus Bell",
    role: "Owner",
    company: "Harbour Street Kitchen",
    country: "🇦🇺 Australia",
    rating: 5,
  },
  {
    quote:
      "Senior engineering at agency price. They feel like an extension of our team and the AI copilot they built is now core to our product.",
    name: "Elena Ruiz",
    role: "VP Engineering",
    company: "Tradera SaaS",
    country: "🇪🇸 Spain",
    rating: 5,
  },
  {
    quote:
      "We white-label Auxmet for our own clients. They consistently deliver enterprise quality at startup speed — every single time.",
    name: "David Klein",
    role: "Founding Partner",
    company: "Mercia Digital Agency",
    country: "🇩🇪 Germany",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          center
          eyebrow="Testimonials"
          title="Trusted by founders across 4 continents"
          description="Real reviews from real clients in fintech, e-commerce, hospitality, and SaaS."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex flex-col rounded-2xl border border-border bg-surface/60 p-6 transition-colors hover:border-brand/40"
            >
              <div className="flex items-center gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="size-4 fill-brand text-brand" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-brand/30 to-brand/10 font-mono text-xs font-semibold text-brand">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="truncate text-xs text-muted-foreground">
                    {t.role}, {t.company}
                  </div>
                  <div className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-brand">
                    {t.country}
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
