import React from "react";
import * as classes from "./Card.styles.module.css";
import Data from "../../pages/HomePage/AvengersData";

const Card = ({ singleData }) => {
  return (
    <section className={classes.card__container}>
      <article className={classes.img__container}>
        <img
          src={
            singleData?.imageSrc
              ? singleData.imageSrc
              : "https://www.seekpng.com/png/detail/115-1150053_avatar-png-transparent-png-royalty-free-default-user.png"
          }
          alt={`${singleData.name}'s Image`}
        />
        <div className={classes.overlay}></div>
      </article>
      <article className={classes.info__container}>
        <h3>{singleData.name}</h3>
        <div className={classes.separator}></div>
        <h4>{singleData.place}</h4>
        <p className={classes.company}>{singleData.company}</p>
        <p>{singleData.designation}</p>
      </article>
    </section>
  );
};

export default Card;
