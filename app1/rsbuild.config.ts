import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";

export default defineConfig({
  server: {
    port: 3000,
  },
  dev: {
    assetPrefix: "http://localhost:3000",
  },
  output: { assetPrefix: "http://localhost:3000" },
  tools: {
    rspack: (config, { appendPlugins }) => {
      config.output!.uniqueName = "app1";
      appendPlugins([
        new ModuleFederationPlugin({
          name: "app1",
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
