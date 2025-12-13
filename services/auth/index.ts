import { api } from "@/services";
import { Account, Login, LoginResponse } from "@/types";
import { AxiosResponse } from "axios";

export const login = async (login: Login): Promise<LoginResponse> => {
  const response: AxiosResponse<LoginResponse> = await api.post("/auth/login", login);

  return response.data;
}

export const loadProfile = async (): Promise<Account> => {
  const response: AxiosResponse<Account> = await api.get("/auth/profile");
  return response.data;
}
