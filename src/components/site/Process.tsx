import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const steps = [
  { n: "01", t: "Submit Requirements", d: "Share your idea through our secure inquiry form." },
  { n: "02", t: "Free Consultation Call", d: "30-minute strategy session with a senior engineer." },
  { n: "03", t: "Requirement Analysis", d: "We translate goals into a clear technical scope." },
  { n: "04", t: "AI-Powered Estimation", d: "Cost and timeline modeled with AI-assisted planning." },
  { n: "05", t: "UI/UX Design", d: "High-fidelity, conversion-focused interfaces." },
  { n: "06", t: "Development", d: "AI-augmented engineering with daily progress updates." },
  { n: "07", t: "Testing & QA", d: "Automated and manual testing across the full stack." },
  { n: "08", t: "Deployment", d: "Smart CI/CD pipelines to production-grade infra." },
  { n: "09", t: "Maintenance & Support", d: "Ongoing iteration, monitoring, and AI-assisted support." },
];

export function Process() {
  return (
    <section id="process" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          center
          eyebrow="How we work"
          title="A predictable path from idea to launch"
          description="Nine phases. No surprises. Every project follows the same battle-tested workflow."
        />

        <div className="relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-px" />
          <div className="space-y-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className={`relative flex gap-6 md:gap-10 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse md:text-right"
                }`}
              >
                <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-brand/40 bg-background font-mono text-xs text-brand md:absolute md:left-1/2 md:-translate-x-1/2">
                  {s.n}
                </div>
                <div className="flex-1 rounded-xl border border-border bg-surface/60 p-5 md:max-w-[42%]">
                  <h4 className="font-semibold tracking-tight">{s.t}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                </div>
                <div className="hidden flex-1 md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
