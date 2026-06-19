import { ArrowRight, Calendar, FileText } from "lucide-react";

export function CTABanner({
  title = "Ready to Build Your Next Digital Product?",
  description = "Get a free consultation, an AI-assisted estimate, and a clear roadmap within 24 hours.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="px-6 py-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-brand/15 via-surface to-background p-10 md:p-14">
        <div className="absolute inset-0 grid-fade opacity-50" />
        <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              {title}
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">{description}</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-brand/90"
            >
              Get Free Consultation
              <ArrowRight className="size-4" />
            </a>
            <a
              href="/book"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background/60 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
            >
              <Calendar className="size-4" /> Schedule Call
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background/60 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
            >
              <FileText className="size-4" /> Request Proposal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
