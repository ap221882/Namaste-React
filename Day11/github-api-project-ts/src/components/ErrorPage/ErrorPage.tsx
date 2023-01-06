import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error: any = useRouteError();
  return (
    <section>
      <h1>Oops!</h1>
      <article>
        <p>Sorry, an unexpected error has occured.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <p>
          <i>{error.status}</i>
        </p>
      </article>
    </section>
  );
};

export default ErrorPage;
