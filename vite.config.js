import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // cho phép truy cập từ các thiết bị khác
    port: 5173, // đặt port cố định
  },
});
