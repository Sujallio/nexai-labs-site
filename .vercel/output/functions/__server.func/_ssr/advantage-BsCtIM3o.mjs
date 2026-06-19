import { F as ChartColumn, d as ShieldCheck, k as Cpu, p as Rocket } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { n as Nav, t as Footer } from "./Footer-DQRS_RWc.mjs";
import { t as SectionHeader } from "./SectionHeader-Birabrp3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/advantage-BsCtIM3o.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$2 = "C:/Users/sujal/Desktop/Auxmet/nexai-labs-site/src/components/site/AIAdvantage.tsx";
var capabilities = [
	"AI-assisted development",
	"Automated testing",
	"AI-powered code generation",
	"Rapid prototyping",
	"Intelligent project planning",
	"AI-enhanced UI/UX design",
	"Automated quality assurance",
	"Faster bug detection",
	"Scalable architecture planning",
	"Smart deployment workflows"
];
var stats$1 = [
	{
		icon: Rocket,
		value: "40%",
		label: "Faster Delivery"
	},
	{
		icon: ChartColumn,
		value: "30%",
		label: "Lower Development Cost"
	},
	{
		icon: Cpu,
		value: "24/7",
		label: "AI-Assisted Productivity"
	},
	{
		icon: ShieldCheck,
		value: "Ent.",
		label: "Enterprise-Grade Quality"
	}
];
function AIAdvantage() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "advantage",
		className: "relative overflow-hidden bg-surface/40 px-6 py-24 md:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 -z-10 grid-fade opacity-50" }, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 28,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeader, {
				eyebrow: "The AI advantage",
				title: "Why we build faster than traditional agencies",
				description: "We've rebuilt the agency model around AI. Less ceremony, more shipping — without compromising on engineering rigor."
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 30,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-10 lg:grid-cols-2 lg:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
					className: "grid grid-cols-1 gap-3 sm:grid-cols-2",
					children: capabilities.map((c, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.li, {
						initial: {
							opacity: 0,
							x: -10
						},
						whileInView: {
							opacity: 1,
							x: 0
						},
						viewport: { once: true },
						transition: {
							duration: .3,
							delay: i * .03
						},
						className: "flex items-center gap-3 rounded-lg border border-border bg-background/60 px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 shrink-0 rounded-full bg-brand" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 47,
							columnNumber: 17
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-sm text-foreground",
							children: c
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 48,
							columnNumber: 17
						}, this)]
					}, c, true, {
						fileName: _jsxFileName$2,
						lineNumber: 39,
						columnNumber: 15
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 37,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid grid-cols-2 gap-4",
					children: stats$1.map((s, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
						initial: {
							opacity: 0,
							y: 12
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							duration: .4,
							delay: i * .08
						},
						className: "rounded-2xl border border-border bg-background p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(s.icon, { className: "size-5 text-brand" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 63,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-4 text-4xl font-semibold tracking-tight",
								children: s.value
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 64,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground",
								children: s.label
							}, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 65,
								columnNumber: 17
							}, this)
						]
					}, s.label, true, {
						fileName: _jsxFileName$2,
						lineNumber: 55,
						columnNumber: 15
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 53,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 36,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 29,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 27,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "C:/Users/sujal/Desktop/Auxmet/nexai-labs-site/src/components/site/Stats.tsx";
var stats = [
	{
		value: "3+",
		label: "Projects Delivered"
	},
	{
		value: "2",
		label: "International Clients"
	},
	{
		value: "100%",
		label: "Client Satisfaction"
	},
	{
		value: "24/7",
		label: "AI-Assisted Delivery"
	}
];
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "border-y border-border bg-surface/40",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4",
			children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "text-3xl font-semibold tracking-tight md:text-4xl",
				children: s.value
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 14,
				columnNumber: 13
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground",
				children: s.label
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 15,
				columnNumber: 13
			}, this)] }, s.label, true, {
				fileName: _jsxFileName$1,
				lineNumber: 13,
				columnNumber: 11
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 11,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 10,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "C:/Users/sujal/Desktop/Auxmet/nexai-labs-site/src/routes/advantage.tsx?tsr-split=component";
function AdvantagePage() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 7,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
				className: "pt-8",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AIAdvantage, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 9,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stats, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 10,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 8,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 12,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 6,
		columnNumber: 10
	}, this);
}
//#endregion
export { AdvantagePage as component };
