import { FuntionProps } from "@/types/generalTypes";
import api from "./api";

export const getAllCamposByUserId = async <T>({ url }: FuntionProps<T>) =>
  await api.get(`/campo/user/${url}`);

export const createCampo = async <T>({ body }: FuntionProps<T>) =>
  await api.post("/campo", body);
