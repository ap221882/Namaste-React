import React from "react";

import * as classes from "./Cards.styles.module.css";
import Card from "../Card/Card";

const cards = ({ Data }) => (
  <div className={classes.card__container}>
    {Data.map((singleData) => {
      return <Card singleData={singleData} key={singleData.id} />;
    })}
  </div>
);

export default cards;
