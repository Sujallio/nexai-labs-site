import { VercelRequest, VercelResponse } from "@vercel/node";

import { normalizeInquiryEmailError, sendInquiryEmails } from "./inquiry-email";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      name,
      email,
      company,
      phone,
      country,
      projectType,
      budget,
      timeline,
      description,
      additional,
    } = req.body;

    if (!name || !email || !country || !projectType || !budget || !timeline || !description) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    await sendInquiryEmails({
      name,
      email,
      company,
      phone,
      country,
      projectType,
      budget,
      timeline,
      description,
      additional,
    });

    return res.status(200).json({
      success: true,
      message: "Inquiry received - Our team will review your requirements and contact you within 24 hours",
    });
  } catch (error) {
    const normalizedError = normalizeInquiryEmailError(error);
    console.error("Email error:", normalizedError);
    return res.status(500).json({
      success: false,
      message: normalizedError.message,
    });
  }
}
