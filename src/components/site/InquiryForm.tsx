import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";
import { CheckCircle2, Send, Upload, AlertCircle } from "lucide-react";
import { submitInquiry } from "../../lib/api/example.functions";

const schema = z.object({
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

type FormData = z.infer<typeof schema>;

const projectTypes = [
  "Website Development",
  "Mobile App",
  "Software Development",
  "AI Solution",
  "Digital Marketing",
  "Other",
];

const countries = [
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
  "Other",
];

const budgets = ["< $5k", "$5k – $15k", "$15k – $50k", "$50k – $150k", "$150k+"];
const timelines = ["ASAP", "1–3 months", "3–6 months", "6+ months", "Flexible"];


export function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (raw: FormData) => {
    const parsed = schema.safeParse(raw);
    if (!parsed.success) return;
    
    setError(null);
    try {
      const result = await submitInquiry({ data: parsed.data });
      if (result.success) {
        setSubmitted(true);
        reset();
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit inquiry");
    }
  };

  return (
    <section id="inquiry" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-3 font-mono text-[11px] uppercase tracking-widest text-brand">
            Start your project
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Submit your project requirements
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tell us about your idea. Our team reviews every inquiry and responds within 24 hours
            with a clear next step and AI-assisted estimate.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            {[
              "Direct conversation with a senior engineer",
              "AI-assisted estimate within 24 hours",
              "NDA available on request",
              "No obligation, no pressure",
            ].map((i) => (
              <li key={i} className="flex items-center gap-3 text-foreground">
                <CheckCircle2 className="size-4 text-brand" />
                {i}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-border bg-surface p-6 md:p-8"
        >
          {submitted ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
              <div className="flex size-12 items-center justify-center rounded-full bg-brand/15 text-brand">
                <CheckCircle2 className="size-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">Inquiry received</h3>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                Our team will review your requirements and contact you within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 rounded-md border border-border bg-background px-4 py-2 text-sm hover:bg-secondary"
              >
                Submit another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" error={errors.name?.message}>
                  <input
                    {...register("name")}
                    placeholder="Jane Cooper"
                    className="input"
                  />
                </Field>
                <Field label="Company" error={errors.company?.message}>
                  <input {...register("company")} placeholder="Acme Inc." className="input" />
                </Field>
                <Field label="Email" error={errors.email?.message}>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="jane@acme.com"
                    className="input"
                  />
                </Field>
                <Field label="Phone" error={errors.phone?.message}>
                  <input {...register("phone")} placeholder="+1 555 0100" className="input" />
                </Field>
                <Field label="Country" error={errors.country?.message}>
                  <select {...register("country")} className="input">
                    <option value="">Select…</option>
                    {countries.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Project type" error={errors.projectType?.message}>

                  <select {...register("projectType")} className="input">
                    <option value="">Select…</option>
                    {projectTypes.map((p) => (
                      <option key={p}>{p}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Budget range" error={errors.budget?.message}>
                  <select {...register("budget")} className="input">
                    <option value="">Select…</option>
                    {budgets.map((p) => (
                      <option key={p}>{p}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Timeline" error={errors.timeline?.message}>
                  <select {...register("timeline")} className="input">
                    <option value="">Select…</option>
                    {timelines.map((p) => (
                      <option key={p}>{p}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Attachment (optional)">
                  <label className="input flex cursor-pointer items-center gap-2 text-muted-foreground">
                    <Upload className="size-4" />
                    <span className="text-sm">Upload brief or wireframes</span>
                    <input type="file" className="hidden" />
                  </label>
                </Field>
              </div>
              <Field label="Project description" error={errors.description?.message}>
                <textarea
                  {...register("description")}
                  rows={4}
                  placeholder="Tell us about your goals, target users, and any constraints."
                  className="input resize-y"
                />
              </Field>
              <Field label="Additional requirements" error={errors.additional?.message}>
                <textarea
                  {...register("additional")}
                  rows={2}
                  placeholder="Integrations, compliance, design preferences…"
                  className="input resize-y"
                />
              </Field>
              {error && (
                <div className="flex items-center gap-2 rounded-md bg-red-50 p-3 text-sm text-red-700 border border-red-200">
                  <AlertCircle className="size-4 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-brand/90 disabled:opacity-60"
              >
                <Send className="size-4" />
                {isSubmitting ? "Sending…" : "Submit requirements"}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
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
      `}</style>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
