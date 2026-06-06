import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const projects = [
  {
    name: "VerifyAI",
    tag: "AI Document Verification Platform",
    desc: "AI-powered document verification and fraud detection platform serving fintech KYC flows.",
    tech: ["Next.js", "Python", "LangChain", "PostgreSQL", "AWS"],
    features: ["OCR + LLM extraction", "Fraud signal scoring", "Audit-ready logs"],
    results: ["95% auto-approval rate", "12s avg verification", "Reduced manual review by 70%"],
    gradient: "from-brand/30 via-brand/5 to-transparent",
  },
  {
    name: "QuickOrder",
    tag: "Restaurant Ordering Website",
    desc: "QR-based ordering system with Stripe payments, deployed across multi-location chains.",
    tech: ["React", "Node.js", "Stripe", "Supabase"],
    features: ["QR menu scanning", "Real-time kitchen orders", "Loyalty engine"],
    results: ["28% higher avg ticket", "<2s order-to-kitchen", "Live in 5 cities"],
    gradient: "from-emerald-400/30 via-emerald-400/5 to-transparent",
  },
  {
    name: "OmniDash",
    tag: "Business Management Dashboard",
    desc: "ERP dashboard with analytics, automation, and a custom AI assistant for ops teams.",
    tech: ["React", "TypeScript", "Python", "Postgres", "Docker"],
    features: ["Cross-module analytics", "Workflow automation", "AI chat copilot"],
    results: ["8 hours/wk saved per ops user", "Unified 6 internal tools"],
    gradient: "from-cyan-400/30 via-cyan-400/5 to-transparent",
  },
];

export function Portfolio() {
  return (
    <section id="work" className="bg-surface/40 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Selected work"
          title="Real products. Real results."
          description="A snapshot of recent projects. Every engagement ships measurable outcomes."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-background"
            >
              <div className={`relative h-44 bg-gradient-to-br ${p.gradient}`}>
                <div className="absolute inset-0 grid-fade opacity-60" />
                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Case study
                    </div>
                    <div className="mt-1 text-2xl font-semibold tracking-tight">{p.name}</div>
                  </div>
                  <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-5 p-6">
                <div>
                  <div className="text-xs text-brand">{p.tag}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </div>
                <Block title="Tech">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-border bg-surface px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Block>
                <Block title="Features">
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    {p.features.map((f) => (
                      <li key={f}>— {f}</li>
                    ))}
                  </ul>
                </Block>
                <Block title="Results">
                  <ul className="space-y-1 text-xs text-foreground">
                    {p.results.map((r) => (
                      <li key={r} className="flex gap-2">
                        <span className="text-brand">↗</span> {r}
                      </li>
                    ))}
                  </ul>
                </Block>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {title}
      </div>
      {children}
    </div>
  );
}
