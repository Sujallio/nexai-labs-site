import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Minus, m as Plus } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as Nav, t as Footer } from "./Footer-DQRS_RWc.mjs";
import { t as SectionHeader } from "./SectionHeader-Birabrp3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-CtpZJDIm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "C:/Users/sujal/Desktop/Auxmet/nexai-labs-site/src/components/site/FAQ.tsx";
var faqs = [
	{
		q: "How long does development take?",
		a: "Most projects ship in 4–8 weeks. Larger platforms can take 3–4 months. We give you a clear, AI-assisted estimate within 24 hours of your inquiry."
	},
	{
		q: "What industries do you work with?",
		a: "Fintech, healthtech, hospitality, e-commerce, logistics, and B2B SaaS. If your problem is software-shaped, we can probably help."
	},
	{
		q: "Do you provide post-launch support?",
		a: "Yes — every engagement includes a support window, and we offer ongoing maintenance and AI-assisted monitoring as a monthly retainer."
	},
	{
		q: "How exactly does AI help development?",
		a: "We use AI for code scaffolding, test generation, design exploration, technical research, QA, and intelligent project planning. Senior engineers always own the architecture and review every line that ships."
	},
	{
		q: "What are your pricing models?",
		a: "Fixed-price for well-scoped projects, monthly retainer for ongoing product development, and dedicated team for larger engagements."
	},
	{
		q: "Do you work internationally?",
		a: "Yes. We work fully remote, async-first, with clients in the US, UK, and beyond. Time-zone overlap is set up at the start of every engagement."
	}
];
function FAQ() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "faq",
		className: "px-6 py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeader, {
				center: true,
				eyebrow: "FAQ",
				title: "Common questions"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 37,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "divide-y divide-border rounded-2xl border border-border bg-surface/40",
				children: faqs.map((f, i) => {
					const isOpen = open === i;
					return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => setOpen(isOpen ? null : i),
						className: "flex w-full items-center justify-between gap-4 px-6 py-5 text-left",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "font-medium",
							children: f.q
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 47,
							columnNumber: 19
						}, this), isOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Minus, { className: "size-4 shrink-0 text-brand" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 49,
							columnNumber: 21
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "size-4 shrink-0 text-muted-foreground" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 51,
							columnNumber: 21
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 43,
						columnNumber: 17
					}, this), isOpen && /* @__PURE__ */ (void 0)("div", {
						className: "px-6 pb-5 text-sm leading-relaxed text-muted-foreground",
						children: f.a
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 55,
						columnNumber: 19
					}, this)] }, f.q, true, {
						fileName: _jsxFileName$1,
						lineNumber: 42,
						columnNumber: 15
					}, this);
				})
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 38,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 36,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 35,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "C:/Users/sujal/Desktop/Auxmet/nexai-labs-site/src/routes/faq.tsx?tsr-split=component";
function FAQPage() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 6,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
				className: "pt-8",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FAQ, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 8,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 7,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 10,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 5,
		columnNumber: 10
	}, this);
}
//#endregion
export { FAQPage as component };
