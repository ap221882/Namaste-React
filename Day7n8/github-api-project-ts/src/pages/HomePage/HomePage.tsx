import React from "react";
import { Outlet } from "react-router-dom";

import { Navbar, Header } from "../../containers";

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <Outlet />
    </main>
  );
};

export default HomePage;
