import api from "./api";

interface queryProps {
  [key: string]: string;
}

interface FuntionProps<T> {
  url?: string;
  querys?: queryProps;
  body?: T;
}

const createQuerys = (query: queryProps) => {
  let querys = "";
  for (let key in query) {
    if (querys.length) querys += "&";
    querys += `${key}=${query[key]}`;
  }
  return querys;
};

export const getWeatherForecast = async <T>({ querys }: FuntionProps<T>) =>
  await api.get(`/clima/forescast?${createQuerys(querys as queryProps)}`);
