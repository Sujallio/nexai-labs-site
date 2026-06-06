import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Rocket, BarChart3 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const capabilities = [
  "AI-assisted development",
  "Automated testing",
  "AI-powered code generation",
  "Rapid prototyping",
  "Intelligent project planning",
  "AI-enhanced UI/UX design",
  "Automated quality assurance",
  "Faster bug detection",
  "Scalable architecture planning",
  "Smart deployment workflows",
];

const stats = [
  { icon: Rocket, value: "40%", label: "Faster Delivery" },
  { icon: BarChart3, value: "30%", label: "Lower Development Cost" },
  { icon: Cpu, value: "24/7", label: "AI-Assisted Productivity" },
  { icon: ShieldCheck, value: "Ent.", label: "Enterprise-Grade Quality" },
];

export function AIAdvantage() {
  return (
    <section id="advantage" className="relative overflow-hidden bg-surface/40 px-6 py-24 md:py-32">
      <div className="absolute inset-0 -z-10 grid-fade opacity-50" />
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="The AI advantage"
          title="Why we build faster than traditional agencies"
          description="We've rebuilt the agency model around AI. Less ceremony, more shipping — without compromising on engineering rigor."
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {capabilities.map((c, i) => (
              <motion.li
                key={c}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="flex items-center gap-3 rounded-lg border border-border bg-background/60 px-4 py-3"
              >
                <span className="size-1.5 shrink-0 rounded-full bg-brand" />
                <span className="text-sm text-foreground">{c}</span>
              </motion.li>
            ))}
          </ul>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <s.icon className="size-5 text-brand" />
                <div className="mt-4 text-4xl font-semibold tracking-tight">{s.value}</div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
