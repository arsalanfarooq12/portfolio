import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import your main App component
import "./index.css"; // Optional: Import global styles

// Create a root element to render the app
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
