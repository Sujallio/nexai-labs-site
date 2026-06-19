import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { I as Calendar, T as FileText, V as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CTABanner-CLM48aNr.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/sujal/Desktop/Auxmet/nexai-labs-site/src/components/site/CTABanner.tsx";
function CTABanner({ title = "Ready to Build Your Next Digital Product?", description = "Get a free consultation, an AI-assisted estimate, and a clear roadmap within 24 hours." }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "px-6 py-20",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-brand/15 via-surface to-background p-10 md:p-14",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 grid-fade opacity-50" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 14,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "text-balance text-3xl font-semibold tracking-tight md:text-4xl",
					children: title
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 17,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-3 max-w-xl text-muted-foreground",
					children: description
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 20,
					columnNumber: 13
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 16,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-wrap gap-3 md:justify-end",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/contact",
							className: "inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-brand/90",
							children: ["Get Free Consultation", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 28,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 23,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/book",
							className: "inline-flex items-center gap-2 rounded-md border border-border bg-background/60 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Calendar, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 34,
								columnNumber: 15
							}, this), " Schedule Call"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 30,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/contact",
							className: "inline-flex items-center gap-2 rounded-md border border-border bg-background/60 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FileText, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 40,
								columnNumber: 15
							}, this), " Request Proposal"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 36,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 22,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 15,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 13,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 12,
		columnNumber: 5
	}, this);
}
//#endregion
export { CTABanner as t };
