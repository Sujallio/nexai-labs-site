import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { normalizeInquiryEmailError, sendInquiryEmails } from "./api/inquiry-email";

async function readJsonBody(request: import("http").IncomingMessage) {
  const chunks: Buffer[] = [];

  for await (const chunk of request) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }

  const rawBody = Buffer.concat(chunks).toString("utf8");
  return rawBody ? JSON.parse(rawBody) : {};
}

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    {
      name: "local-inquiry-api",
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.method !== "POST" || req.url !== "/api/inquiry") {
            next();
            return;
          }

          try {
            const body = await readJsonBody(req);
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
            } = body;

            if (!name || !email || !country || !projectType || !budget || !timeline || !description) {
              res.statusCode = 400;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ success: false, message: "Missing required fields" }));
              return;
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

            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(
              JSON.stringify({
                success: true,
                message:
                  "Inquiry received - Our team will review your requirements and contact you within 24 hours",
              }),
            );
          } catch (error) {
            const normalizedError = normalizeInquiryEmailError(error);
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.end(
              JSON.stringify({
                success: false,
                message: normalizedError.message,
              }),
            );
          }
        });
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    middlewareMode: false,
    historyApiFallback: true,
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "terser",
  },
});