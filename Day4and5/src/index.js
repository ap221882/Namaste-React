import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const myRootElement = document.getElementById("root");

const reactRootElement = ReactDOM.createRoot(myRootElement);
console.log(useState);

const RootJsxElement = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reactRootElement.render(<RootJsxElement />);
