import { useState, useEffect } from "react";

import { getUserSearchResults } from "../services";
import { IUser } from "../types";
import { useThemeContext } from "../contexts/ThemeContext";

const useFetchUsersByCity = (selectedCity: string) => {
  const [searchResults, setSearchResults] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(false);
  const { mode } = useThemeContext();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const userData = await getUserSearchResults(selectedCity);
        const topTenResults = userData?.splice(1, 10);
        setSearchResults(topTenResults);
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [selectedCity]);

  return { searchResults, loading, mode };
};

export default useFetchUsersByCity;
