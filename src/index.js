import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UserAuthContextProvider } from "./Context/GoggleAuth";
import { BrowserRouter } from "react-router-dom/dist";
import { TestContextProvider } from "./Context/GetallTest";
import { UserContextProvider } from "./Context/GetUsers";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <UserAuthContextProvider>
      <TestContextProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </TestContextProvider>
    </UserAuthContextProvider>
  </BrowserRouter>
);

reportWebVitals();
