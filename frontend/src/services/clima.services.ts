import { FuntionProps, QueryProps } from "@/types/generalTypes";
import api from "./api";

const createQuerys = (query: QueryProps) => {
  let querys = "";
  for (let key in query) {
    if (querys.length) querys += "&";
    querys += `${key}=${query[key]}`;
  }
  return querys;
};

export const getWeatherForecast = async <T>({ querys }: FuntionProps<T>) =>
  await api.get(`/clima/forescast?${createQuerys(querys as QueryProps)}`);
