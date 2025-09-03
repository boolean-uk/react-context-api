import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import { TweeterProvider } from "./contexts/tweeterContext.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <TweeterProvider>
        <App />
      </TweeterProvider>
    </ThemeProvider>
  </React.StrictMode>
);
