import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as Menu, n as X } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Footer-DQRS_RWc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$2 = "C:/Users/sujal/Desktop/Auxmet/nexai-labs-site/src/components/site/Logo.tsx";
function Logo({ className, title = "Auxmet" }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
		viewBox: "0 0 32 32",
		role: "img",
		"aria-label": title,
		className,
		xmlns: "http://www.w3.org/2000/svg",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("linearGradient", {
				id: "auxmet-mark",
				x1: "0",
				y1: "0",
				x2: "1",
				y2: "1",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
					offset: "0%",
					stopColor: "oklch(0.78 0.18 158)"
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 19,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
					offset: "100%",
					stopColor: "oklch(0.62 0.18 158)"
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 20,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 18,
				columnNumber: 9
			}, this) }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 17,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
				width: "32",
				height: "32",
				rx: "7",
				fill: "url(#auxmet-mark)"
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 23,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
				d: "M9 23 L16 8 L23 23",
				fill: "none",
				stroke: "oklch(0.15 0.02 240)",
				strokeWidth: "2.6",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 25,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
				d: "M12.2 18 L19.8 18",
				fill: "none",
				stroke: "oklch(0.15 0.02 240)",
				strokeWidth: "2.2",
				strokeLinecap: "round"
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 33,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
				cx: "23.5",
				cy: "9",
				r: "1.7",
				fill: "oklch(0.98 0.02 158)"
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 41,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 10,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "C:/Users/sujal/Desktop/Auxmet/nexai-labs-site/src/components/site/Nav.tsx";
var links = [
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/advantage",
		label: "Advantage"
	},
	{
		to: "/process",
		label: "Process"
	},
	{
		to: "/work",
		label: "Work"
	},
	{
		to: "/pricing",
		label: "Pricing"
	},
	{
		to: "/faq",
		label: "FAQ"
	}
];
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.header, {
		initial: {
			y: -20,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: .5,
			ease: "easeOut"
		},
		className: `sticky top-0 z-50 transition-colors ${scrolled ? "border-b border-border bg-background/80 backdrop-blur-lg" : "border-b border-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/",
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo, { className: "size-7" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 40,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "font-semibold tracking-tight",
						children: "Auxmet"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 41,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 39,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
					className: "hidden items-center gap-8 text-sm font-medium md:flex",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: l.to,
						activeProps: { className: "text-foreground" },
						inactiveProps: { className: "text-muted-foreground" },
						className: "transition-colors hover:text-foreground",
						children: l.label
					}, l.to, false, {
						fileName: _jsxFileName$1,
						lineNumber: 46,
						columnNumber: 13
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 44,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "hidden items-center gap-3 md:flex",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/book",
						className: "rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface",
						children: "Book a Call"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 59,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/contact",
						className: "rounded-md bg-brand px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-brand/90",
						children: "Get Consultation"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 65,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 58,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					"aria-label": "Menu",
					onClick: () => setOpen(!open),
					className: "md:hidden rounded-md p-2 text-foreground",
					children: open ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-5" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 79,
						columnNumber: 19
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Menu, { className: "size-5" }, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 79,
						columnNumber: 46
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 74,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 38,
			columnNumber: 7
		}, this), open && /* @__PURE__ */ (void 0)("div", {
			className: "border-t border-border bg-background/95 backdrop-blur md:hidden",
			children: /* @__PURE__ */ (void 0)("div", {
				className: "flex flex-col gap-1 px-6 py-4",
				children: [links.map((l) => /* @__PURE__ */ (void 0)(Link, {
					to: l.to,
					onClick: () => setOpen(false),
					className: "rounded px-2 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground",
					children: l.label
				}, l.to, false, {
					fileName: _jsxFileName$1,
					lineNumber: 87,
					columnNumber: 15
				}, this)), /* @__PURE__ */ (void 0)(Link, {
					to: "/contact",
					onClick: () => setOpen(false),
					className: "mt-2 rounded-md bg-brand px-4 py-2.5 text-center text-sm font-semibold text-background",
					children: "Get Consultation"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 96,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 85,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 84,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 28,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "C:/Users/sujal/Desktop/Auxmet/nexai-labs-site/src/components/site/Footer.tsx";
function Footer() {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
		className: "border-t border-border bg-background px-6 py-16",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-12 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "md:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/",
							className: "flex items-center gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Logo, { className: "size-7" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 13,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-semibold tracking-tight",
								children: "Auxmet"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 14,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 12,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground",
							children: "Building smart digital products faster with AI. Custom software, web, mobile, and AI solutions for ambitious teams worldwide."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 16,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 11,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FooterCol, {
						title: "Explore",
						items: [
							{
								label: "Services",
								to: "/services"
							},
							{
								label: "AI Advantage",
								to: "/advantage"
							},
							{
								label: "Process",
								to: "/process"
							},
							{
								label: "Work",
								to: "/work"
							},
							{
								label: "Pricing",
								to: "/pricing"
							},
							{
								label: "Book a Call",
								to: "/book"
							}
						]
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 22,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FooterCol, {
						title: "Company",
						items: [
							{
								label: "FAQ",
								to: "/faq"
							},
							{
								label: "Careers",
								to: "/careers"
							},
							{
								label: "Contact",
								to: "/contact"
							}
						]
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 10,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FooterYear, { year }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 45,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 9,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 8,
		columnNumber: 5
	}, this);
}
function FooterYear({ year }) {
	const [y, setY] = (0, import_react.useState)(year);
	(0, import_react.useEffect)(() => setY((/* @__PURE__ */ new Date()).getFullYear()), []);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
			"© ",
			y,
			" Auxmet. All rights reserved."
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 57,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "font-mono",
			children: "Built with AI-powered engineering."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 58,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 56,
		columnNumber: 5
	}, this);
}
function FooterCol({ title, items }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "font-mono text-[11px] uppercase tracking-widest text-foreground",
		children: title
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 72,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
		className: "mt-4 space-y-2.5 text-sm text-muted-foreground",
		children: items.map((i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
			to: i.to,
			className: "hover:text-foreground",
			children: i.label
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 78,
			columnNumber: 13
		}, this) }, i.label, false, {
			fileName: _jsxFileName,
			lineNumber: 77,
			columnNumber: 11
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 75,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 71,
		columnNumber: 5
	}, this);
}
//#endregion
export { Nav as n, Footer as t };
