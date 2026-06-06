import { Check, X } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const rows = [
  { feature: "Delivery time", trad: "3–6 months", nexa: "4–8 weeks" },
  { feature: "Typical project cost", trad: "$40k+", nexa: "$15k–25k" },
  { feature: "AI workflows", trad: false, nexa: true },
  { feature: "Senior engineer access", trad: false, nexa: true },
  { feature: "Automated QA", trad: false, nexa: true },
  { feature: "Post-launch support", trad: "Business hours", nexa: "24/7 AI-assisted" },
  { feature: "Iterations included", trad: "Fixed scope", nexa: "Flexible" },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-surface/40 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          center
          eyebrow="Pricing advantage"
          title="Premium quality at startup-friendly pricing"
          description="Lower operational costs, AI-assisted workflows, and an efficient delivery process — passed back to you."
        />

        <div className="overflow-hidden rounded-2xl border border-border bg-background">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-surface text-left">
                <th className="px-6 py-4 text-sm font-semibold">Capability</th>
                <th className="px-6 py-4 text-sm font-semibold text-muted-foreground">
                  Traditional Agency
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-brand">NexaAI Labs</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rows.map((r) => (
                <tr key={r.feature}>
                  <td className="px-6 py-4 text-sm font-medium">{r.feature}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">
                    {typeof r.trad === "boolean" ? (
                      r.trad ? (
                        <Check className="size-4 text-brand" />
                      ) : (
                        <X className="size-4 text-muted-foreground/60" />
                      )
                    ) : (
                      r.trad
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-foreground">
                    {typeof r.nexa === "boolean" ? (
                      r.nexa ? (
                        <Check className="size-4 text-brand" />
                      ) : (
                        <X className="size-4" />
                      )
                    ) : (
                      r.nexa
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
