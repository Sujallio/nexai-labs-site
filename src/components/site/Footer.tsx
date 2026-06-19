import { useEffect, useState } from "react";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-background px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2.5">
              <Logo className="size-7" />
              <span className="font-semibold tracking-tight">Auxmet</span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Building smart digital products faster with AI. Custom software, web, mobile, and
              AI solutions for ambitious teams worldwide.
            </p>
          </div>

          <FooterCol
            title="Explore"
            items={[
          { label: "Services", href: "/services" },
              { label: "AI Advantage", href: "/advantage" },
              { label: "Process", href: "/process" },
              { label: "Work", href: "/work" },
              { label: "Pricing", href: "/pricing" },
              { label: "Book a Call", href: "/book" },
            ]}
          />

          <FooterCol
            title="Company"
            items={[
              { label: "FAQ", href: "/faq" },
              { label: "Careers", href: "/careers" },
              { label: "Contact", href: "/contact" },
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
      <p>© {y} Auxmet. All rights reserved.</p>
      <p className="font-mono">Built with AI-powered engineering.</p>
    </div>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <div className="font-mono text-[11px] uppercase tracking-widest text-foreground">
        {title}
      </div>
      <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
        {items.map((i) => (
          <li key={i.label}>
            <a href={i.href} className="hover:text-foreground">
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
