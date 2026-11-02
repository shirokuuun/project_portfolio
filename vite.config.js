import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import process from "node:process";
import { portfolioSeo } from "./scripts/seo-plugin.mjs";

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    react(),
    tailwindcss(),
    !isSsrBuild &&
      portfolioSeo({ preview: process.env.VERCEL_ENV === "preview" }),
  ],
}));
