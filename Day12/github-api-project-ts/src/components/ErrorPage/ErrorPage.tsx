import React from "react";
import { useRouteError } from "react-router-dom";

import "./errors.css";

interface IRouteError {
  statusText: string;
  message: string;
  status: number;
}

const ErrorPage = () => {
  const error: unknown = useRouteError();
  return (
    <section className="error__page">
      <h1>Oops!</h1>
      <article>
        <p>Sorry, an unexpected error has occured.</p>
        <p>
          <i>
            {(error as IRouteError).statusText ||
              (error as IRouteError).message}
          </i>
        </p>
        <p>
          <i>{(error as IRouteError).status}</i>
        </p>
      </article>
    </section>
  );
};

export default ErrorPage;
