import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-background px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="relative size-7 rounded-md bg-brand">
                <div className="absolute inset-1 rounded-sm bg-background" />
                <div className="absolute inset-2 rounded-sm bg-brand" />
              </div>
              <span className="font-semibold tracking-tight">NexaAI Labs</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Building smart digital products faster with AI. Custom software, web, mobile, and
              AI solutions for ambitious teams worldwide.
            </p>
          </div>

          <FooterCol
            title="Explore"
            items={[
              { label: "Services", to: "/services" },
              { label: "AI Advantage", to: "/advantage" },
              { label: "Process", to: "/process" },
              { label: "Work", to: "/work" },
              { label: "Pricing", to: "/pricing" },
            ]}
          />
          <FooterCol
            title="Company"
            items={[
              { label: "FAQ", to: "/faq" },
              { label: "Contact", to: "/contact" },
            ]}
          />
        </div>

        <FooterYear year={year} />
      </div>
    </footer>
  );
}

function FooterYear({ year }: { year: number }) {
  // avoid SSR hydration mismatch on year if rendered on edge
  const [y, setY] = useState(year);
  useEffect(() => setY(new Date().getFullYear()), []);
  return (
    <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
      <p>© {y} NexaAI Labs. All rights reserved.</p>
      <p className="font-mono">Built with AI-powered engineering.</p>
    </div>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; to: string }[];
}) {
  return (
    <div>
      <div className="font-mono text-[11px] uppercase tracking-widest text-foreground">
        {title}
      </div>
      <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
        {items.map((i) => (
          <li key={i.label}>
            <Link to={i.to} className="hover:text-foreground">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
