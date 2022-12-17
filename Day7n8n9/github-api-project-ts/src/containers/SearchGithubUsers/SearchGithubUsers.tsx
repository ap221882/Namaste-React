import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { SelectByCity, Card } from "../../components";
import useFetchUserByCity from "../../hooks/useFetchUsersByCity";

type Props = {};

const SearchGithubUsers = (props: Props) => {
  const [selectedCity, setSelectedCity] = useState<string>("Gurugram");

  const searchResults = useFetchUserByCity(selectedCity);

  return (
    <>
      <SelectByCity
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />
      <section>
        {searchResults.map((member) => {
          return (
            <Link key={member.id} to={`/members/${member?.login}`}>
              <Card avenger={member} />;
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default SearchGithubUsers;
