import { config } from "@/config";
import { IAuth } from "@/types/auth.type";
import { ICreateUser } from "@/types/create-user.type";
import axios from "axios";

export class UserService {
  constructor() {}

  public signup = async (formData: ICreateUser) => {
    try {
      const { serverUrl } = config;
      const response = await axios.post(serverUrl + "auth/register", formData);
      return response.data;
    } catch (error) {
      return error;
    }
  };

  public login = async (formData: IAuth) => {
    try {
      const { serverUrl } = config;
      const response = await axios.post(serverUrl + "auth/login", formData);
      return response;
    } catch (error) {
      return error;
    }
  };
}
