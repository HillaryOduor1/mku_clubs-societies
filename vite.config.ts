/*
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'ie 11'], // Support IE11 and other legacy browsers
      modernPolyfills: true
    })
  ],
  build: {
    target: 'es5'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})*/
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ["defaults", "ie 11"],
      modernPolyfills: true,
    }),
  ],
  build: {
    target: "es5",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
