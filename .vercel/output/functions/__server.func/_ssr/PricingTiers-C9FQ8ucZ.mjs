import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { P as Check, c as Sparkles } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { t as SectionHeader } from "./SectionHeader-Birabrp3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PricingTiers-C9FQ8ucZ.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/sujal/Desktop/Auxmet/nexai-labs-site/src/components/site/PricingTiers.tsx";
var tiers = [
	{
		name: "Starter Website",
		price: "$299",
		tag: "For new founders",
		features: [
			"Responsive Website",
			"Contact Forms",
			"SEO Setup",
			"Basic Analytics"
		]
	},
	{
		name: "Business Website",
		price: "$599",
		tag: "Most popular",
		highlight: true,
		features: [
			"Custom Design",
			"CMS Integration",
			"Advanced SEO",
			"Lead Generation Setup"
		]
	},
	{
		name: "Web Application",
		price: "$1,499",
		tag: "Product MVP",
		features: [
			"Authentication",
			"Dashboard",
			"Database Integration",
			"API Development"
		]
	},
	{
		name: "AI Solution",
		price: "$1,999",
		tag: "AI-native",
		features: [
			"AI Chatbot",
			"AI Automation",
			"RAG System",
			"Custom AI Workflows"
		]
	}
];
function PricingTiers() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "px-6 py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeader, {
					center: true,
					eyebrow: "Pricing plans",
					title: "Affordable Pricing Without Compromising Quality",
					description: "We leverage AI-assisted development to deliver projects faster and more cost-effectively than traditional agencies."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 58,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid gap-5 md:grid-cols-2 lg:grid-cols-4",
					children: tiers.map((t, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
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
						className: `relative flex flex-col rounded-2xl border p-6 backdrop-blur ${t.highlight ? "border-brand/50 bg-gradient-to-b from-brand/10 to-surface/60 shadow-lg shadow-brand/10" : "border-border bg-surface/40"}`,
						children: [
							t.highlight && /* @__PURE__ */ (void 0)("div", {
								className: "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-background",
								children: [/* @__PURE__ */ (void 0)(Sparkles, { className: "mr-1 inline size-3" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 81,
									columnNumber: 19
								}, this), " Popular"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 80,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
								children: t.tag
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 84,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-2 text-lg font-semibold",
								children: t.name
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 87,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-4 flex items-baseline gap-1",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-xs text-muted-foreground",
									children: "Starting at"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 89,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 88,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "text-3xl font-semibold tracking-tight text-foreground",
								children: t.price
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 91,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
								className: "mt-6 space-y-2.5 text-sm",
								children: t.features.map((f) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
									className: "flex items-start gap-2 text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "mt-0.5 size-4 shrink-0 text-brand" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 97,
										columnNumber: 21
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-foreground/90",
										children: f
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 98,
										columnNumber: 21
									}, this)]
								}, f, true, {
									fileName: _jsxFileName,
									lineNumber: 96,
									columnNumber: 19
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 94,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/contact",
								className: `mt-7 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold transition-colors ${t.highlight ? "bg-brand text-background hover:bg-brand/90" : "border border-border bg-background text-foreground hover:bg-surface"}`,
								children: "Get Started"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 102,
								columnNumber: 15
							}, this)
						]
					}, t.name, true, {
						fileName: _jsxFileName,
						lineNumber: 67,
						columnNumber: 13
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 65,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-8 text-center text-xs text-muted-foreground",
					children: "Final pricing depends on project complexity and requirements."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 116,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 57,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 56,
		columnNumber: 5
	}, this);
}
//#endregion
export { PricingTiers as t };
