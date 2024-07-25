import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import path from "path";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ react(), svgr() ],
  resolve: {
    alias: {
      "@portfolio": `${path.resolve(__dirname, "src/")}`,
    },
  }
})