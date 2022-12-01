import React from "react";

import "./App.styles.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";

const app = () => {
  return (
    <>
      <Header />
      <HomePage />
    </>
  );
};

export default app;
