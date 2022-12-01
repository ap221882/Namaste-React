import React, { useState } from "react";

import * as classes from "./Search.styles.module.css";
import Data from "../../pages/HomePage/AvengersData.json";
import { filterValues } from "../../utils";

const search = ({ avengersData, setAvengersData }) => {
  // State to preserve the input entered when enter is pressed
  const [searchValue, setSearchValue] = useState("");

  /**
   * Handler for setting searchValue state
   */
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // If no input provided then display all the data
    if ((e.target.value = "")) {
      setAvengersData(Data);
      return;
    }

    // Filters the results from the hardcoded json
    const searchedResults = filterValues(Data, searchValue);
    setAvengersData(searchedResults);
  };

  return (
    <form className={classes.search__bar} onSubmit={handleSubmit}>
      <div className={classes.search__icon__container}>
        <i className='fa-solid fa-magnifying-glass'></i>
      </div>
      <input type='text' placeholder='Search' onChange={handleChange} />
    </form>
  );
};

export default search;
