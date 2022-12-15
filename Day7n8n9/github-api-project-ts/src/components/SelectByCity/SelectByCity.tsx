import React, { useEffect, useState } from "react";

import data from "../../utils/state-city-data.json";

type Props = {};

const SelectByCity = (props: Props) => {
  const [states, setStates] = useState<Array<string>>([]);
  const [selectedState, setSelectedState] = useState<string>("Madhya Pradesh");

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(e.target.value);
  };

  useEffect(() => {
    setStates(Object.keys(data));
  }, []);

  return (
    <>
      <select onChange={handleStateChange}>
        {states.map((state) => (
          <option value={state} key={state}>
            {state}
          </option>
        ))}
      </select>
      <select name='' id=''>
        {(data as Record<string, Array<string>>)?.[selectedState].map(
          (city) => (
            <option value={city} key={city}>
              {city}
            </option>
          )
        )}
      </select>
    </>
  );
};

export default SelectByCity;
