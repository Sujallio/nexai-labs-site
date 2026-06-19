import { O as DollarSign, i as Users, j as Clock, o as TrendingUp, t as Zap } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { n as Nav, t as Footer } from "./Footer-DQRS_RWc.mjs";
import { t as SectionHeader } from "./SectionHeader-Birabrp3.mjs";
import { t as CTABanner } from "./CTABanner-CLM48aNr.mjs";
import { n as Portfolio, r as Testimonials, t as GlobalClients } from "./GlobalClients-rwnixQzQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work-YDXkGuGQ.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$2 = "C:/Users/sujal/Desktop/Auxmet/nexai-labs-site/src/components/site/CaseStudies.tsx";
var studies = [
	{
		name: "VerifyAI — Document Verification Platform",
		industry: "Fintech / KYC",
		challenge: "A regulated fintech client was bottlenecked by manual document verification: 8–12 minutes per applicant, frequent fraud leaks, and a growing review backlog blocking onboarding.",
		strategy: "We applied AI-assisted scoping to compress discovery to one week, then layered LLM document parsing and a fraud scoring model on top of their existing onboarding stack.",
		solution: "Built an OCR + LLM pipeline, a fraud signal scoring engine, and an audit-ready reviewer console — shipped in 6 weeks with full RBAC and compliance logging.",
		metrics: [
			{
				icon: Clock,
				label: "Verification time",
				value: "−85%"
			},
			{
				icon: TrendingUp,
				label: "Auto-approval rate",
				value: "95%"
			},
			{
				icon: Users,
				label: "Manual review reduced",
				value: "−70%"
			}
		]
	},
	{
		name: "QuickOrder — Restaurant Ordering",
		industry: "Hospitality / F&B",
		challenge: "A multi-location restaurant chain struggled with slow phone orders, kitchen miscommunication, and underused loyalty data sitting in three disconnected systems.",
		strategy: "Phased rollout strategy with one pilot location, AI-generated menu schema, and parallel build tracks for customer app, kitchen display, and loyalty backend.",
		solution: "QR-based ordering app with Stripe payments, live kitchen display, and a loyalty engine connected to existing CRM — launched across 5 cities.",
		metrics: [
			{
				icon: DollarSign,
				label: "Avg ticket size",
				value: "+28%"
			},
			{
				icon: Zap,
				label: "Order-to-kitchen",
				value: "<2s"
			},
			{
				icon: TrendingUp,
				label: "Repeat orders",
				value: "+41%"
			}
		]
	},
	{
		name: "OmniDash — Business Operations Platform",
		industry: "SaaS / Operations",
		challenge: "An ops team juggled six internal tools, exported CSVs daily, and lost ~8 hours per person each week reconciling reports across systems.",
		strategy: "Discovery sprints to map workflows, AI-assisted data modeling, and a unified dashboard with an embedded copilot trained on internal documentation.",
		solution: "Centralized ERP dashboard with cross-module analytics, workflow automation, and a custom AI assistant — rolled out to 40 internal users in 8 weeks.",
		metrics: [
			{
				icon: Clock,
				label: "Time saved per user",
				value: "8 hrs/wk"
			},
			{
				icon: Zap,
				label: "Tools unified",
				value: "6 → 1"
			},
			{
				icon: TrendingUp,
				label: "Reporting cycle",
				value: "−60%"
			}
		]
	}
];
function CaseStudies() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "bg-background px-6 py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeader, {
				eyebrow: "Success stories",
				title: "Case studies & measurable outcomes",
				description: "How AI-powered delivery translated into real business impact for clients across fintech, hospitality, and SaaS."
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 57,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "space-y-6",
				children: studies.map((s, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.article, {
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
						delay: i * .06
					},
					className: "rounded-2xl border border-border bg-surface/40 p-6 md:p-10",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid gap-8 md:grid-cols-[1.6fr_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "font-mono text-[11px] uppercase tracking-widest text-brand",
								children: s.industry
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 75,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "mt-2 text-2xl font-semibold tracking-tight md:text-3xl",
								children: s.name
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 78,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-6 grid gap-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Block, {
										label: "Challenge",
										children: s.challenge
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 82,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Block, {
										label: "Strategy",
										children: s.strategy
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 83,
										columnNumber: 21
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Block, {
										label: "Solution",
										children: s.solution
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 84,
										columnNumber: 21
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 81,
								columnNumber: 19
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 74,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "rounded-xl border border-border bg-background p-6",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
								children: "Results"
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 88,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-4 space-y-5",
								children: s.metrics.map((m) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex size-10 items-center justify-center rounded-lg bg-brand/15 text-brand",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(m.icon, { className: "size-5" }, void 0, false, {
											fileName: _jsxFileName$2,
											lineNumber: 95,
											columnNumber: 27
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 94,
										columnNumber: 25
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "text-2xl font-semibold tracking-tight",
										children: m.value
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 98,
										columnNumber: 27
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "text-xs text-muted-foreground",
										children: m.label
									}, void 0, false, {
										fileName: _jsxFileName$2,
										lineNumber: 101,
										columnNumber: 27
									}, this)] }, void 0, true, {
										fileName: _jsxFileName$2,
										lineNumber: 97,
										columnNumber: 25
									}, this)]
								}, m.label, true, {
									fileName: _jsxFileName$2,
									lineNumber: 93,
									columnNumber: 23
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 91,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 87,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 73,
						columnNumber: 15
					}, this)
				}, s.name, false, {
					fileName: _jsxFileName$2,
					lineNumber: 65,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 63,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 56,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 55,
		columnNumber: 5
	}, this);
}
function Block({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
		children: label
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 119,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
		className: "mt-1.5 text-sm leading-relaxed text-foreground/90",
		children
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 122,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 118,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "C:/Users/sujal/Desktop/Auxmet/nexai-labs-site/src/components/site/Clients.tsx";
var clients = [{
	flag: "🇺🇸",
	country: "United States",
	name: "Founder, Y-Combinator-backed startup",
	industry: "Fintech / Identity",
	type: "AI Document Verification Platform",
	quote: "Auxmet shipped our MVP in six weeks — what our previous agency quoted six months for. Engineering quality is genuinely senior."
}, {
	flag: "🇬🇧",
	country: "United Kingdom",
	name: "Operations Director, hospitality group",
	industry: "Hospitality / SaaS",
	type: "QR Ordering & Payments Platform",
	quote: "They acted like a product team, not a vendor. The AI workflows they used internally were obvious in delivery speed."
}];
function Clients() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "px-6 py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeader, {
				eyebrow: "International clients",
				title: "Trusted across borders",
				description: "We work with founders and operators in the US and UK — fully remote, async-first."
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 29,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-6 md:grid-cols-2",
				children: clients.map((c, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
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
					className: "rounded-2xl border border-border bg-surface/60 p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-3xl",
								children: c.flag
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 45,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "font-semibold",
								children: c.country
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 47,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "font-mono text-[11px] uppercase tracking-widest text-muted-foreground",
								children: c.industry
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 48,
								columnNumber: 19
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 46,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 44,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-6 text-xs text-brand",
							children: c.type
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 53,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("blockquote", {
							className: "mt-3 text-lg leading-snug text-foreground",
							children: [
								"\"",
								c.quote,
								"\""
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 54,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-4 text-sm text-muted-foreground",
							children: ["— ", c.name]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 57,
							columnNumber: 15
						}, this)
					]
				}, c.country, true, {
					fileName: _jsxFileName$1,
					lineNumber: 36,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 34,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 28,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 27,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "C:/Users/sujal/Desktop/Auxmet/nexai-labs-site/src/routes/work.tsx?tsr-split=component";
function WorkPage() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 11,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
				className: "pt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Portfolio, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 13,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CaseStudies, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 14,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clients, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 15,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Testimonials, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 16,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GlobalClients, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 17,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CTABanner, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 18,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 12,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 20,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 10,
		columnNumber: 10
	}, this);
}
//#endregion
export { WorkPage as component };
