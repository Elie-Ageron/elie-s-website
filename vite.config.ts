import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
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
    // Modern browsers — smaller output, no legacy polyfills
    target: "esnext",
    // CSS output per chunk → only load styles needed for current route
    cssCodeSplit: true,
    // Skip printing compressed sizes (speeds up CI builds)
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return undefined;
          // THREE.js ecosystem — very heavy, isolated for async loading
          if (id.includes("/three") || id.includes("@react-three")) {
            return "vendor-three";
          }
          // Framer-motion — isolated so pages without animations stay small
          if (id.includes("framer-motion") || id.includes("motion")) {
            return "vendor-motion";
          }
          // React core runtime — cached across all navigations
          if (
            id.includes("/react/") ||
            id.includes("/react-dom/") ||
            id.includes("/scheduler/") ||
            id.includes("react-router")
          ) {
            return "vendor-react";
          }
          // Radix UI primitives — shared across many components
          if (id.includes("@radix-ui")) {
            return "vendor-radix";
          }
          // Everything else from node_modules — misc vendor bundle
          return "vendor-misc";
        },
      },
    },
  },
}));
