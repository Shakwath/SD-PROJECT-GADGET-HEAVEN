import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import Dashboard from "./Components/Pages/Dashboard";
import Statistics from "./Components/Pages/Statistics";
import Details from "./Components/Pages/Details";
import Contact from "./Components/Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <div>Page not found</div>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "dashboard",
        element: <Dashboard ></Dashboard>,
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/details/:id",
        element: <Details />,
        loader: async () => {
          console.log("loader running");
          const response = await fetch("gadgets.json");
          console.log("done");
          if (!response.ok) {
            console.log("running");
            throw new Error("Failed to fetch gadgets data");
          }
          return response.json();
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);