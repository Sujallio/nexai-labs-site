import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Smartphone,
  Brain,
  Megaphone,
  Layers,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const services = [
  {
    icon: Code2,
    title: "Custom Software",
    desc: "ERP, CRM, SaaS, and enterprise systems built with AI-assisted workflows.",
    items: ["ERP Systems", "CRM Solutions", "SaaS Platforms", "Enterprise Software"],
  },
  {
    icon: Globe,
    title: "Website Development",
    desc: "High-converting corporate sites, e-commerce, portfolios, and landing pages.",
    items: ["Corporate Websites", "E-commerce", "Portfolio Sites", "Landing Pages"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Native iOS, Android, and cross-platform apps with AI features baked in.",
    items: ["iOS Native", "Android Native", "Cross Platform", "AI-Powered Apps"],
  },
  {
    icon: Brain,
    title: "AI Solutions",
    desc: "RAG, agents, chatbots, document intelligence, and predictive analytics.",
    items: ["AI Chatbots", "RAG Applications", "AI Agents", "Document Intelligence"],
  },
  {
    icon: Layers,
    title: "Web Applications",
    desc: "Complex web apps with real-time data, dashboards, and automated workflows.",
    items: ["Admin Dashboards", "Real-time Apps", "Workflow Automation", "Internal Tools"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Growth engineering: SEO, content, performance, and AI-driven lead generation.",
    items: ["SEO", "Social Media", "Performance Ads", "Lead Generation"],
  },
];

export function Services() {
  return (
    <section id="services" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="What we do"
          title="Intelligent engineering services"
          description="End-to-end product teams that combine senior engineers with proprietary AI workflows to ship faster, cleaner, and at lower cost."
        />

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative bg-background p-8 transition-colors hover:bg-surface"
            >
              <div className="mb-6 flex size-11 items-center justify-center rounded-lg border border-border bg-surface text-brand transition-colors group-hover:border-brand/40">
                <s.icon className="size-5" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <ul className="mt-6 space-y-2 font-mono text-[12px] text-muted-foreground">
                {s.items.map((it) => (
                  <li key={it} className="flex items-center gap-2">
                    <span className="text-brand">+</span>
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
