import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "../pages";
import { ErrorPage } from "../components";
import {
  Members,
  SearchGithubUsers,
  MemberInfo,
  Navigator,
} from "../containers";

export const myAppRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigator /> },
      {
        path: "/members",
        element: <Members />,
      },
      {
        path: "/search",
        element: <SearchGithubUsers />,
      },
      {
        path: "/members/:id",
        element: <MemberInfo />,
      },
    ],
  },
]);
