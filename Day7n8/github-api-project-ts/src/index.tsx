import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages";
import { ShowButton } from "./components";
import { Members } from "./containers";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const myAppRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      { index: true, element: <ShowButton /> },
      {
        path: "/members",
        element: <Members />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={myAppRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
