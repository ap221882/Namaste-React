import React, { useState } from "react";
import { Link } from "react-router-dom";

import { SelectByCity, Card } from "../../components";
import useFetchUserByCity from "../../hooks/useFetchUsersByCity";
import { Loader } from "../../components";

type Props = {};

const SearchGithubUsers = (props: Props) => {
  const [selectedCity, setSelectedCity] = useState<string>("Gurugram");

  const { searchResults, loading } = useFetchUserByCity(selectedCity);

  console.log(searchResults, "searchResults");

  if (loading) {
    return <Loader />;
  } else {
    return (
      <>
        <SelectByCity setSelectedCity={setSelectedCity} />
        {searchResults ? (
          <section>
            {searchResults.map((member) => {
              return (
                <Link key={member.id} to={`/members/${member?.login}`}>
                  <Card avenger={member} />;
                </Link>
              );
            })}
          </section>
        ) : (
          <h2>No Search Results Found!</h2>
        )}
      </>
    );
  }
};

export default SearchGithubUsers;
