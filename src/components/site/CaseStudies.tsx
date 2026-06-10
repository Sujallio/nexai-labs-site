import { motion } from "framer-motion";
import { TrendingUp, Clock, DollarSign, Users, Zap } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const studies = [
  {
    name: "VerifyAI — Document Verification Platform",
    industry: "Fintech / KYC",
    challenge:
      "A regulated fintech client was bottlenecked by manual document verification: 8–12 minutes per applicant, frequent fraud leaks, and a growing review backlog blocking onboarding.",
    strategy:
      "We applied AI-assisted scoping to compress discovery to one week, then layered LLM document parsing and a fraud scoring model on top of their existing onboarding stack.",
    solution:
      "Built an OCR + LLM pipeline, a fraud signal scoring engine, and an audit-ready reviewer console — shipped in 6 weeks with full RBAC and compliance logging.",
    metrics: [
      { icon: Clock, label: "Verification time", value: "−85%" },
      { icon: TrendingUp, label: "Auto-approval rate", value: "95%" },
      { icon: Users, label: "Manual review reduced", value: "−70%" },
    ],
  },
  {
    name: "QuickOrder — Restaurant Ordering",
    industry: "Hospitality / F&B",
    challenge:
      "A multi-location restaurant chain struggled with slow phone orders, kitchen miscommunication, and underused loyalty data sitting in three disconnected systems.",
    strategy:
      "Phased rollout strategy with one pilot location, AI-generated menu schema, and parallel build tracks for customer app, kitchen display, and loyalty backend.",
    solution:
      "QR-based ordering app with Stripe payments, live kitchen display, and a loyalty engine connected to existing CRM — launched across 5 cities.",
    metrics: [
      { icon: DollarSign, label: "Avg ticket size", value: "+28%" },
      { icon: Zap, label: "Order-to-kitchen", value: "<2s" },
      { icon: TrendingUp, label: "Repeat orders", value: "+41%" },
    ],
  },
  {
    name: "OmniDash — Business Operations Platform",
    industry: "SaaS / Operations",
    challenge:
      "An ops team juggled six internal tools, exported CSVs daily, and lost ~8 hours per person each week reconciling reports across systems.",
    strategy:
      "Discovery sprints to map workflows, AI-assisted data modeling, and a unified dashboard with an embedded copilot trained on internal documentation.",
    solution:
      "Centralized ERP dashboard with cross-module analytics, workflow automation, and a custom AI assistant — rolled out to 40 internal users in 8 weeks.",
    metrics: [
      { icon: Clock, label: "Time saved per user", value: "8 hrs/wk" },
      { icon: Zap, label: "Tools unified", value: "6 → 1" },
      { icon: TrendingUp, label: "Reporting cycle", value: "−60%" },
    ],
  },
];

export function CaseStudies() {
  return (
    <section className="bg-background px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Success stories"
          title="Case studies & measurable outcomes"
          description="How AI-powered delivery translated into real business impact for clients across fintech, hospitality, and SaaS."
        />

        <div className="space-y-6">
          {studies.map((s, i) => (
            <motion.article
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-border bg-surface/40 p-6 md:p-10"
            >
              <div className="grid gap-8 md:grid-cols-[1.6fr_1fr]">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-widest text-brand">
                    {s.industry}
                  </div>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                    {s.name}
                  </h3>
                  <div className="mt-6 grid gap-5">
                    <Block label="Challenge">{s.challenge}</Block>
                    <Block label="Strategy">{s.strategy}</Block>
                    <Block label="Solution">{s.solution}</Block>
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-background p-6">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Results
                  </div>
                  <div className="mt-4 space-y-5">
                    {s.metrics.map((m) => (
                      <div key={m.label} className="flex items-center gap-4">
                        <div className="flex size-10 items-center justify-center rounded-lg bg-brand/15 text-brand">
                          <m.icon className="size-5" />
                        </div>
                        <div>
                          <div className="text-2xl font-semibold tracking-tight">
                            {m.value}
                          </div>
                          <div className="text-xs text-muted-foreground">{m.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
      <p className="mt-1.5 text-sm leading-relaxed text-foreground/90">{children}</p>
    </div>
  );
}
