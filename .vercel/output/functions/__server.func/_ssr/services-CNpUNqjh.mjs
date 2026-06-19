import { A as CodeXml, C as Globe, l as Smartphone, v as Megaphone, x as Layers, z as Brain } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { n as Nav, t as Footer } from "./Footer-DQRS_RWc.mjs";
import { t as SectionHeader } from "./SectionHeader-Birabrp3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-CNpUNqjh.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$2 = "C:/Users/sujal/Desktop/Auxmet/nexai-labs-site/src/components/site/Services.tsx";
var services = [
	{
		icon: CodeXml,
		title: "Custom Software",
		desc: "ERP, CRM, SaaS, and enterprise systems built with AI-assisted workflows.",
		items: [
			"ERP Systems",
			"CRM Solutions",
			"SaaS Platforms",
			"Enterprise Software"
		]
	},
	{
		icon: Globe,
		title: "Website Development",
		desc: "High-converting corporate sites, e-commerce, portfolios, and landing pages.",
		items: [
			"Corporate Websites",
			"E-commerce",
			"Portfolio Sites",
			"Landing Pages"
		]
	},
	{
		icon: Smartphone,
		title: "Mobile Apps",
		desc: "Native iOS, Android, and cross-platform apps with AI features baked in.",
		items: [
			"iOS Native",
			"Android Native",
			"Cross Platform",
			"AI-Powered Apps"
		]
	},
	{
		icon: Brain,
		title: "AI Solutions",
		desc: "RAG, agents, chatbots, document intelligence, and predictive analytics.",
		items: [
			"AI Chatbots",
			"RAG Applications",
			"AI Agents",
			"Document Intelligence"
		]
	},
	{
		icon: Layers,
		title: "Web Applications",
		desc: "Complex web apps with real-time data, dashboards, and automated workflows.",
		items: [
			"Admin Dashboards",
			"Real-time Apps",
			"Workflow Automation",
			"Internal Tools"
		]
	},
	{
		icon: Megaphone,
		title: "Digital Marketing",
		desc: "Growth engineering: SEO, content, performance, and AI-driven lead generation.",
		items: [
			"SEO",
			"Social Media",
			"Performance Ads",
			"Lead Generation"
		]
	}
];
function Services() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "services",
		className: "px-6 py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeader, {
				eyebrow: "What we do",
				title: "Intelligent engineering services",
				description: "End-to-end product teams that combine senior engineers with proprietary AI workflows to ship faster, cleaner, and at lower cost."
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 55,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3",
				children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
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
						delay: i * .05
					},
					className: "group relative bg-background p-8 transition-colors hover:bg-surface",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mb-6 flex size-11 items-center justify-center rounded-lg border border-border bg-surface text-brand transition-colors group-hover:border-brand/40",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(s.icon, { className: "size-5" }, void 0, false, {
								fileName: _jsxFileName$2,
								lineNumber: 72,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 71,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "text-lg font-semibold tracking-tight",
							children: s.title
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 74,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: s.desc
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 75,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
							className: "mt-6 space-y-2 font-mono text-[12px] text-muted-foreground",
							children: s.items.map((it) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-brand",
									children: "+"
								}, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 79,
									columnNumber: 21
								}, this), it]
							}, it, true, {
								fileName: _jsxFileName$2,
								lineNumber: 78,
								columnNumber: 19
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 76,
							columnNumber: 15
						}, this)
					]
				}, s.title, true, {
					fileName: _jsxFileName$2,
					lineNumber: 63,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 61,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 54,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 53,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "C:/Users/sujal/Desktop/Auxmet/nexai-labs-site/src/components/site/TechStack.tsx";
var groups = [
	{
		title: "Frontend",
		items: [
			"React",
			"Next.js",
			"Vue.js",
			"Nuxt",
			"Angular",
			"Svelte / SvelteKit",
			"TypeScript",
			"JavaScript",
			"Tailwind CSS",
			"Sass / SCSS",
			"Redux / Zustand",
			"TanStack Query",
			"Framer Motion",
			"Three.js"
		]
	},
	{
		title: "Backend",
		items: [
			"Node.js",
			"Express",
			"NestJS",
			"Python",
			"FastAPI",
			"Django",
			"Flask",
			"Java",
			"Spring Boot",
			"Go",
			"Rust",
			"PHP / Laravel",
			"Ruby on Rails",
			".NET / C#",
			"GraphQL",
			"tRPC",
			"REST APIs"
		]
	},
	{
		title: "Mobile",
		items: [
			"React Native",
			"Expo",
			"Flutter",
			"Swift / iOS",
			"Kotlin / Android",
			"Ionic"
		]
	},
	{
		title: "Databases",
		items: [
			"PostgreSQL",
			"MySQL",
			"MongoDB",
			"Supabase",
			"Firebase",
			"Redis",
			"DynamoDB",
			"SQLite",
			"Prisma",
			"Drizzle",
			"Elasticsearch"
		]
	},
	{
		title: "Cloud & DevOps",
		items: [
			"AWS",
			"Google Cloud",
			"Azure",
			"Vercel",
			"Cloudflare",
			"Netlify",
			"DigitalOcean",
			"Docker",
			"Kubernetes",
			"Terraform",
			"GitHub Actions",
			"CI/CD",
			"Nginx"
		]
	},
	{
		title: "AI / ML",
		items: [
			"OpenAI",
			"Anthropic Claude",
			"Google Gemini",
			"Meta Llama",
			"Mistral",
			"LangChain",
			"LlamaIndex",
			"RAG Pipelines",
			"AI Agents",
			"Vector DBs",
			"Pinecone",
			"Weaviate",
			"pgvector",
			"HuggingFace",
			"PyTorch",
			"TensorFlow",
			"Whisper / TTS"
		]
	},
	{
		title: "CMS & E-commerce",
		items: [
			"WordPress",
			"Shopify",
			"Webflow",
			"Strapi",
			"Sanity",
			"Contentful",
			"WooCommerce",
			"Medusa"
		]
	},
	{
		title: "Design & Collaboration",
		items: [
			"Figma",
			"Adobe XD",
			"Photoshop",
			"Illustrator",
			"Notion",
			"Linear",
			"Jira"
		]
	}
];
function TechStack() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "bg-surface/40 px-6 py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeader, {
					eyebrow: "Technology",
					title: "We work across the entire modern stack",
					description: "We're not locked into a single framework or language. We pick the right tools for your problem and combine them in flexible, AI-native architectures."
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 135,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4",
					children: groups.map((g) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "bg-background p-6",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "font-mono text-[11px] uppercase tracking-widest text-brand",
							children: g.title
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 143,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
							className: "mt-4 flex flex-wrap gap-2",
							children: g.items.map((i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
								className: "rounded-md border border-border bg-surface/60 px-2.5 py-1 text-xs text-foreground",
								children: i
							}, i, false, {
								fileName: _jsxFileName$1,
								lineNumber: 148,
								columnNumber: 19
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 146,
							columnNumber: 15
						}, this)]
					}, g.title, true, {
						fileName: _jsxFileName$1,
						lineNumber: 142,
						columnNumber: 13
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 140,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-8 text-center text-sm text-muted-foreground",
					children: "Don't see your stack? We've almost certainly worked with it — just ask."
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 159,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 134,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 133,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "C:/Users/sujal/Desktop/Auxmet/nexai-labs-site/src/routes/services.tsx?tsr-split=component";
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 7,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
				className: "pt-8",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Services, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 9,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TechStack, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 10,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 8,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 12,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 6,
		columnNumber: 10
	}, this);
}
//#endregion
export { ServicesPage as component };
