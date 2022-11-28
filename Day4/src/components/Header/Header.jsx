import React from "react";
import * as classes from "./Header.styles.module.css";

const header = () => {
  return (
    <div className={classes.banner__container}>
      <div className={classes.team__info}></div>
      <h3>Avengers</h3>
      <p>Team A</p>
    </div>
  );
};

export default header;
