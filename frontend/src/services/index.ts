import { FuntionProps, QueryProps } from "@/types/generalTypes";
import api from "./api";
import createQuerys from "@/utils/createQuerys";

//  User services

export const registerUser = <T>({ body }: FuntionProps<T>) =>
  api.post("/auth/register", body);

export const loginUser = <T>({ body }: FuntionProps<T>) =>
  api.post("/auth/login", body);

export const getUserById = <T>({ url }: FuntionProps<T>) => {
  return api.get(`/data/${url}`);
};

// Clima services

export const getWeatherForecast = async <T>({ querys }: FuntionProps<T>) =>
  await api.get(`/clima/forescast?${createQuerys(querys as QueryProps)}`);

// Campo services

export const getAllCamposByUserId = async <T>({ url }: FuntionProps<T>) =>
  await api.get(`/campo/user/${url}`);

export const createCampo = async <T>({ body }: FuntionProps<T>) =>
  await api.post("/campo", body);

// Market services

export const getMarketGrainPrices = async () => await api.get("/market");
export const getExchangeRates = async () => await api.get("/dollar");
