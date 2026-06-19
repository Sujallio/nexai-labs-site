import { D as Earth, E as FilePenLine, S as Headphones, c as Sparkles, u as Shield, w as GitBranch } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/TrustBadges-BOK1REIZ.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/sujal/Desktop/Auxmet/nexai-labs-site/src/components/site/TrustBadges.tsx";
var badges = [
	{
		icon: Shield,
		label: "Secure Development"
	},
	{
		icon: FilePenLine,
		label: "NDA Available"
	},
	{
		icon: Earth,
		label: "International Clients"
	},
	{
		icon: GitBranch,
		label: "Agile Delivery"
	},
	{
		icon: Headphones,
		label: "Dedicated Support"
	},
	{
		icon: Sparkles,
		label: "AI-Powered"
	}
];
function TrustBadges() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "border-y border-border bg-surface/30 px-6 py-10",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6",
			children: badges.map((b) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center gap-3 rounded-xl border border-border bg-background/50 px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex size-9 items-center justify-center rounded-lg bg-brand/15 text-brand",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(b.icon, { className: "size-4" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 22,
						columnNumber: 15
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 21,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "text-xs font-medium text-foreground",
					children: b.label
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 24,
					columnNumber: 13
				}, this)]
			}, b.label, true, {
				fileName: _jsxFileName,
				lineNumber: 17,
				columnNumber: 11
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 15,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 14,
		columnNumber: 5
	}, this);
}
//#endregion
export { TrustBadges as t };
