import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Card } from "../../components";
import { getUserData } from "../../services";
import { IUser } from "../../types";
import classes from "./member.styles.module.css";

const Members = () => {
  const [membersData, setMembersData] = useState<IUser[]>([]);

  useEffect(() => {
    (async () => {
      const promisesResponseArray = await getUserData();
      setMembersData(promisesResponseArray);
    })();
  }, []);

  return (
    <section className={classes.member__container}>
      {membersData.map((member) => {
        return (
          <Link to={`/members/${member?.login}`}>
            <Card key={member.id} avenger={member} />;
          </Link>
        );
      })}
    </section>
  );
};

export default Members;
