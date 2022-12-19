import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { SelectByCity, Card } from "../../components";
import useFetchUserByCity from "../../hooks/useFetchUsersByCity";
import { Loader } from "../../components";
import data from "../../utils/state-city-data.json";
import classes from "./searchGithubUsers.styles.module.css";
import { useThemeContext } from "../../contexts/ThemeContext";

const SearchGithubUsers = () => {
  const [states, setStates] = useState<Array<string>>([]);
  const [selectedState, setSelectedState] = useState<string>(
    "Andaman and Nicobar Islands"
  );
  const [selectedCity, setSelectedCity] = useState<string>("Gurugram");

  const { searchResults, loading } = useFetchUserByCity(selectedCity);
  const { mode } = useThemeContext();

  useEffect(() => {
    setStates(Object.keys(data));
  }, []);

  useEffect(() => {
    setSelectedCity(
      (data as Record<string, Array<string>>)?.[selectedState][0]
    );
  }, [selectedState]);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <div className={classes.search__container}>
        <SelectByCity
          setSelectedCity={setSelectedCity}
          selectedCity={selectedCity}
          states={states}
          selectedState={selectedState}
          setSelectedState={setSelectedState}
        />
        {searchResults?.length ? (
          <>
            <div
              className={`${classes.searchResults__heading} ${
                mode === "dark" ? `${classes.dark_header}` : ""
              }`}
            >
              <h3
                className={`${mode === "dark" ? `${classes.dark_header}` : ""}`}
              >
                Top 10 results
              </h3>
            </div>
            <section className={classes.searchitem__container}>
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
          <h2 className={`${mode === "dark" ? `${classes.dark_header}` : ""}`}>
            No Search Results Found!
          </h2>
        )}
      </div>
    );
  }
};

export default SearchGithubUsers;
