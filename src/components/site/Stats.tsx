const stats = [
  { value: "3+", label: "Projects Delivered" },
  { value: "2", label: "International Clients" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "AI-Assisted Delivery" },
];

export function Stats() {
  return (
    <section className="border-y border-border bg-surface/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-3xl font-semibold tracking-tight md:text-4xl">{s.value}</div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
