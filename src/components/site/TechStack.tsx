import { SectionHeader } from "./SectionHeader";

const groups = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "Vue.js",
      "Nuxt",
      "Angular",
      "Svelte / SvelteKit",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Sass / SCSS",
      "Redux / Zustand",
      "TanStack Query",
      "Framer Motion",
      "Three.js",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express",
      "NestJS",
      "Python",
      "FastAPI",
      "Django",
      "Flask",
      "Java",
      "Spring Boot",
      "Go",
      "Rust",
      "PHP / Laravel",
      "Ruby on Rails",
      ".NET / C#",
      "GraphQL",
      "tRPC",
      "REST APIs",
    ],
  },
  {
    title: "Mobile",
    items: [
      "React Native",
      "Expo",
      "Flutter",
      "Swift / iOS",
      "Kotlin / Android",
      "Ionic",
    ],
  },
  {
    title: "Databases",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Supabase",
      "Firebase",
      "Redis",
      "DynamoDB",
      "SQLite",
      "Prisma",
      "Drizzle",
      "Elasticsearch",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS",
      "Google Cloud",
      "Azure",
      "Vercel",
      "Cloudflare",
      "Netlify",
      "DigitalOcean",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "CI/CD",
      "Nginx",
    ],
  },
  {
    title: "AI / ML",
    items: [
      "OpenAI",
      "Anthropic Claude",
      "Google Gemini",
      "Meta Llama",
      "Mistral",
      "LangChain",
      "LlamaIndex",
      "RAG Pipelines",
      "AI Agents",
      "Vector DBs",
      "Pinecone",
      "Weaviate",
      "pgvector",
      "HuggingFace",
      "PyTorch",
      "TensorFlow",
      "Whisper / TTS",
    ],
  },
  {
    title: "CMS & E-commerce",
    items: [
      "WordPress",
      "Shopify",
      "Webflow",
      "Strapi",
      "Sanity",
      "Contentful",
      "WooCommerce",
      "Medusa",
    ],
  },
  {
    title: "Design & Collaboration",
    items: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Notion", "Linear", "Jira"],
  },
];

export function TechStack() {
  return (
    <section className="bg-surface/40 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Technology"
          title="We work across the entire modern stack"
          description="We're not locked into a single framework or language. We pick the right tools for your problem and combine them in flexible, AI-native architectures."
        />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => (
            <div key={g.title} className="bg-background p-6">
              <div className="font-mono text-[11px] uppercase tracking-widest text-brand">
                {g.title}
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <li
                    key={i}
                    className="rounded-md border border-border bg-surface/60 px-2.5 py-1 text-xs text-foreground"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Don't see your stack? We've almost certainly worked with it — just ask.
        </p>
      </div>
    </section>
  );
}
