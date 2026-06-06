export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="relative size-7 rounded-md bg-brand">
                <div className="absolute inset-1 rounded-sm bg-background" />
                <div className="absolute inset-2 rounded-sm bg-brand" />
              </div>
              <span className="font-semibold tracking-tight">NexaAI Labs</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Building smart digital products faster with AI. Custom software, web, mobile, and
              AI solutions for ambitious teams worldwide.
            </p>
          </div>

          <FooterCol
            title="Services"
            items={[
              "Custom Software",
              "Web Development",
              "Mobile Apps",
              "AI Solutions",
              "Digital Marketing",
            ]}
          />
          <FooterCol
            title="Company"
            items={["Portfolio", "Process", "Pricing", "Contact", "Privacy Policy", "Terms"]}
          />
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} NexaAI Labs. All rights reserved.</p>
          <p className="font-mono">Built with AI-powered engineering.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="font-mono text-[11px] uppercase tracking-widest text-foreground">
        {title}
      </div>
      <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="hover:text-foreground">
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
