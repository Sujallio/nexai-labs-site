import { SectionHeader } from "./SectionHeader";

const groups = [
  { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { title: "Backend", items: ["Node.js", "Express", "Python", "FastAPI"] },
  { title: "Database", items: ["PostgreSQL", "MongoDB", "Supabase", "Redis"] },
  { title: "Cloud & DevOps", items: ["AWS", "Vercel", "Docker", "Cloudflare"] },
  { title: "AI / ML", items: ["OpenAI", "LangChain", "RAG", "AI Agents", "Vector DBs"] },
];

export function TechStack() {
  return (
    <section className="bg-surface/40 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Technology"
          title="A modern, AI-native stack"
          description="We choose tools that scale with you — from prototype to enterprise."
        />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-5">
          {groups.map((g) => (
            <div key={g.title} className="bg-background p-6">
              <div className="font-mono text-[11px] uppercase tracking-widest text-brand">
                {g.title}
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {g.items.map((i) => (
                  <li key={i} className="flex items-center gap-2 text-foreground">
                    <span className="size-1 rounded-full bg-muted-foreground" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
