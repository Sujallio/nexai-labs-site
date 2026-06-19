import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { L as CalendarClock, M as CircleCheck, N as CircleAlert, a as Upload, b as Linkedin, f as Send, g as MessageCircle, y as Mail } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { n as Nav, t as Footer } from "./Footer-DQRS_RWc.mjs";
import { t as SectionHeader } from "./SectionHeader-Birabrp3.mjs";
import { t as Booking } from "./Booking-BTgW_cEY.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-Bc6hXneg.mjs";
import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as TrustBadges } from "./TrustBadges-BOK1REIZ.mjs";
import { n as objectType, r as stringType, t as literalType } from "../_libs/zod.mjs";
import { t as useForm } from "../_libs/react-hook-form.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BYJxOJlI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$2 = "C:/Users/sujal/Desktop/Auxmet/nexai-labs-site/src/components/site/Contact.tsx";
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "contact",
		className: "bg-surface/40 px-6 py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto max-w-5xl",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SectionHeader, {
				center: true,
				eyebrow: "Get in touch",
				title: "Let's talk about your project",
				description: "Prefer a quick message over a form? Reach us through any of the channels below."
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 8,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					{
						icon: MessageCircle,
						label: "WhatsApp",
						value: "Chat with us",
						href: "https://wa.me/918793001079"
					},
					{
						icon: Mail,
						label: "Email",
						value: "hello@auxmet.com",
						href: "mailto:hello@auxmet.com"
					},
					{
						icon: Linkedin,
						label: "LinkedIn",
						value: "Follow us",
						href: "https://www.linkedin.com/company/auxmet/"
					},
					{
						icon: CalendarClock,
						label: "Book a call",
						value: "30-min consultation",
						href: "/contact"
					}
				].map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
					href: c.href,
					target: c.href.startsWith("http") ? "_blank" : void 0,
					rel: "noreferrer",
					className: "group rounded-2xl border border-border bg-background p-6 transition-colors hover:border-brand/40",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(c.icon, { className: "size-5 text-brand" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 48,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-4 font-mono text-[11px] uppercase tracking-widest text-muted-foreground",
							children: c.label
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 49,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-1 font-medium group-hover:text-brand",
							children: c.value
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 52,
							columnNumber: 15
						}, this)
					]
				}, c.label, true, {
					fileName: _jsxFileName$2,
					lineNumber: 41,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 14,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 7,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 6,
		columnNumber: 5
	}, this);
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
createServerFn({ method: "POST" }).inputValidator(objectType({ name: stringType().min(1) })).handler(createSsrRpc("a8ea96f55c98d9dfe39eba1f21271c6c33bfa924611fe9d828fca0774e41b939"));
var inquirySchema = objectType({
	name: stringType().trim().min(2, "Required").max(100),
	company: stringType().trim().max(100).optional().or(literalType("")),
	email: stringType().trim().email("Valid email required").max(255),
	phone: stringType().trim().max(40).optional().or(literalType("")),
	country: stringType().min(1, "Select your country"),
	projectType: stringType().min(1, "Select a project type"),
	budget: stringType().min(1, "Select a budget"),
	timeline: stringType().min(1, "Select a timeline"),
	description: stringType().trim().min(10, "Tell us a bit more").max(2e3),
	additional: stringType().trim().max(1e3).optional().or(literalType(""))
});
var submitInquiry = createServerFn({ method: "POST" }).inputValidator(inquirySchema).handler(createSsrRpc("65824b6e75349c6d152a94ddcd1865f77e5f864dfd019a9cac487542d5c91ad6"));
var _jsxFileName$1 = "C:/Users/sujal/Desktop/Auxmet/nexai-labs-site/src/components/site/InquiryForm.tsx";
var schema = objectType({
	name: stringType().trim().min(2, "Required").max(100),
	company: stringType().trim().max(100).optional().or(literalType("")),
	email: stringType().trim().email("Valid email required").max(255),
	phone: stringType().trim().max(40).optional().or(literalType("")),
	country: stringType().min(1, "Select your country"),
	projectType: stringType().min(1, "Select a project type"),
	budget: stringType().min(1, "Select a budget"),
	timeline: stringType().min(1, "Select a timeline"),
	description: stringType().trim().min(10, "Tell us a bit more").max(2e3),
	additional: stringType().trim().max(1e3).optional().or(literalType(""))
});
var projectTypes = [
	"Website Development",
	"Mobile App",
	"Software Development",
	"AI Solution",
	"Digital Marketing",
	"Other"
];
var countries = [
	"United States",
	"United Kingdom",
	"Canada",
	"Australia",
	"Germany",
	"France",
	"Netherlands",
	"Spain",
	"India",
	"United Arab Emirates",
	"Singapore",
	"Other"
];
var budgets = [
	"< $5k",
	"$5k – $15k",
	"$15k – $50k",
	"$50k – $150k",
	"$150k+"
];
var timelines = [
	"ASAP",
	"1–3 months",
	"3–6 months",
	"6+ months",
	"Flexible"
];
function InquiryForm() {
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
	const onSubmit = async (raw) => {
		const parsed = schema.safeParse(raw);
		if (!parsed.success) return;
		setError(null);
		try {
			const result = await submitInquiry({ data: parsed.data });
			if (result.success) {
				setSubmitted(true);
				reset();
			} else setError(result.message);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to submit inquiry");
		}
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		id: "inquiry",
		className: "relative px-6 py-24 md:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-start",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { duration: .5 },
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mb-3 font-mono text-[11px] uppercase tracking-widest text-brand",
						children: "Start your project"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 88,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "text-balance text-3xl font-semibold tracking-tight md:text-4xl",
						children: "Submit your project requirements"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 91,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-4 text-muted-foreground",
						children: "Tell us about your idea. Our team reviews every inquiry and responds within 24 hours with a clear next step and AI-assisted estimate."
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 94,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
						className: "mt-8 space-y-3 text-sm",
						children: [
							"Direct conversation with a senior engineer",
							"AI-assisted estimate within 24 hours",
							"NDA available on request",
							"No obligation, no pressure"
						].map((i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
							className: "flex items-center gap-3 text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "size-4 text-brand" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 106,
								columnNumber: 17
							}, this), i]
						}, i, true, {
							fileName: _jsxFileName$1,
							lineNumber: 105,
							columnNumber: 15
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 98,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 82,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: {
					duration: .5,
					delay: .1
				},
				className: "rounded-2xl border border-border bg-surface p-6 md:p-8",
				children: submitted ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex min-h-[420px] flex-col items-center justify-center text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex size-12 items-center justify-center rounded-full bg-brand/15 text-brand",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "size-6" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 123,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 122,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "mt-5 text-xl font-semibold",
							children: "Inquiry received"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 125,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-2 max-w-sm text-sm text-muted-foreground",
							children: "Our team will review your requirements and contact you within 24 hours."
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 126,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							onClick: () => setSubmitted(false),
							className: "mt-6 rounded-md border border-border bg-background px-4 py-2 text-sm hover:bg-secondary",
							children: "Submit another"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 129,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 121,
					columnNumber: 13
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
					onSubmit: handleSubmit(onSubmit),
					className: "grid gap-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
									label: "Full name",
									error: errors.name?.message,
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
										...register("name"),
										placeholder: "Jane Cooper",
										className: "input"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 140,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 139,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
									label: "Company",
									error: errors.company?.message,
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
										...register("company"),
										placeholder: "Acme Inc.",
										className: "input"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 147,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 146,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
									label: "Email",
									error: errors.email?.message,
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
										type: "email",
										...register("email"),
										placeholder: "jane@acme.com",
										className: "input"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 150,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 149,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
									label: "Phone",
									error: errors.phone?.message,
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
										...register("phone"),
										placeholder: "+1 555 0100",
										className: "input"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 158,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 157,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
									label: "Country",
									error: errors.country?.message,
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
										...register("country"),
										className: "input",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
											value: "",
											children: "Select…"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 162,
											columnNumber: 21
										}, this), countries.map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: c }, c, false, {
											fileName: _jsxFileName$1,
											lineNumber: 164,
											columnNumber: 23
										}, this))]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 161,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 160,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
									label: "Project type",
									error: errors.projectType?.message,
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
										...register("projectType"),
										className: "input",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
											value: "",
											children: "Select…"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 171,
											columnNumber: 21
										}, this), projectTypes.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: p }, p, false, {
											fileName: _jsxFileName$1,
											lineNumber: 173,
											columnNumber: 23
										}, this))]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 170,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 168,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
									label: "Budget range",
									error: errors.budget?.message,
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
										...register("budget"),
										className: "input",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
											value: "",
											children: "Select…"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 179,
											columnNumber: 21
										}, this), budgets.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: p }, p, false, {
											fileName: _jsxFileName$1,
											lineNumber: 181,
											columnNumber: 23
										}, this))]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 178,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 177,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
									label: "Timeline",
									error: errors.timeline?.message,
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
										...register("timeline"),
										className: "input",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
											value: "",
											children: "Select…"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 187,
											columnNumber: 21
										}, this), timelines.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { children: p }, p, false, {
											fileName: _jsxFileName$1,
											lineNumber: 189,
											columnNumber: 23
										}, this))]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 186,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 185,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
									label: "Attachment (optional)",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
										className: "input flex cursor-pointer items-center gap-2 text-muted-foreground",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Upload, { className: "size-4" }, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 195,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
												className: "text-sm",
												children: "Upload brief or wireframes"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 196,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
												type: "file",
												className: "hidden"
											}, void 0, false, {
												fileName: _jsxFileName$1,
												lineNumber: 197,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 194,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 193,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 138,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
							label: "Project description",
							error: errors.description?.message,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
								...register("description"),
								rows: 4,
								placeholder: "Tell us about your goals, target users, and any constraints.",
								className: "input resize-y"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 202,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 201,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
							label: "Additional requirements",
							error: errors.additional?.message,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
								...register("additional"),
								rows: 2,
								placeholder: "Integrations, compliance, design preferences…",
								className: "input resize-y"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 210,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 209,
							columnNumber: 15
						}, this),
						error && /* @__PURE__ */ (void 0)("div", {
							className: "flex items-center gap-2 rounded-md bg-red-50 p-3 text-sm text-red-700 border border-red-200",
							children: [/* @__PURE__ */ (void 0)(CircleAlert, { className: "size-4 flex-shrink-0" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 219,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("span", { children: error }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 220,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 218,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "submit",
							disabled: isSubmitting,
							className: "inline-flex items-center justify-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-brand/90 disabled:opacity-60",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Send, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 228,
								columnNumber: 17
							}, this), isSubmitting ? "Sending…" : "Submit requirements"]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 223,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 137,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 113,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 81,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("style", { children: `
        .input {
          width: 100%;
          background-color: var(--color-background);
          border: 1px solid var(--color-border);
          border-radius: 0.5rem;
          padding: 0.625rem 0.75rem;
          font-size: 0.875rem;
          color: var(--color-foreground);
          outline: none;
          transition: border-color .15s, box-shadow .15s;
        }
        .input::placeholder { color: var(--color-muted-foreground); }
        .input:focus {
          border-color: color-mix(in oklab, var(--brand) 60%, transparent);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--brand) 20%, transparent);
        }
      ` }, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 236,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 80,
		columnNumber: 5
	}, this);
}
function Field({ label, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
		className: "block",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground",
				children: label
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 269,
				columnNumber: 7
			}, this),
			children,
			error && /* @__PURE__ */ (void 0)("span", {
				className: "mt-1 block text-xs text-destructive",
				children: error
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 273,
				columnNumber: 17
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 268,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "C:/Users/sujal/Desktop/Auxmet/nexai-labs-site/src/routes/contact.tsx?tsr-split=component";
function ContactPage() {
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
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InquiryForm, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 11,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TrustBadges, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 12,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Booking, {}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 13,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Contact, {}, void 0, false, {
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
export { ContactPage as component };
