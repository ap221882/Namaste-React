import { useState, useEffect } from "react";

import { getUserSearchResults } from "../services";
import { IUser } from "../types";

const useFetchUsersByCity = (selectedCity: string) => {
  const [searchResults, setSearchResults] = useState<IUser[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const userData = await getUserSearchResults(selectedCity);
        const topTenResults = userData?.splice(1, 10);
        setSearchResults(topTenResults);
        console.log(topTenResults, "topTenResults");
      } catch (error) {
        alert(error);
      }
    })();
  }, [selectedCity]);

  return searchResults;
};

export default useFetchUsersByCity;
