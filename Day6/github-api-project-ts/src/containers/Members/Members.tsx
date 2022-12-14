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
      console.log(data, "data");
      setMembersData(data);
    });
  }, []);

  // useEffect(() => {
  //   const promises = fetchData();
  //   const getData = () => {
  //     AvengersIds.forEach(async (avengerId, index) => {
  //       try {
  //         const response = await getUserData(avengerId.id);
  //         avengerData.push(response.data);
  //         if (index + 1 === AvengersIds.length) {
  //           setMembersData([...avengerData]);
  //         }
  //       } catch (err) {
  //         alert(err);
  //       }
  //     });
  //   };
  //   getData();
  //   // console.log(avengerData, "avengerData");
  //   // setMembersData([...avengerData]);
  // }, []);

  console.log(membersData, "membersData");

  return (
    <section className={classes.member__container}>
      {membersData.map((member) => {
        return <Card key={member.id} avenger={member} />;
      })}
    </section>
  );
};

export default Members;
