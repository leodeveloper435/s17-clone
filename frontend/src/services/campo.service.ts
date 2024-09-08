import api from "./api";

interface FuntionProps<T> {
  url?: string;
  body?: T;
}

export const getAllCamposByUserId = async <T>({ url }: FuntionProps<T>) =>
  await api.get(`/campo/user/${url}`);
