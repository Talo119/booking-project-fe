import { AxiosInstance } from "axios";
import { CreateUser, ViewUser } from "./models/User.model";

export const userDatasource = (axios: AxiosInstance) => {
  return {
    getUsers: async (): Promise<ViewUser[]> => {
      const resp = await axios.get<ViewUser[]>('/auth');
      return resp.data;
    },
    getUsersById: async (id:string): Promise<ViewUser> => {
        const resp = await axios.get<ViewUser>(`/auth/${id}`);
        return resp.data;
      },
    registerUser: async(user: CreateUser): Promise<ViewUser> => {
        const resp = await axios.post<ViewUser>('/auth/register', user);
        return resp.data;
    }
  };
};
