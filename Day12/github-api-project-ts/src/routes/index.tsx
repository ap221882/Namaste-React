import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

import { HomePage, Login } from "../pages";
import { ErrorPage, Loader } from "../components";
import { Members, MemberInfo, Navigator } from "../containers";

const SearchGithubUsers = lazy(
  () => import("../containers/SearchGithubUsers/SearchGithubUsers"),
);

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
        element: (
          <Suspense fallback={<Loader />}>
            <SearchGithubUsers />
          </Suspense>
        ),
      },
      {
        path: "/members/:id",
        element: <MemberInfo />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
