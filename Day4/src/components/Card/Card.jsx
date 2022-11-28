import React from "react";
import * as classes from "./Card.styles.module.css";
import Data from "../../pages/HomePage/AvengersData";

const Card = () => {
  const data = Data[0];
  console.log(classes);
  return (
    <section className={classes.card__container}>
      <article className='img__container'>
        <img src={data.imageSrc} alt={`${data.name}'s Image`} />
      </article>
      <article className='info__container'>
        <h3>{data.name}</h3>
        <h4>{data.place}</h4>
        <p>{data.company}</p>
        <p>{data.designation}</p>
      </article>
    </section>
  );
};

export default Card;
