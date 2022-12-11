import React from "react";

import { Navbar, Header, Members } from "../../containers";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <Navbar />
      <Header />
      <Members />
    </>
  );
};

export default HomePage;
