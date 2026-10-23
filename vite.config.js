import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    {
      name: "decap-admin-rewrite",
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          if (req.url === "/admin" || req.url === "/admin/") {
            req.url = "/admin/index.html";
          }
          next();
        });
      },
    },
  ],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(rootDir, "index.html"),
        admin: path.resolve(rootDir, "admin/index.html"),
      },
    },
  },
});
