import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root")!;

const app = (
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// In production: hydrate react-snap prerendered HTML for seamless takeover
// In dev: always fresh render (avoids hydration mismatch issues)
if (import.meta.env.PROD && rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
