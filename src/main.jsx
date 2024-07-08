// src/index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./tailwind.css"; // Import Tailwind CSS
import "./index.css"; // Import any additional global CSS if needed
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
