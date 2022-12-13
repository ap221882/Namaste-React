import React from "react";
import { Link } from "react-router-dom";

import classes from "./showButton.styles.module.css";

const ShowButton = () => {
  return (
    <Link to={`/members`}>
      <button className={classes.show__button}>Show</button>
    </Link>
  );
};

export default ShowButton;
