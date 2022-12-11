import React, { useEffect, useState } from "react";

import { Card } from "../../components";
import { getUserData } from "../../services";
import { IUser } from "../../types";
import classes from "./member.styles.module.css";
import { AvengersIds } from "./membersData";

const Members = () => {
  const [membersData, setMembersData] = useState<IUser[]>([]);

  const fetchData = () => {
    return AvengersIds.map(async (avengerId) => {
      const res = await getUserData(avengerId.id);
      return res.data;
    });
  };

  useEffect(() => {
    const promises = fetchData();
    Promise.all(promises).then((data) => {
      setMembersData(data);
    });
  }, []);

  return (
    <section className={classes.member__container}>
      {membersData.map((member) => {
        return <Card key={member.id} avenger={member} />;
      })}
    </section>
  );
};

export default Members;
