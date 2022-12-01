import React from "react";

import * as classes from "./Search.styles.module.css";

const search = () => {
  return (
    <form className={classes.search__bar}>
      <div className={classes.search__icon__container}>
        <i className='fa-solid fa-magnifying-glass'></i>
      </div>
      <input type='text' placeholder='Search' />
    </form>
  );
};

export default search;
