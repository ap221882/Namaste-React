import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { SelectByCity, Card } from "../../components";
import useFetchUserByCity from "../../hooks/useFetchUsersByCity";
import { Loader } from "../../components";
import data from "../../utils/state-city-data.json";
import Header from "./SearchGithubUsersUI/Heading";

const SearchGithubUsers = () => {
  const [states, setStates] = useState<Array<string>>([]);
  const [selectedState, setSelectedState] = useState<string>(
    "Andaman and Nicobar Islands"
  );
  const [selectedCity, setSelectedCity] = useState<string>("Gurugram");

  const { searchResults, loading, mode } = useFetchUserByCity(selectedCity);

  useEffect(() => {
    setStates(Object.keys(data));
  }, []);

  useEffect(() => {
    setSelectedCity(
      (data as Record<string, Array<string>>)?.[selectedState][0]
    );
  }, [selectedState]);

  const isDark = mode === "dark";

  if (loading) {
    return <Loader />;
  } else {
    return (
      <div>
        <SelectByCity
          setSelectedCity={setSelectedCity}
          selectedCity={selectedCity}
          states={states}
          selectedState={selectedState}
          setSelectedState={setSelectedState}
          isDark={isDark}
        />
        {searchResults?.length ? (
          <>
            <div>
              <Header text='Top 10 results' isDark={isDark} />
            </div>
            <section>
              {searchResults.map((member) => {
                return (
                  <Link key={member.id} to={`/members/${member?.login}`}>
                    <Card avenger={member} />
                  </Link>
                );
              })}
            </section>
          </>
        ) : (
          <Header text='No Search Results Found!' isDark={isDark} />
        )}
      </div>
    );
  }
};

export default SearchGithubUsers;
