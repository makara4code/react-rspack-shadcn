// rsbuild.config.ts
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";
import path from "path";

export default defineConfig({
  server: {
    port: 2000,
  },
  tools: {
    rspack: (config, { appendPlugins }) => {
      appendPlugins([
        new ModuleFederationPlugin({
          name: "federation_consumer",
          remotes: {
            federation_provider:
              "federation_provider@http://localhost:3000/mf-manifest.json",
          },
          shared: [
            "react",
            "react-dom",
            "react-router-dom",
            "tailwindcss",
            "class-variance-authority",
            "lucide-react",
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-slot",
          ],
        }),
      ]);

      config.resolve!.alias = {
        ...config.resolve!.alias,
       "@": path.resolve(__dirname, './src'),
      }
    },
  },
  plugins: [pluginReact()],
});
