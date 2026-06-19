import { z } from "zod";

// Greeting function - example
export async function getGreeting(data: { name: string }) {
  try {
    const response = await fetch("/api/greeting", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Failed to get greeting");
    return await response.json();
  } catch (error) {
    console.error(error);
    return { greeting: `Hello, ${data.name}!`, mode: "client" };
  }
}

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

export async function submitInquiry(data: any) {
  try {
    // Validate the data
    const validatedData = inquirySchema.parse(data);
    
    // Send to API endpoint (requires backend serverless function)
    const response = await fetch("/api/inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(validatedData),
    });
    
    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || `Server error: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    if (error instanceof z.ZodError) {
      const message = error.errors[0].message;
      throw new Error(message);
    }
    throw error;
  }
}

