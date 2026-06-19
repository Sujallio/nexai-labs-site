import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SectionHeader-Birabrp3.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "C:/Users/sujal/Desktop/Auxmet/nexai-labs-site/src/components/site/SectionHeader.tsx";
function SectionHeader({ eyebrow, title, description, center }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
		initial: {
			opacity: 0,
			y: 20
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: { duration: .5 },
		className: `mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`,
		children: [
			eyebrow && /* @__PURE__ */ (void 0)("div", {
				className: "mb-3 font-mono text-[11px] uppercase tracking-widest text-brand",
				children: eyebrow
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 24,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
				className: "text-balance text-3xl font-semibold tracking-tight md:text-4xl",
				children: title
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 28,
				columnNumber: 7
			}, this),
			description && /* @__PURE__ */ (void 0)("p", {
				className: "mt-4 text-pretty text-muted-foreground",
				children: description
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 30,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 16,
		columnNumber: 5
	}, this);
}
//#endregion
export { SectionHeader as t };
