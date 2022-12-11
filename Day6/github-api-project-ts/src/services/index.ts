import axios from "axios";
import { IUser } from "../types";

const endpoint = "https://api.github.com/users/";

interface IUserDataResponse {
  data: IUser;
}

const getUserData = (user: string): Promise<IUserDataResponse> =>
  axios.get(`${endpoint}${user}`);

export { getUserData };
