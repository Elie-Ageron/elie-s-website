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
  },
}));
