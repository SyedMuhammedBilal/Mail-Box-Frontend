import { server_url } from "@/config";
import { IAuth } from "@/types/auth.type";
import { ICreateUser } from "@/types/create-user.type";
import axios from "axios";

export class UserService {
  constructor() {}

  public signup = async (formData: ICreateUser) => {
    try {
      const response = await axios.post(server_url + "auth/register", formData);
      return response.data;
    } catch (error) {
      return error;
    }
  };

  public login = async (formData: IAuth) => {
    try {
      const response = await axios.post(server_url + "auth/login", formData, {
        withCredentials: true,
      });
      return response;
    } catch (error) {
      return error;
    }
  };
}
