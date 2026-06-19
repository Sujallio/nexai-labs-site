import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { n as Nav, t as Footer } from "./Footer-DQRS_RWc.mjs";
import { t as SectionHeader } from "./SectionHeader-Birabrp3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/process-DYj-xmjn.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "C:/Users/sujal/Desktop/Auxmet/nexai-labs-site/src/components/site/Process.tsx";
var steps = [
	{
		n: "01",
		t: "Submit Requirements",
		d: "Share your idea through our secure inquiry form."
	},
	{
		n: "02",
		t: "Free Consultation Call",
		d: "30-minute strategy session with a senior engineer."
	},
	{
		n: "03",
		t: "Requirement Analysis",
		d: "We translate goals into a clear technical scope."
	},
	{
		n: "04",
		t: "AI-Powered Estimation",
		d: "Cost and timeline modeled with AI-assisted planning."
	},
	{
		n: "05",
		t: "UI/UX Design",
		d: "High-fidelity, conversion-focused interfaces."
	},
	{
		n: "06",
		t: "Development",
		d: "AI-augmented engineering with daily progress updates."
	},
	{
		n: "07",
		t: "Testing & QA",
		d: "Automated and manual testing across the full stack."
	},
	{
		n: "08",
		t: "Deployment",
		d: "Smart CI/CD pipelines to production-grade infra."
	},
	{
		n: "09",
		t: "Maintenance & Support",
		d: "Ongoing iteration, monitoring, and AI-assisted support."
	}
];
function Process() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "process",
		className: "px-6 py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-4xl",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeader, {
				center: true,
				eyebrow: "How we work",
				title: "A predictable path from idea to launch",
				description: "Nine phases. No surprises. Every project follows the same battle-tested workflow."
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 20,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute left-[19px] top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-px" }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 28,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "space-y-6",
					children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
						initial: {
							opacity: 0,
							y: 16
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-60px"
						},
						transition: {
							duration: .4,
							delay: i * .04
						},
						className: `relative flex gap-6 md:gap-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse md:text-right"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-brand/40 bg-background font-mono text-xs text-brand md:absolute md:left-1/2 md:-translate-x-1/2",
								children: s.n
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 41,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex-1 rounded-xl border border-border bg-surface/60 p-5 md:max-w-[42%]",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
									className: "font-semibold tracking-tight",
									children: s.t
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 45,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: s.d
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 46,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 44,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden flex-1 md:block" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 48,
								columnNumber: 17
							}, this)
						]
					}, s.n, true, {
						fileName: _jsxFileName$1,
						lineNumber: 31,
						columnNumber: 15
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 29,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 27,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 19,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 18,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "C:/Users/sujal/Desktop/Auxmet/nexai-labs-site/src/routes/process.tsx?tsr-split=component";
function ProcessPage() {
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
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Process, {}, void 0, false, {
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
export { ProcessPage as component };
