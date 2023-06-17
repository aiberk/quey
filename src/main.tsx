import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "app/app";

const root = document.getElementById("root");

if (root !== null) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
