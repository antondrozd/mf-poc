import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";

export default defineConfig({
  server: {
    port: 3001,
  },
  dev: {
    assetPrefix: "http://localhost:3001",
  },
  output: { assetPrefix: "http://localhost:3001" },
  tools: {
    rspack: (config, { appendPlugins }) => {
      config.output!.uniqueName = "app2";
      appendPlugins([
        new ModuleFederationPlugin({
          name: "app2",
          exposes: {
            "./app": "./src/App.tsx",
          },
          filename: "remoteEntry.js",
          shared: [
            "react",
            "react-dom",
            "@tanstack/react-query",
            "@noriginmedia/norigin-spatial-navigation",
            "react-router-dom",
            "@emotion/react",
            "@emotion/styled",
            "@mui/material",
          ],
        }),
      ]);
    },
  },
  plugins: [pluginReact()],
});
