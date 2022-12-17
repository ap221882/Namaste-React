import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { SelectByCity, Card } from "../../components";
import { IUser } from "../../types";

type Props = {};

const SearchGithubUsers = (props: Props) => {
  const [selectedCity, setSelectedCity] = useState<string>("Gurugram");
  const [searchResults, setSearchResults] = useState<IUser[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const usersResponse = await fetch(
          `https://api.github.com/search/users?q=location%3A${selectedCity}`
        );
        const userData = await usersResponse.json();
        const topTenResults = userData?.items.splice(1, 10);
        setSearchResults(topTenResults);
        console.log(topTenResults, "topTenResults");
      } catch (error) {
        alert(error);
      }
    })();
  }, [selectedCity]);

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
