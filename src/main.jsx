import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import App from "./App.jsx";
import Landing from "./screens/Landing.jsx";
import "./index.css";
import "./scss/index.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Landing />
  </StrictMode>
);
