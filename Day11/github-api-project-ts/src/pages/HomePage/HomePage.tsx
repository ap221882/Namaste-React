import React from "react";
import { Outlet } from "react-router-dom";

import { Navbar, Header } from "../../containers";
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
    <main>
      <Navbar />
      <Header />
      <Outlet />
    </main>
  );
};

export default HomePage;
