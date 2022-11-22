import React from "react";
import ReactDOM from "react-dom/client";

//creating a heading react element to render
const heading = React.createElement(
  "h1",
  { atrribute: "reactElement" },
  "Hello React"
);

// creating a root element which will render through react
const root = ReactDOM.createRoot(document.getElementById("myrootelement"));

root.render(heading);
