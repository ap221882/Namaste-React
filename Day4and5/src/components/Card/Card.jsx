import React from "react";

import * as classes from "./Card.styles.module.css";

const card = ({ singleData: data }) => (
  <section className={classes.card__container}>
    <article className={classes.img__container}>
      <img
        src={
          data?.imageSrc
            ? data.imageSrc
            : "https://www.seekpng.com/png/detail/115-1150053_avatar-png-transparent-png-royalty-free-default-user.png"
        }
        alt={`${data.name}'s Image`}
      />
      <div className={classes.overlay}></div>
    </article>
    <article className={classes.info__container}>
      <h3>{data.name}</h3>
      <div className={classes.separator}></div>
      <h4>{data.place}</h4>
      <p className={classes.company}>{data.company}</p>
      <p>{data.designation}</p>
    </article>
  </section>
);

export default card;
