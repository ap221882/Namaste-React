import React from "react";

import * as classes from "./Cards.styles.module.css";
import Data from "../../pages/HomePage/AvengersData";
import Card from "../Card/Card";

const cards = () => (
  <div className={classes.card__container}>
    {Data.map((singleData) => {
      return <Card singleData={singleData} key={singleData.id} />;
    })}
  </div>
);

export default cards;
