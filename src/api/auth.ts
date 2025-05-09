import axios from "./axios";
import { RegisterData, LoginData, AuthResponse } from "@/types/auth";

export const registerUser = (data: RegisterData) => {
  return axios.post("/auth/signup", data);
};

export const loginUser = (data: LoginData) => {
  return axios.post<AuthResponse>("/auth/login", data);
};
