import React, { Dispatch, SetStateAction } from "react";

import data from "../../utils/state-city-data.json";
import Option from "../Select/Option";
import SelectHeading from "./SelectHeading";

type Props = {
  selectedCity: string;
  setSelectedCity: Dispatch<SetStateAction<string>>;
  selectedState: string;
  setSelectedState: Dispatch<SetStateAction<string>>;
  states: string[];
  isDark: boolean;
};

const SelectByCity = ({
  setSelectedCity,
  states,
  selectedState,
  setSelectedState,
  selectedCity,
  isDark,
}: Props) => {
  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(e.target.value);
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div>
      <SelectHeading isDark={isDark} />
      <select value={selectedState} onChange={handleStateChange}>
        {states.map((state) => (
          <Option value={state}>{state}</Option>
        ))}
      </select>
      <select value={selectedCity} onChange={handleCityChange}>
        {(data as Record<string, Array<string>>)?.[selectedState]?.map(
          (city) => (
            <Option value={city}>{city}</Option>
          )
        )}
      </select>
    </div>
  );
};

export default SelectByCity;
