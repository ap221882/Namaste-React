import React, { Dispatch, SetStateAction } from "react";

import data from "../../utils/state-city-data.json";
import classes from "./selectByCity.styles.module.css";

type Props = {
  selectedCity: string;
  setSelectedCity: Dispatch<SetStateAction<string>>;
  selectedState: string;
  setSelectedState: Dispatch<SetStateAction<string>>;
  states: string[];
};

const SelectByCity = ({
  setSelectedCity,
  states,
  selectedState,
  setSelectedState,
  selectedCity,
}: Props) => {
  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(e.target.value);
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div className={classes.select__container}>
      <div className={classes.select__header}>
        <h3>Select any city to search users</h3>
      </div>
      <select value={selectedState} onChange={handleStateChange}>
        {states.map((state) => (
          <option value={state} key={state}>
            {state}
          </option>
        ))}
      </select>
      <select value={selectedCity} onChange={handleCityChange}>
        {(data as Record<string, Array<string>>)?.[selectedState].map(
          (city) => (
            <option value={city} key={city}>
              {city}
            </option>
          )
        )}
      </select>
    </div>
  );
};

export default SelectByCity;
