import React from "react";
import Data from "../../pages/HomePage/AvengersData";
import Card from "../Card/Card";
import * as classes from "./Cards.styles.module.css";

const Cards = () => {
  return (
    <div className={classes.card__container}>
      {Data.map((singleData) => {
        return <Card singleData={singleData} key={singleData.id} />;
      })}
    </div>
  );
};

export default Cards;
