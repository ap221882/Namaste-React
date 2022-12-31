import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

import "./index.css";
import { myAppRouter } from "./routes";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import appStore from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <ThemeContextProvider>
        <RouterProvider router={myAppRouter} />
      </ThemeContextProvider>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
