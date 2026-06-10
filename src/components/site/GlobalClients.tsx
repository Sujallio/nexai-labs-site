import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

// Approximate coords on a 1000x500 equirectangular projection
const locations = [
  { name: "United States", x: 230, y: 200 },
  { name: "United Kingdom", x: 488, y: 165 },
  { name: "Canada", x: 240, y: 150 },
  { name: "Australia", x: 830, y: 360 },
  { name: "India", x: 690, y: 245 },
];

export function GlobalClients() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          center
          eyebrow="Global reach"
          title="Serving Clients Worldwide"
          description="Remote-first development team partnering with founders and enterprises across five continents."
        />

        <div className="relative mx-auto max-w-5xl rounded-3xl border border-border bg-surface/40 p-6 md:p-10">
          <svg viewBox="0 0 1000 500" className="h-auto w-full" role="img" aria-label="World map">
            <defs>
              <radialGradient id="pulse" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="oklch(0.78 0.16 165)" stopOpacity="0.7" />
                <stop offset="100%" stopColor="oklch(0.78 0.16 165)" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Stylized dotted world map */}
            <g fill="currentColor" className="text-muted-foreground/30">
              {Array.from({ length: 40 }).map((_, row) =>
                Array.from({ length: 80 }).map((_, col) => {
                  const x = col * 12 + 8;
                  const y = row * 12 + 8;
                  // simple landmass approximation via noise-like checks
                  const inland =
                    (y > 90 && y < 230 && x > 140 && x < 320) || // N America
                    (y > 240 && y < 380 && x > 250 && x < 340) || // S America
                    (y > 130 && y < 280 && x > 460 && x < 600) || // Europe/Africa top
                    (y > 250 && y < 400 && x > 480 && x < 600) || // Africa
                    (y > 130 && y < 280 && x > 600 && x < 800) || // Asia
                    (y > 320 && y < 400 && x > 780 && x < 880); // Oceania
                  if (!inland) return null;
                  return <circle key={`${row}-${col}`} cx={x} cy={y} r={1.4} />;
                }),
              )}
            </g>

            {locations.map((l, i) => (
              <g key={l.name}>
                <circle cx={l.x} cy={l.y} r={28} fill="url(#pulse)">
                  <animate
                    attributeName="r"
                    values="14;30;14"
                    dur="2.6s"
                    begin={`${i * 0.4}s`}
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx={l.x} cy={l.y} r={5} fill="oklch(0.78 0.16 165)" />
                <text
                  x={l.x + 10}
                  y={l.y - 8}
                  className="fill-foreground"
                  fontSize="11"
                  fontFamily="JetBrains Mono, monospace"
                >
                  {l.name}
                </text>
              </g>
            ))}
          </svg>

          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-5">
            {locations.map((l, i) => (
              <motion.div
                key={l.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-lg border border-border bg-background px-3 py-2 text-center text-xs font-medium"
              >
                {l.name}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
