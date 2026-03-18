import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    ViteImageOptimizer({
      // JPEG: quality 82 keeps visual quality while cutting ~60-70% of file size
      jpg: { quality: 82 },
      jpeg: { quality: 82 },
      // PNG: quality range 65-85 + strip metadata
      png: { quality: 80 },
      // Also optimise any SVGs
      svg: {
        plugins: [
          { name: "removeViewBox", active: false },
          { name: "removeEmptyAttrs", active: false },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Modern browsers - smaller output, no legacy polyfills
    target: "esnext",
    // CSS output per chunk → only load styles needed for current route
    cssCodeSplit: true,
    // Skip printing compressed sizes (speeds up CI builds)
    reportCompressedSize: false,
    // Suppress warnings for large chunks (three.js is intentionally large and lazy-loaded)
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Deterministic chunk names for long-lived HTTP caching
        manualChunks(id) {
          // three.js + react-three stay in their own lazy chunk (loaded only on desktop hero)
          if (id.includes("three") || id.includes("@react-three")) {
            return "three-scene";
          }
          // framer-motion: shared animation library
          if (id.includes("framer-motion")) {
            return "motion";
          }
          // All Radix UI primitives together (tree-shaken per page but share code)
          if (id.includes("@radix-ui")) {
            return "radix";
          }
          // TanStack Query
          if (id.includes("@tanstack")) {
            return "query";
          }
          // Recharts + D3 (heavy, only used in specific pages)
          if (id.includes("recharts") || id.includes("d3-") || id.includes("victory-")) {
            return "charts";
          }
          // Supabase client
          if (id.includes("@supabase")) {
            return "supabase";
          }
          // React core runtime (smallest possible initial chunk, maximally cached)
          if (
            id.includes("node_modules/react/") ||
            id.includes("node_modules/react-dom/") ||
            id.includes("node_modules/scheduler/")
          ) {
            return "react-vendor";
          }
        },
      },
    },
  },
}));
