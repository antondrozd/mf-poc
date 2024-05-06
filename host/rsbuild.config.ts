import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced/rspack";

import { dependencies } from "./package.json";

export default defineConfig({
  server: {
    port: 2000,
  },
  tools: {
    rspack: (_config, { appendPlugins }) => {
      appendPlugins([
        new ModuleFederationPlugin({
          name: "host",
          shared: [
            {
              react: {
                requiredVersion: dependencies["react"],
                singleton: true,
              },
            },
            {
              "react-dom": {
                requiredVersion: dependencies["react-dom"],
                singleton: true,
              },
            },
            "@tanstack/react-query",
            "@noriginmedia/norigin-spatial-navigation",
            "react-router-dom",
            {
              "@emotion/react": {
                requiredVersion: dependencies["@emotion/react"],
                singleton: true,
              },
            },
            "@emotion/styled",
            "@mui/material",
          ],
        }),
      ]);
    },
  },
  plugins: [pluginReact()],
});
