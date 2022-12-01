import React, { useState } from "react";

import Cards from "../../components/Cards/Cards";
import Header from "../../components/Header/Header";
import Search from "../../components/SearchComponent/Search";

import Data from "../../pages/HomePage/AvengersData";

const homePage = () => {
  const [avengersData] = useState(Data);
  return (
    <>
      <Header />
      <Search />
      <Cards Data={avengersData} />
    </>
  );
};

export default homePage;
