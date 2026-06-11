import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import nodemailer from "nodemailer";

import { getServerConfig } from "../config.server";

// Example createServerFn. Server-side handler invoked from the client:
//   const result = await getGreeting({ data: { name: "Ada" } })
// The .handler body runs server-only — imports used only inside it (like
// .server.ts modules) are tree-shaken from the client bundle. Module-level
// code here still ships to the client; for truly server-only helpers, put
// them in a .server.ts file. Use this pattern instead of Supabase Edge
// Functions for server logic.

export const getGreeting = createServerFn({ method: "POST" })
  .inputValidator(z.object({ name: z.string().min(1) }))
  .handler(async ({ data }) => {
    const config = getServerConfig();
    return {
      greeting: `Hello, ${data.name}!`,
      mode: config.nodeEnv ?? "unknown",
    };
  });

const inquirySchema = z.object({
  name: z.string().trim().min(2, "Required").max(100),
  company: z.string().trim().max(100).optional().or(z.literal("")),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  country: z.string().min(1, "Select your country"),
  projectType: z.string().min(1, "Select a project type"),
  budget: z.string().min(1, "Select a budget"),
  timeline: z.string().min(1, "Select a timeline"),
  description: z.string().trim().min(10, "Tell us a bit more").max(2000),
  additional: z.string().trim().max(1000).optional().or(z.literal("")),
});

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator(inquirySchema)
  .handler(async ({ data }) => {
    const config = getServerConfig();

    try {
      // Create transporter for Gmail
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: config.emailUser || process.env.EMAIL_USER,
          pass: config.emailPassword || process.env.EMAIL_PASSWORD,
        },
      });

      // Format the email content
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

      // Send email
      await transporter.sendMail({
        from: config.emailUser || process.env.EMAIL_USER,
        to: config.emailTo,
        subject: `New Project Inquiry from ${data.name}`,
        html: emailContent,
        replyTo: data.email,
      });

      return { success: true, message: "Inquiry submitted successfully" };
    } catch (error) {
      console.error("Error sending email:", error);
      return { 
        success: false, 
        message: error instanceof Error ? error.message : "Failed to submit inquiry" 
      };
    }
  });
