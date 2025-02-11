import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import Temp from "./Temp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <Temp /> */}
  </React.StrictMode>
);
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
      navigator.serviceWorker
          .register("/service-worker.js")
          .then((registration) => {
              console.log("Service Worker registered:", registration);
          })
          .catch((error) => {
              console.log("Service Worker registration failed:", error);
          });
  });
}
{
  /* Temp component is used to implement new features and to test them before integrating them into the main app. */
}
