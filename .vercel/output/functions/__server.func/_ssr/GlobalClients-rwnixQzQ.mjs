import { B as ArrowUpRight, T as FileText, s as Star } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { t as SectionHeader } from "./SectionHeader-Birabrp3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/GlobalClients-rwnixQzQ.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$2 = "C:/Users/sujal/Desktop/Auxmet/nexai-labs-site/src/components/site/Portfolio.tsx";
var projects = [
	{
		name: "VerifyAI",
		industry: "Fintech / KYC",
		clientType: "Series A fintech startup, USA",
		overview: "AI-powered document verification and fraud detection platform serving KYC and onboarding flows for regulated fintech clients.",
		problem: "Manual document verification was slow, error-prone, and blocking a growing onboarding pipeline.",
		tech: [
			"Next.js",
			"Python",
			"LangChain",
			"PostgreSQL",
			"AWS"
		],
		duration: "6 weeks",
		results: [
			"85% reduction in verification time",
			"95% auto-approval accuracy",
			"Manual review reduced by 70%"
		],
		gradient: "from-brand/30 via-brand/5 to-transparent",
		accent: "text-brand",
		demoUrl: "#",
		caseUrl: "/work"
	},
	{
		name: "QuickOrder",
		industry: "Hospitality / F&B",
		clientType: "Multi-location restaurant chain, UK",
		overview: "QR-based ordering platform with Stripe payments, live kitchen display, and a loyalty engine — deployed across multiple cities.",
		problem: "Slow phone orders, kitchen miscommunication, and disconnected loyalty data across locations.",
		tech: [
			"React",
			"Node.js",
			"Stripe",
			"Supabase"
		],
		duration: "5 weeks",
		results: [
			"28% higher average ticket",
			"<2s order-to-kitchen latency",
			"Live across 5 cities"
		],
		gradient: "from-emerald-400/30 via-emerald-400/5 to-transparent",
		accent: "text-emerald-300",
		demoUrl: "#",
		caseUrl: "/work"
	},
	{
		name: "OmniDash",
		industry: "SaaS / Operations",
		clientType: "Mid-size SaaS operations team, Canada",
		overview: "Centralized ERP dashboard with analytics, automation, and an AI copilot trained on internal documentation.",
		problem: "Ops team juggled six internal tools and lost ~8 hours per person each week reconciling reports.",
		tech: [
			"React",
			"TypeScript",
			"Python",
			"Postgres",
			"Docker"
		],
		duration: "8 weeks",
		results: [
			"8 hours saved per ops user weekly",
			"Unified 6 internal tools into one",
			"60% faster reporting cycle"
		],
		gradient: "from-cyan-400/30 via-cyan-400/5 to-transparent",
		accent: "text-cyan-300",
		demoUrl: "#",
		caseUrl: "/work"
	}
];
function Portfolio() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "work",
		className: "bg-surface/40 px-6 py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeader, {
				eyebrow: "Selected work",
				title: "Real products. Real results.",
				description: "A snapshot of recent projects — every engagement ships measurable outcomes for clients across the US, UK, and beyond."
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 72,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-6 lg:grid-cols-3",
				children: projects.map((p, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.article, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .5,
						delay: i * .08
					},
					className: "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/5",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: `relative h-48 bg-gradient-to-br ${p.gradient}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 grid-fade opacity-60" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 90,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "absolute inset-x-4 top-4 rounded-md border border-border bg-background/70 px-3 py-2 backdrop-blur",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "size-2 rounded-full bg-destructive/60" }, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 93,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "size-2 rounded-full bg-yellow-500/60" }, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 94,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "size-2 rounded-full bg-brand/60" }, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 95,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
											className: "ml-2 truncate font-mono text-[10px] text-muted-foreground",
											children: [p.name.toLowerCase(), ".app"]
										}, void 0, true, {
											fileName: _jsxFileName$2,
											lineNumber: 96,
											columnNumber: 21
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 92,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 91,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "absolute bottom-4 left-5 right-5 flex items-end justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: `font-mono text-[10px] uppercase tracking-widest ${p.accent}`,
									children: p.industry
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 103,
									columnNumber: 21
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "mt-1 text-2xl font-semibold tracking-tight",
									children: p.name
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 106,
									columnNumber: 21
								}, this)] }, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 102,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, { className: "size-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 108,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 101,
								columnNumber: 17
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 89,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-1 flex-col gap-4 p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: p.clientType }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 114,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-foreground/30",
										children: "•"
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 115,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "font-mono",
										children: p.duration
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 116,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 113,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-sm text-muted-foreground",
								children: p.overview
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 119,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Block, {
								title: "Problem solved",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-xs text-foreground/80",
									children: p.problem
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 122,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 121,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Block, {
								title: "Technologies",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex flex-wrap gap-1.5",
									children: p.tech.map((t) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "rounded border border-border bg-surface px-2 py-0.5 font-mono text-[10px] text-muted-foreground",
										children: t
									}, t, false, {
										fileName: _jsxFileName$2,
										lineNumber: 128,
										columnNumber: 23
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 126,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 125,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Block, {
								title: "Results achieved",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
									className: "space-y-1 text-xs text-foreground",
									children: p.results.map((r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
										className: "flex gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-brand",
												children: "↗"
											}, void 0, false, {
												fileName: _jsxFileName$2,
												lineNumber: 142,
												columnNumber: 25
											}, this),
											" ",
											r
										]
									}, r, true, {
										fileName: _jsxFileName$2,
										lineNumber: 141,
										columnNumber: 23
									}, this))
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 139,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 138,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-auto flex gap-2 pt-2",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: p.caseUrl,
									className: "inline-flex flex-1 items-center justify-center gap-1.5 rounded-md border border-border bg-surface px-3 py-2 text-xs font-semibold text-foreground hover:bg-secondary",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileText, { className: "size-3.5" }, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 153,
										columnNumber: 21
									}, this), " Case Study"]
								}, void 0, true, {
									fileName: _jsxFileName$2,
									lineNumber: 149,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 148,
								columnNumber: 17
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 112,
						columnNumber: 15
					}, this)]
				}, p.name, true, {
					fileName: _jsxFileName$2,
					lineNumber: 80,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 78,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 71,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 70,
		columnNumber: 5
	}, this);
}
function Block({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mb-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
		children: title
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 169,
		columnNumber: 7
	}, this), children] }, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 168,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "C:/Users/sujal/Desktop/Auxmet/nexai-labs-site/src/components/site/Testimonials.tsx";
var items = [
	{
		quote: "Auxmet replaced an entire dev shop for us. Delivery velocity is genuinely unmatched and the AI-assisted estimates were accurate to the day.",
		name: "Sarah Mitchell",
		role: "Founder & CEO",
		company: "Lumen Capital",
		country: "🇺🇸 United States",
		rating: 5
	},
	{
		quote: "Working across time zones felt effortless. They shipped our MVP in 6 weeks and our investors were impressed by the quality.",
		name: "James O'Connor",
		role: "Operations Director",
		company: "Brackton Hospitality",
		country: "🇬🇧 United Kingdom",
		rating: 5
	},
	{
		quote: "We rebuilt our entire e-commerce stack with Auxmet. Conversion is up 34% and our team can finally move fast without engineering bottlenecks.",
		name: "Priya Anand",
		role: "Head of Growth",
		company: "Northwave Apparel",
		country: "🇨🇦 Canada",
		rating: 5
	},
	{
		quote: "Their QR ordering rollout doubled our average ticket size. The kitchen display alone paid for the entire engagement in the first month.",
		name: "Marcus Bell",
		role: "Owner",
		company: "Harbour Street Kitchen",
		country: "🇦🇺 Australia",
		rating: 5
	},
	{
		quote: "Senior engineering at agency price. They feel like an extension of our team and the AI copilot they built is now core to our product.",
		name: "Elena Ruiz",
		role: "VP Engineering",
		company: "Tradera SaaS",
		country: "🇪🇸 Spain",
		rating: 5
	},
	{
		quote: "We white-label Auxmet for our own clients. They consistently deliver enterprise quality at startup speed — every single time.",
		name: "David Klein",
		role: "Founding Partner",
		company: "Mercia Digital Agency",
		country: "🇩🇪 Germany",
		rating: 5
	}
];
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "px-6 py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeader, {
				center: true,
				eyebrow: "Testimonials",
				title: "Trusted by founders across 4 continents",
				description: "Real reviews from real clients in fintech, e-commerce, hospitality, and SaaS."
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 66,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: items.map((t, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.figure, {
					initial: {
						opacity: 0,
						y: 16
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .4,
						delay: i * .06
					},
					className: "flex flex-col rounded-2xl border border-border bg-surface/60 p-6 transition-colors hover:border-brand/40",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-0.5",
							children: Array.from({ length: t.rating }).map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Star, { className: "size-4 fill-brand text-brand" }, i, false, {
								fileName: _jsxFileName$1,
								lineNumber: 84,
								columnNumber: 19
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 82,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("blockquote", {
							className: "mt-4 flex-1 text-sm leading-relaxed text-foreground",
							children: [
								"\"",
								t.quote,
								"\""
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 87,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figcaption", {
							className: "mt-6 flex items-center gap-3 border-t border-border pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-brand/30 to-brand/10 font-mono text-xs font-semibold text-brand",
								children: t.name.split(" ").map((n) => n[0]).join("")
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 91,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "text-sm font-semibold text-foreground",
										children: t.name
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 98,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "truncate text-xs text-muted-foreground",
										children: [
											t.role,
											", ",
											t.company
										]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 99,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "mt-0.5 font-mono text-[10px] uppercase tracking-widest text-brand",
										children: t.country
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 102,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 97,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 90,
							columnNumber: 15
						}, this)
					]
				}, t.name, true, {
					fileName: _jsxFileName$1,
					lineNumber: 74,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 72,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 65,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 64,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "C:/Users/sujal/Desktop/Auxmet/nexai-labs-site/src/components/site/GlobalClients.tsx";
var locations = [
	{
		name: "United States",
		x: 230,
		y: 200
	},
	{
		name: "United Kingdom",
		x: 488,
		y: 165
	},
	{
		name: "Canada",
		x: 240,
		y: 150
	},
	{
		name: "Australia",
		x: 830,
		y: 360
	},
	{
		name: "India",
		x: 690,
		y: 245
	}
];
function GlobalClients() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "px-6 py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeader, {
				center: true,
				eyebrow: "Global reach",
				title: "Serving Clients Worldwide",
				description: "Remote-first development team partnering with founders and enterprises across five continents."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 17,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative mx-auto max-w-5xl rounded-3xl border border-border bg-surface/40 p-6 md:p-10",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
					viewBox: "0 0 1000 500",
					className: "h-auto w-full",
					role: "img",
					"aria-label": "World map",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("radialGradient", {
							id: "pulse",
							cx: "50%",
							cy: "50%",
							r: "50%",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
								offset: "0%",
								stopColor: "oklch(0.78 0.16 165)",
								stopOpacity: "0.7"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 28,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
								offset: "100%",
								stopColor: "oklch(0.78 0.16 165)",
								stopOpacity: "0"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 29,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 27,
							columnNumber: 15
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 26,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
							fill: "currentColor",
							className: "text-muted-foreground/30",
							children: Array.from({ length: 40 }).map((_, row) => Array.from({ length: 80 }).map((_, col) => {
								const x = col * 12 + 8;
								const y = row * 12 + 8;
								if (!(y > 90 && y < 230 && x > 140 && x < 320 || y > 240 && y < 380 && x > 250 && x < 340 || y > 130 && y < 280 && x > 460 && x < 600 || y > 250 && y < 400 && x > 480 && x < 600 || y > 130 && y < 280 && x > 600 && x < 800 || y > 320 && y < 400 && x > 780 && x < 880)) return null;
								return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
									cx: x,
									cy: y,
									r: 1.4
								}, `${row}-${col}`, false, {
									fileName: _jsxFileName,
									lineNumber: 48,
									columnNumber: 26
								}, this);
							}))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 34,
							columnNumber: 13
						}, this),
						locations.map((l, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
								cx: l.x,
								cy: l.y,
								r: 28,
								fill: "url(#pulse)",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("animate", {
									attributeName: "r",
									values: "14;30;14",
									dur: "2.6s",
									begin: `${i * .4}s`,
									repeatCount: "indefinite"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 56,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 55,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
								cx: l.x,
								cy: l.y,
								r: 5,
								fill: "oklch(0.78 0.16 165)"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 64,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("text", {
								x: l.x + 10,
								y: l.y - 8,
								className: "fill-foreground",
								fontSize: "11",
								fontFamily: "JetBrains Mono, monospace",
								children: l.name
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 65,
								columnNumber: 17
							}, this)
						] }, l.name, true, {
							fileName: _jsxFileName,
							lineNumber: 54,
							columnNumber: 15
						}, this))
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 25,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-8 grid grid-cols-2 gap-3 md:grid-cols-5",
					children: locations.map((l, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
						initial: {
							opacity: 0,
							y: 10
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: { delay: i * .05 },
						className: "rounded-lg border border-border bg-background px-3 py-2 text-center text-xs font-medium",
						children: l.name
					}, l.name, false, {
						fileName: _jsxFileName,
						lineNumber: 80,
						columnNumber: 15
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 78,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 24,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 16,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 15,
		columnNumber: 5
	}, this);
}
//#endregion
export { Portfolio as n, Testimonials as r, GlobalClients as t };
