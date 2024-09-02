import api from "./api";

// ejemplo
interface FuntionProps<T> {
  url?: string;
  body?: T;
}

export const registerUser = <T>({ body }: FuntionProps<T>) =>
  api.post("/register", body);

export const loginUser = <T>({ body }: FuntionProps<T>) =>
  api.post("/login", body);
