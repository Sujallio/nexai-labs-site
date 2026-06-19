import { P as Check, n as X } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as Nav, t as Footer } from "./Footer-DQRS_RWc.mjs";
import { t as SectionHeader } from "./SectionHeader-Birabrp3.mjs";
import { t as CTABanner } from "./CTABanner-CLM48aNr.mjs";
import { t as TrustBadges } from "./TrustBadges-BOK1REIZ.mjs";
import { t as PricingTiers } from "./PricingTiers-C9FQ8ucZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pricing-Dqg9NUHX.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "C:/Users/sujal/Desktop/Auxmet/nexai-labs-site/src/components/site/Pricing.tsx";
var rows = [
	{
		feature: "Delivery time",
		trad: "3–6 months",
		nexa: "4–8 weeks"
	},
	{
		feature: "Typical project cost",
		trad: "$40k+",
		nexa: "$15k–25k"
	},
	{
		feature: "AI workflows",
		trad: false,
		nexa: true
	},
	{
		feature: "Post-launch support",
		trad: "Business hours",
		nexa: "24/7 AI-assisted"
	},
	{
		feature: "Iterations included",
		trad: "Fixed scope",
		nexa: "Flexible"
	}
];
function Pricing() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "pricing",
		className: "bg-surface/40 px-6 py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-5xl",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeader, {
				center: true,
				eyebrow: "Pricing advantage",
				title: "Premium quality at startup-friendly pricing",
				description: "Lower operational costs, AI-assisted workflows, and an efficient delivery process — passed back to you."
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 16,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "overflow-hidden rounded-2xl border border-border bg-background",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
					className: "w-full",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
						className: "border-b border-border bg-surface text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
								className: "px-6 py-4 text-sm font-semibold",
								children: "Capability"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 27,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
								className: "px-6 py-4 text-sm font-semibold text-muted-foreground",
								children: "Traditional Agency"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 28,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
								className: "px-6 py-4 text-sm font-semibold text-brand",
								children: "Auxmet"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 31,
								columnNumber: 17
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 26,
						columnNumber: 15
					}, this) }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 25,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
						className: "divide-y divide-border",
						children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
								className: "px-6 py-4 text-sm font-medium",
								children: r.feature
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 37,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
								className: "px-6 py-4 text-sm text-muted-foreground",
								children: typeof r.trad === "boolean" ? r.trad ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "size-4 text-brand" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 41,
									columnNumber: 25
								}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-4 text-muted-foreground/60" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 43,
									columnNumber: 25
								}, this) : r.trad
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 38,
								columnNumber: 19
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
								className: "px-6 py-4 text-sm font-medium text-foreground",
								children: typeof r.nexa === "boolean" ? r.nexa ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "size-4 text-brand" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 52,
									columnNumber: 25
								}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-4" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 54,
									columnNumber: 25
								}, this) : r.nexa
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 49,
								columnNumber: 19
							}, this)
						] }, r.feature, true, {
							fileName: _jsxFileName$1,
							lineNumber: 36,
							columnNumber: 17
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 34,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 24,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 23,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 15,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 14,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "C:/Users/sujal/Desktop/Auxmet/nexai-labs-site/src/routes/pricing.tsx?tsr-split=component";
function PricingPage() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 9,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
				className: "pt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PricingTiers, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 11,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrustBadges, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 12,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pricing, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 13,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CTABanner, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 14,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 10,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 16,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 8,
		columnNumber: 10
	}, this);
}
//#endregion
export { PricingPage as component };
