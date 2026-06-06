import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const faqs = [
  {
    q: "How long does development take?",
    a: "Most projects ship in 4–8 weeks. Larger platforms can take 3–4 months. We give you a clear, AI-assisted estimate within 24 hours of your inquiry.",
  },
  {
    q: "What industries do you work with?",
    a: "Fintech, healthtech, hospitality, e-commerce, logistics, and B2B SaaS. If your problem is software-shaped, we can probably help.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes — every engagement includes a support window, and we offer ongoing maintenance and AI-assisted monitoring as a monthly retainer.",
  },
  {
    q: "How exactly does AI help development?",
    a: "We use AI for code scaffolding, test generation, design exploration, technical research, QA, and intelligent project planning. Senior engineers always own the architecture and review every line that ships.",
  },
  {
    q: "What are your pricing models?",
    a: "Fixed-price for well-scoped projects, monthly retainer for ongoing product development, and dedicated team for larger engagements.",
  },
  {
    q: "Do you work internationally?",
    a: "Yes. We work fully remote, async-first, with clients in the US, UK, and beyond. Time-zone overlap is set up at the start of every engagement.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeader center eyebrow="FAQ" title="Common questions" />
        <div className="divide-y divide-border rounded-2xl border border-border bg-surface/40">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-medium">{f.q}</span>
                  {isOpen ? (
                    <Minus className="size-4 shrink-0 text-brand" />
                  ) : (
                    <Plus className="size-4 shrink-0 text-muted-foreground" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
