import React from "react";
import { useParams } from "react-router-dom";

const MemberInfo = () => {
  const { id } = useParams();
  return (
    <section>
      <article>
        <header>MemberInfo</header>
        <div>{id}</div>
      </article>
      <article>
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${id}`}
          alt={`readme-stats-${id}`}
        />
        <img
          src={`https://github-readme-streak-stats.herokuapp.com/?user=${id}&layout=compact`}
          alt={`ongoing-streak-${id}`}
        />
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs?username=${id}&layout=compact`}
          alt={`most-used-languages-${id}`}
        />
      </article>
    </section>
  );
};

export default MemberInfo;
