import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RoutesComponent from "./components/routes/Routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RoutesComponent />
  </React.StrictMode>
);
