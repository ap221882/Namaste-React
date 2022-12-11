import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages";
import { ShowButton } from "./components";
import { Members } from "./containers";
import MemberInfo from "./containers/MemberInfo/MemberInfo";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const myAppRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <ShowButton /> },
      {
        path: "/members",
        element: <Members />,
      },
      {
        path: "/members/:id",
        element: <MemberInfo />,
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
