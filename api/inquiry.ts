import { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, company, phone, country, projectType, budget, timeline, description, additional } = req.body;

    // Validate required fields
    if (!name || !email || !description) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Format inquiry email
    const emailContent = `
      <h2>New Project Inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || 'Not provided'}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>Project Type:</strong> ${projectType}</p>
      <p><strong>Budget Range:</strong> ${budget}</p>
      <p><strong>Timeline:</strong> ${timeline}</p>
      <hr />
      <h3>Project Description</h3>
      <p>${description.replace(/\n/g, '<br />')}</p>
      ${additional ? `<h3>Additional Requirements</h3><p>${additional.replace(/\n/g, '<br />')}</p>` : ''}
    `;

    // Send email to Auxmet
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'auxmet01@gmail.com',
      subject: `New Project Inquiry from ${name}`,
      html: emailContent,
      replyTo: email,
    });

    // Send confirmation email to user
    const confirmationEmail = `
      <h2>Thank you for your inquiry!</h2>
      <p>Hi ${name},</p>
      <p>We've received your project requirements and will review them carefully.</p>
      <p>Our team will contact you within 24 hours with a clear next step and AI-assisted estimate.</p>
      <p>Best regards,<br />Auxmet Team</p>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Project Inquiry Received - Auxmet',
      html: confirmationEmail,
    });

    return res.status(200).json({ success: true, message: 'Inquiry submitted successfully' });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({
      success: false,
      message: error instanceof Error ? error.message : 'Failed to submit inquiry',
    });
  }
}
