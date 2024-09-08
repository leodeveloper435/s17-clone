import api from "./api";

interface FuntionProps<T> {
  url?: string;
  body?: T;
}

export const getAllCamposByUserId = async <T>({ url }: FuntionProps<T>) =>
  await api.get(`/campo/user/${url}`);

export const createCampo = async <T>({ body }: FuntionProps<T>) =>
  await api.post("/campo", body);
