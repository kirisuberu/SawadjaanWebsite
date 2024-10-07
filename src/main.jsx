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
import "./index.css";
import "./scss/index.scss";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Landing />} />)
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
