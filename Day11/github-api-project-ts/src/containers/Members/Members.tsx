import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Card, Loader } from "../../components";
import { getUserData } from "../../services";
import { IUser } from "../../types";

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
        <section>
          {this.state.membersData.map((member) => (
            <Link key={member.id} to={`/members/${member?.login}`}>
              <Card avenger={member} />
            </Link>
          ))}
        </section>
      );
    }
  }
}

export default Members;
