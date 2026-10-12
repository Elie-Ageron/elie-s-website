import { defineConfig, type Plugin } from "vite";
import { createHash } from "crypto";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

/**
 * La feuille de style garde la meme adresse d'un deploiement a l'autre.
 *
 * 🔴 Les relectures de session Hotjar (Contentsquare) redemandent les fichiers
 * du site au moment ou on les regarde, pas au moment de la visite. Avec un nom
 * a empreinte (`index-DQU0oA5n.css`), le deploiement suivant supprimait le
 * fichier et la relecture s'affichait en HTML brut, sans aucun style. Elie l'a
 * vu le 12 octobre 2026, cinq deploiements dans l'heure.
 *
 * Le fichier s'appelle donc `assets/index.css` et le HTML le demande avec
 * `?v=<empreinte>` : le visiteur garde un cache propre a chaque version (la
 * requete fait partie de la clef de cache), et une vieille relecture retombe
 * sur la feuille actuelle au lieu d'une erreur 404.
 */
const versionnerCss = (): Plugin => ({
  name: "versionner-css",
  apply: "build",
  transformIndexHtml: {
    order: "post",
    handler(html, ctx) {
      const css = ctx.bundle?.["assets/index.css"];
      if (!css || css.type !== "asset") return html;
      const v = createHash("sha256").update(css.source).digest("hex").slice(0, 10);
      return html.replace('/assets/index.css"', `/assets/index.css?v=${v}"`);
    },
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    versionnerCss(),
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
    // ⚠️ Aucune image en base64 dans le JavaScript. Les relectures Hotjar
    // n'affichent pas les images `data:` : les petits logos du hero (moins de
    // 4 ko, donc inlines par defaut) y sortaient casses, les gros non.
    assetsInlineLimit: (fichier) => (/\.(webp|png|jpe?g|gif|svg|avif)$/i.test(fichier) ? false : undefined),
    // dist/.vite/manifest.json : scripts/prerender-head.mjs y lit le lot de
    // chaque page pour le precharger dans le HTML de sa route.
    manifest: true,
    // Suppress warnings for large chunks (three.js is intentionally large and lazy-loaded)
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Seule la feuille d'entree perd son empreinte, voir `versionnerCss`.
        // Celles des pages paresseuses sont chargees par le JavaScript sans
        // `?v=`, elles gardent donc la leur.
        assetFileNames: (info) =>
          (info.names?.[0] ?? info.name) === "index.css"
            ? "assets/index.css"
            : "assets/[name]-[hash][extname]",
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
