// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import path from "path";
// import { componentTagger } from "lovable-tagger";

// // https://vitejs.dev/config/
// export default defineConfig(({ mode }) => ({
//   server: {
//     host: "::",
//     port: 8080,
//     allowedHosts: ["vaikartan.onrender.com"],
//   },
//   build: {
//     outDir: 'dist',
//     sourcemap: false,
//     minify: 'esbuild',
//     rollupOptions: {
//       output: {
//         manualChunks: {
//           vendor: ['react', 'react-dom'],
//           router: ['react-router-dom'],
//         }
//       }
//     }
//   },
//   define: {
//     'process.env.NODE_ENV': JSON.stringify(mode),
//   },
//   plugins: [
//     react(),
//     mode === 'development' && componentTagger(),
//   ].filter(Boolean),
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// }));

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: ["vaikartan.onrender.com"],
  },
  plugins: [
    react({
      // Ensure proper JSX transform
      jsxImportSource: undefined,
    }),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Ensure proper build configuration
  build: {
    target: 'esnext',
    minify: mode === 'production',
  },
  // Explicitly set mode-specific configurations
  define: {
    'process.env.NODE_ENV': JSON.stringify(mode),
  },
}));
