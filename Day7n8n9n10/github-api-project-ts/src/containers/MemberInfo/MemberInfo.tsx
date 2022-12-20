import React from "react";
import { useParams } from "react-router-dom";

import classes from "./memberInfo.module.css";

const MemberInfo = () => {
  const { id } = useParams();
  return (
    <section>
      <article className={classes.info__container}>
        <header>MemberInfo</header>
        <div>{id}</div>
      </article>
      <article className={classes.image__container}>
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${id}`}
          alt={`readme-stats-${id}`}
          className={classes.stats__image}
        />
        <img
          src={`https://github-readme-streak-stats.herokuapp.com/?user=${id}&layout=compact`}
          alt={`ongoing-streak-${id}`}
          className={classes.streak__image}
        />
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs?username=${id}&layout=compact`}
          alt={`most-used-languages-${id}`}
          className={classes.lang__image}
        />
      </article>
    </section>
  );
};

export default MemberInfo;
