/* eslint-disable tsdoc/syntax */
import React from "react";
import { Outlet } from "react-router-dom";

import { Navbar, Header } from "../../containers";
import classes from "./homePage.styles.module.css";
import { useThemeContext } from "../../contexts/ThemeContext";

/**
 * @purpose - For checking the functionality of dynamic imports
 */

// import("../../components/Buttons/ShowButton/ShowButton")
//   .then((a) => {
//     const { default: ShowButton } = a;
//     console.log(ShowButton());
//     console.log(a);
//   })
//   .catch((err) => console.error("An error occured while loading the module"));

const HomePage = () => {
  const { mode } = useThemeContext();

  return (
    <main className={mode === "dark" ? classes.dark : ""}>
      <Navbar />
      <Header />
      <Outlet />
    </main>
  );
};

export default HomePage;
