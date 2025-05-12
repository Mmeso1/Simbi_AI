import axios from "./axios";
import {
  RegisterData,
  LoginData,
  AuthResponse,
  MeResponse,
} from "@/types/auth";
import { AxiosResponse } from "axios";

export const registerUser = (data: RegisterData) => {
  return axios.post("/auth/signup", data);
};

export const loginUser = (data: LoginData) => {
  return axios.post<AuthResponse>("/auth/login", data);
};

export const fetchCurrentUser = (): Promise<AxiosResponse<MeResponse>> => {
  return axios.get<MeResponse>("/users/me");
};
