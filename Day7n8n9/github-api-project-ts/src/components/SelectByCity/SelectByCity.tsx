import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

import data from "../../utils/state-city-data.json";
import classes from "./selectByCity.styles.module.css";

type Props = {
  setSelectedCity: Dispatch<SetStateAction<string>>;
};

const SelectByCity = ({ setSelectedCity }: Props) => {
  const [states, setStates] = useState<Array<string>>([]);
  const [selectedState, setSelectedState] = useState<string>(
    "Andaman and Nicobar Islands"
  );

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(e.target.value);
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value);
  };

  useEffect(() => {
    setStates(Object.keys(data));
  }, []);

  return (
    <div className={classes.select__container}>
      <select onChange={handleStateChange}>
        {states.map((state) => (
          <option value={state} key={state}>
            {state}
          </option>
        ))}
      </select>
      <select onChange={handleCityChange}>
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
