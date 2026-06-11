import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createMemoryHistory,
  createRouter,
  createRootRoute,
} from "@tanstack/react-router";
import { HomePage } from "./home";
import "./styles.css";

// Create root route
const rootRoute = createRootRoute({
  component: HomePage,
});

// Create router
const router = createRouter({
  routeTree: rootRoute,
  history: createMemoryHistory({
    initialEntries: ["/"],
  }),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
