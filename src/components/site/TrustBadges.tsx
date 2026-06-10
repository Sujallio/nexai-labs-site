import { Shield, FileSignature, Globe2, GitBranch, Headphones, Sparkles } from "lucide-react";

const badges = [
  { icon: Shield, label: "Secure Development" },
  { icon: FileSignature, label: "NDA Available" },
  { icon: Globe2, label: "International Clients" },
  { icon: GitBranch, label: "Agile Delivery" },
  { icon: Headphones, label: "Dedicated Support" },
  { icon: Sparkles, label: "AI-Powered" },
];

export function TrustBadges() {
  return (
    <section className="border-y border-border bg-surface/30 px-6 py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {badges.map((b) => (
          <div
            key={b.label}
            className="flex items-center gap-3 rounded-xl border border-border bg-background/50 px-4 py-3"
          >
            <div className="flex size-9 items-center justify-center rounded-lg bg-brand/15 text-brand">
              <b.icon className="size-4" />
            </div>
            <span className="text-xs font-medium text-foreground">{b.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
