import { FuntionProps } from "@/types/generalTypes";
import api from "./api";

export const registerUser = <T>({ body }: FuntionProps<T>) =>
  api.post("/auth/register", body);

export const loginUser = <T>({ body }: FuntionProps<T>) =>
  api.post("/auth/login", body);

export const getUserById = <T>({ url }: FuntionProps<T>) => {
  return api.get(`/data/${url}`);
};
