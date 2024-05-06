import React from "react";
import ReactDOM from "react-dom/client";
import HostApp, { Welcome } from "./App";
import RemoteComponent from "./RemoteComponent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { remotes } from "./remotes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HostApp />,
    children: [
      { path: "/", element: <Welcome /> },
      ...remotes.map((remote) => ({
        path: `/${remote.alias}`,
        element: <RemoteComponent path={`${remote.alias}/app`} />,
      })),
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
