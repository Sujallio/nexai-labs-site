import { Mail, Linkedin, MessageCircle, CalendarClock } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  return (
    <section id="contact" className="bg-surface/40 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          center
          eyebrow="Get in touch"
          title="Let's talk about your project"
          description="Prefer a quick message over a form? Reach us through any of the channels below."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: MessageCircle,
              label: "WhatsApp",
              value: "Chat with us",
              href: "https://wa.me/10000000000",
            },
            {
              icon: Mail,
              label: "Email",
              value: "hello@nexaailabs.com",
              href: "mailto:hello@nexaailabs.com",
            },
            {
              icon: Linkedin,
              label: "LinkedIn",
              value: "Follow us",
              href: "https://linkedin.com",
            },
            {
              icon: CalendarClock,
              label: "Book a call",
              value: "30-min consultation",
              href: "/contact",
            },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group rounded-2xl border border-border bg-background p-6 transition-colors hover:border-brand/40"
            >
              <c.icon className="size-5 text-brand" />
              <div className="mt-4 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                {c.label}
              </div>
              <div className="mt-1 font-medium group-hover:text-brand">{c.value}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
