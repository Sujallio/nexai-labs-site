import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

export type InquiryPayload = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  country: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
  additional?: string;
};

function createTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    switch (character) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#39;";
      default:
        return character;
    }
  });
}

function toBreaks(value: string) {
  return escapeHtml(value).replace(/\n/g, "<br />");
}

export async function sendInquiryEmails(payload: InquiryPayload) {
  const transporter = createTransporter();
  const targetEmail = process.env.EMAIL_TO || "auxmet01@gmail.com";

  const inquiryContent = `
    <h2>New Project Inquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
    <p><strong>Company:</strong> ${escapeHtml(payload.company || "Not provided")}</p>
    <p><strong>Phone:</strong> ${escapeHtml(payload.phone || "Not provided")}</p>
    <p><strong>Country:</strong> ${escapeHtml(payload.country)}</p>
    <p><strong>Project Type:</strong> ${escapeHtml(payload.projectType)}</p>
    <p><strong>Budget Range:</strong> ${escapeHtml(payload.budget)}</p>
    <p><strong>Timeline:</strong> ${escapeHtml(payload.timeline)}</p>
    <hr />
    <h3>Project Description</h3>
    <p>${toBreaks(payload.description)}</p>
    ${payload.additional ? `<h3>Additional Requirements</h3><p>${toBreaks(payload.additional)}</p>` : ""}
  `;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: targetEmail,
    subject: `New Project Inquiry from ${payload.name}`,
    html: inquiryContent,
    replyTo: payload.email,
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: payload.email,
    subject: "Project Inquiry Received - Auxmet",
    html: `
      <h2>Inquiry received</h2>
      <p>Our team will review your requirements and contact you within 24 hours.</p>
      <p>Best regards,<br />Auxmet Team</p>
    `,
  });
}

export function normalizeInquiryEmailError(error: unknown) {
  if (!(error instanceof Error)) {
    return new Error("Failed to submit inquiry");
  }

  if (/535-5\.7\.8|Username and Password not accepted|Invalid login/i.test(error.message)) {
    return new Error(
      "Gmail rejected the SMTP credentials. Set EMAIL_PASSWORD to a valid Gmail App Password, then try again.",
    );
  }

  return error;
}
