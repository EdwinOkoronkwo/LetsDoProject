import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "antd/dist/reset.css"; // or 'antd/dist/antd.css' depending on the version
import { ModalProvider } from "./context/modalContext";
import { AuthProvider } from "./context/authContext"; // Import your AuthContext provider

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      {" "}
      {/* Wrap the AuthProvider around your app */}
      <ModalProvider>
        <App />
      </ModalProvider>
    </AuthProvider>
  </React.StrictMode>
);
