import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-20 pb-24 md:pt-28 md:pb-32">
      {/* Background grid */}
      <div className="absolute inset-0 -z-10 grid-fade" />
      {/* Glow */}
      <div className="absolute left-1/2 top-0 -z-10 size-[800px] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px] opacity-50" />

      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-brand" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-widest text-brand">
            AI-Powered Engineering v2.0
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
        >
          Transform Your Ideas into{" "}
          <span className="bg-gradient-to-br from-brand via-brand to-emerald-300 bg-clip-text text-transparent">
            Scalable Digital Products
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg"
        >
          We combine AI-powered development with expert engineering to deliver websites,
          applications, software, and digital solutions faster and more affordably than traditional
          agencies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-brand/90 glow-brand"
          >
            Get Free Consultation
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary/40 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            View Our Work
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 flex items-center justify-center gap-2 text-xs text-muted-foreground"
        >
          <Sparkles className="size-3.5 text-brand" />
          <span>Trusted by founders in the US, UK & beyond</span>
        </motion.div>
      </div>

      {/* Preview panel */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mx-auto mt-16 max-w-6xl"
      >
        <div className="relative rounded-2xl border border-border bg-surface/60 p-2 shadow-2xl backdrop-blur">
          <div className="rounded-xl border border-border bg-background p-6">
            <div className="mb-4 flex items-center gap-2">
              <div className="size-2.5 rounded-full bg-destructive/60" />
              <div className="size-2.5 rounded-full bg-yellow-500/60" />
              <div className="size-2.5 rounded-full bg-brand/60" />
              <span className="ml-3 font-mono text-[11px] text-muted-foreground">
                nexaai-labs/platform — main
              </span>
            </div>
            <div className="grid gap-3 font-mono text-[12px] leading-relaxed">
              <div className="text-muted-foreground">
                <span className="text-brand">$</span> nexa generate --type=saas --ai=on
              </div>
              <div className="text-muted-foreground">→ Analyzing requirements …</div>
              <div className="text-muted-foreground">→ Drafting architecture (Next.js + Postgres)</div>
              <div className="text-muted-foreground">→ Scaffolding 27 components, 14 endpoints</div>
              <div className="text-brand">✓ Production-ready scaffold in 1m 42s</div>
              <div className="mt-2 grid grid-cols-3 gap-3 pt-3">
                {["Plan", "Build", "Ship"].map((s, i) => (
                  <div key={s} className="rounded-md border border-border bg-surface px-3 py-2">
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      Phase {i + 1}
                    </div>
                    <div className="mt-1 text-foreground">{s}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
