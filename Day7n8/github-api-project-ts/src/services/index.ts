import axios from "axios";
import { IUser } from "../types";

import { AvengersIds } from "../containers/Members/membersData";
const endpoint = "https://api.github.com/users/";

// interface IUserDataResponse {
//   data: IUser;
// }

const getUserData = (): Promise<IUser[]> => {
  const responsePromiseArray = axios.all(
    AvengersIds.map((avenger) =>
      axios.get(`${endpoint}${avenger.id}`).then((res) => res.data)
    )
  );
  return responsePromiseArray;
};

export { getUserData };
