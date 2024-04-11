import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ContextProvider } from "./Context/Context";
import { UserAuthContextProvider } from "./Context/LoginSignup";
import { BrowserRouter } from "react-router-dom/dist";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ContextProvider>
      <UserAuthContextProvider>
        <App />
      </UserAuthContextProvider>
    </ContextProvider>
  </BrowserRouter>
);

reportWebVitals();
