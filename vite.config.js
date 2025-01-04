import { resolve } from "path";

export default {
  root: resolve(__dirname, "src"),
  build: {
    outDir: "../dist",
    rollupOptions: {
      output: {
        chunkFileNames: "assets/[chunks]/[name].[hash].js",
        entryFileNames: "assets/js/main.js",

        assetFileNames: ({ name }) => {
          if (/\.(webP|avif|gif|jpe?g|png|svg)$/.test(name ?? "")) {
            return "assets/images/[name][extname]";
          }

          if (/\.css$/.test(name ?? "")) {
            return "assets/css/style.min.css";
          }
          return "assets/[ext]/[name][extname]";
        },
      },
    },
  },
  server: {
    port: 8080,
  },
};
