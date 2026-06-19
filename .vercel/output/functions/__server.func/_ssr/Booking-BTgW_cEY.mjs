import { I as Calendar, M as CircleCheck, d as ShieldCheck, j as Clock } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as SectionHeader } from "./SectionHeader-Birabrp3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Booking-BTgW_cEY.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/sujal/Desktop/Auxmet/nexai-labs-site/src/components/site/Booking.tsx";
var CALENDLY_URL = "https://calendly.com/your-handle/30min";
function Booking() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "book",
		className: "bg-surface/40 px-6 py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeader, {
				center: true,
				eyebrow: "Book a strategy call",
				title: "Book a Free Strategy Call",
				description: "Schedule a free 30-minute consultation to discuss your project requirements, timelines, budget, and implementation strategy."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 11,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-6 lg:grid-cols-[1fr_1.4fr]",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "rounded-2xl border border-border bg-background p-6 md:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "font-mono text-[11px] uppercase tracking-widest text-brand",
							children: "What you get"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 20,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
							className: "mt-5 space-y-4 text-sm",
							children: [
								"Free 30-minute consultation",
								"No obligation, no sales pressure",
								"AI-assisted project estimate",
								"Response within 24 hours",
								"Direct conversation with a senior engineer"
							].map((i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "mt-0.5 size-4 shrink-0 text-brand" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 32,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-foreground/90",
									children: i
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 33,
									columnNumber: 19
								}, this)]
							}, i, true, {
								fileName: _jsxFileName,
								lineNumber: 31,
								columnNumber: 17
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 23,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-7 grid gap-3 border-t border-border pt-6 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock, { className: "size-3.5 text-brand" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 40,
									columnNumber: 17
								}, this), " 30 minutes · Zoom or Google Meet"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 39,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShieldCheck, { className: "size-3.5 text-brand" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 43,
									columnNumber: 17
								}, this), " NDA available on request"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 42,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 38,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-7 flex flex-col gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: CALENDLY_URL,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center justify-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-brand/90",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Calendar, { className: "size-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 54,
									columnNumber: 17
								}, this), " Schedule Consultation"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 48,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: CALENDLY_URL,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface",
								children: "Book Discovery Call"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 56,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 47,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 19,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "overflow-hidden rounded-2xl border border-border bg-background",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "border-b border-border bg-surface/60 px-5 py-3",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "size-2.5 rounded-full bg-destructive/60" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 71,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "size-2.5 rounded-full bg-yellow-500/60" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 72,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "size-2.5 rounded-full bg-brand/60" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 73,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "ml-3 font-mono text-[11px] text-muted-foreground",
									children: "calendly.com — strategy-call"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 74,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 70,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 69,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("iframe", {
							src: CALENDLY_URL,
							title: "Schedule a consultation",
							loading: "lazy",
							className: "h-[640px] w-full bg-background"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 80,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "pointer-events-none absolute inset-0 flex items-center justify-center bg-background/0",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "pointer-events-auto rounded-xl border border-border bg-background/90 p-5 text-center backdrop-blur",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Calendar, { className: "mx-auto size-6 text-brand" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 88,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "mt-2 text-sm font-semibold",
										children: "Calendly embed"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 89,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "mt-1 max-w-xs text-xs text-muted-foreground",
										children: "Connect your Calendly link to replace this placeholder with the live booking widget."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 90,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
										href: CALENDLY_URL,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "mt-3 inline-flex items-center gap-2 rounded-md bg-brand px-4 py-2 text-xs font-semibold text-background hover:bg-brand/90",
										children: "Open scheduler"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 93,
										columnNumber: 19
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 87,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 86,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 79,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 68,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 18,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 10,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 9,
		columnNumber: 5
	}, this);
}
//#endregion
export { Booking as t };
