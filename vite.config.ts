import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export const baseUrl = "/pokeinfo/";
export default defineConfig({
  base: baseUrl,
  plugins: [react()],
});
