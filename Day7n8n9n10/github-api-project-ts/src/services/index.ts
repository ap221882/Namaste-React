import axios from "axios";

import { IUser } from "../types";
import { AvengersIds } from "../containers/Members/membersData";

const endpoint = "https://api.github.com/users/";

const getUserData = (): Promise<IUser[]> => {
  const responsePromiseArray = axios.all(
    AvengersIds.map((avenger) =>
      axios.get(`${endpoint}${avenger.id}`).then((res) => res.data)
    )
  );
  return responsePromiseArray;
};

const getUserSearchResults = (selectedCity: string): Promise<IUser[]> => {
  return axios
    .get(`https://api.github.com/search/users?q=location%3A${selectedCity}`)
    .then((response) => response.data?.items);
};

export { getUserData, getUserSearchResults };
