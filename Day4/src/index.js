import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const myRootElement = document.getElementById("root");

const reactRootElement = ReactDOM.createRoot(myRootElement);

const RootJsxElement = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

reactRootElement.render(<RootJsxElement />);
