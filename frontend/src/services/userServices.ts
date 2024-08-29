import api from "./api";

// ejemplo
interface FuntionProps<T> {
  url?: string;
  body?: T;
}
export const getUserById = <T>({ url }: FuntionProps<T>) => {
  return api.get(`/data/${url}`);
};
