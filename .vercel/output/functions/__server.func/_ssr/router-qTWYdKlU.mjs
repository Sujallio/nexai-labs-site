import { o as __toESM } from "../_runtime.mjs";
import { r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as MessageCircle } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-qTWYdKlU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var styles_default = "/assets/styles-BKMsmqID.css";
var _jsxFileName$1 = "C:/Users/sujal/Desktop/Auxmet/nexai-labs-site/src/components/site/WhatsAppButton.tsx";
var PHONE = "918793001079";
var MESSAGE = "Hello, I would like to discuss a project.";
function WhatsAppButton() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
		href: `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`,
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": "Chat on WhatsApp",
		className: "group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-105 md:bottom-6 md:right-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MessageCircle, { className: "size-5" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 16,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "hidden sm:inline",
				children: "Chat with us"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 17,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "absolute -top-1 -right-1 flex size-3",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute inline-flex size-full animate-ping rounded-full bg-emerald-300 opacity-75" }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 19,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "relative inline-flex size-3 rounded-full bg-emerald-400" }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 20,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 18,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 9,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "C:/Users/sujal/Desktop/Auxmet/nexai-labs-site/src/routes/__root.tsx";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 20,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 21,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 22,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-brand px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-brand/90",
						children: "Go home"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 26,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 25,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 19,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 18,
		columnNumber: 5
	}, this);
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {}, [error]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 48,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-brand px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-brand/90",
						children: "Try again"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 55,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 64,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 54,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 47,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 46,
		columnNumber: 5
	}, this);
}
var Route$11 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Auxmet — AI-Powered Software Development Agency" },
			{
				name: "description",
				content: "Auxmet builds smart digital products faster with AI. Custom software, web & mobile apps, AI solutions, and digital marketing for startups and enterprises."
			},
			{
				name: "author",
				content: "Auxmet"
			},
			{
				property: "og:title",
				content: "Auxmet — AI-Powered Software Development"
			},
			{
				property: "og:description",
				content: "Building smart digital products faster with AI. Custom software, mobile, AI agents, RAG, and growth — at startup-friendly pricing."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "Auxmet"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Auxmet"
			},
			{
				name: "twitter:description",
				content: "AI-powered software development. 40% faster, 30% leaner."
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Organization",
				name: "Auxmet",
				description: "AI-powered software development agency building websites, applications, and AI solutions.",
				url: "/"
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
		lang: "en",
		className: "dark",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadContent, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 137,
			columnNumber: 9
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 136,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 141,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 139,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 135,
		columnNumber: 5
	}, this);
}
function RootComponent() {
	const { queryClient } = Route$11.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 152,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WhatsAppButton, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 153,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 151,
		columnNumber: 5
	}, this);
}
var $$splitComponentImporter$9 = () => import("./work-YDXkGuGQ.mjs");
var Route$10 = createFileRoute("/work")({
	head: () => ({
		meta: [
			{ title: "Work & Case Studies — Auxmet" },
			{
				name: "description",
				content: "Selected case studies and client testimonials from Auxmet — AI products, SaaS, web, and mobile delivered for international clients."
			},
			{
				property: "og:title",
				content: "Our Work — Auxmet"
			},
			{
				property: "og:description",
				content: "AI-driven projects we've shipped for startups and enterprises worldwide."
			}
		],
		links: [{
			rel: "canonical",
			href: "/work"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var BASE_URL = "";
var Route$9 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			{
				path: "/",
				changefreq: "weekly",
				priority: "1.0"
			},
			{
				path: "/services",
				changefreq: "monthly",
				priority: "0.9"
			},
			{
				path: "/advantage",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/process",
				changefreq: "monthly",
				priority: "0.7"
			},
			{
				path: "/work",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/pricing",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/book",
				changefreq: "monthly",
				priority: "0.9"
			},
			{
				path: "/faq",
				changefreq: "monthly",
				priority: "0.6"
			},
			{
				path: "/careers",
				changefreq: "monthly",
				priority: "0.4"
			},
			{
				path: "/contact",
				changefreq: "monthly",
				priority: "0.9"
			}
		].map((e) => `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$8 = () => import("./services-CNpUNqjh.mjs");
var Route$8 = createFileRoute("/services")({
	head: () => ({
		meta: [
			{ title: "Services — Auxmet" },
			{
				name: "description",
				content: "Custom software, web & mobile apps, AI solutions, and digital marketing — delivered faster with AI-powered engineering workflows."
			},
			{
				property: "og:title",
				content: "Services — Auxmet"
			},
			{
				property: "og:description",
				content: "End-to-end product teams combining senior engineers with proprietary AI workflows."
			}
		],
		links: [{
			rel: "canonical",
			href: "/services"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./process-DYj-xmjn.mjs");
var Route$7 = createFileRoute("/process")({
	head: () => ({
		meta: [
			{ title: "Our Process — Auxmet" },
			{
				name: "description",
				content: "A transparent, AI-augmented delivery process — from discovery to launch and beyond."
			},
			{
				property: "og:title",
				content: "Our Process — Auxmet"
			},
			{
				property: "og:description",
				content: "How we plan, build, and ship modern software with AI."
			}
		],
		links: [{
			rel: "canonical",
			href: "/process"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./pricing-Dqg9NUHX.mjs");
var Route$6 = createFileRoute("/pricing")({
	head: () => ({
		meta: [
			{ title: "Pricing — Auxmet" },
			{
				name: "description",
				content: "Transparent project-based pricing — see how AI-powered development compares to traditional agencies. Plans start at $299."
			},
			{
				property: "og:title",
				content: "Pricing — Auxmet"
			},
			{
				property: "og:description",
				content: "Startup-friendly pricing with enterprise-grade quality."
			}
		],
		links: [{
			rel: "canonical",
			href: "/pricing"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./faq-CtpZJDIm.mjs");
var Route$5 = createFileRoute("/faq")({
	head: () => ({
		meta: [
			{ title: "FAQ — Auxmet" },
			{
				name: "description",
				content: "Answers to common questions about Auxmet — process, pricing, AI, timelines, and quality."
			},
			{
				property: "og:title",
				content: "FAQ — Auxmet"
			},
			{
				property: "og:description",
				content: "Common questions about working with Auxmet."
			}
		],
		links: [{
			rel: "canonical",
			href: "/faq"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./contact-BYJxOJlI.mjs");
var Route$4 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact — Auxmet" },
			{
				name: "description",
				content: "Tell us about your project — get a free consultation and an AI-assisted estimate within 24 hours."
			},
			{
				property: "og:title",
				content: "Contact — Auxmet"
			},
			{
				property: "og:description",
				content: "Start your project with Auxmet."
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./careers-PK_lC1sx.mjs");
var Route$3 = createFileRoute("/careers")({
	head: () => ({
		meta: [
			{ title: "Careers — Auxmet" },
			{
				name: "description",
				content: "Join Auxmet — explore open roles at our AI-powered software development team."
			},
			{
				property: "og:title",
				content: "Careers — Auxmet"
			},
			{
				property: "og:description",
				content: "Open roles at Auxmet."
			}
		],
		links: [{
			rel: "canonical",
			href: "/careers"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./book-CBNOQWZ4.mjs");
var Route$2 = createFileRoute("/book")({
	head: () => ({
		meta: [
			{ title: "Book a Free Strategy Call — Auxmet" },
			{
				name: "description",
				content: "Schedule a free 30-minute consultation with Auxmet to discuss your project requirements, timeline, budget, and implementation strategy."
			},
			{
				property: "og:title",
				content: "Book a Free Strategy Call — Auxmet"
			},
			{
				property: "og:description",
				content: "Free 30-minute consultation. No obligation. Response within 24 hours."
			}
		],
		links: [{
			rel: "canonical",
			href: "/book"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./advantage-BsCtIM3o.mjs");
var Route$1 = createFileRoute("/advantage")({
	head: () => ({
		meta: [
			{ title: "The AI Advantage — Auxmet" },
			{
				name: "description",
				content: "How AI-powered development helps Auxmet ship 40% faster at 30% lower cost without sacrificing quality."
			},
			{
				property: "og:title",
				content: "The AI Advantage — Auxmet"
			},
			{
				property: "og:description",
				content: "AI-augmented engineering for faster, leaner delivery."
			}
		],
		links: [{
			rel: "canonical",
			href: "/advantage"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-BO2ibwsk.mjs");
var Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Auxmet — AI-Powered Software Development Agency" },
			{
				name: "description",
				content: "Auxmet helps US, UK, Canadian, Australian, and European founders ship AI-powered websites, applications, and AI solutions faster and more affordably than traditional agencies."
			},
			{
				property: "og:title",
				content: "Auxmet — AI-Powered Software Development"
			},
			{
				property: "og:description",
				content: "We combine AI workflows with senior engineering to ship products 40% faster, at 30% lower cost."
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var WorkRoute = Route$10.update({
	id: "/work",
	path: "/work",
	getParentRoute: () => Route$11
});
var SitemapDotxmlRoute = Route$9.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$11
});
var ServicesRoute = Route$8.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$11
});
var ProcessRoute = Route$7.update({
	id: "/process",
	path: "/process",
	getParentRoute: () => Route$11
});
var PricingRoute = Route$6.update({
	id: "/pricing",
	path: "/pricing",
	getParentRoute: () => Route$11
});
var FaqRoute = Route$5.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$11
});
var ContactRoute = Route$4.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$11
});
var CareersRoute = Route$3.update({
	id: "/careers",
	path: "/careers",
	getParentRoute: () => Route$11
});
var BookRoute = Route$2.update({
	id: "/book",
	path: "/book",
	getParentRoute: () => Route$11
});
var AdvantageRoute = Route$1.update({
	id: "/advantage",
	path: "/advantage",
	getParentRoute: () => Route$11
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$11
	}),
	AdvantageRoute,
	BookRoute,
	CareersRoute,
	ContactRoute,
	FaqRoute,
	PricingRoute,
	ProcessRoute,
	ServicesRoute,
	SitemapDotxmlRoute,
	WorkRoute
};
var routeTree = Route$11._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0,
		defaultPreloadDelay: 50
	});
};
//#endregion
export { getRouter };
