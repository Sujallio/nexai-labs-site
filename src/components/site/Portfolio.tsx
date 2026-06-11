import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const projects = [
  {
    name: "VerifyAI",
    industry: "Fintech / KYC",
    clientType: "Series A fintech startup, USA",
    overview:
      "AI-powered document verification and fraud detection platform serving KYC and onboarding flows for regulated fintech clients.",
    problem:
      "Manual document verification was slow, error-prone, and blocking a growing onboarding pipeline.",
    tech: ["Next.js", "Python", "LangChain", "PostgreSQL", "AWS"],
    duration: "6 weeks",
    results: [
      "85% reduction in verification time",
      "95% auto-approval accuracy",
      "Manual review reduced by 70%",
    ],
    gradient: "from-brand/30 via-brand/5 to-transparent",
    accent: "text-brand",
    demoUrl: "#",
    caseUrl: "/work",
  },
  {
    name: "QuickOrder",
    industry: "Hospitality / F&B",
    clientType: "Multi-location restaurant chain, UK",
    overview:
      "QR-based ordering platform with Stripe payments, live kitchen display, and a loyalty engine — deployed across multiple cities.",
    problem:
      "Slow phone orders, kitchen miscommunication, and disconnected loyalty data across locations.",
    tech: ["React", "Node.js", "Stripe", "Supabase"],
    duration: "5 weeks",
    results: [
      "28% higher average ticket",
      "<2s order-to-kitchen latency",
      "Live across 5 cities",
    ],
    gradient: "from-emerald-400/30 via-emerald-400/5 to-transparent",
    accent: "text-emerald-300",
    demoUrl: "#",
    caseUrl: "/work",
  },
  {
    name: "OmniDash",
    industry: "SaaS / Operations",
    clientType: "Mid-size SaaS operations team, Canada",
    overview:
      "Centralized ERP dashboard with analytics, automation, and an AI copilot trained on internal documentation.",
    problem:
      "Ops team juggled six internal tools and lost ~8 hours per person each week reconciling reports.",
    tech: ["React", "TypeScript", "Python", "Postgres", "Docker"],
    duration: "8 weeks",
    results: [
      "8 hours saved per ops user weekly",
      "Unified 6 internal tools into one",
      "60% faster reporting cycle",
    ],
    gradient: "from-cyan-400/30 via-cyan-400/5 to-transparent",
    accent: "text-cyan-300",
    demoUrl: "#",
    caseUrl: "/work",
  },
];

export function Portfolio() {
  return (
    <section id="work" className="bg-surface/40 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Selected work"
          title="Real products. Real results."
          description="A snapshot of recent projects — every engagement ships measurable outcomes for clients across the US, UK, and beyond."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/5"
            >
              {/* Screenshot placeholder */}
              <div className={`relative h-48 bg-gradient-to-br ${p.gradient}`}>
                <div className="absolute inset-0 grid-fade opacity-60" />
                <div className="absolute inset-x-4 top-4 rounded-md border border-border bg-background/70 px-3 py-2 backdrop-blur">
                  <div className="flex items-center gap-1.5">
                    <div className="size-2 rounded-full bg-destructive/60" />
                    <div className="size-2 rounded-full bg-yellow-500/60" />
                    <div className="size-2 rounded-full bg-brand/60" />
                    <span className="ml-2 truncate font-mono text-[10px] text-muted-foreground">
                      {p.name.toLowerCase()}.app
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                  <div>
                    <div className={`font-mono text-[10px] uppercase tracking-widest ${p.accent}`}>
                      {p.industry}
                    </div>
                    <div className="mt-1 text-2xl font-semibold tracking-tight">{p.name}</div>
                  </div>
                  <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-muted-foreground">
                  <span>{p.clientType}</span>
                  <span className="text-foreground/30">•</span>
                  <span className="font-mono">{p.duration}</span>
                </div>

                <p className="text-sm text-muted-foreground">{p.overview}</p>

                <Block title="Problem solved">
                  <p className="text-xs text-foreground/80">{p.problem}</p>
                </Block>

                <Block title="Technologies">
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

                <Block title="Results achieved">
                  <ul className="space-y-1 text-xs text-foreground">
                    {p.results.map((r) => (
                      <li key={r} className="flex gap-2">
                        <span className="text-brand">↗</span> {r}
                      </li>
                    ))}
                  </ul>
                </Block>

                <div className="mt-auto flex gap-2 pt-2">
                  <a
                    href={p.caseUrl}
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-border bg-surface px-3 py-2 text-xs font-semibold text-foreground hover:bg-secondary"
                  >
                    <FileText className="size-3.5" /> Case Study
                  </a>
                </div>

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
      <div className="mb-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {title}
      </div>
      {children}
    </div>
  );
}
