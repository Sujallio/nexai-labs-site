import { Calendar, CheckCircle2, Clock, ShieldCheck } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

// Replace this with your real Calendly URL when ready.
const CALENDLY_URL = "https://calendly.com/your-handle/30min";

export function Booking() {
  return (
    <section id="book" className="bg-surface/40 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          center
          eyebrow="Book a strategy call"
          title="Book a Free Strategy Call"
          description="Schedule a free 30-minute consultation to discuss your project requirements, timelines, budget, and implementation strategy."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <div className="rounded-2xl border border-border bg-background p-6 md:p-8">
            <div className="font-mono text-[11px] uppercase tracking-widest text-brand">
              What you get
            </div>
            <ul className="mt-5 space-y-4 text-sm">
              {[
                "Free 30-minute consultation",
                "No obligation, no sales pressure",
                "AI-assisted project estimate",
                "Response within 24 hours",
                "Direct conversation with a senior engineer",
              ].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" />
                  <span className="text-foreground/90">{i}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 grid gap-3 border-t border-border pt-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="size-3.5 text-brand" /> 30 minutes · Zoom or Google Meet
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-3.5 text-brand" /> NDA available on request
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-2.5">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-brand/90"
              >
                <Calendar className="size-4" /> Schedule Consultation
              </a>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
              >
                Book Discovery Call
              </a>
            </div>
          </div>

          {/* Calendly embed placeholder */}
          <div className="overflow-hidden rounded-2xl border border-border bg-background">
            <div className="border-b border-border bg-surface/60 px-5 py-3">
              <div className="flex items-center gap-2">
                <div className="size-2.5 rounded-full bg-destructive/60" />
                <div className="size-2.5 rounded-full bg-yellow-500/60" />
                <div className="size-2.5 rounded-full bg-brand/60" />
                <span className="ml-3 font-mono text-[11px] text-muted-foreground">
                  calendly.com — strategy-call
                </span>
              </div>
            </div>
            <div className="relative">
              <iframe
                src={CALENDLY_URL}
                title="Schedule a consultation"
                loading="lazy"
                className="h-[640px] w-full bg-background"
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background/0">
                <div className="pointer-events-auto rounded-xl border border-border bg-background/90 p-5 text-center backdrop-blur">
                  <Calendar className="mx-auto size-6 text-brand" />
                  <div className="mt-2 text-sm font-semibold">Calendly embed</div>
                  <p className="mt-1 max-w-xs text-xs text-muted-foreground">
                    Connect your Calendly link to replace this placeholder with the live booking widget.
                  </p>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 rounded-md bg-brand px-4 py-2 text-xs font-semibold text-background hover:bg-brand/90"
                  >
                    Open scheduler
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
