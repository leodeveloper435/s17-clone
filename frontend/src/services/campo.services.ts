import api from "./api";

interface queryProps {
  [key: string]: string;
}

interface FuntionProps<T> {
  url?: string;
  query?: queryProps;
  body?: T;
}

export const getAllCamposByUserId = async <T>({ url }: FuntionProps<T>) =>
  await api.get(`/campo/user/${url}`);

export const createCampo = async <T>({ body }: FuntionProps<T>) =>
  await api.post("/campo", body);
