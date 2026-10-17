import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return undefined;
          if (id.includes("framer-motion") || id.includes("motion-dom") || id.includes("motion-utils")) return "motion";
          if (id.includes("swiper")) return "swiper";
          if (id.includes("react-icons")) return "icons";
          if (id.includes("react-router") || id.includes("react-dom") || id.includes("/react/") || id.includes("scheduler")) return "react-vendor";
          return undefined;
        },
      },
    },
  },
});
