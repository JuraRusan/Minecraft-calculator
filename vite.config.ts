import path from "node:path";
import { fileURLToPath } from "node:url";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import svgrPlugin from "vite-plugin-svgr";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Minecraft Calculator",
        short_name: "MC Calc",
        theme_color: "#2c2c2c",
        background_color: "#3c3c3c",
        display: "standalone",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
    svgrPlugin({
      svgrOptions: {
        icon: true,
        replaceAttrValues: {
          white: "currentColor",
        },
      },
      esbuildOptions: {
        jsx: "automatic",
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react/") || id.includes("node_modules/react-dom/")) {
            return "vendor-react";
          }

          if (
            id.includes("node_modules/redux/") ||
            id.includes("node_modules/react-redux/") ||
            id.includes("node_modules/@reduxjs/toolkit/")
          ) {
            return "vendor-redux";
          }

          if (
            id.includes("node_modules/i18next/") ||
            id.includes("node_modules/react-i18next/") ||
            id.includes("node_modules/i18next-browser-languagedetector/")
          ) {
            return "vendor-i18n";
          }
        },
      },
    },
  },
});
