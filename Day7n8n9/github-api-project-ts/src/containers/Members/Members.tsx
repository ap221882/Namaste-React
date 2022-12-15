import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Card, Loader } from "../../components";
import SelectByCity from "../../components/SelectByCity/SelectByCity";
import { getUserData } from "../../services";
import { IUser } from "../../types";
import classes from "./member.styles.module.css";

class Members extends Component<{}, { membersData: IUser[]; loader: boolean }> {
  state: { membersData: IUser[]; city: string; loader: boolean } = {
    membersData: [],
    city: "",
    loader: false,
  };

  componentDidMount() {
    (async () => {
      try {
        this.setState({ loader: true });
        const promisesResponseArray = await getUserData();
        if (this.state.city) {
          console.log(promisesResponseArray, "promisesResponseArray");
        }
        console.log(promisesResponseArray, "promisesResponseArray");
        this.setState({ membersData: promisesResponseArray });
      } catch (err) {
        alert(err);
      } finally {
        this.setState({ loader: false });
      }
    })();
  }

  render() {
    const isLoading = this.state.loader;
    if (isLoading) {
      return <Loader />;
    } else {
      return (
        <>
          <SelectByCity />
          <section className={classes.member__container}>
            {this.state.membersData.map((member) => {
              return (
                <Link key={member.id} to={`/members/${member?.login}`}>
                  <Card avenger={member} />;
                </Link>
              );
            })}
          </section>
        </>
      );
    }
  }
}

export default Members;
