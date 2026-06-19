import { o as __toESM } from "../_runtime.mjs";
import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { n as objectType, r as stringType, t as literalType } from "../_libs/zod.mjs";
import { t as require_nodemailer } from "../_libs/nodemailer.mjs";
import process$1 from "node:process";
//#region node_modules/.nitro/vite/services/ssr/assets/example.functions-uDTyBJ2w.js
var import_nodemailer = /* @__PURE__ */ __toESM(require_nodemailer());
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
function getServerConfig() {
	return {
		nodeEnv: process$1.env.NODE_ENV,
		emailUser: process$1.env.EMAIL_USER,
		emailPassword: process$1.env.EMAIL_PASSWORD,
		emailTo: process$1.env.EMAIL_TO || "auxmet01@gmail.com"
	};
}
var getGreeting_createServerFn_handler = createServerRpc({
	id: "a8ea96f55c98d9dfe39eba1f21271c6c33bfa924611fe9d828fca0774e41b939",
	name: "getGreeting",
	filename: "src/lib/api/example.functions.ts"
}, (opts) => getGreeting.__executeServer(opts));
var getGreeting = createServerFn({ method: "POST" }).inputValidator(objectType({ name: stringType().min(1) })).handler(getGreeting_createServerFn_handler, async ({ data }) => {
	const config = getServerConfig();
	return {
		greeting: `Hello, ${data.name}!`,
		mode: config.nodeEnv ?? "unknown"
	};
});
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
var submitInquiry_createServerFn_handler = createServerRpc({
	id: "65824b6e75349c6d152a94ddcd1865f77e5f864dfd019a9cac487542d5c91ad6",
	name: "submitInquiry",
	filename: "src/lib/api/example.functions.ts"
}, (opts) => submitInquiry.__executeServer(opts));
var submitInquiry = createServerFn({ method: "POST" }).inputValidator(inquirySchema).handler(submitInquiry_createServerFn_handler, async ({ data }) => {
	const config = getServerConfig();
	try {
		const transporter = import_nodemailer.default.createTransport({
			service: "gmail",
			auth: {
				user: config.emailUser || process.env.EMAIL_USER,
				pass: config.emailPassword || process.env.EMAIL_PASSWORD
			}
		});
		const emailContent = `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
        <p><strong>Company:</strong> ${data.company || "Not provided"}</p>
        <p><strong>Country:</strong> ${data.country}</p>
        <p><strong>Project Type:</strong> ${data.projectType}</p>
        <p><strong>Budget Range:</strong> ${data.budget}</p>
        <p><strong>Timeline:</strong> ${data.timeline}</p>
        <hr />
        <h3>Project Description</h3>
        <p>${data.description.replace(/\n/g, "<br />")}</p>
        ${data.additional ? `<h3>Additional Requirements</h3><p>${data.additional.replace(/\n/g, "<br />")}</p>` : ""}
      `;
		await transporter.sendMail({
			from: config.emailUser || process.env.EMAIL_USER,
			to: config.emailTo,
			subject: `New Project Inquiry from ${data.name}`,
			html: emailContent,
			replyTo: data.email
		});
		return {
			success: true,
			message: "Inquiry submitted successfully"
		};
	} catch (error) {
		console.error("Error sending email:", error);
		return {
			success: false,
			message: error instanceof Error ? error.message : "Failed to submit inquiry"
		};
	}
});
//#endregion
export { getGreeting_createServerFn_handler, submitInquiry_createServerFn_handler };
