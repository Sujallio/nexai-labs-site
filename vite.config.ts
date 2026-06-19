import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: "vercel",
    output: {
      dir: ".output",
      publicDir: ".output/public",
    },
  },
});