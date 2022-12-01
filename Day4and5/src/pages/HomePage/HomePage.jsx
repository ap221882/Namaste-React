import React, { useState } from "react";

import Cards from "../../components/Cards/Cards";
import Header from "../../components/Header/Header";
import Search from "../../components/SearchComponent/Search";

import Data from "../../pages/HomePage/AvengersData.json";

const homePage = () => {
  const [avengersData, setAvengersData] = useState(Data);
  return (
    <>
      <Header />
      <Search setAvengersData={setAvengersData} avengersData={avengersData} />
      <Cards Data={avengersData} />
    </>
  );
};

export default homePage;
