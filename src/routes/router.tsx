import { createBrowserRouter, Navigate } from "react-router-dom";
import React from "react";
import Dashboard from "@/pages/Dashboard";

import Layout from "@/layouts/BaseLayout";

const Order = React.lazy(() => import("@/pages/Order"));
const Product = React.lazy(() => import("@/pages/Product"));

const routes = [
  {
    path: "/",
    element: <Navigate to="/dashboard" />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/orders",
        element: <Order />,
      },
      {
        path: "/products",
        element: <Product />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
