import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
//import App from "./App.jsx";
import Landing from "./screens/Landing.jsx";
import Contact from "./screens/Contact.jsx";
import Team from "./screens/Team.jsx";
import Services from "./screens/Services.jsx";
import Home from "./screens/Home.jsx";
import Works from "./screens/Works.jsx";
import Partners from "./screens/Partners.jsx";

import "./index.css";
import "./scss/index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <Landing />,
  },

  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/works",
    element: <Works />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/partners",
    element: <Partners />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
