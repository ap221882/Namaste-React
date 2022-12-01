import React from "react";

import Cards from "../../components/Cards/Cards";
import Header from "../../components/Header/Header";
import Search from "../../components/SearchComponent/Search";

const homePage = () => (
  <>
    <Header />
    <Search />
    <Cards />
  </>
);

export default homePage;
